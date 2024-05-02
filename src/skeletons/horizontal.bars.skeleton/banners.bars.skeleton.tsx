// SliderComponent.tsx
"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Skeleton } from "primereact/skeleton";

const BannerBarSkeleton: React.FC = () => {
    const [imageWidth, setImageWidth] = useState<string>("0px"); 
    const [imageHeight, setImageHeight] = useState<string>("0px");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setImageWidth("100%"); 
        setImageHeight("491px");
      } else {
        setImageWidth("100%"); 
        setImageHeight("550px");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Skeleton
      width={imageWidth}
      height={imageHeight}
      className="mb-2"
    />
  );
};

export default BannerBarSkeleton;
