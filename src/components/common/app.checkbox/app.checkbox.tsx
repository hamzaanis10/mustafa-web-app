import React from 'react';
import { Checkbox, CheckboxProps } from 'primereact/checkbox';
import "./app.checkbox.scss"

interface AppCheckboxProps extends CheckboxProps {
    label?: string;
    id?: string; 
}

const AppCheckBox: React.FC<AppCheckboxProps> = (props:any) => {
    const { label, checked, id } = props;
    return (
        <div id="checkbox">
            <Checkbox
                inputId={id}
                checked={checked}
                onChange={props.onChange}
                className="pt-1"
                id={id}
            />
            <label
                htmlFor={id}
                className="p-checkbox-label cursor-pointer"
            >
                {label}
            </label>
        </div>
    );
};

export default AppCheckBox;