import React, { useState } from "react";
import AppButton from "../app.button/app.button";
import AppPriceTable from "./app.price.table";
import { useCartSummary } from "@/app/hooks/fetch/cart";
import ProductBarSkeleton from "@/skeletons/horizontal.bars.skeleton/product.bar.skeleton";
import IframeDialog from "../iframe.dialog/iframe.dialog";
import { getRandomNumber } from "../util/util";

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
  const [state, setState] = useState({
    iframUrl: ""
  })
  const showAddCardForm = () => {
    const billingAddress = encodeURI(JSON.stringify({
      addressLine1: "House 155",
      addressLine2: "",
      city: "Malaysia",
      countryId: "MY",
      countryName: "Malaysia",
      email: "abdullah.shams@cloudasset.com",
      firstName: "Muhammad",
      lastName: "Abdullah",
      latitude: 0,
      longitude: 0,
      // phoneCountryCode: address && address.get("phoneCountryCode"),
      // phoneFlagCode: address && address.get("phoneFlagCode"),
      // phoneNumber: address && address.get("phoneNumber"),
      //postalCode: address && address.get("postalCode"),
      state: "Malaysia"
    }))
    let webViewUrl = `https://mustafa-core.cloudasset.com/api/v1/cybersource/pay-by-card-number?billingAddress=${billingAddress}&language=EN&platform=IOS&orderId=24225015619506225061938778465702&X-Device-Serial=FB2DB5AB-F13C-4EFC-9BF9-8BB30F61F4C7&udid=${getRandomNumber()}`
    setState({ ...state, iframUrl: webViewUrl })
  }
  const onHide = () => {
    setState({ ...state, iframUrl: "" })
  }

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
        <AppButton onClick={showAddCardForm} label="Place Order" />
      </div>
      {
        state.iframUrl ?
          <IframeDialog
            iframeSrc={state.iframUrl}
            isIframeDialogOpen={true}
            hideIframeDialog={onHide}
            {...props}
          /> : null
      }
    </>
  );
};

export default AppPriceDetail;
