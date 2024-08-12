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

export interface LoginResponse {
    accessToken: string;
}

export interface LoginData {
    identifier?: string;
    userInfo?:any;
    accessToken?:any;
    password?: string;
}

export interface CustomerProfile {
    id: string;
    username: string;
    passwordHash: string;
    displayName: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneCountryCode: string;
    phoneFlagCode: string;
    phoneNumber: string;
    active: boolean;
    failedLoginCount: number;
    accessTokenResetAt: string;
    deviceSerial: string;
    isGuest: boolean;
    customerSettings: {
      countryId: string;
      provinceId: string;
      currency: string;
      email: string;
    };
    lastFirebaseToken: string;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
  }