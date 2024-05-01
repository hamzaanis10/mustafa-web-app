// components/MyTieredMenu.tsx
import { CATEGORY_MENU_ITEMS } from "@/components/common/util/util";
import "./menu.category.css";
import { TieredMenu } from "primereact/tieredmenu";
//import MenuCategoryStyle from "./menu.category.style";

const CategoryMenuItems: React.FC = () => {
  return (
      <TieredMenu
        model={CATEGORY_MENU_ITEMS}
        breakpoint="992px"
        className="w-full border-none text-base font-medium pt-0 aside-container"
      />
  );
};
export default CategoryMenuItems;
