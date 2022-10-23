import { useAppContext } from '../../context/AppContext';

function Home() {
  const { setPage, reactJS } = useAppContext();

  function getReactJSScore() {
    const total = Object.keys(reactJS ?? {}).length;
    const score = Object.values(reactJS ?? {}).reduce((total, val) => {
      if (val.isDone) return total + 1;
      return total;
    }, 0);

    return `${score}/${total}`;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <button onClick={() => setPage('InGame')}>START</button>
        <div>ReactJS: {getReactJSScore()}</div>
      </div>
    </div>
  );
}

export default Home;
