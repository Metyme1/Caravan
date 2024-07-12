import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Restaurant from './pages/res'; 
import Services from './pages/service'; 
import Contact from './pages/contactus'; 
import Footer from './components/Footer';
import RoomDetail from './pages/detailPage'; 
import Gallery from './pages/Gallery';
import Menu from './pages/menu'; 
import InternetService from './pages/InternetService'; 
import ParkingService from './pages/Parkingservice'; 
import MeetingHallService from './pages/MeetingHallService';
import ReservationForm from './components/reservation';
import Admin from './components/Admin';
import AboutUs from './pages/aboutus';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/internet" element={<InternetService />} /> 
            <Route path="/services/parking" element={<ParkingService />} /> 
            <Route path="/services/meeting-hall" element={<MeetingHallService />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<ReservationForm />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
