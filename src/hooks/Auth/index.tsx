import React, {Context, createContext, FC, Reducer, useContext, useEffect, useReducer, useState} from "react";
import { AuthReducer } from "./AuthReducer";
import {AuthState, InitialAuthState} from "./AuthState";
import {Action} from "../Common/Action";
import nookies from 'nookies';
import {firebase} from "../../config/firebase";
import { createActionResult } from "src/helper/Factories";
import { User } from "src/modals/User";
import { ActionType } from "../Common/Types";
import { FirebaseUserToUser } from "src/util/Converters";

const AuthContext = createContext<{ user: firebase.User | null }>({
  user: null,
});

export const AuthStateContext: Context<AuthState> = createContext(InitialAuthState);
export const AuthReducerContext = createContext(
  (() => 0) as React.Dispatch<Action>
);

export const AuthProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer<Reducer<AuthState, Action>>(
    AuthReducer,
    InitialAuthState
  );

    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
      return firebase.auth().onIdTokenChanged(async (user) => {
        if (!user) {          
          dispatch(createActionResult<User>(ActionType.SignOut));
          //setUser(null);
          nookies.set(undefined, 'token', '');
        } else {
          const token = await user.getIdToken();
          //setUser(user);
          dispatch(createActionResult<User>(ActionType.SignIn, FirebaseUserToUser(user)));          
          nookies.set(undefined, 'token', token);
        }
      });
    }, []);

    useEffect(() => {
      const handle = setInterval(async () => {
        const user = firebase.auth().currentUser;
        if (user) await user.getIdToken(true);
      }, 10 * 60 * 1000);

      // clean up setInterval
      return () => clearInterval(handle);
    }, []);

    return (
       <AuthReducerContext.Provider value={dispatch}>
         <AuthStateContext.Provider value={state}>
           {children}
         </AuthStateContext.Provider>
       </AuthReducerContext.Provider>
        // <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
  };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
