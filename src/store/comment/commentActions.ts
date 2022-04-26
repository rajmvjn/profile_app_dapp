import { Dispatch } from "redux";
import { postComment } from "./commentSlice";
import axiosClient from "../../utils/axiosClient";
import API_ENDPOINTS from "../../constants/apiEndPoints";
import { updateStatus } from "../http/httpReqStatusSlice";

export const postCommentAsync = (comment: any) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateStatus({ isLoading: true }));
      const response = await axiosClient.post(
        API_ENDPOINTS.POST_COMMENT,
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
