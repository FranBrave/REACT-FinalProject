export const SEARCH_LIST = "SEARCH_LIST";

const actionSearchList = (searchList) => ({
    type: SEARCH_LIST,
    payload: searchList,
});

export const setReduxSearchList = (value) => {
    return (dispatch) => {
        dispatch(actionSearchList(value));
    };
};
