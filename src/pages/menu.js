// import React from 'react';
// import foodImage1 from './assets/r3.jpg';
// import foodImage2 from './assets/r3.jpg';
// import foodImage3 from './assets/r3.jpg';

// const Menu = () => {
//   return (
//     <div className="bg-gray-900 text-white p-8 font-sans min-h-screen">
//       <h1 className="text-5xl font-bold text-center mb-4">FOOD MENU</h1>
//       <p className="text-xl text-center mb-8">Pauceck and Lage Restaurant</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Main Course Section */}
//         <div className="bg-orange-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
//           <h2 className="text-3xl font-bold mb-4">MAIN COURSE</h2>
//           <img src={foodImage1} alt="Main Course" className="w-32 h-32 object-cover rounded-full mx-auto mb-4"/>
//           <ul className="space-y-3">
//             <li className="flex justify-between items-center">
//               <span>Cheeseburger</span>
//               <span>$34</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Cheese sandwich</span>
//               <span>$22</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Chicken burgers</span>
//               <span>$23</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Spicy chicken</span>
//               <span>$33</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Hot dog</span>
//               <span>$24</span>
//             </li>
//           </ul>
//         </div>

//         {/* Appetizers Section */}
//         <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
//           <h2 className="text-3xl font-bold mb-4">APPETIZERS</h2>
//           <img src={foodImage2} alt="Appetizers" className="w-32 h-32 object-cover rounded-full mx-auto mb-4"/>
//           <ul className="space-y-3">
//             <li className="flex justify-between items-center">
//               <span>Fruit Salad</span>
//               <span>$13</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Cocktails</span>
//               <span>$12</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Nuggets</span>
//               <span>$14</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Sandwich</span>
//               <span>$13</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>French Fries</span>
//               <span>$15</span>
//             </li>
//           </ul>
//         </div>

//         {/* Beverages Section */}
//         <div className="bg-orange-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
//           <h2 className="text-3xl font-bold mb-4">BEVERAGES</h2>
//           <img src={foodImage3} alt="Beverages" className="w-32 h-32 object-cover rounded-full mx-auto mb-4"/>
//           <ul className="space-y-3">
//             <li className="flex justify-between items-center">
//               <span>Milk Shake</span>
//               <span>$3</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Iced Tea</span>
//               <span>$2</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Orange Juice</span>
//               <span>$4</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Lemon Tea</span>
//               <span>$3</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Coffee</span>
//               <span>$5</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Menu;



import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Starters from './pages/Starters';
import Mains from './pages/Mains';
import Salads from './pages/Salads';
import Wine from './pages/Wine';

function Menu() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl text-center mb-10">Restaurant Menu</h1>
        <div className="flex justify-center overflow-x-auto mb-10">
          <NavLink
            to="/menu/starters"
            className="px-6 py-2 mx-2 rounded-lg bg-gray-800 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            Starters
          </NavLink>
          <NavLink
            to="/menu/mains"
            className="px-6 py-2 mx-2 rounded-lg bg-gray-800 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            Mains
          </NavLink>
          <NavLink
            to="/menu/salads"
            className="px-6 py-2 mx-2 rounded-lg bg-gray-800 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            Salads
          </NavLink>
          <NavLink
            to="/menu/wine"
            className="px-6 py-2 mx-2 rounded-lg bg-gray-800 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            Wine
          </NavLink>
        </div>
        <Switch>
          <Route path="/menu/starters" component={Starters} />
          <Route path="/menu/mains" component={Mains} />
          <Route path="/menu/salads" component={Salads} />
          <Route path="/menu/wine" component={Wine} />
        </Switch>
      </div>
    </div>
  );
}

export default Menu;
