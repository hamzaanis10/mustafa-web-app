interface AppPriceTableProps {
  openCouponDialog: () => void;
  cartSummaryDetails: any;
}
const AppPriceTable: React.FC<AppPriceTableProps> = ({
  openCouponDialog,
  cartSummaryDetails,
}) => {



  const deliveryFees = cartSummaryDetails?.packages?.map(
    (pkg: any) => pkg.deliveryFee
  );


  return (
    <div>
      <table className="w-full">
        <tbody>
          <tr className="text-base font-normal">
            <td>Items total:</td>
            <td style={{ color: "#9D9D9D", float: "right" }}>{cartSummaryDetails && cartSummaryDetails.currency} {cartSummaryDetails && cartSummaryDetails.itemsFinalAmount}</td>
          </tr>
          <tr className="text-base font-normal ">
            <td>Items discount:</td>
            <td style={{ color: "#FF4C72", float: "right" }}>{cartSummaryDetails && cartSummaryDetails.currency} {cartSummaryDetails && cartSummaryDetails.itemsDiscount}</td>
          </tr>
          <tr className="text-base font-normal ">
            <td>Items subtotal:</td>
            <td style={{ color: "#9D9D9D", float: "right" }}>{cartSummaryDetails && cartSummaryDetails.currency} {cartSummaryDetails && cartSummaryDetails.itemsSubTotal}</td>
          </tr>
          <tr className="text-2xl" style={{ height: '20px' }}>
            <td colSpan={2}></td>
          </tr>
          <tr className="text-base font-normal ">
            <td>Delivery fee:</td>
            <td style={{ float: "right" }}>
            {cartSummaryDetails && cartSummaryDetails.currency} {cartSummaryDetails && cartSummaryDetails.deliveryDiscount} <del style={{ color: "#9D9D9D" }}> {cartSummaryDetails && cartSummaryDetails.currency} {cartSummaryDetails && deliveryFees}</del>
            </td>
          </tr>
          <tr className="text-2xl" style={{ height: '20px' }}>
            <td colSpan={2}></td>
          </tr>
          <tr className="text-base ">
            <td style={{ color: "#434343", fontWeight: 600 }}>Coupons</td>
            <td style={{ color: "#00CB56", float: "right" }} onClick={openCouponDialog}>
              $2.3
              <i
                className="pi pi-angle-right ml-2"
                style={{ color: "#C4C4C4" }}
              />
            </td>
          </tr>
          <tr className="text-2xl" style={{ height: '20px' }}>
            <td colSpan={2}></td>
          </tr>
          <tr className="text-2xl">
            <td style={{ color: "#434343", fontWeight: 600 }}>Estimate total</td>
            <td style={{ color: "#434343", float: "right" }}>{cartSummaryDetails.currency} {cartSummaryDetails.orderFinalAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppPriceTable;