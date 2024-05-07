"use client";
import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import './product.listing.css';
import { PRODUCTS_PAGE_SIZE } from "@/components/common/util/util";
import { useProductList } from "@/app/hooks/fetch/products";
import ProductBox from "@/components/common/product.box/product.box";

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
  discountedPrice: any,
  rating: number;
}

export default function ProductListing() {
  const {
    mutate,
    data: productsList,
    setSize,
    size,
    isLoading: productsLoading,
    error,
  } = useProductList({
    size: PRODUCTS_PAGE_SIZE,
    sortBy: "total_sale_count",
    sortDir: "desc",
    // sortBy2: "",
    // sortDir2: "",
    // keyword: "",
    //categoryId: "",
    categoryIds: [],// TODO to be user selec4ed cateogories
  });
  const pList: any = productsList ? [].concat(...productsList) : [];

  function isNearBottom() {
    const scrolledTo = window.scrollY + window.innerHeight;
    let scrollDiff = document.body.scrollHeight - scrolledTo;
    if (scrollDiff) {
      return true;
    }
    else return false;
  }

  const handleScroll = () => {
    if (isNearBottom()) {

    }
    // if (
    //   window.innerHeight + document.documentElement.scrollTop ===
    //   document.documentElement.offsetHeight
    // ) {
    //   setSize(size + 1)
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const itemTemplate = (product: Product) => {
    return (
      <ProductBox product={product} />
    );
  };
  const yes = () => {
    setSize(size + 1)
  }

  const listTemplate = (items: Product[]): any => {
    if (!items || items.length === 0) return null;

    let list = items.map((product) => {
      return itemTemplate(product);
    });

    return <div className="grid grid-gutter column-gap-3 row-gap-5">{list}</div>;
  };

  return (

    <div id="product-container" className="flex flex-wrap ">
      <Button onClick={yes}>yes</Button>
      <DataView value={pList} listTemplate={listTemplate} />
    </div>
  );
}
