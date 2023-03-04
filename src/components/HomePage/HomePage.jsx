import { Container } from 'components/GlobalStyle';
import { FetchApi } from 'services/api';
import { useEffect, useState } from 'react';

const api = new FetchApi();

export const HomePage = ({ onClick }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.getTrending().then(result => setData(result));
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      <ul>
        {!!data &&
          data.map(el => {
            return (
              <li key={el.id}>
                <button type="button" onClick={() => onClick(el.id)}>
                  {el.title ?? el.name}
                </button>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};
