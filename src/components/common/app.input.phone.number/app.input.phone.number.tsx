import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './app.input.phone.number.css'; 

interface AppInputPhoneNumberProps {
    value: string;
    onChange: (phone: string) => void;
    isValid?: boolean;
}

const AppInputPhoneNumber: React.FC<AppInputPhoneNumberProps>= (props:any) => {
    const { value, isValid } = props;

    return (
        <div className="phone-input-container mt-1 w-100">
        <PhoneInput
            className={`phone-input-field  ${isValid === false ? 'invalid' : ''}`}
            defaultCountry="SG"
            placeholder="Enter Number (e.g. +123456789)"
            value={value}
            onChange={props.onChange}
            limitMaxLength
            international
            // countryOptionsOrder={['SG', 'US', 'GB', '|', '...']}
        />
        {value !== '' && isValid === false && (
            <div className="text-red-500 text-xs mb-1">
                Invalid phone number
            </div>
        )}
    </div>
    );
};

export default AppInputPhoneNumber;

