export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSED = "MODAL_CLOSED";

export const EDIT_MODAL_OPEN = "EDIT_MODAL_OPEN";
export const EDIT_MODAL_CLOSED = "EDIT_MODAL_CLOSED";

export const CREATE_MODAL_OPEN = "CREATE_MODAL_OPEN";
export const CREATE_MODAL_CLOSED = "CREATE_MODAL_CLOSED";

export const INFO_MODAL_OPEN = "INFO_MODAL_OPEN";
export const INFO_MODAL_CLOSED = "INFO_MODAL_CLOSED";

export const IMAGE_MODAL_OPEN = "IMAGE_MODAL_OPEN";
export const IMAGE_MODAL_CLOSED = "IMAGE_MODAL_CLOSED";

const actionModalOpen = (value) => ({
    type: MODAL_OPEN,
    payload: !value,
});

const actionModalClosed = (value) => ({
    type: MODAL_CLOSED,
    payload: !value,
});

const actionEditModalOpen = (value) => ({
    type: EDIT_MODAL_OPEN,
    payload: !value,
});

const actionEditModalClosed = (value) => ({
    type: EDIT_MODAL_CLOSED,
    payload: !value,
});

const actionCreateModalOpen = (value) => ({
    type: CREATE_MODAL_OPEN,
    payload: !value,
});

const actionCreateModalClosed = (value) => ({
    type: CREATE_MODAL_CLOSED,
    payload: !value,
});

const actionInfoModalOpen = (value) => ({
    type: INFO_MODAL_OPEN,
    payload: !value,
});

const actionInfoModalClosed = (value) => ({
    type: INFO_MODAL_CLOSED,
    payload: !value,
});

const actionImageModalOpen = (value) => ({
    type: IMAGE_MODAL_OPEN,
    payload: !value,
});

const actionImageModalClosed = (value) => ({
    type: IMAGE_MODAL_CLOSED,
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

export const toggleEditModal = (value, dispatch) => {
    value
        ? dispatch(actionEditModalClosed(value))
        : dispatch(actionEditModalOpen(value));
};

export const toggleCreateModal = (value, dispatch) => {
    value
        ? dispatch(actionCreateModalOpen(value))
        : dispatch(actionCreateModalClosed(value));
};

export const toggleInfoModal = (value, dispatch) => {
    value
        ? dispatch(actionInfoModalOpen(value))
        : dispatch(actionInfoModalClosed(value));
};

export const toggleImageModal = (value, dispatch) => {
    value
        ? dispatch(actionImageModalOpen(value))
        : dispatch(actionImageModalClosed(value));
};
