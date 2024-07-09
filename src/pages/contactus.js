import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name) newErrors.from_name = 'Name is required';
    if (!formData.from_email) newErrors.from_email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const loadingToastId = toast.loading('Sending email...', {
      position: 'top-right',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(
        (result) => {
          toast.update(loadingToastId, {
            render: 'Email sent successfully!',
            type: 'success',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          // Reload the page after a delay
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (error) => {
          toast.update(loadingToastId, {
            render: 'Failed to send email. Please try again later.',
            type: 'error',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4 sm:p-8 bg-gray-100">
        <div className="flex justify-center mb-4">
          <h2 className="text-4xl font-times">Contact Us</h2>
        </div>
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-4 md:p-8 mb-4">
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold font-times mb-4">Contact Information</h3>
            <p className="text-gray-700 font-times mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-gray-700 mb-2 font-times">
              <strong>Email:</strong> contact@gmail.com
            </p>
            <p className="text-gray-700 font-times mb-2">
              <strong>Address:</strong> Dire Dawa
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white shadow-md rounded px-4 md:px-8 py-4 md:py-8 mb-4 md:mb-0"
            >
              <div className="mb-4">
                <label className="block font-times text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className={`shadow font-times appearance-none border ${
                    errors.from_name ? 'border-red-500' : ''
                  } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="name"
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
                {errors.from_name && (
                  <p className="text-red-500 text-xs italic">{errors.from_name}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-times text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className={`shadow font-times appearance-none border ${
                    errors.from_email ? 'border-red-500' : ''
                  } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="email"
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Your email"
                />
                {errors.from_email && (
                  <p className="text-red-500 text-xs italic">{errors.from_email}</p>
                )}
              </div>
              <div className="mb-6">
                <label className="block font-times text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className={`shadow font-times appearance-none border ${
                    errors.message ? 'border-red-500' : ''
                  } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="message"
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs italic">{errors.message}</p>
                )}
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

        <div className="bg-white shadow-md rounded px-4 md:px-8 pt-4 md:pt-8 pb-8 mb-4">
          <h3 className="text-xl font-bold font-times mb-4">Our Location</h3>
          <div className="w-full h-64 md:h-96">
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
      <ToastContainer />
    </div>
  );
};

export default Contact;
