'use client'
// components/MyTieredMenu.tsx
import { getLanguageBaseName } from "@/components/common/util/util";
import "./menu.category.css";
import { TieredMenu } from "primereact/tieredmenu";
import { useCategoriesList } from "@/app/hooks/fetch/categories";
//import MenuCategoryStyle from "./menu.category.style";

const AppCategories: React.FC = () => {
  const {
    mutate,
    data,
    isLoading,
    error } = useCategoriesList();
  
  const transformHierarchy = (inputList:any) => {
    return inputList && inputList.length > 0 && inputList.map((item:any) => {
      const transformedItem:any = {
        id: item.id, // Change name of id to identifier
        label: item &&  getLanguageBaseName(item.name), // Change name of name to label
      };
      if (item && item.children && item.children.length > 0) {
        transformedItem.items = transformHierarchy(item.children); // Recursively transform children
      }
      return transformedItem;
    });
  };

  const menuItems = transformHierarchy(data && data.toJS());
  console.log(menuItems)
  return (
      <TieredMenu
        model={menuItems}
        breakpoint="992px"
        className="w-full border-none text-base font-medium pt-0 aside-container"
      />
  );
};
export default AppCategories;
