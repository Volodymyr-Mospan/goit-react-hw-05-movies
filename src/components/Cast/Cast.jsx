import { FetchApi } from 'services/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api = new FetchApi();

export const Cast = () => {
  const { movieId } = useParams();
  const [filmCast, setFilmCast] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .getMovieDetails(`movie/${movieId}/credits`)
      .then(result => setFilmCast(result))
      .catch(error => {
        console.error(error);
        navigate('/noFound', { replace: true });
      });
  }, [movieId, navigate]);

  return (
    <>
      {!!filmCast &&
        filmCast?.cast.map(actor => (
          <div key={actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={`${actor.name}`}
                width="100"
              />
            )}

            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </div>
        ))}
    </>
  );
};
