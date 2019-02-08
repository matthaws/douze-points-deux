export const CURRENT_USER_LOGIN = "CURRENTUSERLOGIN";
export const CURRENT_USER_LOGOUT = "CURRENTUSERLOGOUT";

export const loginUser = user => ({
  type: CURRENT_USER_LOGIN,
  payload: user
});

export const logoutUser = user => ({
  type: CURRENT_USER_LOGOUT,
  payload: user
});
