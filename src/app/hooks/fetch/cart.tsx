import useSWR from "swr";
import { fetcher2, useKey } from ".";
import { fromJS } from "immutable";
import { useRefToastContext } from "@/app/toast.wrapper";

export function useCartsList(params: any = {}) {
    const key = useKey(`v1/cart`, params);
    const appToastRef = useRefToastContext();
    //appToastRef.current?.show({ severity: 'error', summary: '', detail: 'test', life: 3000 });
    const { data, error, isLoading, mutate } = useSWR<any>(key, (url: any) => fetcher2(url,
        {
            ...params,
            appToastRef,
            method: 'GET',
            type: 'GET_CARTS'
        }));

    return {
        mutate,
        data: fromJS(data),
        isLoading,
        error
    };
}

export function useTotalCartItems(params: any = {}) {
    const key = useKey(`v1/cart/count`, params);
    const appToastRef = useRefToastContext();
    //appToastRef.current?.show({ severity: 'error', summary: '', detail: 'test', life: 3000 });
    const { data, error, isLoading, mutate } = useSWR<any>(key, (url: any) => fetcher2(url,
        {
            ...params,
            appToastRef,
            method: 'GET',
            type: 'GET_TOTAL_CART_ITEMS'
        }));

    return {
        mutate,
        data: fromJS(data),
        isLoading,
        error
    };
}
