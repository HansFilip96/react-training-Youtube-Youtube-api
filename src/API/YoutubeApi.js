import axios from "axios";

const KEY = "AIzaSyCJCKeUhEkumq8NCN4kspFuz7xPCRfcktE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
