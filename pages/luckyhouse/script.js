const menuItems = [
  // Featured
{
    name: "General Tao's Chicken",
    category: "Chicken",
    image: "img/General Tao's Chicken.jpg",
    price: "17.95",
    spicy: true,
    description: "Crispy chicken tossed in a sweet and spicy house sauce."
},  
{ name: "Crispy Beef", category: "Featured",
        image: "img/crispy.jpg",
 price: "17.95", spicy: true, description: "Crispy beef with house sauce." },
  { name: "Sweet & Sour Chicken Balls", category: "Featured",image: "img/Kung Pao Shrimp.jpg", price: "17.25", spicy: false, description: "Classic chicken balls with sweet & sour sauce." },

  // Side Orders
  { name: "Egg Roll", category: "Appetizers", image: "img/Egg Rolls.jpg", price: "2.35", spicy: false, description: "Classic Chinese egg roll." },
  { name: "Spring Roll", category: "Appetizers",image: "img/Egg Rolls.jpg", price: "2.95", spicy: false, description: "Crispy vegetarian spring roll." },
  { name: "Fried Wonton", category: "Appetizers",image: "img/Egg Rolls.jpg", price: "8.75", spicy: false, description: "Crispy fried wontons." },
  { name: "French Fries", category: "Appetizers",image: "img/Egg Rolls.jpg", price: "6.95", spicy: false, description: "Golden fries." },

  // Soups
  { name: "Wonton Soup", category: "Soups",image: "img/Egg Rolls.jpg", price: "6.75", spicy: false, description: "Traditional wonton soup." },
  { name: "Hot & Sour Soup", category: "Soups",image: "img/Egg Rolls.jpg", price: "6.75", spicy: true, description: "Spicy and tangy soup." },
  { name: "Chicken Rice Soup", category: "Soups",image: "img/Egg Rolls.jpg", price: "6.25", spicy: false, description: "Chicken soup with rice." },
  { name: "Chicken Mushroom Soup", category: "Soups",image: "img/Egg Rolls.jpg", price: "6.25", spicy: false, description: "Chicken soup with mushrooms." },

  // Fried Rice
  { name: "Chicken Fried Rice", category: "Fried Rice", price: "9.25", spicy: false, description: "Fried rice with chicken." },
  { name: "Beef Fried Rice", category: "Fried Rice", price: "9.95", spicy: false, description: "Fried rice with beef." },
  { name: "Shrimp Fried Rice", category: "Fried Rice", price: "13.45", spicy: false, description: "Fried rice with shrimp." },
  { name: "House Fried Rice", category: "Fried Rice", price: "13.45", spicy: false, description: "House special fried rice." },

  // Chicken
  { name: "Chicken with Broccoli", category: "Chicken", price: "15.95", spicy: false, description: "Chicken with fresh broccoli." },
  { name: "Chicken with Black Bean Sauce", category: "Chicken", price: "15.95", spicy: false, description: "Chicken cooked in black bean sauce." },
  { name: "Chicken with Orange Flavour", category: "Chicken", price: "17.95", spicy: true, description: "Orange-flavoured chicken." },
  { name: "Chicken with Spicy Sauce", category: "Chicken", price: "15.95", spicy: true, description: "Chicken with spicy sauce." },

  // Beef
  { name: "Ginger Beef", category: "Beef", price: "19.30", spicy: true, description: "Beef with ginger sauce." },
  { name: "Beef with Broccoli", category: "Beef", price: "16.95", spicy: false, description: "Beef with broccoli." },
  { name: "Beef with Green Pepper", category: "Beef", price: "16.95", spicy: false, description: "Beef with green pepper." },
  { name: "Beef with Black Bean Sauce", category: "Beef", price: "16.95", spicy: false, description: "Beef with black bean sauce." },

  // Seafood
  { name: "Butterfly Shrimps", category: "Seafood", price: "18.95", spicy: false, description: "Crispy butterfly shrimps." },
  { name: "Kung Pao Shrimps", category: "Seafood", price: "18.95", spicy: true, description: "Spicy Kung Pao shrimps." },
  { name: "Curried Shrimps", category: "Seafood", price: "17.95", spicy: true, description: "Shrimps in curry sauce." },
  { name: "Shrimps with Broccoli", category: "Seafood", price: "17.95", spicy: false, description: "Shrimps with broccoli." },

  // Combos
  { name: "Combination Plate No.1", category: "Combos", price: "17.95", spicy: false, description: "Egg roll, sweet & sour chicken balls, chicken chop suey, chicken fried rice." },
  { name: "Combination Plate No.2", category: "Combos", price: "17.95", spicy: false, description: "Egg roll, garlic spare ribs, chicken chop suey, chicken fried rice." },
  { name: "Combination Plate No.5", category: "Combos", price: "17.95", spicy: false, description: "Egg roll, pineapple chicken balls, chicken chop suey, chicken fried rice." },

  // Family Dinners
  { name: "Dinner For Two", category: "Family Dinners", price: "44.25", spicy: false, description: "2 egg rolls, chicken balls, chicken chow mein, chicken fried rice, almond cookies." },
  { name: "Dinner For Four", category: "Family Dinners", price: "82.95", spicy: false, description: "4 egg rolls, almond chicken guy ding, garlic spare ribs, chicken chow mein, chicken balls, fried rice." },
  { name: "Dinner For Six", category: "Family Dinners", price: "136.95", spicy: false, description: "Six egg rolls, chicken balls, almond chicken soo guy, shrimps har ding, ribs, chop suey, chow mein, fried rice." }
];

const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");

function displayMenu(items) {
  menuGrid.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";

    card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    
    <div class="menu-content">
        <h3>${item.name}</h3>

        <p>${item.description}</p>

        ${item.spicy ? '<span class="spicy">🌶 Spicy</span>' : ''}

        <strong>$${item.price}</strong>
    </div>
`;

    menuGrid.appendChild(card);
  });
}

function filterMenu(category) {
  document.querySelectorAll(".categories button").forEach(btn => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");

  if (category === "All") {
    displayMenu(menuItems);
  } else {
    displayMenu(menuItems.filter(item => item.category === category));
  }
}

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchText) ||
    item.description.toLowerCase().includes(searchText) ||
    item.category.toLowerCase().includes(searchText)
  );

  displayMenu(filteredItems);
});

displayMenu(menuItems);