import { Clock, Users, TrendingUp } from 'lucide-react';
import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  servings: number;
}

const RecipeCard = ({ recipe, servings }: RecipeCardProps) => {
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
    vegano: '🌱',
    fit: '💪'
  };

  const difficultyColors = {
    fácil: 'text-green-600 dark:text-green-400',
    médio: 'text-amber-600 dark:text-amber-400',
    difícil: 'text-red-600 dark:text-red-400'
  };

  return (
    <div className="recipe-card animate-fade-in">
      {/* Header do cartão */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-4xl" role="img" aria-label={recipe.category}>
            {categoryEmojis[recipe.category]}
          </span>
          <div>
            <h2 className="text-2xl font-bold font-lato text-foreground">
              {recipe.name}
            </h2>
            <p className="text-sm text-muted-foreground capitalize">
              {recipe.category}
            </p>
          </div>
        </div>
        <div className={`text-sm font-medium px-3 py-1 rounded-full bg-accent/20 ${difficultyColors[recipe.difficulty]}`}>
          {recipe.difficulty}
        </div>
      </div>

      {/* Informações rápidas */}
      <div className="flex items-center gap-8 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span>{recipe.prepTime} min</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <span>{servings} pessoa{servings > 1 ? 's' : ''}</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span>{adjustedNutrition.calories} kcal</span>
        </div>
      </div>

      {/* Informações nutricionais */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold font-lato mb-4 text-foreground">
          Informações Nutricionais
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="nutrition-badge">
            <div className="text-xs text-muted-foreground">Calorias</div>
            <div className="font-semibold">{adjustedNutrition.calories}</div>
          </div>
          <div className="nutrition-badge">
            <div className="text-xs text-muted-foreground">Proteína</div>
            <div className="font-semibold">{adjustedNutrition.protein}g</div>
          </div>
          <div className="nutrition-badge">
            <div className="text-xs text-muted-foreground">Carbos</div>
            <div className="font-semibold">{adjustedNutrition.carbs}g</div>
          </div>
          <div className="nutrition-badge">
            <div className="text-xs text-muted-foreground">Gordura</div>
            <div className="font-semibold">{adjustedNutrition.fat}g</div>
          </div>
          <div className="nutrition-badge">
            <div className="text-xs text-muted-foreground">Fibra</div>
            <div className="font-semibold">{adjustedNutrition.fiber}g</div>
          </div>
        </div>
      </div>

      {/* Ingredientes */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold font-lato mb-4 text-foreground">
          Ingredientes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {adjustedIngredients.map((ingredient, index) => (
            <div key={index} className="flex justify-between items-center text-sm p-2 rounded-lg bg-muted/30">
              <span className="text-foreground">{ingredient.name}</span>
              <span className="text-primary font-medium">
                {ingredient.amount}{ingredient.unit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modo de preparo */}
      <div>
        <h3 className="text-lg font-semibold font-lato mb-4 text-foreground">
          Modo de Preparo
        </h3>
        <ol className="space-y-3">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="flex gap-4 text-sm">
              <span className="flex-shrink-0 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold">
                {index + 1}
              </span>
              <span className="text-foreground leading-relaxed">{instruction}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeCard;
