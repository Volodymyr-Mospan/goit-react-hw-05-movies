import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchApi } from 'services/api';
import { Container } from 'components/GlobalStyle';
import { FilmListItem } from 'pages/Home/Home.styled';
const api = new FetchApi();

export const Home = () => {
  const [trending, setTrending] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    api.getTrending(abortController).then(result => setTrending(result));
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
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
