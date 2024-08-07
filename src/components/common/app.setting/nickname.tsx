import { InputText } from 'primereact/inputtext'
import React from 'react'
import AppButton from '../app.button/app.button'

export default function Nickname(props:any) {
    const {goBack} = props
  return (
    <div className="pt-6 flex flex-column align-items-center relative" style={{margin:"0 auto"}}>
    <div className="flex align-items-center justify-content-center pb-4">
    <i className="pi pi-angle-left text-5xl text-900 cursor-pointer mr-4" onClick={goBack} />
      <span className="text-4xl font-semibold"> Nick Name </span>
    </div>
    <div className='pt-5 container'>
    <div className="w-full">
          <InputText className="w-full" placeholder="emailaddress@gmail.com" />
          <i
            className="pi pi-times absolute"
            style={{ right: "10px", top: "152px" }}
          />
        </div>
    </div>
    <div className="w-20rem mt-7">
       <AppButton label='Save'/>
    </div>
</div>
  )
}
