import AppButton from "../app.button/app.button";
import AppInputEmail from "../app.input.email/app.input.email";

interface AppGuestCheckoutProps {
    text?: string;
    continueAsGuestLabel: string;
    backAsGuestLabel: string;
    email: string;
    emailError: string;
    onEmailChange: (value: string) => void;
    onContinueAsGuest: (email: string) => void;
}

const AppGuestCheckout: React.FC<AppGuestCheckoutProps> = (props: any) => {
    const { text, continueAsGuestLabel, backAsGuestLabel, email, emailError } = props

    const handleContinueAsGuest = () => {
        props.onContinueAsGuest();
    };

    return (
        <div className="flex flex-column align-items-center text-center">
            <p className="text-center line-height-2 font-normal mb-3" style={{ fontSize: '12px', color: "#00CB56" }}> {text} </p>
            <div className="inputfield">
                <AppInputEmail checkout={true} value={email} error={emailError} onChange={props.onEmailChange} removeLabel={true} placeholder="We need your email to process the order" />
            </div>
            <div style={{ width: '19rem' }}>
                <AppButton label={continueAsGuestLabel} disabled={false} onClick={handleContinueAsGuest} />
            </div>
            <div style={{ width: '19rem' }}>
                <AppButton label={backAsGuestLabel} disabled={false} style={{ background: 'transparent', color: "#00CB56" }} />
            </div>
        </div>
    )
}

export default AppGuestCheckout