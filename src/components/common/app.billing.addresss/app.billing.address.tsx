import React from 'react'
import AppCheckBox from '../app.checkbox/app.checkbox'

interface AppBillingAddressProps{
    label?:string;
    checked?:boolean;
    className?:string

};

const AppBillingAddress:React.FC<AppBillingAddressProps>  = (props:any) => {
    const { label,checked,className} = props;
  return (  
    <div className={`flex flex-column gap-3 ${className}`}>
        <div className="flex align-items-center" onClick={props.onClick}  >
            <AppCheckBox checked={checked}  />
            <span className='text-xs sm:text-sm md:text-base lg:text-base mt-2 font-normal'>{label}</span>
        </div>
      </div>
  )
}

export default AppBillingAddress
