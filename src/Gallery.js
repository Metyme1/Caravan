
// import React, { useState } from 'react';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// import room1 from './assets/room1.jpg';
// import room2 from './assets/room2.jpg';
// import room3 from './assets/r3.jpg';
// import room4 from './assets/room1.jpg';
// import room5 from './assets/room2.jpg';
// import hotelView1 from './assets/v1.jpeg';
// import hotelView2 from './assets/v2.jpeg';
// import hotelView3 from './assets/v3.jpeg';
// import hotelView4 from './assets/v3.jpeg';
// import hotelView5 from './assets/v2.jpeg';
// import dining1 from './assets/d1.jpeg';
// import dining2 from './assets/d2.jpeg';
// import dining3 from './assets/d3.jpeg';
// import dining4 from './assets/d1.jpeg';
// import dining5 from './assets/d2.jpeg';

// const Gallery = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(0);
//   const [currentSection, setCurrentSection] = useState([]);
  
//   const sections = {
//     rooms: [room1, room2, room3, room4, room5],
//     hotelViews: [hotelView1, hotelView2, hotelView3, hotelView4, hotelView5],
//     dining: [dining1, dining2, dining3, dining4, dining5],
//   };

//   const openLightbox = (section, index) => {
//     setCurrentSection(sections[section]);
//     setCurrentImage(index);
//     setIsOpen(true);
//   };

//   const closeLightbox = () => {
//     setIsOpen(false);
//   };

//   const moveNext = () => {
//     setCurrentImage((currentImage + 1) % currentSection.length);
//   };

//   const movePrev = () => {
//     setCurrentImage((currentImage + currentSection.length - 1) % currentSection.length);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">

//       <nav className="bg-white py-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-6">
//           <a href="#rooms" className="text-custom-blue font-medium hover:underline">Rooms</a>
//           <a href="#hotelView" className="text-custom-blue font-medium hover:underline">Hotel View</a>
//           <a href="#services" className="text-custom-blue font-medium hover:underline">Services</a>
//           <a href="#dining" className="text-custom-blue font-medium hover:underline">Dining</a>
//           <a href="#events" className="text-custom-blue font-medium hover:underline">Event and Meeting</a>
//         </div>
//       </nav>
//       <section id="rooms" className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl font-bold mb-8">Rooms</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <img
//               src={sections.rooms[0]}
//               alt="Room 1"
//               className="w-full h-96 object-cover rounded-lg cursor-pointer md:col-span-2"
//               onClick={() => openLightbox('rooms', 0)}
//             />
//             <div className="grid grid-cols-1 gap-6">
//               {sections.rooms.slice(1).map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Room ${index + 2}`}
//                   className="w-full h-48 object-cover rounded-lg cursor-pointer"
//                   onClick={() => openLightbox('rooms', index + 1)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="hotelView" className="py-16 bg-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl font-bold mb-8">Hotel View</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <img
//               src={sections.hotelViews[0]}
//               alt="Hotel View 1"
//               className="w-full h-96 object-cover rounded-lg cursor-pointer md:col-span-2"
//               onClick={() => openLightbox('hotelViews', 0)}
//             />
//             <div className="grid grid-cols-1 gap-6">
//               {sections.hotelViews.slice(1).map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Hotel View ${index + 2}`}
//                   className="w-full h-48 object-cover rounded-lg cursor-pointer"
//                   onClick={() => openLightbox('hotelViews', index + 1)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="services" className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl font-bold mb-8">Services</h2>
//           <p className="text-gray-600">Details about the services provided by the hotel can be placed here.</p>
//         </div>
//       </section>
//       <section id="dining" className="py-16 bg-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl font-bold mb-8">Dining</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <img
//               src={sections.dining[0]}
//               alt="Dining 1"
//               className="w-full h-96 object-cover rounded-lg cursor-pointer md:col-span-2"
//               onClick={() => openLightbox('dining', 0)}
//             />
//             <div className="grid grid-cols-1 gap-6">
//               {sections.dining.slice(1).map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Dining ${index + 2}`}
//                   className="w-full h-48 object-cover rounded-lg cursor-pointer"
//                   onClick={() => openLightbox('dining', index + 1)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="events" className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl font-bold mb-8">Event and Meeting</h2>
//           <p className="text-gray-600">Details about events and meetings held at the hotel can be placed here.</p>
//         </div>
//       </section>
//       <footer className="bg-custom-blue text-white py-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between">
//             <div>
//               <h1 className="text-lg font-bold">Carivan Dire Hotel</h1>
//             </div>
//             <div>
//               <p>Contact Us</p>
//               <p>+251 0909090909</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//       {isOpen && (
//         <Lightbox
//           mainSrc={currentSection[currentImage]}
//           nextSrc={currentSection[(currentImage + 1) % currentSection.length]}
//           prevSrc={currentSection[(currentImage + currentSection.length - 1) % currentSection.length]}
//           onCloseRequest={closeLightbox}
//           onMovePrevRequest={movePrev}
//           onMoveNextRequest={moveNext}
//         />
//       )}
//     </div>
//   );
// }

// export default Gallery;



// src/Gallery.js
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import room1 from './assets/room1.jpg';
import room2 from './assets/room2.jpg';
import room3 from './assets/r3.jpg';
import room4 from './assets/room1.jpg';
import room5 from './assets/room2.jpg';
import room6 from './assets/r3.jpg';
import room7 from './assets/room1.jpg';
import room8 from './assets/room2.jpg';
import room9 from './assets/r3.jpg';
import hotelView1 from './assets/v1.jpeg';
import hotelView2 from './assets/v2.jpeg';
import hotelView3 from './assets/v3.jpeg';
import hotelView4 from './assets/v3.jpeg';
import hotelView5 from './assets/v2.jpeg';
import hotelView6 from './assets/v1.jpeg';
import hotelView7 from './assets/v3.jpeg';
import hotelView8 from './assets/v2.jpeg';
import hotelView9 from './assets/v1.jpeg';
import dining1 from './assets/d1.jpeg';
import dining2 from './assets/d2.jpeg';
import dining3 from './assets/d3.jpeg';
import dining4 from './assets/d1.jpeg';
import dining5 from './assets/d2.jpeg';
import dining6 from './assets/d3.jpeg';
import dining7 from './assets/d1.jpeg';
import dining8 from './assets/d2.jpeg';
import dining9 from './assets/d3.jpeg';

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
