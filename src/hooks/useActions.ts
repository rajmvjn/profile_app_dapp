import { useAppDispatch } from "../store/hooks";
import { bindActionCreators } from "redux";
import { commentActions, userActions, blogActions } from "../store";
export const useActions = () => {
  const dispatch = useAppDispatch();
  const combinedActions = {
    ...commentActions,
    ...userActions,
    ...blogActions,
  };
  return bindActionCreators(combinedActions, dispatch);
};
