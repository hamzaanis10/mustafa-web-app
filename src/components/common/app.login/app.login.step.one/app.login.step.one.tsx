"use client"
import React, { useState, useEffect } from "react";
import "./app.login.step.one.css";
import AppInputPassword from "../../app.input.password/app.input.password";
import AppButton from "../../app.button/app.button";
import AppInputEmail from "../../app.input.email/app.input.email";
import AppCheckBox from "../../app.checkbox/app.checkbox";
import { emailSchema, passwordSchema } from '../../app.validation/app.validation';

interface AppLoginStepOneProps {
  checkout?: boolean;
  onContinue?: () => void;
}

const AppLoginStepOne: React.FC<AppLoginStepOneProps> = (props: any) => {
  const { checkout } = props
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const removeLabel = true;

  useEffect(() => {
    const emailValidation = emailSchema.safeParse(email)
    const passwordValidation = passwordSchema.safeParse(password)
    setEmailError(email ? (emailValidation.success ? "" : emailValidation.error.errors[0].message) : "");
    setPasswordError(password ? (passwordValidation.success ? "" : passwordValidation.error.issues[0].message) : "");
  }, [email, password]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = (e: any) => {
    setCheckboxChecked(e.target.checked);
  };

  const canLogin = email && password && !passwordError && !emailError;

  return (
    <div>
      <div className="inputfield w-19rem mb-5 mt-4 px-3">
        <AppInputEmail
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          removeLabel={removeLabel}
          placeholder="Email/ Mobile number"
          id="login"
        />

        <AppInputPassword
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
          removeLabel={removeLabel}
          placeholder="Your password"
          id="login"
        />

        <div className="flex align-items-center justify-content-between font-medium text-xs mt-2">
          <AppCheckBox
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
            id="loginCheckbox"
            label="Remember me"
          />
          <div className="mt-1">
            <a
              className="underline cursor-pointer"
              style={{ color: "#4C70FF", letterSpacing: "0.5px",fontWeight: "550",fontSize: "13px" }}
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>



      {checkout ?
        <div style={{ width: "19rem" }}>
          <div className="mb-2">
            <AppButton
              disabled={!canLogin}
              label="Log In"
              onClick={props.onContinue}
            />
          </div>

          <div className="mb-2">
            <AppButton
              disabled={false}
              label="Back"
              onClick={props.onContinue}
              style={{ backgroundColor: 'transparent', color: "#00CB56" }}
            />
          </div>
        </div>
        :
        <div className="mb-2">
          <AppButton
            disabled={!canLogin}
            label="Log In"
            onClick={props.onContinue}
          />
        </div>
      }

      <div className="text-center mb-2 mt-3">
        <span className="line-height-3" style={{ fontSize: "13px",letterSpacing: "0.5px",color: "rgba(123, 123, 123, 1)" }}>
          No account yet?
        </span>
        <a
          className="underline ml-2 cursor-pointer"
          style={{ color: "#4C70FF", fontSize: "14px" }}
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default AppLoginStepOne;
