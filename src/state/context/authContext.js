import React, { useReducer } from "react";
import {
    authReducer,
    INITIAL_STATE as authStateContext,
} from "./reducer/authReducer";
import {
    modalReducer,
    INITIAL_STATE as modalStateContext,
} from "./reducer/modalReducer";

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

    return (
        <AuthContext.Provider
            value={{
                userAuth,
                authDispatch,
                modalState,
                modalDispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
