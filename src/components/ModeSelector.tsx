import { Clock, Calendar } from 'lucide-react';
interface ModeSelectorProps {
  selectedMode: 'now' | 'weekly' | null;
  onModeSelect: (mode: 'now' | 'weekly') => void;
}
const ModeSelector = ({
  selectedMode,
  onModeSelect
}: ModeSelectorProps) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
      <button onClick={() => onModeSelect('now')} className={`btn-mode ${selectedMode === 'now' ? 'selected' : ''} flex flex-col items-center gap-4`}>
        <Clock className="h-12 w-12 bg-transparent" />
        <div className="text-center">
          <h3 className="text-xl font-bold font-lato mb-2">Para Agora</h3>
          <p className="text-sm opacity-80">
            Sugestão instantânea de um prato completo com receita e lista de compras
          </p>
        </div>
      </button>

      <button onClick={() => onModeSelect('weekly')} className={`btn-mode ${selectedMode === 'weekly' ? 'selected' : ''} flex flex-col items-center gap-4`}>
        <Calendar className="h-12 w-12" />
        <div className="text-center">
          <h3 className="text-xl font-bold font-lato mb-2">Para Semana</h3>
          <p className="text-sm opacity-80">
            Cardápio completo de 5 dias úteis com planejamento e lista de compras
          </p>
        </div>
      </button>
    </div>;
};
export default ModeSelector;