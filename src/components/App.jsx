import { Header } from 'components/Header/Header';
import { GlobalStyle } from 'components/GlobalStyle';
import { HomePage } from 'components/HomePage/HomePage';
import { Movies } from 'components/Movies/Movies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

import { useState } from 'react';

export const App = () => {
  // const [query, setQuery] = useState('');

  const [path, setPath] = useState('/');
  // console.log(path);

  const navigate = id => setPath(`movie/${id}`);

  return (
    <div>
      <Header />
      <Movies />
      <HomePage onClick={navigate} />

      {path !== '/' && <MovieDetails movieId={path} />}

      <GlobalStyle />
    </div>
  );
};
