"use client";
import 'primeflex/primeflex.css';
import "./signup.css";
import { useState } from 'react';
import { AppVerificationMethod } from "../../components/common/app.verification.form.dialog.content/app.verification.form.dialog.content";
import AppDialog from '@/components/common/app.dialog/app.dialog';
import AppSuccessDialog from '@/components/common/app.success.dialog.content/app.success.dialog.content';
import AppOtpDialog from '../../components/common/app.otp.dialog.content/app.otp.dialog.content';
import AppSignup from '../../components/common/app.singup.dialog/app.signup.dialog';
import { useDispatch, useSelector } from 'react-redux';
import { useConfirmSignUpMutation, useSendOtpMutation } from '@/store/apis/signupAPI';
import { setCurrentStep, setOtpMethod } from '@/store/reducers/signUpSlice';
import { RootState } from '@/store/store';
import { SignUpData, SignUpState } from '@/types/api-types';

const Page: React.FC = () => {
  const dispatch = useDispatch();
  const signUpState: SignUpState = useSelector((state: RootState) => state.signUp);
  const [sendOtp] = useSendOtpMutation();
  const [confirmSignUp] = useConfirmSignUpMutation();
  const [showForm, setShowForm] = useState<boolean>(true);
  const [showVerificationMethodForm, setShowVerificationMethodForm] = useState<boolean>(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');
  const [showOtpForm, setShowOtpForm] = useState<boolean>(false);
  const [errorMessage ,setErrorMessage] = useState<string>('');

  const closeForm = () => {
    setShowForm(false);
  };

  const onSignupContinue = async () => {
    if(signUpState.data.method === 'phone') {
    setShowForm(false);
    setShowVerificationMethodForm(true);
    }
    else if(signUpState.data.method === 'email') {
      let data: SignUpData;
      data = { 
        type: 'EMAIL',
        email: signUpState.data.email 
      };
      await sendOtp({ data, method: 'Email' }).unwrap();
      dispatch(setCurrentStep('SIGNUP'));
      setShowForm(false);
      setShowOtpForm(true);
  };
}

  const closeVerificationMethodForm = () => {
    setShowVerificationMethodForm(false);
  };

  const handleOpenOtpForm = async (method: 'SMS' | 'WhatsApp' | 'Email') => {
    dispatch(setOtpMethod(method));
    try {
      let data: SignUpData;
  
      if (method === 'Email') {
        data = { 
          type: 'EMAIL',
          email: signUpState.data.email 
        };
      } else {
        data = { 
          type: method === 'SMS' ? 'SMS' : 'WHATSAPP',
          phoneCountryCode: signUpState.data.phoneCountryCode,
          phoneNumber: signUpState.data.phoneNumber 
        };
      }
  
      await sendOtp({ data, method }).unwrap();
      setShowVerificationMethodForm(false);
      setShowOtpForm(true);
      dispatch(setCurrentStep('SIGNUP'));
    } catch (error) {
      console.error('OTP sending failed:', error);
    }
  };

  const closeOtpForm = () => {
    setShowOtpForm(false);
  };

  const verifyOtp = async () => {
    try {
      const data: SignUpData = {
        ...signUpState.data,
        otp: otp,
      };

      await confirmSignUp(data).unwrap();
      setShowOtpForm(false);
      setShowSuccessDialog(true);
    } catch (error) {
      setErrorMessage('*Oops!! The verification code you entered is incorrect. Try again!');
      console.error('OTP verification failed:', error);
    }
  };

  const goBackToVerificationMethodDialog = () => {
    if(signUpState.data.method === 'phone') {
      setShowOtpForm(false);
    setShowVerificationMethodForm(true);
    }
    else if(signUpState.data.method === 'email') {
      setShowOtpForm(false);
      setShowForm(true);
  };
    
  };

  const goBackToSignupForm = () => {
    setShowVerificationMethodForm(false);
    setShowForm(true)
  };

  return (
    <div>
      <AppDialog header="Hi there, new friend!" visible={showForm} modal onHide={closeForm} className="sm: w-15rem md: w-20rem lg: w-20rem" id='Signup-page' >
        <AppSignup onContinue={onSignupContinue} />
      </AppDialog>

      <AppDialog header="Verify your number." visible={showVerificationMethodForm} modal onHide={closeVerificationMethodForm} className='relative sm: w-15rem md: w-20rem lg: w-22rem'>
        <AppVerificationMethod onOpenOtpForm={(method: 'SMS' | 'WhatsApp' | 'Email') => handleOpenOtpForm(method)} onGoBack={goBackToSignupForm} />
      </AppDialog>

      <AppDialog header="Verification Started." visible={showOtpForm} modal onHide={closeOtpForm} className='relative sm: w-15rem md: w-20rem lg: w-22rem'>
        <AppOtpDialog label="Verify" description="Please enter the verification code we just sent to your phone number. " otp={otp} setOtp={setOtp} length={6} errorMessage={errorMessage} onVerifyOtp={verifyOtp} onGoBack={goBackToVerificationMethodDialog} />
      </AppDialog>

      <AppDialog header="" visible={showSuccessDialog} modal onHide={() => setShowSuccessDialog(false)} className='relative sm: w-15rem md: w-20rem lg: w-22rem'>
        <AppSuccessDialog label="Let's get started" title="Verified!" description="You have successfully verified the account. Now it’s time to start your MUST journey!" />
      </AppDialog>
      {/* <OtpTwo /> */}
    </div>
  );
};

export default Page;