import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentCard from '../../components/CommentCard/CommentCard';
import './JerseyDetailPage.css';

export default function JerseyDetailPage({ jerseys, addComment }) {
  const [newComment, setNewComment] = useState({
    content: "",
  });
  
  const { jerseyTeam } = useParams();
  const jersey = jerseys.find((j) => j.team === jerseyTeam);

  const date = new Date(jersey.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};

  const jerseyComments = jersey.comments.map((comment, idx) => (
    <CommentCard comment={comment} key={idx} />
  ));
  
  function handleAddComment(evt) {
    evt.preventDefault();
    addComment(newComment, jersey);
    setNewComment({
      content: ""
    });
  }
  
  return(
    <>
      <div>
        <h1>{jersey.team}</h1>
        <p>Home: {jersey.league}</p>
        <h4>Rating: {jersey.rating}</h4>
        <div>
          <h5>Review:</h5>
          <p>{jersey.review}</p>
        </div>
        <p>Date Added: {date.toLocaleDateString(undefined, dateOptions)}</p>
      </div>
      <h2>Comments:</h2>
      <div>
        {jerseyComments}
      </div>
      <h4>Comments:</h4>
      <div>
        <form onSubmit={handleAddComment}>
          <textarea
            name="content"
            value={newComment.content}
            onChange={(evt) => setNewComment({ content: evt.target.value })}
            placeholder="Fire?"
            required
          />
          <button type="submit"></button>
        </form>
      </div>
    </>
  );
}