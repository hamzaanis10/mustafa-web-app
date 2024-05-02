// SliderComponent.tsx
"use client";
import React from "react";
import { Skeleton } from "primereact/skeleton";

interface LoaderSkeletonProps {
  count?: number;
}

const HorizontalBarSkeleton: React.FC<LoaderSkeletonProps> = ({ count=7 }) => {
  const skeletonItems = Array.from({ length: count }).map((_, index) => (
    <Skeleton key={index} width="20rem" height="3rem" className="mb-2" />
  ));
  return (
    <div
      className="flex flex-column min-h-screen"
      style={{ background: "#fff" }}
    >
      {skeletonItems}
    </div>
  );
};

export default HorizontalBarSkeleton;
