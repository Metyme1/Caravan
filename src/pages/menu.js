import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const menuData = {
  BreakFast: [
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
    { name: 'ሽሮ', description: '', price: 200 },
    { name: 'ሽሮ በቱና', description: '', price: 320 },
    { name: 'ቦዘና ሽሮ', description: '', price: 380 },
    { name: 'ጥብስ ጭቅና', description: '', price: 350 },
    { name: 'ጥብስ የፍየል ', description: '', price: 400 },
    { name: 'አገልግል', description: '', price: 450 },
    { name: 'ዶሮ ወጥ ', description: '', price: 400 },
    { name: 'ጎመን - በስጋ', description: '', price: 300 },
    { name: 'ቅቅል', description: '', price: 350 },
    { name: 'ክትŒ', description: '', price: 500 },
    { name: 'እስፓድል - ክትፎ', description: '', price: 600 },
    { name: 'ደረቅ ጥብስ - እስፓድል', description: '', price: 500 },
    { name: 'ሞሰራ በስጋ', description: '', price: 400 },
    { name: 'አይብ', description: '', price: 350 },
    { name: 'አይብ በጎመን', description: '', price: 380 },
    { name: 'ሱፍ - ፍትፍት', description: '', price: 250 },
    { name: 'በየአይነት', description: '', price: 250 },
    { name: 'ጎመን ክትፎ', description: '', price: 250 },
  
  ],
  Pizza: [
    { name: 'Carnival', description: 'Souse, mozzarella cheese, tested meat, chicken, tuna egg and with others', price: 450 },
    { name: 'Special Pizza', description: 'Botanies, Souse, mozzarella cheese, tested meat, Egg, organic, Bill, peper  and with others', price: 450 },
    { name:'Oriental Pizza', description : 'Botanies, Souse, Tested Meat, Mozzarella Cheese, Egg, Organic, Bill, Pepper and Other', price: 450 },
    { name: 'Margarita Pizza', description: 'Botanies, sauce, mozzarella cheese, organic, tomato, bill, paper and etc.', price: 300 },
    { name: 'Beef Pizza', description: 'Bolinas-sauce-tested, meat, mozzarella, cheese, bill, paper, tomato and other', price: 300 },
    { name: 'Nioia Pizza', description: 'Bolinas-sauce-tested, vegetable, mozzarella cheese, tuna, tested meat and other', price: 400 },
    { name: 'Four-Season Pizza', description: '', price: 400 },
    { name: 'Tuna Pizza', description: 'Colonize, sauce, vegetable, tuna, tomato, oregano, black olive and others', price: 400 },
    { name: 'At Kilt Pizza', description: 'Colonize, salce, vegetable, tomato bill, paper, black-olive and others', price: 300 },
    { name: 'Italian Pizza', description: 'Botanies sauce, tested meat, mozzarella cheese, tuna black olive mushroom and others', price: 400 },
    { name: 'Chicken Pizza', description: 'Botanies souce, mozzarella cheese chicken, black olive, mushroom, and others', price: 350 },
  ],
  Juice: [

    { name: 'Carnival - Special Juice', description: '', price: 200 },
    { name: 'Avocado Juice', description: '', price: 200 },
    { name: 'Avocado Milk Shake', description: '', price: 230 },
    { name: 'Papaya Juice', description: '', price: 200 },
    { name: 'Papaya Milk Shake', description: '', price: 200 },
    { name: 'Ambashock', description: '', price: 200 },
    { name: 'Orange Juice', description: '', price: 200 },
    { name: 'Watermelon Juice', description: '', price: 200 },
    { name: 'Orange, With Honey', description: '', price: 200 },
    { name: 'Watermelon With Honey', description: '', price: 200 },
    { name: 'Banana With Milk Shake', description: '', price: 200 },
    { name: 'Αyton', description: '', price: 200 },
    { name: 'Fruet Panch', description: '', price: 200 },
    { name: 'Strawberry Juice', description: '', price: 250 },
    ],

    Cake: [
      { name: 'White Forest', description: '', price: 100 },
      { name: 'Black Forest', description: '', price: 100 },
      { name: 'Pound Cake', description: '', price: 100 },
      { name: 'English Cake', description: '', price: 80 },
      { name: 'Banana Cake', description: '', price: 70 },
      { name: 'Pan-Cake', description: '', price: 40 },
      { name: 'Cookies', description: '', price: 35 },
      { name: 'Torte Cake', description: '', price: 600-1200 },
      ],
  "Hot Drinks": [
    { name: 'Coffee', description: '', price: 25 },
    { name: 'Tea', description: '', price: 20 },
    { name: 'Cappuccino', description: '', price: 40 },
    { name: 'Macchiato', description: '', price: 35 },
    { name: 'Milk', description: '', price: 30 },
    { name: 'T/W/Milk', description: '', price: 30 },
    { name: 'Somali-Tea', description: '', price: 30 },
    { name: 'Spanish - Tea', description: '', price: 50 },
    { name: 'Fasting - Macchiato', description: '', price: 40 },
    { name: 'C/W/Milk', description: '', price: 35 },
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
                    ? 'bg-white text-custom-blue font-times border-custom-blue border-2 border-solid shadow-lg'
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
              <div key={index} className="rounded-lg bg-white p-6 flex flex-col justify-between shadow-md hover:shadow-lg">
                <div>
                  <h2 className="text-2xl mb-2 text-custom-blue font-times">{item.name}</h2>
                  <div className="border-t border-dotted border-custom-blue my-2"></div> {/* Dotted line */}
                  <p className="text-gray-600 font-times">{item.description || 'Description not available'}</p>
                </div>
            
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





