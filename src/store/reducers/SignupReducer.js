export const START_SIGNUP = "START_SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

const initialState = {
  error: "",
  isLoading: false,
  loggedIn: false,
  user: "",
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_SIGNUP: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        loggedIn: true,
        user: action.payload,
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
    default: {
      return state;
    }
  }
};
