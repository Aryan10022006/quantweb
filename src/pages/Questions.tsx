import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import QuestionList from '../components/QuestionList';
import QuestionDetail from '../components/QuestionDetail';
import type { Question } from '../types';

const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selected, setSelected] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    import('../constants/questions.json').then((mod) => {
      setQuestions(mod.default as Question[]);
      setLoading(false);
    });
  }, []);

  // Get unique categories
  const categories = Array.from(new Set(questions.map(q => q.category)));

  // Filter logic
  const filtered = questions.filter(q => {
    const matchesSearch = q.title.toLowerCase().includes(search.toLowerCase()) || q.question.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || q.category === category;
    const matchesDifficulty = difficulty === 'All' || q.difficulty === Number(difficulty);
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <PageTransition>
      <div className="container mx-auto max-w-4xl py-6 px-2" style={{paddingTop: '80px'}}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold font-mono text-gray-900">Practice Questions</h1>
          <button
            className="bg-black hover:bg-gray-900 text-white font-mono font-semibold px-6 py-2 rounded-xl shadow-md transition-all text-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            onClick={() => navigate('/questions/tests')}
          >
            Practice Tests
          </button>
        </div>
        {/* Search and filter controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4 items-center">
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="All">All Categories</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <select
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="All">All Difficulties</option>
            {[1,2,3,4,5].map(d => <option key={d} value={d}>{d} Star{d > 1 ? 's' : ''}</option>)}
          </select>
        </div>
        {loading && <div className="text-center text-gray-500 py-8">Loading...</div>}
        {!loading && !selected && <QuestionList questions={filtered} onSelect={setSelected} />}
        {!loading && selected && (
          <div style={{paddingTop: '80px'}}>
            <QuestionDetail question={selected} onBack={() => setSelected(null)} />
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Questions; 