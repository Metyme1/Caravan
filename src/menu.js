import React from 'react';

const menuSections = [
  {
    title: "1. Breakfast",
    image: './assets/room2.jpg',
    items: [
      { name: "Scramble - Egg", price: 200 },
      { name: "Omelet", price: 150 },
      { name: "Bold - Egg", price: 170 },
      { name: "Melewaa", price: 150 },
      { name: "Fittra", price: 180 },
      { name: "Cecbesaa - With Oil", price: 250 },
      { name: "Cecbesaa - With Better", price: 250 },
      { name: "Fasting Fittra", price: 170 },
      { name: "Oncee", price: 150 },
      { name: "Bullaa - With Oil", price: 180 },
      { name: "Bullaa - With Better", price: 250 },
      { name: "Foul", price: 350 },
      { name: "Special Foul", price: 200 },
      { name: "Special Foul Combo", price: 400 },
      { name: "Dullet", price: 320 },
    ],
  },
  {
    title: "2. Lunch and Dinner",
    image: "path/to/lunch-dinner-image.jpg", // Replace with actual image path or URL
    items: [
      { name: "Special - Carnival - Combo", price: 1500 },
      { name: "Special - Goat", price: 450 },
      { name: "Goat", price: 400 },
      { name: "Rice - Normal", price: 350 },
      { name: "Rice with Meat", price: 280 },
      { name: "Rice with Chicken", price: 300 },
      { name: "Rice with Fish", price: 800 },
      { name: "Spaghetti with Bolonaze Sauce", price: 450 },
      { name: "Spaghetti with Meat", price: 400 },
      { name: "Spaghetti with Cheese", price: 350 },
      { name: "Spaghetti with Vegetable", price: 250 },
      { name: "Spaghetti with Meat and Cheese", price: 600 },
      { name: "Spaghetti with Vegetable and Meat", price: 400 },
    ],
  },
  {
    title: "3. Burger Dish",
    image: "path/to/burger-image.jpg", // Replace with actual image path or URL
    items: [
      { name: "Carnival Special Burger", price: 450 },
      { name: "Normal Burger", price: 400 },
      { name: "Cheese Burger", price: 280 },
      { name: "Chicken Burger", price: 350 },
      { name: "Tuna Burger", price: 300 },
      { name: "Triple Burger", price: 400 },
      { name: "Double Burger", price: 450 },
    ],
  },
  {
    title: "4. Sandwich Dish",
    image: "path/to/sandwich-image.jpg", // Replace with actual image path or URL
    items: [
      { name: "Egg Sandwich", price: 250 },
      { name: "Club Sandwich", price: 300 },
      { name: "Chicken Club Sandwich", price: 350 },
      { name: "Beef Sandwich", price: 280 },
      { name: "Atkilit Sandwich", price: 200 },
      { name: "Tuna Sandwich", price: 250 },
      { name: "Stewarma Special", price: 400 },
    ],
  },
  {
    title: "5. Pizza",
    image: "path/to/pizza-image.jpg", // Replace with actual image path or URL
    items: [
      { name: "Carnival Special Pizza", description: "Sauce, mozzarella, cheese, egg, oregano, tomato, bell pepper, and other ingredients.", price: 450 },
      { name: "Special Pizza", description: "Topped with a special blend of cheese, meats, and vegetables.", price: 450 },
      { name: "Meat Pizza", description: "A delicious blend of mozzarella cheese, various meats, and savory sauce.", price: 400 },
      { name: "Vegetable Pizza", description: "Fresh vegetables and mozzarella cheese on a crispy crust.", price: 350 },
      { name: "Beef Pizza", description: "Topped with seasoned beef, cheese, and a blend of herbs.", price: 400 },
      { name: "Nola Pizza", description: "A mix of unique flavors inspired by New Orleans cuisine.", price: 300 },
      { name: "Four Season Pizza", description: "Four different sections representing different seasons of the year.", price: 400 },
      { name: "Oriental Pizza", description: "A blend of oriental spices and ingredients on a traditional pizza crust.", price: 350 },
      { name: "Italian Pizza", description: "Classic Italian pizza with a rich tomato sauce and mozzarella cheese.", price: 400 },
      { name: "Chicken Pizza", description: "Topped with grilled chicken, cheese, and a variety of vegetables.", price: 400 },
    ],
  },
  {
    title: "6. Juice",
    image: "path/to/juice-image.jpg", // Replace with actual image path or URL
    items: [
      { name: "Carnival Special Juice", price: 200 },
      { name: "Avocado Juice", price: 230 },
      { name: "Apple Juice", price: 200 },
      { name: "Papaya Juice", price: 200 },
      { name: "Orange Juice", price: 200 },
      { name: "Watermelon Juice", price: 200 },
      { name: "Banana with Honey", price: 230 },
      { name: "Milk Shake", price: 200 },
      { name: "Fruit Punch Juice", price: 250 },
      { name: "Strawberry Juice", price: 250 },
    ],
  },
  {
    title: "7. Dessert - Cake",
    image: "path/to/dessert-image.jpg", // Replace with actual image path or URL
    items: [
      { name: "White Forest Cake", price: 100 },
      { name: "Black Forest Cake", price: 100 },
      { name: "Pound Cake", price: 70 },
      { name: "English Cake", price: 40 },
      { name: "Banana Cake", price: 35 },
      { name: "Pancake", price: 100 },
      { name: "Cookies", price: 100 },
      { name: "Torte Cake", price: 100 },
      { name: "Special Cake", price: "600-1200" },
    ],
  },
  {
    title: "8. Ethiopian Traditional - Fasting Food",
    image: "path/to/ethiopian-food-image.jpg", // Replace with actual image path or URL
    items: [
      { name: "Injera", price: 200 },
      { name: "Fit-fit", price: 320 },
      { name: "Shiro", price: 380 },
      { name: "Atayef", price: 350 },
      { name: "Hilbet", price: 600 },
      { name: "Misir", price: 400 },
      { name: "Yetsom", price: 450 },
      { name: "Alicha", price: 600 },
      { name: "Kik", price: 500 },
      { name: "Fosolia", price: 500 },
      { name: "Siljo", price: 350 },
      { name: "Shimbra Asa", price: 250 },
      { name: "Kolo", price: 150 },
    ],
  },
  {
    title: "9. Hot Drinks",
    image: "path/to/hot-drinks-image.jpg", // Replace with actual image path or URL
    items: [
      { name: "Coffee", price: 25 },
      { name: "Tea", price: 20 },
      { name: "Cappuccino", price: 35 },
      { name: "Macchiato", price: 40 },
      { name: "Milk", price: 30 },
      { name: "Tw/Milk", price: 30 },
      { name: "Somali Tea", price: 35 },
      { name: "Spanish Tea", price: 50 },
      { name: "Fasting Macchiato", price: 45 },
      { name: "Cw/Milk", price: 30 },
    ],
  },
];

const Menu = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">FOOD MENU</h1>
      <p className="text-center text-xl mb-8">Pauceck and Lage Restaurant</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {menuSections.map((section, index) => (
          <div key={index} className="bg-gray-800 rounded-md p-6 shadow-lg">
            <div className="flex items-center mb-4">
              {section.image && (
                <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                  <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                </div>
              )}
              <h2 className="text-2xl font-bold bg-yellow-500 text-gray-900 px-3 py-2 rounded-md inline-block">{section.title}</h2>
            </div>
            <ul className="list-none pl-0">
              {section.items.map((item, i) => (
                <li key={i} className="mb-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-lg">{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="ml-5 text-sm text-gray-400">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Menu;
