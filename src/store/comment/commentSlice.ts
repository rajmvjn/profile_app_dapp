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
    deleteComment(state, action: any) {
      state.comments = state.comments.filter(
        (comment) => comment._id !== action.payload
      );
    },
    getComments(state, action: PayloadAction<Comment[]>) {
      state.comments = action.payload;
    },
  },
});

export const { postComment, getComments, deleteComment } = commentSlice.actions;

export default commentSlice.reducer;
