
import { useState } from 'react';
import { Recipe, ShoppingListItem } from '@/types/recipe';
import { ShoppingCart, Check, Download, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

interface ShoppingListProps {
  recipes: Recipe[];
  servings: number;
  isWeekly?: boolean;
}

const ShoppingList = ({ recipes, servings, isWeekly = false }: ShoppingListProps) => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  // Consolidar ingredientes de todas as receitas
  const consolidateIngredients = (): ShoppingListItem[] => {
    const ingredientMap = new Map<string, ShoppingListItem>();

    recipes.forEach(recipe => {
      const multiplier = servings / recipe.servings;
      
      recipe.ingredients.forEach(ingredient => {
        const adjustedAmount = ingredient.amount * multiplier;
        const key = `${ingredient.name}-${ingredient.unit}`;
        
        if (ingredientMap.has(key)) {
          const existing = ingredientMap.get(key)!;
          existing.amount += adjustedAmount;
        } else {
          ingredientMap.set(key, {
            name: ingredient.name,
            amount: adjustedAmount,
            unit: ingredient.unit,
            category: ingredient.category || 'outros',
            checked: false
          });
        }
      });
    });

    return Array.from(ingredientMap.values())
      .map(item => ({
        ...item,
        amount: Math.round(item.amount * 10) / 10 // Arredondar para 1 decimal
      }))
      .sort((a, b) => a.category.localeCompare(b.category));
  };

  const shoppingList = consolidateIngredients();

  // Agrupar por categoria
  const groupedItems = shoppingList.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {} as Record<string, ShoppingListItem[]>);

  const categoryLabels = {
    proteina: 'Proteínas',
    carboidrato: 'Carboidratos',
    vegetal: 'Vegetais e Frutas',
    tempero: 'Temperos',
    outros: 'Outros'
  };

  const categoryEmojis = {
    proteina: '🥩',
    carboidrato: '🍞',
    vegetal: '🥬',
    tempero: '🧂',
    outros: '🛒'
  };

  const toggleItem = (itemKey: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemKey)) {
      newCheckedItems.delete(itemKey);
    } else {
      newCheckedItems.add(itemKey);
    }
    setCheckedItems(newCheckedItems);
  };

  const exportList = () => {
    const listText = Object.entries(groupedItems)
      .map(([category, items]) => {
        const categoryName = categoryLabels[category as keyof typeof categoryLabels] || category;
        const itemsText = items
          .map(item => `• ${item.name} - ${item.amount}${item.unit}`)
          .join('\n');
        return `${categoryName}:\n${itemsText}`;
      })
      .join('\n\n');

    const blob = new Blob([listText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = isWeekly ? 'lista-compras-semana.txt' : 'lista-compras.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const printList = () => {
    const printContent = Object.entries(groupedItems)
      .map(([category, items]) => {
        const categoryName = categoryLabels[category as keyof typeof categoryLabels] || category;
        const itemsHTML = items
          .map(item => `<li>${item.name} - ${item.amount}${item.unit}</li>`)
          .join('');
        return `<h3>${categoryName}</h3><ul>${itemsHTML}</ul>`;
      })
      .join('');

    const printWindow = window.open('', '_blank');
    printWindow!.document.write(`
      <html>
        <head>
          <title>Lista de Compras - Comida Simples</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { color: #7c2ae3; text-align: center; }
            h3 { color: #57209c; border-bottom: 1px solid #e9ddff; padding-bottom: 5px; }
            ul { list-style-type: none; padding-left: 0; }
            li { padding: 3px 0; border-bottom: 1px dotted #ccc; }
          </style>
        </head>
        <body>
          <h1>Lista de Compras - Comida Simples</h1>
          <p><strong>Para ${servings} pessoa${servings > 1 ? 's' : ''}</strong></p>
          ${printContent}
        </body>
      </html>
    `);
    printWindow!.document.close();
    printWindow!.print();
  };

  const checkedCount = checkedItems.size;
  const totalCount = shoppingList.length;
  const progress = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

  return (
    <div className="recipe-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <ShoppingCart className="h-6 w-6 text-lilac-600 dark:text-lilac-400" />
          <div>
            <h3 className="text-xl font-bold font-lato text-gray-900 dark:text-white">
              Lista de Compras {isWeekly ? 'da Semana' : ''}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {checkedCount} de {totalCount} itens marcados
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button
            onClick={exportList}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Exportar
          </Button>
          <Button
            onClick={printList}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Printer className="h-4 w-4" />
            Imprimir
          </Button>
        </div>
      </div>

      {/* Barra de progresso */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-lilac-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Lista agrupada por categoria */}
      <div className="space-y-6">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">
                {categoryEmojis[category as keyof typeof categoryEmojis] || '📦'}
              </span>
              <h4 className="text-lg font-semibold font-lato text-gray-900 dark:text-white">
                {categoryLabels[category as keyof typeof categoryLabels] || category}
              </h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {items.map((item, index) => {
                const itemKey = `${category}-${item.name}-${index}`;
                const isChecked = checkedItems.has(itemKey);
                
                return (
                  <div
                    key={itemKey}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                      isChecked 
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                        : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => toggleItem(itemKey)}
                      className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                    />
                    <div className={`flex-1 ${isChecked ? 'line-through opacity-60' : ''}`}>
                      <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                    </div>
                    <span className={`text-sm font-medium ${
                      isChecked ? 'text-green-600 dark:text-green-400' : 'text-lilac-600 dark:text-lilac-400'
                    }`}>
                      {item.amount}{item.unit}
                    </span>
                    {isChecked && <Check className="h-4 w-4 text-green-500" />}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
