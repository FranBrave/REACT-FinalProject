import React, {useState} from 'react'
import Toggle from '../../components/Toggle/Toggle'
import { Box } from '@mui/material';
import TravelsUsersContainer from './components/TravelsUsersContainer/TravelsUsersContainer';


const Home = () => {

  const [travelDisplay, setTravelDisplay] = useState(true);

  const toggleDisplay = (value) =>{

    setTravelDisplay(value);

  }

  return (
    <Box>
    <Toggle toggleDisplay={toggleDisplay} />
    <TravelsUsersContainer travelDisplay={travelDisplay} />
    </Box>
  )
}

export default Home;