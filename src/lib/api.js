import axios from "axios";

const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants";

export const getAllElephants = () => {
  return axios.get(`${baseUrl}`);
};

export const getRandomElephant = () => {
  return axios.get(`${baseUrl}/random`);
};
