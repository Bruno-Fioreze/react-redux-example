import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types/user"

const INITIAL_STATE: UserState[] = []

const sliceusers = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    initialUsers(state, {payload}: PayloadAction<UserState[]>) {
        return [...payload]
    },
    filterUsers(state, { payload }: PayloadAction<string>) {
      const usersFiltered = state.filter((user) => {
        return user.first_name.toUpperCase().includes(payload.toLocaleUpperCase());
      });
      return usersFiltered;
    }
  }, 
});

export default sliceusers.reducer;
export const { initialUsers, filterUsers } = sliceusers.actions;

export const useUsers = (state: any) => {
  return state.users as UserState[]; 
};
