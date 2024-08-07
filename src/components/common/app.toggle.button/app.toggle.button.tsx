import "./app.toggle.button.scss"
import { SelectButton, SelectButtonChangeEvent, SelectButtonProps } from 'primereact/selectbutton';

interface AppToggleButtonProps extends SelectButtonProps {
    selectedValue: string;
    onOptionChange: (value: string) => void;
    options: string[];
    id: string
}

const AppToggleButton: React.FC<AppToggleButtonProps> = (props: any) => {

    const {selectedValue, options, id} = props

    const handleChange = (e: SelectButtonChangeEvent) => {
        props.onOptionChange(e.value); 
    };

    return (
        <div className="card flex justify-content-center" id={id}>
            <SelectButton className="custom-select-button" value={selectedValue} onChange={handleChange} options={options}/>
        </div>
    );
}
  
export default AppToggleButton