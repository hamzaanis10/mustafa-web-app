import { InputText } from "primereact/inputtext";
import "./app.input.zip.code.css"
 
interface AppInputZipCodeProps {
    value: string;
    originalPlaceholder: string;
    onChange: (value: string) => void;
    onFocus: () => void;
    onBlur: () => void;
}
 
const AppInputZipCode: React.FC<AppInputZipCodeProps> = (props:any) => {
    const { value, originalPlaceholder } = props;
 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    };
 
    return (
        <div className="card flex justify-content-center" id="ZipCode">
            <div className={`zipcode-container ${value.trim() !== '' ? 'has-value' : ''}`}>
            <InputText
                value={value}
                onChange={handleInputChange}
                keyfilter="int"
                placeholder={originalPlaceholder}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                className={`text-sm placeholder-margin ${value.trim() !== "" ? 'has-value' : ''}`}
                />
                </div>
        </div>
    )
}
 
export default AppInputZipCode
