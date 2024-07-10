import React from "react";
import AppButton from "../app.button/app.button";
import AppPriceTable from "./app.price.table"

interface AppPriceDetailProps {
  openCouponDialog: () => void
}

const AppPriceDetail: React.FC<AppPriceDetailProps> = (props: any) => {
  return (
    <div className="bg-white border-round py-5 px-4 " style={{ width: "100%" , maxWidth:"500px"}}>
      <div className="mb-3">
        <span className="text-2xl font-semibold">Price Details</span>
      </div>
      <AppPriceTable openCouponDialog={props.openCouponDialog}/>
      <div className="mt-3">
        <AppButton label="Place Order" />
      </div>
    </div>
  );
}

export default AppPriceDetail;
