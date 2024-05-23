import React, { useMemo, useState } from "react";
import {
  InputNumber
} from "primereact/inputnumber";
import './app.counter.button.css';
import { debounce } from 'lodash';
import { createAction } from "@reduxjs/toolkit";
import { getLanguageBaseName, isActionLoading } from "../util/util";
import { confirmDialog } from "primereact/confirmdialog";

export default function AppCounterButton(props: any) {
  const { cartProduct, product, dispatch, userCart } = props;
  let cartQuantity = cartProduct && cartProduct.get('product') && Number(cartProduct.get('product').get('quantity')) || 1;
  const [currentValue, setCurrentValue] = useState(cartQuantity);
  const onDelete = () => {
    if (product && cartProduct) {
      setCurrentValue(0)
      const updateTProductToCart = createAction(`UPDATE_CART_${product.id}`, (dataR: any = {}, dt: any = {}) => ({
        payload: {
          data: dataR,
          details: dt,
          url: `v1/cart/product?id=${product.id}`,
          method: 'DELETE'
        }
      }));
      dispatch(updateTProductToCart({
        productId: product && product.id,
        stockId: cartProduct && cartProduct.get('stockId')
      }, {
        //userCart: userCart,
        productId: product && product.id,
        quantity: 0,
        userCart: userCart && userCart.toJS(),
        //   cartsMutate: cartsMutate,
        mutationKeys: ['v1/cart/count', 'v1/cart']
      }))
    }
  }
  const updateCart = useMemo(() => {
    return debounce(async (value: any) => {
      return new Promise<void>((resolve, reject) => {
        if (cartQuantity == 1 && value == 1) {
          confirmDialog({
            message: `Are you sure you want to delete ${getLanguageBaseName(product?.name)}?`,
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept: onDelete,
            //reject
          });
          // here delete logic
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
              userCart: userCart && userCart.toJS(),
              //   cartsMutate: cartsMutate,
              mutationKeys: ['v1/cart/count', 'v1/cart']
            }))
          }
        }
        resolve();
      });
    }, 350);
  }, [cartQuantity, cartProduct]);
  const onValueChange = (e: any) => {
    updateCart(e.value);
    setCurrentValue(e.value)
  }
  return (
    <div className="card pt-2 pb-2 flex justify-content-center w-4rem m-auto" id="add-more-item">
      <InputNumber
        //pi pi-spin pi-spinner
        value={cartQuantity}
        //onValueChange={(e: InputNumberValueChangeEvent) => setValue(e?.value)}
        showButtons
        onValueChange={onValueChange}
        buttonLayout="horizontal"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon={isActionLoading(`UPDATE_CART_${product.id}`) && currentValue > cartQuantity ? "pi pi-spin pi-spinner" : "pi pi-plus"}
        decrementButtonIcon={isActionLoading(`UPDATE_CART_${product.id}`) && currentValue < cartQuantity ? "pi pi-spin pi-spinner" : "pi pi-minus"}
        min={1}
        useGrouping={false}
      />
    </div>
  );
}
