import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCheckSameUser } from "../../customHook/useCheckSameUser";
import { useUserDetail } from "../../customHook/useUserDetail";
import SlidingButtons from "./components/slidingButtons/SlidingButtons";
import TravelCreation from "./components/travelCreation/TravelCreation";

const values = ["User Info", "Travel Creation", "Travels Joined"];

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
            <SlidingButtons
                values={values}
                defaultSelected="User Info"
                switchInfo={switchInfo}
            />
            {userDetail && (
                <div>
                    <p>{userDetail.username}</p>
                    {selectedComp === values[0] && <UserInfo />}
                    {isSameUser && selectedComp === values[1] && (
                        <TravelCreation userId={userDetail._id} />
                    )}
                    {/* {selectedComp === values[2] && <TravelsInfo />} */}
                </div>
            )}
        </Grid>
    );
};

export default UserDetail;
