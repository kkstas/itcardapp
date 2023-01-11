import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserInfoState {
	username: string | null;
	email: string | null;
	firstName: string | null;
	lastName: string | null;
	isLoggedIn: boolean;
}

const initialState: UserInfoState = {
	username: null,
	email: null,
	firstName: null,
	lastName: null,
	isLoggedIn: false,
};

export const userInfo = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {
		logIn: (
			state,
			action: PayloadAction<{
				username: string | null;
				email: string | null;
				firstName: string | null;
				lastName: string | null;
			}>
		) => {
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.isLoggedIn = true;
		},
		logOut: (state) => {
			state.username = null;
			state.email = null;
			state.firstName = null;
			state.lastName = null;
			state.isLoggedIn = false;
		},
	},
});

export const logIn = userInfo.actions.logIn;
export const logOut = userInfo.actions.logOut;

export default userInfo.reducer;
