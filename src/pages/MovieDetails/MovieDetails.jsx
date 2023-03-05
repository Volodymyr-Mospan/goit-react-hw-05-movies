import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchApi } from 'services/api';
import { Container } from 'components/GlobalStyle';

const api = new FetchApi();

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [film, setFilm] = useState(null);

  useEffect(() => {
    api.getMovieDetails(movieId).then(result => setFilm(result));
  }, [movieId]);

  if (film) {
    return (
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={`Poster of ${film.name}`}
        />
      </Container>
    );
  }
};
