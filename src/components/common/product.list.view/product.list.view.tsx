"use client";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Card } from "primereact/card";
import { PRODUCT_lIST } from "../util/util";
import { DataView } from "primereact/dataview";
import './product.list.view.css';

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
  rating: number;
}

export default function ProductListView() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
  
      try {
        const newProducts = await PRODUCT_lIST;
        const filteredNewProducts = newProducts.slice(startIndex, endIndex);
  
        setProducts((prevProducts) => {
          const existingProductIds = prevProducts.map((product) => product.id);
          const uniqueNewProducts = filteredNewProducts.filter(
            (product) => !existingProductIds.includes(product.id)
          );
  
          return [...prevProducts, ...uniqueNewProducts];
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // User has scrolled to the bottom
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getSeverity = (product: Product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

  const itemTemplate = (product: Product) => {
    return (
      <Card className="md:w-14rem xl:w-15rem border-round-3xl shadow-none" style={{height:"fit-content"}} key={product.id}>
           <img
            className="shadow-2 block xl:block"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            style={{ width: "100%" }}
          />
          <div>
            <div className="flex flex-row  align-items-center gap-2 pt-3">
              <span className="text-2xl font-medium">
                ${product.discountedPrice}
              </span>
              <span className="text-base">
                <del>${product.price}</del>
              </span>
            </div>
            <div className="flex flex-column gap-1">
              <div className="text-2xl font-medium pt-1 pb-1">{product.name}</div>
              <div className="text-700 pb-2">{product.description}</div>
            </div>
            <div className="flex flex-column gap-2 pb-2">
              <Rating value={product.rating} readOnly cancel={false}></Rating>
            </div>
          </div>

          <div className="flex flex-column lg:flex-row align-items-center xl:align-items-center justify-content-center lg:flex-1 gap-4">
            <div className="flex flex-row lg:flex-column align-items-center gap-4 lg:gap-2">
              <Button
                icon="pi pi-shopping-cart"
                label="Add to Cart"
                disabled={product.inventoryStatus === "OUTOFSTOCK"}
                className="border-none hover:border-none focus:border-none"
                style={{ background: "transparent", color: "#5A9429" }}
              ></Button>
              <Tag
                value={product.inventoryStatus}
                severity={getSeverity(product)}
              ></Tag>
            </div>
          </div>
        </Card>
    );
  };

  const listTemplate = (items: Product[]) => {
    if (!items || items.length === 0) return null;

    let list = items.map((product) => {
      return itemTemplate(product);
    });

    return <div className="grid grid-gutter column-gap-3 row-gap-5">{list}</div>;
  };

  return (

    <div id="product-container" className="flex flex-wrap ">
      <DataView value={products} listTemplate={listTemplate}/>
    </div>
  );
}
