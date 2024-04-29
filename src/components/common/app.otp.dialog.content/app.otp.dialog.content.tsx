import { useRef } from "react";
import { InputText } from "primereact/inputtext";
import AppButton from "../app.button/app.button";
 
interface AppOtpDialogProps {
    otp: string[];
    onHandleOtpChange: (value: string, index: number) => void;
    onVerifyOtp: () => void;
    isOtpComplete: boolean;
    onGoBack: () => void;
    description: string;
    label: string;
}
 
const AppOtpDialog: React.FC<AppOtpDialogProps> = ({
    otp,
    onHandleOtpChange,
    onVerifyOtp,
    isOtpComplete,
    onGoBack,
    description,
    label
}) => {
    const inputRefs = Array(otp.length).fill(0).map(() => useRef<HTMLInputElement>(null));
 
    const handleOtpChange = (value: string, index: number) => {
        onHandleOtpChange(value, index);
        if (value !== '') {
            const nextElement = index + 1 < otp.length ? inputRefs[index + 1].current : null;
            if (nextElement) {
                nextElement.focus();
            }
        } else {
            const prevElement = index - 1 >= 0 ? inputRefs[index - 1].current : null;
            if (prevElement) {
                prevElement.focus();
                prevElement.value = '';
            }
        }
    };
    return (
        <>
            <i className="pi pi-arrow-left absolute top-0 py-3 cursor-pointer" onClick={onGoBack} />
            <div className="flex flex-column align-items-center w-full">
                <p className="text-sm text-center font-normal pb-4" style={{color: '#7B7B7B'}}> {description} </p>
                <div className="flex mb-4">
                    {otp.map((digit, index) => (
                        <InputText
                            key={index}
                            ref={inputRefs[index]}
                            type="tel"
                            value={digit}
                            onChange={(e) => handleOtpChange(e.target.value, index)}
                            autoFocus={index === 0}
                            className="ml-2"
                            style={{ width: '40px', height: '40px', textAlign: 'center', borderRadius: '5px', border: '1px solid #C4C4C4' }}
                            maxLength={1}
                        />
                    ))}
                </div>
                <div className="w-full">
                    <AppButton label={label} disabled={!isOtpComplete} onClick={onVerifyOtp} style={{backgroundColor: "#00CB56"}}/>
                </div>
            </div>
        </>
    );
}

export default AppOtpDialog