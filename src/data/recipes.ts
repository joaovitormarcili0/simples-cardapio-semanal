
import { Recipe } from '@/types/recipe';

export const recipes: Recipe[] = [
  {
    id: 'arroz-feijao-bife',
    name: 'Arroz, Feijão e Bife Grelhado',
    category: 'carne',
    ingredients: [
      { name: 'Arroz branco', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Feijão carioca', amount: 80, unit: 'g', category: 'proteina' },
      { name: 'Bife de alcatra', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Cebola', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Óleo de soja', amount: 15, unit: 'ml', category: 'outros' },
      { name: 'Sal', amount: 2, unit: 'g', category: 'tempero' },
      { name: 'Pimenta do reino', amount: 1, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Tempere o bife com sal e pimenta do reino',
      'Aqueça uma frigideira e grelhe o bife por 3-4 minutos de cada lado',
      'Cozinhe o arroz em água fervente com sal por 15 minutos',
      'Refogue a cebola e o alho no óleo',
      'Adicione o feijão já cozido e tempere a gosto',
      'Sirva o bife acompanhado do arroz e feijão'
    ],
    nutritionalInfo: {
      calories: 520,
      protein: 35,
      carbs: 45,
      fat: 18,
      fiber: 8
    },
    prepTime: 30,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'frango-legumes',
    name: 'Frango Assado com Legumes',
    category: 'frango',
    ingredients: [
      { name: 'Peito de frango', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Batata doce', amount: 200, unit: 'g', category: 'carboidrato' },
      { name: 'Abobrinha', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Cenoura', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Brócolis', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Azeite de oliva', amount: 20, unit: 'ml', category: 'outros' },
      { name: 'Alecrim', amount: 2, unit: 'g', category: 'tempero' },
      { name: 'Sal', amount: 3, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Pré-aqueça o forno a 200°C',
      'Corte todos os legumes em pedaços médios',
      'Tempere o frango com sal, alecrim e metade do azeite',
      'Coloque o frango e os legumes em uma assadeira',
      'Regue com o restante do azeite e tempere os legumes',
      'Asse por 25-30 minutos até dourar'
    ],
    nutritionalInfo: {
      calories: 480,
      protein: 32,
      carbs: 38,
      fat: 16,
      fiber: 6
    },
    prepTime: 45,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'salmao-quinoa',
    name: 'Salmão Grelhado com Quinoa',
    category: 'peixe',
    ingredients: [
      { name: 'Filé de salmão', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Quinoa', amount: 80, unit: 'g', category: 'carboidrato' },
      { name: 'Aspargos', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Tomate cereja', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Limão', amount: 30, unit: 'ml', category: 'tempero' },
      { name: 'Azeite de oliva', amount: 15, unit: 'ml', category: 'outros' },
      { name: 'Endro', amount: 2, unit: 'g', category: 'tempero' },
      { name: 'Sal', amount: 2, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Cozinhe a quinoa em água fervente por 15 minutos',
      'Tempere o salmão com sal, endro e suco de limão',
      'Grelhe o salmão por 4 minutos de cada lado',
      'Refogue os aspargos e tomates no azeite',
      'Escorra a quinoa e misture com os legumes',
      'Sirva o salmão sobre a quinoa'
    ],
    nutritionalInfo: {
      calories: 450,
      protein: 28,
      carbs: 32,
      fat: 20,
      fiber: 5
    },
    prepTime: 25,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'lasanha-berinjela',
    name: 'Lasanha de Berinjela',
    category: 'vegetariano',
    ingredients: [
      { name: 'Berinjela', amount: 300, unit: 'g', category: 'vegetal' },
      { name: 'Molho de tomate', amount: 200, unit: 'ml', category: 'outros' },
      { name: 'Queijo mussarela', amount: 100, unit: 'g', category: 'proteina' },
      { name: 'Ricota', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Manjericão', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Cebola', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Alho', amount: 8, unit: 'g', category: 'tempero' },
      { name: 'Azeite de oliva', amount: 20, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Corte a berinjela em fatias longitudinais',
      'Grelhe as fatias de berinjela até ficarem macias',
      'Refogue cebola e alho no azeite',
      'Misture o molho de tomate com o refogado',
      'Monte camadas: berinjela, ricota, molho, repita',
      'Cubra com mussarela e asse por 20 minutos'
    ],
    nutritionalInfo: {
      calories: 380,
      protein: 18,
      carbs: 25,
      fat: 22,
      fiber: 8
    },
    prepTime: 50,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'curry-grao-bico',
    name: 'Curry de Grão-de-bico',
    category: 'vegano',
    ingredients: [
      { name: 'Grão-de-bico', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Leite de coco', amount: 200, unit: 'ml', category: 'outros' },
      { name: 'Batata', amount: 150, unit: 'g', category: 'carboidrato' },
      { name: 'Espinafre', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Tomate', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Cebola', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Gengibre', amount: 10, unit: 'g', category: 'tempero' },
      { name: 'Curry em pó', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Óleo de coco', amount: 15, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Deixe o grão-de-bico de molho na véspera',
      'Cozinhe o grão-de-bico até ficar macio',
      'Refogue cebola, gengibre e curry no óleo',
      'Adicione tomate e batata em cubos',
      'Acrescente o leite de coco e grão-de-bico',
      'Cozinhe por 15 minutos e adicione o espinafre no final'
    ],
    nutritionalInfo: {
      calories: 420,
      protein: 16,
      carbs: 42,
      fat: 18,
      fiber: 12
    },
    prepTime: 40,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'picanha-mandioca',
    name: 'Picanha com Mandioca',
    category: 'carne',
    ingredients: [
      { name: 'Picanha', amount: 180, unit: 'g', category: 'proteina' },
      { name: 'Mandioca', amount: 200, unit: 'g', category: 'carboidrato' },
      { name: 'Salada verde', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Tomate', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Sal grosso', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Azeite de oliva', amount: 10, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Tempere a picanha com sal grosso',
      'Grelhe a picanha em fogo alto por 6-8 minutos',
      'Cozinhe a mandioca em água fervente por 20 minutos',
      'Prepare a salada com tomate e tempere com azeite',
      'Fatie a picanha e sirva com mandioca e salada'
    ],
    nutritionalInfo: {
      calories: 580,
      protein: 38,
      carbs: 35,
      fat: 25,
      fiber: 4
    },
    prepTime: 35,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'strogonoff-frango',
    name: 'Strogonoff de Frango',
    category: 'frango',
    ingredients: [
      { name: 'Peito de frango', amount: 200, unit: 'g', category: 'proteina' },
      { name: 'Arroz branco', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Creme de leite', amount: 100, unit: 'ml', category: 'outros' },
      { name: 'Champignon', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Cebola', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Mostarda', amount: 10, unit: 'ml', category: 'tempero' },
      { name: 'Ketchup', amount: 15, unit: 'ml', category: 'tempero' },
      { name: 'Óleo', amount: 15, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Corte o frango em tiras e tempere',
      'Refogue a cebola no óleo até dourar',
      'Adicione o frango e cozinhe por 10 minutos',
      'Acrescente champignon, mostarda e ketchup',
      'Finalize com creme de leite sem ferver',
      'Sirva com arroz branco'
    ],
    nutritionalInfo: {
      calories: 510,
      protein: 42,
      carbs: 38,
      fat: 18,
      fiber: 3
    },
    prepTime: 30,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'peixe-banana',
    name: 'Peixe com Banana da Terra',
    category: 'peixe',
    ingredients: [
      { name: 'Filé de pescada', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Banana da terra', amount: 150, unit: 'g', category: 'carboidrato' },
      { name: 'Couve refogada', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Limão', amount: 20, unit: 'ml', category: 'tempero' },
      { name: 'Azeite dendê', amount: 10, unit: 'ml', category: 'outros' },
      { name: 'Coentro', amount: 3, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Tempere o peixe com limão e sal',
      'Grelhe o peixe com azeite de dendê',
      'Frite a banana da terra em fatias',
      'Refogue a couve com alho',
      'Finalize o peixe com coentro',
      'Sirva tudo junto'
    ],
    nutritionalInfo: {
      calories: 390,
      protein: 25,
      carbs: 35,
      fat: 12,
      fiber: 6
    },
    prepTime: 25,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'omelete-legumes',
    name: 'Omelete com Legumes',
    category: 'vegetariano',
    ingredients: [
      { name: 'Ovos', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Pão integral', amount: 60, unit: 'g', category: 'carboidrato' },
      { name: 'Abobrinha', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Tomate', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Queijo branco', amount: 50, unit: 'g', category: 'proteina' },
      { name: 'Azeite', amount: 10, unit: 'ml', category: 'outros' },
      { name: 'Manjericão', amount: 2, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Bata os ovos com sal e pimenta',
      'Refogue abobrinha e tomate no azeite',
      'Despeje os ovos na frigideira',
      'Adicione os legumes e queijo',
      'Dobre a omelete ao meio',
      'Sirva com pão integral tostado'
    ],
    nutritionalInfo: {
      calories: 360,
      protein: 24,
      carbs: 28,
      fat: 16,
      fiber: 5
    },
    prepTime: 15,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'bowl-quinoa-vegano',
    name: 'Bowl de Quinoa Vegano',
    category: 'vegano',
    ingredients: [
      { name: 'Quinoa', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Feijão preto', amount: 80, unit: 'g', category: 'proteina' },
      { name: 'Abacate', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Milho', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Tomate cereja', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Rúcula', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Tahine', amount: 20, unit: 'ml', category: 'outros' },
      { name: 'Limão', amount: 15, unit: 'ml', category: 'tempero' }
    ],
    instructions: [
      'Cozinhe a quinoa por 15 minutos',
      'Deixe o feijão preto no ponto',
      'Corte o abacate em fatias',
      'Misture tahine com limão para o molho',
      'Monte o bowl com todos os ingredientes',
      'Regue com o molho de tahine'
    ],
    nutritionalInfo: {
      calories: 410,
      protein: 14,
      carbs: 48,
      fat: 16,
      fiber: 14
    },
    prepTime: 20,
    difficulty: 'fácil',
    servings: 1
  }
];

// Função para obter receitas por categoria
export const getRecipesByCategory = (category: RecipeCategory): Recipe[] => {
  return recipes.filter(recipe => recipe.category === category);
};

// Função para obter uma receita aleatória
export const getRandomRecipe = (): Recipe => {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
};

// Função para obter uma receita aleatória por categoria
export const getRandomRecipeByCategory = (category: RecipeCategory): Recipe => {
  const categoryRecipes = getRecipesByCategory(category);
  const randomIndex = Math.floor(Math.random() * categoryRecipes.length);
  return categoryRecipes[randomIndex];
};
