import React from 'react'
import AppDialog from '../app.dialog/app.dialog';

const IframeDialog = (props:any) => {
    const { isIframeDialogOpen, iframeSrc } = props
    return (
        <AppDialog
            visible={isIframeDialogOpen}
            onHide={props.hideIframeDialog}
        >
            <div className='w-100'>
                <iframe title='iframe' style={{
                    height: 700,
                    width: 700
                }} src={iframeSrc} className='responsive-iframe' allow='fullScreen' />
            </div>
        </AppDialog >
    )
}

export default IframeDialog