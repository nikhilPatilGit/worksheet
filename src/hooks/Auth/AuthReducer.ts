import {Reducer} from "react";
import {AuthState} from "./AuthState";
import {Action, ActionResult} from "../Common/Action";
import {ActionType, MapAuthActionState} from "../Common/Types";
import {User} from "../../modals/User";


const updateObject = (
    oldState: AuthState,
    newValues: AuthState
): AuthState => {
    return Object.assign({}, oldState, newValues);
};

const signIn = (state: AuthState, action: Action): AuthState => {
  let actionResult = action as ActionResult<User>;
  return {...state, currentUser: actionResult.result, isAuthenticated: true};
};

const signOut = (state: AuthState, action: Action): AuthState => {
  return {...state, currentUser: null, isAuthenticated: false};
};

const setAuthStatus = (state: AuthState, action: Action): AuthState => {
  let actionResult = action as ActionResult<boolean>;
  return {...state, isAuthenticated: actionResult.result};
}

export const AuthReducer: Reducer<AuthState, Action> = (
    authState: AuthState,
    authAction: Action
  ) => {
  let map: MapAuthActionState = new Map([
    [ActionType.SignIn, signIn],
    [ActionType.SignOut, signOut],
    [ActionType.SetAuthStatus, setAuthStatus]
  ]);
  return (map.has(authAction.actionType) ? map.get(authAction.actionType)(authState, authAction) : authState);
};