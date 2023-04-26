import { createContext, useState } from "react";
import HomePage from "./pages/homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import MobileMenu from "./components/MobileMenu";
import Header from "./components/Header";
import ShippingPage from "./pages/shippingDetails/ShippingPage";
import ChatBox from "./components/ChatBox";
import Booking from "./pages/bookingpage/Booking";

export const navbarOpenContext = createContext();

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  navbarOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <navbarOpenContext.Provider value={{ navbarOpen, setNavbarOpen }}>
      <Header />
      <MobileMenu />
      <ChatBox />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shippingPage" element={<ShippingPage />} />
        <Route path="/bookingPage" element={<Booking />} />
      </Routes>
    </navbarOpenContext.Provider>
  );
}

export default App;
