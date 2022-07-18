import React from "react";
import { useParams } from "react-router-dom";
import { useCheckSameUser } from "../../customHook/useCheckSameUser";
import { useUserDetail } from "../../customHook/useUserDetail";
import TravelCreation from "./components/travelCreation/TravelCreation";

const UserDetail = () => {
    const { username } = useParams();
    const userDetail = useUserDetail(username);
    const isSameUser = useCheckSameUser(username);

    return (
        <>
            {userDetail && (
                <div>
                    <p>{userDetail.username}</p>
                    {isSameUser && <TravelCreation />}
                </div>
            )}
        </>
    );
};

export default UserDetail;
