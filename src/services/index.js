/* eslint-disable quotes */
/* eslint-disable object-shorthand */
import axios from "axios";

const baseURL = "http://3.23.50.117:3000";

const user = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default user;
