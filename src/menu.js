
import React from 'react';
import foodImage1 from './assets/r3.jpg';
import foodImage2 from './assets/r3.jpg';
import foodImage3 from './assets/r3.jpg';


const Menu = () => {
  return (
    <div className="bg-gray-900 text-white p-8 font-sans">
      <h1 className="text-4xl font-bold text-center">FOOD MENU</h1>
      <p className="text-xl text-center mt-2">Pauceck and Lage Restaurant</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Main Course Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-orange-500 rounded-lg p-4">
          <h2 className="text-2xl font-bold">MAIN COURSE</h2>
          <img src={foodImage1} alt="Appetizers" className="w-32 h-32 object-cover rounded-full mx-auto mt-4"/>

          <ul className="mt-4 space-y-2">
            <li className="flex justify-between">
              <span>Cheeseburger</span>
              <span>$34</span>
            </li>
            <li className="flex justify-between">
              <span>Cheese sandwich</span>
              <span>$22</span>
            </li>
            <li className="flex justify-between">
              <span>Chicken burgers</span>
              <span>$23</span>
            </li>
            <li className="flex justify-between">
              <span>Spicy chicken</span>
              <span>$33</span>
            </li>
            <li className="flex justify-between">
              <span>Hot dog</span>
              <span>$24</span>
            </li>
          </ul>
        </div>

        {/* Appetizers Section */}
        <div className="col-span-1 bg-gray-800 rounded-lg p-4">
          <h2 className="text-2xl font-bold">APPETIZERS</h2>
          <img src={foodImage2} alt="Appetizers" className="w-32 h-32 object-cover rounded-full mx-auto mt-4"/>

          <ul className="mt-4 space-y-2">
            <li className="flex justify-between">
              <span>Fruit Salad</span>
              <span>$13</span>
            </li>
            <li className="flex justify-between">
              <span>Cocktails</span>
              <span>$12</span>
            </li>
            <li className="flex justify-between">
              <span>Nuggets</span>
              <span>$14</span>
            </li>
            <li className="flex justify-between">
              <span>Sandwich</span>
              <span>$13</span>
            </li>
            <li className="flex justify-between">
              <span>French Fries</span>
              <span>$15</span>
            </li>
          </ul>
        </div>

        {/* Beverages Section */}
        <div className="col-span-1 bg-orange-500 rounded-lg p-4">
          <h2 className="text-2xl font-bold">BEVERAGES</h2>
          <img src={foodImage3} alt="Appetizers" className="w-32 h-32 object-cover rounded-full mx-auto mt-4"/>

          <ul className="mt-4 space-y-2">
            <li className="flex justify-between">
              <span>Milk Shake</span>
              <span>$3</span>
            </li>
            <li className="flex justify-between">
              <span>Iced Tea</span>
              <span>$2</span>
            </li>
            <li className="flex justify-between">
              <span>Orange Juice</span>
              <span>$4</span>
            </li>
            <li className="flex justify-between">
              <span>Lemon Tea</span>
              <span>$3</span>
            </li>
            <li className="flex justify-between">
              <span>Coffee</span>
              <span>$5</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Menu;