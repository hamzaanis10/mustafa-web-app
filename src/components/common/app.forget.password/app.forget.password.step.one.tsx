"use client";
import React, { useEffect, useState } from "react";
import AppInputEmail from "../app.input.email/app.input.email";
import AppInputPassword from "../app.input.password/app.input.password";
import AppButton from "../app.button/app.button";
import { emailSchema, passwordSchema, repeatPasswordSchema } from '../app.validation/app.validation';


interface AppForgetPasswordStepOneProps {
  onContinue: () => void;
}

const AppForgetPasswordStepOne: React.FC<AppForgetPasswordStepOneProps> = (props: any) => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState("");
  const [repeatPassword , setRepeatPassword] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState("")
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const removeLabel = false;

  useEffect(() => {
     const emailValidation = emailSchema.safeParse(email)
     const passwordValidation = passwordSchema.safeParse(password)
     const repeatPasswordValidation = repeatPasswordSchema.safeParse({ password, repeatPassword })
  
     setEmailError(email ? (emailValidation.success ? "" : emailValidation.error.errors[0].message) : "");
     setPasswordError(password ? (passwordValidation.success ? "" : passwordValidation.error.issues[0].message) : "");
     setRepeatPasswordError(repeatPassword ? (repeatPasswordValidation.success ? "" : repeatPasswordValidation.error.issues[0].message) : "");
   }, [email, password, repeatPassword]);
  

   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
 
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
 
  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

 const isFormValid = () => {
    return (
      email !== "" &&
      emailError === '' &&
      password !== "" &&
      passwordError === '' &&
      repeatPassword !== "" &&
      repeatPasswordError === ''
    )
  };

  return (
    <>
      <div className="w-17rem m-auto px-1  py-3 ">
        <AppInputEmail
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          removeLabel={removeLabel}
          placeholder="Email or Mobile number"
        />
        
        <label
          htmlFor="password"
          className="block font-medium text-900 text-xs mb-1 mt-3"
        >
          Enter New Password
        </label>
        <AppInputPassword
          value={password}
          onChange={handlePasswordChange}
          removeLabel={removeLabel}
          placeholder="At least 8 digits"
          error={passwordError}
        />

        <label
          htmlFor="repeatPassword"
          className="block font-medium text-900 text-xs mb-1 mt-2"
        >
          Confirm Password
        </label>
        <AppInputPassword
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
          removeLabel={removeLabel}
          placeholder="........"
          error={repeatPasswordError}
        />

        <div className="mt-3">
          <AppButton
            disabled={!isFormValid()}
            label="Confirm"
            onClick={props.onContinue}
            style={{ backgroundColor: "#00CB56" }}
          />
        </div>
      </div>
    </>
  );
};

export default AppForgetPasswordStepOne;
