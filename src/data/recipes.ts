
import { Recipe, RecipeCategory } from '@/types/recipe';

export const recipes: Recipe[] = [
  // ===== RECEITAS DE CARNE (10 receitas) =====
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
    id: 'carne-panela-batata',
    name: 'Carne de Panela com Batatas',
    category: 'carne',
    ingredients: [
      { name: 'Carne de segunda', amount: 200, unit: 'g', category: 'proteina' },
      { name: 'Batata inglesa', amount: 250, unit: 'g', category: 'carboidrato' },
      { name: 'Cenoura', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Cebola', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Alho', amount: 8, unit: 'g', category: 'tempero' },
      { name: 'Louro', amount: 2, unit: 'folhas', category: 'tempero' },
      { name: 'Óleo', amount: 20, unit: 'ml', category: 'outros' },
      { name: 'Água', amount: 300, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Corte a carne em cubos e tempere com sal',
      'Doure a carne no óleo em uma panela de pressão',
      'Adicione cebola, alho e refogue',
      'Acrescente água e louro, tampe e cozinhe por 40 minutos',
      'Adicione batatas e cenoura em cubos',
      'Cozinhe por mais 15 minutos até os legumes ficarem macios'
    ],
    nutritionalInfo: {
      calories: 450,
      protein: 32,
      carbs: 28,
      fat: 22,
      fiber: 5
    },
    prepTime: 60,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'hamburguer-caseiro',
    name: 'Hambúrguer Caseiro com Batata Rústica',
    category: 'carne',
    ingredients: [
      { name: 'Carne moída', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Pão de hambúrguer', amount: 80, unit: 'g', category: 'carboidrato' },
      { name: 'Batata', amount: 200, unit: 'g', category: 'carboidrato' },
      { name: 'Queijo', amount: 30, unit: 'g', category: 'proteina' },
      { name: 'Alface', amount: 30, unit: 'g', category: 'vegetal' },
      { name: 'Tomate', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Cebola', amount: 40, unit: 'g', category: 'vegetal' },
      { name: 'Ovo', amount: 50, unit: 'g', category: 'proteina' }
    ],
    instructions: [
      'Misture a carne moída com ovo, sal e pimenta',
      'Modele o hambúrguer e grelhe por 4 minutos cada lado',
      'Corte as batatas em gomos e asse no forno',
      'Monte o hambúrguer com queijo, alface e tomate',
      'Sirva com as batatas rústicas'
    ],
    nutritionalInfo: {
      calories: 620,
      protein: 35,
      carbs: 42,
      fat: 28,
      fiber: 6
    },
    prepTime: 25,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'escondidinho-carne',
    name: 'Escondidinho de Carne Seca',
    category: 'carne',
    ingredients: [
      { name: 'Carne seca', amount: 120, unit: 'g', category: 'proteina' },
      { name: 'Purê de batata', amount: 200, unit: 'g', category: 'carboidrato' },
      { name: 'Queijo ralado', amount: 50, unit: 'g', category: 'proteina' },
      { name: 'Cebola', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Tomate', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Pimentão', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Azeite', amount: 15, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Dessalgue e desfie a carne seca',
      'Refogue cebola, alho, tomate e pimentão',
      'Adicione a carne e refogue bem',
      'Coloque em um refratário e cubra com purê',
      'Polvilhe queijo e gratine no forno'
    ],
    nutritionalInfo: {
      calories: 480,
      protein: 28,
      carbs: 35,
      fat: 20,
      fiber: 4
    },
    prepTime: 45,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'costela-barbecue',
    name: 'Costela no Molho Barbecue',
    category: 'carne',
    ingredients: [
      { name: 'Costela bovina', amount: 250, unit: 'g', category: 'proteina' },
      { name: 'Arroz branco', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Molho de tomate', amount: 80, unit: 'ml', category: 'outros' },
      { name: 'Mostarda', amount: 10, unit: 'ml', category: 'tempero' },
      { name: 'Mel', amount: 15, unit: 'ml', category: 'outros' },
      { name: 'Vinagre', amount: 10, unit: 'ml', category: 'tempero' },
      { name: 'Cebola', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Tempere a costela e grelhe até dourar',
      'Misture molho de tomate, mostarda, mel e vinagre',
      'Refogue cebola e alho, adicione o molho',
      'Coloque a costela no molho e cozinhe em fogo baixo',
      'Sirva com arroz branco'
    ],
    nutritionalInfo: {
      calories: 650,
      protein: 42,
      carbs: 38,
      fat: 32,
      fiber: 3
    },
    prepTime: 90,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'carne-mongoliana',
    name: 'Carne Mongoliana com Legumes',
    category: 'carne',
    ingredients: [
      { name: 'Filé mignon', amount: 180, unit: 'g', category: 'proteina' },
      { name: 'Macarrão talharim', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Brócolis', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Cenoura', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Shoyu', amount: 20, unit: 'ml', category: 'tempero' },
      { name: 'Gengibre', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Óleo de gergelim', amount: 10, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Corte a carne em tiras finas',
      'Refogue alho e gengibre no óleo',
      'Adicione a carne e doure rapidamente',
      'Acrescente os legumes e shoyu',
      'Sirva sobre o macarrão cozido'
    ],
    nutritionalInfo: {
      calories: 520,
      protein: 38,
      carbs: 32,
      fat: 22,
      fiber: 5
    },
    prepTime: 20,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'file-parmegiana',
    name: 'Filé à Parmegiana',
    category: 'carne',
    ingredients: [
      { name: 'Filé de carne', amount: 180, unit: 'g', category: 'proteina' },
      { name: 'Arroz branco', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Molho de tomate', amount: 100, unit: 'ml', category: 'outros' },
      { name: 'Queijo mussarela', amount: 80, unit: 'g', category: 'proteina' },
      { name: 'Farinha de rosca', amount: 30, unit: 'g', category: 'outros' },
      { name: 'Ovo', amount: 50, unit: 'g', category: 'proteina' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Óleo', amount: 30, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Tempere e bata o filé até ficar fino',
      'Passe no ovo batido e na farinha de rosca',
      'Frite até dourar dos dois lados',
      'Cubra com molho de tomate e queijo',
      'Leve ao forno para gratinar'
    ],
    nutritionalInfo: {
      calories: 680,
      protein: 45,
      carbs: 35,
      fat: 35,
      fiber: 3
    },
    prepTime: 40,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'carne-sol-macaxeira',
    name: 'Carne de Sol com Macaxeira',
    category: 'carne',
    ingredients: [
      { name: 'Carne de sol', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Macaxeira', amount: 250, unit: 'g', category: 'carboidrato' },
      { name: 'Manteiga', amount: 20, unit: 'g', category: 'outros' },
      { name: 'Cebola', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Pimentão', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Coentro', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Dessalgue e corte a carne de sol',
      'Cozinhe a macaxeira até ficar macia',
      'Doure a carne na manteiga',
      'Refogue cebola, alho e pimentão',
      'Misture tudo e finalize com coentro'
    ],
    nutritionalInfo: {
      calories: 480,
      protein: 30,
      carbs: 40,
      fat: 18,
      fiber: 6
    },
    prepTime: 35,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'steak-batata-doce',
    name: 'Steak com Batata Doce Assada',
    category: 'carne',
    ingredients: [
      { name: 'Contrafilé', amount: 200, unit: 'g', category: 'proteina' },
      { name: 'Batata doce', amount: 200, unit: 'g', category: 'carboidrato' },
      { name: 'Aspargos', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Manteiga', amount: 15, unit: 'g', category: 'outros' },
      { name: 'Alecrim', amount: 2, unit: 'g', category: 'tempero' },
      { name: 'Sal grosso', amount: 3, unit: 'g', category: 'tempero' },
      { name: 'Pimenta', amount: 1, unit: 'g', category: 'tempero' },
      { name: 'Azeite', amount: 10, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Tempere o steak com sal grosso e pimenta',
      'Corte a batata doce em fatias e asse no forno',
      'Grelhe o steak por 3-4 minutos cada lado',
      'Salteie os aspargos na manteiga',
      'Finalize com alecrim e sirva tudo junto'
    ],
    nutritionalInfo: {
      calories: 580,
      protein: 40,
      carbs: 35,
      fat: 25,
      fiber: 5
    },
    prepTime: 30,
    difficulty: 'fácil',
    servings: 1
  },

  // ===== RECEITAS DE FRANGO (10 receitas) =====
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
    id: 'frango-teriyaki',
    name: 'Frango Teriyaki com Arroz',
    category: 'frango',
    ingredients: [
      { name: 'Coxa de frango', amount: 200, unit: 'g', category: 'proteina' },
      { name: 'Arroz japonês', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Shoyu', amount: 30, unit: 'ml', category: 'tempero' },
      { name: 'Açúcar mascavo', amount: 15, unit: 'g', category: 'outros' },
      { name: 'Gengibre', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Gergelim', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Cebolinha', amount: 10, unit: 'g', category: 'vegetal' }
    ],
    instructions: [
      'Misture shoyu, açúcar, gengibre e alho para o molho',
      'Marine o frango no molho por 30 minutos',
      'Grelhe o frango até dourar e cozinhar',
      'Pincele com o molho restante durante o cozimento',
      'Sirva sobre arroz e polvilhe gergelim e cebolinha'
    ],
    nutritionalInfo: {
      calories: 520,
      protein: 35,
      carbs: 42,
      fat: 18,
      fiber: 2
    },
    prepTime: 50,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'frango-parmegiana',
    name: 'Frango à Parmegiana',
    category: 'frango',
    ingredients: [
      { name: 'Peito de frango', amount: 180, unit: 'g', category: 'proteina' },
      { name: 'Macarrão penne', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Molho de tomate', amount: 120, unit: 'ml', category: 'outros' },
      { name: 'Queijo mussarela', amount: 80, unit: 'g', category: 'proteina' },
      { name: 'Farinha de rosca', amount: 40, unit: 'g', category: 'outros' },
      { name: 'Ovo', amount: 50, unit: 'g', category: 'proteina' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Óleo', amount: 50, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Bata o peito de frango até ficar fino',
      'Tempere com sal e pimenta',
      'Passe no ovo batido e depois na farinha de rosca',
      'Frite até dourar dos dois lados',
      'Cubra com molho de tomate e queijo, gratine'
    ],
    nutritionalInfo: {
      calories: 650,
      protein: 48,
      carbs: 42,
      fat: 28,
      fiber: 4
    },
    prepTime: 40,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'frango-curry',
    name: 'Frango ao Curry com Batatas',
    category: 'frango',
    ingredients: [
      { name: 'Peito de frango', amount: 180, unit: 'g', category: 'proteina' },
      { name: 'Batata', amount: 200, unit: 'g', category: 'carboidrato' },
      { name: 'Leite de coco', amount: 150, unit: 'ml', category: 'outros' },
      { name: 'Curry em pó', amount: 8, unit: 'g', category: 'tempero' },
      { name: 'Cebola', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Gengibre', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Óleo de coco', amount: 15, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Corte o frango em cubos e tempere',
      'Refogue cebola, alho e gengibre no óleo',
      'Adicione o curry e refogue por 1 minuto',
      'Acrescente o frango e doure',
      'Adicione batatas e leite de coco, cozinhe até amaciar'
    ],
    nutritionalInfo: {
      calories: 520,
      protein: 32,
      carbs: 35,
      fat: 22,
      fiber: 4
    },
    prepTime: 35,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'frango-grelhado-quinoa',
    name: 'Frango Grelhado com Quinoa',
    category: 'frango',
    ingredients: [
      { name: 'Peito de frango', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Quinoa', amount: 80, unit: 'g', category: 'carboidrato' },
      { name: 'Rúcula', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Tomate cereja', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Pepino', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Azeite extra virgem', amount: 15, unit: 'ml', category: 'outros' },
      { name: 'Limão', amount: 20, unit: 'ml', category: 'tempero' },
      { name: 'Orégano', amount: 2, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Cozinhe a quinoa em água fervente por 15 minutos',
      'Tempere o frango com sal, pimenta e orégano',
      'Grelhe o frango por 6-8 minutos cada lado',
      'Prepare uma salada com rúcula, tomate e pepino',
      'Sirva o frango sobre a quinoa com a salada'
    ],
    nutritionalInfo: {
      calories: 420,
      protein: 35,
      carbs: 32,
      fat: 12,
      fiber: 6
    },
    prepTime: 25,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'canja-frango',
    name: 'Canja de Frango Completa',
    category: 'frango',
    ingredients: [
      { name: 'Peito de frango', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Arroz', amount: 60, unit: 'g', category: 'carboidrato' },
      { name: 'Cenoura', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Aipo', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Cebola', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Salsa', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Caldo de galinha', amount: 500, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Cozinhe o frango no caldo até ficar macio',
      'Retire o frango, desfie e reserve',
      'No mesmo caldo, adicione cenoura, aipo e cebola picados',
      'Acrescente o arroz e cozinhe por 15 minutos',
      'Retorne o frango desfiado e finalize com salsa'
    ],
    nutritionalInfo: {
      calories: 380,
      protein: 30,
      carbs: 35,
      fat: 8,
      fiber: 3
    },
    prepTime: 40,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'frango-mostarda-mel',
    name: 'Frango com Mostarda e Mel',
    category: 'frango',
    ingredients: [
      { name: 'Coxa de frango', amount: 200, unit: 'g', category: 'proteina' },
      { name: 'Batata rústica', amount: 200, unit: 'g', category: 'carboidrato' },
      { name: 'Mostarda dijon', amount: 20, unit: 'ml', category: 'tempero' },
      { name: 'Mel', amount: 15, unit: 'ml', category: 'outros' },
      { name: 'Tomilho', amount: 2, unit: 'g', category: 'tempero' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Vinho branco', amount: 50, unit: 'ml', category: 'outros' },
      { name: 'Azeite', amount: 15, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Misture mostarda, mel, tomilho e alho',
      'Marine o frango nesta mistura por 20 minutos',
      'Asse o frango a 180°C por 25 minutos',
      'Corte as batatas e asse junto',
      'Regue com vinho branco na metade do tempo'
    ],
    nutritionalInfo: {
      calories: 550,
      protein: 35,
      carbs: 38,
      fat: 22,
      fiber: 4
    },
    prepTime: 50,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'frango-mexicano',
    name: 'Frango Mexicano com Feijão',
    category: 'frango',
    ingredients: [
      { name: 'Peito de frango', amount: 180, unit: 'g', category: 'proteina' },
      { name: 'Feijão preto', amount: 100, unit: 'g', category: 'proteina' },
      { name: 'Milho', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Pimentão vermelho', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Tomate', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Cominho', amount: 3, unit: 'g', category: 'tempero' },
      { name: 'Páprica', amount: 3, unit: 'g', category: 'tempero' },
      { name: 'Limão', amount: 20, unit: 'ml', category: 'tempero' }
    ],
    instructions: [
      'Tempere o frango com cominho, páprica e sal',
      'Grelhe o frango em cubos até dourar',
      'Refogue pimentão e tomate',
      'Adicione feijão cozido e milho',
      'Finalize com suco de limão'
    ],
    nutritionalInfo: {
      calories: 460,
      protein: 38,
      carbs: 35,
      fat: 12,
      fiber: 10
    },
    prepTime: 25,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'frango-coco-abacaxi',
    name: 'Frango Tropical com Coco e Abacaxi',
    category: 'frango',
    ingredients: [
      { name: 'Peito de frango', amount: 180, unit: 'g', category: 'proteina' },
      { name: 'Arroz de coco', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Abacaxi', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Leite de coco', amount: 100, unit: 'ml', category: 'outros' },
      { name: 'Cebola roxa', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Pimentão amarelo', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Gengibre', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Coentro', amount: 5, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Corte o frango em cubos e tempere',
      'Refogue cebola, pimentão e gengibre',
      'Adicione o frango e doure',
      'Acrescente abacaxi e leite de coco',
      'Cozinhe por 10 minutos e finalize com coentro'
    ],
    nutritionalInfo: {
      calories: 520,
      protein: 35,
      carbs: 40,
      fat: 20,
      fiber: 4
    },
    prepTime: 30,
    difficulty: 'médio',
    servings: 1
  },

  // ===== RECEITAS DE PEIXE (10 receitas) =====
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
    id: 'bacalhau-grao-bico',
    name: 'Bacalhau com Grão-de-bico',
    category: 'peixe',
    ingredients: [
      { name: 'Bacalhau dessalgado', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Grão-de-bico', amount: 100, unit: 'g', category: 'proteina' },
      { name: 'Batata', amount: 150, unit: 'g', category: 'carboidrato' },
      { name: 'Cebola', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Tomate', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Azeite extra virgem', amount: 20, unit: 'ml', category: 'outros' },
      { name: 'Alho', amount: 8, unit: 'g', category: 'tempero' },
      { name: 'Salsa', amount: 5, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Cozinhe as batatas até ficarem macias',
      'Deixe o grão-de-bico de molho e cozinhe',
      'Refogue cebola e alho no azeite',
      'Adicione tomate e deixe apurar',
      'Acrescente bacalhau, batatas e grão-de-bico',
      'Finalize com salsa picada'
    ],
    nutritionalInfo: {
      calories: 520,
      protein: 32,
      carbs: 45,
      fat: 18,
      fiber: 8
    },
    prepTime: 60,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'tilapia-crosta-ervas',
    name: 'Tilápia com Crosta de Ervas',
    category: 'peixe',
    ingredients: [
      { name: 'Filé de tilápia', amount: 180, unit: 'g', category: 'proteina' },
      { name: 'Arroz integral', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Farinha de rosca', amount: 30, unit: 'g', category: 'outros' },
      { name: 'Manjericão', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Orégano', amount: 2, unit: 'g', category: 'tempero' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Limão', amount: 20, unit: 'ml', category: 'tempero' },
      { name: 'Azeite', amount: 15, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Misture farinha de rosca com ervas e alho',
      'Tempere o peixe com limão e sal',
      'Cubra o filé com a mistura de ervas',
      'Regue com azeite e asse por 15 minutos',
      'Sirva com arroz integral'
    ],
    nutritionalInfo: {
      calories: 480,
      protein: 35,
      carbs: 38,
      fat: 16,
      fiber: 4
    },
    prepTime: 30,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'peixe-coco-camarao',
    name: 'Moqueca de Peixe com Camarão',
    category: 'peixe',
    ingredients: [
      { name: 'Filé de robalo', amount: 120, unit: 'g', category: 'proteina' },
      { name: 'Camarão', amount: 80, unit: 'g', category: 'proteina' },
      { name: 'Arroz branco', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Leite de coco', amount: 150, unit: 'ml', category: 'outros' },
      { name: 'Dendê', amount: 15, unit: 'ml', category: 'outros' },
      { name: 'Tomate', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Cebola', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Pimentão', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Coentro', amount: 5, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Tempere o peixe e camarão com limão',
      'Refogue cebola, tomate e pimentão',
      'Adicione leite de coco e dendê',
      'Coloque o peixe e cozinhe por 8 minutos',
      'Adicione camarão por mais 3 minutos',
      'Finalize com coentro e sirva com arroz'
    ],
    nutritionalInfo: {
      calories: 550,
      protein: 32,
      carbs: 40,
      fat: 24,
      fiber: 4
    },
    prepTime: 35,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'linguado-alcaparras',
    name: 'Linguado com Alcaparras',
    category: 'peixe',
    ingredients: [
      { name: 'Filé de linguado', amount: 180, unit: 'g', category: 'proteina' },
      { name: 'Batata bolinha', amount: 200, unit: 'g', category: 'carboidrato' },
      { name: 'Alcaparras', amount: 15, unit: 'g', category: 'tempero' },
      { name: 'Manteiga', amount: 20, unit: 'g', category: 'outros' },
      { name: 'Vinho branco', amount: 50, unit: 'ml', category: 'outros' },
      { name: 'Limão', amount: 20, unit: 'ml', category: 'tempero' },
      { name: 'Salsa', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Farinha de trigo', amount: 20, unit: 'g', category: 'outros' }
    ],
    instructions: [
      'Envolva o peixe na farinha temperada',
      'Doure na manteiga dos dois lados',
      'Cozinhe as batatas até ficarem macias',
      'Na mesma panela, adicione vinho e alcaparras',
      'Finalize com limão e salsa',
      'Sirva com as batatas'
    ],
    nutritionalInfo: {
      calories: 480,
      protein: 32,
      carbs: 35,
      fat: 18,
      fiber: 3
    },
    prepTime: 25,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'atum-selado-wakame',
    name: 'Atum Selado com Salada de Wakame',
    category: 'peixe',
    ingredients: [
      { name: 'Atum fresco', amount: 180, unit: 'g', category: 'proteina' },
      { name: 'Arroz para sushi', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Wakame', amount: 20, unit: 'g', category: 'vegetal' },
      { name: 'Pepino japonês', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Shoyu', amount: 20, unit: 'ml', category: 'tempero' },
      { name: 'Óleo de gergelim', amount: 10, unit: 'ml', category: 'outros' },
      { name: 'Gergelim preto', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Wasabi', amount: 3, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Tempere o atum com shoyu e gergelim',
      'Sele o atum rapidamente, mantendo cru por dentro',
      'Hidrate o wakame e misture com pepino',
      'Tempere a salada com óleo de gergelim',
      'Sirva o atum fatiado sobre o arroz',
      'Acompanhe com a salada e wasabi'
    ],
    nutritionalInfo: {
      calories: 420,
      protein: 35,
      carbs: 32,
      fat: 14,
      fiber: 3
    },
    prepTime: 20,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'dourado-crosta-coco',
    name: 'Dourado com Crosta de Coco',
    category: 'peixe',
    ingredients: [
      { name: 'Filé de dourado', amount: 180, unit: 'g', category: 'proteina' },
      { name: 'Arroz de jasmin', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Coco ralado', amount: 30, unit: 'g', category: 'outros' },
      { name: 'Farinha panko', amount: 25, unit: 'g', category: 'outros' },
      { name: 'Clara de ovo', amount: 30, unit: 'g', category: 'proteina' },
      { name: 'Manga', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Pimentão vermelho', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Limão', amount: 20, unit: 'ml', category: 'tempero' }
    ],
    instructions: [
      'Misture coco ralado com farinha panko',
      'Passe o peixe na clara e depois na mistura',
      'Asse por 12 minutos a 180°C',
      'Prepare uma salada com manga e pimentão',
      'Tempere com limão',
      'Sirva com arroz e a salada tropical'
    ],
    nutritionalInfo: {
      calories: 520,
      protein: 34,
      carbs: 45,
      fat: 18,
      fiber: 5
    },
    prepTime: 30,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'sardinha-mediterranea',
    name: 'Sardinha à Mediterrânea',
    category: 'peixe',
    ingredients: [
      { name: 'Sardinha fresca', amount: 200, unit: 'g', category: 'proteina' },
      { name: 'Batata', amount: 180, unit: 'g', category: 'carboidrato' },
      { name: 'Tomate', amount: 120, unit: 'g', category: 'vegetal' },
      { name: 'Azeitona preta', amount: 30, unit: 'g', category: 'outros' },
      { name: 'Cebola roxa', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Azeite extra virgem', amount: 20, unit: 'ml', category: 'outros' },
      { name: 'Orégano', amount: 3, unit: 'g', category: 'tempero' },
      { name: 'Limão', amount: 25, unit: 'ml', category: 'tempero' }
    ],
    instructions: [
      'Limpe as sardinhas e tempere com limão',
      'Corte batatas em fatias e asse',
      'Faça camadas com tomate, cebola e azeitona',
      'Coloque as sardinhas por cima',
      'Regue com azeite e polvilhe orégano',
      'Asse por 20 minutos'
    ],
    nutritionalInfo: {
      calories: 460,
      protein: 28,
      carbs: 32,
      fat: 22,
      fiber: 4
    },
    prepTime: 35,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'robalo-papillote',
    name: 'Robalo no Papillote',
    category: 'peixe',
    ingredients: [
      { name: 'Filé de robalo', amount: 180, unit: 'g', category: 'proteina' },
      { name: 'Batata doce', amount: 180, unit: 'g', category: 'carboidrato' },
      { name: 'Abobrinha', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Cenoura baby', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Vinho branco', amount: 30, unit: 'ml', category: 'outros' },
      { name: 'Azeite', amount: 15, unit: 'ml', category: 'outros' },
      { name: 'Tomilho', amount: 3, unit: 'g', category: 'tempero' },
      { name: 'Limão siciliano', amount: 20, unit: 'ml', category: 'tempero' }
    ],
    instructions: [
      'Corte os legumes em fatias finas',
      'Tempere o peixe com sal, tomilho e limão',
      'Monte o papillote com papel alumínio',
      'Coloque legumes, peixe e regue com vinho',
      'Feche bem e asse por 15 minutos',
      'Sirva no próprio papillote'
    ],
    nutritionalInfo: {
      calories: 420,
      protein: 32,
      carbs: 35,
      fat: 12,
      fiber: 6
    },
    prepTime: 25,
    difficulty: 'médio',
    servings: 1
  },

  // ===== RECEITAS VEGETARIANAS (10 receitas) =====
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
    id: 'risotto-cogumelos',
    name: 'Risotto de Cogumelos',
    category: 'vegetariano',
    ingredients: [
      { name: 'Arroz arbóreo', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Cogumelos variados', amount: 150, unit: 'g', category: 'vegetal' },
      { name: 'Queijo parmesão', amount: 40, unit: 'g', category: 'proteina' },
      { name: 'Caldo de legumes', amount: 400, unit: 'ml', category: 'outros' },
      { name: 'Vinho branco', amount: 50, unit: 'ml', category: 'outros' },
      { name: 'Cebola', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Manteiga', amount: 20, unit: 'g', category: 'outros' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Refogue cebola e alho na manteiga',
      'Adicione o arroz e doure levemente',
      'Acrescente vinho branco e deixe evaporar',
      'Adicione caldo quente aos poucos, mexendo sempre',
      'Refogue os cogumelos à parte',
      'Finalize com cogumelos e parmesão'
    ],
    nutritionalInfo: {
      calories: 520,
      protein: 16,
      carbs: 72,
      fat: 18,
      fiber: 4
    },
    prepTime: 35,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'quiche-espinafre',
    name: 'Quiche de Espinafre e Queijo',
    category: 'vegetariano',
    ingredients: [
      { name: 'Massa de torta', amount: 120, unit: 'g', category: 'carboidrato' },
      { name: 'Espinafre', amount: 150, unit: 'g', category: 'vegetal' },
      { name: 'Ovos', amount: 100, unit: 'g', category: 'proteina' },
      { name: 'Creme de leite', amount: 100, unit: 'ml', category: 'outros' },
      { name: 'Queijo gruyère', amount: 80, unit: 'g', category: 'proteina' },
      { name: 'Cebola', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Noz-moscada', amount: 1, unit: 'g', category: 'tempero' },
      { name: 'Manteiga', amount: 15, unit: 'g', category: 'outros' }
    ],
    instructions: [
      'Forre uma forma com a massa de torta',
      'Refogue espinafre e cebola na manteiga',
      'Bata ovos com creme de leite e noz-moscada',
      'Espalhe espinafre sobre a massa',
      'Despeje a mistura de ovos e polvilhe queijo',
      'Asse por 30 minutos a 180°C'
    ],
    nutritionalInfo: {
      calories: 480,
      protein: 22,
      carbs: 32,
      fat: 28,
      fiber: 4
    },
    prepTime: 45,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'pasta-molho-pesto',
    name: 'Pasta com Molho Pesto',
    category: 'vegetariano',
    ingredients: [
      { name: 'Macarrão penne', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Manjericão fresco', amount: 40, unit: 'g', category: 'tempero' },
      { name: 'Pinhão', amount: 25, unit: 'g', category: 'outros' },
      { name: 'Queijo parmesão', amount: 40, unit: 'g', category: 'proteina' },
      { name: 'Azeite extra virgem', amount: 30, unit: 'ml', category: 'outros' },
      { name: 'Alho', amount: 8, unit: 'g', category: 'tempero' },
      { name: 'Tomate cereja', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Mussarela de búfala', amount: 60, unit: 'g', category: 'proteina' }
    ],
    instructions: [
      'Cozinhe o macarrão al dente',
      'Faça o pesto: bata manjericão, pinhão, alho e azeite',
      'Adicione parmesão ao pesto',
      'Misture o macarrão com o pesto',
      'Adicione tomates cereja cortados',
      'Finalize com mussarela de búfala'
    ],
    nutritionalInfo: {
      calories: 580,
      protein: 24,
      carbs: 48,
      fat: 32,
      fiber: 4
    },
    prepTime: 20,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'ratatouille-quinoa',
    name: 'Ratatouille com Quinoa',
    category: 'vegetariano',
    ingredients: [
      { name: 'Quinoa', amount: 80, unit: 'g', category: 'carboidrato' },
      { name: 'Berinjela', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Abobrinha', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Pimentão vermelho', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Tomate', amount: 120, unit: 'g', category: 'vegetal' },
      { name: 'Cebola', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Alho', amount: 8, unit: 'g', category: 'tempero' },
      { name: 'Tomilho', amount: 3, unit: 'g', category: 'tempero' },
      { name: 'Azeite', amount: 20, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Corte todos os legumes em cubos médios',
      'Refogue cebola e alho no azeite',
      'Adicione berinjela e pimentão, cozinhe 5 minutos',
      'Acrescente abobrinha e tomate',
      'Tempere com tomilho, sal e pimenta',
      'Cozinhe quinoa e sirva com o ratatouille'
    ],
    nutritionalInfo: {
      calories: 380,
      protein: 12,
      carbs: 52,
      fat: 14,
      fiber: 10
    },
    prepTime: 30,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'salada-caprese-quinoa',
    name: 'Salada Caprese com Quinoa',
    category: 'vegetariano',
    ingredients: [
      { name: 'Quinoa', amount: 80, unit: 'g', category: 'carboidrato' },
      { name: 'Tomate italiano', amount: 150, unit: 'g', category: 'vegetal' },
      { name: 'Mussarela de búfala', amount: 100, unit: 'g', category: 'proteina' },
      { name: 'Manjericão fresco', amount: 10, unit: 'g', category: 'tempero' },
      { name: 'Rúcula', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Azeite extra virgem', amount: 20, unit: 'ml', category: 'outros' },
      { name: 'Vinagre balsâmico', amount: 10, unit: 'ml', category: 'tempero' },
      { name: 'Pinhão tostado', amount: 20, unit: 'g', category: 'outros' }
    ],
    instructions: [
      'Cozinhe a quinoa e deixe esfriar',
      'Corte tomates e mussarela em fatias',
      'Monte a salada intercalando tomate e queijo',
      'Misture quinoa com rúcula',
      'Regue com azeite e vinagre balsâmico',
      'Finalize com manjericão e pinhão'
    ],
    nutritionalInfo: {
      calories: 520,
      protein: 22,
      carbs: 38,
      fat: 28,
      fiber: 6
    },
    prepTime: 20,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'wrap-hummus-legumes',
    name: 'Wrap de Hummus com Legumes',
    category: 'vegetariano',
    ingredients: [
      { name: 'Tortilla integral', amount: 80, unit: 'g', category: 'carboidrato' },
      { name: 'Hummus', amount: 60, unit: 'g', category: 'proteina' },
      { name: 'Pepino', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Cenoura ralada', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Pimentão amarelo', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Folhas verdes', amount: 40, unit: 'g', category: 'vegetal' },
      { name: 'Tomate seco', amount: 20, unit: 'g', category: 'vegetal' },
      { name: 'Queijo feta', amount: 40, unit: 'g', category: 'proteina' }
    ],
    instructions: [
      'Espalhe hummus sobre a tortilla',
      'Corte pepino e pimentão em tiras',
      'Distribua todos os legumes sobre o hummus',
      'Adicione folhas verdes e tomate seco',
      'Polvilhe queijo feta esfarelado',
      'Enrole firmemente e corte ao meio'
    ],
    nutritionalInfo: {
      calories: 420,
      protein: 18,
      carbs: 45,
      fat: 16,
      fiber: 8
    },
    prepTime: 10,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'pizza-margherita-caseira',
    name: 'Pizza Margherita Caseira',
    category: 'vegetariano',
    ingredients: [
      { name: 'Massa de pizza', amount: 150, unit: 'g', category: 'carboidrato' },
      { name: 'Molho de tomate', amount: 80, unit: 'ml', category: 'outros' },
      { name: 'Mussarela fresca', amount: 100, unit: 'g', category: 'proteina' },
      { name: 'Tomate italiano', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Manjericão fresco', amount: 8, unit: 'g', category: 'tempero' },
      { name: 'Azeite extra virgem', amount: 15, unit: 'ml', category: 'outros' },
      { name: 'Orégano', amount: 2, unit: 'g', category: 'tempero' },
      { name: 'Alho', amount: 3, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Abra a massa em uma forma redonda',
      'Espalhe molho de tomate temperado com alho',
      'Distribua fatias de mussarela e tomate',
      'Polvilhe orégano e regue com azeite',
      'Asse em forno bem quente por 12-15 minutos',
      'Finalize com manjericão fresco'
    ],
    nutritionalInfo: {
      calories: 580,
      protein: 24,
      carbs: 58,
      fat: 26,
      fiber: 4
    },
    prepTime: 25,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'gnocchi-molho-gorgonzola',
    name: 'Gnocchi ao Molho de Gorgonzola',
    category: 'vegetariano',
    ingredients: [
      { name: 'Gnocchi de batata', amount: 150, unit: 'g', category: 'carboidrato' },
      { name: 'Queijo gorgonzola', amount: 60, unit: 'g', category: 'proteina' },
      { name: 'Creme de leite', amount: 100, unit: 'ml', category: 'outros' },
      { name: 'Nozes', amount: 30, unit: 'g', category: 'outros' },
      { name: 'Rúcula', amount: 40, unit: 'g', category: 'vegetal' },
      { name: 'Manteiga', amount: 15, unit: 'g', category: 'outros' },
      { name: 'Parmesão', amount: 20, unit: 'g', category: 'proteina' },
      { name: 'Pimenta do reino', amount: 1, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Cozinhe o gnocchi em água fervente até subir',
      'Derreta manteiga em uma panela',
      'Adicione gorgonzola e creme de leite',
      'Misture até formar molho cremoso',
      'Adicione gnocchi e nozes picadas',
      'Sirva com rúcula e parmesão'
    ],
    nutritionalInfo: {
      calories: 620,
      protein: 22,
      carbs: 48,
      fat: 38,
      fiber: 3
    },
    prepTime: 20,
    difficulty: 'fácil',
    servings: 1
  },

  // ===== RECEITAS VEGANAS (10 receitas) =====
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
  },
  {
    id: 'lentilha-bolonhesa',
    name: 'Molho Bolonhesa de Lentilha',
    category: 'vegano',
    ingredients: [
      { name: 'Macarrão integral', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Lentilha vermelha', amount: 100, unit: 'g', category: 'proteina' },
      { name: 'Molho de tomate', amount: 150, unit: 'ml', category: 'outros' },
      { name: 'Cenoura', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Aipo', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Cebola', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Alho', amount: 8, unit: 'g', category: 'tempero' },
      { name: 'Manjericão', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Azeite', amount: 15, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Refogue cebola, cenoura e aipo picados',
      'Adicione alho e refogue mais um pouco',
      'Acrescente lentilha e molho de tomate',
      'Adicione água e cozinhe por 20 minutos',
      'Tempere com manjericão, sal e pimenta',
      'Sirva sobre o macarrão cozido'
    ],
    nutritionalInfo: {
      calories: 480,
      protein: 18,
      carbs: 68,
      fat: 12,
      fiber: 16
    },
    prepTime: 35,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'tofu-legumes-asiatico',
    name: 'Tofu com Legumes Asiáticos',
    category: 'vegano',
    ingredients: [
      { name: 'Tofu firme', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Arroz integral', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Brócolis', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Pimentão vermelho', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Cogumelo shiitake', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Shoyu', amount: 20, unit: 'ml', category: 'tempero' },
      { name: 'Óleo de gergelim', amount: 10, unit: 'ml', category: 'outros' },
      { name: 'Gengibre', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Corte o tofu em cubos e doure no óleo',
      'Refogue alho e gengibre',
      'Adicione brócolis e pimentão',
      'Acrescente cogumelos e shoyu',
      'Misture o tofu dourado',
      'Sirva sobre arroz integral'
    ],
    nutritionalInfo: {
      calories: 420,
      protein: 20,
      carbs: 45,
      fat: 16,
      fiber: 8
    },
    prepTime: 25,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'chili-feijao-vegano',
    name: 'Chili de Feijão Vegano',
    category: 'vegano',
    ingredients: [
      { name: 'Feijão vermelho', amount: 120, unit: 'g', category: 'proteina' },
      { name: 'Arroz integral', amount: 80, unit: 'g', category: 'carboidrato' },
      { name: 'Tomate em cubos', amount: 150, unit: 'g', category: 'vegetal' },
      { name: 'Pimentão', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Milho', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Cebola', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Cominho', amount: 3, unit: 'g', category: 'tempero' },
      { name: 'Páprica', amount: 3, unit: 'g', category: 'tempero' },
      { name: 'Óleo', amount: 15, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Refogue cebola e pimentão no óleo',
      'Adicione temperos e refogue por 1 minuto',
      'Acrescente tomate e feijão cozido',
      'Adicione milho e deixe apurar',
      'Cozinhe por 15 minutos mexendo ocasionalmente',
      'Sirva com arroz integral'
    ],
    nutritionalInfo: {
      calories: 440,
      protein: 16,
      carbs: 62,
      fat: 12,
      fiber: 18
    },
    prepTime: 30,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'pad-thai-vegano',
    name: 'Pad Thai Vegano',
    category: 'vegano',
    ingredients: [
      { name: 'Macarrão de arroz', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Tofu', amount: 100, unit: 'g', category: 'proteina' },
      { name: 'Broto de feijão', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Cenoura', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Amendoim', amount: 30, unit: 'g', category: 'outros' },
      { name: 'Molho de tamarindo', amount: 20, unit: 'ml', category: 'tempero' },
      { name: 'Shoyu', amount: 15, unit: 'ml', category: 'tempero' },
      { name: 'Açúcar de coco', amount: 10, unit: 'g', category: 'outros' },
      { name: 'Limão', amount: 15, unit: 'ml', category: 'tempero' }
    ],
    instructions: [
      'Hidrate o macarrão de arroz em água morna',
      'Corte tofu em cubos e doure',
      'Refogue cenoura em tiras finas',
      'Misture molho de tamarindo, shoyu e açúcar',
      'Adicione macarrão, tofu e molho',
      'Finalize com broto de feijão, amendoim e limão'
    ],
    nutritionalInfo: {
      calories: 520,
      protein: 18,
      carbs: 58,
      fat: 22,
      fiber: 6
    },
    prepTime: 25,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'hamburguer-feijao-preto',
    name: 'Hambúrguer de Feijão Preto',
    category: 'vegano',
    ingredients: [
      { name: 'Feijão preto', amount: 150, unit: 'g', category: 'proteina' },
      { name: 'Pão de hambúrguer', amount: 80, unit: 'g', category: 'carboidrato' },
      { name: 'Aveia em flocos', amount: 30, unit: 'g', category: 'carboidrato' },
      { name: 'Cebola', amount: 50, unit: 'g', category: 'vegetal' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Cominho', amount: 2, unit: 'g', category: 'tempero' },
      { name: 'Alface', amount: 30, unit: 'g', category: 'vegetal' },
      { name: 'Tomate', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Molho barbecue vegano', amount: 20, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Amasse o feijão deixando alguns pedaços',
      'Misture com aveia, cebola, alho e cominho',
      'Tempere com sal e pimenta',
      'Forme hambúrgueres e grelhe',
      'Monte o sanduíche com alface e tomate',
      'Finalize com molho barbecue'
    ],
    nutritionalInfo: {
      calories: 480,
      protein: 18,
      carbs: 68,
      fat: 12,
      fiber: 16
    },
    prepTime: 25,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'falafel-tahine',
    name: 'Falafel com Molho de Tahine',
    category: 'vegano',
    ingredients: [
      { name: 'Grão-de-bico seco', amount: 120, unit: 'g', category: 'proteina' },
      { name: 'Pão pita', amount: 80, unit: 'g', category: 'carboidrato' },
      { name: 'Tahine', amount: 30, unit: 'ml', category: 'outros' },
      { name: 'Salsa', amount: 10, unit: 'g', category: 'tempero' },
      { name: 'Coentro', amount: 10, unit: 'g', category: 'tempero' },
      { name: 'Cebola', amount: 40, unit: 'g', category: 'vegetal' },
      { name: 'Alho', amount: 8, unit: 'g', category: 'tempero' },
      { name: 'Limão', amount: 20, unit: 'ml', category: 'tempero' },
      { name: 'Óleo', amount: 30, unit: 'ml', category: 'outros' }
    ],
    instructions: [
      'Deixe grão-de-bico de molho por 12 horas',
      'Processe grão-de-bico com ervas, cebola e alho',
      'Forme bolinhas e frite até dourar',
      'Misture tahine com limão e água para o molho',
      'Aqueça o pão pita',
      'Sirva falafel no pita com molho'
    ],
    nutritionalInfo: {
      calories: 580,
      protein: 20,
      carbs: 52,
      fat: 32,
      fiber: 14
    },
    prepTime: 45,
    difficulty: 'médio',
    servings: 1
  },
  {
    id: 'sopa-abobora-coco',
    name: 'Sopa de Abóbora com Leite de Coco',
    category: 'vegano',
    ingredients: [
      { name: 'Abóbora cabotiá', amount: 250, unit: 'g', category: 'vegetal' },
      { name: 'Leite de coco', amount: 150, unit: 'ml', category: 'outros' },
      { name: 'Cebola', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Gengibre', amount: 8, unit: 'g', category: 'tempero' },
      { name: 'Alho', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Caldo de legumes', amount: 300, unit: 'ml', category: 'outros' },
      { name: 'Azeite', amount: 15, unit: 'ml', category: 'outros' },
      { name: 'Sementes de abóbora', amount: 20, unit: 'g', category: 'outros' },
      { name: 'Pão integral', amount: 50, unit: 'g', category: 'carboidrato' }
    ],
    instructions: [
      'Asse a abóbora em cubos até amaciar',
      'Refogue cebola, alho e gengibre',
      'Adicione abóbora e caldo de legumes',
      'Cozinhe por 15 minutos e bata no liquidificador',
      'Adicione leite de coco e ajuste temperos',
      'Sirva com sementes tostadas e pão'
    ],
    nutritionalInfo: {
      calories: 420,
      protein: 10,
      carbs: 45,
      fat: 22,
      fiber: 8
    },
    prepTime: 35,
    difficulty: 'fácil',
    servings: 1
  },
  {
    id: 'stir-fry-cogumelos',
    name: 'Stir-fry de Cogumelos e Vegetais',
    category: 'vegano',
    ingredients: [
      { name: 'Macarrão soba', amount: 100, unit: 'g', category: 'carboidrato' },
      { name: 'Cogumelos variados', amount: 150, unit: 'g', category: 'vegetal' },
      { name: 'Pak choi', amount: 100, unit: 'g', category: 'vegetal' },
      { name: 'Pimentão', amount: 80, unit: 'g', category: 'vegetal' },
      { name: 'Cenoura', amount: 60, unit: 'g', category: 'vegetal' },
      { name: 'Shoyu', amount: 25, unit: 'ml', category: 'tempero' },
      { name: 'Óleo de gergelim', amount: 15, unit: 'ml', category: 'outros' },
      { name: 'Gengibre', amount: 5, unit: 'g', category: 'tempero' },
      { name: 'Gergelim', amount: 10, unit: 'g', category: 'tempero' }
    ],
    instructions: [
      'Cozinhe o macarrão soba al dente',
      'Corte todos os vegetais em tiras',
      'Aqueça o wok e adicione óleo',
      'Refogue gengibre, depois cogumelos',
      'Adicione outros vegetais e shoyu',
      'Misture com macarrão e finalize com gergelim'
    ],
    nutritionalInfo: {
      calories: 460,
      protein: 16,
      carbs: 58,
      fat: 18,
      fiber: 8
    },
    prepTime: 20,
    difficulty: 'fácil',
    servings: 1
  }
];

export const getRecipesByCategory = (category: RecipeCategory): Recipe[] => {
  return recipes.filter(recipe => recipe.category === category);
};

export const getRandomRecipe = (): Recipe => {
  return recipes[Math.floor(Math.random() * recipes.length)];
};

export const getRandomRecipeByCategory = (category: RecipeCategory): Recipe => {
  const categoryRecipes = getRecipesByCategory(category);
  return categoryRecipes[Math.floor(Math.random() * categoryRecipes.length)];
};
