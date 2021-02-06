import { useContext } from "react";
import { FC, useEffect } from "react";
import { LoginModal } from "src/component/SignIn/LoginModal";
import { AuthStateContext } from "src/hooks/Auth";
import { AuthState } from "src/hooks/Auth/AuthState";
import { AccountManger } from "./AccountManager";

export const AuthSwitch: FC = ({...props}) => {

    const state: AuthState = useContext(AuthStateContext);

    if(state.isAuthenticated){
        return <AccountManger />;
    }

    return <LoginModal/>
}