import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'ee11dca6bb556f59ebf7af76deb30565';
const params = {
  api_key: API_KEY,
};

// export async function fetchApi() {
//   try {
//     const response = await axios.get('trending/all/day', {
//       params,
//     });
//     // console.log(response.data.results);

//     return response.data.results;
//   } catch (error) {
//     console.error(error);
//   }
// }

export class FetchApi {
  async getTrending() {
    try {
      const response = await axios.get('trending/all/day', {
        params,
      });
      // console.log(response.data.results);

      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieDetails(movieId) {
    console.log(typeof movieId);

    try {
      const response = await axios.get(`movie/${movieId}`, {
        params,
      });
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
