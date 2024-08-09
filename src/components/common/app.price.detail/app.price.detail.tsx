import React from "react";
import AppButton from "../app.button/app.button";
import AppPriceTable from "./app.price.table";
import { useCartSummary } from "@/app/hooks/fetch/cart";
import ProductBarSkeleton from "@/skeletons/horizontal.bars.skeleton/product.bar.skeleton";

interface AppPriceDetailProps {
  openCouponDialog: () => void;
}

const AppPriceDetail: React.FC<AppPriceDetailProps> = (props: any) => {
  const { data: cartSummary, isLoading: isCartSummaryLoading } = useCartSummary(
    {},
    {
      revalidateIfStale: true,
    }
  );

  const cartSummaryDetails = cartSummary?.toJS();
  return (
    <>
      <div className="mb-3">
        <span className="text-2xl font-semibold">Price Details</span>
      </div>
      {isCartSummaryLoading ? (
        <ProductBarSkeleton />
      ) : (
        <AppPriceTable
          cartSummaryDetails={cartSummaryDetails}
          openCouponDialog={props.openCouponDialog}
        />
      )}
      <div className="mt-3">
        <AppButton label="Place Order" />
      </div>
    </>
  );
};

export default AppPriceDetail;
