import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const manifestPath = path.join(root, "src", "app", "lib", "cloudinary-manifest.json");
const maxUnsignedUploadBytes = 10 * 1024 * 1024;
const envPath = path.join(root, ".env.local");
const imageExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".svg",
  ".webp",
]);

async function loadEnvFile() {
  if (!existsSync(envPath)) return;
  const contents = await readFile(envPath, "utf8");
  for (const line of contents.split(/\r?\n/)) {
    const match = line.match(/^([^#=\s]+)\s*=\s*(.*)$/);
    if (!match) continue;
    const [, key, value] = match;
    process.env[key] ||= value.trim();
  }
}

async function listImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listImages(fullPath)));
    } else if (imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

function publicPathFor(filePath) {
  return `/${path.relative(publicDir, filePath).replaceAll(path.sep, "/")}`;
}

function publicIdFor(publicPath) {
  return `coxbit${publicPath.replace(/\.[^/.]+$/, "").replaceAll("&", "and")}`;
}

async function uploadImage(filePath, publicPath) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  let buffer = await readFile(filePath);
  let uploadName = path.basename(filePath);

  if (buffer.byteLength > maxUnsignedUploadBytes) {
    buffer = await sharp(buffer)
      .rotate()
      .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();
    uploadName = `${path.basename(filePath, path.extname(filePath))}.jpg`;
  }

  if (buffer.byteLength > maxUnsignedUploadBytes) {
    buffer = await sharp(buffer)
      .jpeg({ quality: 68, mozjpeg: true })
      .toBuffer();
  }

  if (buffer.byteLength > maxUnsignedUploadBytes) {
    throw new Error(`File remains too large after optimization: ${buffer.byteLength}`);
  }

  const blob = new Blob([buffer]);
  const formData = new FormData();

  formData.append("file", blob, uploadName);
  formData.append("upload_preset", uploadPreset);
  formData.append("public_id", publicIdFor(publicPath));

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || `Upload failed: ${response.status}`);
  }

  return data.secure_url;
}

async function main() {
  await loadEnvFile();

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error("Missing NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME or NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET.");
  }

  const existingManifest = existsSync(manifestPath)
    ? JSON.parse(await readFile(manifestPath, "utf8"))
    : {};
  const force = process.argv.includes("--force");
  const images = await listImages(publicDir);
  const manifest = { ...existingManifest };
  let uploaded = 0;
  let skipped = 0;

  for (const filePath of images) {
    const publicPath = publicPathFor(filePath);
    if (!force && manifest[publicPath]) {
      skipped += 1;
      continue;
    }

    process.stdout.write(`Uploading ${publicPath}... `);
    try {
      manifest[publicPath] = await uploadImage(filePath, publicPath);
      uploaded += 1;
      process.stdout.write("done\n");
    } catch (error) {
      process.stdout.write(`failed: ${error.message}\n`);
    }
  }

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Finished. Uploaded ${uploaded}, skipped ${skipped}.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
