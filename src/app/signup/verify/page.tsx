"use client";
import 'primeflex/primeflex.css';
import "../signup.css";
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
// import { VerificationMethodDialogContent } from '@/app/components/common/verification.form.dialog.content/verification.form.dialog.content';
// import { OtpDialogContent } from '@/app/components/common/otp.dialog.content/otp.dialog.content';
// import { SuccessDialogContent } from '@/app/components/common/success.dialog.content/success.dialog.content';
// import { InputOtp } from 'primereact/inputotp';

const Verify: React.FC = () => {
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [showVerificationMethodForm, setShowVerificationMethodForm] = useState<boolean>(false);
    const [showOtpForm, setShowOtpForm] = useState<boolean>(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);

    const openVerificationMethodForm = () => {
        setShowVerificationMethodForm(true);
    };
    
    const closeVerificationMethodForm = () => {
        setShowVerificationMethodForm(false);
    };

    const openOtpForm = () => {
        console.log("opening otp form")
        setShowVerificationMethodForm(false);
        setShowOtpForm(true);
    };

    const closeOtpForm = () => {
        setShowOtpForm(false);
    };

    const handleOtpChange = (value: string, index: number) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);
    };

    const isOtpComplete = otp.every(digit => digit.trim() !== "");

    const verifyOtp = () => {
        console.log("Verifying OTP");
        setShowOtpForm(false);
        setShowSuccessDialog(true);
    };

    return (
        <>
            <Button label="Open Dialog" onClick={openVerificationMethodForm} />
            <Dialog header="Verify your number." visible={showVerificationMethodForm} modal style={{ width: '350px' }} onHide={closeVerificationMethodForm} contentStyle={{ overflow: 'hidden' }}>
                {/* <VerificationMethodDialogContent onOpenOtpForm={openOtpForm} /> */}
            </Dialog>

            <Dialog header="Verification Started." visible={showOtpForm} modal style={{ width: '350px' }} onHide={closeOtpForm}>
                {/* <OtpDialogContent otp={otp} onHandleOtpChange={handleOtpChange} onVerifyOtp={verifyOtp} isOtpComplete={isOtpComplete} /> */}
            </Dialog>

            <Dialog header="" visible={showSuccessDialog} modal style={{ width: '350px', textAlign: 'center' }} onHide={() => setShowSuccessDialog(false)}>
                {/* <SuccessDialogContent /> */}
            </Dialog>
        </>
    );
};

export default Verify;

