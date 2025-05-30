import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import QuestionList from '../components/QuestionList';
import QuestionDetail from '../components/QuestionDetail';
import type { Question } from '../types';

const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selected, setSelected] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import('../constants/questions.json').then((mod) => {
      setQuestions(mod.default as Question[]);
      setLoading(false);
    });
  }, []);

  return (
    <PageTransition>
      <div className="container page-content py-4">
        <h1 className="text-center mb-4">Practice Questions</h1>
        {loading && <div className="text-center">Loading...</div>}
        {!loading && !selected && <QuestionList questions={questions} onSelect={setSelected} />}
        {!loading && selected && <QuestionDetail question={selected} onBack={() => setSelected(null)} />}
      </div>
    </PageTransition>
  );
};

export default Questions; 