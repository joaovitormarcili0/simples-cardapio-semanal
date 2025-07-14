import { Clock, Users, TrendingUp } from 'lucide-react';
import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  servings: number;
}

const RecipeCard = ({ recipe, servings }: RecipeCardProps) => {
  // Calcular valores ajustados para o número de pessoas
  const multiplier = servings / recipe.servings;
  const adjustedNutrition = {
    calories: Math.round(recipe.nutritionalInfo.calories * multiplier),
    protein: Math.round(recipe.nutritionalInfo.protein * multiplier),
    carbs: Math.round(recipe.nutritionalInfo.carbs * multiplier),
    fat: Math.round(recipe.nutritionalInfo.fat * multiplier),
    fiber: Math.round(recipe.nutritionalInfo.fiber * multiplier),
  };

  const adjustedIngredients = recipe.ingredients.map(ingredient => ({
    ...ingredient,
    amount: Math.round((ingredient.amount * multiplier) * 10) / 10
  }));

  const categoryEmojis = {
    carne: '🥩',
    frango: '🍗',
    peixe: '🐟',
    vegetariano: '🥬',
    vegano: '🌱'
  };

  const difficultyColors = {
    fácil: 'text-green-600 dark:text-green-400',
    médio: 'text-yellow-600 dark:text-yellow-400',
    difícil: 'text-red-600 dark:text-red-400'
  };

  return (
    <div className="recipe-card animate-fade-in">
      {/* Header do cartão */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{categoryEmojis[recipe.category]}</span>
          <div>
            <h2 className="text-2xl font-bold font-lato text-gray-900 dark:text-white">
              {recipe.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
              {recipe.category}
            </p>
          </div>
        </div>
        <div className={`text-sm font-medium ${difficultyColors[recipe.difficulty]}`}>
          {recipe.difficulty}
        </div>
      </div>

      {/* Informações rápidas */}
      <div className="flex items-center gap-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{recipe.prepTime} min</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>{servings} pessoa{servings > 1 ? 's' : ''}</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4" />
          <span>{adjustedNutrition.calories} kcal</span>
        </div>
      </div>

      {/* Informações nutricionais */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold font-lato mb-3 text-gray-900 dark:text-white">
          Informações Nutricionais
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="nutrition-badge">
            <div className="text-xs opacity-75">Calorias</div>
            <div className="font-semibold">{adjustedNutrition.calories}</div>
          </div>
          <div className="nutrition-badge">
            <div className="text-xs opacity-75">Proteína</div>
            <div className="font-semibold">{adjustedNutrition.protein}g</div>
          </div>
          <div className="nutrition-badge">
            <div className="text-xs opacity-75">Carbos</div>
            <div className="font-semibold">{adjustedNutrition.carbs}g</div>
          </div>
          <div className="nutrition-badge">
            <div className="text-xs opacity-75">Gordura</div>
            <div className="font-semibold">{adjustedNutrition.fat}g</div>
          </div>
          <div className="nutrition-badge">
            <div className="text-xs opacity-75">Fibra</div>
            <div className="font-semibold">{adjustedNutrition.fiber}g</div>
          </div>
        </div>
      </div>

      {/* Ingredientes */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold font-lato mb-3 text-gray-900 dark:text-white">
          Ingredientes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {adjustedIngredients.map((ingredient, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span className="text-gray-700 dark:text-gray-300">{ingredient.name}</span>
              <span className="text-lilac-600 dark:text-lilac-400 font-medium">
                {ingredient.amount}{ingredient.unit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modo de preparo */}
      <div>
        <h3 className="text-lg font-semibold font-lato mb-3 text-gray-900 dark:text-white">
          Modo de Preparo
        </h3>
        <ol className="space-y-2">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="flex gap-3 text-sm">
              <span className="flex-shrink-0 w-6 h-6 bg-lilac-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                {index + 1}
              </span>
              <span className="text-gray-700 dark:text-gray-300">{instruction}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeCard;
