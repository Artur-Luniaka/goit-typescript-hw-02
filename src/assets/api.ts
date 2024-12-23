import axios from "axios";

const ACCESS_KEY = "YJ-0_nZdDxuU14YEwZTV04O7N9UGWKcRNRQ-hFDb-bg";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos/";

interface Images {
  id: string;
  user: { name: string };
  urls: { small: string; regular: string };
  alt_description: string;
  likes: number;
}

export const fetchImages = async (
  request: string,
  currentPage: number
): Promise<{ results: Images[]; total: number }> | never => {
  try {
    const response = await axios.get(
      `?client_id=${ACCESS_KEY}&query=${request}&content_filter=high&orientation=landscape&page=${currentPage}&per_page=15`
    );
    return {
      results: response.data.results,
      total: response.data.total,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch images");
  }
};
