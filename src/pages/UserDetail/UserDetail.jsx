import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCheckSameUser } from "../../customHook/useCheckSameUser";
import { useUserDetail } from "../../customHook/useUserDetail";
import SlidingButtons from "./components/slidingButtons/SlidingButtons";
import TravelCreation from "./components/travelCreation/TravelCreation";
import TravelsInfo from "./components/travelsInfo/TravelsInfo";
import UserInfo from "./components/userInfo/UserInfo";

const valuesUserLogged = ["User Info", "Travel Creation", "Travels Info"];
const valuesDefault = ["User Info", "Travels Info"];

const UserDetail = () => {
    const { username } = useParams();
    const userDetail = useUserDetail(username);
    const isSameUser = useCheckSameUser(username);

    const [selectedComp, setSelectedComp] = useState(valuesUserLogged[0]);

    const switchInfo = (value) => {
        setSelectedComp(value);
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap="1rem"
        >
            {/* {isSameUser ? (
                <SlidingButtons
                    values={valuesUserLogged}
                    defaultSelected="User Info"
                    switchInfo={switchInfo}
                />
            ) : (
                <SlidingButtons
                    values={valuesDefault}
                    defaultSelected="User Info"
                    switchInfo={switchInfo}
                />
            )} */}
            {userDetail && (
                <div>
                    <UserInfo userDetail={userDetail} />
                    {/* {isSameUser && selectedComp === valuesUserLogged[1] && (
                        <TravelCreation userId={userDetail._id} />
                    )}
                    {selectedComp === valuesUserLogged[2] && <TravelsInfo />} */}
                </div>
            )}
        </Grid>
    );
};

export default UserDetail;
