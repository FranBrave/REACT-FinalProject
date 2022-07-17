import React, { useContext} from "react";
import { Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../../../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../../../assets/icons/left-arrow.png";
import TravelsContainer from "./components/TravelsContainer/TravelsContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const TravelsUsersContainer = () => {
    
    
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
           <TravelsContainer  />
         <UsersContainer />
        </ScrollMenu>
    );
};

export default TravelsUsersContainer;
