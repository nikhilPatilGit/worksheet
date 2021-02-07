import React, { useContext } from "react";
import { FC, useEffect } from "react";
import { AccountManger } from "src/component/ProfileAccount";
import { LoginModal } from "src/component/SignIn/LoginModal";
import { AuthStateContext } from "src/hooks/Auth";
import { AuthState } from "src/hooks/Auth/AuthState";

export const AuthSwitch: FC = ({...props}) => {

    const state: AuthState = useContext(AuthStateContext);

    if(state.isAuthenticated){
        return <AccountManger />;
    }

    return <LoginModal/>
}