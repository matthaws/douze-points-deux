import { CURRENT_USER_LOGIN, CURRENT_USER_LOGOUT } from "./actions";

export default (state, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case CURRENT_USER_LOGIN:
      newState.currentUser = action.payload;
      return newState;
    case CURRENT_USER_LOGOUT:
      newState.currentUser = undefined;
      return newState;
    default:
      return newState;
  }
};
