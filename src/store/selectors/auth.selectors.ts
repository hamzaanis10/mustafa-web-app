import { useAppSelector } from "@/store/store";

export function authSelector() {
    const authorizationState = useAppSelector((state) => state.auth);

    const authState = authorizationState && authorizationState.get('auth')
    return authState;
}