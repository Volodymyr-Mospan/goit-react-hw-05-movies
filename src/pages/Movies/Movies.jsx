import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { Container } from 'components/GlobalStyle';
import { FetchApi } from 'services/api';

const api = new FetchApi();

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  const [movies, setMovies] = useState(null);

  const location = useLocation();
  console.log(location);
  const firstQuery = useRef(query);

  useEffect(() => {
    if (!firstQuery.current) return;
    api.getMovie(firstQuery.current).then(result => setMovies(result));
  }, []);

  const heandleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const heandlSubmit = e => {
    e.preventDefault();
    const nextParams = query !== '' ? { query } : {};

    setSearchParams(nextParams);
    api.getMovie(query).then(result => setMovies(result));
  };

  return (
    <Container>
      <form onSubmit={heandlSubmit}>
        <input type="text" value={query} onChange={heandleChange} />
        <button>Search</button>
      </form>

      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title ?? movie.name} (
                  {Number.parseInt(movie.release_date) || 'no date'})
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}

      {(movies ? !movies.length : false) && <p>Nothing found</p>}
    </Container>
  );
};
