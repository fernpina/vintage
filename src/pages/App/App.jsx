import { useState, useEffect } from 'react';
import { Routes, useNavigate, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as jerseysAPI from '../../utilities/jerseys-api';
import AuthPage from '../AuthPage/AuthPage';
import JerseysListPage from '../JerseysListPage/JerseysListPage';
import NewJerseyPage from '../NewJerseyPage/NewJerseyPage';
import JerseyDetailPage from '../JerseyDetailPage/JerseyDetailPage';
import UpdateJerseyPage from '../UpdateJerseyPage/UpdateJerseyPage';
import UpdateCommentPage from '../UpdateCommentPage/UpdateCommentPage';
import UpdateReviewPage from '../UpdateReviewPage/UpdateReviewPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
// import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [jerseys, setJerseys] = useState([]);
  const navigate= useNavigate()
  useEffect(() => {
    async function fillJerseyCase() {
      const allJerseys = await jerseysAPI.index();
      setJerseys(allJerseys);
    }
    fillJerseyCase();
  }, []);

  async function addJersey(jersey) {
    const allJerseys = await jerseysAPI.create(jersey);
    setJerseys([...jerseys, allJerseys]);
    navigate('/jerseys')
  }

  async function myJerseys(id) {
    await jerseysAPI.index(id);
    const myJerseyBox = jerseys.filter(jersey => jersey.user === id);
    setJerseys(myJerseyBox);
  }

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/jerseys" element={<JerseysListPage jerseys={jerseys} setJerseys={setJerseys} user={user} />} />
            <Route path="/jerseys/new" element={<NewJerseyPage jerseys={jerseys} addJersey={addJersey} />} />
            <Route path="/jerseys/:jerseyId" element={<JerseyDetailPage jerseys={jerseys} setJerseys={setJerseys} user={user} />} />
            <Route path="/jerseys/:jerseyId/update" element={<UpdateJerseyPage jerseys={jerseys} setJerseys={setJerseys} />} />
            <Route path="/comments/:id/update" element={<UpdateCommentPage />} />
            <Route path="/reviews/:id/update" element={<UpdateReviewPage />} />
            <Route path="/profile" element={<ProfilePage user={user} jerseys={jerseys} myJerseys={myJerseys} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}