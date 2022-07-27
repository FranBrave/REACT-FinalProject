import {
    getUsersList,
    getUserDetailByUsername,
    editUserDetail,
    uploadImage,
} from "../services/userServices";

export const USER_DETAIL = "USER_DETAIL";
export const USER_EDIT = "USER_EDIT";
export const USERS_LIST = "USERS_LIST";
export const USER_ERROR = "USER_ERROR";
export const USER_CREATE_TRAVEL = "USER_CREATE_TRAVEL";
export const USER_UPLOAD_IMG = "USER_UPLOAD_IMG";

const actionUserDetail = (userDetail) => ({
    type: USER_DETAIL,
    payload: userDetail,
});

const actionUserEdit = (userDetail) => ({
    type: USER_EDIT,
    payload: userDetail,
});

const actionUsersList = (usersList) => ({
    type: USERS_LIST,
    payload: usersList,
});

export const actionUserCreateTravel = (data) => ({
    type: USER_CREATE_TRAVEL,
    payload: data,
});

export const actionUserUploadImg = (data) => ({
    type: USER_UPLOAD_IMG,
    payload: data,
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
export const setReduxUserDetail = (username) => {
    return (dispatch) => {
        try {
            return getUserDetailByUsername(username).then((res) =>
                dispatch(actionUserDetail(res))
            );
        } catch (error) {
            dispatch(actionUserError(error.response.data));
        }
    };
};

/**
 * Function to set the redux state with a list of users
 * @returns Dispatch the action to redux store in order to set the list of users coming from the api
 */
export const setReduxUsersList = () => {
    return (dispatch) => {
        try {
            return getUsersList().then((res) => dispatch(actionUsersList(res)));
        } catch (error) {
            dispatch(actionUserError(error.response.data));
        }
    };
};

export const setReduxUserEdit = (data, userId) => {
    return (dispatch) => {
        try {
            return editUserDetail(data, userId).then((res) => {
                dispatch(actionUserEdit(res));
            });
        } catch (error) {
            dispatch(actionUserError(error.response.data));
        }
    };
};

export const setReduxUploadImg = (data, userId) => {
    return (dispatch) => {
        try {
            return uploadImage(data, userId).then((res) =>
                dispatch(actionUserUploadImg(res.images))
            );
        } catch (error) {
            dispatch(actionUserError(error.response.data));
        }
    };
};
