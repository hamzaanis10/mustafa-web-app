import React, { useMemo, useState } from "react";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import './app.counter.button.css';
import { debounce } from 'lodash';
import { createAction } from "@reduxjs/toolkit";
import { isActionLoading } from "../util/util";

export default function AppCounterButton(props: any) {
  const { cartProduct, product, dispatch, userCart } = props;
  let cartQuantity = cartProduct && cartProduct.get('product') && Number(cartProduct.get('product').get('quantity')) || 0;
  const [currentValue,setCurrentValue] =useState(cartQuantity)
  const updateCart = useMemo(() => {
    return debounce(async (value: any) => {
      return new Promise<void>((resolve, reject) => {
        if (Number(value) == 0) {

        }
        else {
          if (product && cartProduct) {
            const updateTProductToCart = createAction(`UPDATE_CART_${product.id}`, (dataR: any = {}, dt: any = {}) => ({
              payload: {
                data: dataR,
                details: dt,
                url: `v1/cart/stock/${cartProduct.get('stockId')}/product?id=${product.id}`,
                method: 'PUT'
              }
            }));
            dispatch(updateTProductToCart({
              productId: product && product.id,
              quantity: value
            }, {
              //userCart: userCart,
              productId: product && product.id,
              quantity: value,
              userCart:  userCart && userCart.toJS(),
              //   cartsMutate: cartsMutate,
              mutationKeys: ['v1/cart/count', 'v1/cart']
            }))
          }
        }
        resolve();
      });
    }, 350);
  }, []);
  const onValueChange = (e: any) => {
    updateCart(e.value);
    setCurrentValue(e.value)
  }
  return (
    <div className="card pt-2 pb-2 flex justify-content-center w-4rem m-auto" id="add-more-item">
      <InputNumber
        //pi pi-spin pi-spinner
        value={cartProduct && cartProduct.get('product') && cartProduct.get('product').get('quantity')}
        //onValueChange={(e: InputNumberValueChangeEvent) => setValue(e?.value)}
        showButtons
        onValueChange={onValueChange}
        buttonLayout="horizontal"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon={isActionLoading(`UPDATE_CART_${product.id}`) && currentValue > cartQuantity  ? "pi pi-spin pi-spinner" : "pi pi-plus"}
        decrementButtonIcon={isActionLoading(`UPDATE_CART_${product.id}`) && currentValue < cartQuantity ? "pi pi-spin pi-spinner" : "pi pi-minus"}
        min={0}
        useGrouping={false}
      />
    </div>
  );
}
