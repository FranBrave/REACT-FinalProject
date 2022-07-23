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
    const requestOptions = {
        method: "POST",
        body: data,
    };

    try {
        const response = await fetch(
            `${environment.API_URL}/user/info/${userId}`,
            requestOptions
        );

        const finalResult = await response.json();

        return finalResult;
    } catch (error) {
        console.log(error);
    }
};
