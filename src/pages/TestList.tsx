import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { MOCK_TESTS } from '../constants/mockTests';
import { useNavigate } from 'react-router-dom';

const TestList = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto max-w-3xl py-8 px-2">
      <h1 className="text-3xl font-bold font-mono text-black mb-8 text-center">Available Tests</h1>
      <div className="flex flex-col gap-6">
        {MOCK_TESTS.map(test => (
          <Card key={test.id} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-gray-200">
            <div>
              <h2 className="text-xl font-semibold font-mono text-black mb-1">{test.name}</h2>
              <p className="text-black font-mono text-sm mb-2">{test.description}</p>
            </div>
            <Button onClick={() => navigate(`/questions/test/${test.id}`)} className="w-full md:w-auto">Start</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestList; 