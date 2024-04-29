const initialState = fromJS({
  appLoadersStatus: []
})
import { differenceBetweenDatesInMinutes } from '@/components/common/util/util'
import {
  createReducer,
  nanoid
} from '@reduxjs/toolkit'
import { fromJS } from 'immutable'

export const appReducer = createReducer(initialState,
  (builder) => {
    builder
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase("ADD_UPDATE_APP_LOADERS_STATUS", (state: any, action: any) => {
        return state.update('appLoadersStatus', (loaderStatus: any) => {
          let index = loaderStatus.findIndex((status: any) => status.get('actionType') === action.payload.data.actionType);
          if (index > -1) {
            if (action.payload.data.status === "FINNISH") {
              return loaderStatus.filterNot((status: any) => status.get('actionType') === action.payload.data.actionType);
            }
            else {
              if (action.payload.data.status === "PENDING") {
                let newStatus = loaderStatus.filterNot((status: any) => status.get('actionType') === action.payload.data.actionType);
                const id = nanoid()
                return newStatus.push(fromJS({
                  timeStamp: Date.now(),
                  id,
                  actionType: action.payload.data.actionType,
                  status: action.payload.data.status
                }))
              }
              else {
                return loaderStatus.updateIn([index], (status: any) => {
                  if (action.payload.data.error) {
                    return status.merge({
                      timeStamp: Date.now(),
                      status: action.payload.data.status,
                      error: fromJS(action.payload.data.error)
                    })
                  }
                  else {
                    return status.merge({
                      timeStamp: Date.now(),
                      status: action.payload.data.status
                    })
                  }

                })
              }
            }
          }
          else {
            const id = nanoid()
            return loaderStatus.push(fromJS({
              timeStamp: Date.now(),
              id,
              actionType: action.payload.data.actionType,
              status: action.payload.data.status
            }))
          }
        })
      })
      .addCase("CLEAR_APP_LOADER_STATUS", (state: any, action: any) => {
        return state.update('appLoadersStatus', (loaderStatus: any) => {
          return loaderStatus && loaderStatus.filter((status: any) => differenceBetweenDatesInMinutes(status.get('timeStamp'), new Date()) <= 0.3);
        })
      })
      // You can apply a "matcher function" to incoming actions
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {
        return state;
      })
  }
)
// export const authSlice = createAppSlice({
//     name: "auth",
//     initialState,
//     reducers: (create) => ({
//         // setAuthState: create.reducer<any>((state, action) => {
//         //     debugger
//         //     state.authState = action.payload.text;
//         // }),
//         setAuthState: create.preparedReducer(
//             (text: any) => {
//                 const id = nanoid()
//                 return { payload: { text } }
//             },
//             // action type is inferred from prepare callback
//             (state:any, action) => {
//                 return state.set('auth', fromJS({ accessToken: "abc" }));
//                 //return state.set('value', state.get('value') + 1);
//                 // state.todos.push(action.payload)
//             }
//         )
//     })
// });