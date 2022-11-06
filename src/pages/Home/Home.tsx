import Button from '../../components/ui/Button';
import { useAppContext } from '../../context/AppContext';
import { QUESTIONS } from '../../data/questions';
import { ls } from '../../utils/storage/storage';

function Home() {
  const { setPage, reactJS, setReactJS } = useAppContext();

  function getReactJSScore() {
    const total = Object.keys(reactJS ?? {}).length;
    const score = Object.values(reactJS ?? {}).reduce((total, val) => {
      if (val.isDone) return total + 1;
      return total;
    }, 0);

    return `${score}/${total}`;
  }

  function handleReset() {
    ls.clear();

    const init = QUESTIONS.ReactJS.v1.initState();
    ls.set('ReactJS', init);
    setReactJS(init);

    // TODO js
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Button onClick={() => setPage('InGame')} variant="primary">START</Button>
        <Button onClick={handleReset} variant="secondary">
          RESET
        </Button>
        <div>ReactJS: {getReactJSScore()}</div>
      </div>
    </div>
  );
}

export default Home;
