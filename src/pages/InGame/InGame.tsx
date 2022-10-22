import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useAppContext } from '../../context/AppContext';
import { QUESTIONS } from '../../data/questions';

function InGame() {
  const { setPage } = useAppContext();
  const questions = QUESTIONS.v1.value;

  const [index, setIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const getRandomIndex = () => {
    return Math.floor(Math.random() * questions.length);
  };

  function nextEntry(done = false) {
    setIndex(getRandomIndex());
    setShowAnswer(false);

    if (done) {
      console.log('handle done');
    }
  }

  function closeModal(e: KeyboardEvent) {
    console.log(e);
    if (e.key === ' ') {
      setShowAnswer((s) => !s);
    } else if (e.key === 'Enter' || e.key === 'ArrowRight') {
      nextEntry(true);
    }
  }

  useEffect(() => {
    nextEntry();
    document.addEventListener('keydown', closeModal);

    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <div style={{ maxWidth: '800px', padding: '50px', margin: '0 auto' }}>
        <div style={{ height: 'calc(100vh - 150px)' }} onClick={() => setShowAnswer((s) => !s)}>
          <ReactMarkdown>{questions[index].question + (showAnswer ? questions[index].answer : '')}</ReactMarkdown>
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
