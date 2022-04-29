import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models";

const user: User = {};

const initialState = {
  user: user,
};

const userSlice = createSlice({
  name: "adminUser",
  initialState: initialState,
  reducers: {
    updateUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
