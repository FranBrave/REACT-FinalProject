import { Link, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

const TravelsContainer = () => {

    const [travels, setTravels] = useState([]);



  return (
    <Stack direction="row">  {travels.map(travel => (
        <Link className="travel-card" sx={{
          width: 300,
          height: 300,
          border: '1px solid grey'
        }}
        
     key=
    {travel.id}>
    <Typography ml="21px" color="#84a59d" fontWeight="bold" sx={{ fontSize: { lg: '33px', xs: '29px' } }} mt="11px" pb="10px" textTransform="capitalize">{travel.title}</Typography>
    <Typography ml="21px" color="#1d3557" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">{travel.cityName}</Typography>
   </Link>
))}
</Stack>
  )
}

export default TravelsContainer