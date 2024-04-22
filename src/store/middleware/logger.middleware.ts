const loggerMiddleware = ({ dispatch }:any) => (next:any) => async (action:any) => {
    console.log("action", action);
    next(action);
  };
  export default loggerMiddleware;
  