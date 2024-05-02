import { addUpdateAppLoadersStatus, clearAppLoaderStatus } from "../actions/app.actions";

const appBeforeMiddleware = ({ dispatch }: any) => (next: any) => async (action: any) => {
    if (action.payload && action.payload.url) {
        dispatch(clearAppLoaderStatus());
        dispatch(addUpdateAppLoadersStatus({
            actionType: action.type,
            loading: true,
            error: false,
            status: 'PENDING'
        }))
        // Add a timestamp to the action payload
        action.payload.timestamp = Date.now();
    }
    return next(action)
};
export default appBeforeMiddleware;
