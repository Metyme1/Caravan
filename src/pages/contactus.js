// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-grow p-8 bg-gray-100">
//         <h2 className="text-2xl  font-times font-bold mb-4">Contact Us</h2>
//         <div className="flex flex-wrap bg-white shadow-md rounded-lg p-8 mb-4">
//   <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//     <h3 className="text-xl font-bold font-times mb-4">Contact Information</h3>
//     <p className="text-gray-700 font-times mb-2">
//       <strong>Phone:</strong> (123) 456-7890
//     </p>
//     <p className="text-gray-700 mb-2 font-times">
//       <strong>Email:</strong> contact@hotelname.com
//     </p>
//     <p className="text-gray-700 font-times mb-2">
//       <strong>Address:</strong> Dire Dawa
//     </p>
//   </div>
//   <div className="w-full md:w-1/2 lg:w-2/3 p-4">
//     <form className="bg-white">
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-times font-bold mb-2" htmlFor="name">
//           Name
//         </label>
//         <input
//           className="shadow appearance-none border font-times rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="name"
//           type="text"
//           placeholder="Your name"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block font-times text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//           Email
//         </label>
//         <input
//           className="shadow  font-times appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="email"
//           type="email"
//           placeholder="Your email"
//         />
//       </div>
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-times font-bold mb-2" htmlFor="message">
//           Message
//         </label>
//         <textarea
//           className="shadow font-times appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="message"
//           rows="5"
//           placeholder="Your message"
//         ></textarea>
//       </div>
//       <div className="flex items-center justify-center">
//         <button
//         className="bg-custom-blue hover:bg-blue-700 font-times text-white  py-2 px-16 rounded-full focus:outline-none focus:shadow-outline"
//         type="submit">Send </button>
//         </div>

//     </form>
//   </div>
// </div>

//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <h3 className="text-xl font-bold font-times mb-4">Our Location</h3>
//           <div className="w-full h-96">
//             <iframe
//               className="w-full h-full rounded"
//               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6812.753183884451!2d41.8515825!3d9.5969225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163101bb5da204fd%3A0x59b3f43b43a14f0e!2sCaravan%20Hotel!5e1!3m2!1sam!2set!4v1719844803749!5m2!1sam!2set"
//               allowFullScreen=""
//               loading="lazy"
//               title="Hotel Location"
//             ></iframe>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Contact;



import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_vm5rgx9', 
      'template_1tinxfd', 
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'BaSuytnCa5_iJ0rNo' // Replace with your User ID
    ).then((response) => {
      alert('Email sent successfully');
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.log('FAILED...', error);
      alert('Failed to send email');
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-8 bg-gray-100">
        <h2 className="text-2xl font-times font-bold mb-4">Contact Us</h2>
        <div className="flex flex-wrap bg-white shadow-md rounded-lg p-8 mb-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-xl font-bold font-times mb-4">Contact Information</h3>
            <p className="text-gray-700 font-times mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-gray-700 mb-2 font-times">
              <strong>Email:</strong> contact@hotelname.com
            </p>
            <p className="text-gray-700 font-times mb-2">
              <strong>Address:</strong> Dire Dawa
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 p-4">
            <form className="bg-white" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-times font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border font-times rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-times text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow font-times appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-times font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow font-times appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-custom-blue hover:bg-blue-700 font-times text-white py-2 px-16 rounded-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h3 className="text-xl font-bold font-times mb-4">Our Location</h3>
          <div className="w-full h-96">
            <iframe
              className="w-full h-full rounded"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6812.753183884451!2d41.8515825!3d9.5969225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163101bb5da204fd%3A0x59b3f43b43a14f0e!2sCaravan%20Hotel!5e1!3m2!1sam!2set!4v1719844803749!5m2!1sam!2set"
              allowFullScreen=""
              loading="lazy"
              title="Hotel Location"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
