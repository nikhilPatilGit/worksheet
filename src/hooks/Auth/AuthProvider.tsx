import { Context, createContext, FC, Reducer, useReducer } from "react";
import { AuthAction, AuthState, InitialAuthState } from "./AuthActions";
import { AuthReducer } from "./AuthReducer";

export const AuthStateContext: Context<AuthState> = createContext(
    InitialAuthState
  );
export const AuthReducerContext = createContext(
    (() => 0) as React.Dispatch<AuthAction>
  );

  export const AuthProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<AuthState, AuthAction>>(
      AuthReducer,
      InitialAuthState
    );
  
    return (
      <AuthReducerContext.Provider value={dispatch}>
        <AuthStateContext.Provider value={state}>
          {children}
        </AuthStateContext.Provider>
      </AuthReducerContext.Provider>
    );
  };