import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import room1 from '../assets/sweet1.JPG';
import room2 from '../assets/semi1.jpg';
import room3 from '../assets/twin1.JPG';
import restaurant from '../assets/res.JPG';
import hotelImage from '../assets/Home.JPG'; 
import sauna from '../assets/sauna.jpg';
import gym from '../assets/gym.jpg';
import shopping from '../assets/shop.jpg';
import barbershop from '../assets/barber.jpg';
import special from '../assets/combo1.JPG'
import pizza from'../assets/pizza.JPG'
import meeting from '../assets/m1.JPG';
import meeting2 from '../assets/m2.JPG';

import chicken from '../assets/chicken.JPG'
import promotion from '../assets/promo.MP4'
import { FaStar } from 'react-icons/fa'; 

const services = [
  {
    id: 1,
    title: "Sauna",
    description: "Relax and rejuvenate in our state-of-the-art sauna.",
    image: sauna,
  },
  {
    id: 2,
    title: "Gym",
    description: "Stay fit and healthy in our well-equipped gym.",
    image: gym,
  },
  {
    id: 3,
    title: "Shopping",
    description: "Explore a variety of shops and boutiques.",
    image: shopping,
  },
  {
    id: 4,
    title: "Barbershop",
    description: "Get a fresh cut and style at our barbershop.",
    image: barbershop,
  },
];


const NearbyServices = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? services.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === services.length - 1 ? 0 : current + 1);
  };
 

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h2 className="text-4xl font-times text-gray-900">Nearby Services</h2>
      </div>
      <div className="relative flex justify-center items-center bg-custom-blue py-16">
        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">❮</button>
        <div className="flex items-center bg-custom-blue w-full md:w-3/4 lg:w-2/3 h-96">
          <img src={services[current].image} alt={services[current].title} className="w-1/2 object-cover" style={{ height: '510px' }}/>

          <div className="p-6 w-1/2 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-times">{services[current].title}</h3>
            <p className="text-lg font-times mt-4">{services[current].description}</p>
          </div>
        </div>
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">❯</button>
      </div>
    </section>
  );
};

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [meeting, meeting2]; // Add your meeting and events images here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds (5000ms)

    return () => {
      clearInterval(interval); // Cleanup the interval when component unmounts
    };
  }, [images.length])

  return (
    <main className="bg-gray-100">
      {isDesktopOrLaptop ? (
        <div className="relative">
          <img src={hotelImage} alt="Hotel" className="w-full h-96 object-cover"/>
          <div className="absolute inset-0 bg-custom-blue bg-opacity-50"></div>
        </div>
      ) : (
        <div className="relative">
          <img src={hotelImage} alt="Hotel" className="w-full h-48 object-cover"/>
          <div className="absolute inset-0 bg-custom-blue bg-opacity-50"></div>
        </div>
      )}
<header className="bg-white py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-3xl font-times">Welcome to Caravan Dire Hotel</h1>
    <div className="flex items-center justify-center mt-2">
      <p className="text-xl text-gray-600 font-times flex">
        <FaStar className="text-yellow-500 mr-1" />
        <FaStar className="text-yellow-500 mr-1" />
        <FaStar className="text-yellow-500 mr-1" />
        <FaStar className="text-yellow-500" />
      </p>
    </div>
  </div>
</header>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-gray-900 font-times">Find luxury and serenity in Dire Dawa, Ethiopia</h2>
          <p className="mt-4 text-gray-600 font-times">
          Welcome to Caravan Dire Hotel, where luxury meets comfort in the heart of Dire Dawa, Ethiopia. Our hotel offers a range of exceptional services to ensure your stay is memorable and enjoyable. Indulge in a culinary journey at our diverse restaurant, featuring a variety of delicious food options and outdoor dining experiences. Savor delectable cakes and pastries prepared with care by our talented chefs.

Relax and unwind in our well-appointed rooms, equipped with modern amenities including high-speed WiFi and 24/7 security for your peace of mind. Whether you're here for business or leisure, our attentive staff are dedicated to providing personalized service to exceed your expectations.
          </p>
          <br /><br />
          <Link to="/about">
          <button className="bg-custom-blue font-times text-white text-lg px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-48">
           More About-us
          </button>
        </Link>
        </div>
      </section>
     
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-8 text-center font-times">Rooms and Suites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={room1} alt="Standard Room" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-times">Sweet Room</h3>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={room2} alt="Sweet Room" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-times">Semi-Sweet</h3>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={room3} alt="Standard Room" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-times">Twin Bed</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/rooms">
              <button className="bg-custom-blue font-times text-white text-lg px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-48">
               View more
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-times text-gray-900 text-center mb-8">Food and Beverage</h2>
          <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img src={restaurant} alt="Restaurant" className="w-full h-full object-cover"/>
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
          
              <p className="text-gray-600 text-lg font-times mb-4">
              Experience our restaurant with a variety of delicious dishes and beverages. From local specialties to international cuisines, our chefs craft each dish with care using fresh, seasonal ingredients to ensure a delightful dining experience for every guest.
              </p>
              <Link to="/restaurant">
                <button className="bg-custom-blue text-white font-times text-lg px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-48">Discover More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-times text-gray-900 text-center mb-8">Our Well-Known Foods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={special} alt="Chicken Mandi" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-times">Special Combo</h3>
                <p className="text-gray-600 mt-2 font-times">Special Combo- is a delicious middle-eastern chicken and rice dish with ...</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={chicken} alt="Chicken Mandi" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-times">Chicken Mandi</h3>
                <p className="text-gray-600 mt-2 font-times">Chicken Mandi - is a delicious middle-eastern chicken and rice dish with ...</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={pizza} alt="Chicken Mandi" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-times">Pizza</h3>
                <p className="text-gray-600 mt-2 font-times">Pizza - is a delicious middle-eastern chicken and rice dish with ...</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
  <Link to="/menu" className="bg-custom-blue text-white text-lg px-4 py-2 font-times rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-48 text-center">
    View menu
  </Link>
</div>

        </div>
      </section>
      <section className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
    <div className="max-w-full max-h-96 overflow-hidden flex justify-center items-center">
      <div className="relative w-full sm:w-120 md:w-144 lg:w-160 h-auto sm:h-96 md:h-120 lg:h-144">
        <video className="w-full h-full" controls>
          <source src={promotion} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</section>

<section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-times text-gray-900 text-center mb-8">Meetings and Events</h2>
        <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden flex items-center">
          <div className="p-4 w-1/2">
            <p className="text-gray-600 font-times">
              Our spacious meeting hall is equipped with modern facilities to accommodate various events. Whether you're hosting a corporate meeting, seminar, or social gathering, we offer flexible setups, audiovisual equipment, and catering services. The hall can accommodate up to 361 people, with options for tea breaks and lunch buffets tailored to your event's needs.
            </p>
            <Link to="/meeting" className="bg-custom-blue font-times text-white text-lg px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-48 text-center inline-block mt-4">
              See Detail
            </Link>
          </div>
          <img src={images[currentImageIndex]} alt="Meetings and Events" className="w-1/2 h-full object-cover" />
        </div>
      </div>
    </section>

      <NearbyServices />

      <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-times text-gray-900">Getting Here</h2>
    <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden" style={{ height: '500px' }}>
      <iframe
        className="w-full h-full rounded"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6812.753183884451!2d41.8515825!3d9.5969225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163101bb5da204fd%3A0x59b3f43b43a14f0e!2sCaravan%20Hotel!5e1!3m2!1sam!2set!4v1719844803749!5m2!1sam!2set"
        allowFullScreen=""
        loading="lazy"
        title="Hotel Location"
      ></iframe>
    </div>
  </div>
</section>
    </main>
  );
}

export default Home;
