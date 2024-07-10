// SliderComponent.tsx
"use client";
import React from "react";
import { Skeleton } from "primereact/skeleton";

interface LoaderSkeletonProps {
  count?: number;
}

const ProductBarSkeleton: React.FC<LoaderSkeletonProps> = ({ count = 7 }) => {
  const skeletonItems = Array.from({ length: count }).map((_, index) => (
    <div
      className="card w-11rem sm:w-14rem md:w-14rem xl:w-15rem"
      key={index}
    >
      <div className="border-round-3xl border-1 surface-border p-4 surface-card">
        <Skeleton width="100%" height="150px" className="mb-4"></Skeleton>
        <Skeleton width="5rem" className="mb-2"></Skeleton>
        <Skeleton width="100%" height="3rem" className="mb-2"></Skeleton>
        <Skeleton width="100%" height="2rem" className="mb-2"></Skeleton>
        <Skeleton width="100%" height="2rem" className="mb-2"></Skeleton>
        <Skeleton width="5rem" className="mb-2"></Skeleton>
        <Skeleton width="5rem" height="2rem" className="mb-2 m-auto"></Skeleton>
        <Skeleton width="4rem" height="2rem m-auto"></Skeleton>
      </div>
    </div>
  ));
  return <>{skeletonItems}</>;
};

export default ProductBarSkeleton;
