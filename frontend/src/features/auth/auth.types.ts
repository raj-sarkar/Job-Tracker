import type { User } from "@models";

export interface InitialAuthState {
    authUser: User | null;
    isInitialized: boolean;
}
