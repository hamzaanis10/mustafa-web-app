// SliderComponent.tsx
"use client";
import React from "react";
import { Skeleton } from "primereact/skeleton";

interface LoaderSkeletonProps {
  count?: number;
}

const CartBarSkeleton: React.FC<LoaderSkeletonProps> = ({ count = 7 }) => {
  const skeletonItems = Array.from({ length: count }).map((_, index) => (
    <div className="flex align-items-center justify-content-between  p-3 text-sm md:text-base">
      <Skeleton key={index} width="5rem" height="4rem" className="mb-2" />
      <Skeleton key={index} width="19rem" height="4rem" className="mb-2" />
    </div>
  ));
  return (
    <div
      className="flex flex-column min-h-screen p-3"
      style={{ background: "#fff" }}
    >
      {skeletonItems}
    </div>
  );
};

export default CartBarSkeleton;
