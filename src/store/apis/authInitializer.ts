import { customerProfileApi } from '@/store/apis/customerProfileAPI';
import { clearUser, setUser } from '../reducers/loginSlice';
import { AppDispatch } from '../store';
import { LoginData } from '@/types/api-types';

export const initializeAuthState = () => async (dispatch: AppDispatch) => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
        try {
            const customerProfile = await dispatch(customerProfileApi.endpoints.getCustomerProfile.initiate()).unwrap();

            if (customerProfile) {
                const loginData: LoginData = {
                    identifier: customerProfile.displayName,
                    password: customerProfile.passwordHash,
                };

                dispatch(setUser(loginData));
            } else {
                dispatch(clearUser());
            }
        } catch (error) {
            console.error('Failed to fetch user profile:', error);
            dispatch(clearUser());
        }
    } else {
        dispatch(clearUser());
    }
};
