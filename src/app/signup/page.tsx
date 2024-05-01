"use client";
import 'primeflex/primeflex.css';
// import "./signup.css";
import { useState } from 'react';
import { AppVerificationMethod } from "../../components/common/app.verification.form.dialog.content/app.verification.form.dialog.content";
import AppDialog from '@/components/common/app.dialog/app.dialog';
import AppSuccessDialog from '@/components/common/app.success.dialog.content/app.success.dialog.content';
import AppOtpDialog from '../../components/common/app.otp.dialog.content/app.otp.dialog.content';
import AppSignup from '../../components/common/app.singup.dialog/app.signup.dialog';

const Page: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(true);
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [showVerificationMethodForm, setShowVerificationMethodForm] = useState<boolean>(false);
  const [showOtpForm, setShowOtpForm] = useState<boolean>(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);

  const closeForm = () => {
    setShowForm(false);
  };

  const onSignupContinue = () => {
    setShowForm(false);
    setShowVerificationMethodForm(true);
  };

  const closeVerificationMethodForm = () => {
    setShowVerificationMethodForm(false);
  };

  const openOtpForm = () => {
    console.log("opening otp form")
    setShowVerificationMethodForm(false);
    setShowOtpForm(true);
  };

  const closeOtpForm = () => {
    setShowOtpForm(false);
  };

  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  const isOtpComplete = otp.every(digit => digit.trim() !== "");

  const verifyOtp = () => {
    console.log("Verifying OTP");
    setShowOtpForm(false);
    setShowSuccessDialog(true);
  };
  
  const goBackToVerificationMethodDialog = () => {
    setShowOtpForm(false);
    setShowVerificationMethodForm(true);
};

const goBackToSignupForm = () => {
  setShowVerificationMethodForm(false);
  setShowForm(true)
};

  return (
    <>
      <AppDialog header="Hi there, new friend!" visible={showForm} modal onHide={closeForm} className="sm: w-15rem md: w-20rem lg: w-25rem">
        <AppSignup onContinue={onSignupContinue} />
      </AppDialog>

      <AppDialog header="Verify your number." visible={showVerificationMethodForm} modal onHide={closeVerificationMethodForm} className='relative sm: w-15rem md: w-20rem lg: w-22rem'>
        <AppVerificationMethod onOpenOtpForm={openOtpForm} onGoBack={goBackToSignupForm}/>
      </AppDialog>

      <AppDialog header="Verification Started." visible={showOtpForm} modal onHide={closeOtpForm} className='relative sm: w-15rem md: w-20rem lg: w-22rem'>
        <AppOtpDialog label="Verify" description="Please enter the verification code we just sent to your phone number. " otp={otp} onHandleOtpChange={handleOtpChange} onVerifyOtp={verifyOtp} isOtpComplete={isOtpComplete} onGoBack={goBackToVerificationMethodDialog} />
      </AppDialog>

      <AppDialog header="" visible={showSuccessDialog} modal onHide={() => setShowSuccessDialog(false)} className='relative sm: w-15rem md: w-20rem lg: w-22rem'>
        <AppSuccessDialog label="Let's get started" title="Verified!" description="You have successfully verified the account. Now it’s time to start your MUST journey!"/>
      </AppDialog>
      {/* <OtpTwo /> */}
    </>
  );
};

export default Page;
