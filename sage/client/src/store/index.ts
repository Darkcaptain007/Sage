import { create } from "zustand";

export interface User {
	name: string;
	email: string;
	profilePic: string;
	id: string;
	isMentor: boolean;
}

export const useStore = create((set) => ({
	user: null,
	setUser: (user: User) => {
		set({ user });
	},
}));
