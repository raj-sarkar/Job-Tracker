import { api } from "@api";
import type { LoginCredentials } from "@containers/LoginForm";
import type { SignupCredentials } from "@containers/SignupForm";
import type { User } from "@models";

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.query<User, SignupCredentials>({
            query: (credentials) => ({
                url: "user/signup",
                method: "POST",
                body: credentials,
            }),
        }),
        login: builder.query<User, LoginCredentials>({
            query: (credentials) => ({
                url: "user/login",
                method: "POST",
                body: credentials,
            }),
        }),
        check: builder.query<User, void>({
            query: () => ({
                url: "user/check",
                method: "GET",
            }),
        }),
        logout: builder.query<void, void>({
            query: () => ({
                url: "user/logout",
                method: "POST",
            }),
        }),
    }),
});

export const {
    useLazySignupQuery,
    useLazyLoginQuery,
    useCheckQuery,
    useLazyLogoutQuery,
} = authApi;
