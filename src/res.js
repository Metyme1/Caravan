// // src/Restaurant.js
// import React from 'react';
// import restaurantImage from './assets/res.jpg'; 
// import { Link } from 'react-router-dom';

// const Restaurant = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <header className="bg-white py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-3xl font-bold">Restaurant</h1>
//         </div>
//       </header>
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white shadow-md rounded-lg overflow-hidden">
//             <img src={restaurantImage} alt="Restaurant" className="w-full h-64 object-cover border-b-4 border-custom-blue"/>
//             <div className="p-8 flex justify-between items-center">
//               <div>
//                 <h3 className="text-2xl font-bold mb-4">Dining In Room Available 24/7</h3>
//                 <p className="text-gray-600 mb-4">Enjoy a variety of delicious meals served to your room at any time of the day or night.</p>
//               </div>
//               <Link to="/menu" className="bg-custom-blue text-white px-4 py-2 rounded-md inline-block text-center">View Menu</Link>
//             </div>
//           </div>
//         </div>
//       </section>
     
//     </div>
//   );
// }

// export default Restaurant;



// src/Restaurant.js
import React from 'react';
import { Link } from 'react-router-dom';
import restaurantImage from './assets/res.jpg'; 
import diningImage1 from './assets/room1.jpg'; 
import diningImage2 from './assets/room2.jpg'; 
import diningImage3 from './assets/r3.jpg'; 
import chefImage from './assets/room1.jpg'; 
import videoThumbnail from './assets/room2.jpg'; 

import guestReviewImage1 from './assets/room1.jpg';
import guestReviewImage2 from './assets/room2.jpg';
import guestReviewImage3 from './assets/r3.jpg';

const Restaurant = () => {
  return (
    <div className="bg-white min-h-screen">
  {/* Full-width image section */}
  <div className="relative bg-white shadow-md overflow-hidden mb-8 w-screen">
  <img src={restaurantImage} alt="Restaurant" className="w-full h-160 object-cover"/>

    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-between p-8">

      <Link to="/menu" className="bg-custom-blue text-white px-4 py-2 rounded-md inline-block text-center">View Menu</Link>
    </div>
  </div>
  <section>
    <div className="max-w-7xl mx-auto px-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        
          <div>
            <h2 className="text-2xl font-times text-gray-800 mb-2">Dining</h2>
            <p className="text-gray-600">Let your senses be tantalized by a bounteous array of flavours and aromas. The Sheraton Addis Hotel offers eleven restaurant and lounge/bar options which will delight you with cuisine from all over the world and affords you choices from the finest restaurants in Addis Ababa. Enjoy the tempting aromas of Stagioni, our Italian Restaurant, or the exotic flavours of Shaheen, our exclusive Indian Restaurant. Summerfields is a Middle Eastern Restaurant offering mouthwatering buffets in a relaxed, less formal setting that overlooks the beautiful hotel gardens and also offers Ethiopian specialty cuisine for you to try. Les Arcades is available for exclusive private dining events, offering a variety of culinary masterpieces. Lighter snacks are available at the Fountain Court, while Baywatch Poolside Bar and Breezes Restaurant provide poolside refreshments. Guests can enjoy cocktails, conversation and relaxation at Stanley's Bar and The Office.</p>
         
          </div>
        </div>
        <div>
  <h2 className="text-2xl font-times pt-8 pb-4 text-gray-800 mb-2">Dining areas</h2>
</div>

        <div className="bg-white  overflow-hidden mb-8 flex flex-wrap -mx-4 pt-8">
  <div className="w-full md:w-1/3 px-4 mb-8">
    <div className="relative">
      <img src={diningImage1} alt="Open Air Dining" className="w-full h-64 object-cover border-b-4 border-custom-blue"/>
      <div className="p-8">
        <h3 className="text-2xl font-times mb-4">Open Air Dining</h3>
        <p className="text-gray-600  font-times mb-4">Experience the beauty of nature while enjoying your meal in our open-air dining area. Perfect for a romantic evening or a family gathering.</p>
      </div>
    </div>
  </div>
  
  <div className="w-full md:w-1/3  px-8 mb-8">
    <div className="relative">
      <img src={diningImage2} alt="Indoor Dining" className="w-full h-64 object-cover border-b-4 border-custom-blue"/>
      <div className="p-8">
        <h3 className="text-2xl font-times mb-4">Indoor Dining</h3>
        <p className="text-gray-600  font-times mb-4">Our indoor dining area offers a cozy and elegant setting for you to enjoy your meals. Ideal for business lunches or casual dining.</p>
      </div>
    </div>
  </div>
  
  <div className="w-full md:w-1/3 px-4 mb-8">
    <div className="relative">
      <img src={diningImage3} alt="In-Room Dining" className="w-full h-64 object-cover border-b-4 border-custom-blue"/>
      <div className="p-8">
        <h3 className="text-2xl font-times mb-4">In-Room Dining</h3>
        <p className="text-gray-600  font-times mb-4">Enjoy a variety of delicious meals served to your room at any time of the day or night. Perfect for those who prefer the comfort and privacy of their room.</p>
      </div>
    </div>
  </div>
</div>


          {/* Popular Menu Items */}
          <div className="bg-white  overflow-hidden mb-8 p-8">
            <h2 className="text-2xl font-bold mb-4">Popular Menu Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img src={restaurantImage} alt="Menu Item" className="w-full h-32 object-cover rounded-md mb-4"/>
                <h3 className="text-xl font-bold">Item 1</h3>
                <p className="text-gray-600">Description of the menu item.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <img src={restaurantImage} alt="Menu Item" className="w-full h-32 object-cover rounded-md mb-4"/>
                <h3 className="text-xl font-bold">Item 2</h3>
                <p className="text-gray-600">Description of the menu item.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <img src={restaurantImage} alt="Menu Item" className="w-full h-32 object-cover rounded-md mb-4"/>
                <h3 className="text-xl font-bold">Item 3</h3>
                <p className="text-gray-600">Description of the menu item.</p>
              </div>
            </div>
          </div>

          {/* Chef and Culinary Team */}
          <div className="bg-white s overflow-hidden mb-8 p-8">
            <h2 className="text-2xl font-bold mb-4">Chef and Culinary Team</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <img src={chefImage} alt="Chef" className="w-48 h-48 object-cover rounded-full"/>
              <div>
                <h3 className="text-xl font-bold">Chef John Doe</h3>
                <p className="text-gray-600 mb-4">With over 20 years of experience, Chef John Doe leads our culinary team with a passion for creating exquisite dishes using the finest ingredients.</p>
                <p className="text-gray-600">Our culinary team is dedicated to providing an exceptional dining experience, whether you are dining in our restaurant or enjoying a meal in the comfort of your room.</p>
              </div>
            </div>
          </div>

          {/* Image and Video Content */}
          <div className="bg-white  overflow-hidden mb-8 p-8">
            <h2 className="text-2xl font-bold mb-4">Image and Video Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src={diningImage1} alt="Dining Image" className="w-full h-64 object-cover rounded-md"/>
              <img src={videoThumbnail} alt="Video Thumbnail" className="w-full h-64 object-cover rounded-md"/>
            </div>
          </div>

          {/* Guest Reviews and Testimonials */}
          <div className="bg-white overflow-hidden mb-8 p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Guest Reviews and Testimonials</h2>
      <div className="space-y-8">
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${guestReviewImage1})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-8">
            <h3 className="text-3xl text-white mb-2">What Client's Say?</h3>
            <p className="text-gray-200 mb-4">I recently hosted a business conference at Carivan Dire Hotel, and I couldn't have been happier with the experience. The conference rooms were well-equipped, the staff was professional and accommodating, and the overall ambiance was perfect for productive meetings. I received positive feedback from all attendees. Thank you, Carivan Dire Hotel!</p>
            <div className="flex items-center space-x-4">
              <img src={guestReviewImage1} alt="Guest" className="w-16 h-16 object-cover rounded-full border-2 border-white"/>
              <div>
                <h4 className="text-xl font-bold text-white">Olivia Martin</h4>
                <p className="text-gray-300">Guest review</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${guestReviewImage2})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-8">
            <h3 className="text-3xl text-white mb-2">What Client's Say?</h3>
            <p className="text-gray-200 mb-4">Carivan Dire Hotel exceeded my expectations in every way. The facilities were top-notch, the food at the restaurant was delicious, and the staff went above and beyond to ensure my comfort. I felt pampered and well taken care of throughout my stay. It's definitely my go-to hotel in Diradawa.</p>
            <div className="flex items-center space-x-4">
              <img src={guestReviewImage2} alt="Guest" className="w-16 h-16 object-cover rounded-full border-2 border-white"/>
              <div>
                <h4 className="text-xl font-bold text-white">Nolan White</h4>
                <p className="text-gray-300">Guest review</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${guestReviewImage3})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-8">
            <h3 className="text-3xl text-white mb-2">What Client's Say?</h3>
            <p className="text-gray-200 mb-4">I had an amazing stay at Carivan Dire Hotel. The staff was incredibly friendly and attentive, and the rooms were spacious and luxurious. The location was perfect, with easy access to nearby attractions. I would highly recommend this hotel to anyone visiting Diradawa.</p>
            <div className="flex items-center space-x-4">
              <img src={guestReviewImage3} alt="Guest" className="w-16 h-16 object-cover rounded-full border-2 border-white"/>
              <div>
                <h4 className="text-xl font-bold text-white">Emily Brown</h4>
                <p className="text-gray-300">Guest review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        </div>
      </section>
    </div>
  );
}

export default Restaurant;
