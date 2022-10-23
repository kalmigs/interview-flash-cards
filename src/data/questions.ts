import qv1 from '../../data/359af1a719f83e7f341cfbeb039147153f1f3b38.json';

const ReactJS = {
  v1: {
    id: '359af1a719f83e7f341cfbeb039147153f1f3b38',
    value: qv1 as Questions,
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
