import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/jerseys">Jerseys</Link>
      &nbsp; &nbsp;
      <Link to="/jerseys/new">Add a Jersey</Link>
      &nbsp; | &nbsp;
      <Link to="/leagues">Leagues</Link>
      &nbsp; 🏬 &nbsp;
      <Link to="/leagues/new">Add League</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="/profile">Collections</Link>
      &nbsp; &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}