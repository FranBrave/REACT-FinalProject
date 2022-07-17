import axios from "axios";
import { environment } from "../../../environment/environment";

export const getUsersList = async () => {
    const response = await axios.get(`${environment.API_URL}/home/users`);

    return response.data;
};

export const getUserDetailByUsername = async (username) => {
    const response = await axios.get(
        `${environment.API_URL}/user/detail/${username}`
    );

    return response.data;
};
