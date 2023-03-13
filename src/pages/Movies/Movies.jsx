import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { FetchApi } from 'services/api';
import { Container } from 'components/GlobalStyle';
import { FilmListItem } from 'pages/Movies/Movies.styled';
import { Loader } from 'components/Loader/Loader';

const api = new FetchApi();

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const qeury = searchParams.get('query');
    const abortController = new AbortController();
    if (!qeury) return;

    setQuery(qeury);
    setIsLoading(true);
    api
      .getMovie(qeury, abortController)
      .then(result => setMovies(result))
      .then(() => setIsLoading(false));

    return () => {
      abortController.abort();
    };
  }, [searchParams]);

  const heandleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const heandlSubmit = e => {
    e.preventDefault();
    const nextParams = query !== '' ? { query } : {};

    setSearchParams(nextParams);
  };

  return (
    <Container>
      <form onSubmit={heandlSubmit}>
        <input type="text" value={query} onChange={heandleChange} />
        <button>Search</button>
      </form>

      {isLoading && <Loader />}

      {!isLoading && movies && (
        <ul>
          {movies.map(movie => {
            return (
              <FilmListItem key={movie.id}>
                <NavLink to={`${movie.id}`} state={{ from: location }}>
                  {movie.title ?? movie.name} (
                  {Number.parseInt(movie.release_date) || 'no date'})
                </NavLink>
              </FilmListItem>
            );
          })}
        </ul>
      )}

      {!isLoading && (movies ? !movies.length : false) && <p>Nothing found</p>}
    </Container>
  );
};

export default Movies;
