import { GET_TOKEN } from "./types";
import axios from "axios";
import { serverAddress } from "../config/Config";
export const getToken = () => dispatch => {
  axios
    .get(`${serverAddress}/api/token`)
    .then(res => dispatch({ type: GET_TOKEN, payload: res.data }));
  setTimeout(() => getToken(), 540000);
};
