import { Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { GlobalStyle } from 'components/GlobalStyle';
import { HomePage } from 'pages/HomePage/HomePage';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

// import { useState } from 'react';

export const App = () => {
  // const [query, setQuery] = useState('');

  // const [path, setPath] = useState('/');
  // console.log(path);

  // const navigate = id => setPath(`movie/${id}`);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>

      {/* <Movies /> */}
      {/* <HomePage onClick={navigate} /> */}

      {/* {path !== '/' && <MovieDetails movieId={path} />} */}

      <GlobalStyle />
    </div>
  );
};
