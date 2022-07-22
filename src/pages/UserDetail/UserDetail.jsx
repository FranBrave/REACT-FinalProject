import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCheckSameUser } from "../../customHook/useCheckSameUser";
import { useUserDetail } from "../../customHook/useUserDetail";
import SlidingButtons from "./components/slidingButtons/SlidingButtons";
import TravelCreation from "./components/travelCreation/TravelCreation";
import TravelsInfo from "./components/travelsInfo/TravelsInfo";
import UserInfo from "./components/userInfo/UserInfo";

const values = ["Travels Created", "Travels Joined", "Travels Following"];

const UserDetail = () => {
    const { username } = useParams();
    const userDetail = useUserDetail(username);
    const isSameUser = useCheckSameUser(username);

    const [selectedComp, setSelectedComp] = useState(values[0]);

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
            {userDetail && (
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="start"
                    gap="1rem"
                >
                    <UserInfo userDetail={userDetail} />
                    <SlidingButtons
                        values={values}
                        defaultSelected="Travels Created"
                        switchInfo={switchInfo}
                    />

                    {/* {isSameUser && selectedComp === valuesUserLogged[1] && (
                        <TravelCreation userId={userDetail._id} />
                    )}
                    {selectedComp === valuesUserLogged[2] && <TravelsInfo />} */}
                </Grid>
            )}
        </Grid>
    );
};

export default UserDetail;
