// SliderComponent.tsx
"use client";
import React from "react";
import { Skeleton } from "primereact/skeleton";

const BannerBarSkeleton: React.FC = () => {
  return (
    <Skeleton
      width='1920px'
      height='359px'
      className="mb-2"
    />
  );
};

export default BannerBarSkeleton;
