import { useEffect, useState } from "react";
import { getUserDetail } from "../state/context/services/authContext.services";

export const useUserDetailById = (userId) => {
    const [userDetail, setUserDetail] = useState();

    useEffect(() => {
        getUserDetail(userId).then((res) => setUserDetail(res));
    }, [userId]);

    return userDetail;
};
