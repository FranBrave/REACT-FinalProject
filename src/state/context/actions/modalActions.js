export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSED = "MODAL_CLOSED";

const actionModalOpen = (value) => ({
    type: MODAL_OPEN,
    payload: !value,
});

const actionModalClosed = (value) => ({
    type: MODAL_CLOSED,
    payload: !value,
});

/**
 * Toggle the state of the auth modal between visible or hidden with boolean parameter
 * @param {*} value (true/false)
 * @param {*} dispatch
 */
export const toggleAuthModal = (value, dispatch) => {
    value
        ? dispatch(actionModalClosed(value))
        : dispatch(actionModalOpen(value));
};
