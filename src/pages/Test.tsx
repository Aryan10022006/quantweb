import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import './TestCustom.css';
import { MOCK_TESTS } from '../constants/mockTests';

const Test = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const test = MOCK_TESTS.find(t => t.id === id);
  const questions = test?.questions || [];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'incorrect'>('none');

  useEffect(() => {
    if (showResult) return;
    if (timer === 0) {
      handleNext();
      return;
    }
    timerRef.current = setTimeout(() => setTimer((t) => t - 1), 1000);
    return () => clearTimeout(timerRef.current!);
  }, [timer, showResult]);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const isCorrect = questions[current].options[idx].isCorrect;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) setScore((s) => s + 1);
    setTimeout(() => {
      setFeedback('none');
      handleNext();
    }, isCorrect ? 1000 : 700);
  };

  const handleNext = () => {
    setSelected(null);
    setTimer(60);
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setShowResult(true);
    }
  };

  const progress = ((current) / questions.length) * 100;

  if (!test) {
    return (
      <div className="test-notfound">
        <div className="test-card">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Test Not Found</h2>
          <button onClick={() => navigate('/questions/tests')} className="test-option-btn" style={{background:'#ffa726',color:'#fff',borderColor:'#ffa726',marginTop:'1rem'}}>Back to Test List</button>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="test-complete">
        <div className="test-card">
          <h2 className="text-2xl font-bold mb-4 text-black">Test Complete!</h2>
          <p className="text-lg mb-2 text-black">Your Score: <span className="font-bold">{score} / {questions.length}</span></p>
          <button className="test-option-btn" style={{background:'#ffa726',color:'#fff',borderColor:'#ffa726',marginTop:'1rem'}} onClick={() => { setCurrent(0); setScore(0); setShowResult(false); setTimer(60); }}>Retake Test</button>
          <button className="test-option-btn" style={{borderColor:'#ffa726',color:'#ffa726',background:'#fff',marginTop:'1rem',marginLeft:'0.5rem'}} onClick={() => navigate('/questions/tests')}>Back to Test List</button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="test-container">
      <div className={`test-card${feedback === 'correct' ? ' ring-4 ring-green-600' : feedback === 'incorrect' ? ' ring-4 ring-red-600' : ''}`.trim()}>
        <div className="test-header">
          <span className="font-semibold">{test.name} — Question {current + 1} / {questions.length}</span>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',minWidth:70}}>
            <span className="test-timer">{timer}s</span>
            <div className="test-timer-bar" style={{ width: `${(timer/60)*100}%` }} />
          </div>
        </div>
        <div className="test-progress-bar">
          <div className="test-progress" style={{ width: `${progress}%` }} />
        </div>
        <div className="test-question">
          <div className="markdown-latex">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{q.question}</ReactMarkdown>
          </div>
        </div>
        <div className="test-options">
          {q.options.map((opt, idx) => {
            let btnClass = 'test-option-btn';
            if (selected !== null) {
              if (idx === selected) {
                btnClass += opt.isCorrect ? ' correct' : ' incorrect';
              } else if (opt.isCorrect) {
                btnClass += ' correct';
              } else {
                btnClass += '';
              }
            }
            return (
              <button key={idx} className={btnClass} disabled={selected !== null} onClick={() => handleSelect(idx)}>
                <div className="markdown-latex">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{opt.text}</ReactMarkdown>
                </div>
              </button>
            );
          })}
        </div>
        <div className="test-actions">
          <span className="test-score">Score: {score}</span>
          {selected !== null && (
            <span className={`test-feedback${q.options[selected].isCorrect ? ' correct' : ' incorrect'}`}>{q.options[selected].isCorrect ? 'Correct!' : 'Incorrect'}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test; 