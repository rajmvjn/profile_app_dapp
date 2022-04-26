import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Comment from "../../models/comment";

const comments: Comment[] = [];

const initialState = {
  comments: comments,
};

const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
    postComment(state, action: PayloadAction<Comment>) {
      state.comments.push(action.payload);
    },
  },
});

export const { postComment } = commentSlice.actions;

export default commentSlice.reducer;
