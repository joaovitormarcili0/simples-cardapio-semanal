
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
            category: ingredient.category,
            checked: false
          });
        }
      });
    });

    return Array.from(ingredientMap.values())
      .map(item => ({
        ...item,
        amount: Math.round(item.amount * 10) / 10
      }))
      .sort((a, b) => a.category.localeCompare(b.category));
  };

  const shoppingList = consolidateIngredients();

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
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px; color: #3a3a3a; }
            h1 { color: #B388EB; text-align: center; }
            h3 { color: #B388EB; border-bottom: 2px solid #FFD6A5; padding-bottom: 8px; margin-top: 24px; }
            ul { list-style-type: none; padding-left: 0; }
            li { padding: 8px 0; border-bottom: 1px dotted #e0e0e0; }
            .header { text-align: center; margin-bottom: 32px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🛒 Lista de Compras - Comida Simples</h1>
            <p><strong>Para ${servings} pessoa${servings > 1 ? 's' : ''}</strong></p>
          </div>
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
          <ShoppingCart className="h-6 w-6 text-primary" />
          <div>
            <h3 className="text-xl font-bold font-lato text-foreground">
              Lista de Compras {isWeekly ? 'da Semana' : ''}
            </h3>
            <p className="text-sm text-muted-foreground">
              {checkedCount} de {totalCount} itens marcados
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button
            onClick={exportList}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 hover:bg-accent/50"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Exportar</span>
          </Button>
          <Button
            onClick={printList}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 hover:bg-accent/50"
          >
            <Printer className="h-4 w-4" />
            <span className="hidden sm:inline">Imprimir</span>
          </Button>
        </div>
      </div>

      {/* Barra de progresso */}
      <div className="mb-6">
        <div className="w-full bg-muted rounded-full h-3">
          <div
            className="bg-primary h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Lista agrupada por categoria */}
      <div className="space-y-6">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl" role="img" aria-label={categoryLabels[category as keyof typeof categoryLabels]}>
                {categoryEmojis[category as keyof typeof categoryEmojis] || '📦'}
              </span>
              <h4 className="text-lg font-semibold font-lato text-foreground">
                {categoryLabels[category as keyof typeof categoryLabels] || category}
              </h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {items.map((item, index) => {
                const itemKey = `${category}-${item.name}-${index}`;
                const isChecked = checkedItems.has(itemKey);
                
                return (
                  <div
                    key={itemKey}
                    className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-200 ${
                      isChecked 
                        ? 'bg-secondary/20 border border-secondary/50' 
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => toggleItem(itemKey)}
                      className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <div className={`flex-1 ${isChecked ? 'line-through opacity-60' : ''}`}>
                      <span className="text-foreground">{item.name}</span>
                    </div>
                    <span className={`text-sm font-medium ${
                      isChecked ? 'text-primary/60' : 'text-primary'
                    }`}>
                      {item.amount}{item.unit}
                    </span>
                    {isChecked && <Check className="h-4 w-4 text-primary" />}
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
