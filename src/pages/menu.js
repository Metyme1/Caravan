import React, { useState } from 'react';

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
  Wine: [
    { name: 'Red Wine', description: 'A selection of fine red wines', price: 30 },
    { name: 'White Wine', description: 'A selection of fine white wines', price: 28 },
    { name: 'Sparkling Wine', description: 'A selection of fine sparkling wines', price: 35 },
    
  ],
};

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState('Starters');

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-5xl text-center text-custom-blue font-times mb-10">Restaurant Menu</h1>
        <div className="flex justify-center overflow-x-auto mb-10">
          {Object.keys(menuData).map((menu) => (
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
