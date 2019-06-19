import { Dispatch } from "redux";
import { SET_MODE } from "@ReduxTypes";
import { IAction } from "@Interfaces/Redux/Action";

export const setMode = (payload: boolean) => (
  dispatch: Dispatch<IAction<boolean>>
) => {
  dispatch({
    type: SET_MODE,
    payload,
  });
};
