import React  from 'react'
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Toggle = ({toggleDisplay}) => {

    const travelDisplay = () => {
        toggleDisplay(true);
    }

    const userDisplay = () => {
        toggleDisplay(false);
    }

    return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}     }}
        position='relative' p='20px'
        >
    <Button variant='contained' onClick={travelDisplay }>
        <Typography >Travels</Typography>
    </Button>
    <Button variant='contained' onClick = {userDisplay}>
        <Typography>Users</Typography>
    </Button>
    </Box>
  )
}

export default Toggle