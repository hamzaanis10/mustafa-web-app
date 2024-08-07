import React from 'react';
import './setting.css';
import AppButton from '../app.button/app.button';

interface AppSettingProps{
    openAccountSetting?: () => void
    goBack?: () => void
};

const AppSetting: React.FC<AppSettingProps> = (props:any) => {
    const {openAccountSetting, goBack} = props

  return (
    <div className="pt-6 flex flex-column align-items-center" style={{margin:"0 auto"}}>
             <div className="flex align-items-center  justify-content-center pb-4">
             <i className="pi pi-angle-left text-5xl text-900 cursor-pointer mr-4" onClick={goBack} />
               <span className="text-4xl font-semibold"> Settings </span>
             </div>
             <div className='pt-5 container'>
                <div className='flex align-items-center justify-content-between bg-white pt-3 pr-4 pb-3 pl-4 font-medium' style={{borderBottom:"1px solid #C5C5C5", color:"#000000"}}>
                    <span>Account setting</span>
                    <i className="pi pi-angle-right" onClick={openAccountSetting}></i>
                </div>
                <div className='flex align-items-center justify-content-between bg-white pt-3 pr-4 pb-3 pl-4 font-medium' style={{borderBottom:"1px solid #C5C5C5", color:"#000000"}}>
                    <span>Address Book</span>
                    <i className="pi pi-angle-right" onClick={props.onClick}></i>
                </div>
                <div className='flex align-items-center justify-content-between bg-white pt-3 pr-4 pb-3 pl-4 font-medium'  style={{ color:"#000000"}}>
                    <span>Private Policy</span>
                    <i className="pi pi-angle-right" onClick={props.onClick}></i>
                </div>
             </div>
             <div className="w-20rem pt-5">
                <AppButton label='Logout' style={{color:"#FFFFFF"}}/>
             </div>
         </div>
  )
};

export default AppSetting;
