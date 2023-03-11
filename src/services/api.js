import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'ee11dca6bb556f59ebf7af76deb30565';
const params = {
  api_key: API_KEY,
};

export class FetchApi {
  async getTrending() {
    try {
      const response = await axios.get('trending/all/day', {
        params,
      });

      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovie(query) {
    try {
      const response = await axios.get('search/movie', {
        params: {
          ...params,
          query,
        },
      });

      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieDetails(movieDetails) {
    const response = await axios.get(movieDetails, {
      params,
    });

    return response.data;
  }
}
