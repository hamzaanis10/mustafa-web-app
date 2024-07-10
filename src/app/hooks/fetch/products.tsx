import { fetcher2, fetcherPost, useKey } from ".";
import { useRefToastContext } from "@/app/toast.wrapper";
import { fromJS } from "immutable";
import useSWR, { SWRConfiguration } from "swr";
import useSWRInfinite from "swr/infinite";

export function useProductDetails(params: any = {}, swrFetcherProps: SWRConfiguration) {
    const key = useKey(`v1/product/details/${params.productId}?productId=${params.productId}`);
    const appToastRef = useRefToastContext();
    //appToastRef.current?.show({ severity: 'error', summary: '', detail: 'test', life: 3000 });
    const { data, error, isLoading, mutate } = useSWR<any>(key, (url: any) => fetcher2(url,
        {
            ...params,
            appToastRef,
            method: 'GET',
            type: 'GET_PRODUCT_DETAILS'
        }), swrFetcherProps);

    return {
        mutate,
        data: fromJS(data),
        isLoading,
        error
    };
}



export function useProductList(params: any = {}) {
    const key = useKey(`v1/product/list`);
    const appToastRef = useRefToastContext();
    //appToastRef.current?.show({ severity: 'error', summary: '', detail: 'test', life: 3000 });
    const { data,
        mutate,
        size,
        setSize,
        isValidating,
        isLoading,
        error } = useSWRInfinite((index) => {
            return `${key}page=${index + 1}&per_page=${params.size}`
        }, (url: any) => fetcherPost(url,
            {
                ...params,
                appToastRef,
                method: 'POST',
                type: 'GET_PRODUCTS'
            }), {
            revalidateFirstPage: false
        });

    return {
        mutate,
        data: data,
        isLoading,
        size,
        isValidating,
        setSize,
        error
    };
}