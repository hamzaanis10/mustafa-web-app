export interface MessageResponse {
    message: string;
}

export interface SignUpDetails {
    step: 'VALIDATION' | 'SEND_OTP' | 'CONFIRM_SIGN_UP';
    //   [key: string]: any;
}

export interface SignUpData {
    displayName?: string,
    password?: string,
    email?: string,
    phoneCountryCode?: string,
    // phoneFlagCode: string,
    phoneNumber?: string,
    otp?: string
    method?: "email" | "phone"; 
    type?: 'EMAIL' | 'SMS' | 'WHATSAPP';
}

export interface SignUpState {
    data: SignUpData;
    details: SignUpDetails;
    otpMethod: 'SMS' | 'WhatsApp' | 'Email' | null;
    currentStep: 'VALIDATION' | 'OTP' | 'SIGNUP';
}

export interface LoginData {
    identifier: string;
    password: string;
}
