import LeagueCard from '../../components/LeagueCard/LeagueCard';
import './LeaguesListPage.css';

export default function LeaguesListPage({ leagues, handleDeleteLeague }) {
  return(
    <>
      <h1>Explore Leagues</h1>
      <div>
        {leagues.map((l, idx) => {
          return <LeagueCard league={l} key={idx} handleDeleteLeague={handleDeleteLeague} />;
        })}
      </div>
    </>
  );
}