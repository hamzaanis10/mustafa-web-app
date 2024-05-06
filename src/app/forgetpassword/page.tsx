"use client"
import AppDialog from '@/components/common/app.dialog/app.dialog'
import AppOtpDialog from '@/components/common/app.otp.dialog.content/app.otp.dialog.content';
import AppForgetPassword from '@/components/common/app.forgetpassword.dialogbox/app.forget.password.dialogbox';
import AppSuccessDialog from '@/components/common/app.success.dialog.content/app.success.dialog.content';
import React, { useState } from 'react'

function page() {
    const [showForgotPasswordForm, setShowForgotPasswordForm] = useState<boolean>(true);
    const [otp, setOtp] = useState<string>('');
    const [showOtpForm, setShowOtpForm] = useState<boolean>(false);
    const [showSuccessForm, setShowSuccessForm] = useState<boolean>(false)

    const closeForm = () => {
        setShowForgotPasswordForm(false)
    };

    const closeOtpForm = () => {
        setShowOtpForm(false)
    };
    const openOtpForm = () => {
        setShowForgotPasswordForm(false);
        setShowOtpForm(true);
    };

    const verifyOtp = () => {
        setShowOtpForm(false);
        setShowSuccessForm(true)
    };

    const goBackToForgetPasswordDialog = () => {
        setShowOtpForm(false);
        setShowForgotPasswordForm(true);
    };
    return (
        <div>

            <AppDialog header="Reset Password" visible={showForgotPasswordForm} modal onHide={closeForm} >
                <AppForgetPassword onContinue={openOtpForm} />
            </AppDialog>

            <AppDialog header="Enter Verification Code" visible={showOtpForm} modal onHide={closeOtpForm}className='sm: w-15rem md: w-20rem lg: w-22rem'>
                <AppOtpDialog label='Verify' description="Please enter the verification code we just sent to your Email." otp={otp} setOtp={setOtp} length={5} onVerifyOtp={verifyOtp} onGoBack={goBackToForgetPasswordDialog}/>
            </AppDialog>

            <AppDialog header="" visible={showSuccessForm} modal onHide={() => setShowSuccessForm(false)}
                className='sm: w-15rem md: w-20rem lg: w-22rem'>
                <AppSuccessDialog label='Back to Sign In' title='New password ready!' description='You have successfully set your new password. Now it’s time to start your MUST journey!' />
            </AppDialog>
        </div>
    )
}

export default page
