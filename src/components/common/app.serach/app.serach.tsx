// components/SearchInput.tsx

import React, { useState, ChangeEvent } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import {
  PRODUCTS_PAGE_SIZE,
} from "../util/util";
import { useProductList } from "@/app/hooks/fetch/products";
import { useRouter } from "next/navigation";

interface SearchTerm {
  id: string;
  nameSearch: string;
}

const AppSearch: React.FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [filteredTerms, setFilteredTerms] = useState<SearchTerm[]>([]);

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
    keyword: search,
    categoryIds: [], // TODO to be user selected categories
  });

  const pList: any = productsList ? [].concat(...productsList) : [];

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 0) {
      const filtered = pList.filter((product: any) => {
        const name = product.nameSearch;
        return name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredTerms(filtered);
    } else {
      setFilteredTerms([]);
    }
  };

  const clearSearch = () => {
    setSearch("");
    setFilteredTerms([]);
  };

  const isSearchNotEmpty = search.length > 0;

  const handleItemClick = (id: string) => {
    router.push(`/product/${id}`);
    clearSearch(); // Close the dropdown on item click
  };

  return (
    <div className="p-inputgroup flex-order-4 w-full mt-2 lg:flex-order-3 lg:w-6 xl:w-8 search-container relative">
      {search.length === 0 && (
        <Button
          icon="pi pi-search"
          className="h-3rem"
          style={{
            background: "#E6FFED",
            color: "#00CB56",
            border: "none",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "25px",
          }}
        />
      )}
      <InputText
        type="text"
        placeholder="Search"
        className="h-3rem"
        style={{
          background: "#E6FFED",
          border: "none",
          borderTopRightRadius: "25px",
          borderBottomRightRadius: "25px",
        }}
        value={search}
        onChange={onSearchChange}
      />
      {isSearchNotEmpty && (
        <i
          className="pi pi-times clear-icon absolute z-1"
          onClick={clearSearch}
          style={{
            background: "#fff",
            borderRadius: "50px",
            right: "20px",
            top: "6px",
            color: "#00CB56",
            padding: "10px",
          }}
        ></i>
      )}
      {filteredTerms.length > 0 && (
        <div
          className="absolute w-full top-100 bg-white mt-1 border-round-md"
          style={{ boxShadow: "#63636333 0px 2px 8px 0px" }}
        >
          {filteredTerms.slice(0, 7).map((term, index) => (
              <div
                key={index}
                className="p-2 pt-3 pb-3 border-bottom-1 surface-border flex gap-2"
                style={{ color: "#555555", cursor:"pointer" }}
                onClick={() => handleItemClick(term.id)}
              >
                <i className="pi pi-search mr-2"></i> {term.nameSearch}
              </div>
            ))}
          <div>
            <p className="pl-3">Trending Searches</p>
            <div className="flex gap-2 align-items-center flex-wrap pr-3 pb-4 pl-3">
              {/* {TRENDING_SEARCHES.map((item, index) => (
                <div
                  key={index}
                  className="pt-1 pr-3 pb-1 pl-3 border-round-3xl"
                  style={{ border: "1px solid #9D9D9D", color: "#555555" }}
                >
                  {item.name}
                </div>
              ))} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppSearch;
