import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestStatus } from "../../models";

const reqStatus: RequestStatus = {
  isLoading: false,
  statusCode: null,
  message: "",
  errored: false,
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
        statusCode: action.payload.statusCode,
        message: action.payload.message,
        errored: action.payload.errored,
      };
    },
  },
});

export const { updateStatus } = httpReqStatusSlice.actions;

export default httpReqStatusSlice.reducer;
