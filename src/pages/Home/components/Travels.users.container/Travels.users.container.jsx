import React, { useEffect, useContext } from 'react'
import { Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';
import TravelsContainer from './components/Travels.container/Travels.container';
import { TRAVEL_DETAIL } from '../../../../state/redux/actions/travelActions';
import Loader from '../../../../components/Loader/Loader';




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
  if (!TRAVEL_DETAIL.length) return <Loader />;

    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
     <TravelsContainer />
  </ScrollMenu>

};

export default TravelsUsersContainer


