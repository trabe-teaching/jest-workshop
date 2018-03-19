import { combineReducers } from "redux";
import loading, * as fromLoading from "reducers/loading";
import error, * as fromError from "reducers/error";
import users, * as fromUsers from "reducers/users";

export default combineReducers({ loading, error, users });

export const isLoading = state => fromLoading.isLoading(state.loading);
export const hasError = state => fromError.hasError(state.error);
export const getLightSiders = state => fromUsers.getLightSiders(state.users);
export const getDarkSiders = state => fromUsers.getDarkSiders(state.users);
