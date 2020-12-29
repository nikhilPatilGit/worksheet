import { Reducer } from "react";
import { AuthState, AuthAction } from "./AuthActions";

export const AuthReducer: Reducer<AuthState, AuthAction> = (
    authState: AuthState,
    authAction: AuthAction
  ) => {
    let newState: AuthState = { ...authState };
    switch (authAction.type) {
      case "UpdateCurrentUser":
          newState.currentUser = authAction.result;
          console.log(newState);
        return newState;
      default:
        throw new Error("Action not found");
    }
  };