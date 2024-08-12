import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "./app.sort.products.css";

interface SortOption {
  name: string;
}

interface AppSortProductsProps {
  onSortChange: (sortOption: string) => void;
}

const AppSortProducts: React.FC<AppSortProductsProps> = ({ onSortChange }) => {
  const [selectedSortOption, setSelectedSortOption] = useState<string>("Recommend");

  const sortOptions: SortOption[] = [
    { name: "Recommend" },
    { name: "Newest" },
    { name: "Price: Low to high" },
    { name: "Price: High to low" },
    // { name: "Top Rated" },
  ];

  const sortOptionTemplate = (option: SortOption) => (
    <span>Sort by: {option.name}</span>
  );

  const handleSortChange = (e: { value: SortOption | null }) => {
    const sortOption = e.value?.name ?? "Recommend";
    setSelectedSortOption(sortOption);
    onSortChange(sortOption); // Notify parent of the change
  };

  return (
    <div className="card flex justify-content-start">
      <Dropdown
        valueTemplate={sortOptionTemplate}
        checkmark
        value={{ name: selectedSortOption }}
        options={sortOptions}
        optionLabel="name"
        placeholder="Select a Sort Option"
        onChange={handleSortChange}
        className="w-18rem"
        style={{
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "none",
          margin: "30px 0 0 20px",
          padding: "3px 0px 3px 10px",
          textAlign: "left",
          border: "none",
        }}
      />
    </div>
  );
};

export default AppSortProducts;
