import { createSlice } from '@reduxjs/toolkit';

const ticketMedia = createSlice({
	name: 'ticketMedia',
	initialState: {
		media: null,
		thumbnailUri: null,
	},
	reducers: {
		setMedia: (state, action) => {
			state.media = action.payload;
		},
		setThumbnailUri: (state, action) => {
			state.thumbnailUri = action.payload;
		},
		clearAll: (state) => {
			state.media = null;
			state.thumbnailUri = null;
		},
	},
});

export const setMedia = ticketMedia.actions.setMedia;
export const setThumbnailUri = ticketMedia.actions.setThumbnailUri;
export const clearAll = ticketMedia.actions.clearAll;
export default ticketMedia.reducer;
