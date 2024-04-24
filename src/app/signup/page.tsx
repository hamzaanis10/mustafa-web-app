"use client";
import 'primeflex/primeflex.css';
import "./signup.css";
import Signup from "../../cu_components/common/singup.dialog/signup.dialog";
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { VerificationMethodDialogContent } from "../../cu_components/common/verification.form.dialog.content/verification.form.dialog.content";
import { SuccessDialogContent } from "../../cu_components/common/success.dialog.content/success.dialog.content";
import OtpDialogContent from '../../cu_components/common/otp.dialog.content/otp.dialog.content';
// import OtpTwo from '@/cu_components/common/app.otp.orig/app.otp.orig';

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
      <Dialog header="Hi there, new friend!" visible={showForm} modal style={{ width: '350px' }} onHide={closeForm} contentStyle={{ overflow: 'hidden' }}>
        <Signup onContinue={onSignupContinue} />
      </Dialog>

      <Dialog header="Verify your number." visible={showVerificationMethodForm} modal style={{ width: '350px' }} onHide={closeVerificationMethodForm} contentStyle={{ overflow: 'hidden' }} className='relative'>
        <VerificationMethodDialogContent onOpenOtpForm={openOtpForm} onGoBack={goBackToSignupForm}/>
      </Dialog>

      <Dialog header="Verification Started." visible={showOtpForm} modal style={{ width: '350px' }} onHide={closeOtpForm} className='relative'>
        <OtpDialogContent label="Verify" description="Please enter the verification code we just sent to your phone number. " otp={otp} onHandleOtpChange={handleOtpChange} onVerifyOtp={verifyOtp} isOtpComplete={isOtpComplete} onGoBack={goBackToVerificationMethodDialog} />
      </Dialog>

      <Dialog header="" visible={showSuccessDialog} modal style={{ width: '350px'}} onHide={() => setShowSuccessDialog(false)} className='relative'>
        <SuccessDialogContent label="Let's get started" title="Verified!" description="You have successfully verified the account. Now it’s time to start your MUST journey!"/>
      </Dialog><Dialog header="" visible={showSuccessDialog} modal style={{ width: '350px'}} onHide={() => setShowSuccessDialog(false)} className='relative'>
        <SuccessDialogContent label="Let's get started" title="Verified!" description="You have successfully verified the account. Now it’s time to start your MUST journey!"/>
      </Dialog>
      {/* <OtpTwo /> */}
    </>
  );
};

export default Page;
