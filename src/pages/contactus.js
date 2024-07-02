import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="flex flex-wrap bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p className="mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="mb-2">
              <strong>Email:</strong> contact@hotelname.com
            </p>
            <p className="mb-2">
              <strong>Address: </strong>
              Dire Dawa
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 p-4">
            <form className="bg-white">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h3 className="text-xl font-bold mb-4">Our Location</h3>
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
}

export default Contact;