'use client'
import "./order-information.scss"
import { useState } from 'react';
import AppBreadCrumb from '@/components/common/app.breadcrumb/app.breadcrumb';
import { OrderInfo_BreadCrumb } from '@/components/common/util/util';
import { MenuItem } from 'primereact/menuitem';
import AppPaymentMethod from '@/components/common/app.payment.method/app.payment.method';
import AppShippingAddress from '@/components/common/app.shipping.address/app.shipping.address';
import AppOrderDetail from '@/components/common/app.order.detail/app.order.detail';
import AppBillingAddress from '@/components/common/app.billing.address/app.billing.address';
import AppPriceDetail from '@/components/common/app.price.detail/app.price.detail';
import AppSideBar from '@/components/common/app.sidebar/app.sidebar';
import AppToggleButton from '@/components/common/app.toggle.button/app.toggle.button';
import AppCouponCard from '@/components/common/app.coupon.card/app.coupon.card';
import AppButton from '@/components/common/app.button/app.button';

const page = () => {
  const [visibleRight, setVisibleRight] = useState<boolean>(false);
  const [availibility, setAvailibilty] = useState<string>("Available");
  const items: MenuItem[] = OrderInfo_BreadCrumb

  const openCouponDialog = () => {
    setVisibleRight(true);
  }

  const handleAvailibilityChange = (newValue: string) => {
    setAvailibilty(newValue);
  };

  const toggleOptions = ['Available', 'Unavailable'];

  return (
    <div>
      <div className="flex justify-content-center align-items-center">
        <AppBreadCrumb model={items} />
      </div>
      <div className='px-3 relative xl:mx-6 lg:mx-6 md:mx-6 sm:mx-3 mx-3'>
        <AppShippingAddress title='Shipping Address' label='Yan Zhang' description='No 17, Jalan MH 1, Taman Muzaffar Heights, 75450 Ayer Keroh,Melaka, Malaysiass' />
        <div className="mt-3">
          <AppOrderDetail AppDeliveryAddress={true} />
        </div>
        <div className="my-3">
          <AppBillingAddress title='Billing Address' label1='Same as shipping address' label2='Use a different billing address' />
        </div>
        <div className='mb-3'>
          <AppPaymentMethod />
        </div>
        <div className="absolute xl:top-0 xl:right-0 sm:right-0 md:right-0">
          <AppPriceDetail openCouponDialog={openCouponDialog} />
        </div>
        {visibleRight ?
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
    </div>
  )
}

export default page