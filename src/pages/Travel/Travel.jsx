import React, { useEffect } from "react";
import { setReduxTravelDetail } from "../../state/redux/actions/travelActions";

const Travel = () => {

    const {travelDetail, error} = useSelector((state) => state.Travel);

    const dispatch = useDispatch();

    const {travelId} = useParams();

    useEffect(() => {
        dispatch(setReduxTravelDetail(travelId));
    }, [travelId])

    return <div>{travelDetail.name}]</div>;
};

export default Travel;