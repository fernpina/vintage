import { checkToken } from '../../utilities/users-service';
import JerseyCard from "../../components/JerseyCard/JerseyCard";
import './JerseysListPage.css';

export default function JerseysListPage({ jerseys, handleDeleteJersey, user }) {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <h1>Jerseys</h1>
      <div>
        {jerseys.map((d, idx) => {
          return <JerseyCard jersey={j} key={idx} handleDeleteJersey={handleDeleteJersey} />;
        })}
      </div>
      <button onClick={handleCheckToken}>My Login</button>
    </>
  );
}