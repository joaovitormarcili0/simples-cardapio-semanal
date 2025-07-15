export type RecipeCategory = 'carne' | 'frango' | 'peixe' | 'vegetariano' | 'vegano' | 'fit';

export type RecipeDifficulty = 'fácil' | 'médio' | 'difícil';

export type IngredientCategory = 'proteina' | 'carboidrato' | 'vegetal' | 'tempero' | 'outros';

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  category: IngredientCategory;
}

export interface ShoppingListItem {
  name: string;
  amount: number;
  unit: string;
  category: IngredientCategory;
  checked: boolean;
}

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface Recipe {
  id: string;
  name: string;
  category: RecipeCategory;
  difficulty: RecipeDifficulty;
  prepTime: number;
  servings: number;
  ingredients: Ingredient[];
  instructions: string[];
  nutritionalInfo: NutritionalInfo;
}

export interface WeeklyMenu {
  monday: Recipe;
  tuesday: Recipe;
  wednesday: Recipe;
  thursday: Recipe;
  friday: Recipe;
}

export interface DayMenu {
  day: string;
  recipe: Recipe;
}
