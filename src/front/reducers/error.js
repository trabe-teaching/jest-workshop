import { API_FAILED } from "action/creators";

const initialState = false;

export default (state = initialState, { type }) => {
  if (type === API_FAILED) {
    return true;
  }

  return state;
};

export const hasError = state => state;
