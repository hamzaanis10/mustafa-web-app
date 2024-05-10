import { useKey } from "@/app/hooks/fetch";
import { addUpdateAppLoadersStatus } from "../actions/app.actions";
import { mutate } from "swr"

const appAfterMiddleware = ({ dispatch }: any) => (next: any) => async (action: any) => {
  if (action.type.includes('SUCCESS')) {
    // if (action.payload.baseType.includes('ADD_PRODUCT_TO_CART')) {
    //   action?.payload?.additionalData?.details?.cartsMutate();
    // }
    action?.payload?.additionalData?.details?.mutationKeys?.forEach((key: any) => {
      const ke = useKey(key)
      mutate(ke);
    });

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
