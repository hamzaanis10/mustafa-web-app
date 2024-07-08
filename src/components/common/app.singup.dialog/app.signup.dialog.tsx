"use client";
import 'primeflex/primeflex.css';
import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { isValidPhoneNumber } from 'react-phone-number-input';
import AppButton from "../app.button/app.button";
import AppInputEmail from "../app.input.email/app.input.email";
import AppInputPhoneNumber from '../app.input.phone.number/app.input.phone.number';
import AppCheckBox from '../app.checkbox/app.checkbox';
import AppInputPassword from '../app.input.password/app.input.password';
import { emailSchema, passwordSchema, nicknameSchema, repeatPasswordSchema } from '../app.validation/app.validation';

interface AppSignupProps {
  onContinue: () => void;
}

const AppSignup: React.FC<AppSignupProps> = (props:any) => {
  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState("");
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState("");
  const [repeatPassword , setRepeatPassword] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<boolean | undefined>(undefined);

  const removeLabel = false;
  
  useEffect(() => {
    const nicknameValidation = nicknameSchema.safeParse(nickname)
    const emailValidation = emailSchema.safeParse(email)
    const passwordValidation = passwordSchema.safeParse(password)
    const repeatPasswordValidation = repeatPasswordSchema.safeParse({ password, repeatPassword })

    setNicknameError(nickname ? (nicknameValidation.success ? "" : nicknameValidation.error.errors[0].message) : "");
    setEmailError(email ? (emailValidation.success ? "" : emailValidation.error.errors[0].message) : "");
    setPasswordError(password ? (passwordValidation.success ? "" : passwordValidation.error.issues[0].message) : "");
    setRepeatPasswordError(repeatPassword ? (repeatPasswordValidation.success ? "" : repeatPasswordValidation.error.issues[0].message) : "");
  }, [nickname, email, password, repeatPassword]);

  const handlePhoneNumberChange = (phone: string) => {
    setPhoneNumber(phone);
    setIsPhoneNumberValid(phone ? isValidPhoneNumber(phone) : undefined);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleCheckboxChange = (e: any) => {
    setCheckboxChecked(e.target.checked);
  };

  const isFormValid = () => {
    return (
      nickname !== "" &&
      nicknameError === '' &&
      email !== "" &&
      emailError === '' &&
      password  !== "" &&
      passwordError === '' &&
      repeatPassword !== "" &&
      repeatPasswordError === '' &&
      checkboxChecked &&
      isPhoneNumberValid
    );
  };

  return (
    <>
      <div className="px-3">
        <label htmlFor="nickname" className="block font-medium text-900 text-xs mb-1">Nickname</label>
        <InputText id="nickname" type="text" placeholder="nickname" className="w-full mb-2 text-xs" value={nickname} onChange={handleNicknameChange} />
        {nicknameError && <p className="text-red-500 text-xs mt-0">{nicknameError}</p>}

        <AppInputEmail
          value={email}
          onChange={handleEmailChange}
          removeLabel={removeLabel}
          error={emailError}
          placeholder='Email or Mobile number'
        />
        <AppInputPhoneNumber
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          isValid={isPhoneNumberValid}
        />

        <label htmlFor="password" className="block font-medium text-900 text-xs mb-1">Password</label>
        <AppInputPassword
          value={password}
          onChange={handlePasswordChange}
          removeLabel={removeLabel}
          error={passwordError}
          placeholder='your password'
        />

        <label htmlFor="repetPassword" className="block font-medium text-900 text-xs mb-1">Repeat your password</label>
        <AppInputPassword
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
          removeLabel={removeLabel}
          error={repeatPasswordError}
          placeholder='your password'
        />

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

      <AppButton label="Continue" onClick={props.onContinue} disabled={!isFormValid()} />
      <div className="text-center">
        <span className="text-600 text-xs line-height-3">Already have account?</span>
        <a className="text-xs underline ml-2 text-blue-500 cursor-pointer">Log In</a>
      </div>
    </>
  );
};

export default AppSignup;

