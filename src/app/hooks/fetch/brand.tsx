import { useRefToastContext } from "@/app/toast.wrapper";
import { fetcher2, makeKey, useKey } from ".";
import useSWR, { SWRConfiguration } from "swr";
import { fromJS } from "immutable";



export function useBrandList(params: any = {}) {
    const key = makeKey(`v1/brand/list?categoryId=${params.categoryId}`);
    
    const appToastRef = useRefToastContext();
    //appToastRef.current?.show({ severity: 'error', summary: '', detail: 'test', life: 3000 });
    const { data, error, isLoading, mutate } = useSWR<any>(key, (url: any) => fetcher2(url,
        {
            ...params,
            appToastRef,
            method: 'GET',
            type: 'GET_BRANDS'
        }));
    
    return {
        mutate,
        data: fromJS(data),
        isLoading,
        error
    };
}
