"use client";
import "./app.input.password.css";
import React, { useState } from 'react';
import { InputText, InputTextProps } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

interface AppInputPasswordProps extends InputTextProps {
    placeholder?: string;
    removeLabel?: boolean;
    error?: string;
    id?: string;
}

const AppInputPassword: React.FC<AppInputPasswordProps> = (props: any) => {
    const { placeholder, value, removeLabel = false, error, id } = props;
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div id={id}>
            {
                removeLabel ?
                    <div>
                        <div className='flex align-items-center relative' style={{ borderColor: "#C4C4C4" }}>
                            <i className='pi pi-lock pl-1' style={{ fontSize: 15, position:"absolute" }} />
                            <InputText
                                type={passwordVisible ? 'text' : 'password'}
                                value={value}
                                onChange={props.onChange}
                                className={classNames('w-full  password-input', { 'p-invalid': error })}
                                placeholder={placeholder}
                                onFocus={handleFocus}
                                style={{
                                    paddingRight: isFocused ? "30px" : "10px",
                                    paddingLeft: "37PX",
                                  }}
                            />
                            <i className={classNames('pi', { 'pi-eye': passwordVisible, 'pi-eye-slash': !passwordVisible }, 'eye-icon')}
                                onClick={togglePasswordVisibility}></i>
                        </div>
                        <div>                     
                            {error && (
                                <p className="text-red-500 text-xs mt-0">{error}</p>                            )}
                        </div>
                    </div> :
                    <div className="password-wrapper">
                        <InputText
                            type={passwordVisible ? 'text' : 'password'}
                            value={value}
                            onChange={props.onChange}
                            className={classNames('w-full  text-xs password-input', { 'p-invalid': error })}
                            placeholder={placeholder}
                        />
                        <i className={classNames('pi', { 'pi-eye': passwordVisible, 'pi-eye-slash': !passwordVisible }, 'eye-icon')}
                            onClick={togglePasswordVisibility}></i>
                        {error && (
                            <p className="text-red-500 text-xs mt-0">{error}</p>
                        )}
                    </div>
            }
        </div>

    );
};

export default AppInputPassword;