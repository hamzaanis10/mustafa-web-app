import React, { useState } from 'react'
import AppOtpDialog from '../app.otp.dialog.content/app.otp.dialog.content'

interface AppForgetPasswordOtpStepTwoProps {
    otp: string;
    setOtp: (otp: string) => void;
    onVerifyOtp: () => void
    onGoBack : () => void
}  

const AppForgetPasswordOtpStepTwo: React.FC<AppForgetPasswordOtpStepTwoProps> = (props: any) => {
  const {otp , setOtp ,onVerifyOtp,onGoBack} = props
  return (
    <AppOtpDialog
    label='Verify'
    description="Please enter the verification code we just sent to your Email."
    otp={otp}
    setOtp={setOtp}
    length={5}
    onVerifyOtp={onVerifyOtp}
    onGoBack={onGoBack}
/>
  )
}

export default AppForgetPasswordOtpStepTwo
