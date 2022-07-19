import React, { useContext} from "react";
import { Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../../../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../../../assets/icons/left-arrow.png";
import TravelsContainer from "./components/TravelsContainer/TravelsContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import TravelTagsCont from "./components/TravelsContainer/TravelTagsCont/TravelTagsCont";
import { Box } from "@mui/system";

const TravelsUsersContainer = ({ travelDisplay }) => {
    return (
        <ScrollMenu>
            {travelDisplay ? <TravelsContainer /> 
                            : <UsersContainer />}
        
        </ScrollMenu>
    );
};

export default TravelsUsersContainer;
