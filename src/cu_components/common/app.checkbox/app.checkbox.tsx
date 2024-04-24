"use client"
import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from "primereact/dialog";

interface CheckboxOneProps {
    agreementChecked: boolean;
    onChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    isSignup: boolean;
}

const CheckboxOne: React.FC<CheckboxOneProps> = ({ agreementChecked, onChangeCheckbox, label, isSignup}) => {
    const [showAgreement, setShowAgreement] = useState<boolean>(false);

    const pdfUrl = "http://example.com/user_agreement.pdf";

    const agreementContent = (
        <iframe
            src={pdfUrl}
            width="100%"
            height="500px"
            title="PDF Agreement Document"
        />
    );
    return (
        <div>
            <Checkbox
                inputId="checkbox"
                onChange={onChangeCheckbox}
                checked={agreementChecked}
                className="mr-2 pt-1"
            />
            {/* <label htmlFor="rememberme" className="p-checkbox-label">{label}</label> */}
            {isSignup ?
                <label
                    htmlFor="checkbox-agreement"
                    className="p-checkbox-label cursor-pointer hover:text-blue-500"
                    onClick={() => setShowAgreement(true)}
                >
                    {label}
                </label>
                :
                <label
                    htmlFor="checkbox-agreement"
                    className="p-checkbox-label"
                >
                    {label}
                </label>
            }

            <Dialog
                header="Agreement"
                visible={showAgreement}
                modal
                style={{ width: '70vw' }}
                onHide={() => setShowAgreement(false)}
            >
                {agreementContent}
            </Dialog>
        </div>
    );
};

export default CheckboxOne;