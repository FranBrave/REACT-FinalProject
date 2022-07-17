import axios from "axios";
import { environment } from "../../../environment/environment";

export const getUserDetail = async (userId) => {
    const response = await axios.get(`${environment.API_URL}/user/${userId}`);

    return response.data;
};

export const loginUser = async (body) => {
    const response = await axios.post(
        `${environment.API_URL}/auth/login`,
        body
    );

    return response.data.data;
};

export const registerUser = async (body) => {
    const response = await axios.post(
        `${environment.API_URL}/auth/register`,
        body
    );

    return response.data.data;
};

export const logoutUser = async () => {
    await axios.post(`${environment.API_URL}/auth/logout`);
};
