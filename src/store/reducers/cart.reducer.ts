
  import {
    createReducer
  } from '@reduxjs/toolkit'
  import { fromJS } from 'immutable'

  const initialState = fromJS({
    userCart: undefined,
    userCartCount: undefined,
    cartSummary: undefined,
    deliveryMethods: undefined,
    paymentOrderId: undefined
});
  
  export const cartReducer = createReducer(initialState,
    (builder) => {
      builder
        // You can chain calls, or have separate `builder.addCase()` lines each time
        .addCase("ADD_PRODUCT_TO_CART_SUCCESS", (state: any, action: any) => {
            return state;
        })
        // You can apply a "matcher function" to incoming actions
        // and provide a default case if no other handlers matched
        .addDefaultCase((state, action) => {
          return state;
        })
    }
  )