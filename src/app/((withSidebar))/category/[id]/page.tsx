"use client";
import React from "react";
import {
  getLanguageBaseName,
  PRODUCTS_PAGE_SIZE,
} from "@/components/common/util/util";
import { useSystemConfig } from "@/app/hooks/fetch/app";
import { useCategoriesList } from "@/app/hooks/fetch/categories";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import CategoryListView from "@/components/common/category.list.view/category.list.view";
import CategoryBarSkeleton from "@/skeletons/horizontal.bars.skeleton/category.bar.skeleton";
import CategoryProductListing from "../../cmp/c.page/category.product.listing/category.product.listing";

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
  params: {
    id: string;
  };
}

interface Category {
  id: string;
  name: {
    en: string;
    zh: string;
    sg: string;
    ms: string;
  };
  children: Category[];
}

export default function CategoryListing({ params }: Product, props: any) {
  const categoryId = params.id;
  const {
    data: categoryList,
    isLoading: productsLoading,
    error,
  } = useCategoriesList({
    size: PRODUCTS_PAGE_SIZE,
    sortBy: "total_sale_count",
    sortDir: "desc",
  });

  const pList: Category[] = categoryList ? categoryList.toJS() : [];

  const { data: systemConfig, isLoading: systemConfigLoading } =
    useSystemConfig();

  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 8,
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
      numVisible: 2,
      numScroll: 1,
    },
  ];

  

  const getCategoryById = (id: string, categories: Category[]): Category | undefined => {
    for (let category of categories) {
      if (category.id === id) {
        return category;
      }
      if (category.children && category.children.length > 0) {
        const foundCategory = getCategoryById(id, category.children);
        if (foundCategory) {
          return foundCategory;
        }
      }
    }
    return undefined;
  };
  

  const category = getCategoryById(categoryId, pList);

  // Helper function to extract all child IDs recursively
  const getAllSubLevelCategoryIds = (category: Category): string[] => {
    let ids: string[] = [];
  
    ids.push(category.id);
    if (category.children && category.children.length > 0) {
      for (let child of category.children) {
        ids = ids.concat(getAllSubLevelCategoryIds(child));
      }
    }
  
    return ids;
  };

  const childCategoryIds = category ? getAllSubLevelCategoryIds(category) : [];

  const categoryName = category
    ? getLanguageBaseName(category.name)
    : '';

    const itemTemplate = (product: Product) => {
      return <CategoryListView product={product} systemConfig={systemConfig}  />;
    };

  return (
    <>
      {productsLoading ? (
        <CategoryBarSkeleton count={8} />
      ) : (
        <div
          id="categoryListing "
          className="overflow-hidden lg:w-9 xl:w-12  pb-8 pt-3"
        >
          <div
            className="text-2xl mb-5 pr-1 pl-4 "
            style={{ color: "#009736", fontWeight: "500" }}
          >
            {categoryName}
          </div>
          <div>
            <div className="carousel-list-view">
              <Carousel
                value={pList}
                numVisible={7}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                itemTemplate={itemTemplate}
                showIndicators={false}
              />
            </div>
          </div>
          <div className="md:p-5 md:pb-8 pb-8 pt-3 pr-1 pl-4 ">
            <CategoryProductListing 
            categoryIds={childCategoryIds}
            />
          </div>
        </div>
      )}
    </>
  );
}
