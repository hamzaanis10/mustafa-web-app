// components/MyTieredMenu.tsx

"use client";

import { CATEGORY_MENU_ITEMS } from "@/components/common/util/util";
import "./menu.category.css";
import MenuCategoryStyle from "./menu.category.style";

const CategoryMenuItems: React.FC = () => {
  return (
      <MenuCategoryStyle
        model={CATEGORY_MENU_ITEMS}
        breakpoint="992px"
        className="w-full border-none text-base font-medium pt-0 aside-container"
      />
  );
};

export default CategoryMenuItems;
