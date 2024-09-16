import React from "react";

export default function TextSkeleton() {
  // Generate random width for skeleton loader
  const generateRandomWidth = () => {
    return Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  };

  return (
    <div
      className={`h-3 animate-pulse rounded-full bg-slate-300`}
      style={{ width: generateRandomWidth() }}
    />
  );
}
