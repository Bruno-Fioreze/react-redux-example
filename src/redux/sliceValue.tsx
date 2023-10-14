import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ValueUserFilter } from "../types/valueFilterUser"

const initialValue: ValueUserFilter = { value: '' };

const valueSlice = createSlice({
  name: "value",
  initialState: initialValue,
  reducers: {
    updateValue(state, action: PayloadAction<string>) {
      return { value: action.payload };
    },
  },
});

export const { updateValue } = valueSlice.actions;

export default valueSlice.reducer;

export const useValueSlice = (state: any) => {
    return state.value as ValueUserFilter; 
};