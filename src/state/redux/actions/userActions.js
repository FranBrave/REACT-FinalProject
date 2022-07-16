import { getUserDetail } from "../../context/services/authContext.services";
import { getUsersList } from "../services/userServices";

export const USER_DETAIL = "GET_USER_DETAIL";
export const USERS_LIST = "GET_USERS_LIST";
export const ERROR = "ERROR";

const actionUserDetail = (userDetail) => ({
    type: USER_DETAIL,
    payload: userDetail,
});

const actionUsersList = (usersList) => ({
    type: USERS_LIST,
    payload: usersList,
});

const actionUserError = (error) => ({
    type: ERROR,
    payload: error,
});

export const setReduxUserDetail = async (userId) => {
    try {
        const userDetail = await getUserDetail(userId);
        return (dispatch) => dispatch(actionUserDetail(userDetail));
    } catch (error) {
        return (dispatch) => dispatch(actionUserError(error));
    }
};

export const setReduxUsersList = async () => {
    try {
        const usersList = await getUsersList();
        return (dispatch) => dispatch(actionUsersList(usersList));
    } catch (error) {
        return (dispatch) => dispatch(actionUserError(error));
    }
};
