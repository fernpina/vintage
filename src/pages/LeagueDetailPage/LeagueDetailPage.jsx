import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './LeagueDetailPage.css';

export default function LeagueDetailPage({ leagues, addReview }) {
  const [newReview, setNewReview] = useState({
    content: "",
    rating: 4
  });
  
  const { leagueName } = useParams();
  const league = leagues.find((l) => l.name === leagueName);

  const date = new Date(league.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};

  const leagueReviews = league.reviews.map((review, idx) => (
    <ReviewCard review={review} key={idx} />
  ));
  
  function handleAddReview(evt) {
    evt.preventDefault();
    addReview(newReview, league);
    setNewReview({
      content: "",
      rating: 4
    });
  }
  
  return(
    <>
      <h1>{league.name} Details</h1>
      <div>
        <h4>{league.sport}</h4>
        <h6>Date Added: {date.toLocaleDateString(undefined, dateOptions)}</h6>
      </div>
      <h2>Reviews:</h2>
      <div>
        {leagueReviews}
      </div>
      <h4>League:</h4>
      <div>
        <form onSubmit={handleAddReview}>
          <textarea
            name="content"
            value={newReview.content}
            onChange={(evt) => setNewReview({ ...newReview, [evt.target.name]: evt.target.value })}
            placeholder="Best Jerseys?"
            required
          />

          <label htmlFor="select">Rating:</label>
          <select
            name="rating"
            value={newReview.rating}
            onChange={(evt) => setNewReview({ ...newReview, [evt.target.name]: evt.target.value })}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button type="submit">Post Review</button>
        </form>
      </div>
    </>
  );
}