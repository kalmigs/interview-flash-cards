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
    let reactJS: QuestionsState | null = ls.get('ReactJS');
    let javaScript: QuestionsState | null = ls.get('JavaScript');

    if (reactJS == null) {
      const obj: QuestionsState = {};
      Object.keys(QUESTIONS.ReactJS.v1.value).forEach((key) => (obj[key] = { isDone: false }));
      ls.set('ReactJS', obj);
      setReactJS(obj);
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
