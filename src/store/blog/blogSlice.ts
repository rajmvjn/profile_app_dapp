import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import _ from "lodash";

import Blogs, { Blog } from "../../models/blog";

const blogs: Blogs[] = [];

const initialState = {
  blogs,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    updateBlog(state, action: PayloadAction<Blog>) {
      let nBlog: any = _.cloneDeep(current(state.blogs));
      nBlog.forEach((blog: any) => {
        if (blog._id === action.payload._id) {
          blog.blogs = action.payload.blogs;
        }
      });

      state.blogs = [...nBlog];
    },
    postBlog(state, action: PayloadAction<Blogs>) {
      state.blogs.push(action.payload);
    },
    getBlogs(state, action: PayloadAction<Blogs[]>) {
      state.blogs = action.payload;
    },
    deleteBlog(state, action: PayloadAction<string>) {
      let nBlog: any = current(state.blogs);
      state.blogs = nBlog.filter((blog: any) => {
        return blog._id !== action.payload;
      });
    },
  },
});

export const { postBlog, getBlogs, deleteBlog, updateBlog } =
  blogsSlice.actions;

export default blogsSlice.reducer;
