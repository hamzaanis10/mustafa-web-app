import React from 'react';
import AppButton from '../app.button/app.button';
import { Password } from 'primereact/password';
import './password.changes.css'

interface AppPasswordChangeProps {
  goBack?: string
};

const PasswordChange: React.FC<AppPasswordChangeProps> = (props:any) => {
    const { goBack } = props  
  return (
    <div id="PasswordChange" className="pt-6 flex flex-column align-items-center relative" >
    <div className="flex align-items-center justify-content-center pb-4">
    <i className="pi pi-angle-left text-5xl text-900 cursor-pointer mr-4" onClick={goBack} />
      <span className="text-4xl font-semibold"> Change Password </span>
    </div>
    <div className='pt-5 container'>
    <div className="flex flex-column align-items-center gap-3">
      <Password placeholder='Old Password' toggleMask  />
      <Password placeholder='New Password' toggleMask />
      <Password placeholder='Confirm Password' toggleMask />
     </div>
    </div>
    <div className="w-20rem mt-7">
       <AppButton label='Save'/>
    </div>
</div>
  )
}

export default PasswordChange;
