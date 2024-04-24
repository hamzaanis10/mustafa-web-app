import ButtonOne from "../app.button/app.button";

interface VerificationMethodProps {
    onOpenOtpForm: () => void;
    onGoBack: () => void; 
}

export const VerificationMethodDialogContent: React.FC<VerificationMethodProps> = ({ onOpenOtpForm, onGoBack }) => (
    <>
        <i className="pi pi-arrow-left absolute top-0 py-3 cursor-pointer" onClick={onGoBack}/>
        <div className="flex align-items-center border-bottom-1 surface-border surface-overlay w-full">
            <p className="text-sm font-normal w-auto text-center pb-4" style={{color: '#7B7B7B'}}>Please choose your preferred verification method.</p>
        </div>
        <ButtonOne disabled={false} label="Send via Whatsapp" onClick={onOpenOtpForm} />
        <div className='flex justify-content-center align-items-center pt-2 pb-4' style={{color: '#7B7B7B'}}>
            <hr className='flex-grow-1 bg-gray-1' />
            <span className="px-2">or</span>
            <hr className='flex-grow-1 bg-gray-1' />
        </div>
        <ButtonOne disabled={false} label="Send via Sms" onClick={onOpenOtpForm} />
    </>
);