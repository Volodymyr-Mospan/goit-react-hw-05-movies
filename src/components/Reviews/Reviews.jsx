import { FetchApi } from 'services/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api = new FetchApi();

export const Reviews = () => {
  const { movieId } = useParams();
  const [filmReviews, setFilmReviews] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .getMovieDetails(`movie/${movieId}/reviews`)
      .then(result => setFilmReviews(result))
      .catch(error => {
        console.error(error);
        navigate('/noFound', { replace: true });
      });
  }, [movieId, navigate]);

  return (
    <>
      {!!filmReviews?.total_results ? (
        <div>
          <ul>
            {filmReviews.results.map(review => (
              <li key={review.id}>
                {review.author}
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        "We don't have any reviews for this movie"
      )}
    </>
  );
};
