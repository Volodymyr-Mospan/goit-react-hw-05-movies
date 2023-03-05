import { FetchApi } from 'services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api = new FetchApi();

export const Cast = () => {
  const { movieId } = useParams();
  const [filmCast, setFilmCast] = useState(null);

  useEffect(() => {
    api.getMovieCast(movieId).then(result => setFilmCast(result));
  }, [movieId]);

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
