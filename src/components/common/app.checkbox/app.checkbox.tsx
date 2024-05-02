import React from 'react';
import { Checkbox, CheckboxProps } from 'primereact/checkbox';

interface AppCheckboxProps extends CheckboxProps {
    label: string;
    id?: string; 
}

const AppCheckBox: React.FC<AppCheckboxProps> = (props:any) => {
    const { label, checked, id } = props;
    return (
        <div>
            <Checkbox
                inputId={id}
                checked={checked}
                onChange={props.onChange}
                className="mr-2 pt-1"
            />
            <label
                htmlFor={id}
                className="p-checkbox-label cursor-pointer">
                {label}
            </label>
        </div>
    );
};

export default AppCheckBox;