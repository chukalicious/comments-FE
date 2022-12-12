export const START_COMMENT = "START_COMMENT";
export const COMMENT_SUCCESS = "COMMENT_SUCCESS";
export const COMMENT_FAIL = "COMMENT_FAIL";

const initialState = {
  error: "",
  isLoading: false,
  loggedIn: false,
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_COMMENT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case COMMENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    }
    case COMMENT_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
