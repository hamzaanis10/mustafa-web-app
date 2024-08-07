"use client";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import AppButton from "../app.button/app.button";
import { verify } from "crypto";
import AppOtpDialog from "../app.otp.dialog.content/app.otp.dialog.content";
import AppDialog from "../app.dialog/app.dialog";

function Email(props: any) {
  const { goBack } = props;
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');
  const [showOtpForm, setShowOtpForm] = useState<boolean>(false);

 
  const goBackToVerificationMethodDialog = () => {
    setShowOtpForm(false);
}; 

  const verifyDialog = () => {
    setShowOtpForm(true);
  };

  const closeOtpForm = () => {
    setShowOtpForm(false);
  };

  const verifyOtp = () => {
    setShowOtpForm(false);
  };

  const changeEmail = () => {
    setShowEmail(true);
  };
 
  return (
    <div
      className="pt-6 flex flex-column align-items-center relative"
      style={{ margin: "0 auto" }}
    >
      <div className="flex align-items-center justify-content-center pb-4">
        <i
          className="pi pi-angle-left text-5xl text-900 cursor-pointer mr-4"
          onClick={goBack}
        />
        <span className="text-4xl font-semibold"> Email </span>
      </div>
      {!showEmail ? (
        <>
          <div className="pt-5 container" >
            <div className="flex flex-column justify-content-center align-items-center gap-2">
              <span
                className="text-base font-normal"
                style={{ color: "#000000" }}
              >
                Verify email
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: "#000000" }}
              >
                EmailAddress@gmail.com
              </span>
            </div>
          </div>
          <div className="flex align-items-center justify-content-center gap-4 mt-4 w-30rem">
            <AppButton label="Verify" onClick={verifyDialog} />
            <AppButton
              label="Change"
              style={{ backgroundColor: "transparent", color: "#00CB56" }}
              onClick={changeEmail}
            />
          </div>
          <AppDialog header="Verification Started." visible={showOtpForm} modal onHide={closeOtpForm} className='relative sm: w-15rem md: w-20rem lg: w-22rem'>
        <AppOtpDialog label="Verify" description="Please enter the verification code we just sent to your phone number. " otp={otp} setOtp={setOtp} length={6} onVerifyOtp={verifyOtp} onGoBack={goBackToVerificationMethodDialog} />
        </AppDialog>
        </>
      ) : (
        <ChangeEmailComponent />
      )}
    </div>
  );
}

const ChangeEmailComponent = () => {
  const [otp, setOtp] = useState<string>('');
  const [showOtpForm, setShowOtpForm] = useState<boolean>(false);

 
  const goBackToVerificationMethodDialog = () => {
    setShowOtpForm(false);
}; 

  const verifyDialog = () => {
    setShowOtpForm(true);
  };

  const closeOtpForm = () => {
    setShowOtpForm(false);
  };

  const verifyOtp = () => {
    setShowOtpForm(false);
  };

  return (
    <>
      <div className="pt-5" style={{ width: "800px" }}>
        <div className="w-full">
          <InputText className="w-full" placeholder="emailaddress@gmail.com" />
          <i
            className="pi pi-times absolute"
            style={{ right: "10px", top: "152px" }}
          />
        </div>
      </div>
      <div className="w-20rem mt-5">
        <AppButton label="Confirm"  onClick={verifyDialog}/>
      </div>

      <AppDialog header="Verification Started." visible={showOtpForm} modal onHide={closeOtpForm} className='relative sm: w-15rem md: w-20rem lg: w-22rem'>
        <AppOtpDialog label="Verify" description="Please enter the verification code we just sent to your phone number. " otp={otp} setOtp={setOtp} length={6} onVerifyOtp={verifyOtp} onGoBack={goBackToVerificationMethodDialog} />
      </AppDialog>
    </>
  );
};

export default Email;
