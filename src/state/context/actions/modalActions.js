export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSED = "MODAL_CLOSED";

const actionModalOpen = () => ({
    type: MODAL_OPEN,
});

const actionModalClosed = () => ({
    type: MODAL_CLOSED,
});

/**
 * Toggle the state of the auth modal between visible or hidden with boolean parameter
 * @param {*} value (true/false)
 * @param {*} dispatch
 */
export const toggleAuthModal = (value, dispatch) => {
    value ? dispatch(actionModalClosed()) : dispatch(actionModalOpen());
};
