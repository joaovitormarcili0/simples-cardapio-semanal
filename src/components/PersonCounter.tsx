
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
    <div className="flex items-center justify-center gap-4 p-4 bg-card rounded-xl shadow-sm border border-border">
      <Users className="h-5 w-5 text-accent-foreground" />
      <span className="text-card-foreground font-medium">Pessoas:</span>
      
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={handleDecrease}
          disabled={count <= 1}
          className="h-8 w-8 rounded-full border-accent hover:bg-accent/20 hover:border-accent disabled:opacity-50"
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="text-xl font-semibold text-primary min-w-[2rem] text-center">
          {count}
        </span>
        
        <Button
          variant="outline"
          size="icon"
          onClick={handleIncrease}
          disabled={count >= 10}
          className="h-8 w-8 rounded-full border-accent hover:bg-accent/20 hover:border-accent disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PersonCounter;
