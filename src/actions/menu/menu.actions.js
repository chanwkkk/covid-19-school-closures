import { types } from "../components.actions";

export const openModal = () => ({
    type: types.OPEN_MODAL,
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL,
});
