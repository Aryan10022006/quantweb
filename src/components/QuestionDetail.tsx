import type { FC } from 'react';
import { useState } from 'react';
import type { Question } from '../types';
import Button from './shared/Button';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface QuestionDetailProps {
  question: Question;
  onBack: () => void;
}

const DARK_STAR = '#222';
const LIGHT_STAR = '#bbb';

const markdownStyle = {
  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
  lineHeight: 1.7,
  wordBreak: 'break-word' as const,
  overflowWrap: 'break-word' as const,
  whiteSpace: 'pre-line' as const,
  padding: '0.5rem 1rem',
  background: '#f8f9fa',
  borderRadius: '8px',
  margin: '0 auto',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box' as const,
  textAlign: 'left' as const,
};

const QuestionDetail: FC<QuestionDetailProps> = ({ question, onBack }) => {
  const [show, setShow] = useState<'none' | 'hint' | 'answer'>('none');

  const renderStars = (difficulty: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} style={{ color: i < difficulty ? DARK_STAR : LIGHT_STAR, fontSize: '1.1rem', marginRight: 2 }}>
        {i < difficulty ? <FaStar /> : <FaRegStar />}
      </span>
    ));
  };

  return (
    <div className="card shadow-lg p-4" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Button 
          variant="ghost" 
          onClick={onBack} 
          className="btn-sm"
          style={{ fontSize: '0.9rem' }}
        >
          &larr; Back
        </Button>
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-primary">{question.category}</span>
          <div className="d-flex align-items-center">
            {renderStars(question.difficulty)}
          </div>
        </div>
      </div>

      <h4 className="mb-4" style={{ fontWeight: 600 }}>{question.title}</h4>
      <div className="mb-4 w-100" style={markdownStyle}>
        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{question.question}</ReactMarkdown>
      </div>

      <div className="d-flex gap-3 mb-4 flex-wrap">
        <Button 
          variant={show === 'hint' ? 'primary' : 'secondary'}
          onClick={() => setShow(show === 'hint' ? 'none' : 'hint')}
          className="px-4"
        >
          {show === 'hint' ? 'Hide Hint' : 'Show Hint'}
        </Button>
        <Button 
          variant={show === 'answer' ? 'primary' : 'secondary'}
          onClick={() => setShow(show === 'answer' ? 'none' : 'answer')}
          className="px-4"
        >
          {show === 'answer' ? 'Hide Answer' : 'Show Answer'}
        </Button>
      </div>

      <AnimatePresence>
        {show === 'hint' && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="alert mb-3"
            style={{ background: '#e3f0ff', border: '1px solid #b6d4fe', color: '#084298', fontSize: '1.1rem', padding: '1rem', wordBreak: 'break-word', whiteSpace: 'pre-line', lineHeight: 1.7 }}
          >
            <strong>Hint:</strong> <div style={markdownStyle}><ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{question.hint}</ReactMarkdown></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show === 'answer' && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="alert mb-3"
            style={{ background: '#d1f7d6', border: '1px solid #a3e4b0', color: '#14532d', fontSize: '1.1rem', padding: '1rem', wordBreak: 'break-word', whiteSpace: 'pre-line', lineHeight: 1.7 }}
          >
            <strong>Answer:</strong> <div style={markdownStyle}><ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{question.answer}</ReactMarkdown></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionDetail; 