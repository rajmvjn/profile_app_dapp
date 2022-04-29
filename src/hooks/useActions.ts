import { useAppDispatch } from "../store/hooks";
import { bindActionCreators } from "redux";
import { commentActions, userActions } from "../store";
export const useActions = () => {
  const dispatch = useAppDispatch();
  const combinedActions = {
    ...commentActions,
    ...userActions,
  };
  return bindActionCreators(combinedActions, dispatch);
};
