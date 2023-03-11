import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'pages/SharedLayout/SharedLayout';
import { GlobalStyle } from 'components/GlobalStyle';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="goit-react-hw-05-movies" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
