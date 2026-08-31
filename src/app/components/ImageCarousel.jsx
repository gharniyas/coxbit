"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageCarousel({ images, alt = "", intervalMs = 3000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);
  }, [images]);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      intervalMs
    );
    return () => clearInterval(timer);
  }, [images, intervalMs]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[3/2] rounded-xl overflow-hidden shadow mb-6 bg-gray-50">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image src={src} alt={alt} fill className="object-contain" />
        </div>
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show image ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current ? "bg-white w-4" : "bg-white/50 w-2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
