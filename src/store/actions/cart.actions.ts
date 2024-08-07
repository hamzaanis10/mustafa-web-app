import { createAction } from "@reduxjs/toolkit";

export const addProductToCart = createAction('ADD_PRODUCT_TO_CART', (data: any = {}, additionalData: any = {}) => ({
    payload: {
        data: data,
        additionalData: additionalData,
        url: `v1/cart?id=${data.productId}`,
        method: 'PUT'
    }
}));

export const resetTesting = createAction('RESET_ADD_PRODUCT_TO_CART', (data: any = {}, additionalData: any = {}) => ({
    payload: {
        resetActionNames: ["ADD_PRODUCT_TO_CART"]
    }
}));




// export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
// export const RESET_ADD_PRODUCT_TO_CART = "RESET_ADD_PRODUCT_TO_CART";
// export const GET_CART = "GET_CART";
// export const RESET_GET_CART = "RESET_GET_CART";
// export const DELETE_CART = "DELETE_CART";
// export const RESET_DELETE_CART = "RESET_DELETE_CART";
// export const UPDATE_CART = "UPDATE_CART";
// export const RESET_UPDATE_CART = "RESET_UPDATE_CART";
// export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
// export const RESET_DELETE_PRODUCT_FROM_CART = "RESET_DELETE_PRODUCT_FROM_CART";
// export const GET_TOTAL_CART_ITEMS = "GET_TOTAL_CART_ITEMS";
// export const RESET_TOTAL_CART_ITEMS = "RESET_TOTAL_CART_ITEMS";
// export const GET_CART_SUMMARY = "GET_CART_SUMMARY";
// export const RESET_GET_CART_SUMMARY = "RESET_GET_CART_SUMMARY";
// export const CONVERT_GUEST_CART = "CONVERT_GUEST_CART";
// export const RESET_CONVERT_GUEST_CART = "RESET_CONVERT_GUEST_CART";
// export const GET_DELIVERY_METHODS = "GET_DELIVERY_METHODS";
// export const RESET_GET_DELIVERY_METHODS = "RESET_GET_DELIVERY_METHODS";
// export const CREATE_ORDER = "CREATE_ORDER";
// export const RESET_CREATE_ORDER = "RESET_CREATE_ORDER";

// export function createOrder(data,details = {}) {
//     return {
//         tag: 'CART',
//         type: CREATE_ORDER,
//         data,
//         method: 'POST',
//         url: 'v1/order/create',
//         payload: {...details}
//     }
// }
// export function resetCreateOrder() {
//     return {
//         tag: 'CART',
//         type: RESET_CREATE_ORDER,
//         payload: {
//             resetActionNames: ["CREATE_ORDER"]
//         }
//     }
// }

// export function getDeliveryMethods(details = {}) {
//     return {
//         tag: 'CART',
//         type: GET_DELIVERY_METHODS,
//         url: 'v1/delivery/methods',
//         payload: {...details}
//     }
// }
// export function resetGetDeliveryMethods() {
//     return {
//         tag: 'CART',
//         type: RESET_GET_DELIVERY_METHODS,
//         payload: {
//             resetActionNames: ["GET_DELIVERY_METHODS"]
//         }
//     }
// }

// export function convertGuestCart(data,details = {}) {
//     return {
//         tag: 'CART',
//         method: 'POST',
//         data,
//         type: CONVERT_GUEST_CART,
//         url: 'v1/cart/convert-guest-cart',
//         payload: {...data,details}
//     }
// }
// export function resetConvertGuestCart() {
//     return {
//         tag: 'CART',
//         type: RESET_CONVERT_GUEST_CART,
//         payload: {
//             resetActionNames: ["CONVERT_GUEST_CART"]
//         }
//     }
// }

// export function getCartSummary(data,details = {}) {
//     return {
//         tag: 'CART',
//         method: 'POST',
//         data,
//         type: GET_CART_SUMMARY,
//         url: 'v1/order/calculate-price',
//         payload: {...data,details}
//     }
// }
// export function resetGetCartSummary() {
//     return {
//         tag: 'CART',
//         type: RESET_GET_CART_SUMMARY,
//         payload: {
//             resetActionNames: ["GET_CART_SUMMARY"]
//         }
//     }
// }
// export function getTotalCartItems(details = {}) {
//     return {
//         tag: 'CART',
//         type: GET_TOTAL_CART_ITEMS,
//         url: 'v1/cart/count',
//         payload: details
//     }
// }
// export function resetGetTotalCartItems() {
//     return {
//         tag: 'CART',
//         type: RESET_TOTAL_CART_ITEMS,
//         payload: {
//             resetActionNames: ["GET_TOTAL_CART_ITEMS"]
//         }
//     }
// }

// export function getCart(details = {}) {
//     return {
//         tag: 'CART',
//         type: GET_CART,
//         url: 'v1/cart',
//         payload: details
//     }
// }
// export function resetGetCart() {
//     return {
//         tag: 'CART',
//         type: RESET_GET_CART,
//         payload: {
//             resetActionNames: ["GET_CART"]
//         }
//     }
// }

// export function updateCart(data, details = {}) {
//     if (Number(data.quantity) == 0) {
//         return {
//             tag: 'CART',
//             type: details.actionType ? `${details.actionType}` : `${UPDATE_CART}_${data.productId}`,
//             cancelAllSimilarRequests: true,
//             data: {
//                 stockId: details.stockId,
//                 productId: data.productId,
//                 variantIds: data.variantIds
//             },
//             url: data.variantIds ? `v1/cart/product?id=${data.productId}&theVariantIds=${data.variantIds.join(',')}` : `v1/cart/product?id=${data.productId}`,
//             method: "DELETE",
//             payload: { ...data, ...details }
//         }
//     }
//     else {
//         return {
//             tag: 'CART',
//             type: details.actionType ? `${details.actionType}` : `${UPDATE_CART}_${data.productId}`,
//             cancelAllSimilarRequests: true,
//             data,
//             url: data.variantIds ? `v1/cart/stock/${details.stockId}/product?id=${data.productId}&theVariantIds=${data.variantIds.join(',')}` : `v1/cart/stock/${details.stockId}/product?id=${data.productId}`,
//             method: "PUT",
//             payload: { ...data, ...details }
//         }
//     }
// }
// export function resetUpdateCart(actionNames = []) {

//     return {
//         tag: 'CART',
//         type: RESET_UPDATE_CART,
//         payload: {
//             cancelAllSimilarRequests: true,
//             resetActionNames: actionNames ? actionNames : ["UPDATE_CART"]
//         }
//     }
// }

// export function deleteCart(details = {}) {
//     return {
//         tag: 'CART',
//         type: DELETE_CART,
//         url: 'v1/cart?action=deletethecart',
//         method: "DELETE",
//         payload: details
//     }
// }
// export function resetDeleteCart() {
//     return {
//         tag: 'CART',
//         type: RESET_DELETE_CART,
//         payload: {
//             resetActionNames: ["DELETE_CART"]
//         }
//     }
// }

// export function addProductToCart(data, details = {}) {
//     return {
//         tag: 'CART',
//         type: `${ADD_PRODUCT_TO_CART}_${data.productId}`,
//         url: `v1/cart?id=${data.productId}`,
//         method: "PUT",
//         cancelAllSimilarRequests: true,
//         data,
//         payload: { ...data, ...details }
//     }
// }
// export function resetAddProductToCart(actionNames =[]) {
//     return {
//         tag: 'CART',
//         type: RESET_ADD_PRODUCT_TO_CART,
//         payload: {
//             cancelAllSimilarRequests: true,
//             resetActionNames: actionNames ?  actionNames : ["ADD_PRODUCT_TO_CART"]
//         }
//     }
// }

// export function deleteProductFromCart(data, details = {}) {
//     return {
//         tag: 'CART',
//         type: DELETE_PRODUCT_FROM_CART,
//         url: 'v1/cart/product',
//         method: "DELETE",
//         payload: { ...data, ...details }
//     }
// }
// export function resetDeleteProductFromCart() {
//     return {
//         tag: 'CART',
//         type: RESET_DELETE_PRODUCT_FROM_CART,
//         payload: {
//             resetActionNames: ["DELETE_PRODUCT_FROM_CART"]
//         }
//     }
// }