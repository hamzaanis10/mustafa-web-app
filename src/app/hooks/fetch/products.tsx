import useSWR from "swr";
import { fetcherPost, useKey } from ".";
import { fromJS } from "immutable";
import { useRefToastContext } from "@/app/toast.wrapper";

export function useProductList(params: any = {}) {
    const key = useKey(`v1/product/list`, params);
    const appToastRef = useRefToastContext();
    //appToastRef.current?.show({ severity: 'error', summary: '', detail: 'test', life: 3000 });
    const { data, error, isLoading, mutate } = useSWR<any>(key, (url: any) => fetcherPost(url,
        {
            ...params,
            appToastRef,
            method: 'POST',
            type: 'GET_PRODUCTS'
        }));

    return {
        mutate,
        data: fromJS(data),
        isLoading,
        error
    };
}