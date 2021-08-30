import axios from "axios";

const baseUrl = "https://elephant-api.herokuapp.com/elephants";

export const getAllElephants = () => {
  return axios.get(`${baseUrl}`);
};
