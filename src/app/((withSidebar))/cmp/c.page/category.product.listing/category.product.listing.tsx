"use client";
import React, { useEffect, useRef } from "react";
import { DataView } from "primereact/dataview";
import { PRODUCTS_PAGE_SIZE } from "@/components/common/util/util";
import { useCategoryProductList } from "@/app/hooks/fetch/products";
import ProductBox from "@/components/common/product.box/product.box";
import ProductBarSkeleton from "@/skeletons/horizontal.bars.skeleton/product.bar.skeleton";
import { useSystemConfig } from "@/app/hooks/fetch/app";
import { useAppDispatch } from "@/store/store";
import { useCartsList } from "@/app/hooks/fetch/cart";
import { ConfirmDialog } from "primereact/confirmdialog";

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

interface CategoryProductListingProps {
  categoryIds: string[];
}

export default function CategoryProductListing({ categoryIds }: CategoryProductListingProps) {
  const {
    mutate,
    data: productsList,
    setSize,
    size,
    isLoading: productsLoading,
    error,
  } = useCategoryProductList({
    size: PRODUCTS_PAGE_SIZE,
    sortBy: "total_sale_count",
    sortDir: "desc",
    categoryIds: categoryIds,
  });

  const { mutate: cartsMutate, data: userCart, isLoading: isCartsLoading, error: cartsListError } = useCartsList();
  const pList: any = productsList ? [].concat(...productsList) : [];

  function isMultipleOfProductListingSize(number: any) {
    return number % PRODUCTS_PAGE_SIZE === 0;
  }

  function getNextPageNumber(itemIndex: any) {
    return Math.floor(itemIndex / PRODUCTS_PAGE_SIZE) + 1;
  }

  const observerMap = useRef(new Map());

  const { data: systemConfig, isLoading: systemConfigLoading } = useSystemConfig();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const observeElement = (elementId: any) => {
      const observer = new IntersectionObserver(
        async (entries) => {
          if (entries[0].isIntersecting && !productsLoading) {
            const splitedId = entries[0].target.id && entries[0].target.id.split('-');
            if (splitedId && splitedId.length > 1) {
              const nextPageNumber = getNextPageNumber(Number(splitedId[1]));
              setSize(nextPageNumber);
            }
          }
        },
        {
          threshold: 0.1,
        }
      );

      observerMap.current.set(elementId, observer);

      const element = document.getElementById(elementId);
      if (element) observer.observe(element);
    };

    const cleanupObserver = (elementId: any) => {
      const observer = observerMap.current.get(elementId);
      if (observer) {
        observer.disconnect();
        observerMap.current.delete(elementId);
      }
    };

    pList && pList.forEach((item: any, index: any) => {
      let newIndex = index + 1;
      const elementId = `listitem-${index + 1}`;
      if (isMultipleOfProductListingSize(newIndex)) {
        const observer = observerMap.current.get(elementId);
        if (!observer) observeElement(elementId);
      }
    });

    return () => {
      observerMap.current.forEach((observer, elementId) => {
        cleanupObserver(elementId);
      });
    };
  }, [pList, productsLoading]);

  const itemTemplate = (product: Product, index: any) => {
    return (
      <ProductBox
        isCartsLoading={isCartsLoading}
        userCart={userCart}
        dispatch={dispatch}
        cartsMutate={cartsMutate}
        systemConfig={systemConfig}
        systemConfigLoading={systemConfigLoading}
        product={product}
        categoryId={categoryIds}
        index={index}
      />
    );
  };

  const listTemplate = (items: Product[], layout: any): any => {
    if (!items || items.length === 0) return null;

    let list = items.map((product, index) => {
      return itemTemplate(product, index);
    });

    return <div className="grid column-gap-3 row-gap-5 justify-content-center md:justify-content-start">{list}</div>;
  };

  const isLoadingMore = productsLoading || (size > 0 && productsList && typeof productsList[size - 1] === "undefined");

  return (
    <div id="product-container" className="flex flex-wrap gap-2">
      <ConfirmDialog />
      <DataView value={pList} listTemplate={listTemplate} />
      {isLoadingMore ? <ProductBarSkeleton /> : null}
    </div>
  );
}
