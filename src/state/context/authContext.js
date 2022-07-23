import React, { useReducer } from "react";
import {
    authReducer,
    INITIAL_STATE as authStateContext,
} from "./reducer/authReducer";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    /**
     * Return the userId and jwt
     */
    const [userAuth, authDispatch] = useReducer(authReducer, authStateContext);

    return (
        <AuthContext.Provider
            value={{
                userAuth,
                authDispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
