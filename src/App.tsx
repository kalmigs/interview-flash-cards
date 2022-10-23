import { useEffect } from 'react';
import './App.css';
import { AppContext, QuestionsState, useAppContext } from './context/AppContext';
import { QUESTIONS } from './data/questions';
import Home from './pages/Home/Home';
import InGame from './pages/InGame/InGame';
import { ls } from './utils/storage/storage';

function App() {
  return (
    <AppContext>
      <Wrapper />
    </AppContext>
  );
}

function Wrapper() {
  const { page, setReactJS } = useAppContext();

  useEffect(() => {
    let reactJS = ls.get<QuestionsState>('ReactJS');
    let javaScript = ls.get<QuestionsState>('JavaScript');

    if (reactJS == null) {
      const init = QUESTIONS.ReactJS.v1.initState();
      ls.set('ReactJS', init);
      setReactJS(init);
    } else {
      setReactJS(reactJS);
    }
    if (javaScript == null) {
      // TODO
    }
  }, []);

  if (page === 'InGame') return <InGame />;
  return <Home />;
}

export default App;
