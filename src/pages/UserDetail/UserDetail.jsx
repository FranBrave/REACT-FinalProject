import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useUserDetail } from "../../customHook/useUserDetail";
import { useUserLoggedDetail } from "../../customHook/useUserLoggedDetail";
import { AuthContext } from "../../state/context/authContext";

const UserDetail = () => {
    const { username } = useParams();
    const { userAuth } = useContext(AuthContext);
    const userDetail = useUserDetail(username);
    const userLogged = useUserLoggedDetail();

    return (
        <>
            {userDetail && (
                <div>
                    <p>{userDetail.username}</p>
                    {userAuth.userId &&
                    userLogged &&
                    userDetail.username === userLogged.username
                        ? "Estas en tu perfil de usuario"
                        : "Estas en el perfil de usuario de otro"}
                </div>
            )}
        </>
    );
};

export default UserDetail;
