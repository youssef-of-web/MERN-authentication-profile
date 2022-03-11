import isEmpty from "../../util/isEmpty";
import { SET_USER } from "../types";

const initialState = {
  isConnected: false,
  user: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isConnected: !isEmpty(action.payload),
        user: action.payload,
      };

    default:
      return state;
  }
}
