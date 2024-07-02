import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const menuData = {
  "Break Fast": [
    { name: 'Scrembled - Egg', description: '', price: 200 },
    { name: 'Omlet', description: '', price: 200 },
    { name: 'Boiled-Egg', description: '', price: 150 },
    { name: 'Melewaa', description: '', price: 170 },
    { name: 'Fetria', description: '', price: 250 },
    { name: 'Cecebssa - with oil ', description: '', price: 200 },
    { name: 'Cecebssa - with Butter ', description: '', price: 250 },
    { name: 'fasting Firfir', description: '', price: 210 },
    { name: 'Qincee', description: '', price: 150},
    { name: 'Bullaa  - with Better', description: '', price: 180 },
    { name: 'Bulla - with oil ', description: '', price: 170 },
    { name: 'Foul', description: '', price: 150 },
    { name: 'Special Foul ', description: '', price: 180 },
    { name: 'Special Combo', description: '', price: 350 },
    { name: 'Dullet', description: '', price: 200},
  ],
  Mains: [
    { name: 'Rusty’s Burger', description: 'Smoked pulled beef ribs, bbq sauce, cheddar, crispy onion', price: 34 },
    { name: 'Cajun Fish Steak', description: 'Cajun spiced seabass, deep fried baby potatoes, side salad', price: 22 },
    { name: 'Southern Fried Chicken', description: 'Cajun coated chicken breast, fries and honey mustard', price: 23 },
    { name: 'Crab Cake', description: 'Breaded crab cakes, tartar sauce, apple and fennel salad', price: 33 },
    { name: 'Baby Back Ribs', description: 'Bbq glazed baby pork ribs, coleslaw, fries', price: 24 },
    { name: 'Smokehouse Combo', description: 'Smoked beef brisket, rib and sausage, coleslaw, cornbread', price: 25 },
    { name: 'Grilled Salmon Salad', description: 'Grilled salmon, mixed greens, capers, orange slices', price: 34 },
    { name: 'Chicken Cobb Salad', description: 'Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon', price: 34 },
    { name: 'Salad Chicken', description: 'Caesar dressing, optional grilled chicken breast', price: 34 },
  ],
  Salads: [
    { name: 'Grilled Salmon Salad', description: 'Grilled salmon, mixed greens, capers, orange slices', price: 34 },
    { name: 'Chicken Cobb Salad', description: 'Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon', price: 34 },
    { name: 'Salad Chicken', description: 'Caesar dressing, optional grilled chicken breast', price: 34 },
    { name: 'Grilled Salmon Salad', description: 'Grilled salmon, mixed greens, capers, orange slices', price: 34 },
    { name: 'Chicken Cobb Salad', description: 'Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon', price: 34 },
    { name: 'Salad Chicken', description: 'Caesar dressing, optional grilled chicken breast', price: 34 },
    { name: 'Grilled Salmon Salad', description: 'Grilled salmon, mixed greens, capers, orange slices', price: 34 },
    { name: 'Chicken Cobb Salad', description: 'Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon', price: 34 },
    { name: 'Salad Chicken', description: 'Caesar dressing, optional grilled chicken breast', price: 34 },
  ],
  Breakfast: [
    // Add items for Breakfast category
  ],
  "Lunch and Dinner": [
    { name: 'Special Carnival Combo', description: '', price: 1500 },
{ name: ' Special Goat', description: '', price: 450 },
{ name: 'Goat - Tibs', description: '', price: 400 }, 
{ name: 'Rice - Normal', description: '', price: 200 },
{ name: 'Rice with Meat', description: '', price: 280 },
{ name: 'Rice with Chicken', description: '', price: 300 },
{ name: 'Rice with Bolanise Sauce', description: '', price: 350},
{ name: 'Rice with Fish', description: '', price: 350 },
{ name: 'Spaghetti with Bolognese Sauce', description: '', price: 350 },
{ name: 'Spaghetti with Meat', description: '', price: 370 },
{ name: 'Spaghetti with Cheese', description: '', price: 400 },
{ name: 'Spaghetti with Vegetables', description: '', price: 250 },
{ name: 'Chicken Xibsi', description: '', price: 300},
{ name: 'Chicken Mondi', description: '', price: 600 },
{ name: 'Carnival Hanid / Meat Mendi', description: '', price: 600}

  ],
  Burger: [
    { name: 'Caravan Special Burger', description: '', price: 450 },
    { name: 'Special Burger', description: '', price: 400 },
    { name: 'Normal Burger', description: '', price: 280 },
    { name: 'Cheese Burger', description: '', price: 300 },
    { name: 'Chicken Burger', description: '', price: 400 },
    { name: 'Tuna Burger', description: '', price: 300 },
    { name: 'Triple Burger', description: '', price: 400 },
    { name: 'Double Burger', description: '', price: 450 }
    
  ],
  Sandwich: [
    { name: 'Egg Sandwich', description: '', price: 250 },
    { name: 'Club Sandwich', description: '', price: 300 },
    { name: 'Chicken Club Sandwich', description: '', price: 350 },
    { name: 'Beef Sandwich', description: '', price: 300 },
    { name: 'Atiklt Sandwich', description: '', price: 200 },
    { name: 'Tuna Sandwich', description: '', price: 230 },
    { name: 'Shewarma Special', description: '', price: 400 },
  ],
  "Ethiopian Traditional Food": [
    // Add items for Ethiopian Traditional Food category
  ],
  Pizza: [
    // Add items for Pizza category
  ],
  Juice: [
    // Add items for Juice category
  ],
  Cake: [
    // Add items for Cake category
  ],
  "Hot Drinks": [
    // Add items for Hot Drinks category
  ],
};

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState('Starters');
  const [categoryIndex, setCategoryIndex] = useState(0);

  // Get all category names
  const categories = Object.keys(menuData);

  // Calculate start and end index for displayed categories
  const startIndex = categoryIndex * 3;
  const endIndex = Math.min(startIndex + 3, categories.length);

  // Handle click for next and previous buttons
  const handleNext = () => {
    if (categoryIndex < Math.ceil(categories.length / 3) - 1) {
      setCategoryIndex(categoryIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (categoryIndex > 0) {
      setCategoryIndex(categoryIndex - 1);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-5xl text-center text-custom-blue font-times mb-10">Restaurant Menu</h1>
        <div className="relative flex items-center justify-center mb-10">
          <div className="absolute left-0 flex items-center justify-center bg-custom-blue text-white w-10 h-10 rounded-full cursor-pointer" onClick={handlePrevious}>
            <FaChevronLeft className={`text-2xl ${categoryIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} />
          </div>
          <div className="flex overflow-x-auto mx-10">
            {categories.slice(startIndex, endIndex).map((menu) => (
              <div
                key={menu}
                className={`px-6 py-2 cursor-pointer mx-2 ${
                  selectedMenu === menu
                    ? 'bg-white text-custom-blue font-times border-custom-blue border-2 border-solid'
                    : 'bg-custom-blue font-times text-white border-transparent'
                }`}
                style={{ minWidth: '150px', borderRadius: '4px' }}
                onClick={() => setSelectedMenu(menu)}
              >
                {menu}
              </div>
            ))}
          </div>
          <div className="absolute right-0 flex items-center justify-center bg-custom-blue text-white w-10 h-10 rounded-full cursor-pointer" onClick={handleNext}>
            <FaChevronRight className={`text-2xl ${categoryIndex === Math.ceil(categories.length / 3) - 1 ? 'opacity-50 cursor-not-allowed' : ''}`} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[selectedMenu] ? (
            menuData[selectedMenu].map((item, index) => (
              <div key={index} className="rounded-lg bg-white p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl mb-2 text-custom-blue font-times">{item.name}</h2>
                  <div className="border-t border-dotted border-custom-blue my-2"></div> {/* Dotted line */}
                  <p className="text-black font-times">{item.description}</p>
                </div>
                <p className="text-custom-blue font-times">${item.price}</p>
              </div>
            ))
          ) : (
            <p className="text-black text-center">No items found for this menu.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
