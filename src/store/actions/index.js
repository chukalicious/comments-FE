import axios from "axios";
import {
  START_GET_COMMENT,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
  START_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  START_GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  POST_COMMENT_START,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAIL,
} from "./actionTypes";

export const getComments = () => (dispatch) => {
  dispatch({ type: START_GET_COMMENT });
  axios
    .get("http://localhost:4000/comments")
    .then((res) => {
      setTimeout(() => {
        dispatch({ type: GET_COMMENT_SUCCESS, payload: res.data });
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_COMMENT_FAIL, payload: err });
    });
};

export const signup = (user) => (dispatch) => {
  dispatch({ type: START_SIGNUP });
  axios
    .post("http://localhost:4000/users/signup", user)
    .then((res) => {
      console.log("res en el sigunup success", res);
      localStorage.setItem("token", res.data.user.password);

      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.user });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SIGNUP_FAIL, payload: err.message });
    });
};

export const login = (credentials) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axios
    .post("http://localhost:4000/users/login/log", credentials)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};
export const getUser = (userId) => (dispatch) => {
  const toNum = Number(userId);
  console.log("Actions: index: typeof toNum:", typeof userId);
  dispatch({ type: START_GET_USER });
  axios
    .get(`http://localhost:4000/users/${userId}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_USER_FAIL, payload: err }));
};

export const postComment = (comment) => (dispatch) => {
  dispatch({ type: POST_COMMENT_START });
  axios
    .post("http://localhost:4000/comments", comment)
    .then((res) => {
      dispatch({ type: POST_COMMENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_COMMENT_FAIL, payload: err });
    });
};
