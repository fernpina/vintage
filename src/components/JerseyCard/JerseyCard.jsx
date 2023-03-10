import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PhotoCard from '../PhotoCard/PhotoCard';
import './JerseyCard.css';

export default function JerseyCard({ jersey, handleDeleteJersey, user }) {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();

//   useEffect(function() {
//     photosAPI.getAll().then(photos => setPhotos(photos));
//   }, []);

  function getDate(item) {
    const date = new Date(item);
    return date.toDateString();
  }
  
  return(
    <>
      <Link to={`/jerseys/${jersey._id}`}>

        <div>
          <h1>{jersey.team}</h1>
          <img src= {jersey.image}></img>
          <p>Type: {jersey.league}</p>
          <p>Available at {jersey.year}</p>
          <p>Added by {jersey.user} on {getDate(jersey.createdAt)}</p>
        </div>
      </Link>
        <div>
          {/* <button onClick={() => navigate(`/jerseys/${jersey._id}/update`)}>Edit</button> */}
          <button onClick={() => handleDeleteJersey(jersey._id)}>Delete</button>
        </div>
    </>
  );
}