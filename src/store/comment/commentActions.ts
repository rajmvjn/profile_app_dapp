import { Dispatch } from "redux";
import { postComment, getComments, deleteComment } from "./commentSlice";
import axiosClient from "../../utils/axiosClient";
import API_ENDPOINTS from "../../constants/apiEndPoints";
import { updateStatus } from "../http/httpReqStatusSlice";

export const postCommentAsync = (comment: any) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateStatus({ isLoading: true }));
      const response = await axiosClient.post(
        API_ENDPOINTS.COMMENTS_API,
        comment
      );
      dispatch(
        updateStatus({ isLoading: false, message: response.data.message })
      );
      dispatch(postComment(response.data));
    } catch (error) {
      dispatch(updateStatus({ isLoading: false }));
      console.log(error);
    }
  };
};

export const getCommentsAsync = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateStatus({ isLoading: true }));
      const response = await axiosClient.get(API_ENDPOINTS.COMMENTS_API);
      dispatch(
        updateStatus({ isLoading: false, message: response.data.message })
      );
      dispatch(getComments(response.data.comments));
    } catch (error) {
      dispatch(updateStatus({ isLoading: false }));
      console.log(error);
    }
  };
};

export const deleteCommentAsync = (id: any) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateStatus({ isLoading: true }));
      const response = await axiosClient.delete(
        API_ENDPOINTS.COMMENTS_API + `/${id}`
      );
      dispatch(
        updateStatus({ isLoading: false, message: response.data.message })
      );
      dispatch(deleteComment(id));
    } catch (error) {
      dispatch(updateStatus({ isLoading: false }));
      console.log(error);
    }
  };
};
