import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChefHat, ArrowLeft } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import PersonCounter from '@/components/PersonCounter';
import ModeSelector from '@/components/ModeSelector';
import CategorySelector from '@/components/CategorySelector';
import RecipeCard from '@/components/RecipeCard';
import WeeklyPlanner from '@/components/WeeklyPlanner';
import WeeklyMenu from '@/components/WeeklyMenu';
import ShoppingList from '@/components/ShoppingList';
import { getRandomRecipe, getRandomRecipeByCategory } from '@/data/recipes';
import { Recipe, WeeklyMenu as WeeklyMenuType, RecipeCategory } from '@/types/recipe';
type AppState = 'home' | 'category-selection' | 'now-result' | 'weekly-planning' | 'weekly-result';
const Index = () => {
  const [appState, setAppState] = useState<AppState>('home');
  const [selectedMode, setSelectedMode] = useState<'now' | 'weekly' | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory | null>(null);
  const [personCount, setPersonCount] = useState(1);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [weeklyMenu, setWeeklyMenu] = useState<WeeklyMenuType | null>(null);
  const handleModeSelect = (mode: 'now' | 'weekly') => {
    setSelectedMode(mode);
    if (mode === 'now') {
      setAppState('category-selection');
    } else {
      setAppState('weekly-planning');
    }
  };
  const handleCategorySelect = (category: RecipeCategory) => {
    setSelectedCategory(category);
    const recipe = getRandomRecipeByCategory(category);
    setCurrentRecipe(recipe);
    setAppState('now-result');
  };
  const handleMenuGenerated = (menu: WeeklyMenuType) => {
    setWeeklyMenu(menu);
    setAppState('weekly-result');
  };
  const goBack = () => {
    if (appState === 'category-selection') {
      setAppState('home');
      setSelectedMode(null);
      setSelectedCategory(null);
    } else if (appState === 'weekly-planning') {
      setAppState('home');
      setSelectedMode(null);
    } else if (appState === 'now-result' || appState === 'weekly-result') {
      setAppState('home');
      setSelectedMode(null);
      setCurrentRecipe(null);
      setWeeklyMenu(null);
      setSelectedCategory(null);
    }
  };
  const generateNewRecipe = () => {
    if (selectedCategory) {
      const recipe = getRandomRecipeByCategory(selectedCategory);
      setCurrentRecipe(recipe);
    }
  };
  return <div className="min-h-screen bg-slate-900">
      <div className="relative z-10">
        <ThemeToggle />
        
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <header className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ChefHat className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold font-lato text-foreground">
                Comida Simples
              </h1>
            </div>
            {appState === 'home' && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Monte seu cardápio: selecione a base de cada almoço da semana ou gere uma sugestão instantânea. 
                O Comida Simples faz o resto para você. 🍽️
              </p>}
          </header>

          {/* Contador de pessoas - visível em todas as telas exceto home */}
          {appState !== 'home' && <div className="flex items-center justify-between mb-6">
              <Button onClick={goBack} variant="outline" className="flex items-center gap-2 hover:bg-accent/50 border-border">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Button>
              <PersonCounter count={personCount} onChange={setPersonCount} />
            </div>}

          {/* Conteúdo principal */}
          <main className="flex flex-col items-center">
            {appState === 'home' && <>
                <div className="mb-8">
                  <PersonCounter count={personCount} onChange={setPersonCount} />
                </div>
                <ModeSelector selectedMode={selectedMode} onModeSelect={handleModeSelect} />
              </>}

            {appState === 'category-selection' && <CategorySelector selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />}

            {appState === 'now-result' && currentRecipe && <div className="w-full max-w-4xl space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold font-lato text-foreground mb-4">
                    Sua Sugestão Para Agora! ⚡
                  </h2>
                  <Button onClick={generateNewRecipe} variant="outline" className="mb-4 hover:bg-accent/50 border-border">
                    🎲 Gerar Nova Sugestão
                  </Button>
                </div>
                
                <RecipeCard recipe={currentRecipe} servings={personCount} />
                <ShoppingList recipes={[currentRecipe]} servings={personCount} />
              </div>}

            {appState === 'weekly-planning' && <WeeklyPlanner servings={personCount} onMenuGenerated={handleMenuGenerated} />}

            {appState === 'weekly-result' && weeklyMenu && <WeeklyMenu menu={weeklyMenu} servings={personCount} />}
          </main>

          {/* Footer */}
          <footer className="text-center mt-16 py-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              Feito com 💜 para simplificar sua cozinha
            </p>
          </footer>
        </div>
      </div>
    </div>;
};
export default Index;