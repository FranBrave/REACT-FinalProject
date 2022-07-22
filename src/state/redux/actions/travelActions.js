import {
    getTravelDetail,
    getTravelsList,
    postTravel,
} from "../services/travelServices";

export const TRAVEL_DETAIL = "TRAVEL_DETAIL";
export const TRAVELS_LIST = "TRAVELS_LIST";
export const TRAVEL_ERROR = "TRAVEL_ERROR";

export const PUSH_TRAVEL = "PUSH_TRAVEL";

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
<<<<<<< HEAD
=======

>>>>>>> 9f55deed294797edf0ff1b71be311183d81c6a5e
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
            postTravel(data).then((res) => dispatch(actionPushTravel(res)));
            return;
        } catch (error) {
<<<<<<< HEAD
            console.log(error.response.data);
            dispatch(actionTravelError());
=======
            dispatch(actionTravelError(error.response.data));
>>>>>>> 9f55deed294797edf0ff1b71be311183d81c6a5e
        }
    };
};
