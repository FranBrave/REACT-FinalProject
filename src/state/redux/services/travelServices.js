import axios from "axios";
import { environment } from "../../../environment/environment";

export const getTravelDetail = async (travelId) => {
    const response = await axios.get(
        `${environment.API_URL}/travel/detail/${travelId}`
    );

    return response;
};

export const getTravelsList = async () => {
    const response = await axios.get(`${environment.API_URL}/home/travels`);

    return response;
};
