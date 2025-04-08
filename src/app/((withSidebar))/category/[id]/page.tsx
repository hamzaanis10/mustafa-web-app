"use client";
import React, { useState, useEffect } from "react";
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
import { useBrandList } from "@/app/hooks/fetch/brand";
import AppSideBar from "@/components/common/app.sidebar/app.side.bar";
import { Checkbox } from "primereact/checkbox";
import "./categories.css";
import { Button } from "primereact/button";
import AppSortProducts from "@/components/common/app.sort.products/app.sort.products";

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

interface CategoryListingProps {
  params: {
    id: string;
  };
}

export default function CategoryListing({ params }: CategoryListingProps) {
  const [selectedSortOption, setSelectedSortOption] = useState<string>("Recommend");
  const [visibleRight, setVisibleRight] = useState<boolean>(false);
  const [checkedItem, setCheckedItem] = useState<{ [key: string]: boolean }>( {});
  const categoryId = params.id;

  const handleSortChange = (sortOption: string) => {
    setSelectedSortOption(sortOption);
  };

  const {
    data: categoryList,
    isLoading: productsLoading,
    error,
  } = useCategoriesList({
    size: PRODUCTS_PAGE_SIZE,
    sortBy: "total_sale_count",
    sortDir: "desc",
  });

  const {
    data: brandList,
    error: brandError,
    isLoading,
  } = useBrandList({ categoryId });
  const brandListItems = brandList?.toJS();

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

  const getCategoryById = (
    id: string,
    categories: Category[]
  ): Category | undefined => {
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
  const categoryName = category ? getLanguageBaseName(category.name) : "";

  const itemTemplate = (product: Product) => {
    return <CategoryListView product={product} systemConfig={systemConfig} />;
  };

  const handleCheckBoxChange = (id: string, checked: boolean) => {
    setCheckedItem((prev) => {
      const updated = { ...prev, [id]: checked };
      return updated;
    });
  };

  // Get selected brand IDs
  const selectedBrandIds = Object.keys(checkedItem).filter(
    (key) => checkedItem[key]
  );

  return (
    <>
      {productsLoading ? (
        <CategoryBarSkeleton count={8} />
      ) : (
        <div
          id="categoryListing "
          className="overflow-hidden lg:w-9 xl:w-12 pb-8 pt-3"
        >
          <div
            className="text-2xl mb-5 pr-1 pl-4 "
            style={{ color: "#009736", fontWeight: "500" }}
          >
            {categoryName}
          </div>

          <AppSideBar
            visible={visibleRight}
            onHide={() => setVisibleRight(false)}
            position="right"
            className="w-18rem"
            id="productFilter"
          >
            <div className="content-container" style={{ height: "100vh" }}>
              <div
                className="p-2 mb-1"
                style={{ borderBottom: "1px solid #D9D9D9" }}
              >
                <div className="my-2">
                  <span
                    className="text-base font-semibold"
                    style={{ color: "#000000" }}
                  >
                    Brand
                  </span>
                </div>
                {brandListItems &&
                  brandListItems.map((item: any) => {
                    const key = item.id; // Use a unique identifier like item.id
                    return (
                      <div
                        className="flex align-items-center gap-2 mb-3"
                        key={key}
                      >
                        <Checkbox
                          checked={!!checkedItem[key]} // Ensure it defaults to false
                          onChange={(e) =>
                            handleCheckBoxChange(key, e.target.checked ?? false)
                          }
                          style={{ borderColor: "#E0E0E0" }}
                        />
                        <span
                          className="pt-2 text-base font-normal"
                          style={{ color: "#434343" }}
                        >
                          {getLanguageBaseName(item.name)}
                        </span>
                        <span className="pt-2" style={{ color: "#9D9D9D" }}>
                          {/* ({item.quantity}) */}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </AppSideBar>
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
          <div className="flex gap-3 align-items-center">
            <AppSortProducts onSortChange={handleSortChange} />
            <Button
              label={`Filter ${
                selectedBrandIds.length > 0
                  ? `(${selectedBrandIds.length})`
                  : ""
              }`}
              style={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "none",
                width: "10%",
                margin: "30px 0 0 20px",
                padding: "10px 0 10px 10px",
                textAlign: "left",
                border: "none",
              }}
              onClick={() => setVisibleRight(true)}
            />
          </div>
          <div className="md:p-5 md:pb-8 pb-8 pt-3 pr-1 pl-4 ">
            <CategoryProductListing
              categoryIds={childCategoryIds}
              brandIds={selectedBrandIds} // Pass selected brand IDs to CategoryProductListing
              sortOption={selectedSortOption}
            />
          </div>
        </div>
      )}
    </>
  );
}
