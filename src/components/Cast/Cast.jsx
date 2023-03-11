import { FetchApi } from 'services/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Person } from 'components/Cast/Cast.styled';

const api = new FetchApi();

export const Cast = () => {
  const { movieId } = useParams();
  const [filmCast, setFilmCast] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchMovieDetails() {
      try {
        const result = await api.getMovieDetails(
          `movie/${movieId}/credits`,
          abortController
        );
        setFilmCast(result);
      } catch (error) {
        if (error.code === 'ERR_CANCELED') return;
        console.error(error);
      }
    }
    fetchMovieDetails();

    return () => {
      abortController.abort();
    };
  }, [movieId, navigate]);

  return (
    <>
      {!!filmCast &&
        filmCast?.cast.map(actor => (
          <Person key={actor.id}>
            {
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={`${actor.name}`}
                width="100"
              />
            }

            <div>
              <p>Name: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </Person>
        ))}
    </>
  );
};
