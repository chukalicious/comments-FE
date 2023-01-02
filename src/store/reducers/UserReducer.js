export const START_SIGNUP = "START_SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

const initialState = {
  error: "",
  isLoading: false,
  loggedIn: false,
  userId: "",
  username: "",
  avatar: "",
  token: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_SIGNUP: {
      return {
        ...state,
        isLoading: true,
        loggedIn: false,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        loggedIn: true,
        user: { ...action.payload },
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        isLoading: false,
        loggedIn: false,
        error: action.payload,
      };
    }
    case LOGIN_START: {
      return {
        ...state,
        isLoading: true,
        loggedIn: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        loggedIn: true,
        userId: action.payload.userId,
        username: action.payload.username,
        avatar: action.payload.avatar,
        token: action.payload.token,
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        isLoading: false,
        loggedIn: false,
        error: action.payload.message,
      };
    }
    default: {
      return state;
    }
  }
};
