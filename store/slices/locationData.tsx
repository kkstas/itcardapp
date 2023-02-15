import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LocationObject, LocationObjectCoords } from "expo-location";

export interface ILocationData {
  coords: LocationObjectCoords | null;
  timestamp: number | null;
  mocked?: boolean | null;
}

const initialState: ILocationData = {
  coords: null,
  timestamp: null,
};

export const locationData = createSlice({
  name: "locationData",
  initialState,
  reducers: {
    setLocationData: (state, action: PayloadAction<LocationObject>) => {
      state = action.payload;
    },
  },
});

export const setLocationData = locationData.actions.setLocationData;

export default locationData.reducer;
