import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from 'components/GlobalStyle';
import { FetchApi } from 'services/api';

const api = new FetchApi();

export const HomePage = ({ onClick }) => {
  const [trending, setTrending] = useState(null);
  const location = useLocation();

  useEffect(() => {
    api.getTrending().then(result => setTrending(result));
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      <ul>
        {!!trending &&
          trending.map(el => {
            return (
              <li key={el.id}>
                <NavLink to={`/movies/${el.id}`} state={{ from: location }}>
                  {el.title ?? el.name}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </Container>
  );

  // return (
  //   <Container>
  //     <h1>Trending today</h1>
  //     <ul>
  //       {!!data &&
  //         data.map(el => {
  //           return (
  //             <li key={el.id}>
  //               <button type="button" onClick={() => onClick(el.id)}>
  //                 {el.title ?? el.name}
  //               </button>
  //             </li>
  //           );
  //         })}
  //     </ul>
  //   </Container>
  // );
};
