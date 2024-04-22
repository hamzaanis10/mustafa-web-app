const appBeforeMiddleware = ({ dispatch }: any) => (next: any) => async (action: any) => {
    if (action.type === 'LOGIN' && action.payload) {
        // Add a timestamp to the action payload
        action.payload.timestamp = Date.now();
    }
    return next(action)
};
export default appBeforeMiddleware;
