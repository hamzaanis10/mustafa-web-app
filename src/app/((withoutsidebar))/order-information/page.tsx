"use client";
import './order-information.scss';
import AppBreadCrumb from "@/components/common/app.breadcrumb/app.breadcrumb";
import React, { useState, useEffect } from "react";
import { MenuItem } from "primereact/menuitem";
import AppShippingAddress from "@/components/common/app.shipping.address/app.shipping.address";
import AppPriceDetail from "@/components/common/app.price.detail/app.price.detail";
import AppPaymentMethod from "@/components/common/app.payment.method/app.payment.method";
import AppDialog from "@/components/common/app.dialog/app.dialog";
import AppBillingAddress from "@/components/common/app.billing.addresss/app.billing.address";
import AppSavedContent from "@/components/common/app.order.information/app.saved.address.content";
import AppShippingAddressForm from "@/components/common/app.order.information/app.shipping.address.form";
import AppNewShippingAddressForm from "@/components/common/app.order.information/app.new.shipping.address.form";
import AppBillingAddressForm from '../../../components/common/app.order.information/app.billing.address.form';
import AppButton from '@/components/common/app.button/app.button';
import AppCouponCard from '@/components/common/app.coupon.card/app.coupon.card';
import AppToggleButton from '@/components/common/app.toggle.button/app.toggle.button';
import AppSideBar from '@/components/common/app.sidebar/app.side.bar';
import AppOrderDetail from '@/components/common/app.order.detail/app.order.detail';


const page = () => {
  const [openSavedAddressForm, setOpenSavedAddressForm] = useState<boolean>(false);
  const [openAddressForm, setOpenAddressForm] = useState<boolean>(false);
  const [openNewAddressForm, setOpenNewAddressForm] = useState<boolean>(false);
  const [openBillingForm, setOpenBillingForm] = useState<boolean>(false);
  // const items: MenuItem[] = OrderInfo_BreadCrumb;
  const [visibleRight, setVisibleRight] = useState<boolean>(false);
  const [availibility, setAvailibilty] = useState<string>("Available");

  const openCouponDialog = () => {
    setVisibleRight(true);
  }

  const handleAvailibilityChange = (newValue: string) => {
    setAvailibilty(newValue);
  };

  const toggleOptions = ['Available', 'Unavailable'];

  // const toggleBillingForm = () =>{
  //   setOpenBillingForm(!openBillingForm)
  // }

  const openDialogForm = () => {
    setOpenSavedAddressForm(true);
    setOpenAddressForm(false);
    setOpenNewAddressForm(false);
  };

  const closeDialogForm = () => {
    setOpenSavedAddressForm(false);
    setOpenAddressForm(false);
    setOpenNewAddressForm(false);
  };

  const openDialogAddressForm = () => {
    setOpenAddressForm(true);
    setOpenSavedAddressForm(false);
    setOpenNewAddressForm(false);
  };
  const openNewAddressDialog = () => {
    setOpenNewAddressForm(true);
    setOpenSavedAddressForm(false);
    setOpenAddressForm(false);
  };

  return (
    <div id="Order_Information">
      <div className="flex justify-content-center align-items-center bg-white fixed w-full z-1">
        {/* <AppBreadCrumb model={items} /> */}
      </div>
      <div className="grid">
        <div className="col-12  sm:col-12 md:col-8 lg:col-8">
          <div
            className="px-3 xl:mx-6  lg:mx-6  md:mx-6  sm:mx-3 mx-3"
            style={{ marginTop: "6rem" }}
          >
            <div
              className="p-4 bg-white border-round "
              style={{ width: "100%" }}
            >
              <span className="text-2xl font-semibold ml-2">
                Shipping Address
              </span>
              <AppShippingAddress
                iconImage={true}
                removeIcon={true}
                label="Yan Zhang"
                description="No 17, Jalan MH 1, Taman Muzaffar Heights, 75450 Ayer Keroh,Melaka, Malaysiass"
                onClick={openDialogForm}
              />
            </div>
            <div className="mt-3">
              <AppOrderDetail AppDeliveryAddress={true} />
            </div>

            <div
              className="p-4 bg-white border-round my-3 "
              style={{ width: "100%" }}
            >
              <span className="text-2xl font-semibold ml-2">
                Billing Address
              </span>
              <div className="flex flex-column gap-2 pl-3 mt-3">
                <AppBillingAddress
                  label="Same as shipping address"
                  checked={!openBillingForm}
                  onClick={() => setOpenBillingForm(false)}
                />
                <AppBillingAddress
                  label="Use a different billing address"
                  checked={openBillingForm}
                  onClick={() => setOpenBillingForm(!openBillingForm)}
                />
              </div>
              {openBillingForm && (<AppBillingAddressForm />)}
            </div>
            <div className="mb-3">
              <AppPaymentMethod />
            </div>
          </div>
        </div>
        <div className="col-12 sm:col-12 md:col-4 lg:col-4">
          <div className="mx-4 md:mx-0 lg:mx-0  md:mr-3 lg:mr-3   md:fixed lg:fixed price-detail">
            <AppPriceDetail openCouponDialog={openCouponDialog} />
          </div>
        </div>        {visibleRight ?
          (
            <div>
              <AppSideBar
                visible={visibleRight}
                onHide={() => setVisibleRight(false)}
                position="right"
                className="w-27rem"
                id="couponSideBar"
              >
                <p className="coupon-heading">My Coupons</p>
                <AppToggleButton selectedValue={availibility} onOptionChange={handleAvailibilityChange} options={toggleOptions} id="couponSideBar-toggle" />
                <div className="coupon-card-scroll">
                  <AppCouponCard
                    brand="KFC"
                    discount="25% OFF"
                    title="KFC"
                    validity="Valid until 03 March 2022"
                  />

                  <AppCouponCard
                    brand="KBC"
                    discount="1 Free Coffee"
                    title="KBC"
                    validity="Valid until 03 March 2022"
                  />

                  <AppCouponCard
                    brand="BBC"
                    discount="Pay 1 take 2"
                    title="Bbc"
                    validity="Valid until 03 October 2022"
                  />

                  <AppCouponCard
                    brand="BBC"
                    discount="Pay 1 take 2"
                    title="Bbc"
                    validity="Valid until 03 October 2022"
                  />
                  <AppCouponCard
                    brand="BBC"
                    discount="Pay 1 take 2"
                    title="Bbc"
                    validity="Valid until 03 October 2022"
                  />
                  <AppCouponCard
                    brand="BBC"
                    discount="Pay 1 take 2"
                    title="Bbc"
                    validity="Valid until 03 October 2022"
                  />
                </div>
                <div className="sticky-bottom">
                  <AppButton label='Clear Coupon' style={{ backgroundColor: "transparent", color: '#00CB56', height: '50px' }} />
                </div>
              </ AppSideBar >
            </div>
          ) : null
        }
      </div>

      {openSavedAddressForm && (
        <AppDialog
          header="Saved Address"
          visible={openSavedAddressForm}
          onHide={closeDialogForm}
          className="w-22rem sm:w-28rem md:w-30rem lg:w-30rem xl:w-30rem"
          id="Saved-Address"
        >
          <AppSavedContent
            openAddressForm={openDialogAddressForm}
            openNewAddressForm={openNewAddressDialog}
          />
        </AppDialog>
      )}

      {openAddressForm && (
        <AppDialog
          header="Shipping Address"
          visible={openAddressForm}
          modal
          onHide={closeDialogForm}
          id="Shipping-Address-Page"
          className='dialogwidth'
        >
          <AppShippingAddressForm />
        </AppDialog>
      )}

      {openNewAddressForm && (
        <AppDialog
          header="Add New Address"
          visible={openNewAddressForm}
          modal
          onHide={closeDialogForm}
          id="New-Address-Page"
          className='dialogwidth'
        >
          <AppNewShippingAddressForm />
        </AppDialog>
      )}
    </div>
  );
};

export default page;
