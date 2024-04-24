import React, { useState, ChangeEvent } from 'react';
import { InputText } from 'primereact/inputtext';
interface EmailProps {
    removeLabel: boolean
}

const Email: React.FC<EmailProps> = ({ removeLabel }) => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');

    const isEmailValid = (email: string): boolean =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
        if (!isEmailValid(e.target.value)) {
            setError('Invalid email format');
        } else {
            setError('');
        }
    };
    return (
        <div>
            {/* {!removeLabel ?
                    <label htmlFor="email" className="block font-medium text-900 text-xs mb-1">Email/ Mobile number</label>
                    : null}
            <InputText id="email" type="text" placeholder="Email or Mobile number" className="w-full mb-3 text-xs" value={email} onChange={handleEmailChange} required />
            {error && <p className="text-red-500 text-xs mt-0">{error}</p>} */}


            {removeLabel ?
                <>
                    <div className="border-1 border-round flex align-items-center mb-3" style={{ borderColor: '#C4C4C4' }}>
                        <i className="pi pi-user pl-1" style={{ fontSize: 15 }} />
                        <InputText
                            type="email"
                            value={email}
                            className={"w-full text-xs"}
                            placeholder="Enter your email"
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div>
                        {error && <p className="text-red-500 text-xs mt-0">{error}</p>}
                    </div>
                </> :
                <>
                    <label htmlFor="email" className="block font-medium text-900 text-xs mb-1">Email/ Mobile number</label>
                    <InputText
                        id="email"
                        type="email"
                        placeholder="Email or Mobile number"
                        className="w-full mb-3 text-xs"
                        value={email}
                        onChange={handleEmailChange}
                        required />
                    {error && <p className="text-red-500 text-xs mt-0">{error}</p>}
                </>
            }
        </div>
    );
};

export default Email;
