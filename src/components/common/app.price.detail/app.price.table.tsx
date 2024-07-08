interface AppPriceTableProps {
  openCouponDialog: () => void
}
const AppPriceTable: React.FC<AppPriceTableProps> = (props: any) => {

  return (
    <div>
      <table>
        <tbody>
          <tr className="text-base font-normal">
            <td>items total:</td>
            <td style={{ color: "#9D9D9D", float: "right" }}>€100.00</td>
          </tr>
          <tr className="text-base font-normal ">
            <td>items discount:</td>
            <td style={{ color: "#FF4C72", float: "right" }}>€10.00</td>
          </tr>
          <tr className="text-base font-normal ">
            <td>items subtotal:</td>
            <td style={{ color: "#9D9D9D", float: "right" }}>€100.00</td>
          </tr>
          <tr className="text-2xl" style={{ height: '20px' }}>
            <td colSpan={2}></td>
          </tr>
          <tr className="text-base font-normal ">
            <td>Delivery fee:</td>
            <td style={{ float: "right" }}>
              €00.00 <del style={{ color: "#9D9D9D" }}> €100.00</del>
            </td>
          </tr>
          <tr className="text-2xl" style={{ height: '20px' }}>
            <td colSpan={2}></td>
          </tr>
          <tr className="text-base ">
            <td style={{ color: "#434343", fontWeight: 600 }}>Coupons</td>
            <td style={{ color: "#00CB56", float: "right" }} onClick={props.openCouponDialog}>
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
            <td style={{ color: "#434343", float: "right" }}>€90.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AppPriceTable;