import "./app.input.address.css"
import { InputText } from "primereact/inputtext";
 
interface AppInputAddressProps {
    value: string;
    originalPlaceholder: string;
    setInputAddress: (value: string) => void;
}
 
const AppInputAddress: React.FC<AppInputAddressProps> = (props: any) => {
    const { value, originalPlaceholder } = props;
 
    return (
        <div className="card flex justify-content-center">
            <div className="optional-container">
                <InputText
                    id="input-address"
                    value={value}
                    onChange={(e) => props.setInputAddress(e.target.value)}
                    keyfilter="alphanum"
                    className="text-sm"
                    placeholder={originalPlaceholder}
                />
            </div>
        </div>
    )
}
 
export default AppInputAddress