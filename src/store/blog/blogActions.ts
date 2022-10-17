import { Dispatch } from "redux";
import { postBlog, getBlogs, deleteBlog, updateBlog } from "./blogSlice";
import axiosClient, { axiosClientMultipart } from "../../utils/axiosClient";
import API_ENDPOINTS from "../../constants/apiEndPoints";
import { updateStatus } from "../http/httpReqStatusSlice";
import { Blog } from "../../models/blog";

export const postBlogAsync = (blog: any, ctype: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const httpClient = ctype ? axiosClientMultipart : axiosClient;
      dispatch(updateStatus({ isLoading: true }));
      const response = await httpClient.post(API_ENDPOINTS.BLOG_API, blog);
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

export const updateBlogAsync = (blog: Blog) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateStatus({ isLoading: true }));
      const response = await axiosClient.patch(
        `${API_ENDPOINTS.BLOG_API}/${blog._id}`,
        blog.blogs
      );
      dispatch(
        updateStatus({ isLoading: false, message: response.data.message })
      );
      dispatch(updateBlog(blog));
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

export const deleteBlogAsync = (id: string, blog: Blog) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateStatus({ isLoading: true }));
      console.log(blog.blogs);
      const response = await axiosClient.delete(
        `${API_ENDPOINTS.BLOG_API}/${id}`,
        { data: { blog: blog.blogs } }
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
