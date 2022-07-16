import { getUserDetail } from "../../context/services/authContext.services";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const ERROR = "ERROR";

const actionGetUsersList = (usersList) => ({
    type: GET_USERS_LIST,
    payload: usersList,
});

const actionGetUserDetail = (userDetail) => ({
    type: GET_USER_DETAIL,
    payload: userDetail,
});

const actionUserError = (error) => ({
    type: ERROR,
    payload: error,
});

export const setReduxUserDetail = async (userId) => {
    try {
        const userDetail = await getUserDetail(userId);
        return (dispatch) => dispatch(actionGetUserDetail(userDetail));
    } catch (error) {
        return (dispatch) => dispatch(actionUserError(error));
    }
};
