"use client";
import React, { useEffect, useState } from "react";
import AppInputPhoneNumber from "../app.input.phone.number/app.input.phone.number";
import { isValidPhoneNumber } from "react-phone-number-input";
import AppInputPassword from "../app.input.password/app.input.password";
import AppButton from "../app.button/app.button";
import { passwordSchema, repeatPasswordSchema } from "../app.validation/app.validation";

const AppForgetPasswordNumber = (props: any) => {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [repeatPasswordError, setRepeatPasswordError] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isPhoneNoValid, setisPhoneNoValid] = useState<boolean | undefined>();

    const removeLabel = false;

    useEffect(() => {
        const passwordValidation = passwordSchema.safeParse(password);
        const repeatPasswordValidation = repeatPasswordSchema.safeParse({
            password,
            repeatPassword,
        });

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
    }, [password, repeatPassword]);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRepeatPasswordChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRepeatPassword(e.target.value);
    };

    const handlePhoneNoChange = (phone: string) => {
        setPhoneNumber(phone);
        setisPhoneNoValid(phone ? isValidPhoneNumber(phone) : undefined);
    };

    const isFormValid = () => {
        return (
            isPhoneNoValid &&
            password !== "" &&
            passwordError === "" &&
            repeatPassword !== "" &&
            repeatPasswordError === ""
        );
    };
    return (
        <div>
            <div className="w-17rem m-auto py-3">
                <label
                    htmlFor="phoneNumber"
                    className="block font-medium text-900 text-xs mb-1 mt-2"
                >
                    Mobile Number
                </label>
                <AppInputPhoneNumber
                    value={phoneNumber}
                    onChange={handlePhoneNoChange}
                    isValid={isPhoneNoValid}
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
                        label="Confirm Via WhatsApp"
                        onClick={props.onContinue}
                    />

                    <AppButton
                        style={{ backgroundColor: 'transparent', color: "#00CB56" }}
                        disabled={!isFormValid()} label="Confirm Via SMS" onClick={props.onContinue} />
                </div>
            </div>
        </div>
    );
};

export default AppForgetPasswordNumber;