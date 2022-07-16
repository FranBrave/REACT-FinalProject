import { useEffect, useReducer, useState } from "react";
import { INITIAL_STATE } from "./reducer/authReducer";
import { getUserDetail } from "./services/authContext.services";

// Create Context
const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const { userAuth, dispatch } = useReducer(authReducer, INITIAL_STATE);
    const [userDetailLogged, setUserDetailLogged] = useState();

    useEffect(() => {
        setUserDetailLogged(getUserDetail(userAuth.id));
    }, [userAuth]);

    return (
        <AuthContext.Provider value={(userAuth, dispatch, userDetailLogged)}>
            {children}
        </AuthContext.Provider>
    );
};
