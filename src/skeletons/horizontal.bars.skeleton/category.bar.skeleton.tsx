// SliderComponent.tsx
"use client";
import React from "react";
import { Skeleton } from "primereact/skeleton";

interface LoaderSkeletonProps {
  count?: number;
}

const CategoryBarSkeleton: React.FC<LoaderSkeletonProps> = ({ count = 7 }) => {
  const skeletonItems = Array.from({ length: count }).map((_, index) => (
    <div className="flex flex-column align-items-center p-3 text-sm md:text-base"  style={{ background: "#fff", height:"fit-content" }}>
      <Skeleton key={index} width="6rem" height="6rem" className="mb-2 border-circle" />
      <Skeleton key={index} width="9rem" height="2rem" className="mb-2" />
    </div>
  ));
  return (
    <div
      className="flex flex-row justify-content-center p-3 gap-2 " style={{ borderRadius:'5px'}} >
      {skeletonItems}
    </div>
  );
};

export default CategoryBarSkeleton;
