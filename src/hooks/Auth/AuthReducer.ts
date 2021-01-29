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
  return {...state, currentUser: actionResult.result};
};

const signOut = (state: AuthState, action: Action): AuthState => {
  return {...state, currentUser: undefined};
};

const handleError = (state: AuthState, action: Action): AuthState => {
  let actionResult = action as ActionResult<Error>;
  return updateObject(state, {error: actionResult.result});
}



export const AuthReducer: Reducer<AuthState, Action> = (
    authState: AuthState,
    authAction: Action
  ) => {
  let map: MapAuthActionState = new Map([
    [ActionType.SignIn, signIn],
    [ActionType.SignOut, signOut],
    [ActionType.ErrorThrown, handleError]
  ]);
  return (map.has(authAction.actionType) ? map.get(authAction.actionType)(authState, authAction) : authState);
};