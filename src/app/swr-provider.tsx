'use client';
import { SWRConfig } from 'swr'
export const SWRProvider = ({ children }: any) => {
    return <SWRConfig value={{ revalidateOnReconnect: true, errorRetryCount: 2 }}>
        {children}
    </SWRConfig>
};