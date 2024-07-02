import React, { useState } from 'react';

const menuData = {
  Starters: [
    { name: 'Caesar Salad', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing',price: 34 },
    { name: 'Waldorf Salad', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce',price: 34 },
    { name: 'Quinoa & Avocado Salad', description: 'Quinoa, avocado, mixed greens, nuts, dried and fresh fruits',price: 34 },
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
  ],
  Salads: [
    // Same menu items from Starters
  ],
  Wine: [
    { name: 'Red Wine', description: 'A selection of fine red wines', price: 30 },
    { name: 'White Wine', description: 'A selection of fine white wines', price: 28 },
    { name: 'Sparkling Wine', description: 'A selection of fine sparkling wines', price: 35 },
  ],
};

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState('Starters');

  return (
    <div className="bg-white text-black min-h-screen font-family: 'Roboto', sans-serif">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl text-center mb-10">Restaurant Menu</h1>
        <div className="flex justify-center overflow-x-auto mb-10">
          {Object.keys(menuData).map((menu) => (
            <div
              key={menu}
              className={`px-6 py-2 cursor-pointer mx-2 hover:bg-gray-700 ${
                selectedMenu === menu
                ? 'bg-white text-custom-blue border-custom-blue'
                : 'bg-custom-blue text-white border-transparent'
            }`}
              onClick={() => setSelectedMenu(menu)}
            >
              {menu}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[selectedMenu] ? (
            menuData[selectedMenu].map((item, index) => (
              <div key={index} className="rounded-lg bg-white p-6 hover:bg-gray-700">
                <h2 className="text-xl mb-2 text-custom-blue font-bold">{item.name}</h2>
                <p className="text-black ">{item.description}</p>
                <p className="mt-4 text-black">${item.price}</p>
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
