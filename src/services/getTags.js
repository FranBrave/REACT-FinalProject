import axios from "axios";
import { environment } from "../environment/environment";

export const getTags = async () => {
    const response = await axios.get(`${environment.API_URL}/travel/tags`);

    return response.data;
};