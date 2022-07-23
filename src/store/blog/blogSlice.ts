import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Blogs from "../../models/blog";

const blogs: Blogs[] = [];

const initialState = {
  blogs,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    postBlog(state, action: PayloadAction<Blogs>) {
      state.blogs.push(action.payload);
    },
    getBlogs(state, action: PayloadAction<Blogs[]>) {
      state.blogs = action.payload;
    },
  },
});

export const { postBlog, getBlogs } = blogsSlice.actions;

export default blogsSlice.reducer;
