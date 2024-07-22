import React from "react";

interface Size {
  name: string;
  weight?: string;
}

interface Dimension {
  name: string;
  value: string;
}

interface ProductSizeSelectorProps {
  sizes?: Size[];
  dimensions?: Dimension[];
  selectedSize: string;
  varianceAttribute: string;
  onSizeSelect?: (size: string) => void;
}

const ProductSizeSelector: React.FC<ProductSizeSelectorProps> = (
  props: ProductSizeSelectorProps
) => {
  const { sizes, dimensions, selectedSize, varianceAttribute, onSizeSelect } =
    props;

  return (
    <div className="mb-5">
      <div className="flex gap-2 align-items-center text-color text-lg font-semibold mb-4">
        {varianceAttribute}
      </div>
      <div className="flex gap-3 align-items-center">
        {sizes?.map((item: Size, index: number) => {
          const isSelected = selectedSize === String(item.name);
          return (
            <button
              key={index}
              onClick={() => onSizeSelect && onSizeSelect(String(item.name))}
              className="text-base cursor-pointer"
              style={{
                border: isSelected ? "none" : "1px solid #555555",
                padding: isSelected ? "10px 20px" : "8px 20px",
                borderRadius: "50px",
                backgroundColor: isSelected ? "#00CB56" : "",
                color: isSelected ? "#ffff" : "#555555",
                fontWeight: "600",
              }}
            >
              {item.name}
            </button>
          );
        })}
        {dimensions?.map((dimension: any, index: any) => {
          const isSelected = selectedSize === String(dimension.name);

          return (
            <button
              key={index}
              className="text-base font-semibold"
              style={{
                border: isSelected ? "none" : "1px solid #555555",
                padding: isSelected ? "10px 20px" : "8px 20px",
                borderRadius: "50px",
                backgroundColor: isSelected ? "#00CB56" : "",
                color: isSelected ? "#ffff" : "#555555",
                fontWeight: "600",
              }}
            >
              {dimension.name}: {dimension.value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSizeSelector;
