import { getTravelDetail, getTravelsList } from "../services/travelServices";

export const TRAVEL_DETAIL = "TRAVEL_DETAIL";
export const TRAVELS_LIST = "TRAVELS_LIST";
export const ERROR = "ERROR";

const actionTravelDetail = (travelDetail) => ({
    type: TRAVEL_DETAIL,
    payload: travelDetail,
});

const actionTravelsList = (travelsList) => ({
    type: TRAVELS_LIST,
    payload: travelsList,
});

const actionTravelError = (error) => ({
    type: ERROR,
    payload: error,
});

/**
 * Function to set the redux state of the travel detail
 * @param {*} travelId The id of the travel that is needed to get the detail info
 * @returns Dispatch the action to redux store in order to set the detail travel info
 */
export const setReduxTravelDetail = async (travelId) => {
    try {
        const travelDetail = await getTravelDetail(travelId);
        return (dispatch) => dispatch(actionTravelDetail(travelDetail));
    } catch (error) {
        return (dispatch) => dispatch(actionTravelError());
    }
};

/**
 * Function to set the redux state with a list of travels
 * @returns Dispatch the action to redux store in order to set the list of travels coming from the api
 */
export const setReduxTravelsList = async () => {
    try {
        const travelsList = await getTravelsList();
        return (dispatch) => dispatch(actionTravelsList(travelsList));
    } catch (error) {
        return (dispatch) => dispatch(actionTravelError());
    }
};
