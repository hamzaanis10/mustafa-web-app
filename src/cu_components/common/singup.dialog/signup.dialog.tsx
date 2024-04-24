"use client";
import 'primeflex/primeflex.css';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import ButtonOne from "../app.button/app.button";
import CheckboxOne from "../app.checkbox/app.checkbox";
import CustomPassword from "../app.password/app.password";
import Email from "../app.email/app.email";
import PhoneNumberInput from '../app.phone.number/app.phone.number';

interface SignupProps {
    onContinue: () => void;
}

const Signup: React.FC<SignupProps> = ({ onContinue }) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const removeLabel = false;

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
 };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setPassword(newValue);
      checkPasswordsMatch(newValue, repeatPassword);
    };
  
    const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setRepeatPassword(newValue);
      checkPasswordsMatch(password, newValue);
    };
  
    const checkPasswordsMatch = (pass1: string, pass2: string) => {
      setPasswordsMatch(pass1 === pass2);
    };

    const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAgreementChecked(e.target.checked);
   };
  
   const isFormValid = () => {
      return nickname.trim() !== '' && password.trim() !== '' && repeatPassword.trim() !== '' && passwordsMatch && agreementChecked ;
   };

  return (
    <>
        <div className="px-3">
          <label htmlFor="nickname" className="block font-medium text-900 text-xs mb-1">Nickname</label>
          <InputText id="nickname" type="text" placeholder="nickname" className="w-full mb-3 text-xs" value={nickname} onChange={handleNicknameChange}/>

          <Email removeLabel={removeLabel}/>
          <PhoneNumberInput />

          <label htmlFor="password" className="block font-medium text-900 text-xs mb-1">Password</label>
          <CustomPassword removeLabel={removeLabel} value={password} onChange={handlePasswordChange} />

          <label htmlFor="repetPassword" className="block font-medium text-900 text-xs mb-1">Repeat your password</label>
          <CustomPassword removeLabel={removeLabel} value={repeatPassword} onChange={handleRepeatPasswordChange} />
          {!passwordsMatch && <p className="text-red-500 text-xs">Passwords do not match!</p>}

          <div className="flex align-items-center justify-content-between font-medium text-xs">
            <div className="flex align-items-center mb-3">
              <CheckboxOne isSignup={true} agreementChecked={agreementChecked} onChangeCheckbox={handleAgreementChange} label={"I agree to the terms and conditions"}/>
            </div>
          </div>
        </div>

        <ButtonOne label="Continue" onClick={onContinue} disabled={!isFormValid()}/>
        <div className="text-center">
          <span className="text-600 text-xs line-height-3">Already have account?</span>
          <a className="text-xs no-underline ml-2 text-blue-500 cursor-pointer">Log In</a>
        </div>
    </>
  );
};

export default Signup;
