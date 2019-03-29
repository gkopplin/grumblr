export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, post) => {
    return {
        type: OPEN_MODAL,
        modal: {
            modal,
            post
        }
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};