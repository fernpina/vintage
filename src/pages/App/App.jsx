import { useState, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as jerseysAPI from '../../utilities/jerseys-api';
import * as leaguesAPI from '../../utilities/leagues-api';
import AuthPage from '../AuthPage/AuthPage';
import JerseysListPage from '../JerseysListPage/JerseysListPage';
import JerseyDetailPage from '../JerseyDetailPage/JerseyDetailPage';
import NewJerseyPage from '../NewJerseyPage/NewJerseyPage';
// import LeaguesListPage from '../LeaguesListPage/LeaguesListPage';
// import LeagueDetailPage from '../LeagueDetailPage/LeagueDetailPage';
// import NewLeaguePage from '../NewLeaguePage/NewLeaguePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
// import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [jerseys, setJerseys] = useState([]);
  // const [leagues, setLeagues] = useState([]);
  const [comments, setComments] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fillJerseyCase() {
      const jerseys = await jerseysAPI.index();
      setJerseys(jerseys);
    }
    fillJerseyCase();
  }, []);

  // useEffect(() => {
  //   async function openLeagues() {
  //     const league = await leaguesAPI.index();
  //     setLeagues(leagues);
  //   }
  //   openLeagues();
  // }, []);
  
  async function addJersey(jersey) {
    const newJersey = await jerseysAPI.create(jersey);
    setJerseys([...jerseys, newJersey]);
  }

  async function handleDeleteJersey(id) {
    await jerseysAPI.deleteJersey(id);
    const remainingJerseys = jerseys.filter(jersey => jersey._id !== id);
    setJerseys(remainingJerseys);
  }
  
  async function addComment(comment, jersey) {
    const newComment = await jerseysAPI.createComment(comment, jersey);
    setComments([...comments, newComment]);
  }
  
  // async function addLeague(league) {
  //   const newLeague = await leaguesAPI.create(league);
  //   setLeagues([...leagues, newLeague]);
  // }
  
  // async function handleDeleteLeague(id) {
  //   await leaguesAPI.deleteLeague(id);
  //   const remainingLeagues = leagues.filter(league => league._id !== id);
  //   setLeagues(remainingLeagues);
  // }

  async function addReview(review, league) {
    const newReview = await leaguesAPI.createReview(review, league);
    setReviews([...reviews, newReview]);
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/jerseys" element={<JerseysListPage jerseys={jerseys} handleDeleteJersey={handleDeleteJersey} />} />
            <Route path="/jerseys/:jerseyTeam" element={<JerseyDetailPage jerseys={jerseys} comments={comments} addComment={addComment} />} />
            <Route path="/jerseys/new" element={<NewJerseyPage jerseys={jerseys} addJersey={addJersey} />} />
            {/* <Route path="/leagues" element={<LeaguesListPage leagues={leagues} handleDeleteLeague={handleDeleteLeague} />} />
            <Route path="/leagues/:leagueName" element={<LeagueDetailPage leagues={leagues} reveiws={reviews} addReview={addReview} />} />
            <Route path="/leagues/new" element={<NewLeaguePage leagues={leagues} addLeague={addLeague} />} /> */}
            <Route path="/profile" element={<ProfilePage user={user} setUser={setUser}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}