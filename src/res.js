
import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import restaurantImage from './assets/res.jpg'; 
import diningImage1 from './assets/room1.jpg'; 
import diningImage2 from './assets/room2.jpg'; 
import diningImage3 from './assets/r3.jpg'; 

import guestImage1 from './assets/room1.jpg'; // Add guest images
import guestImage2 from './assets/room2.jpg';
import guestImage3 from './assets/r3.jpg';

const Restaurant = () => {
  useEffect(() => {
    const container = document.getElementById('scroll-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.classList.add('cursor-grabbing');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('cursor-grabbing');
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
      container.classList.remove('cursor-grabbing');
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the scrolling speed
      container.scrollLeft = scrollLeft - walk;
    });
  }, []);

  const testimonials = [
    {
      quote: "I had an amazing stay at New Level Hotel. The staff was incredibly friendly and attentive, and the rooms were spacious and luxurious. The location was perfect, with easy access to nearby attractions. I would highly recommend this hotel to anyone visiting Diradawa.",
      name: "Emily Brown",
      role: "Guest review",
      image: guestImage1, // Add image to each testimonial
    },
    {
      quote: "The experience at the hotel was excellent. The rooms were clean, and the staff was very helpful. The amenities were top-notch. I will definitely stay here again.",
      name: "John Doe",
      role: "Guest review",
      image: guestImage2,
    },
    {
      quote: "Fantastic service and great location. The staff went above and beyond to make sure we had everything we needed. Highly recommended!",
      name: "Jane Smith",
      role: "Guest review",
      image: guestImage3,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <div className="bg-white min-h-screen">
  {/* Full-width image section */}
  <div className="relative bg-white shadow-md overflow-hidden mb-8 w-screen">
  <img src={restaurantImage} alt="Restaurant" className="w-full h-160 object-cover"/>

    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-between p-8">

      <Link to="/menu" className="bg-custom-blue text-white px-4 py-2  inline-block text-center">View Menu</Link>
    </div>
  </div>
  <section>
    <div className="max-w-xl mx-auto px-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        
          <div>
            <h2 className="text-2xl font-times text-gray-800 ">Dining</h2>
            <p className="text-gray-600 font-times">Let your senses be tantalized by a bounteous array of flavours and aromas. The Sheraton Addis Hotel offers eleven restaurant and lounge/bar options which will delight you with cuisine from all over the world and affords you choices from the finest restaurants in Addis Ababa. Enjoy the tempting aromas of Stagioni, our Italian Restaurant, or the exotic flavours of Shaheen, our exclusive Indian Restaurant. Summerfields is a Middle Eastern Restaurant offering mouthwatering buffets in a relaxed, less formal setting that overlooks the beautiful hotel gardens and also offers Ethiopian specialty cuisine for you to try. Les Arcades is available for exclusive private dining events, offering a variety of culinary masterpieces. Lighter snacks are available at the Fountain Court, while Baywatch Poolside Bar and Breezes Restaurant provide poolside refreshments. Guests can enjoy cocktails, conversation and relaxation at Stanley's Bar and The Office.</p>
         
          </div>
        </div>
        <div>
  <h2 className="text-2xl font-times pt-8 pb-4 text-gray-800 mb-2">Dining areas</h2>
</div>

<div className="bg-white overflow-hidden mb-8 flex flex-wrap -mx-4 pt-8">
  <div className="w-full md:w-1/3 px-4 mb-8 transform transition-transform duration-300 hover:scale-105">
    <div className="relative">
      <img src={diningImage1} alt="Open Air Dining" className="w-full h-64 object-cover border-b-4 border-custom-blue"/>
      <div className="p-8">
        <h3 className="text-2xl font-times mb-4">Open Air Dining</h3>
        <p className="text-gray-600 font-times mb-4">Experience the beauty of nature while enjoying your meal in our open-air dining area. Perfect for a romantic evening or a family gathering.</p>
      </div>
    </div>
  </div>
  
  <div className="w-full md:w-1/3 px-8 mb-8 transform transition-transform duration-300 hover:scale-105">
    <div className="relative">
      <img src={diningImage2} alt="Indoor Dining" className="w-full h-64 object-cover border-b-4 border-custom-blue"/>
      <div className="p-8">
        <h3 className="text-2xl font-times mb-4">Indoor Dining</h3>
        <p className="text-gray-600 font-times mb-4">Our indoor dining area offers a cozy and elegant setting for you to enjoy your meals. Ideal for business lunches or casual dining.</p>
      </div>
    </div>
  </div>
  
  <div className="w-full md:w-1/3 px-4  transform transition-transform duration-300 hover:scale-105">
    <div className="relative">
      <img src={diningImage3} alt="In-Room Dining" className="w-full h-64 object-cover border-b-4 border-custom-blue"/>
      <div className="p-8">
        <h3 className="text-2xl font-times mb-4">In-Room Dining</h3>
        <p className="text-gray-600 font-times mb-4">Enjoy a variety of delicious meals served to your room at any time of the day or night. Perfect for those who prefer the comfort and privacy of their room.</p>
      </div>
    </div>
  </div>
</div>


          {/* Popular Menu Items */}
          <div className="bg-white overflow-hidden mb-8">
  <h2 className="text-2xl font-times mb-4">Popular Menu Items</h2>
  <div className="flex space-x-6 overflow-x-hidden cursor-grab" id="scroll-container">
    <div className="bg-white p-4  flex-shrink-0 w-64">
      <img src={restaurantImage} alt="Menu Item" className="w-full h-32 object-cover  mb-4"/>
      <h3 className="text-xl font-times">Item 1</h3>
      <p className="text-gray-600 font-times">Description of the menu item.</p>
    </div>
    <div className="bg-white p-4  flex-shrink-0 w-64">
      <img src={restaurantImage} alt="Menu Item" className="w-full h-32 object-cover  mb-4"/>
      <h3 className="text-xl font-times">Item 2</h3>
      <p className="text-gray-600 font-times">Description of the menu item.</p>
    </div>
    <div className="bg-white p-4  flex-shrink-0 w-64">
      <img src={restaurantImage} alt="Menu Item" className="w-full h-32 object-cover  mb-4"/>
      <h3 className="text-xl font-times">Item 3</h3>
      <p className="text-gray-600 font-times">Description of the menu item.</p>
    </div>
   
    <div className="bg-white p-4  flex-shrink-0 w-64">
      <img src={restaurantImage} alt="Menu Item" className="w-full h-32 object-cover  mb-4"/>
      <h3 className="text-xl font-times">Item 4</h3>
      <p className="text-gray-600 font-times">Description of the menu item.</p>
    </div>
    <div className="bg-white p-4  flex-shrink-0 w-64">
      <img src={restaurantImage} alt="Menu Item" className="w-full h-32 object-cover mb-4"/>
      <h3 className="text-xl font-times">Item 5</h3>
      <p className="text-gray-600 font-times">Description of the menu item.</p>
    </div>
  </div>
</div>

<div className="w-screen bg-custom-blue py-16">
  <div className="container mx-auto text-center text-white px-4">
    <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
    <div className="flex flex-col items-center mb-4">
      <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-16 h-16 rounded-full mb-4"/>
      <div className="text-xl max-w-3xl">{testimonials[currentTestimonial].quote}</div>
    </div>
    <div className="flex justify-center items-center mb-6">
      <div className="text-lg font-semibold">{testimonials[currentTestimonial].name}</div>
      <div className="ml-2 text-gray-300">{testimonials[currentTestimonial].role}</div>
    </div>
    <div className="flex justify-center space-x-2">
      {testimonials.map((_, index) => (
        <button
          key={index}
          className={`h-3 w-3 rounded-full ${index === currentTestimonial ? 'bg-white' : 'bg-gray-400'}`}
          onClick={() => setCurrentTestimonial(index)}
        ></button>
      ))}
    </div>
  </div>
</div>



        </div>
      </section>
    </div>
  );
}

export default Restaurant;
