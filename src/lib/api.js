import axios from "axios";

const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants";

export const getAllElephants = () => {
  return axios.get(`${baseUrl}`);
};
