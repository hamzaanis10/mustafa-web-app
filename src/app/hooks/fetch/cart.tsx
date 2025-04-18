import useSWR, { SWRConfiguration } from "swr";
import { fetcher2, fetcherPost, useKey } from ".";
import { fromJS } from "immutable";
import { useRefToastContext } from "@/app/toast.wrapper";

export function useCartsList(params: any = {}) {
  const key = useKey(`v1/cart`, params);
  const appToastRef = useRefToastContext();
  //appToastRef.current?.show({ severity: 'error', summary: '', detail: 'test', life: 3000 });
  const { data, error, isLoading, mutate } = useSWR<any>(key, (url: any) =>
    fetcher2(url, {
      ...params,
      appToastRef,
      method: "GET",
      type: "GET_CARTS",
    })
  );

  return {
    mutate,
    data: fromJS(data),
    isLoading,
    error,
  };
}

export function useCartSummary(
  params: any = {},
  swrOptions: SWRConfiguration = {}
) {
  let accessToken = null;
  if (typeof window !== "undefined" && window.sessionStorage) {
    accessToken = sessionStorage.getItem("accessToken");
  }
  const key = useKey(`v1/order/calculate-price`);
  const appToastRef = useRefToastContext();
  //appToastRef.current?.show({ severity: 'error', summary: '', detail: 'test', life: 3000 });
  const { data, error, isLoading, mutate } = useSWR<any>(
    key,
    (url: any) =>
      fetcherPost(url, {
        ...params,
        appToastRef,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
        type: "GET_CART_SUMMARY",
      }),
    swrOptions
  );

  return {
    mutate,
    data: fromJS(data),
    isLoading,
    error,
  };
}

export function useTotalCartItems(params: any = {}) {
  const key = useKey(`v1/cart/count`, params);
  const appToastRef = useRefToastContext();
  //appToastRef.current?.show({ severity: 'error', summary: '', detail: 'test', life: 3000 });
  const { data, error, isLoading, mutate } = useSWR<any>(key, (url: any) =>
    fetcher2(url, {
      ...params,
      appToastRef,
      method: "GET",
      type: "GET_TOTAL_CART_ITEMS",
    })
  );

  return {
    mutate,
    data: fromJS(data),
    isLoading,
    error,
  };
}
