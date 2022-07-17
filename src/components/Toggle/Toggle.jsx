import React  from 'react'
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Toggle = () => {

    return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}     }}
        position='relative' p='20px'
        >
    <Link to = "/Travel">
    <Button variant='contained'>
        <Typography >Travels</Typography>
    </Button>
    </Link>
    <Link to ="/User">
    <Button variant='contained'>
        <Typography>Users</Typography>
    </Button>
    </Link>
    </Box>
  )
}

export default Toggle