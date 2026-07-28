"use client";

import { useRef, useState, type ReactNode } from "react";

// Horizontal drag-to-scroll strip. Click-and-drag pans the cards (grab /
// grabbing cursor); touch devices use native horizontal swipe scroll.
export default function DragScroller({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const startRef = useRef({ x: 0, left: 0 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    setDragging(true);
    startRef.current = { x: e.clientX, left: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || !trackRef.current) return;
    trackRef.current.scrollLeft = startRef.current.left - (e.clientX - startRef.current.x);
  };

  const endDrag = () => setDragging(false);

  return (
    <div
      ref={trackRef}
      role="region"
      aria-label={ariaLabel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={`flex gap-5 overflow-x-auto no-scrollbar select-none pb-2 ${
        dragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      {children}
    </div>
  );
}
