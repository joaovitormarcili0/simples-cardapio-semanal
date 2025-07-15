import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RecipeCategory, WeeklyMenu } from '@/types/recipe';
import { getRandomRecipeByCategory } from '@/data/recipes';
import { Shuffle, Download } from 'lucide-react';
interface WeeklyPlannerProps {
  servings: number;
  onMenuGenerated: (menu: WeeklyMenu) => void;
}
const WeeklyPlanner = ({
  servings,
  onMenuGenerated
}: WeeklyPlannerProps) => {
  const [selectedCategories, setSelectedCategories] = useState<{
    monday: RecipeCategory;
    tuesday: RecipeCategory;
    wednesday: RecipeCategory;
    thursday: RecipeCategory;
    friday: RecipeCategory;
  }>({
    monday: 'carne',
    tuesday: 'frango',
    wednesday: 'peixe',
    thursday: 'vegetariano',
    friday: 'vegano'
  });
  const days = [{
    key: 'monday',
    label: 'Segunda-feira',
    emoji: '🌟'
  }, {
    key: 'tuesday',
    label: 'Terça-feira',
    emoji: '🔥'
  }, {
    key: 'wednesday',
    label: 'Quarta-feira',
    emoji: '🌊'
  }, {
    key: 'thursday',
    label: 'Quinta-feira',
    emoji: '🌿'
  }, {
    key: 'friday',
    label: 'Sexta-feira',
    emoji: '💚'
  }];
  const categories: {
    value: RecipeCategory;
    label: string;
    emoji: string;
  }[] = [{
    value: 'carne',
    label: 'Carne',
    emoji: '🥩'
  }, {
    value: 'frango',
    label: 'Frango',
    emoji: '🍗'
  }, {
    value: 'peixe',
    label: 'Peixe',
    emoji: '🐟'
  }, {
    value: 'vegetariano',
    label: 'Vegetariano',
    emoji: '🥬'
  }, {
    value: 'vegano',
    label: 'Vegano',
    emoji: '🌱'
  }];
  const handleCategoryChange = (day: keyof typeof selectedCategories, category: RecipeCategory) => {
    setSelectedCategories(prev => ({
      ...prev,
      [day]: category
    }));
  };
  const generateMenu = () => {
    const menu: WeeklyMenu = {
      monday: getRandomRecipeByCategory(selectedCategories.monday),
      tuesday: getRandomRecipeByCategory(selectedCategories.tuesday),
      wednesday: getRandomRecipeByCategory(selectedCategories.wednesday),
      thursday: getRandomRecipeByCategory(selectedCategories.thursday),
      friday: getRandomRecipeByCategory(selectedCategories.friday)
    };
    onMenuGenerated(menu);
  };
  const randomizeCategories = () => {
    const randomCategories = categories.map(c => c.value);
    setSelectedCategories({
      monday: randomCategories[Math.floor(Math.random() * randomCategories.length)],
      tuesday: randomCategories[Math.floor(Math.random() * randomCategories.length)],
      wednesday: randomCategories[Math.floor(Math.random() * randomCategories.length)],
      thursday: randomCategories[Math.floor(Math.random() * randomCategories.length)],
      friday: randomCategories[Math.floor(Math.random() * randomCategories.length)]
    });
  };
  return <div className="w-full max-w-4xl animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-lato text-gray-900 dark:text-white mb-2">
          Monte seu Cardápio Semanal 📅
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Escolha o tipo de prato para cada dia da semana
        </p>
      </div>

      <div className="recipe-card">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {days.map(day => <div key={day.key} className="space-y-3">
              <div className="flex items-center gap-2">
                
                <label className="font-medium text-gray-700 dark:text-gray-300">
                  {day.label}
                </label>
              </div>
              <Select value={selectedCategories[day.key as keyof typeof selectedCategories]} onValueChange={(value: RecipeCategory) => handleCategoryChange(day.key as keyof typeof selectedCategories, value)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  {categories.map(category => <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center gap-2">
                        <span>{category.emoji}</span>
                        <span>{category.label}</span>
                      </div>
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>)}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={randomizeCategories} variant="outline" className="flex items-center gap-2 border-lilac-300 hover:bg-lilac-50 hover:border-lilac-400 text-lilac-700 dark:border-lilac-600 dark:text-lilac-300 dark:hover:bg-lilac-900">
            <Shuffle className="h-4 w-4" />
            Aleatorizar
          </Button>
          
          <Button onClick={generateMenu} className="flex items-center gap-2 bg-lilac-500 hover:bg-lilac-600 text-white px-8 py-3 text-lg">
            <Download className="h-5 w-5" />
            Gerar Cardápio da Semana
          </Button>
        </div>
      </div>
    </div>;
};
export default WeeklyPlanner;