import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'pages/SharedLayout/SharedLayout';
import { GlobalStyle } from 'components/GlobalStyle';
// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';
// import { Home } from 'pages/Home/Home';
// import { Movies } from 'pages/Movies/Movies';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { NotFound } from 'pages/NotFound/NotFound';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="goit-react-hw-05-movies/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </>
  );
};
