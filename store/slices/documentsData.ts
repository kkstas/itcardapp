import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReceiptState } from "../../features/receipts/asyncStorageHandler";
import { TicketDataType } from "../../features/tickets/asyncStorageHandler";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface IdocumentsData {
  whichActive: "left" | "right";
  ticketData: TicketDataType[] | null;
  receiptData: IReceiptState[] | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IdocumentsData = {
  whichActive: "left",
  ticketData: null,
  receiptData: null,
  status: "idle",
  error: null,
};

///////////////////////////////////////////////////////////////////////
// asyncStorage AsyncThunks ///////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// TICKETS: ///////////////////////////////////////////////////////////
// --- GET TICKETS ---
export const getTicketsThunk = createAsyncThunk(
  "documentsData/getTicketsThunk",
  async () => {
    console.log("getTicketsThunk aktywowany");
    const jsonValue = await AsyncStorage.getItem("ticketData");
    const parsedValue = jsonValue != null ? JSON.parse(jsonValue) : null;
    if (Array.isArray(parsedValue)) {
      return parsedValue as TicketDataType[];
    } else if (parsedValue) {
      return [parsedValue] as TicketDataType[];
    } else {
      return null;
    }
  }
);

// RECEIPTS: //////////////////////////////////////////////////////////
// GET RECEIPTS
export const getReceiptsThunk = createAsyncThunk(
  "documentsData/getReceiptsThunk",
  async () => {
    console.log("getReceiptsThunk aktywowany");
    const jsonValue = await AsyncStorage.getItem("receiptData");
    const parsedValue = jsonValue != null ? JSON.parse(jsonValue) : null;
    if (Array.isArray(parsedValue)) {
      return parsedValue as IReceiptState[];
    } else if (parsedValue) {
      return [parsedValue] as IReceiptState[];
    } else {
      return null;
    }
  }
);

const documentsData = createSlice({
  name: "documentsData",
  initialState,
  reducers: {
    switchToTickets: (state) => {
      state.whichActive = "left";
    },
    switchToReceipts: (state) => {
      state.whichActive = "right";
    },
    addTicket: (state, action: PayloadAction<TicketDataType>) => {
      if (Array.isArray(state.ticketData)) {
        state.ticketData = [...state.ticketData, action.payload];
      } else if (state.ticketData !== null) {
        state.ticketData = [action.payload];
      }
    },
    addReceipt: (state, action: PayloadAction<IReceiptState>) => {
      if (Array.isArray(state.receiptData)) {
        state.receiptData = [...state.receiptData, action.payload];
      } else if (state.receiptData !== null) {
        state.receiptData = [action.payload];
      }
    },
    removeTicket: (state, action: PayloadAction<number>) => {
      if (state.ticketData) {
        state.ticketData = state.ticketData.filter(
          (el) => el.id !== action.payload
        );
      }
    },
    removeReceipt: (state, action: PayloadAction<number>) => {
      if (state.receiptData) {
        state.receiptData = state.receiptData.filter(
          (el) => el.id !== action.payload
        );
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTicketsThunk.pending, (state, _action) => {
        state.status = "loading";
      })
      .addCase(
        getTicketsThunk.fulfilled,
        (state, action: PayloadAction<TicketDataType[] | null>) => {
          state.status = "succeeded";
          state.ticketData = action.payload;
        }
      )
      .addCase(getTicketsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error as string;
      })
      .addCase(getReceiptsThunk.pending, (state, _action) => {
        state.status = "loading";
      })
      .addCase(
        getReceiptsThunk.fulfilled,
        (state, action: PayloadAction<IReceiptState[] | null>) => {
          state.status = "succeeded";
          state.receiptData = action.payload;
        }
      )
      .addCase(getReceiptsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error as string;
      });
  },
});

export const {
  addTicket,
  addReceipt,
  removeTicket,
  removeReceipt,
  switchToTickets,
  switchToReceipts,
} = documentsData.actions;

export default documentsData.reducer;
