// SliderComponent.tsx
"use client";
import { useState, useEffect } from "react";
import React from "react";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import Image from "next/image";
import { useBannersList } from "@/app/hooks/fetch/banners";
import { useSystemConfig } from "@/app/hooks/fetch/app";
import BannerBarSkeleton from "@/skeletons/horizontal.bars.skeleton/banners.bars.skeleton";

interface Image {
  source: string;
  alt: string;
}

const AppHomeBanner: React.FC = () => {
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setImageWidth(1920);
        setImageHeight(230);
      } else {
        setImageWidth(375);
        setImageHeight(230);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const {
    mutate,
    data: banners,
    isLoading: bannersLoading,
    error,
  } = useBannersList();

  const { data: systemConfig, isLoading: systemConfigLoading } =
    useSystemConfig();
  const itemTemplate = (item: any) => {
    return (
      <Image
        src={`${
          systemConfig &&
          systemConfig.get("fileUploadBaseUrl") &&
          systemConfig.get("fileUploadBaseUrl")
        }${item.imagePath}`}
        alt={item.alt}
        className="dark:invert"
        width={imageWidth}
        height={imageHeight}
        priority
      />
    );
  };

  return (
    <div className="carousel-container" style={{ overflow: "hidden", background:"#fff" }}>
    {bannersLoading && systemConfigLoading ? (
      <BannerBarSkeleton />
    ) : (
      <>
        {banners &&
        banners.size > 0 &&
        systemConfig &&
        systemConfig.size > 0 ? (
          <Carousel
            value={banners.toJS()}
            itemTemplate={itemTemplate}
            numVisible={1}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            showNavigators={false}
            autoplayInterval={3000}
          />
        ) : null}
      </>
    )}
  </div>
  );
};

export default AppHomeBanner;
