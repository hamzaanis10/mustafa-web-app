"use client"
import React, { useState, useEffect, ChangeEvent } from "react";
import "./app.login.step.one.css";
import AppInputPassword from "../../app.input.password/app.input.password";
import AppButton from "../../app.button/app.button";
import AppCheckBox from "../../app.checkbox/app.checkbox";
import { emailSchema, passwordSchema } from '../../app.validation/app.validation';
import AppEmailOrPhoneInput from "../../app.toggle.input/app.toggle.input";
import { fetchCountryCodes } from "../../util/util";
import { Country } from "../../util/util";
import { useLoginMutation } from "@/store/apis/loginAPI";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/reducers/loginSlice";

interface AppLoginStepOneProps {
  checkout?: boolean;
  onContinue?: () => void;
}

const AppLoginStepOne: React.FC<AppLoginStepOneProps> = (props: any) => {
  const [login, { isLoading, isError, error }] = useLoginMutation(); 
  const dispatch = useDispatch()
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

  const [value, setValue] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const [countryCodes, setCountryCodes] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    const loadCountryCodes = async () => {
        try {
            const countries = await fetchCountryCodes();
            setCountryCodes(countries);
            setSelectedCountry(countries[0]);
        } catch (error) {
            console.error('Error loading country codes:', error);
        }
    };

    loadCountryCodes();
}, []);

useEffect(() => {
  if (value === "") {
    setIsEmail(true);
  }
}, [value]);

  const handleToggleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    setIsEmail(inputValue.includes('@') || /[^\d]/.test(inputValue));

    if (inputValue.includes('@')) {
      setSelectedCountry(null);
    }
  };

  const handleToggleInputClear = () => {
    setValue('');
    setIsEmail(true);
    setSelectedCountry(countryCodes[0]);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = (e: any) => {
    setCheckboxChecked(e.target.checked);
  };

  const handleLogin = async () => {
    try {
      const loginData = {
        identifier: isEmail ? value : value,
        password
      };

      const response = await login(loginData).unwrap();
      dispatch(setUser({ userInfo: loginData, accessToken: response.accessToken }));
      props.onContinue()
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const canLogin = password && !passwordError && !emailError;

  return (
    <div >
      <div className="flex flex-column gap-3 w-19rem mb-5 mt-4 px-3 ">
      <AppEmailOrPhoneInput
          value={value}
          page={"login"}
          isEmail={isEmail}
          countryCodes={countryCodes}
          selectedCountry={selectedCountry}
          onChange={handleToggleInputChange}
          onClear={handleToggleInputClear}
          onCountryChange={(country: Country) => setSelectedCountry(country)}
          id="login"
          
        />
        
        <AppInputPassword
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
          removeLabel={removeLabel}
          placeholder="Your Password"
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
              style={{ color: "#4C70FF", letterSpacing: "0.5px", fontWeight: "550", fontSize: "13px" }}
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
              onClick={handleLogin}
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
            disabled={!canLogin || isLoading}
            label="Log In"
            onClick={handleLogin}
          />
        </div>
      }

      <div className="text-center mb-2 mt-3">
        <span className="line-height-3" style={{ fontSize: "13px", letterSpacing: "0.5px", color: "rgba(123, 123, 123, 1)" }}>
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