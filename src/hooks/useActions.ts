import { useAppDispatch } from "../store/hooks";
import { bindActionCreators } from "redux";
import { commentActions } from "../store";
export const useActions = () => {
  const dispatch = useAppDispatch();
  const combinedActions = {
    ...commentActions,
  };
  return bindActionCreators(combinedActions, dispatch);
};
