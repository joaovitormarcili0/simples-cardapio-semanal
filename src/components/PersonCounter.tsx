import { Minus, Plus, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface PersonCounterProps {
  count: number;
  onChange: (count: number) => void;
}
const PersonCounter = ({
  count,
  onChange
}: PersonCounterProps) => {
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
  return <div className="person-counter">
      <Users className="h-5 w-5 text-primary" />
      <span className="text-foreground font-medium">Pessoas:</span>
      
      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon" onClick={handleDecrease} disabled={count <= 1} className="counter-button text-slate-50 bg-amber-900 hover:bg-amber-800">
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="text-xl font-semibold text-primary min-w-[2rem] text-center">
          {count}
        </span>
        
        <Button variant="outline" size="icon" onClick={handleIncrease} disabled={count >= 10} className="counter-button bg-amber-900 hover:bg-amber-800 text-slate-50">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>;
};
export default PersonCounter;