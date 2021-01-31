import React, {Context, createContext, FC, Reducer, useContext, useEffect, useReducer, useState} from "react";
import { AuthReducer } from "./AuthReducer";
import {AuthState, InitialAuthState} from "./AuthState";
import {Action} from "../Common/Action";
import nookies from 'nookies';
import {firebase} from "../../config/firebase";

const AuthContext = createContext<{ user: firebase.User | null }>({
  user: null,
});

export const AuthProvider: FC = ({ children }) => {
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
      return firebase.auth().onIdTokenChanged(async (user) => {
        if (!user) {
          setUser(null);
          nookies.set(undefined, 'token', '');
        } else {
          const token = await user.getIdToken();
          setUser(user);
          nookies.set(undefined, 'token', token);
        }
      });
    }, []);

    useEffect(() => {
      const handle = setInterval(async () => {
        const user = firebase.auth().currentUser;
        if (user) await user.getIdToken(true);
      }, 10 * 60 * 1000);

      // clean up setInterval
      return () => clearInterval(handle);
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
  };

export const useAuth = () => {
  return useContext(AuthContext);
};
