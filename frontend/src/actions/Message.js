import { ADD_MESSAGE } from "./types";
import { serverAddress } from "../config/Config";
import axios from "axios";

export const addMessage = msg => dispatch => {
  axios.post(`${serverAddress}/api/bot`, msg).then(res => {
    console.log(res.data);
    dispatch({
      type: ADD_MESSAGE,
      payload: res.data
    });
  });
  dispatch({
    type: ADD_MESSAGE,
    payload: msg
  });
};
