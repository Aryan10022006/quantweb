import type { FC } from 'react';
import type { Question } from '../types';
import { FaStar, FaRegStar, FaChevronRight } from 'react-icons/fa';
import './QuestionList.css';

interface QuestionListProps {
  questions: Question[];
  onSelect: (q: Question) => void;
}

const DARK_STAR = '#222';
const LIGHT_STAR = '#bbb';

const QuestionList: FC<QuestionListProps> = ({ questions, onSelect }) => {
  const renderStars = (difficulty: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} style={{ color: i < difficulty ? DARK_STAR : LIGHT_STAR, fontSize: '1.1rem', marginRight: 2 }}>
        {i < difficulty ? <FaStar /> : <FaRegStar />}
      </span>
    ));
  };

  return (
    <div className="table-responsive question-list-responsive">
      <table className="table align-middle table-hover bg-white rounded shadow-sm">
        <thead className="table-light">
          <tr>
            <th style={{ minWidth: 180 }}>Name</th>
            <th style={{ minWidth: 120 }}>Category</th>
            <th style={{ minWidth: 120 }}>Difficulty</th>
            <th style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {questions.length === 0 && (
            <tr><td colSpan={4} className="text-center">No questions available.</td></tr>
          )}
          {questions.map(q => (
            <tr
              key={q.id}
              style={{ cursor: 'pointer' }}
              onClick={() => onSelect(q)}
              className="align-middle question-row"
            >
              <td style={{ fontWeight: 500 }}>
                {/* Optional lock icon: <FaLock className="me-2 text-danger" /> */}
                {q.title}
                {/* Optional New badge: {q.isNew && <span className="badge bg-success ms-2">New</span>} */}
              </td>
              <td>{q.category}</td>
              <td>{renderStars(q.difficulty)}</td>
              <td><FaChevronRight style={{ color: '#bbb', fontSize: '1.1rem' }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionList; 