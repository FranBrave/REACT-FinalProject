import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../state/context/authContext";
import { getUserDetail } from "../state/context/services/authContext.services";

export const useUserLoggedDetail = () => {
    const [userLogged, setUserLogged] = useState();
    const { userAuth } = useContext(AuthContext);

    useEffect(() => {
        setUserLogged(null);
        localStorage.getItem("userId") &&
            getUserDetail(userAuth.userId).then((res) => setUserLogged(res));
    }, [userAuth]);

    return userLogged;
};
