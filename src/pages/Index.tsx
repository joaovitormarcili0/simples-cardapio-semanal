
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChefHat, ArrowLeft } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import PersonCounter from '@/components/PersonCounter';
import ModeSelector from '@/components/ModeSelector';
import RecipeCard from '@/components/RecipeCard';
import WeeklyPlanner from '@/components/WeeklyPlanner';
import WeeklyMenu from '@/components/WeeklyMenu';
import ShoppingList from '@/components/ShoppingList';
import { getRandomRecipe } from '@/data/recipes';
import { Recipe, WeeklyMenu as WeeklyMenuType } from '@/types/recipe';

type AppState = 'home' | 'now-result' | 'weekly-planning' | 'weekly-result';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('home');
  const [selectedMode, setSelectedMode] = useState<'now' | 'weekly' | null>(null);
  const [personCount, setPersonCount] = useState(1);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [weeklyMenu, setWeeklyMenu] = useState<WeeklyMenuType | null>(null);

  const handleModeSelect = (mode: 'now' | 'weekly') => {
    setSelectedMode(mode);
    
    if (mode === 'now') {
      // Gerar receita aleatória instantaneamente
      const recipe = getRandomRecipe();
      setCurrentRecipe(recipe);
      setAppState('now-result');
    } else {
      // Ir para o planejador semanal
      setAppState('weekly-planning');
    }
  };

  const handleMenuGenerated = (menu: WeeklyMenuType) => {
    setWeeklyMenu(menu);
    setAppState('weekly-result');
  };

  const goBack = () => {
    if (appState === 'weekly-planning') {
      setAppState('home');
      setSelectedMode(null);
    } else if (appState === 'now-result' || appState === 'weekly-result') {
      setAppState('home');
      setSelectedMode(null);
      setCurrentRecipe(null);
      setWeeklyMenu(null);
    }
  };

  const generateNewRecipe = () => {
    const recipe = getRandomRecipe();
    setCurrentRecipe(recipe);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lilac-50 via-white to-lilac-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ThemeToggle />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ChefHat className="h-8 w-8 text-lilac-600 dark:text-lilac-400" />
            <h1 className="text-4xl md:text-5xl font-bold font-lato text-gray-900 dark:text-white">
              Comida Simples
            </h1>
          </div>
          {appState === 'home' && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Monte seu cardápio: selecione a base de cada almoço da semana ou gere uma sugestão instantânea. 
              O Comida Simples faz o resto para você. 🍽️
            </p>
          )}
        </header>

        {/* Contador de pessoas - visível em todas as telas */}
        {appState !== 'home' && (
          <div className="flex items-center justify-between mb-6">
            <Button
              onClick={goBack}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
            <PersonCounter count={personCount} onChange={setPersonCount} />
          </div>
        )}

        {/* Conteúdo principal */}
        <main className="flex flex-col items-center">
          {appState === 'home' && (
            <>
              <div className="mb-8">
                <PersonCounter count={personCount} onChange={setPersonCount} />
              </div>
              <ModeSelector 
                selectedMode={selectedMode} 
                onModeSelect={handleModeSelect} 
              />
            </>
          )}

          {appState === 'now-result' && currentRecipe && (
            <div className="w-full max-w-4xl space-y-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold font-lato text-gray-900 dark:text-white mb-2">
                  Sua Sugestão Para Agora! ⚡
                </h2>
                <Button
                  onClick={generateNewRecipe}
                  variant="outline"
                  className="mb-4"
                >
                  🎲 Gerar Nova Sugestão
                </Button>
              </div>
              
              <RecipeCard recipe={currentRecipe} servings={personCount} />
              <ShoppingList recipes={[currentRecipe]} servings={personCount} />
            </div>
          )}

          {appState === 'weekly-planning' && (
            <WeeklyPlanner 
              servings={personCount} 
              onMenuGenerated={handleMenuGenerated} 
            />
          )}

          {appState === 'weekly-result' && weeklyMenu && (
            <WeeklyMenu menu={weeklyMenu} servings={personCount} />
          )}
        </main>

        {/* Footer */}
        <footer className="text-center mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Feito com 💜 para simplificar sua cozinha
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
