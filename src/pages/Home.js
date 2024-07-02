import React, { useState } from 'react';
import room1 from '../assets/room1.jpg'; 
import room2 from '../assets/room2.jpg';
import room3 from '../assets/r3.jpg';
import restaurant from '../assets/res.jpg';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import meeting from '../assets/meeting.jpeg';
import hotelImage from '../assets/Hotel.jpg'; 
import GoogleMapComponent from '../components/map'; 
import sauna from '../assets/sauna.jpg';
import gym from '../assets/gym.jpg';
import shopping from '../assets/shop.jpg';
import barbershop from '../assets/barber.jpeg';

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
        <img src={services[current].image} alt={services[current].title} className="w-1/2 object-cover " style={{ height: '510px' }}/>

          <div className="p-6 w-1/2 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-times ">{services[current].title}</h3>
            <p className="text-lg  font-times mt-4">{services[current].description}</p>
          </div>
        </div>
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">❯</button>
      </div>
    </section>
  );
};
const Home = () => {
  return (
    <main className="bg-gray-100">
      <div className="relative">
        <img src={hotelImage} alt="Hotel" className="w-full h-96 object-cover"/>
        <div className="absolute inset-0 bg-custom-blue bg-opacity-50"></div>
      </div>
      <header className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-times">Welcome to Carivan Dire Hotel</h1>
          <p className="text-xl text-gray-600 font-times">A LUXURY COLLECTION HOTEL, Dire Dawa</p>
        </div>
      </header>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-gray-900 font-times">Find luxury and serenity in Dire Dawa, Ethiopia</h2>
          <p className="mt-4 text-gray-600 font-times">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sem, lacinia facilisis venenatis et, dictum vel ipsum. Proin sodales tortor eu lectus aliquet commodo.
          </p>
          <button className="bg-custom-blue font-times text-white text-lg px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-48">Learn More</button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-8 text-center font-times">Rooms and Suites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={room1} alt="Standard Room" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-times">Standard Room</h3>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={room2} alt="Sweet Room" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-times">Sweet Room</h3>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={room3} alt="Standard Room" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-times">Standard Room</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-custom-blue font-times text-white text-lg px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-48">Learn More</button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-times text-gray-900 text-center mb-8">Food and Beverage</h2>
          <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden flex">
            <div className="w-1/2">
              <img src={restaurant} alt="Restaurant" className="w-full h-full object-cover"/>
            </div>
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-times mb-4">Worldly Cuisine</h3>
              <p className="text-gray-600 text-lg font-times mb-4">Providing a bountiful array of flavors and aromas, the Sheraton Addis offers a choice of eleven restaurant and lounge options that will seduce the most discerning palate with culinary delights from all around the world—from Italy’s Stagioni and India’s Shaheen, to Asian and Middle Eastern nights at Summerfields.</p>
              <button className="bg-custom-blue font-times text-white text-lg px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-48">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-times text-gray-900 text-center mb-8">Our Well-Known Foods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={food1} alt="Chicken Mandi" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-times">Chicken Mandi</h3>
                <p className="text-gray-600 mt-2 font-times">Chicken Mandi - is a delicious middle-eastern chicken and rice dish with ...</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={food2} alt="Chicken Mandi" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-times">Chicken Mandi</h3>
                <p className="text-gray-600 mt-2 font-times">Chicken Mandi - is a delicious middle-eastern chicken and rice dish with ...</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={food1} alt="Chicken Mandi" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-times">Chicken Mandi</h3>
                <p className="text-gray-600 mt-2 font-times">Chicken Mandi - is a delicious middle-eastern chicken and rice dish with ...</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-custom-blue text-white text-lg px-4 py-2 font-times rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-48">View menu</button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-times text-gray-900 text-center mb-8">Meetings and Events</h2>
    <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden flex items-center">
      <div className="p-4 w-1/2">
        <p className="text-gray-600 font-times">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sem, lacinia facilisis venenatis et, dictum vel ipsum. Proin sodales tortor eu lectus aliquet commodo.</p>
      </div>
      <img src={meeting} alt="Meetings and Events" className="w-1/2 h-full object-cover"/>
    </div>
    <div className="flex justify-center mt-10">
            <button className="bg-custom-blue text-white text-lg px-4 py-2 font-times rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-48">Learn More</button>
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
