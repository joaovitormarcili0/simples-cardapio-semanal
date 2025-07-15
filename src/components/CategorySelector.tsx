
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
    <div className="w-full max-w-4xl">
      <h3 className="text-2xl font-bold font-lato text-foreground mb-8 text-center">
        Escolha sua proteína preferida:
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id as RecipeCategory)}
            className={`category-button ${
              selectedCategory === category.id ? 'selected' : ''
            }`}
            aria-label={`Selecionar categoria ${category.name}`}
          >
            <div className="text-3xl mb-3" role="img" aria-label={category.name}>
              {category.emoji}
            </div>
            <div className="text-sm font-medium text-foreground">
              {category.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
