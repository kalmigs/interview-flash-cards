import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import BackIcon from '../../assets/BackIcon';
import Button from '../../components/ui/Button';
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
    <div>
      <div style={{ height: '80px', width: '80px' }}>
        <div
          style={{ height: '80px', width: '80px', padding: '15px', cursor: 'pointer' }}
          onClick={() => setPage('Home')}
        >
          <BackIcon fill="#d4d4d4" />
        </div>
      </div>

      <div
        style={{
          maxWidth: '820px',
          padding: '0 10px',
          margin: '0 auto',
          height: 'calc(100vh - 160px)',
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
        onClick={() => setShowAnswer((s) => !s)}
      >
        <div>
          {key && (
            <ReactMarkdown
              children={questions[key.toString()].question + (showAnswer ? questions[key.toString()].answer : '')}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <div style={{ marginBottom: '16px' }}>
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={a11yDark as any}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    </div>
                  ) : (
                    <code
                      className={className}
                      {...props}
                      style={{ backgroundColor: 'rgba(99,110,123,0.4)', padding: '0.2em 0.4em', borderRadius: '6px' }}
                    >
                      {children}
                    </code>
                  );
                },
                h2: ({ node, ...props }) => (
                  <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h2 style={{ color: '#0ea5e9' }} {...props} />
                  </div>
                ),
                p: ({ node, ...props }) => <p style={{ marginBottom: '16px', lineHeight: '24px' }} {...props} />,
                li: ({ node, ...props }) => <li style={{ marginBottom: '4px', lineHeight: '24px' }} {...props} />,
                ol: ({ node, ...props }) => <ol style={{ marginBottom: '16px', marginLeft:'32px' }} {...props} />,
                a: ({ node, ...props }) => <a style={{ color: '#0ea5e9' }} {...props} />,
              }}
            />
          )}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
        <Button style={{ marginRight: '10px' }} variant="primary" onClick={() => setShowAnswer((s) => !s)}>
          {showAnswer ? 'Hide' : 'Show'}
        </Button>
        <Button style={{ marginRight: '10px' }} variant="primary" onClick={() => nextEntry(true)}>
          Done
        </Button>
        <Button variant="primary" onClick={() => nextEntry()}>
          Again
        </Button>
      </div>
    </div>
  );
}

export default InGame;
