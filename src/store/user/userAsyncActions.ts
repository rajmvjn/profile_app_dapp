import { Dispatch } from "redux";
import { updateUser } from "./userSlice";
import axiosClient from "../../utils/axiosClient";
import API_ENDPOINTS from "../../constants/apiEndPoints";
import { updateStatus } from "../http/httpReqStatusSlice";

export const userAuthAsync = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    let response;
    try {
      dispatch(updateStatus({ isLoading: true }));
      response = await axiosClient.post(API_ENDPOINTS.USER_AUTH, {
        email,
        password,
      });

      dispatch(
        updateStatus({
          isLoading: false,
          message: response.data.message,
          errored: false,
          statusCode: response.status,
        })
      );
      dispatch(updateUser(response.data.user));
    } catch (error: any) {
      // update user data to null and set error message

      dispatch(updateUser({}));
      dispatch(
        updateStatus({
          isLoading: false,
          statusCode: error.response.status,
          message: error.response.data.message,
          errored: true,
        })
      );
    }
  };
};
