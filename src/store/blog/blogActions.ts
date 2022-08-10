import { Dispatch } from "redux";
import { postBlog, getBlogs, deleteBlog } from "./blogSlice";
import axiosClient from "../../utils/axiosClient";
import API_ENDPOINTS from "../../constants/apiEndPoints";
import { updateStatus } from "../http/httpReqStatusSlice";
import { Blog } from "../../models/blog";

export const postBlogAsync = (blog: Blog) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateStatus({ isLoading: true }));
      const response = await axiosClient.post(API_ENDPOINTS.BLOG_API, blog);
      dispatch(
        updateStatus({ isLoading: false, message: response.data.message })
      );
      dispatch(postBlog(response.data));
    } catch (error) {
      dispatch(updateStatus({ isLoading: false }));
      console.log(error);
    }
  };
};

export const getBlogsAsync = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateStatus({ isLoading: true }));
      const response = await axiosClient.get(API_ENDPOINTS.BLOG_API);
      dispatch(
        updateStatus({ isLoading: false, message: response.data.message })
      );
      dispatch(getBlogs(response.data.blogs));
    } catch (error) {
      dispatch(updateStatus({ isLoading: false }));
      console.log(error);
    }
  };
};

export const deleteBlogAsync = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateStatus({ isLoading: true }));
      const response = await axiosClient.delete(
        `${API_ENDPOINTS.BLOG_API}/${id}`
      );
      dispatch(
        updateStatus({ isLoading: false, message: response.data.message })
      );
      dispatch(deleteBlog(id));
    } catch (error) {
      dispatch(updateStatus({ isLoading: false }));
      console.log(error);
    }
  };
};
