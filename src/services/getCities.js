import axios from "axios";
import { environment } from "../environment/environment";

export const getCities = async () => {
    const response = await axios.get(`${environment.API_URL}/travel/cities`);

    return response.data;
};
