import { IAction } from "@Interfaces/Redux/Action";
import { SET_MODE } from "@ReduxTypes";

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action: IAction<boolean>) => {
  switch (action.type) {
    case SET_MODE:
      return action.payload;
    default:
      return state;
  }
};
