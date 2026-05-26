import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import HotelDetails from "../pages/HotelDetails";
import Booking from "../pages/Booking";
import BookingSummary from "../pages/BookingSummary";
import ProfilePage from "../pages/ProfilePage"
import HomePage from "../components/home/HomePage";
import FlightsPage from "../pages/FlightsPage";
import SettingsPage from "../pages/SettingsPage";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/hotels" element={<Hotels />} />
      <Route path="/hotels/:id" element={<HotelDetails />} />

      <Route path="/booking/:id" element={<Booking />} />
      <Route path="/booking-summary" element={<BookingSummary />} />

      <Route path="/flights" element={<FlightsPage />} />

      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />

    </Routes>
  );
}

export default AppRoutes;
