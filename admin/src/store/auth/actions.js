import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_INIT,
  LOGIN_USER_SUCCESS,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_INIT,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_INIT,
  USER_SESSION,
  USER_SESSION_FAILURE,
  USER_SESSION_INIT,
  USER_SESSION_SUCCESS,
  VERIFY_PASSWORD,
  VERIFY_PASSWORD_SUCCESS,
  VERIFY_PASSWORD_FAILURE,
  VERIFY_PASSWORD_INIT,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_INIT,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_INIT,
} from "../actionTypes";

// Actions for fetching a session
export const UserSession = (data) => {
  return {
    type: USER_SESSION,
    payload: data,
  };
};

export const UserSessionSuccess = (data) => {
  return {
    type: USER_SESSION_SUCCESS,
    payload: data,
  };
};

export const UserSessionFailure = (data) => {
  return {
    type: USER_SESSION_FAILURE,
    payload: data,
  };
};

export const UserSessionInit = (data) => {
  return {
    type: USER_SESSION_INIT,
    payload: data,
  };
};

// Actions to login a user
export const loginUser = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};
export const loginUserSuccess = (data) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data,
  };
};

export const loginUserFailure = (data) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: data,
  };
};

export const loginUserInit = (data) => {
  return {
    type: LOGIN_USER_INIT,
    payload: data,
  };
};

// Actions to logout a user
export const logoutUser = (data) => {
  return {
    type: LOGOUT_USER,
    payload: data,
  };
};
export const logoutUserSuccess = (data) => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: data,
  };
};

export const logoutUserFailure = (data) => {
  return {
    type: LOGOUT_USER_FAILURE,
    payload: data,
  };
};

export const logoutUserInit = (data) => {
  return {
    type: LOGOUT_USER_INIT,
    payload: data,
  };
};

// Actions for Forgot Password
export const forgotPasswordCta = (data) => {
  return {
    type: FORGOT_PASSWORD,
    payload: data,
  };
};
export const forgotPasswordCtaSuccess = (data) => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const forgotPasswordCtaFailure = (data) => {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: data,
  };
};

export const forgotPasswordCtaInit = (data) => {
  return {
    type: FORGOT_PASSWORD_INIT,
    payload: data,
  };
};
// Actions for Reset Password
export const resetPasswordCta = (data) => {
  return {
    type: RESET_PASSWORD,
    payload: data,
  };
};
export const resetPasswordCtaSuccess = (data) => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const resetPasswordCtaFailure = (data) => {
  return {
    type: RESET_PASSWORD_FAILURE,
    payload: data,
  };
};

export const resetPasswordCtaInit = (data) => {
  return {
    type: RESET_PASSWORD_INIT,
    payload: data,
  };
};

// Actions for Verify Password
export const verifyPasswordCta = (data) => {
  return {
    type: VERIFY_PASSWORD,
    payload: data,
  };
};
export const verifyPasswordCtaSuccess = (data) => {
  return {
    type: VERIFY_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const verifyPasswordCtaFailure = (data) => {
  return {
    type: VERIFY_PASSWORD_FAILURE,
    payload: data,
  };
};

export const verifyPasswordCtaInit = (data) => {
  return {
    type: VERIFY_PASSWORD_INIT,
    payload: data,
  };
};
// Actions for Change Password
export const changePasswordCta = (data) => {
  return {
    type: CHANGE_PASSWORD,
    payload: data,
  };
};
export const changePasswordCtaSuccess = (data) => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const changePasswordCtaFailure = (data) => {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    payload: data,
  };
};

export const changePasswordCtaInit = (data) => {
  return {
    type: CHANGE_PASSWORD_INIT,
    payload: data,
  };
};
