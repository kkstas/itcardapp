import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TicketMediaState {
	media: string | null;
	thumbnailUri: string | null;
}

const initialState: TicketMediaState = {
	media: null,
	thumbnailUri: null,
};

const ticketMedia = createSlice({
	name: 'ticketMedia',
	initialState,
	reducers: {
		setMedia: (state, action: PayloadAction<string>) => {
			state.media = action.payload;
		},
		setThumbnailUri: (state, action: PayloadAction<string>) => {
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
