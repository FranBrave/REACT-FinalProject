import { useEffect, useReducer, useState, createContext } from "react";
import { authReducer, INITIAL_STATE } from "./reducer/authReducer";
import { modalReducer } from "./reducer/modalReducer";
import { getUserDetail } from "./services/authContext.services";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    /**
     * Return the userId and jwt
     */
    const { userAuth, authDispatch } = useReducer(authReducer, INITIAL_STATE);
    /**
     * Return the state of the auth modal (open/closed)
     */
    const {modalState, modalDispatch} = useReducer(modalReducer)
    /**
     * Set the detail info of the user logged, such as name, age, username etc.
     */
    const [userDetailLogged, setUserDetailLogged] = useState();

    useEffect(() => {
        setUserDetailLogged(getUserDetail(userAuth.id));
    }, [userAuth]);

    return (
        <AuthContext.Provider value={(userAuth, authDispatch, modalState, modalDispatch, userDetailLogged)}>
            {children}
        </AuthContext.Provider>
    );
};
