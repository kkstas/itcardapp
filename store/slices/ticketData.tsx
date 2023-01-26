import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TicketDataType } from "../../hooks/asyncStorage";

export type TPriority = "normal" | "high" | "critical";

export interface ITicketDataState {
  title: string;
  content: string;
  priority: TPriority;
  media: string | null;
  thumbnailUri: string | null;
  locationUri: string | null;
  address: string | null;
  coords: Icoords | null;
}

export type Icoords = {
  lat: number;
  lng: number;
  pickedFromMap: boolean;
};

const initialState: ITicketDataState = {
  title: "",
  content: "",
  priority: "normal",
  media: null,
  thumbnailUri: null,
  locationUri: null,
  address: null,
  coords: null,
};

export const ticketData = createSlice({
  name: "ticketData",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<{ title: string }>) => {
      state.title = action.payload.title;
    },
    setContent: (state, action: PayloadAction<{ content: string }>) => {
      state.content = action.payload.content;
    },
    setMedia: (state, action: PayloadAction<string>) => {
      state.media = action.payload;
    },
    setLocationUri: (state, action: PayloadAction<{ locationUri: string }>) => {
      state.locationUri = action.payload.locationUri;
    },
    setThumbnailUri: (state, action: PayloadAction<string>) => {
      state.thumbnailUri = action.payload;
    },
    setPriority: (state, action: PayloadAction<{ priority: TPriority }>) => {
      state.priority = action.payload.priority;
    },
    setAddress: (state, action: PayloadAction<{ address: string }>) => {
      state.address = action.payload.address;
    },
    setCoords: (state, action: PayloadAction<{ coords: Icoords }>) => {
      state.coords = action.payload.coords;
    },
    clearInputs: (state) => {
      state.title = "";
      state.content = "";
      state.priority = "normal";
      state.media = null;
      state.thumbnailUri = null;
      state.locationUri = null;
      state.address = null;
      state.coords = null;
    },
    clearLocationInputs: (state) => {
      state.address = null;
      state.coords = null;
      state.locationUri = null;
    },
    clearMediaInputs: (state) => {
      state.thumbnailUri = null;
      state.media = null;
    },
  },
});

export const {
  setTitle,
  setContent,
  setAddress,
  setLocationUri,
  setPriority,
  setThumbnailUri,
  clearInputs,
  setMedia,
  setCoords,
  clearLocationInputs,
  clearMediaInputs,
} = ticketData.actions;

export default ticketData.reducer;
