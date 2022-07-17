import { getUserDetail } from "../../context/services/authContext.services";
import { getUsersList } from "../services/userServices";

export const USER_DETAIL = "USER_DETAIL";
export const USERS_LIST = "USERS_LIST";
export const USER_ERROR = "USER_ERROR";

const actionUserDetail = (userDetail) => ({
    type: USER_DETAIL,
    payload: userDetail,
});

const actionUsersList = (usersList) => ({
    type: USERS_LIST,
    payload: usersList,
});

const actionUserError = (error) => ({
    type: USER_ERROR,
    payload: error,
});

/**
 * Function to set the redux state of the user detail
 * @param {*} userId
 * @returns Dispatch the action to redux store in order to set the user detail
 */
export const setReduxUserDetail = async (userId) => {
    try {
        const userDetail = await getUserDetail(userId);
        return (dispatch) => dispatch(actionUserDetail(userDetail));
    } catch (error) {
        return (dispatch) => dispatch(actionUserError(error));
    }
};

/**
 * Function to set the redux state with a list of users
 * @returns Dispatch the action to redux store in order to set the list of users coming from the api
 */
export const setReduxUsersList = async () => {
    try {
        const usersList = await getUsersList();
        return (dispatch) => dispatch(actionUsersList(usersList));
    } catch (error) {
        return (dispatch) => dispatch(actionUserError(error));
    }
};
