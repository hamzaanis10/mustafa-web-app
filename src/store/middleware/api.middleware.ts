import axios from "axios";

function parseJSON(response: any) {
  // if (response && response.headers) {
  //   if (response.headers["content-type"] === "application/octet-stream") {
  //     if (response.config.url.includes('api/v1/customer/avatar') || response.config.url.includes('api/v1/transactions/export') || response.config.url.includes('api/v1/transactions/export/single')) // for user profile image and export transaction
  //       return response.data && response.data();
  //     else
  //       response.data && response.data.text();
  //   }
  // }
  if (response && response.code === 401) {
    return {
      code: 401,
      error: response.error,
      message: "Session Expired"
    }
  }
  if (response && response.code === 419) {
    return {
      code: 419,
      message: "Session Expired"
    }
  }
  if (response.status === 402 || response.status === 400 || response.status === 500 || response.status === 404) {
    if (response.config.actionType === "DOWNLOAD_RECEIPT") {
      return response.data.text().then((res: any) => {
        return JSON.parse(res)
      })
    }
    else if (response.data.error && response.data.error.message) {
      return response.data
    }
    else if (response.data.error && (typeof response.data.error === 'string' || response.data.error instanceof String)) {
      return {
        error: {
          message: response.data.error
        }
      }
    }
    else {
      return {
        error: response.data
      }
    }
  }

  if (response && response.code === 204 || response && response.code === 205) {
    return null;
  }
  if (response && response.headers && response.headers['x-total']) {
    return {
      ...response.data, 'x-total': response.headers['x-total']
    }
  }
  else if (response && typeof response.data === 'number') {
    return { value: response && response.data }
  }
  else if (response.data) {
    return response && response.data;
  }
  else {
    return {
      operationDone: true
    }
  }
}

/**
* Checks if a network request came back fine, and throws an error if not
*
* @param  {object} response   A response from a network request
*
* @return {object|undefined} Returns either the response, or throws an error
*/
function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 500) {
    return response;
  }

  if (response.status === 400) {
    return response;
  }
  if (response.status === 402) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (response.status === 401 || response.status === 419 || response.status === 403) {
    return {
      code: 401,
      error: response.data.error,
      message: "Session Expired"
    }
  }

  const error: any = new Error(response.statusText);
  error.response = response;
  throw error;
}
const apiMiddleware = ({ dispatch }: any) => (next: any) => async (action: any) => {
  if (action.payload && action.payload.url) {
    const resAxios = axios({
      //...options,
      url: `${process.env.NEXT_PUBLIC_API_URL}/${action.payload.url}`,
      method: action.payload.method,
      data: action.payload.data,
      validateStatus: function (status) {
        return status >= 200 && status <= 700;
      }
    }).then(checkStatus)
      .then(parseJSON)
      .then((response) => {
        dispatch({
          type: `${action.type}_SUCCESS`, payload: {
            additionalData: action.payload,
            response
          }
        })
      })
      .catch(error => {
        console.log(error)
        if (error && error.__CANCEL__ === true) {
          return {
            code: 1,
            message: "Request Cancelled"
          }
        }
        else {
          return {
            code: 0,
            message: "Connection Failed"
          }
        }
      });
    return resAxios;
  }
  else {
    return next(action)
  }
  // if (action.type !== actions.apiCall.type) return next(action);

  // next(action);
  // const { url, method, data, onSuccess, onError } = action.payload;
  // try {
  //   const response = await axios.request({
  //     // baseURL: "",
  //     url,
  //     method
  //     // data
  //   });
  //   // dispatch(action);
  //   //General
  //   dispatch(actions.apiCallSuccess(response.data));
  //   //Specific
  //   if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  // } catch (error:any) {
  //   //general
  //   dispatch(actions.apiCallFailed(error));
  //   //specific
  //   if (onError) dispatch({ type: onError, payload: error });
  // }
};
export default apiMiddleware;
