import axios from "axios";
import {
  START_COMMENT,
  COMMENT_SUCCESS,
  COMMENT_FAIL,
  START_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "./actionTypes";

export const getComments = () => (dispatch) => {
  dispatch({ type: START_COMMENT });
  axios
    .get("http://localhost:4000/comments")
    .then((res) => {
      console.log(res);
      setTimeout(() => {
        dispatch({ type: COMMENT_SUCCESS, payload: res.data });
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: COMMENT_FAIL, payload: err });
    });
};

export const signup = (user) => (dispatch) => {
  dispatch({ type: START_SIGNUP });
  axios
    .post("http://localhost:4000/users/signup", user)
    .then((res) => {
      console.log("res en el sigunup success", res);
      localStorage.setItem("token", res.data.token);

      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SIGNUP_FAIL, payload: err });
    });
};
