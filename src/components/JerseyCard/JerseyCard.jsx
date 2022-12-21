import { Link, useNavigate } from 'react-router-dom';
import './JerseyCard.css';

export default function JerseyCard({ jersey, handleDeleteJersey, user }) {
  const navigate = useNavigate();
  const date = new Date(jersey.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <>
      <Link to={`/jerseys/${jersey._id}`}>
        <div>
          <h1>{jersey.team}</h1>
          <p>Type: {jersey.league}</p>
          <p>Available at {jersey.description}</p>
          <p>Added by {jersey.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
        </div>
      </Link>
        <div>
          <button onClick={() => navigate(`/jerseys/${jersey._id}/update`)}>Edit Post</button>
          <button onClick={() => handleDeleteJersey(jersey._id)}>Delete Donut</button>
        </div>
    </>
  );
}