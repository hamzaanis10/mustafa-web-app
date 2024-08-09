import React from "react";
import AppDeliveryMethod from "../app.delivery.method/app.delivery.method";
import { useCartsList, useCartSummary } from "@/app/hooks/fetch/cart";
import { useSystemConfig } from "@/app/hooks/fetch/app";
import { getAllCartProducts } from "../util/util";
import ProductBarSkeleton from "@/skeletons/horizontal.bars.skeleton/product.bar.skeleton";
import CartListItem from "../shopping.cart/cart.list.item";
import { useAppDispatch } from "@/store/store";
// import { CATEGORY_ORDER_LIST, CATEGORY_ORDER_LIST1 } from "../util/util";

interface AppOrderDetailProps {
  AppDeliveryAddress?: boolean;
}

const AppOrderDetail: React.FC<AppOrderDetailProps> = (props: any) => {
  const { AppDeliveryAddress } = props;
  const {
    mutate: cartsMutate,
    data: userCart,
    isLoading: isCartsLoading,
    error: cartsListError,
  } = useCartsList();
  const { data: cartSummary, isLoading: isCartSummaryLoading } = useCartSummary(
    {},
    {
      revalidateIfStale: true,
    }
  );

  const { data: systemConfig, isLoading: systemConfigLoading } =
    useSystemConfig();

  const cartProducts = getAllCartProducts(userCart && userCart.get("packages"));

  const dispatch = useAppDispatch();
  return (
    <div className="p-4 bg-white border-round" style={{ width: "100%" }}>
      <span className="text-2xl font-semibold ml-2"> Order details</span>

      <div>
        {cartProducts &&
          cartProducts.map((product: any, index: number) => {
            const prod = product && product.get("product");
            const isAvailable = prod && prod.get("available");
            return (
              <CartListItem
                {...props}
                userCart={userCart}
                systemConfig={systemConfig}
                key={index}
                dispatch={dispatch}
                isAvailable={isAvailable}
                cartProduct={product}
                showCounterButton={false}
                quantityShow={true}
                //productDetails={productDetails}
              />
            );
          })}
      </div>

      {isCartSummaryLoading && <ProductBarSkeleton />}

      <div className="mt-4">
        <AppDeliveryMethod
          title="Delivery Method"
          label="Standard delivery -"
          description="100% shipping fee off for order over 1000MYR"
          arrivalDate="Arrives between Saturdays, Jun 24 - Wednesday, Jun 28."
        />
      </div>
    </div>
  );
};

export default AppOrderDetail;
