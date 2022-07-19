import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import TravelsContainer from "./components/TravelsContainer/TravelsContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer";

const TravelsUsersContainer = ({ travelDisplay }) => {
    return (
        <ScrollMenu>
            {travelDisplay ? <TravelsContainer /> : <UsersContainer />}
        </ScrollMenu>
    );
};

export default TravelsUsersContainer;
