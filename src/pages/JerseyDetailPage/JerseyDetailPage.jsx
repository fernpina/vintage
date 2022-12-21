import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentCard from '../../components/CommentCard/CommentCard';
import './JerseyDetailPage.css';

export default function JerseyDetailPage({ jerseys, addComment, handleUpdateComment, handleDeleteComment }) {
  const [newComment, setNewComment] = useState({
    content: "",
  });
  
  const { jerseyId } = useParams();
  const jersey = jerseys.find((j) => j.team === jerseyId);

  const date = new Date(jersey.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};

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
        <p>Type: {jersey.league}</p>
        <p>Sprinkles: {jersey.year}</p>
        <div>
          <h6>Other Qualities:</h6>
          {jersey.description}
        </div>
        <h4>Rating: {jersey.rating}</h4>
        <div>
        </div>
        <p>Date Added: {date.toLocaleDateString(undefined, dateOptions)}</p>
      </div>
      <h2>Comments:</h2>
      <div>
        {jersey.comments.length === 0 ? (<h3>No Comments Yet</h3>) : jersey.comments.map((comment, idx) => (
          <CommentCard jerseys={jerseys} comment={comment} key={idx} handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} />
        ))}
      </div>
      <h4>Comments on this jersey:</h4>
      <div>
        <form onSubmit={handleAddComment}>
          <textarea
            name="content"
            value={newComment.content}
            onChange={(evt) => setNewComment({ content: evt.target.value })}
            placeholder="What are your thoughts?"
            required
          />
          <button type="submit">Enrich Dialogue</button>
        </form>
      </div>
    </>
  );
}