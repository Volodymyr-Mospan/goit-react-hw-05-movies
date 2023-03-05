import { FetchApi } from 'services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api = new FetchApi();

export const Reviews = () => {
  const { movieId } = useParams();
  const [filmReviews, setFilmReviews] = useState(null);

  useEffect(() => {
    api.getMovieReviews(movieId).then(result => setFilmReviews(result));
  }, [movieId]);

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
