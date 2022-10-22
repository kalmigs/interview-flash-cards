import './App.css';
import { AppContext, useAppContext } from './context/AppContext';
import Home from './pages/Home/Home';
import InGame from './pages/InGame/InGame';

function App() {
  return (
    <AppContext>
      <Wrapper />
    </AppContext>
  );
}

function Wrapper() {
  const { page } = useAppContext();

  if (page === 'InGame') return <InGame />;
  return <Home />;
}

export default App;
