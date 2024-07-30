"use client";
// components/MyTieredMenu.tsx
import {
  getLanguageBaseName,
} from "@/components/common/util/util";
import "./menu.category.css";
import { TieredMenu } from "primereact/tieredmenu";
import { useCategoriesList } from "@/app/hooks/fetch/categories";
import HorizontalBarSkeleton from "@/skeletons/horizontal.bars.skeleton/horizontal.bars.skeleton";
import { useRouter } from "next/navigation";

const AppCategories: React.FC = () => {
  const router = useRouter();
  const { mutate, data, isLoading, error } = useCategoriesList();

  const transformHierarchy = (inputList: any, level: any) => {
    return (
      inputList &&
      inputList.length > 0 &&
      inputList.map((item: any) => {
        const transformedItem: any = {
          id: item.id, // Change name of id to identifier
          className: `level-${level}`,
          // label: (
          //   <Link href={`/category/${item.id}`} style={{textDecoration:"none", color:"inherit"}}>
          //     {getLanguageBaseName(item.name)}
          //   </Link>
          // ),
          label: item && getLanguageBaseName(item.name),
          command: () => {
            router.push(`/category/${item.id}`);
        }
        };
        if (item && item.children && item.children.length > 0) {
          transformedItem.items = transformHierarchy(item.children, level + 1); // Recursively transform children
        }
        return transformedItem;
      })
    );
  };

  const menuItems = transformHierarchy(data && data.toJS(), 1);
  return (
    <>
      {isLoading ? (
        <HorizontalBarSkeleton />
      ) : (
        <TieredMenu
          model={menuItems}
          breakpoint="992px"
          className="w-full border-none text-base font-medium pt-0 aside-container"
        />
      )}
    </>
  );
};
export default AppCategories;
