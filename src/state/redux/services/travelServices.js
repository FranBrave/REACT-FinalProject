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

export const postUserToWantJoinList = async (data) => {
    const response = await axios.post(
        `${environment.API_URL}/travel/join`,
        data
    );

    return response.data;
};

export const postUserFollow = async (data) => {
    const response = await axios.post(
        `${environment.API_URL}/travel/follow`,
        data
    );

    return response.data;
};

export const postUserJoined = async (data) => {
    const response = await axios.post(`${environment.API_URL}/user/chat`, data);

    return response.data;
};

export const deleteUserWantJoin = async (data) => {
    const deleteMethod = {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(data),
    };

    const response = await fetch(
        `${environment.API_URL}/user/wantJoin/`,
        deleteMethod
    );

    const info = await response.json();

    return info;
};
