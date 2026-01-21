// Recipe data - Foundation for all 4 parts
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta"
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry"
    },
    {
        id: 3,
        title: "Vegetable Stir-Fry",
        time: 20,
        difficulty: "easy",
        description: "A quick and healthy mix of vegetables sautéed in a savory sauce.",
        category: "vegetarian"
    },
    {
        id: 4,
        title: "Beef Wellington",
        time: 90,
        difficulty: "hard",
        description: "A luxurious dish of beef tenderloin coated with pâté and duxelles, wrapped in puff pastry.",
        category: "meat"
    },
    {
        id: 5,
        title: "Chocolate Lava Cake",
        time: 30,
        difficulty: "medium",
        description: "A rich chocolate cake with a gooey molten center.",
        category: "dessert"
    },
    {
        id: 6,
        title: "Mushroom Risotto",
        time: 35,
        difficulty: "medium",
        description: "Creamy arborio rice cooked slowly with mushrooms and parmesan cheese.",
        category: "vegetarian"
    },
    {
        id: 7,
        title: "Fish and Chips",
        time: 40,
        difficulty: "easy",
        description: "Crispy battered fish served with thick-cut chips.",
        category: "seafood"
    },
    {
        id: 8,
        title: "Vegetable Lasagna",
        time: 60,
        difficulty: "medium",
        description: "Layers of pasta, vegetables, and cheese baked to perfection.",
        category: "vegetarian"
    },
    {
        id: 9,
        title: "Beef Tacos",
        time: 25,
        difficulty: "easy",
        description: "Spicy seasoned beef in soft corn tortillas with fresh toppings.",
        category: "meat"
    },
    {
        id: 10,
        title: "Berry Smoothie Bowl",
        time: 10,
        difficulty: "easy",
        description: "A refreshing blend of berries topped with granola and fresh fruit.",
        category: "breakfast"
    },
    {
        id: 11,
        title: "Lemon Garlic Shrimp",
        time: 20,   
        difficulty: "easy",
        description: "Juicy shrimp sautéed in a zesty lemon garlic sauce.",
        category: "seafood"
    },
    {
        id: 12,
        title: "Chicken Parmesan",
        time: 45,
        difficulty: "medium",
        description: "Breaded chicken breast topped with marinara sauce and melted mozzarella.",
        category: "meat"
    },
    {
        id: 13,
        title: "Quinoa Salad",
        time: 20,
        difficulty: "easy",
        description: "A healthy and colorful salad made with quinoa, vegetables, and a light vinaigrette.",
        category: "vegetarian"
    },
    {
        id: 14,
        title: "Beef Lasagna",
        time: 70,
        difficulty: "medium",
        description: "Layers of pasta, ground beef, and cheese baked to perfection.",
        category: "meat"
    },
    {
        id: 15,
        title: "Pancakes",
        time: 20,
        difficulty: "easy",
        description: "Fluffy pancakes served with syrup and butter.",
        category: "breakfast"
    },
    {
        id: 16,
        title: "Vegetable Soup",
        time: 30,
        difficulty: "easy",
        description: "A hearty soup made with a variety of fresh vegetables.",
        category: "vegetarian"
    }
];
// DOM Selection - Get the container where recipes will be displayed
const recipeContainer = document.querySelector('#recipe-container');
console.log(recipeContainer);
// Function to create HTML for a single recipe card
const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <p>${recipe.description}</p>
        </div>
    `;
};
console.log(createRecipeCard(recipes[0]));
// Function to render recipes to the DOM
const renderRecipes = (recipesToRender) => {
    const recipeCardsHTML = recipesToRender
        .map(createRecipeCard)
        .join('');
    
    recipeContainer.innerHTML = recipeCardsHTML;
};
// Initialize: Render all recipes when page loads
renderRecipes(recipes);