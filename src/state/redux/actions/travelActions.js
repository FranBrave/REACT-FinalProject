import {
    getTravelDetail,
    getTravelsList,
    postTravel,
    postUserToWantJoinList,
    postUserFollow,
    postUserJoined,
    deleteUserWantJoin,
} from "../services/travelServices";
import { actionUserCreateTravel } from "../actions/userActions";

export const TRAVEL_DETAIL = "TRAVEL_DETAIL";
export const TRAVELS_LIST = "TRAVELS_LIST";
export const TRAVEL_ERROR = "TRAVEL_ERROR";
export const PUSH_TRAVEL = "PUSH_TRAVEL";
export const TRAVEL_WANT_LIST = "TRAVEL_WANT_LIST";
export const TRAVEL_FOLLOW_LIST = "TRAVEL_FOLLOW_LIST";
export const TRAVEL_JOINED_LIST = "TRAVEL_JOINED_LIST";
export const TRAVEL_WANT_LIST_DELETE = "TRAVEL_WANT_LIST_DELETE";

const actionTravelDetail = (travelDetail) => ({
    type: TRAVEL_DETAIL,
    payload: travelDetail,
});

const actionTravelsList = (travelsList) => ({
    type: TRAVELS_LIST,
    payload: travelsList,
});

const actionTravelError = (error) => ({
    type: TRAVEL_ERROR,
    payload: error,
});

const actionPushTravel = (travel) => ({
    type: PUSH_TRAVEL,
    payload: travel,
});

const actionPushUserToWantList = (user) => ({
    type: TRAVEL_WANT_LIST,
    payload: user,
});

const actionPushUserToFollowList = (user) => ({
    type: TRAVEL_FOLLOW_LIST,
    payload: user,
});

const actionPushUserJoinedList = (user) => ({
    type: TRAVEL_JOINED_LIST,
    payload: user,
});

const actionDeleteUserWantJoin = (data) => ({
    type: TRAVEL_WANT_LIST_DELETE,
    payload: data,
});

/**
 * Function to set the redux state of the travel detail
 * @param {*} travelId The id of the travel that is needed to get the detail info
 * @returns Dispatch the action to redux store in order to set the detail travel info
 */
export const setReduxTravelDetail = (travelId) => {
    return (dispatch) => {
        try {
            getTravelDetail(travelId).then((res) =>
                dispatch(actionTravelDetail(res))
            );
            return;
        } catch (error) {
            dispatch(actionTravelError());
        }
    };
};

/**
 * Function to set the redux state with a list of travels
 * @returns Dispatch the action to redux store in order to set the list of travels coming from the api
 */
export const setReduxTravelsList = () => {
    return (dispatch) => {
        try {
            getTravelsList().then((res) => dispatch(actionTravelsList(res)));
            return;
        } catch (error) {
            dispatch(actionTravelError());
        }
    };
};

export const setReduxAddTravel = (data) => {
    return (dispatch) => {
        try {
            postTravel(data).then((res) => {
                dispatch(actionPushTravel(res));
                dispatch(actionUserCreateTravel(res));
            });
            return;
        } catch (error) {
            dispatch(actionTravelError(error.response.data));
        }
    };
};

export const setReduxUserWantJoin = (data) => {
    return (dispatch) => {
        try {
            postUserToWantJoinList(data).then((res) => {
                dispatch(actionPushUserToWantList(res.usersWantJoin));
            });
        } catch (error) {
            dispatch(actionTravelError(error.response.data));
        }
    };
};

export const setReduxUserFollow = (data, userFollow) => {
    return (dispatch) => {
        try {
            postUserFollow(data).then((res) => {
                const array = userFollow;
                array.push(res);
                dispatch(actionPushUserToFollowList(array));
            });
        } catch (error) {
            dispatch(actionTravelError(error.response.data));
        }
    };
};

export const setReduxUserJoined = (data) => {
    return (dispatch) => {
        try {
            postUserJoined(data).then((res) => {
                console.log(res);
                dispatch(actionPushUserJoinedList(res.usersJoined));
            });
        } catch (error) {
            dispatch(actionTravelError(error.response.data));
        }
    };
};

export const setReduxUserWantJoinDelete = (data) => {
    return (dispatch) => {
        try {
            deleteUserWantJoin(data).then((res) => {
                dispatch(actionDeleteUserWantJoin(res.usersWantJoin));
            });
        } catch (error) {
            console.log(error.response.data);
            dispatch(actionTravelError(error.response.data));
        }
    };
};
