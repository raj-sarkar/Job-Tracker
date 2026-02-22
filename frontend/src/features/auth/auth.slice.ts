import type { User } from "@models";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { InitialAuthState } from "./auth.types";

const initialState: InitialAuthState = {
    authUser: null,
    isInitialized: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ user: User | null }>) => {
            const { user } = action.payload;

            return {
                ...state,
                authUser: user,
                isInitialized: true,
            };
        },
        logout: (state) => {
            return {
                ...state,
                authUser: null,
                isInitialized: true,
            };
        },
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
