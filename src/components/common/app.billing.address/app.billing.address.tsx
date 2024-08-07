import React from 'react'
import AppCheckBox from '../app.checkbox/app.checkbox'

interface AppBillingAddressProps{
    title?:string;
    label1?:string;
    label2?:string;

};

const AppBillingAddress:React.FC<AppBillingAddressProps>  = (props:any) => {
    const {title, label1, label2} = props;
  return (
    <div className='p-4 bg-white border-round '  style={{width:"100%", maxWidth:"800px"}}>
    <span className="text-2xl font-semibold ml-2"> {title} </span>
    <div className="flex flex-column gap-3 mt-4 ">
        <div className="flex align-items-center pl-3 ">
            <AppCheckBox checked  />
            <span className='text-xs sm:text-sm md:text-base lg:text-base  font-normal'>{label1}</span>
        </div>
        <div className="flex align-items-center pl-3 ">
            <AppCheckBox checked/>
            <span className='text-xs sm:text-sm md:text-base lg:text-base  font-normal'>{label2}</span>
        </div>
      </div>
    </div>
  )
}

export default AppBillingAddress