"use client";
import "primeflex/primeflex.css";
import './app.signup.dialog.scss';
import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { isValidPhoneNumber } from "react-phone-number-input";
import AppButton from "../app.button/app.button";
import AppCheckBox from "../app.checkbox/app.checkbox";
import AppInputPassword from "../app.input.password/app.input.password";
import {
  emailSchema,
  passwordSchema,
  nicknameSchema,
  repeatPasswordSchema,
} from "../app.validation/app.validation";
import { fetchCountryCodes } from "../util/util";
import { Country } from "../util/util";
import AppEmailOrPhoneInput from "../app.toggle.input/app.toggle.input";
import { SignUpData, SignUpDetails } from "@/types/api-types";
import { useValidateSignUpMutation } from "@/store/apis/signupAPI";
import { useDispatch } from "react-redux";
import { updateSignUpData } from "@/store/reducers/signUpSlice";
import { AppVerificationMethod } from "../app.verification.form.dialog.content/app.verification.form.dialog.content";

interface AppSignupProps {
  onContinue: () => void;
}

const AppSignup: React.FC<AppSignupProps> = (props: any) => {
  const dispatch = useDispatch();
  const [signUp, { isLoading, isError, data, error }] = useValidateSignUpMutation();
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<
    boolean | undefined
  >(undefined);
  const [value, setValue] = useState<string>("");
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [countryCodes, setCountryCodes] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [method, setMethod] = useState<string>("");

  const removeLabel = false;

  useEffect(() => {
    const loadCountryCodes = async () => {
      try {
        const countries = await fetchCountryCodes();
        setCountryCodes(countries);
        setSelectedCountry(countries[0]);
      } catch (error) {
        if (typeof error === 'object' && error !== null && 'status' in error) {
          console.error(`Failed to sign up: Status ${error.status}`);
        } else {
          console.error('Failed to sign up:', error);
        }
      }
    };

    loadCountryCodes();
  }, []);

  const handleSignUp = async () => {
    let signUpData: SignUpData;

    if (isEmail) {
      signUpData = {
        displayName: nickname,
        email: value,
        // phoneCountryCode: '',
        // phoneFlagCode: '',
        password,
        // otp: '',
      };
      setMethod("email");
    } else {
      signUpData = {
        displayName: nickname,
        phoneNumber: value,
        phoneCountryCode: selectedCountry ? selectedCountry.code : '',
        // phoneFlagCode: selectedCountry ? selectedCountry.flagCode : '',
        password,
        // otp: '',
      };
      setMethod("phone");
    }

    try {
      await signUp(signUpData).unwrap();
      dispatch(updateSignUpData(signUpData));
      props.onContinue();
      // Handle success, e.g., navigate to the next step or show a success message
    } catch (err) {
      console.error('Failed to sign up:', err);
    }
  };

  const handleToggleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    setIsEmail(inputValue.includes("@") || /[^\d]/.test(inputValue));

    const method = isEmail ? "email" : "phone";
    setMethod(method);
    dispatch(updateSignUpData({ method }));

    if (inputValue.includes("@")) {
      setSelectedCountry(null);
    }
  };

  const handleToggleInputClear = () => {
    setValue("");
    setIsEmail(false);
    setSelectedCountry(countryCodes[0]);
  };

  useEffect(() => {
    const nicknameValidation = nicknameSchema.safeParse(nickname);
    const emailValidation = emailSchema.safeParse(email);
    const passwordValidation = passwordSchema.safeParse(password);
    const repeatPasswordValidation = repeatPasswordSchema.safeParse({
      password,
      repeatPassword,
    });

    setNicknameError(
      nickname
        ? nicknameValidation.success
          ? ""
          : nicknameValidation.error.errors[0].message
        : ""
    );
    setEmailError(
      email
        ? emailValidation.success
          ? ""
          : emailValidation.error.errors[0].message
        : ""
    );
    setPasswordError(
      password
        ? passwordValidation.success
          ? ""
          : passwordValidation.error.issues[0].message
        : ""
    );
    setRepeatPasswordError(
      repeatPassword
        ? repeatPasswordValidation.success
          ? ""
          : repeatPasswordValidation.error.issues[0].message
        : ""
    );
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

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      nicknameError === "" &&
      // email !== "" &&
      // emailError === '' &&
      password !== "" &&
      passwordError === "" &&
      repeatPassword !== "" &&
      repeatPasswordError === "" &&
      checkboxChecked
      // isPhoneNumberValid
    );
  };

  const getErrorMessage = (error: any) => {
    if (error?.data && typeof error.data === 'object' && 'message' in error.data) {
      return (error.data as { message?: string }).message;
    } else if (error?.message) {
      return error.message;
    }
    return 'An unknown error occurred.';
  };

  return (
    <>
      <div className="px-3" id="SignUp">
        <div className="flex flex-column gap-3">
          <div>
            <label
              htmlFor="nickname"
              className="block font-medium text-900 text-xs mb-1"
            >
              Nickname
            </label>
            <InputText
              id="nickname"
              type="text"
              placeholder="nickname"
              className="w-full text-xs"
              value={nickname}
              onChange={handleNicknameChange}
            />
            {nicknameError && (
              <p className="text-red-500 text-xs mt-0">{nicknameError}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-900 text-xs mb-1"
            >
              Email/ Mobile number
            </label>
            <AppEmailOrPhoneInput
              value={value}
              isEmail={isEmail}
              countryCodes={countryCodes}
              selectedCountry={selectedCountry}
              onChange={handleToggleInputChange}
              onClear={handleToggleInputClear}
              onCountryChange={(country: Country) =>
                setSelectedCountry(country)
              }
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block font-medium text-900 text-xs mb-1"
            >
              Password
            </label>
            <AppInputPassword
              value={password}
              onChange={handlePasswordChange}
              removeLabel={removeLabel}
              error={passwordError}
              placeholder="your password"
            />
          </div>
          <div>
            <label
              htmlFor="repetPassword"
              className="block font-medium text-900 text-xs mb-1"
            >
              Repeat your password
            </label>
            <AppInputPassword
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
              removeLabel={removeLabel}
              error={repeatPasswordError}
              placeholder="your password"
            />
          </div>
        </div>
        <div className="flex align-items-center  font-medium text-xs my-3">
          <div className="flex align-items-center">
            <AppCheckBox
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
              id="agreement"
              label={"I agree to the MUST terms "}
            />
          </div>
        </div>
      </div>

      <AppButton
        label="Continue"
        onClick={handleSignUp}
        // onClick={props.onContinue}
        disabled={isLoading}
      />
      {isError && <p>Error: {getErrorMessage(error)}</p>}
      <div className="text-center">
        <span className="text-600 text-xs line-height-3">
          Already have account?
        </span>
        <a className="text-xs underline ml-2 text-blue-500 cursor-pointer">
          Log In
        </a>
      </div>
    </>
  );
};

export default AppSignup;
