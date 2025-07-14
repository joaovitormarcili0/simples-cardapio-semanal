
export type RecipeCategory = 'carne' | 'frango' | 'peixe' | 'vegetariano' | 'vegano';

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  category?: 'proteina' | 'carboidrato' | 'vegetal' | 'tempero' | 'outros';
}

export interface Recipe {
  id: string;
  name: string;
  category: RecipeCategory;
  ingredients: Ingredient[];
  instructions: string[];
  nutritionalInfo: NutritionalInfo;
  prepTime: number; // em minutos
  difficulty: 'fácil' | 'médio' | 'difícil';
  servings: number; // porções base
}

export interface WeeklyMenu {
  monday: Recipe;
  tuesday: Recipe;
  wednesday: Recipe;
  thursday: Recipe;
  friday: Recipe;
}

export interface ShoppingListItem {
  name: string;
  amount: number;
  unit: string;
  category: string;
  checked: boolean;
}
