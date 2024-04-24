import React, { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './app.phone.number.css'; 

const PhoneNumberInput: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

    const handleOnChange = (phone: string) => {
        setValue(phone);
        setIsValid(phone ? isValidPhoneNumber(phone) : undefined);
    };

    return (
        <div className="phone-input-container">
            <PhoneInput
                className={`phone-input-field mb-2 ${isValid === false ? 'invalid' : ''}`}
                defaultCountry="SG"
                placeholder="Enter Number(e.g +123456789)"
                value={value}
                onChange={handleOnChange}
                international
            />
            {value !== '' && isValid === false && (
                <div className="phone-input-error mb-1">
                    Invalid phone number
                </div>
            )}
        </div>
    );
};

export default PhoneNumberInput;