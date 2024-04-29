const initialState = fromJS({
    loading: true,
    auth: {
        accessToken: null
    },
    userProfile: null
})
import {
    createReducer,
    UnknownAction,
    PayloadAction,
  } from '@reduxjs/toolkit'
import { fromJS } from 'immutable'
import { doLogin } from '../actions/auth.actions'
  
  function isActionWithNumberPayload(
    action: UnknownAction
  ): action is PayloadAction<number> {
    return typeof action.payload === 'number'
  }
  
  export const authReducer = createReducer(initialState,
    (builder) => {
      builder
        .addCase(doLogin, (state, action) => {
          // action is inferred correctly here
          return state;
        })
        // You can chain calls, or have separate `builder.addCase()` lines each time
        .addCase("LOGIN_SUCCESS", (state, action) => {
          return state;
        })
        // You can apply a "matcher function" to incoming actions
        .addMatcher(isActionWithNumberPayload, (state, action) => {
            return state;
        })
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