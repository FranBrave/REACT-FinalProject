import axios from "axios";
import { environment } from "../../../environment/environment";

export const getTravelDetail = async (travelId) => {
    const response = await axios.get(
        `${environment.API_URL}/travel/detail/${travelId}`
    );

    return response.data;
};

export const getTravelsList = async () => {
    const response = await axios.get(`${environment.API_URL}/home/travels`);

    return response.data;
};

export const postTravel = async (data) => {
    const body = data.form;
    const response = await axios.post(
        `${environment.API_URL}/user/travel/${data.userId}`,
        body
    );

    return response.data;
};
