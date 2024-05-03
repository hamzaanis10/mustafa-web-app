import useSWR from "swr";
import { fetcher2, useKey } from ".";
import { fromJS } from "immutable";
import { useRefToastContext } from "@/app/toast.wrapper";

export function useBannersList(params: any = {}) {
    const key = useKey(`v1/banners`, params);
    const appToastRef = useRefToastContext();
    //appToastRef.current?.show({ severity: 'error', summary: '', detail: 'test', life: 3000 });
    const { data, error, isLoading, mutate } = useSWR<any>(key, (url: any) => fetcher2(url,
        {
            ...params,
            appToastRef,
            method: 'GET',
            type: 'GET_BANNERS'
        }));
    const theData: BannerList[] = data;
    return {
        mutate,
        data: fromJS(theData),
        isLoading,
        error
    };
}