import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchApi } from 'services/api';
import { Container } from 'components/GlobalStyle';
import { FilmListItem } from 'pages/Home/Home.styled';
import { Loader } from 'components/Loader/Loader';

const api = new FetchApi();

const Home = () => {
  const [trending, setTrending] = useState(null);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    api
      .getTrending(abortController)
      .then(result => setTrending(result))
      .then(() => setIsLoading(false))
      .catch(error => {
        if (error.code === 'ERR_CANCELED') return;
        console.error(error);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>

      {isLoading && <Loader />}

      <ul>
        {!!trending &&
          trending.map(el => {
            return (
              <FilmListItem key={el.id}>
                <NavLink to={`/movies/${el.id}`} state={{ from: location }}>
                  {el.title ?? el.name}
                </NavLink>
              </FilmListItem>
            );
          })}
      </ul>
    </Container>
  );
};

export default Home;
