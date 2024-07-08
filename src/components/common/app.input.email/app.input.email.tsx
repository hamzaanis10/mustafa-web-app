import React from 'react';
import { InputText, InputTextProps } from 'primereact/inputtext';
import "./app.input.email.scss"

interface AppInputEmailProps extends InputTextProps{
    removeLabel?: boolean;
    error?: string;
    placeholder ?: string;
    checkout ?: boolean;
    id ?:string;
}

const AppInputEmail: React.FC<AppInputEmailProps> = (props: any) => {
    const { value, removeLabel, error, placeholder, checkout, id } = props
    return (
        <div id={id}>
            {removeLabel ? (
                <div className='mb-4'>
                    <div className="border-1 border-round flex align-items-center" style={{ borderColor: '#C4C4C4' }}>
                        {!checkout ? <i className="pi pi-user pl-1" style={{ fontSize: 15 }} /> :
                            <i className="pi pi-envelope pl-1" style={{marginLeft: "2px", fontSize: 13 }} />
                        }
                        <InputText
                            type="email"
                            value={value}
                            className="w-full text-xs"
                            placeholder={placeholder}
                            onChange={props.onChange}
                        />
                    </div>
                    <div>
                        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                    </div>
                </div>
            ) : (
                <>
                    <label htmlFor="email" className="block font-medium text-900 text-xs mb-1">Email/ Mobile number</label>
                    <InputText
                        id="email"
                        type="email"
                        placeholder={placeholder}
                        className="w-full mb-1 text-xs"
                        value={value}
                        onChange={props.onChange}
                        required />
                    {error && <p className="text-red-500 text-xs mt-0">{error}</p>}
                </>
            )}
        </div>
    );
};

export default AppInputEmail;