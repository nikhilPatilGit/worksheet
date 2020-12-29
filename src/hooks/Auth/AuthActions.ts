import { User } from "./Model";

export type AuthState = {
    currentUser?: User;
};


export const InitialAuthState: AuthState = {};

export type AuthAction =
  | {
      type: "UpdateCurrentUser";
      result: User;
    }