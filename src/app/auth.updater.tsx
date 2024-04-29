import React from "react";
import { useAppDispatch } from "@/store/store";
//import { setAuthState } from "@/store/reducers/auth.reducer";
import { doLogin } from "@/store/actions/auth.actions";

const AuthUpdater = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(doLogin({
        identifier: 'muhammad.hamza501@yahoo.com',
        password: 'Tester@2'
      }))}>Log in</button>
      {/* <button onClick={() => dispatch(setAuthState(false))}>Log out</button> */}
    </div>
  );
};
export default AuthUpdater;