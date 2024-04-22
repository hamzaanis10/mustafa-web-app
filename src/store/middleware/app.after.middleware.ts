const appAfterMiddleware = ({ dispatch }:any) => (next:any) => async (action:any) => {
  return next(action)

};
export default appAfterMiddleware;
