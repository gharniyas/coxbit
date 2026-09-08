import manifest from "./cloudinary-manifest.json";

export const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";

export const CLOUDINARY_UPLOAD_PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "";

export function resolveImageSrc(src) {
  if (!src || typeof src !== "string") return src;
  if (/^(https?:|data:|blob:)/.test(src)) return src;

  const normalized = src.startsWith("/") ? src : `/${src}`;
  return manifest[normalized] || src;
}

export function getCloudinaryUploadUrl() {
  if (!CLOUDINARY_CLOUD_NAME) return "";
  return `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;
}
