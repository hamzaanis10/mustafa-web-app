"use client";
import 'primeflex/primeflex.css';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { isValidPhoneNumber } from 'react-phone-number-input';
import AppButton from "../app.button/app.button";
import Email from "../app.input.email/app.input.email";
import PhoneNumberInput from '../app.input.phone.number/app.input.phone.number';
import AppCheckBox from '../app.checkbox/app.checkbox';
import AppInputPassword from '../app.input.password/app.input.password';

interface AppSignupProps {
  onContinue: () => void;
}

const AppSignup: React.FC<AppSignupProps> = (props:any) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<boolean | undefined>(undefined);

  const removeLabel = false;

  const handlePhoneNumberChange = (phone: string) => {
    setPhoneNumber(phone);
    setIsPhoneNumberValid(phone ? isValidPhoneNumber(phone) : undefined);
  };

  const isEmailValid = (email: string): boolean =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const handleEmailChange = (newEmail: any) => {
    // const newEmail = e.target.value
    setEmail(newEmail);

    if (!isEmailValid(newEmail)) setEmailError('Invalid email format');
    else setEmailError('');
  };


  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
  };

  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setRepeatPassword(newValue);
    checkPasswordsMatch(password, newValue);
  };

  const checkPasswordsMatch = (pass1: string, pass2: string) => {
    setPasswordsMatch(pass1 === pass2);
  };

  const handleCheckboxChange = (e: any) => {
    setCheckboxChecked(e.target.checked);
  };

  const isFormValid = () => {
    const emailIsValid = email.trim() !== '' && emailError === '';
  
    return (
      nickname.trim() !== '' &&
      password.trim() !== '' &&
      repeatPassword.trim() !== '' &&
      passwordsMatch &&
      checkboxChecked &&
      emailIsValid &&
      isPhoneNumberValid && 
      isPasswordValid
    );
  };

  return (
    <>
      <div className="px-3">
        <label htmlFor="nickname" className="block font-medium text-900 text-xs mb-1">Nickname</label>
        <InputText id="nickname" type="text" placeholder="nickname" className="w-full mb-2 text-xs" value={nickname} onChange={handleNicknameChange} />

        <Email
          value={email}
          onChange={handleEmailChange}
          removeLabel={removeLabel}
          error={emailError}
        />
        <PhoneNumberInput
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          isValid={isPhoneNumberValid}
        />

        <label htmlFor="password" className="block font-medium text-900 text-xs mb-1">Password</label>
        <AppInputPassword
          value={password}
          onChange={handlePasswordChange}
          removeLabel={removeLabel}
          isPasswordValid={isPasswordValid}
          validationMessage="Password must be a combination of minimum 8 letters, numbers, and symbols."
        />

        <label htmlFor="repetPassword" className="block font-medium text-900 text-xs mb-1">Repeat your password</label>
        <AppInputPassword
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
          removeLabel={removeLabel}
          isPasswordValid={isPasswordValid}
          validationMessage=""
        />
        {!passwordsMatch && <p className="text-red-500 text-xs mt-0 mb-0">Passwords do not match!</p>}

        <div className="flex align-items-center justify-content-between font-medium text-xs">
          <div className="flex align-items-center mb-3">
            <AppCheckBox
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
              id="agreement"
              label={"I agree to the terms and conditions"} />
          </div>
        </div>
      </div>

      <AppButton label="Continue" onClick={props.onContinue} disabled={!isFormValid()} style={{backgroundColor: "#00CB56"}} />
      <div className="text-center">
        <span className="text-600 text-xs line-height-3">Already have account?</span>
        <a className="text-xs no-underline ml-2 text-blue-500 cursor-pointer">Log In</a>
      </div>
    </>
  );
};

export default AppSignup;

