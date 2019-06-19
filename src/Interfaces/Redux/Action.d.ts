//#region Global Imports
import { Action as ReduxAction } from "redux";
//#region Interface Imports

export interface IAction<T> extends ReduxAction {
  payload?: T;
}
