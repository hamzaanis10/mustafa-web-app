import React from 'react';
import AppCheckBox from '../app.checkbox/app.checkbox';

interface AppDeliveryMethodProps{
    title?:string;
    label?:string;
    description?:string;
    arrivalDate?:string;

};

const AppDeliveryMethod:React.FC<AppDeliveryMethodProps> = (props:any) => {
    const {title, label, description, arrivalDate} = props;
  return (
    <div  style={{width:"100%", maxWidth:"800px"}}>
      <span className="text-2xl font-semibold ml-2"> {title} </span>
      <div className="flex align-items-center border-1 border-green-400 mt-4 px-3">
        <div className="flex align-items-center">
          <AppCheckBox checked  />
          <div className="flex my-1 mx-1 sm:mx-3 md:mx-4 lg:mx-4 sm:my-3 md:my-4 lg:my-4">
            <div>
              <span className="text-xs sm:text-sm md:text-base lg:text-base font-semibold text-green-400  mx-1">
                {label}  <span> free </span>
              </span>
              <del className="text-xs sm:text-sm md:text-base lg:text-base font-normal" style={{ color: "#555555" }}>
               10MYR
              </del>
              <p className="text-xs sm:text-sm md:text-base lg:text-base font-semibold mx-1" style={{ color: "#FF4C72" }}>
                {description}
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-base font-semibold mx-1" style={{ color: "#9D9D9D" }}>
                {arrivalDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDeliveryMethod
