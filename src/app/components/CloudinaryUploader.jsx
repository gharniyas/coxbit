"use client";

import { useMemo, useState } from "react";
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
  getCloudinaryUploadUrl,
} from "../lib/cloudinary";

export default function CloudinaryUploader() {
  const [files, setFiles] = useState([]);
  const [folder, setFolder] = useState("coxbit");
  const [uploading, setUploading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const ready = useMemo(
    () => Boolean(CLOUDINARY_CLOUD_NAME && CLOUDINARY_UPLOAD_PRESET),
    []
  );

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!ready || files.length === 0) return;

    setUploading(true);
    setError("");
    setResults([]);

    try {
      const uploaded = [];

      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        if (folder.trim()) {
          formData.append("folder", folder.trim());
        }

        const response = await fetch(getCloudinaryUploadUrl(), {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error?.message || `Upload failed for ${file.name}`);
        }

        uploaded.push({
          name: file.name,
          url: data.secure_url,
          publicId: data.public_id,
        });
      }

      setResults(uploaded);
      setFiles([]);
    } catch (err) {
      setError(err.message || "Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const copyUrl = async (url) => {
    await navigator.clipboard.writeText(url);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
          Cloudinary
        </p>
        <h1 className="font-serif text-3xl font-bold text-[#6b4226]">
          Image Uploads
        </h1>
      </div>

      <form
        onSubmit={handleUpload}
        className="bg-white border border-amber-200/70 rounded-sm shadow-sm p-6 space-y-5"
      >
        {!ready && (
          <div className="border border-red-200 bg-red-50 text-red-700 rounded-sm p-3 text-sm">
            Cloudinary environment values are missing. Check your .env.local file.
          </div>
        )}

        <label className="block">
          <span className="block text-sm font-semibold text-[#6b4226] mb-2">
            Folder
          </span>
          <input
            type="text"
            value={folder}
            onChange={(event) => setFolder(event.target.value)}
            className="w-full border border-amber-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#c89b3c]"
          />
        </label>

        <label className="block border border-dashed border-amber-300 bg-amber-50/60 rounded-sm p-6 text-center cursor-pointer">
          <span className="block text-sm font-semibold text-[#6b4226]">
            Choose images
          </span>
          <span className="block text-xs text-gray-600 mt-1">
            PNG, JPG, JPEG, GIF, SVG, WEBP
          </span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(event) => setFiles(Array.from(event.target.files || []))}
            className="sr-only"
          />
        </label>

        {files.length > 0 && (
          <div className="text-sm text-gray-700">
            {files.length} file{files.length === 1 ? "" : "s"} selected
          </div>
        )}

        {error && (
          <div className="border border-red-200 bg-red-50 text-red-700 rounded-sm p-3 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={!ready || files.length === 0 || uploading}
          className="bg-[#6b4226] text-white px-5 py-2.5 rounded-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#8a6a1f] transition-colors"
        >
          {uploading ? "Uploading..." : "Upload to Cloudinary"}
        </button>
      </form>

      {results.length > 0 && (
        <div className="mt-8 space-y-3">
          {results.map((item) => (
            <div
              key={item.url}
              className="bg-white border border-amber-200/70 rounded-sm p-4"
            >
              <p className="font-semibold text-[#6b4226]">{item.name}</p>
              <p className="text-xs text-gray-500 mt-1">{item.publicId}</p>
              <div className="mt-3 flex flex-col sm:flex-row gap-2">
                <input
                  readOnly
                  value={item.url}
                  className="flex-1 border border-gray-200 rounded-sm px-3 py-2 text-sm"
                />
                <button
                  type="button"
                  onClick={() => copyUrl(item.url)}
                  className="border border-[#6b4226] text-[#6b4226] px-4 py-2 rounded-sm text-sm font-semibold hover:bg-[#6b4226]/5"
                >
                  Copy Link
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
