import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as jerseysAPI from '../../utilities/jerseys-api';

export default function UpdateJerseyPage({ jerseys, setJerseys, }) {
  const navigate = useNavigate();
  const { jerseyId } = useParams();
  const changedJersey = jerseys.find((j) => j._id === jerseyId);
  const [jerseyFormData, setJerseyFormData] = useState(changedJersey);
  if (!changedJersey) return null;

  async function handleUpdateJersey(jerseyFormData, jerseyId) {
    await jerseysAPI.updateJersey(jerseyFormData, jerseyId);
    const updatedJerseys = await jerseysAPI.index();
    setJerseys(updatedJerseys);
    navigate(`/jerseys/${jerseyId}`);
  }

  function handleChange(evt) {
    const updateJersey = {...jerseyFormData, [evt.target.name]: evt.target.value};
    setJerseyFormData(updateJersey);
  }

  function handleSubmitEdits(evt) {
    evt.preventDefault();
    handleUpdateJersey(jerseyFormData, jerseyId);
  }

  return(
    <>
       <h1>Add a New Jersey</h1>
        <form onSubmit={handleSubmitEdits}>
          <label htmlFor="input">Team:</label>
          <input
            name="Team"
            type="text"
            value={jerseyFormData.team}
            onChange={handleChange}
            placeholder=""
            required
          />
  
          <label htmlFor="select">League:</label>
          <select
            name="type"
            value={jerseyFormData.name}
            onChange={handleChange}
            required
          >
            <option value="NBA">NBA</option>
            <option value="NFL">NFL</option>
            <option value="MLB">MLB</option>
            <option value="NHL">NHL</option>
            <option value="MLS">MLS</option>
            <option value="INTERNATIONAL">INTERNATIONAL</option>
          </select>
  
          <label htmlFor="textarea">Year/Era:</label>
          <textarea
            name="unique"
            value={jerseyFormData.name}
            onChange={handleChange}
            placeholder="What year/era was this jersey used in?"
          />
  
          <label htmlFor="textarea">Description:</label>
          <textarea
            name="Description"
            value={jerseyFormData.name}
            onChange={handleChange}
            placeholder="Small description"
            required
          />
  
        <button type="submit">Submit Edits</button>
      </form>
    </>
  );
}