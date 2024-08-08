"use Client"
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import AppButton from '../app.button/app.button'
import './nickname.css'

export default function Nickname(props:any) {
    const {goBack} = props
    const [nickName, setNickName] = useState('');

    const handleInputChange = (e:any) => {
      setNickName(e.target.value);
    };
  
    const clearNickName = () => {
      setNickName('');
    };
    
  return (
    <div id='Nickname' className="pt-6 flex flex-column align-items-center ">
    <div className="flex align-items-center justify-content-center pb-4">
    <i className="pi pi-angle-left text-5xl text-900 cursor-pointer mr-4" onClick={goBack} />
      <span className="text-4xl font-semibold"> Nick Name </span>
    </div>
    <div className='pt-5 container relative'>
    <div className="w-full">
          <InputText className="w-full" name='nickName' value={nickName} placeholder="emailaddress@gmail.com" onChange={handleInputChange} />
          {nickName &&  <i className="pi pi-times absolute closeIcon" onClick={clearNickName}/>}
        </div>
    </div>
    <div className="w-20rem mt-7">
       <AppButton label='Save'/>
    </div>
</div>
  )
}
