import React from 'react';
import room1 from './assets/room1.jpg'; // adjust the path as necessary
import room2 from './assets/room2.jpg';
import room3 from './assets/r3.jpg';
import restaurant from './assets/res.jpg';
import food1 from './assets/food1.jpg';
import food2 from './assets/food2.jpg';
import meeting from './assets/meeting.jpeg';
import hotelImage from './assets/Hotel.jpg'; // Image above welcome
import GoogleMapComponent from './components/map'; // Import the GoogleMapComponent

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
          <button className="mt-6 bg-custom-blue text-white px-4 py-2 rounded-md">More about Us</button>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl  text-gray-900 mb-8 text-center font-times">Rooms and Suites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={room1} alt="Standard Room" className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl  font-times">Standard Room</h3>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={room2} alt="Sweet Room" className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl  font-times">Sweet Room</h3>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={room3} alt="Standard Room" className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl  font-times">Standard Room</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-custom-blue text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300">View More</button>
        </div>
      </div>
    </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Restaurant</h2>
          <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden">
            <img src={restaurant} alt="Restaurant" className="w-full h-64 object-cover"/>
            <div className="p-4">
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sem, lacinia facilisis venenatis et, dictum vel ipsum. Proin sodales tortor eu lectus aliquet commodo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Our Well-Known Foods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={food1} alt="Food" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-bold">Chicken Mandi</h3>
                <p className="text-gray-600">Chicken Mandi - is a delicious middle-eastern chicken and rice dish with ...</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={food2} alt="Food" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-bold">Chicken Mandi</h3>
                <p className="text-gray-600">Chicken Mandi - is a delicious middle-eastern chicken and rice dish with ...</p>
              </div>
            </div>
          </div>
          <button className="mt-6 bg-custom-blue text-white px-4 py-2 rounded-md">View More</button>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Meetings and Events</h2>
          <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden">
            <img src={meeting} alt="Meetings and Events" className="w-full h-64 object-cover"/>
            <div className="p-4">
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sem, lacinia facilisis venenatis et, dictum vel ipsum. Proin sodales tortor eu lectus aliquet commodo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Getting Here</h2>
          <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden">
            <GoogleMapComponent />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
