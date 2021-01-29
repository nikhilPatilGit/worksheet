import {User} from "../../modals/User";

export type AuthState = {
    currentUser?: User;
    error? : Error
};

export const InitialAuthState: AuthState = {};