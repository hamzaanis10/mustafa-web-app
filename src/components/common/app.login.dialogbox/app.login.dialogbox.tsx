"use client"
import React, { useState } from "react";
import "./app.login.dialogbox.css";
import AppInputPassword from "../app.input.password/app.input.password"
import AppButton from "../app.button/app.button";
import Email from "../app.input.email/app.input.email"
import AppCheckbox from "../app.checkbox/app.checkbox";

interface AppLoginProps {
  onContinue: () => void;
}

const AppLogin: React.FC<AppLoginProps> = (props:any) => {
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const removeLabel = true;

  const isEmailValid = (email: string): boolean =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const handleEmailChange = (newEmail: any) => {
    // const newEmail = e.target.value
    setEmail(newEmail);

    if (!isEmailValid(newEmail)) setEmailError('Invalid email format');
    else setEmailError('');
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
  };

  const handleCheckboxChange = (e: any) => {
    setCheckboxChecked(e.target.checked);
  };

  const canLogin = email && password && isEmailValid(email) && isPasswordValid;
  return (
    <div>
      <div className="inputfield w-17rem m-auto my-4 px-3">
      <Email
          value={email}
          onChange={handleEmailChange}
          removeLabel={removeLabel}
          error={emailError}
        />
        
        <AppInputPassword
          value={password}
          onChange={handlePasswordChange}
          removeLabel={removeLabel}
          isPasswordValid={isPasswordValid}
          validationMessage="Password must be a combination of minimum 8 letters, numbers, and symbols."
        />

        <div className="flex align-items-center justify-content-between font-medium text-xs mt-2">
        <AppCheckbox
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
              id="rememberMe"
              label={"Remember me"} />
          <div className="mt-1">
            <a className="underline cursor-pointer font-medium text-xs" style={{ color: "#4C70FF", fontSize: "14px" }}>
              Forgot password?
            </a>
          </div>

        </div>
      </div>

      <div className="mb-2">
        <AppButton
          disabled={!canLogin}
          label={"Log In"}
          onClick={props.onContinue}
          style={{backgroundColor: "#00CB56"}}
        />
      </div>

      <div className="text-center mb-2">
        <span className="line-height-3" style={{ fontSize: "14px" }}>
          No account yet?
        </span>
        <a className="underline ml-2 cursor-pointer" style={{ color: "#4C70FF", fontSize: "14px" }}>
          Sign Up
        </a>
      </div>
    </div>
  )
}

export default AppLogin
