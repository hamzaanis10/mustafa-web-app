import "./app.order.summary.details.info.scss"
import { ScrollTop } from "primereact/scrolltop";

interface AppOrderSummaryDetailsInfoProps {
    orderID?: string,
    orderTime?: string,
    companyName?: string,
    trackingNumber?: string,
    refundID?: string,
    refundAmount?: number,
    refundTime?: string,
    returnMethod?: string,
    refundMethod?: string,
    message?: string,
    refundPage?: Boolean
}

const AppOrderSummaryDetailsInfo: React.FC<AppOrderSummaryDetailsInfoProps> = (props: any) => {
    const { orderID, orderTime, companyName, trackingNumber, refundID, refundAmount, refundTime, returnMethod, refundMethod, message, refundPage } = props;

    return (
        <div id="orderSummaryDetailsInfo">
            {!refundPage ? (
                <div className="p-5 bg-white border-round" style={{ width: "100%", maxWidth: "800px" }}>
                    <div className='mb-4'>
                        <p className='font-semibold my-2'>Order ID</p>
                        <p className='m-0 mutedColor'>{orderID}</p>
                    </div>

                    <div className='mb-4'>
                        <p className='font-semibold my-2'>Order Time</p>
                        <p className='m-0 mutedColor'>{orderTime}</p>
                    </div>

                    <div className='mb-4'>
                        <p className='font-semibold my-2'>Shipping company</p>
                        <p className='m-0 mutedColor'>{companyName}</p>
                    </div>

                    <div className='mb-4'>
                        <p className='font-semibold my-2'>Tracking number</p>
                        <p className='m-0 mutedColor'>{trackingNumber}</p>
                    </div>
                </div>
            ): (
                <div className="p-5 bg-white border-round" style={{ width: "100%", maxWidth: "800px" }}>
                <div className='mb-4'>
                    <p className='font-semibold my-2'>Refund ID</p>
                    <p className='m-0 mutedColor'>{refundID}</p>
                </div>

                <div className='mb-4'>
                    <p className='font-semibold my-2'>Refund amount</p>
                    <p className='m-0 mutedColor'>$ {refundAmount?.toFixed(2)}</p>
                </div>

                <div className='mb-4'>
                    <p className='font-semibold my-2'>Refund Time</p>
                    <p className='m-0 mutedColor'>{refundTime}</p>
                </div>

                <div className='mb-4'>
                    <p className='font-semibold my-2'>Return method</p>
                    <p className='m-0 mutedColor'>{returnMethod}</p>
                </div>

                <div className='mb-4'>
                    <p className='font-semibold my-2'>Refund method</p>
                    <p className='m-0 mutedColor'>{refundMethod}</p>
                </div>

                <div className='mb-4'>
                    <p className='font-semibold my-2'>Message</p>
                    <p className='m-0 mutedColor'>{message}</p>
                </div>
                
            </div>
            )}

            <div className="card flex flex-column align-items-center">
                <ScrollTop
                    icon={"pi pi-arrow-up"}
                    style={{
                        padding: "30px",
                        color: "#00CB56",
                        background: "#FFFFFF",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.1)",
                    }}
                />
            </div>
        </div>

    )
}

export default AppOrderSummaryDetailsInfo
