import { Dispatch } from "redux";
import { postBlog } from "./blogSlice";
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
