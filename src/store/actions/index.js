import axios from "axios";
import { START_COMMENT, COMMENT_SUCCESS, COMMENT_FAIL } from "./actionTypes";

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
