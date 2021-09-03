import axios from "axios";

const baseUrl = "https://ga-indian-rogue.herokuapp.com/elephant/elephants";

export const getAllElephants = () => {
  return axios.get(`${baseUrl}`);
};

export const getRandomElephant = () => {
  return axios.get(`${baseUrl}/random`);
};
