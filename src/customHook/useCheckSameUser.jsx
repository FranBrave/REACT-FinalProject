import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../state/context/authContext";
import { useUserDetail } from "./useUserDetail";
import { useUserLoggedDetail } from "./useUserLoggedDetail";

export const useCheckSameUser = (username) => {
    const { userAuth } = useContext(AuthContext);
    const userLogged = useUserLoggedDetail();
    const userDetail = useUserDetail(username);

    const [isSameUser, setIsSameUser] = useState();

    useEffect(() => {
        userAuth.userId &&
        userLogged &&
        userDetail.username === userLogged.username
            ? setIsSameUser(true)
            : setIsSameUser(false);
    }, [userDetail, userAuth, userLogged]);

    return isSameUser;
};
