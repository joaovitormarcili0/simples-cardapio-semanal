
import { Minus, Plus, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PersonCounterProps {
  count: number;
  onChange: (count: number) => void;
}

const PersonCounter = ({ count, onChange }: PersonCounterProps) => {
  const handleDecrease = () => {
    if (count > 1) {
      onChange(count - 1);
    }
  };

  const handleIncrease = () => {
    if (count < 10) {
      onChange(count + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
      <Users className="h-5 w-5 text-lilac-600 dark:text-lilac-400" />
      <span className="text-gray-700 dark:text-gray-300 font-medium">Pessoas:</span>
      
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={handleDecrease}
          disabled={count <= 1}
          className="h-8 w-8 rounded-full border-lilac-300 hover:bg-lilac-50 hover:border-lilac-400 disabled:opacity-50"
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="text-xl font-semibold text-lilac-800 dark:text-lilac-300 min-w-[2rem] text-center">
          {count}
        </span>
        
        <Button
          variant="outline"
          size="icon"
          onClick={handleIncrease}
          disabled={count >= 10}
          className="h-8 w-8 rounded-full border-lilac-300 hover:bg-lilac-50 hover:border-lilac-400 disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PersonCounter;
