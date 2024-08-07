import AppButton from "../app.button/app.button";

interface AppVerificationMethodProps {
    onOpenOtpForm: (type: 'SMS' | 'WhatsApp' | 'Email') => void;
    onGoBack: () => void;
}

export const AppVerificationMethod: React.FC<AppVerificationMethodProps> = ({ onOpenOtpForm, onGoBack }) => (
    <>
        <i className="pi pi-arrow-left absolute top-0 py-3 cursor-pointer" onClick={onGoBack}/>
        <div className="flex align-items-center border-bottom-1 surface-border surface-overlay w-full">
            <p className="text-sm font-normal w-auto text-center pb-4" style={{color: '#7B7B7B'}}>Please choose your preferred verification method.</p>
        </div>
        <AppButton disabled={false} label="Send via Whatsapp" onClick={() => onOpenOtpForm('WhatsApp')} />
        <div className='flex justify-content-center align-items-center pt-2 pb-4' style={{color: '#C4C4C4', width: "255px", margin: "0 auto"}}>
            <hr className='flex-grow-1 bg-gray-1' />
            <span className="px-2 pb-1">or</span>
            <hr className='flex-grow-1 bg-gray-1' />
        </div>
        <AppButton disabled={false} style={{ backgroundColor: 'transparent', color: "#00CB56" }} label="Send via Sms" onClick={() => onOpenOtpForm('SMS')} />
    </>
);