import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  getCurrentPositionAsync,
  LocationObject,
  PermissionResponse,
} from 'expo-location';

interface ILocationState {
  permission: PermissionResponse | null;
  location: LocationObject | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ILocationState = {
  permission: null,
  location: null,
  status: 'idle',
  error: null,
};

const locationSlice = createSlice({
  name: 'locationSlice',
  initialState,
  reducers: {
    setPermission: (state, action: PayloadAction<PermissionResponse>) => {
      state.permission = action.payload;
    },
    setLocation: (state, action: PayloadAction<LocationObject>) => {
      state.location = action.payload;
    },
  },
});

export const { setPermission, setLocation } = locationSlice.actions;

export default locationSlice.reducer;
