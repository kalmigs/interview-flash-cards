import { useAppContext } from '../../context/AppContext';

function Home() {
  const { setPage } = useAppContext();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={() => setPage('InGame')}>START</button>
    </div>
  );
}

export default Home;
