import { Link } from 'react-router-dom';
import './JerseyCard.css';

export default function JerseyCard({ jersey, handleDeleteJersey, user }) {
  const date = new Date(jersey.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <Link to={`/jerseys/${jersey.team}`}>
      <div>
        <h1>{jersey.team}</h1>
        <p>Available at {jersey.league}</p>
        <p>Added by {jersey.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
        <button onClick={() => handleDeleteJersey(jersey._id)}>Delete Jersey</button>
      </div>
    </Link>
  );
}