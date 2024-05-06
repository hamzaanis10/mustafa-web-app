import useSWR from "swr";
import { fetcher2, useKey } from ".";
import { fromJS } from "immutable";
import { useRefToastContext } from "@/app/toast.wrapper";

export function useCategoriesList(params: any = {}) {
    const key = useKey(`v1/category/tree`, params);
    const appToastRef = useRefToastContext();
    //appToastRef.current?.show({ severity: 'error', summary: '', detail: 'test', life: 3000 });
    const { data, error, isLoading, mutate } = useSWR<any>(key, (url: any) => fetcher2(url,
        {
            ...params,
            appToastRef,
            method: 'GET',
            type: 'GET_CATEGORIES'
        }));
    
    const theData: CategoryList[] = data;
    return {
        mutate,
        data: fromJS(theData),
        isLoading,
        error
    };
}