import React, { useState, useEffect } from "react";
import { Box } from '@mui/material'
import { useParams } from "react-router-dom";
import ButtonsTravelDetailContainer from "../ButtonsTravelDetailContainer/ButtonsTravelDetailContainer";


const TravelDetailContainer = () => {

    const {id} = useParams();
    const BASEURL = 'https://viajes-upgrade-hub.herokuapp.com';
    const TRAVELURL = '/travel/detail/';

    const [travel, setTravel] = useState();

    useEffect(() => {
        fetch(`${BASEURL}${TRAVELURL}${id}`)
        .then(response => response.json())
        .then(data => setTravel(data))
    }, [id]);

    console.log(travel);

    return(
        <>{travel ? 
        <div>
       <div>Viaje a {travel.title}</div>
       <img src={travel.images[0]} alt={travel.cityName}></img>
       <p>{travel.cityName}</p>
       {travel.tags.map((tag) => <p> {tag.title} </p>)}
       <p>{travel.description}</p>
       <p>from: {travel.dataFrom}</p>
       <p>to: {travel.dataTo}</p>
       <p>{travel.budget}</p>
       <p>Users following {travel.usersFollowing.length}</p>
       <ButtonsTravelDetailContainer />
       
       </div>
       : <p>Loading</p>
    }</>
    )
}

export default TravelDetailContainer