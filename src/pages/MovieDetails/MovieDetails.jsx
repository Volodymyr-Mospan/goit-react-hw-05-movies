import { useEffect, useRef, useState, Suspense } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'components/GlobalStyle';
import {
  Section,
  FlexComponent,
  Link,
} from 'pages/MovieDetails/MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

import { FetchApi } from 'services/api';

const api = new FetchApi();

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  const navigate = useNavigate();
  const location = useRef(useLocation());
  const backLinkHref = location.current.state?.from ?? '/movies';

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchMovieDetails() {
      try {
        const result = await api.getMovieDetails(
          `movie/${movieId}`,
          abortController
        );
        setFilm(result);
      } catch (error) {
        if (error.code === 'ERR_CANCELED') return;
        console.error(error);
        navigate('/noFound', { replace: true });
      }
    }
    fetchMovieDetails();

    return () => {
      abortController.abort();
    };
  }, [movieId, navigate]);

  if (film) {
    return (
      <Container>
        <Section>
          <FlexComponent>
            <Link to={backLinkHref}>&larr; return</Link>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={`Poster of ${film.title ?? film.name}`}
              width="200"
            />
          </FlexComponent>

          <FlexComponent>
            <h2>
              {film.title ?? film.name}
              {!!film.release_date &&
                ` (${Number.parseInt(film.release_date)})`}
            </h2>
            <p>User Score: {Math.floor(film.vote_average * 10)}%</p>

            {!!film.overview && (
              <div>
                <h3>Overview</h3>
                <p>{film.overview}</p>
              </div>
            )}
            {!!film.genres.length && (
              <div>
                <h3>Genres</h3>
                {film.genres.map(genre => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
              </div>
            )}
          </FlexComponent>
        </Section>
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
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </Container>
    );
  }
};

export default MovieDetails;
