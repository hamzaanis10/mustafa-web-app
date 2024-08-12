 "use client"
import React, { useState } from 'react';
import './page.css';
import AppSetting from '@/components/common/app.setting/setting';
import Nickname from '@/components/common/app.setting/nickname';
import AppAccountSetting from '@/components/common/app.setting/account.setting';
import Email from '@/components/common/app.setting/email';
import PasswordChange from '@/components/common/app.setting/password.changes';

export default function page() {
    const [Setting, setSetting] = useState<boolean>(true)
    const [openAccountSetting, setAccountSetting] = useState<boolean>(false);
    const [openNickName, setNickName] = useState<boolean>(false);
    const [openEmailVerify, setEmailVerify] = useState<boolean>(false);
    const [openChangePassword, setChangePassword] = useState<boolean>(false);

    const goAccountSetting = () =>{
        setSetting(false)
        setAccountSetting(true)
    };

    const goNickName = () =>{
       setAccountSetting(false);
       setNickName(true)
    };

    const goBackSetting =()=>{
      setAccountSetting(false);
      setSetting(true)
    };

    const goBackAccountSetting =()=>{
      setAccountSetting(true);
      setNickName(false)
      setEmailVerify(false)
      setChangePassword(false)
    };

    const goEmail = ()=>{
       setAccountSetting(false)
       setEmailVerify(true)
    };

    const goPasswordChnge = ()=>{
      setChangePassword(true)
      setAccountSetting(false)
    }

  return (
    <div id='Setting' style={{backgroundColor:"#F5F5F5", width:"100%"}}>
         

        {Setting  && (
             <AppSetting openAccountSetting={goAccountSetting} />  
        )}

        {openAccountSetting && (
            <AppAccountSetting openNickName={goNickName} openEmailVerify={goEmail} openPasswordChange={goPasswordChnge} goBack={goBackSetting}/>
        )} 

        {openNickName && (
          <Nickname goBack={goBackAccountSetting}/>
        )}

        {openEmailVerify && (
          <Email goBack={goBackAccountSetting} />
        )}

        {/* {openChangePassword && (
          <PasswordChange goBack={goBackAccountSetting} />
        )} */}


    </div>
  )
}
