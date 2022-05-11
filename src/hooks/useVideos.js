import { useState, useEffect } from "react";
import YoutubeApi from "../API/YoutubeApi";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await YoutubeApi.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;
