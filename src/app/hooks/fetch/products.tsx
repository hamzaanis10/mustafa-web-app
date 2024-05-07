import { fetcherPost, useKey } from ".";
import { useRefToastContext } from "@/app/toast.wrapper";
import useSWRInfinite from "swr/infinite";

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
            }));

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