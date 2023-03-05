import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'components/GlobalStyle';
import { FetchApi } from 'services/api';

const api = new FetchApi();

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const heandleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const heandlSubmit = e => {
    e.preventDefault();
    api.getMovie(query).then(result => setMovies(result));
  };

  return (
    <Container>
      <form onSubmit={heandlSubmit}>
        <input type="text" value={query} onChange={heandleChange} />
        <button>Search</button>
      </form>

      {movies !== [] && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>
                  {movie.title ?? movie.name} (
                  {Number.parseInt(movie.release_date) || 'no date'})
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
};
