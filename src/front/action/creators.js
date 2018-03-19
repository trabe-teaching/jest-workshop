import * as api from "action/api";

export const API_FAILED = "API_FAILED";

export const apiFailed = () => ({
  type: API_FAILED,
});

const fetchErrorHandler = dispatch => e => {
  console.error("Fetch failed!", e);
  dispatch(apiFailed());
};

export const USERS_UPDATED = "USERS_UPDATED";

export const usersUpdated = users => ({
  type: USERS_UPDATED,
  payload: {
    users,
  },
});

export const USERS_FETCH_REQUEST = "USERS_FETCH_REQUEST";
export const USERS_FETCH_SUCCESS = "USERS_FETCH_SUCCESS";

export const usersFetch = () => dispatch => {
  dispatch({ type: USERS_FETCH_REQUEST });

  return api
    .fetchUsers()
    .then(users => {
      dispatch(usersUpdated(users));
      dispatch({ type: USERS_FETCH_SUCCESS });
    })
    .catch(fetchErrorHandler(dispatch));
};

export const MASTER_SEEK_REQUEST = "MASTER_SEEK_REQUEST";
export const MASTER_SEEK_SUCCESS = "MASTER_SEEK_SUCCESS";

export const masterSeek = id => dispatch => {
  dispatch({ type: MASTER_SEEK_REQUEST });

  return api
    .seekMaster(id)
    .then(users => {
      dispatch(usersUpdated(users));
      dispatch({ type: MASTER_SEEK_SUCCESS });
    })
    .catch(fetchErrorHandler(dispatch));
};

export const TURN_REQUEST = "TURN_REQUEST";
export const TURN_SUCCESS = "TURN_SUCCESS";

export const turn = id => dispatch => {
  dispatch({ type: TURN_REQUEST });

  return api
    .turn(id)
    .then(users => {
      dispatch(usersUpdated(users));
      dispatch({ type: TURN_SUCCESS });
    })
    .catch(fetchErrorHandler(dispatch));
};

export const BETRAY_REQUEST = "BETRAY_REQUEST";
export const BETRAY_SUCCESS = "BETRAY_SUCCESS";

export const betray = id => dispatch => {
  dispatch({ type: BETRAY_REQUEST });

  return api
    .betray(id)
    .then(users => {
      dispatch(usersUpdated(users));
      dispatch({ type: BETRAY_SUCCESS });
    })
    .catch(fetchErrorHandler(dispatch));
};

export const BANISH_REQUEST = "BANISH_REQUEST";
export const BANISH_SUCCESS = "BANISH_SUCCESS";

export const banish = id => dispatch => {
  dispatch({ type: BANISH_REQUEST });

  return api
    .banish(id)
    .then(users => {
      dispatch(usersUpdated(users));
      dispatch({ type: BANISH_SUCCESS });
    })
    .catch(fetchErrorHandler(dispatch));
};

export const RESET_REQUEST = "RESET_REQUEST";
export const RESET_SUCCESS = "RESET_SUCCESS";

export const reset = () => dispatch => {
  dispatch({ type: RESET_REQUEST });

  return api
    .reset()
    .then(users => {
      dispatch(usersUpdated(users));
      dispatch({ type: RESET_SUCCESS });
    })
    .catch(fetchErrorHandler(dispatch));
};
