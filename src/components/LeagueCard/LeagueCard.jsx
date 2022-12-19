import { Link } from 'react-router-dom';
import './LeagueCard.css';

export default function LeagueCard({ league, handleDeleteLeague }) {
  const date = new Date(league.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <Link to={`/leagues/${league.name}`}>
      <div>
        <h1>{league.name}</h1>
        <p>Location: {league.sport}</p>
        <p>Added by {league.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
        <button onClick={() => handleDeleteLeague(league._id)}>Delete League</button>
      </div>
    </Link>
  );
}