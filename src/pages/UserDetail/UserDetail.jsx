import React from "react";
import { useParams } from "react-router-dom";
import { useCheckSameUser } from "../../customHook/useCheckSameUser";
import { useUserDetail } from "../../customHook/useUserDetail";

const UserDetail = () => {
    const { username } = useParams();
    const userDetail = useUserDetail(username);
    const isSameUser = useCheckSameUser(username);

    return (
        <>
            {userDetail && (
                <div>
                    <p>{userDetail.username}</p>
                    {isSameUser
                        ? "Estas en tu perfil de usuario"
                        : "Estas en el perfil de usuario de otro"}
                </div>
            )}
        </>
    );
};

export default UserDetail;
