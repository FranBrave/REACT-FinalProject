import React from "react";


const TravelDetailContainer = () => {

    const {id} = useParams();
    const BASEURL = 'https://viajes-upgrade-hub.herokuapp.com';
    const TRAVELDETAILURL = 'travel/detail/';

    const [travelID, setTravelID] = useState([]);

    useEffect(() => {
        fetch(`${BASEURL}/${TRAVELDETAILURL}/${id}`)
        .then(response => response.json())
        .then(data=setTravelID(data))
    }, [id]);

    
    
}