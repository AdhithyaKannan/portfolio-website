import { createSlice } from '@reduxjs/toolkit';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const initialState = {
  formData: initialFormData,
  status: 'idle', // idle | sending | success
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      // Safe shallow merge
      Object.assign(state.formData, action.payload);
    },

    setStatus: (state, action) => {
      state.status = action.payload;
    },

    resetForm: (state) => {
      state.formData = { ...initialFormData };
      state.status = 'idle';
    },
  },
});

export const {
  updateFormData,
  setStatus,
  resetForm,
} = contactSlice.actions;

export default contactSlice.reducer;
