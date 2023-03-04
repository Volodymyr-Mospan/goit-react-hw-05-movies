import { useEffect, useState } from 'react';
import { FetchApi } from 'services/api';

const api = new FetchApi();

export const MovieDetails = ({ movieId }) => {
  const [film, setFilm] = useState(null);

  useEffect(() => {
    api.getMovieDetails(movieId).then(result => setFilm(result));
  }, [movieId]);

  if (film) {
    return (
      <img
        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        alt={`Poster of ${film.name}`}
      />
    );
  }
};
