import React, {} from "react";
import {Box, Button, Typography} from '@mui/material'

const ButtonsTravelDetailContainer = () => {

    const Join = () => {
        
    }

    const Follow = () => {

    }

    return(
        <Box sx={{
            mt: { lg: '212px', xs: '70px'},
            ml: { sm: '50px'}     }}
            position='relative' p='20px'
            >
        <Button variant = 'contained' onClick = {Join}>
        <Typography>Join</Typography>
        </Button>
        <Button variant = 'contained' onClick = {Follow}>
        <Typography>Follow</Typography>
        </Button>
        </Box>
    )
}

export default ButtonsTravelDetailContainer;