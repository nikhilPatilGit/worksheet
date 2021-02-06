import {User} from "../../modals/User";

export type AuthState = {
    currentUser: User;
    error? : Error;
    isAuthenticated: boolean;
};

export const InitialAuthState: AuthState = {
    currentUser: null,
    isAuthenticated: false
};