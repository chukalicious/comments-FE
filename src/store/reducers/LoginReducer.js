export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

const initialState = {
  error: "",
  isLoading: false,
  loggedIn: false,
  user: "",
  token: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
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
        user: { ...action.payload },
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
