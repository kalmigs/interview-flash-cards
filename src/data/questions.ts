import qv1 from '../../data/359af1a719f83e7f341cfbeb039147153f1f3b38.json';
import { QuestionsState } from '../context/AppContext';

const ReactJS = {
  v1: {
    id: '359af1a719f83e7f341cfbeb039147153f1f3b38',
    value: qv1 as Questions,
    initState() {
      const obj: QuestionsState = {};
      Object.keys(qv1).forEach((key) => (obj[key] = { isDone: false }));
      return obj;
    },
  },
};

export const QUESTIONS = {
  ReactJS,
};

export interface Questions {
  [key: string]: {
    question: string;
    answer: string;
  };
}
