import axios from "axios";
const { v4: uuidv4 } = require('uuid');
import { setCookie, getCookie } from 'cookies-next';

function parseJSON(response: any) {
  // if (response && response.headers) {
  //   if (response.headers["content-type"] === "application/octet-stream") {
  //     if (response.config.url.includes('api/v1/customer/avatar') || response.config.url.includes('api/v1/transactions/export') || response.config.url.includes('api/v1/transactions/export/single')) // for user profile image and export transaction
  //       return response.data && response.data();
  //     else
  //       response.data && response.data.text();
  //   }
  // }
  if (response.status === 402 || response.status === 401 || response.status === 419 || response.status === 400 || response.status === 500 || response.status === 404) {
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

  // if (response && response.code === 204 || response && response.code === 205) {
  //   return null;
  // }
  // if (response && response.headers && response.headers['x-total']) {
  //   return {
  //     ...response.data, 'x-total': response.headers['x-total']
  //   }
  // }
  // else if (response && typeof response.data === 'number') {
  //   return { value: response && response.data }
  // }
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
    let headers = {};
    const deviceSerial = getCookie('deviceSerial'); // => 'value'
    if (!deviceSerial) {
      const uuid = uuidv4();
      setCookie('deviceSerial', uuid);
      headers = { ...headers, 'X-Device-Serial': uuid }
    }
    else {
      headers = { ...headers, 'X-Device-Serial': deviceSerial }
    }
    const resAxios = axios({
      //...options,
      url: `${process.env.NEXT_PUBLIC_API_URL}/${action.payload.url}`,
      method: action.payload.method,
      data: action.payload.data,
      headers: headers,
      validateStatus: function (status) {
        return status >= 200 && status <= 700;
      }
    }).then(checkStatus)
      .then(parseJSON)
      .then((response) => {
        if (response && response.error) {
          dispatch({
            type: `${action.type}_ERROR`, payload: {
              additionalData: action.payload,
              response,
              baseType: action.type
            }
          })
        }
        else {
          dispatch({
            type: `${action.type}_SUCCESS`, payload: {
              additionalData: action.payload,
              response,
              baseType: action.type
            }
          })
        }

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
};
export default apiMiddleware;
