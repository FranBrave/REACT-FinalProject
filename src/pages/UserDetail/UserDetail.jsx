import React from "react";
import { useParams } from "react-router-dom";
import { useCheckSameUser } from "../../customHook/useCheckSameUser";
import { useUserDetail } from "../../customHook/useUserDetail";
import TravelCreation from "./components/travelCreation/TravelCreation";
import UserDetailCOntainer from "./components/UserDetailContainer/UserDetailContainer";

const UserDetail = () => {
    const { username } = useParams();
    const userDetail = useUserDetail(username);
    const isSameUser = useCheckSameUser(username);

    return (
        <>
            {userDetail && (
                <div>
                    <p>{userDetail.username}</p>
                    {isSameUser && <TravelCreation userId={userDetail._id} />}
                    <UserDetailCOntainer />
                </div>
            )}
        </>
    );
};

export default UserDetail;
