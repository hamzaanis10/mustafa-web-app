import { RadioButton, RadioButtonProps } from 'primereact/radiobutton'
import React from 'react';

interface AppRadioButtonProps extends RadioButtonProps {
  label?: string;
  htmlFor?: string
};

const AppRadioButton: React.FC<AppRadioButtonProps>= (props:any) => {
    const {checked, label, value, name, inputId, htmlFor} = props
    
  return (
    <div className='flex'>
       <RadioButton inputId={inputId} name={name} value={value} onChange={props.onChange} checked={checked} />
       <label htmlFor={htmlFor} className="font-normal text-base  ml-2">{label}</label>
    </div>
  )
}

export default AppRadioButton
