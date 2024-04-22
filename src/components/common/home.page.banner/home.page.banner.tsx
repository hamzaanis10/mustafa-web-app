// SliderComponent.tsx
"use client";

import React from "react";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { CAROUSEL_ITEMS } from "../util/util";

interface Image {
  source: string;
  alt: string;
}

const HomeBanner: React.FC = () => {
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

  const itemTemplate = (item: Image) => {
    return (
      <div className="carousel-item">
        <picture >
          <source
            media="(min-width: 768px)"
            srcSet={`images/${item.desktopSource}`}
            style={{width:"100%"}}
          />
          <source
            media="(max-width: 575px)"
            srcSet={`images/${item.mobileSource}`}
            style={{width:"100%"}}
          />
          <img src={`images/${item.desktopSource}`} alt={item.alt}  style={{width:"100%"}}/>
        </picture>
      </div>
    );
  };

  return (
    <div className="carousel-demo">
      <Carousel
        value={CAROUSEL_ITEMS}
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
