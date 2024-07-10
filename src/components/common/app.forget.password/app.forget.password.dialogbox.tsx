"use client"
import React, { useState } from 'react';
import AppDialog from '@/components/common/app.dialog/app.dialog'
import AppForgetPasswordStepOne from './app.forget.password.step.one';
import AppForgetPasswordSuccessStepThree from './app.forget.password.success.step.three';
import AppForgetPasswordOtpStepTwo from './app.forget.password.Otp.step.two';

const AppForgetPasswordDialog:React.FC = () => {
    const [showForgotPasswordForm, setShowForgotPasswordForm] = useState<boolean>(true);
    const [otp, setOtp] = useState<string>('');
    const [showOtpForm, setShowOtpForm] = useState<boolean>(false);
    const [showSuccessForm, setShowSuccessForm] = useState<boolean>(false);

    const HeaderText = showOtpForm ? "Enter Verification Code" : "" || showSuccessForm  ? "" : "Reset Password";

    const closeForm = () => {
        setShowForgotPasswordForm(false)
        setShowOtpForm(false)
        setShowSuccessForm(false)
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
            <AppDialog header={HeaderText} visible={showForgotPasswordForm || showOtpForm || showSuccessForm} modal onHide={closeForm} className='sm:w-15rem md:w-20rem lg:w-22rem'>
                {showForgotPasswordForm && <AppForgetPasswordStepOne onContinue={openOtpForm} />}
                {showOtpForm && (
                   <AppForgetPasswordOtpStepTwo otp={otp} setOtp={setOtp} onVerifyOtp={verifyOtp} onGoBack={goBackToForgetPasswordDialog} />
                )}
                {showSuccessForm && (
                   <AppForgetPasswordSuccessStepThree />
                )}
            </AppDialog>
        </div>
    )
}

export default AppForgetPasswordDialog;
