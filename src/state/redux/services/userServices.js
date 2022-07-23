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

export const editUserDetail = async (data, userId) => {
    try {
        const response = await axios.post(
            `${environment.API_URL}/user/info/${userId}`,
            data
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const uploadImage = async (data, userId) => {
    const requestOptions = {
        method: "POST",
        body: data,
    };

    try {
        const response = await fetch(
            `${environment.API_URL}/user/images/${userId}`,
            requestOptions
        );

        const finalResult = await response.json();

        return finalResult;
    } catch (error) {
        console.log(error);
    }
};
