import React, { useState, useEffect } from 'react';
import { FaPhone } from 'react-icons/fa';
import meetingHall1 from '../assets/m1.JPG';
import meetingHall2 from '../assets/m2.JPG';
import meetingHall3 from '../assets/m3.JPG';

const MeetingHallDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [meetingHall1, meetingHall2, meetingHall3]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => {
      clearInterval(interval); 
    };
  }, [images.length]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <img
                src={images[currentImageIndex]}
                alt="Meeting Hall"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:col-span-1">
              <h2 className="text-3xl font-times text-gray-900 mb-4">Meeting Hall at Caravan Dire Hotel</h2>
              <p className="text-gray-600 font-times leading-relaxed">
                Our meeting hall at Caravan Dire Hotel is a versatile space designed to accommodate a variety of events. Whether you're planning a corporate conference, meeting, or a special celebration, our hall offers seating for up to 361 guests. With state-of-the-art audiovisual equipment and dedicated event planning services, we ensure every detail is tailored to your needs.
              </p>
              <p className="text-gray-600 font-times leading-relaxed mt-4">
                For inquiries regarding availability, pricing, or to book the meeting hall, please contact our events team at:
              </p>
              <div className="flex items-center text-custom-blue font-times leading-relaxed mt-2">
                <FaPhone className="mr-2" />
                <span>0254-114312</span>
              </div>
              <p className="text-gray-600 font-times leading-relaxed mt-2">
                Our team is ready to assist you with any questions you may have about hosting your event at Caravan Dire Hotel.
              </p>
              <h3 className="text-2xl font-times text-gray-900 mt-8 mb-4">Catering Options</h3>
              <ul className="list-disc text-gray-600 font-times leading-relaxed">
                <li>Tea break buffet with a selection of fruits, cookies, tea, and coffee</li>
                <li>Lunch buffet customized based on your event's requirements</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MeetingHallDetail;
