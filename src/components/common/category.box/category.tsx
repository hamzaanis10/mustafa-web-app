import { Card } from "primereact/card";
import React from "react";
import "./category.css";
import { CATEGORY_lIST } from "../util/util";
import { Carousel, CarouselProps, CarouselResponsiveOption } from "primereact/carousel";

interface CategoryBoxProps extends CarouselProps{

}

const CategoryBox: React.FC<CategoryBoxProps> = (props: any) => {
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 6,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = (CATEGORY_lIST: any) => {
    return (
      <Card
      className="w-8rem sm:w-8rem md:w-8rem xl:w-8rem shadow-none "
      style={{ height: "180px" , margin:"auto" }}
    >
      <div className="flex justify-content-center">
        {CATEGORY_lIST.image ? (
          <img
            className="block border-circle xl:block  "
            src={`https://primefaces.org/cdn/primereact/images/product/${CATEGORY_lIST.image}`}
            // src={`${systemConfig &&
            //     systemConfig.get("fileUploadBaseUrl") &&
            //     systemConfig.get("fileUploadBaseUrl")
            //     }${product.thumbnailImage}`}
            alt={"Category name"}
            width="90px"
            height="90px"
          />
        ) : (
          <div>
            <img
              className="block border-circle xl:block  "
              width="90px"
              height="90px"
              style={{ backgroundColor: "#D9D9D9" }}
            />
          </div>
        )}
      </div>
      <div className="flex flex-column align-items-center gap-1 mt-2">
        {CATEGORY_lIST.name ? (
          <div
            className="text-xs md:text-sm font-medium pt-1 pb-1"
            style={{ color: "#000000" }}
          >
            {CATEGORY_lIST.name}
          </div>
        ) : (
          <div>
            <span
              className="text-xs md:text-sm font-medium pt-1 pb-1"
              style={{ color: "#000000" }}
            >
              Category Name
            </span>
          </div>
        )}
      </div>
    </Card>
    );
  };

  return (
    <div className="card w-full">
      <Carousel
        value={CATEGORY_lIST}
        numScroll={1}
        numVisible={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={itemTemplate}
        showIndicators={false}
        // className="custom-circular"
        id="CategoryMenu"
       
      />
    </div>
  );
};

export default CategoryBox;
