"use client";

export default function RenderCurrentDate() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <span>{today}</span>
  );
}
