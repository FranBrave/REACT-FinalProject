
import React from 'react'
import Toggle from '../../components/Toggle/Toggle'
import { Box } from '@mui/material';
import TravelsUsersContainer from './components/TravelsUsersContainer/TravelsUsersContainer';


const Home = () => {
  return (
    <Box>
    <Toggle />
    <TravelsUsersContainer />
    </Box>
  )
}

export default Home;
