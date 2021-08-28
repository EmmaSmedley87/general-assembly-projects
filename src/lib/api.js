import axios from "axios";

const baseUrl = "https://apiv3.iucnredlist.org/api/v3/docs";

export const getAllAnimals = () => {
  return axios.get(`${baseUrl}/`);
};
