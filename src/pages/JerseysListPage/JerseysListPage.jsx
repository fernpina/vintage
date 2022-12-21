import { useNavigate } from 'react-router-dom';
import * as jerseysAPI from '../../utilities/jerseys-api';
import JerseyCard from "../../components/JerseyCard/JerseyCard";
import './JerseysListPage.css';

export default function JerseysListPage({ jerseys, setJerseys, user }) {
  const navigate = useNavigate();
  
  async function handleUpdateJersey(jerseyFormData, jerseyId) {
    await jerseysAPI.updateJersey(jerseyFormData, jerseyId);
    const updatedJerseys = await jerseysAPI.index();
    setJerseys(updatedJerseys);
    navigate(`/jerseys/${jerseyId}`);
  }

  async function handleDeleteJersey(id) {
    await jerseysAPI.deleteJersey(id);
    const remainingJerseys = jerseys.filter(jersey => jersey._id !== id);
    setJerseys(remainingJerseys);
  }

  return (
    <>
      <h1>Jerseys</h1>
      <div>
        {jerseys.map((j, idx) => {
          return <JerseyCard jersey={j} key={idx} handleUpdateJersey={handleUpdateJersey} handleDeleteJersey={handleDeleteJersey} />;
        })}
      </div>
    </>
  );
}