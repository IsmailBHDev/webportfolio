const menuItems = [
  // Entrées & Accompagnements
  {
    name: "Calamars Panés",
    category: "Entrées",
    price: "18.99",
    description: "Frites, calamars frits."
  },
  {
    name: "Crevettes Panées",
    category: "Entrées",
    price: "18.99",
    description: "Frites, crevettes frites."
  },
  {
    name: "Fish & Chips Maison",
    category: "Entrées",
    price: "21.99",
    description: "Tilapia, sole, morue, basa ou merlan."
  },
  {
    name: "Bâton Fromage",
    category: "Entrées",
    price: "7.99",
    description: "5 pièces de bâton mozzarella."
  },
  {
    name: "Rondelle d’Oignon",
    category: "Entrées",
    price: "7.99",
    description: "Rondelles d’oignon croustillantes."
  },

  // Salades
  {
    name: "Salade Poulpe",
    category: "Salades",
    price: "22.99",
    description: "Poulpe grillé, persil, oignon, tomates."
  },
  {
    name: "Salade Corail",
    category: "Salades",
    price: "15.99",
    description: "Laitue, oignon, tomates, concombre, sauce maison."
  },

  // Riz
  {
    name: "Riz aux Fruits de Mer",
    category: "Riz",
    price: "24.99",
    description: "Riz, légumes, crevettes, moules, octopus, calamars."
  },
  {
    name: "Riz Corail",
    category: "Riz",
    price: "14.99",
    description: "Riz et légumes."
  },

  // Pâtes
  {
    name: "Pasta Crevette",
    category: "Pâtes",
    price: "24.99",
    description: "Pâtes, crevettes, sauce crème."
  },
  {
    name: "Pasta Moules",
    category: "Pâtes",
    price: "28.99",
    description: "Pâtes, moules, sauce crème."
  },

  // Bols Signature
  {
    name: "Bol Crevettes Rouge",
    category: "Bols Signature",
    price: "18.99",
    description: "Riz, salade, maïs, cornichon, tomate, concombre, mayo épicée, fromage, 2 brochettes crevettes."
  },
  {
    name: "Mix Crevettes",
    category: "Bols Signature",
    price: "28.99",
    description: "Crevettes sautées, patates, salade, riz."
  },

  // Fritures
  {
    name: "Mix Frit",
    category: "Fritures",
    price: "18.99",
    description: "Calamar, crevettes, patates."
  },
  {
    name: "Baby Combo",
    category: "Fritures",
    price: "15.99",
    description: "Calamar ou crevettes, patates douces, bâton mozzarella, boissons."
  },

  // Plateaux
  {
    name: "Le Pêcheur 2P",
    category: "Plateaux",
    price: "59.99",
    description: "Poisson au choix, moules, crevettes, crab bleu."
  },
  {
    name: "Mix Corail 3P",
    category: "Plateaux",
    price: "89.99",
    description: "Crawfish, moules, crab bleu, crevettes, salade, riz, patates."
  },
  {
    name: "Marina Corail 4P",
    category: "Plateaux",
    price: "239.99",
    description: "Homard, crab, calamari, moules, poisson grillé, filet de poisson, salade, riz, patates et 5 boissons incluses."
  },

  // Spécialités
  {
    name: "Plat Homard",
    category: "Spécialités",
    price: "71.99",
    description: "3 pièces avec accompagnements, frites, salade de chou, sauce maison, citron."
  },
  {
    name: "Sandwich aux Crevettes",
    category: "Spécialités",
    price: "13.99",
    description: "7 pièces de crevettes avec sauce maison."
  },
  {
    name: "Mix Royale",
    category: "Spécialités",
    price: "58.99",
    description: "Poisson grillé, calamar frit, crevettes sautées, salade, riz, patates."
  },

  // Boissons
  {
    name: "Coca-Cola",
    category: "Boissons",
    price: "2.79",
    description: "Boisson gazeuse."
  },
  {
    name: "Sprite",
    category: "Boissons",
    price: "2.79",
    description: "Boisson gazeuse."
  },
  {
    name: "Crush",
    category: "Boissons",
    price: "2.79",
    description: "Boisson gazeuse."
  },
  {
    name: "Canada Dry",
    category: "Boissons",
    price: "2.79",
    description: "Boisson gazeuse."
  },
  {
    name: "Eau Gazeuse",
    category: "Boissons",
    price: "3.49",
    description: "Eau gazeuse."
  }
];

const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");

function displayMenu(items) {
  menuGrid.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("article");
    card.className = "menu-card";

    card.innerHTML = `
      <div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <span class="price">${item.price}$</span>
    `;

    menuGrid.appendChild(card);
  });
}

function filterMenu(category, button) {
  document.querySelectorAll(".categories button").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

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