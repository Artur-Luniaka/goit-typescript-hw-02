import axios from "axios";

const ACCESS_KEY = "YJ-0_nZdDxuU14YEwZTV04O7N9UGWKcRNRQ-hFDb-bg";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos/";

export const fetchImages = async (request, currentPage) => {
  const searchImages = new URLSearchParams({
    query: request,
    content_filter: "high",
    orientation: "landscape",
    page: currentPage,
    per_page: 15,
  });
  const response = await axios(`?client_id=${ACCESS_KEY}&${searchImages}`);
  return {
    results: response.data.results,
    total: response.data.total,
  };
};
