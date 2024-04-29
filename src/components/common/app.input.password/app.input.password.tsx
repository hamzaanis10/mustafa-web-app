"use client";
import "./app.input.password.css";
import React, { useState, useEffect } from 'react';
import { InputText, InputTextProps } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

interface AppInputPasswordProps extends InputTextProps {
    removeLabel?: boolean;
    isPasswordValid?: boolean;
    validationMessage?: string;
}

const AppInputPassword: React.FC<AppInputPasswordProps> = (props: any) => {
    const { value, removeLabel = false, isPasswordValid = true, validationMessage } = props;
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            {
                removeLabel ?
                    <div className="mb-3">
                        <div className='border-1 border-round flex align-items-center relative' style={{ borderColor: "#C4C4C4" }}>
                            <i className='pi pi-lock pl-1' style={{ fontSize: 15 }} />
                            <InputText
                                type={passwordVisible ? 'text' : 'password'}
                                value={value}
                                onChange={props.onChange}
                                className={classNames('w-full text-xs password-input', { 'p-invalid': !isPasswordValid })}
                                placeholder='your password'
                            />
                            <i className={classNames('pi', { 'pi-eye': passwordVisible, 'pi-eye-slash': !passwordVisible }, 'eye-icon')}
                                onClick={togglePasswordVisibility}></i>
                        </div>
                        <div>                     
                            {!isPasswordValid && validationMessage && (
                                <small className="text-red-500 p-error block mb-3 mt-1 text-xs">*It must be a combination of minimum 8 letters, numbers, and symbols.</small>
                            )}
                        </div>
                    </div> :
                    <div className="password-wrapper">
                        <InputText
                            type={passwordVisible ? 'text' : 'password'}
                            value={value}
                            onChange={props.onChange}
                            className={classNames('w-full mb-2 text-xs password-input', { 'p-invalid': !isPasswordValid })}
                            placeholder='your password'
                        />
                        <i className={classNames('pi', { 'pi-eye': passwordVisible, 'pi-eye-slash': !passwordVisible }, 'eye-icon')}
                            onClick={togglePasswordVisibility}></i>
                        {!isPasswordValid && validationMessage && (
                            <small className="text-red-500 block text-xs mb-1">*It must be a combination of minimum 8 letters, numbers, and symbols.</small>
                        )}
                    </div>
            }
        </div>

    );
};

export default AppInputPassword;