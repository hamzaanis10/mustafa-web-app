
import React, { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { appLoaderStatusSelector } from '@/store/selectors/app.selectors';

export default function ErrorMessages() {
    const toast = useRef<Toast>(null);
    const appLoaderState = appLoaderStatusSelector();

    useEffect(() => {
        const errorMessages: any = appLoaderState && appLoaderState.filter((loaderStatus: any) => loaderStatus.get('status') === 'ERROR');
        errorMessages && errorMessages.forEach((element: any) => {
            if (element && element.get('error')) {
                toast.current?.show({ severity: 'error', summary: '', detail: element.get('error').get('message'), life: 3000 });
            }
        });
    }, [appLoaderState])

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
        </div>
    )
}
