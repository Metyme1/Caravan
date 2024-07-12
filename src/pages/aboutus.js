import React from 'react';
import hotel from '../assets/Home.JPG'
import dining from '../assets/res.JPG'
import room from '../assets/sweet1.JPG'
import meet from '../assets/m1.JPG'
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <img
                src={hotel}
                alt="Hotel Exterior"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:col-span-1">
              <h2 className="text-3xl font-times text-gray-900 mb-4">Welcome to Caravan Dire Hotel</h2>
              <p className="text-gray-600  font-times leading-relaxed">
                Discover a unique blend of luxury and comfort at Caravan Dire Hotel, nestled in the heart of Dire Dawa, Ethiopia. From our luxurious accommodations to our exquisite dining options and personalized service, we strive to provide an unforgettable experience for every guest.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-times text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 font-times leading-relaxed">
                At Caravan Dire Hotel, our vision is to set new standards in luxury accommodation and personalized service in Dire Dawa. We aim to create memorable experiences and exceed our guests' expectations at every opportunity.
              </p>
            </div>
            <div className="md:col-span-1">
              <h3 className="text-2xl font-times text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 font-times leading-relaxed">
                Our mission is to provide exceptional hospitality and ensure every guest feels valued and cherished. We are committed to delivering unparalleled service, luxurious accommodations, and memorable dining experiences that reflect our dedication to excellence.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <img
                src={dining}
                alt="Dining Area"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:col-span-1">
              <h3 className="text-2xl font-times text-gray-900 mb-4">Our Dining Experience</h3>
              <p className="text-gray-600 font-times leading-relaxed">
                Indulge in a culinary journey at Caravan Dire Hotel, where our restaurant offers a diverse menu of local and international cuisines. Whether you're dining indoors or enjoying al fresco dining in our scenic outdoor spaces, savor the flavors of Dire Dawa with every bite.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-times text-gray-900 mb-4">Our Accommodations</h3>
              <p className="text-gray-600  font-times leading-relaxed">
                Experience comfort and elegance in our spacious rooms and suites designed for relaxation and rejuvenation. Each room at Caravan Dire Hotel is equipped with modern amenities and offers a serene ambiance, perfect for a memorable stay in Dire Dawa.
              </p>
            </div>
            <div className="md:col-span-1">
              <img
                src={room}
                alt="Hotel Room"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <img
                src={meet}
                alt="Meeting Hall"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:col-span-1">
              <h3 className="text-2xl font-times text-gray-900 mb-4">Meeting Hall for 361 People</h3>
              <p className="text-gray-600 font-times leading-relaxed">
                Host your events and conferences in our spacious meeting hall that accommodates up to 361 people. Whether it's a corporate seminar, meeting, or special event, our versatile space and dedicated service ensure a successful and memorable occasion.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <Link to="/" className="bg-custom-blue  text-white text-lg px-6 py-3 font-times rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              Explore Our Hotel
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
