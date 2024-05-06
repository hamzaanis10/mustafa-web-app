import { http, trailingSlash } from "@/app/@utilities";
import queryString from 'query-string';

export const fetcher = (url: string) => http(url).then((res) => res.data).catch(({ response }) => response.data);
//prettier-ignore
export const fetcher2 = (url: string, params:any) => {
   return http.get(url, params).then((res) => res.data).catch(({ response }) => response.data);
}

export function makeKey(path: string, params?: Record<string, any>) {
    return params ? `${trailingSlash(path)}?${queryString.stringify(params)}` : `${trailingSlash(path)}`;
}

export function useKey(path: string, params?: Record<string, any>) {
    let finalQuery = { ...params };
    return makeKey(path, finalQuery);
}