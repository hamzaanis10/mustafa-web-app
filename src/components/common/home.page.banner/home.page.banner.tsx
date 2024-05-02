// SliderComponent.tsx
"use client";
import { useState, useEffect } from "react";
import React from "react";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { CAROUSEL_ITEMS } from "../util/util";
import Image from "next/image";
import { Skeleton } from "primereact/skeleton";

interface Image {
  source: string;
  alt: string;
}

const HomeBanner: React.FC = () => {
  const [carousel, setCarousel] = useState<Image[]>([]);
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
        setImageWidth(1150);
        setImageHeight(359);
      } else {
        setImageWidth(375);
        setImageHeight(550);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    CAROUSEL_ITEMS.getCarousel().then((item) => setCarousel(item.slice(0, 9)));
  }, []);

  const itemTemplate = (item: Image) => {
    return (
      <Skeleton
        className="carousel-item"
        width='100%'
        height='auto'
      >
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`images/${item.desktopSource}`}
          />
          <source
            media="(max-width: 575px)"
            srcSet={`images/${item.mobileSource}`}
          />

          <Image
            src={`/images/${item.desktopSource}`}
            alt={item.alt}
            className="dark:invert"
            width={imageWidth}
            height={imageHeight}
            priority
          />
        </picture>
      </Skeleton>
    );
  };

  return (
    <div className="carousel-demo" style={{ overflow: "hidden" }}>
      <Carousel
        value={carousel}
        itemTemplate={itemTemplate}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        showNavigators={false}
      />
    </div>
  );
};

export default HomeBanner;
