"use client"
import "./app.login.checkout.dialog.css"
import { useState, useEffect } from "react";
import AppToggleButton from "../app.toggle.button/app.toggle.button";
import AppDialog from "../app.dialog/app.dialog";
import AppLoginStepOne from "../app.login/app.login.step.one/app.login.step.one";
import AppGuestCheckout from "../app.guest.checkout/app.guest.checkout";
import { emailSchema } from "../app.validation/app.validation";

const AppLoginCheckoutDialog: React.FC = () => {
    const [showCheckoutDialog, setShowCheckoutDialog] = useState<boolean>(true);
    const [accountType, setAccountType] = useState<string>("Guest checkout");
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");

    useEffect(() => {
        const emailValidation = emailSchema.safeParse(email)
        setEmailError(email ? (emailValidation.success ? "" : emailValidation.error.errors[0].message) : "");
    }, [email]);

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const handleOptionChange = (newValue: string) => {
        setAccountType(newValue);
    };

    const handleContinueAsGuest = () => {
        sessionStorage.setItem("guestEmail", email);
        console.log('Guest email saved in session storage:', email);
        // Continue with any other logic, e.g., navigate to another page or display a success message
    };

    const headerText = showCheckoutDialog ? "Choose how you want to proceed" : "";

    const toggleOptions = ['Guest checkout', 'Log in'];

    return (
        <AppDialog header={headerText} visible={showCheckoutDialog} modal onHide={() => setShowCheckoutDialog(false)} className='relative sm: w-15rem md: w-20rem lg: w-22rem'>
            <div className="flex flex-column align-items-center text-center">
                <AppToggleButton selectedValue={accountType} onOptionChange={handleOptionChange} options={toggleOptions} id="login-checkout" />

                {
                    accountType === "Guest checkout" ?
                        <>
                            <AppGuestCheckout
                                email={email}
                                emailError={emailError}
                                onEmailChange={handleEmailChange}
                                onContinueAsGuest={handleContinueAsGuest}
                                continueAsGuestLabel="Continue as Guest"
                                backAsGuestLabel="Back"
                                text="You can create account later"
                            />
                        </> :
                        <AppLoginStepOne checkout={true} />
                }
            </div>
        </AppDialog>
    )
}

export default AppLoginCheckoutDialog