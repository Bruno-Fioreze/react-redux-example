import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types/user"

const INITIAL_STATE: UserState[] = []

const sliceusers = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    addUsers(state, {payload}: PayloadAction<UserState[]>) {
        return [...payload]
    },
    filterUsers(state, {payload}: PayloadAction<string>) {

    }
  }, 
});

export default sliceusers.reducer;
export const { addUsers } = sliceusers.actions;

export const useUsers = (state: any) => {
  return state.users as UserState[]; 
};
