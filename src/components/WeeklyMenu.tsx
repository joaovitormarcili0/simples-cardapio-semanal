
import { WeeklyMenu as WeeklyMenuType } from '@/types/recipe';
import RecipeCard from './RecipeCard';
import ShoppingList from './ShoppingList';

interface WeeklyMenuProps {
  menu: WeeklyMenuType;
  servings: number;
}

const WeeklyMenu = ({ menu, servings }: WeeklyMenuProps) => {
  const days = [
    { key: 'monday', label: 'Segunda-feira', emoji: '🌟' },
    { key: 'tuesday', label: 'Terça-feira', emoji: '🔥' },
    { key: 'wednesday', label: 'Quarta-feira', emoji: '🌊' },
    { key: 'thursday', label: 'Quinta-feira', emoji: '🌿' },
    { key: 'friday', label: 'Sexta-feira', emoji: '💚' }
  ];

  return (
    <div className="w-full max-w-7xl animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-lato text-gray-900 dark:text-white mb-2">
          Seu Cardápio da Semana 🍽️
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Planejamento completo para {servings} pessoa{servings > 1 ? 's' : ''}
        </p>
      </div>

      {/* Lista de compras */}
      <div className="mb-8">
        <ShoppingList 
          recipes={[menu.monday, menu.tuesday, menu.wednesday, menu.thursday, menu.friday]} 
          servings={servings} 
          isWeekly={true}
        />
      </div>

      {/* Cardápio diário */}
      <div className="space-y-8">
        {days.map(day => {
          const recipe = menu[day.key as keyof WeeklyMenuType];
          return (
            <div key={day.key} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{day.emoji}</span>
                <h3 className="text-2xl font-bold font-lato text-gray-900 dark:text-white">
                  {day.label}
                </h3>
              </div>
              <RecipeCard recipe={recipe} servings={servings} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyMenu;
