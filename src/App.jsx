import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/HomePage/Homepage';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import BookingForm from './components/BookingForm/BookingForm';
import UserProfile from './components/UserProfile/UserProfile';
import LoginRegister from './components/LoginRegister/LoginRegister';
import BookingConfirmation from './components/BookingConfirmation/BookingConfirmation';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

function App() {
  const [user, setUser] = useState(null); // Manage user state as needed

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/flights" element={<BookingForm />} />
        <Route path="/hotels" element={<Search />} />
        <Route path="/trains" element={<Search />} />
        <Route path="/buses" element={<Search />} />
        <Route path="/search-results" element={<SearchResults results={[]} />} />
        <Route path="/bookings" element={<BookingForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
