import React, {Context, createContext, FC, Reducer, useEffect, useReducer} from "react";
import { AuthReducer } from "./AuthReducer";
import {AuthState, InitialAuthState} from "./AuthState";
import {Action} from "../Common/Action";
import {onAuthStateChanged} from "../../api/firebaseAuth";
import {auth} from "../../config/firebase";
import {User} from "../../modals/User";
import {createActionResult} from "../../helper/Factories";
import {ActionType} from "../Common/Types";
import { useRouter } from 'next/router'
import {RouteMapper} from "../../util/RouteRedirectMapper";

export const AuthStateContext: Context<AuthState> = createContext(
    InitialAuthState
  );
export const AuthReducerContext = createContext(
    (() => 0) as React.Dispatch<Action>
  );

  export const AuthProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<AuthState, Action>>(
      AuthReducer,
      InitialAuthState
    );
    const router = useRouter();

  useEffect(() => {
    RouteMapper(localStorage.getItem("isAuthenticated") === "true", router);
  }, [state.currentUser])

  useEffect(() => {
    console.log(router);
    return onAuthStateChanged(dispatch);
  }, []);
  
    return (
      <AuthReducerContext.Provider value={dispatch}>
        <AuthStateContext.Provider value={state}>
          {children}
        </AuthStateContext.Provider>
      </AuthReducerContext.Provider>
    );
  };