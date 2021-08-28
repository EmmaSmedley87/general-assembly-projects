import axios from "axios";

const baseUrl =
  "https://apiv3.iucnredlist.org/api/v3/species/region/europe/page/0?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";

export const getAllAnimals = () => {
  return axios.get(`${baseUrl}`);
};
