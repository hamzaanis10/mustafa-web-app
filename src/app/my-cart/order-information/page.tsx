"use client";
import React, { useState } from "react";
import "./page.scss";
import AppCategories from "@/app/((withsidebar))/cmp/c.layout/menu.category/menu.catrgory";
import AppShippingAddress from "@/components/common/app.shipping.address/app.shipping.address";
import AppOrderDetail from "@/components/common/app.order.detail/app.order.detail";
import AppOrderSummaryStatus from "@/components/common/app.order.summary.status/app.order.summary.status";
import AppOrderSummaryDetailsInfo from "@/components/common/app.order.summary.details.info/app.order.summary.details.info";
import AppButton from "@/components/common/app.button/app.button";
import {useRouter} from "next/navigation"

function page() {
    const currentState: string = "Completed"
    const refundPage: Boolean = false
    const navigate = useRouter()
    return (
        <div id="My_order" className="flex " style={{ backgroundColor: "#F5F5F5" }}>
            <div className="hidden lg:flex lg:w-3 lg:relative  z-2 menu-container">
                <AppCategories />
            </div>

            <div className="pt-4  m-auto flex flex-column align-items-center">
                <div className="flex align-items-center pb-4">
                    <i
                        className="pi pi-angle-left text-5xl text-900 cursor-pointer mr-4"
                    />
                    {refundPage ?
                        (
                            <span className="text-4xl font-semibold"> Refund Summary </span>
                        )
                        :
                        (
                            <span className="text-4xl font-semibold"> Order Summary </span>
                        )
                    }
                </div>
                <div className="Card bg-white p-4">
                    <AppShippingAddress  label='Yan Zhang' description='No 17, Jalan MH 1, Taman Muzaffar Heights, 75450 Ayer Keroh,Melaka, Malaysiass' removeIcon={false} />
                </div>
                <div className="Card mt-2">
                    <AppOrderSummaryStatus currentState={currentState} />
                </div>
                <div className="Card mt-2">
                    <AppOrderDetail AppDeliveryAddress={false} />
                </div>
                <div className="Card mt-2">
                    <AppOrderSummaryDetailsInfo
                        orderID="0000000000000000000"
                        orderTime="07 July 2023 21:50:27"
                        companyName="Company name"
                        trackingNumber="NUMBER123456789"
                        refundID="0000000000000000000"
                        refundAmount={50.00}
                        refundTime="07 July 2023 21:50:27"
                        returnMethod="Refund Only"
                        refundMethod="MUST wallet"
                        message="Message from Admin"
                        refundPage={refundPage}
                    />
                </div>

                {currentState === "To Deliver" ? (
                    <div className="w-13rem mt-4">
                        <AppButton label='Cancel this order' />
                    </div>
                ) : null}

                {currentState === "Pending" ? (
                    <div className="w-13rem mt-4">
                        <AppButton label='Cancel refund' />
                    </div>
                ) : null}

                {currentState === "Completed" ? (
                    <div className="flex gap-2">
                        <div className="w-11rem mt-4">
                            <AppButton label='Refund' style={{ backgroundColor: "transparent", color: '#00CB56' }} />
                        </div>

                        <div className="w-11rem mt-4">
                            <AppButton label='Review' onClick={()=>navigate.push('/my-cart/order-information/review')} />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default page;