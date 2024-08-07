import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignUpData, SignUpDetails, SignUpState } from '@/types/api-types';



const initialState: SignUpState = {
    data: {
        displayName: '',
        password: '',
        email: '',
        phoneCountryCode: '',
        // phoneFlagCode: '',
        phoneNumber: '',
        otp: '',
        method: 'phone',
    },
    details: {
        step: 'VALIDATION',
    },
    otpMethod: null,
    currentStep: 'VALIDATION',
};

const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        updateSignUpData: (state, action: PayloadAction<Partial<SignUpData>>) => {
            state.data = { ...state.data, ...action.payload };
        },
        updateSignUpDetails: (state, action: PayloadAction<Partial<SignUpDetails>>) => {
            state.details = { ...state.details, ...action.payload };
        },
        setOtpMethod: (state, action: PayloadAction<'SMS' | 'WhatsApp' | 'Email'>) => {
            state.otpMethod = action.payload;
        },
        setCurrentStep: (state, action: PayloadAction<'VALIDATION' | 'OTP' | 'SIGNUP'>) => {
            state.currentStep = action.payload;
        },
        resetSignUpState: () => initialState,
    },
});

export const {
    updateSignUpData,
    updateSignUpDetails,
    setOtpMethod,
    setCurrentStep,
    resetSignUpState,
} = signUpSlice.actions;

export default signUpSlice.reducer;
