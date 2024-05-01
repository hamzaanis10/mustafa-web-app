import React from 'react';
import { InputText, InputTextProps } from 'primereact/inputtext';

interface AppInputEmailProps extends InputTextProps{
    removeLabel?: boolean;
    error?: string;
}

const AppInputEmail: React.FC<AppInputEmailProps> = (props: any) => {
    const { value, removeLabel, error } = props
    return (
        <div>
            {removeLabel ? (
                <div className='mb-4'>
                    <div className="border-1 border-round flex align-items-center" style={{ borderColor: '#C4C4C4' }}>
                        <i className="pi pi-user pl-1" style={{ fontSize: 15 }} />
                        <InputText
                            type="email"
                            value={value}
                            className="w-full text-xs"
                            placeholder="Enter your email"
                            onChange={(e) => props.onChange(e.target.value)}
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
                        placeholder="Email or Mobile number"
                        className="w-full mb-1 text-xs"
                        value={value}
                        onChange={(e) => props.onChange(e.target.value)}
                        required />
                    {error && <p className="text-red-500 text-xs mt-0">{error}</p>}
                </>
            )}
        </div>
    );
};

export default AppInputEmail;