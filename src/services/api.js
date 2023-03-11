import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'ee11dca6bb556f59ebf7af76deb30565';
const params = {
  api_key: API_KEY,
};

export class FetchApi {
  async getTrending(abortController) {
    try {
      const response = await axios.get('trending/movie/day', {
        signal: abortController.signal,
        params,
      });

      return response.data.results;
    } catch (error) {
      if (error.code === 'ERR_CANCELED') return;
      console.error(error);
    }
  }

  async getMovie(query, abortController) {
    try {
      const response = await axios.get('search/movie', {
        signal: abortController.signal,
        params: {
          ...params,
          query,
        },
      });

      return response.data.results;
    } catch (error) {
      if (error.code === 'ERR_CANCELED') return;
      console.error(error);
    }
  }

  async getMovieDetails(movieDetails, abortController) {
    const response = await axios.get(movieDetails, {
      signal: abortController.signal,
      params,
    });

    return response.data;
  }
}
