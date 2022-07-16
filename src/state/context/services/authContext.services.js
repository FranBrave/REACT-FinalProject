import axios from "axios";
import { environment } from "../../../environment/environment";

export const getUserDetail = async (userId) => {
    const response = await axios.get(`${environment.API_URL}/user/${userId}`);

    return response;
};

export const loginUser = async (requestBody) => {
    const response = await axios.post(
        `${environment.API_URL}/auth/login`,
        requestBody
    );

    return response;
};

export const registerUser = async (requestBody) => {
    const response = await axios.post(
        `${environment.API_URL}/auth/register`,
        requestBody
    );

    return response;
};

export const logoutUser = async () => {
    await axios.post(`${environment.API_URL}/auth/logout`);
};
