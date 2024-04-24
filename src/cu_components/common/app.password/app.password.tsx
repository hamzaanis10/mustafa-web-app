"use client";
import "./app.password.css";
import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

interface CustomPasswordProps {
    value: string;
    removeLabel: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomPassword: React.FC<CustomPasswordProps> = ({ value, onChange, removeLabel }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        setIsValidPassword(passwordRegex.test(value));
    }, [value]);

    return (
        <div>
        {
            removeLabel ?
            <div >
            <div className='border-1 border-round flex align-items-center relative' style={{ borderColor: "#C4C4C4" }}>
                <i className='pi pi-lock pl-1' style={{ fontSize: 15 }} />
                <InputText
                    type={passwordVisible ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    className={classNames('w-full text-xs password-input', { 'p-invalid': value && !isValidPassword })}
                    placeholder='your password'
                />
                <i className={classNames('pi', { 'pi-eye': passwordVisible, 'pi-eye-slash': !passwordVisible }, 'eye-icon')}
                    onClick={togglePasswordVisibility}></i>
            </div>
            <div className="mt-3">
                {value && !isValidPassword && (
                    <small className="p-error block mb-2">Password must be a combination of minimum 8 letters, numbers, and symbols.</small>
                )}
            </div>
        </div>:
        <div className="password-wrapper">
            <InputText
                type={passwordVisible ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                className={classNames('w-full mb-2 text-xs password-input', { 'p-invalid': value && !isValidPassword })}
                placeholder='your password'
            />
            <i className={classNames('pi', { 'pi-eye': passwordVisible, 'pi-eye-slash': !passwordVisible }, 'eye-icon')}
                onClick={togglePasswordVisibility}></i>
            {value && !isValidPassword && (
                <small className="p-error block mb-2">Password must be a combination of minimum 8 letters, numbers, and symbols.</small>
            )}
        </div>
}
</div>

    );
};

export default CustomPassword;