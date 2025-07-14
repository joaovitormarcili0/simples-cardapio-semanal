
export type RecipeCategory = 'carne' | 'frango' | 'peixe' | 'vegetariano' | 'vegano';

export type RecipeDifficulty = 'fácil' | 'médio' | 'difícil';

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
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

export interface DayMenu {
  day: string;
  recipe: Recipe;
}

export interface WeeklyMenu {
  days: DayMenu[];
}
