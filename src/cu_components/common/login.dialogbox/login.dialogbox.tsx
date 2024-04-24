"use client"
import React, { useState } from "react";
import "./login.dialogbox.css";
import CustomPassword from "../app.password/app.password"
import ButtonOne from "../app.button/app.button";
import Email from "../app.email/app.email"
import CheckboxOne from "../app.checkbox/app.checkbox";

interface LoginProps {
  onContinue: () => void;
}

const Login: React.FC<LoginProps> = ({ onContinue }) => {
  const [password, setPassword] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(false);
  const removeLabel = true;

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreementChecked(e.target.checked);
  };
  return (
    <div className="px-3">
      <div className="inputfield w-17rem m-auto my-5">
        <Email removeLabel={removeLabel} />

        <CustomPassword
          removeLabel={removeLabel}
          value={password}
          onChange={handlePasswordChange}
        />

        <div className="flex align-items-center justify-content-between font-medium text-xs">
          <CheckboxOne
            isSignup={false}
            agreementChecked={agreementChecked}
            onChangeCheckbox={handleAgreementChange}
            label={"Remember me"} />
          <div className="mt-1">
            <a className="cursor-pointer font-medium text-xs" style={{ color: "#4C70FF", fontSize: "14px" }}>
              Forgot password?
            </a>
          </div>

        </div>
      </div>

      <div className="mb-2">
        <ButtonOne
          disabled={false}
          label={"Log In"}
          onClick={onContinue}
        />
      </div>

      <div className="text-center mb-3">
        <span className="line-height-3" style={{ fontSize: "14px" }}>
          No account yet?
        </span>
        <a className="ml-2 cursor-pointer" style={{ color: "#4C70FF", fontSize: "14px" }}>
          Sign Up
        </a>
      </div>
    </div>
  )
}

export default Login
