import { http, trailingSlash } from "@/app/@utilities";
import queryString from 'query-string';

export const fetcher = (url: string) => http(url).then((res) => res.data).catch(({ response }) => response.data);
//prettier-ignore
export const fetcher2 = (url: string, params: any) => {
    return http.get(url, params).then((res) => res.data).catch(({ response }) => {
        params?.appToastRef?.current?.show({ severity: 'error', summary: '', detail: response?.data?.message, life: 3000 });
        return response.data;
    });
}

export const fetcherPost = (url: string, params: any) => {
    return http.post(url, { page: 0, size: 20,  categoryIds: [

      ], }).then((res) => res.data).catch(({ response }) => {
        params?.appToastRef?.current?.show({ severity: 'error', summary: '', detail: response?.data?.message, life: 3000 });
      });
}

export function makeKey(path: string, params?: Record<string, any>) {
    return params ? `${trailingSlash(path)}?${queryString.stringify(params)}` : `${trailingSlash(path)}`;
}

export function useKey(path: string, params?: Record<string, any>) {
    let finalQuery = { ...params };
    return makeKey(path, finalQuery);
}