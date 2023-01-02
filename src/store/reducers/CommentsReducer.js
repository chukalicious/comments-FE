export const START_GET_COMMENT = "START_GET_COMMENT";
export const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS";
export const GET_COMMENT_FAIL = "GET_COMMENT_FAIL";
export const POST_COMMENT_START = "POST_COMMENT_START";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
export const POST_COMMENT_FAIL = "POST_COMMENT_FAIL";

const initialState = {
  error: "",
  isLoading: false,
  loggedIn: false,
  user: {},
  comments: [],
  comment: {},
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_COMMENT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_COMMENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    }
    case GET_COMMENT_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case POST_COMMENT_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_COMMENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        comment: action.payload,
      };
    }
    case POST_COMMENT_FAIL: {
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
