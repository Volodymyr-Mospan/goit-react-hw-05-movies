import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { Container } from 'components/GlobalStyle';
import { FetchApi } from 'services/api';

const api = new FetchApi();

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    api.getMovieDetails(movieId).then(result => setFilm(result));
  }, [movieId]);

  if (film) {
    return (
      <Container>
        <section>
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={`Poster of ${film.title ?? film.name}`}
            width="200"
          />

          <h2>
            {film.title ?? film.name} (
            {Number.parseInt(film.release_date) || 'no date'})
          </h2>
          <p>User Score: {Math.floor(film.vote_average * 10)}%</p>

          {!!film.overview && (
            <div>
              <h3>Overview</h3>
              <p>{film.overview}</p>
            </div>
          )}
          {film.genres.length && (
            <div>
              <h3>Genres</h3>
              {film.genres.map(genre => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </div>
          )}
        </section>
        <section>
          <h2>Additional infotmation</h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </section>
        <section>
          <Outlet></Outlet>
        </section>
      </Container>
    );
  }
};
