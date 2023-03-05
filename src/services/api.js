import axios from 'axios';

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

  async getMovieDetails(movieId) {
    try {
      const response = await axios.get(`movie/${movieId}`, {
        params,
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieCast(movieId) {
    try {
      const response = await axios.get(`movie/${movieId}/credits`, {
        params,
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieReviews(movieId) {
    try {
      const response = await axios.get(`movie/${movieId}/reviews`, {
        params,
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
