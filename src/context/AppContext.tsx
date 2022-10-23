import { createContext, useContext, useState } from 'react';

export const Context = createContext<AppState>({
  page: 'Home',
  setPage: () => {},
  setReactJS: () => {},
});

export function AppContext({ children }: Prop) {
  const setPage = (value: PageState) => setState((prevState) => ({ ...prevState, page: value }));
  const setReactJS = (value: QuestionsState) => setState((prevState) => ({ ...prevState, reactJS: value }));

  const [state, setState] = useState<AppState>({
    page: 'Home',
    setPage,
    setReactJS,
  });

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export function useAppContext() {
  return useContext(Context);
}

interface Prop {
  children: JSX.Element;
}

type PageState = 'Home' | 'InGame';

interface AppState {
  page: PageState;
  setPage: (value: PageState) => void;
  reactJS?: QuestionsState;
  setReactJS: (value: QuestionsState) => void;
}

export interface QuestionsState {
  [key: string]: {
    isDone: boolean;
  };
}
