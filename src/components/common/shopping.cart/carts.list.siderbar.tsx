// components/app.cart.item/app.cart.item.tsx

import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Checkbox } from "primereact/checkbox";
import { useState } from "react";
import { getAllCartProducts } from "../util/util";
import "./carts.list.sidebar.css";
// import AppCounterButton from "../app.counter.button/app.counter.button";
import { useCartSummary, useCartsList } from "@/app/hooks/fetch/cart";
import CartListItem from "./cart.list.item";
import { useSystemConfig } from "@/app/hooks/fetch/app";
import { useAppDispatch, useAppSelector } from "@/store/store";
import ProductBarSkeleton from "@/skeletons/horizontal.bars.skeleton/product.bar.skeleton";
import Link from "next/link";

const CartsListSidebar: React.FC<any> = (props: any) => {
  const { isOpen } = props;
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector((state) => state.login.isAuthenticated);
  const { mutate: cartsMutate, data: userCart, isLoading: isCartsLoading, error: cartsListError } = useCartsList();
  const { data: cartSummary, isLoading: isCartSummaryLoading } = useCartSummary({},{
    revalidateIfStale : true
  });
  const { data: systemConfig, isLoading: systemConfigLoading } =
  useSystemConfig();
  const [checked, setChecked] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const checkoutLink = isAuthenticated ? '/order-information' : '/order-information'

  const toggleItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const cartProducts = getAllCartProducts(userCart && userCart.get('packages'));

  console.log('cartSummary', cartSummary?.toJS())
  return (
    <Sidebar
      visible={isOpen}
      position="right"
      onHide={props.onHideSidebar} // Call parent function to hide the sidebar
      showCloseIcon={false}
      className="w-23rem md:w-30rem"
      id="cart-items">
      <div className="overflow-auto content-container" style={{ height: "80vh" }}>
        {
          cartProducts && cartProducts.map((product: any, index: number) => {
            const prod = product && product.get('product');
            const isAvailable = prod && prod.get('available');
            return <CartListItem
              {...props}
              userCart={userCart}
              systemConfig={systemConfig}
              key={index}
              dispatch={dispatch}
              isAvailable={isAvailable}
              cartProduct={product}
              showCounterButton={true}
              quantityShow={false}
            />

          })
        }
      </div>
      {
        isCartSummaryLoading  ?
        <ProductBarSkeleton /> :
        <div className="flex p-3 justify-content-between align-items-center fixed bottom-0 w-23rem md:w-29rem">
        <div className="flex flex-column">
          <p className="m-0 pb-2">{`Total ${cartSummary && cartSummary.get('currency')} ${cartSummary && cartSummary.get('orderFinalAmount')}`}</p>
        </div>
        <Link href={checkoutLink} passHref>
            <button
              className="border-none border-round-3xl pt-3 pr-4 pb-3 pl-4 lg:pt-3 lg:pr-8 lg:pb-3 lg:pl-8 text-1xl text-50"
              style={{ backgroundColor: '#00CB56', cursor: 'pointer' }}
            >
              Check Out
            </button>
          </Link>
      </div>
      }
     
    </Sidebar>
  );
};

export default CartsListSidebar;
