import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as commentsAPI from '../../utilities/comments-api';
import CommentCard from '../../components/CommentCard/CommentCard';
import './JerseyDetailPage.css';

export default function JerseyDetailPage({ jerseys, setJerseys, user }) {
  const [jerseyDetail, setJerseyDetail] = useState(null);
  const [newComment, setNewComment] = useState({
    content: "",
  });
  
  const { jerseyId } = useParams();
  
  useEffect(() => {
    function getJersey() {
      const jersey = jerseys.find((j) => j._id === jerseyId);
      setJerseyDetail(jersey);
    }
    getJersey();
  }, [jerseyDetail])
  
  if (!jerseyDetail) return null;

  async function addComment(comment, jersey) {
    const allJerseys = await commentsAPI.createComment(comment, jersey);
    setJerseys(allJerseys);
    const detail = allJerseys.find((j) => j._id === jerseyId);
    setJerseyDetail(detail);
  }

  async function handleUpdateComment(commentFormData, id) {
    const allJerseys = await commentsAPI.updateComment(commentFormData, id);
    setJerseys(allJerseys);
    const detail = allJerseys.find((j) => j._id === jerseyId);
    setJerseyDetail(detail);
  }

  async function handleDeleteComment(id) {
    const allJerseys = await commentsAPI.deleteComment(id);
    setJerseys(allJerseys);
    const detail = allJerseys.find((j) => j._id === jerseyId);
    setJerseyDetail(detail);
  }
  
  function handleAddComment(evt) {
    evt.preventDefault();
    addComment(newComment, jerseyDetail);
    setNewComment({
      content: ""
    });
  }

  function getDate(item) {
    const date = new Date(item);
    return date.toDateString();
  }
  
  return(
    <>
      <div>
        <h1>{jerseyDetail.team}</h1>
        <p>Type: {jerseyDetail.league}</p>
        <p>Sprinkles: {jerseyDetail.year}</p>
        <div>
          <h6>Other Qualities:</h6>
          {jerseyDetail.description}
        </div>
        <h4>Rating: {jerseyDetail.rating}</h4>
        <div>
          <h5>Review:</h5>
          <p>{jerseyDetail.review}</p>
        </div>
        <p>Date Added: {getDate(jerseyDetail.createdAt)}</p>
      </div>
      <h2>Comments:</h2>
      <div>
        {jerseyDetail.comments.length === 0 ? (<h3>No Comments Yet</h3>) : jerseyDetail.comments.map((comment) => (
          <CommentCard jerseyDetail={jerseyDetail} comment={comment} key={comment._id} handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} user={user} />
        ))}
      </div>
      <h4>Comment on This Donut:</h4>
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