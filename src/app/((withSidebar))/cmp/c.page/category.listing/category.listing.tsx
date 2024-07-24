"use client";
import React, {useState, useEffect} from "react";
import "./category.listing.css";
import { PRODUCTS_PAGE_SIZE } from "@/components/common/util/util";
import { useSystemConfig } from "@/app/hooks/fetch/app";
import { useCategoriesList } from "@/app/hooks/fetch/categories";
import CategoryBox from "@/components/common/category.box/category";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import CategoryBarSkeleton from "@/skeletons/horizontal.bars.skeleton/category.bar.skeleton";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  discountedPrice: any;
  rating: number;
}

export default function CategoryListing() {
  const {
    data: categoryList,
    isLoading: productsLoading,
    error,
  } = useCategoriesList({
    size: PRODUCTS_PAGE_SIZE,
    sortBy: "total_sale_count",
    sortDir: "desc",
  });

  const [skeletonCount, setSkeletonCount] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setSkeletonCount(getSkeletonCount());
      };

      setSkeletonCount(getSkeletonCount());
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  const getSkeletonCount = () => {
    if (typeof window === "undefined") return 5; // Default value if window is undefined

    const width = window.innerWidth;
    if (width <= 575) return 1;
    if (width <= 1024) return 3;
    if (width <= 1199) return 4;
    return 5;
  };

  const pList: any = categoryList ? categoryList.toJS() : [];

  const { data: systemConfig, isLoading: systemConfigLoading } = useSystemConfig();

  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = (product: Product) => {
    return (
      <CategoryBox
        product={product}
        systemConfig={systemConfig}
      />
    );
  };

  return (
    <>
      {productsLoading ? (
        <CategoryBarSkeleton count={skeletonCount} />
      ) : (
        <div id="categoryListing" className="mb-3">
            <div className="text-2xl mb-5  " style={{ color: "#009736", fontWeight:"500" }}>
               Category Name
            </div>
          <Carousel
            value={pList}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={itemTemplate}
            showIndicators={false}
          />
        </div>
      )}
    </>
  );
}
