// SliderComponent.tsx
"use client";
import React from "react";
import { Skeleton } from "primereact/skeleton";

const BannerBarSkeleton: React.FC = () => {
  return (
    <Skeleton
      width='100%'
      height='400px'
      className="mb-2"
    />
  );
};

export default BannerBarSkeleton;
