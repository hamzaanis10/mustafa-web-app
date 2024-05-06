import "./app.otp.dialog.content.css";
import React from 'react';
import { InputOtp, InputOtpProps } from 'primereact/inputotp';
import AppButton from "../app.button/app.button";
 
interface AppOtpDialogProps extends InputOtpProps {
    onGoBack: () => void;
    description: string;
    label: string;
    onVerifyOtp: () => void;
    otp: string;
    setOtp: (newOtp: string) => void;
}
 
const AppOtpDialog: React.FC<AppOtpDialogProps> = (props:any) => {
    const { description, label, otp, length } = props;

    const handleChange = (e: any) => {
        const value = e.value;
        if (typeof value === 'string') {
          props.setOtp(value);
        }
      };
    
    const isOtpFilled = otp.length === length;
    
    return (
        <>
            <i className="pi pi-arrow-left absolute top-0 py-3 cursor-pointer" onClick={props.onGoBack} />
            <div className="flex flex-column align-items-center w-full">
                <p className="text-sm text-center font-normal pb-4" style={{color: '#7B7B7B'}}> {description} </p>
                <div className="mb-5">
                <InputOtp 
                    length={length}
                    value={otp} 
                    onChange={handleChange} 
                    integerOnly
                />
                </div>
                <div className="w-full">
                    <AppButton label={label} disabled={!isOtpFilled} onClick={props.onVerifyOtp}/>
                </div>
            </div>
        </>
    );
}

export default AppOtpDialog