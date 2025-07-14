
import { RecipeCategory } from '@/types/recipe';

interface CategorySelectorProps {
  selectedCategory: RecipeCategory | null;
  onCategorySelect: (category: RecipeCategory) => void;
}

const CategorySelector = ({ selectedCategory, onCategorySelect }: CategorySelectorProps) => {
  const categories = [
    { id: 'carne', name: 'Carne', emoji: '🥩' },
    { id: 'frango', name: 'Frango', emoji: '🍗' },
    { id: 'peixe', name: 'Peixe', emoji: '🐟' },
    { id: 'vegetariano', name: 'Vegetariano', emoji: '🥬' },
    { id: 'vegano', name: 'Vegano', emoji: '🌱' }
  ];

  return (
    <div className="w-full max-w-3xl">
      <h3 className="text-2xl font-bold font-lato text-gray-900 dark:text-white mb-6 text-center">
        Escolha sua proteína preferida:
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id as RecipeCategory)}
            className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
              selectedCategory === category.id
                ? 'border-lilac-500 bg-lilac-50 dark:bg-lilac-900/20 shadow-lg'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-lilac-300 dark:hover:border-lilac-600'
            }`}
          >
            <div className="text-2xl mb-2">{category.emoji}</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {category.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
