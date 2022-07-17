import React from 'react'
import Toggle from '../../components/Toggle/Toggle'
import { Box } from '@mui/material';
import TravelsUsersContainer from './components/Travels.users.container/Travels.users.container';


const Home = () => {
  return (
    <Box>
    <Toggle />
    <TravelsUsersContainer />
    </Box>
  )
}

export default Home;