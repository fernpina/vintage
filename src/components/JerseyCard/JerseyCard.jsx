import { Link, useNavigate } from 'react-router-dom';
import './JerseyCard.css';

export default function JerseyCard({ jersey, handleDeleteJersey, dateOptions, date }) {
    const navigate = useNavigate();
  
    function getDate(item) {
      const date = new Date(item);
      return date.toDateString();
    }
 
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