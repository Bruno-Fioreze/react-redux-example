import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types/user";
import getUsers from "../services/getUsers";
import { Dispatch } from "redux"; // Importe Dispatch do Redux Toolkit

const populateUsers = async () => {
    const result = await getUsers();
    const users: UserState[] = await result.data;
    return users;
};

const INITIAL_STATE: UserState[] = [];

const sliceUsers = createSlice({
    name: "users",
    initialState: INITIAL_STATE,
    reducers: {
        initialUsers(state, { payload }: PayloadAction<UserState[]>) {
            return [...payload];
        },
        filterUsers(state, { payload }: PayloadAction<string>) {
            const usersFiltered = state.filter((user) => {
                return user.first_name.toUpperCase().includes(payload.toLocaleUpperCase());
            });
            return usersFiltered;
        },
    },
});

export default sliceUsers.reducer;
export const { initialUsers, filterUsers } = sliceUsers.actions;

export const setupUsers = () => async (dispatch: Dispatch) => {
    try {
        const users = await populateUsers();
        dispatch(initialUsers(users));
    } catch (error) {
        console.error("Erro ao popular usuários:", error);
    }
};

export const useUsers = (state: any) => {
    return state.users as UserState[];
};
