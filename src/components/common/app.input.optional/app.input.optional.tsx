import "./app.input.optional.css"
import { InputText } from "primereact/inputtext";
 
interface AppInputOptionalProps {
    value: string;
    originalPlaceholder: string;
    setUnitNumber: (value: string) => void;
}
 
const AppInputOptional: React.FC<AppInputOptionalProps> = (props: any) => {
    const { value, originalPlaceholder } = props;
 
    return (
        <div className="card flex justify-content-center" id="OptionalInput">
            <div className="optional-container">
                <InputText
                    id="unit-number"
                    value={value}
                    onChange={(e) => props.setUnitNumber(e.target.value)}
                    keyfilter="alphanum"
                    className="text-sm"
                    placeholder={originalPlaceholder}
                />
            </div>
        </div>
    )
}
 
export default AppInputOptional
