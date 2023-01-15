import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInfoState {
	email: string | null;
	firstName: string | null;
	lastName: string | null;
	jobTitle: string | null;
	isLoggedIn: boolean;
}

const initialState: UserInfoState = {
	email: null,
	firstName: null,
	lastName: null,
	jobTitle: null,
	isLoggedIn: false,
};

export const userInfo = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {
		logIn: (
			state,
			action: PayloadAction<{
				email: string | null;
				firstName: string | null;
				lastName: string | null;
				jobTitle: string | null;
			}>
		) => {
			state.email = action.payload.email;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.jobTitle = action.payload.jobTitle;
			state.isLoggedIn = true;
		},
		logOut: (state) => {
			state.email = null;
			state.firstName = null;
			state.lastName = null;
			state.jobTitle = null;
			state.isLoggedIn = false;
		},
	},
});

export const logIn = userInfo.actions.logIn;
export const logOut = userInfo.actions.logOut;

export default userInfo.reducer;
