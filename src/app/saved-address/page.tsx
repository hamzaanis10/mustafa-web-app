 "use client"
import AppButton from '@/components/common/app.button/app.button'
import './page.css'
import AppShippingAddress from '@/components/common/app.shipping.address/app.shipping.address'
import React, { useState } from 'react'


function SavedDialog(props:any) {
  return (
    <div>
            <AppShippingAddress  iconImage={false} label='Yan Zhang' description='No 17, Jalan MH 1, Taman Muzaffar Heights, 75450 Ayer Keroh, Melaka, Malaysiass' onClick={props.onClick}  />
            <AppShippingAddress iconImage={true} label='Name name' description='No 17, Jalan MH 1, Taman Muzaffar Heights, 75450 Ayer Keroh, Melaka, Malaysiass'  />
            <div className='flex align-items-center justify-content-start mx-4 mb-3 border-1 border-gray-300 border-round px-3 py-3 cursor-pointer'>
                    <i className="pi pi-plus text-md mr-2 text-green-400 border-circle p-1" style={{backgroundColor:"#E6FFED"}} ></i>
                    <span className='text-sm text-green-400' >Add new address</span>
                </div>
           <div className="mx-3">
            <AppButton label='Confirm' />
            <AppButton label='Back' style={{ backgroundColor: "transparent" , color:'#00CB56' }}  />
           </div> 

               
    </div>
  )
}

export default SavedDialog
