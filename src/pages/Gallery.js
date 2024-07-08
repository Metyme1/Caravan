
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import room1 from '../assets/semi1.jpg';
import room2 from '../assets/twin3.JPG';
import room3 from'../assets/twin4.JPG';
import room4 from '../assets/twin1.JPG';
import room5 from '../assets/sweet3.JPG';
import room6 from'../assets/sweet4.JPG';
import room7 from '../assets/semi2.jpg';
import room8 from '../assets/semi4.JPG';
import room9 from'../assets/semi5.JPG';




import hotelView1 from '../assets/v1.jpeg';
import hotelView2 from '../assets/v2.jpeg';
import hotelView3 from '../assets/v3.jpeg';
import hotelView4 from '../assets/v3.jpeg';
import hotelView5 from '../assets/v2.jpeg';
import hotelView6 from '../assets/v1.jpeg';
import hotelView7 from '../assets/v3.jpeg';
import hotelView8 from '../assets/v2.jpeg';
import hotelView9 from '../assets/v1.jpeg';
import dining1 from '../assets/food1.jpg';
import dining2 from '../assets/food2.jpg';
import dining3 from '../assets/food3.jpg';
import dining4 from '../assets/food4.jpg';
import dining5 from '../assets/food5.jpg';
import dining6 from '../assets/food6.jpg';
import dining7 from '../assets/food7.jpg';
import dining8 from '../assets/food8.jpg';
import dining9 from '../assets/food9.jpg';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSection, setCurrentSection] = useState([]);
  const [activeSection, setActiveSection] = useState('rooms');
  
  const sections = {
    rooms: [room1, room2, room3, room4, room5, room6, room7, room8, room9],
    hotelViews: [hotelView1, hotelView2, hotelView3, hotelView4, hotelView5, hotelView6, hotelView7, hotelView8, hotelView9],
    dining: [dining1, dining2, dining3, dining4, dining5, dining6, dining7, dining8, dining9],
  };

  const openLightbox = (section, index) => {
    setCurrentSection(sections[section]);
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const moveNext = () => {
    setCurrentImage((currentImage + 1) % currentSection.length);
  };

  const movePrev = () => {
    setCurrentImage((currentImage + currentSection.length - 1) % currentSection.length);
  };

  return (
    <div className="bg-white min-h-screen">

<nav className="bg-white py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-6">
          <a
            href="#rooms"
            className={`text-custom-blue font-medium hover:underline font-times ${activeSection === 'rooms' ? 'underline' : ''}`}
            onClick={() => setActiveSection('rooms')}
          >
            Rooms
          </a>
          <a
            href="#hotelView"
            className={`text-custom-blue font-medium hover:underline font-times ${activeSection === 'hotelView' ? 'underline' : ''}`}
            onClick={() => setActiveSection('hotelView')}
          >
            Hotel View
          </a>
          <a
            href="#services"
            className={`text-custom-blue font-medium hover:underline font-times ${activeSection === 'services' ? 'underline' : ''}`}
            onClick={() => setActiveSection('services')}
          >
            Services
          </a>
          <a
            href="#dining"
            className={`text-custom-blue font-medium hover:underline font-times ${activeSection === 'dining' ? 'underline' : ''}`}
            onClick={() => setActiveSection('dining')}
          >
            Dining
          </a>
          <a
            href="#events"
            className={`text-custom-blue font-medium hover:underline font-times ${activeSection === 'events' ? 'underline' : ''}`}
            onClick={() => setActiveSection('events')}
          >
            Event and Meeting
          </a>
        </div>
      </nav>
      <section id="rooms" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl  mb-8 text-center font-times">Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.rooms.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Room ${index + 1}`}
                className="w-full h-64 object-cover  cursor-pointer"
                style={index === 3 ? { gridColumn: 'span 2', gridRow: 'span 2', height: '400px', width: '800px' } : { height: '200px' }}
                onClick={() => openLightbox('rooms', index)}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="dining" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-times text-center  mb-8">Dining</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {sections.dining.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Dining ${index + 1}`}
          className="w-full object-cover cursor-pointer"
          style={index === 3 ? { gridColumn: 'span 2', gridRow: 'span 2', height: '400px', width: '800px' } : { height: '200px' }}
          onClick={() => openLightbox('dining', index)}
        />
      ))}
    </div>
  </div>
</section>
      <section id="hotelView" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-times text-center mb-8">Hotel View</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.hotelViews.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Hotel View ${index + 1}`}
                className="w-full h-64 object-cover  cursor-pointer"
                style={index === 3 ? { gridColumn: 'span 2', gridRow: 'span 2', height: '400px', width: '800px' } : { height: '200px' }}
                onClick={() => openLightbox('hotelViews', index)}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-times  text-center  mb-8">Services</h2>
          <p className="text-gray-600">Details about the services provided by the hotel can be placed here.</p>
        </div>
      </section>


      <section id="events" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-times text-center  mb-8">Event and Meeting</h2>
          <p className="text-gray-600 font-times">Details about events and meetings held at the hotel can be placed here.</p>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={currentSection[currentImage]}
          nextSrc={currentSection[(currentImage + 1) % currentSection.length]}
          prevSrc={currentSection[(currentImage + currentSection.length - 1) % currentSection.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={movePrev}
          onMoveNextRequest={moveNext}
        />
      )}
    </div>
  );
}

export default Gallery;
