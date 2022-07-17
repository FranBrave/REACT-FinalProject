import React  from 'react'
import { Box, Button, Typography } from '@mui/material';

const ToggleContainer = () => {

    return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}     }}
        position='relative' p='20px'
        >
    <Button variant='contained'>
        <Typography>Travels</Typography>
    </Button>
    <Button variant='contained'>
        <Typography>Users</Typography>
    </Button>
    </Box>
  )
}

export default ToggleContainer