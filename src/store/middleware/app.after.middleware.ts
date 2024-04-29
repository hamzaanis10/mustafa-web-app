import { addUpdateAppLoadersStatus } from "../actions/app.actions";

const appAfterMiddleware = ({ dispatch }: any) => (next: any) => async (action: any) => {
  if (action.type.includes('SUCCESS')) {
    dispatch(addUpdateAppLoadersStatus({
      actionType: action.payload.baseType,
      loading: false,
      error: false,
      status: 'DONE'
    }))
    dispatch(addUpdateAppLoadersStatus({
      actionType: action.payload.baseType,
      status: 'FINNISH'
    }))
  }
  else if (action.type.includes('ERROR')) {
    dispatch(addUpdateAppLoadersStatus({
      actionType: action.payload.baseType,
      type: action.type,
      loading: false,
      error: action.payload && action.payload.response && action.payload.response.error,
      status: 'ERROR'
    }))
  }
  return next(action)
};
export default appAfterMiddleware;
