import axios from "axios";

// this is the api show animals in Europe by Region
const baseUrl =
  "https://apiv3.iucnredlist.org/api/v3/species/region/europe/page/0?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";

// we need multiple base urls to dispaly name, country, sepcies count, threats, conservation measures and habitats

// this gets the animal data fromt he api
export const getAllAnimals = () => {
  return axios.get(`${baseUrl}`);
};
