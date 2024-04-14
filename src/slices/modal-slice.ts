import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalStateType = {
  name: string;
  isOpen: boolean;
  modalInfo: unknown;
};

const initialState: ModalStateType = {
  name: '',
  isOpen: false,
  modalInfo: null,
};

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.name = '';
      state.isOpen = false;
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.isOpen = true;
    },
    setModalInfo: (state, action: PayloadAction<unknown>) => {
      state.modalInfo = action.payload;
    },
  },
  selectors: {
    getModal: (state) => state,
  },
});

export const { actions: modalActions, selectors: modalSelectors } = modalSlice;
