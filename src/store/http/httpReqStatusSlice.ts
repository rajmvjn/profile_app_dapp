import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestStatus } from "../../models";

const reqStatus: RequestStatus = {
  isLoading: false,
  error: null,
  statusCode: null,
  message: "",
};

const initialState = {
  requstStatus: reqStatus,
};

const httpReqStatusSlice = createSlice({
  name: "httpReqStatus",
  initialState: initialState,
  reducers: {
    updateStatus(state, action: PayloadAction<any>) {
      state.requstStatus = {
        isLoading: action.payload.isLoading,
        error: action.payload.error,
        statusCode: action.payload.statusCode,
        message: action.payload.message,
      };
    },
  },
});

export const { updateStatus } = httpReqStatusSlice.actions;

export default httpReqStatusSlice.reducer;
