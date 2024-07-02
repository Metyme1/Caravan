import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const menuData = {
  Starters: [
    { name: 'Caesar Salad', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing',price: 34 },
    { name: 'Waldorf Salad', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce',price: 34 },
    { name: 'Quinoa & Avocado Salad', description: 'Quinoa, avocado, mixed greens, nuts, dried and fresh fruits',price: 34 },
    { name: 'Grilled Salmon Salad', description: 'Grilled salmon, mixed greens, capers, orange slices' ,price: 34},
    { name: 'Chicken Cobb Salad', description: 'Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon' ,price: 34},
    { name: 'Salad Chicken', description: 'Caesar dressing, optional grilled chicken breast',price: 34 },
    { name: 'Grilled Salmon Salad', description: 'Grilled salmon, mixed greens, capers, orange slices' ,price: 34},
    { name: 'Chicken Cobb Salad', description: 'Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon' ,price: 34},
    { name: 'Salad Chicken', description: 'Caesar dressing, optional grilled chicken breast',price: 34 },
    
    
  ],
  Mains: [
    { name: 'Rusty’s Burger', description: 'Smoked pulled beef ribs, bbq sauce, cheddar, crispy onion', price: 34 },
    { name: 'Cajun Fish Steak', description: 'Cajun spiced seabass, deep fried baby potatoes, side salad', price: 22 },
    { name: 'Southern Fried Chicken', description: 'Cajun coated chicken breast, fries and honey mustard', price: 23 },
    { name: 'Crab Cake', description: 'Breaded crab cakes, tartar sauce, apple and fennel salad', price: 33 },
    { name: 'Baby Back Ribs', description: 'Bbq glazed baby pork ribs, coleslaw, fries', price: 24 },
    { name: 'Smokehouse Combo', description: 'Smoked beef brisket, rib and sausage, coleslaw, cornbread', price: 25 },
    { name: 'Grilled Salmon Salad', description: 'Grilled salmon, mixed greens, capers, orange slices' ,price: 34},
    { name: 'Chicken Cobb Salad', description: 'Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon' ,price: 34},
    { name: 'Salad Chicken', description: 'Caesar dressing, optional grilled chicken breast',price: 34 },
    
  ],
  Salads: [
    { name: 'Grilled Salmon Salad', description: 'Grilled salmon, mixed greens, capers, orange slices' ,price: 34},
    { name: 'Chicken Cobb Salad', description: 'Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon' ,price: 34},
    { name: 'Salad Chicken', description: 'Caesar dressing, optional grilled chicken breast',price: 34 },
    { name: 'Grilled Salmon Salad', description: 'Grilled salmon, mixed greens, capers, orange slices' ,price: 34},
    { name: 'Chicken Cobb Salad', description: 'Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon' ,price: 34},
    { name: 'Salad Chicken', description: 'Caesar dressing, optional grilled chicken breast',price: 34 },
    { name: 'Grilled Salmon Salad', description: 'Grilled salmon, mixed greens, capers, orange slices' ,price: 34},
    { name: 'Chicken Cobb Salad', description: 'Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon' ,price: 34},
    { name: 'Salad Chicken', description: 'Caesar dressing, optional grilled chicken breast',price: 34 },
    
  ],
 
  Breakfast: [
    // Add items for Breakfast category
  ],
  "Lunch and Dinner": [
    // Add items for Lunch and Dinner category
  ],
  Burger: [
    // Add items for Burger category
  ],
  Sandwich: [
    // Add items for Sandwich category
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
        <div className="flex justify-center overflow-x-auto mb-10">
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
        {/* Navigation icons */}
        <div className="flex justify-center mt-6">
          <div className="cursor-pointer" onClick={handlePrevious}>
            <FaChevronLeft className={`text-custom-blue text-2xl ${categoryIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} />
          </div>
          <div className="cursor-pointer ml-4" onClick={handleNext}>
            <FaChevronRight className={`text-custom-blue text-2xl ${categoryIndex === Math.ceil(categories.length / 3) - 1 ? 'opacity-50 cursor-not-allowed' : ''}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;