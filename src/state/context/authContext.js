import React, { useEffect, useReducer, useState } from "react";
import {
    authReducer,
    INITIAL_STATE as authStateContext,
} from "./reducer/authReducer";
import {
    modalReducer,
    INITIAL_STATE as modalStateContext,
} from "./reducer/modalReducer";
import { getUserDetail } from "./services/authContext.services";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    /**
     * Return the userId and jwt
     */
    const [userAuth, authDispatch] = useReducer(authReducer, authStateContext);
    /**
     * Return the state of the auth modal (open/closed)
     */
    const [modalState, modalDispatch] = useReducer(
        modalReducer,
        modalStateContext
    );
    /**
     * Set the detail info of the user logged, such as name, age, username etc.
     */
    const [userDetailLogged, setUserDetailLogged] = useState();

    useEffect(() => {
        userAuth.userId &&
            getUserDetail(userAuth.userId).then((res) => {
                setUserDetailLogged(res);
            });
    }, [userAuth]);

    return (
        <AuthContext.Provider
            value={{
                userAuth,
                authDispatch,
                modalState,
                modalDispatch,
                userDetailLogged,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
