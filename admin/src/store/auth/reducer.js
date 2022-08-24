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
  USER_SESSION_SUCCESS,
  USER_SESSION_FAILURE,
  USER_SESSION_INIT,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_INIT,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_INIT,
} from '../actionTypes';

const initialState = {
  userData: null,
  isLoggedIn: false,

  userSessionSuccess: false,
  userSessionFailure: false,
  userSessionInit: false,

  loginUserSuccess: false,
  loginUserFailure: false,

  logoutUserSuccess: false,
  logoutUserFailure: false,

  changePasswordSuccess: false,
  changePasswordFailure: false,

  forgotPasswordSuccess: false,
  forgotPasswordFailure: false,

  resetPasswordSuccess: false,
  resetPasswordFailure: false,

  errorMessage: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_SESSION:
      return {
        ...state,
        userSessionSuccess: false,
        loginUserFailure: false,
      };
    case USER_SESSION_SUCCESS:
      return {
        ...state,
        userSessionSuccess: true,
        userSessionFailure: false,
        userData: action.payload,
        isLoggedIn: true,
      };
    case USER_SESSION_FAILURE:
      return {
        ...state,
        userSessionSuccess: false,
        userSessionFailure: true,
        isLoggedIn: false,
        userType: null,
        errorMessage: action.payload,
      };
    case USER_SESSION_INIT:
      return {
        ...state,
        userSessionSuccess: false,
        userSessionFailure: false,
      };

    case LOGIN_USER:
      return {
        ...state,
        loginUserSuccess: false,
        loginUserFailure: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginUserSuccess: true,
        loginUserFailure: false,
        userData: action.payload,
        isLoggedIn: true,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loginUserSuccess: false,
        loginUserFailure: true,
        isLoggedIn: false,
        errorMessage: action.payload,
      };
    case LOGIN_USER_INIT:
      return {
        ...state,
        loginUserSuccess: false,
        loginUserFailure: false,
        errorMessage: '',
      };

    case LOGOUT_USER:
      return {
        ...state,
        logoutUserSuccess: false,
        logoutUserFailure: false,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        logoutUserSuccess: true,
        logoutUserFailure: false,
        userData: null,
        isLoggedIn: false,
        errorMessage: '',
      };
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        logoutUserSuccess: false,
        logoutUserFailure: true,
        errorMessage: action.payload,
      };
    case LOGOUT_USER_INIT:
      return {
        ...state,
        logoutUserSuccess: false,
        logoutUserFailure: false,
        errorMessage: '',
      };

    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPasswordSuccess: false,
        forgotPasswordFailure: false,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordSuccess: true,
        forgotPasswordFailure: false,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPasswordSuccess: false,
        forgotPasswordFailure: true,
        errorMessage: action.payload,
      };
    case FORGOT_PASSWORD_INIT:
      return {
        ...state,
        forgotPasswordSuccess: false,
        forgotPasswordFailure: false,
        errorMessage: '',
      };

    case CHANGE_PASSWORD:
      return {
        ...state,
        changePasswordSuccess: false,
        changePasswordFailure: false,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePasswordSuccess: true,
        changePasswordFailure: false,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        changePasswordSuccess: false,
        changePasswordFailure: true,
        errorMessage: action.payload,
      };
    case CHANGE_PASSWORD_INIT:
      return {
        ...state,
        changePasswordSuccess: false,
        changePasswordFailure: false,
        errorMessage: '',
      };

    case RESET_PASSWORD:
      return {
        ...state,
        resetPasswordSuccess: false,
        resetPasswordFailure: false,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: true,
        resetPasswordFailure: false,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        resetPasswordSuccess: false,
        resetPasswordFailure: true,
        errorMessage: action.payload,
      };
    case RESET_PASSWORD_INIT:
      return {
        ...state,
        resetPasswordSuccess: false,
        resetPasswordFailure: false,
        errorMessage: '',
      };

    default:
      return state;
  }
};

export default auth;
