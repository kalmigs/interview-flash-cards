import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useAppContext } from '../../context/AppContext';
import { QUESTIONS } from '../../data/questions';
import { ls } from '../../utils/storage/storage';

function InGame() {
  const { setPage, reactJS, setReactJS } = useAppContext();
  const questions = QUESTIONS.ReactJS.v1.value;

  const [key, setKey] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  useEffect(() => {
    nextEntry();
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key]);

  const getRandomKey = () => {
    const list = Object.entries(reactJS ?? {}).filter(([, value]) => !value.isDone);
    const index = Math.floor(Math.random() * list.length);

    return list[index][0];
  };

  function nextEntry(done = false) {
    if (done && key) {
      const obj = { ...reactJS };
      obj[key] = { isDone: true };
      setReactJS(obj);
      ls.set('ReactJS', obj);
    }

    const k = getRandomKey();

    setKey(k);
    setShowAnswer(false);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === ' ') {
      setShowAnswer((s) => !s);
    } else if (e.key === 'ArrowRight') {
      nextEntry();
    } else if (e.key === 'Enter') {
      nextEntry(true);
    }
  }

  return (
    <div style={{ height: '100vh' }}>
      <div style={{ maxWidth: '800px', padding: '50px', margin: '0 auto' }}>
        <div style={{ height: 'calc(100vh - 150px)' }} onClick={() => setShowAnswer((s) => !s)}>
          {key && (
            <ReactMarkdown>
              {questions[key.toString()].question + (showAnswer ? questions[key.toString()].answer : '')}
            </ReactMarkdown>
          )}
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
          <button onClick={() => setPage('Home')}>Go Back</button>
          <button style={{ width: '100px' }} onClick={() => setShowAnswer((s) => !s)}>
            {showAnswer ? 'Hide' : 'Show'} Answer
          </button>
          <button onClick={() => nextEntry(true)}>Done</button>
          <button onClick={() => nextEntry()}>Again</button>
        </div>
      </div>
    </div>
  );
}

export default InGame;
