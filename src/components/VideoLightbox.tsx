"use client";

import { useEffect } from "react";
import type { WorkVideo } from "@/lib/videos";

// Modal video player. Plays an <video> for mp4 sources or an embedded <iframe>
// for YouTube/Vimeo. Mirrors the overlay/Escape/scroll-lock pattern used in
// src/components/GalleryMasonry.tsx.
export default function VideoLightbox({
  video,
  onClose,
}: {
  video: WorkVideo;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const embedUrl = () => {
    if (video.kind === "youtube") {
      // Accept a bare id, watch URL, or youtu.be URL
      const m = video.src.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
      const id = m ? m[1] : video.src;
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    if (video.kind === "vimeo") {
      const m = video.src.match(/(\d+)/);
      const id = m ? m[1] : video.src;
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    return video.src;
  };

  return (
    <div
      className="fixed inset-0 z-[950] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div
        className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {video.kind === "mp4" ? (
          <video
            src={video.src}
            poster={video.poster}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain bg-black"
          />
        ) : (
          <iframe
            src={embedUrl()}
            title={video.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>

      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 text-white text-xl hover:bg-white/20 transition"
      >
        ✕
      </button>
    </div>
  );
}
