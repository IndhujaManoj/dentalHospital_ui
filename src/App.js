import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Smile from "./Components/Smile";
import Treatments from "./Components/Treatments";
import Oralandmaxillifacial from "./Components/Oralandmaxillifacial";
import Orthodontics from "./Components/Orthodontics";
import CosmeticDentistry from "./Components/CosmeticDentistry";
import Dentalveneers from "./Components/Dentalveneers";
import Teethwhitening from "./Components/Teethwhitening";
import Laserdentistry from "./Components/Laserdentistry";
import Pediatricdentistry from "./Components/Pediatricdentistry";
import Sedationdentistry from "./Components/Sedationdentistry";
import Smilemakeover from "./Components/Smilemakeover";
import Dentalbridges from "./Components/Dentalbridges";
import Dentalimplants from "./Components/Dentalimplants";
import RootCanaltreatment from "./Components/Rootcanaltreatment";
import Brushingtechniques from "./Components/Brushingtechniques";
import Teethscaling from "./Components/Teethscaling";
import Dentalcrowns from "./Components/Dentalcrowns";
import Dentures from "./Components/Dentures";
import Login from "./Components/admin/Login";
import Dashboard from "./Components/admin/Dashboard";
import AppointmentsPage from "./Components/admin/AppointmentsPage";
import ContactDetails from "./Components/admin/ContactDetails";
import SmileImage from "./Components/admin/SmileImage";
import "./App.css";

function AppContent() {
  const location = useLocation(); // Get the current route

  // Routes where Navbar and Footer are hidden
  const hideNavbarFooterRoutes = [
    "/admin/login",
    "/admin/dashboard",
    "/admin/appointments",
    "/admin/contactDetails",
    "/admin/image-upload",
  ];

  // Check if the user is authenticated as an admin
  const isAdminAuthenticated = localStorage.getItem("admin");

  // Determine if Navbar/Footer should be hidden
  const isNavbarFooterHidden = hideNavbarFooterRoutes.includes(location.pathname);

  console.log("Current Pathname:", location.pathname);
  console.log("Is Navbar hidden?", isNavbarFooterHidden);

  return (
    <div className="App">
      {/* Render Navbar only when not on admin routes */}
      {/* {!isNavbarFooterHidden && <Navbar />} */}
<Navbar/>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/smile-gallery" element={<Smile />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/treatments/oral-maxillofacial" element={<Oralandmaxillifacial />} />
        <Route path="/treatments/orthodontics" element={<Orthodontics />} />
        <Route path="/treatments/cosmetic-dentistry" element={<CosmeticDentistry />} />
        <Route path="/treatments/dental-veneers" element={<Dentalveneers />} />
        <Route path="/treatments/teeth-whitening" element={<Teethwhitening />} />
        <Route path="/treatments/laser-dentistry" element={<Laserdentistry />} />
        <Route path="/treatments/pediatric-dentistry" element={<Pediatricdentistry />} />
        <Route path="/treatments/sedation-dentistry" element={<Sedationdentistry />} />
        <Route path="/treatments/smile-makeover" element={<Smilemakeover />} />
        <Route path="/treatments/dental-bridges" element={<Dentalbridges />} />
        <Route path="/treatments/dental-implants" element={<Dentalimplants />} />
        <Route path="/treatments/root-canal-treatment" element={<RootCanaltreatment />} />
        <Route path="/treatments/brushing-techniques" element={<Brushingtechniques />} />
        <Route path="/treatments/teeth-scaling" element={<Teethscaling />} />
        <Route path="/treatments/dental-crowns" element={<Dentalcrowns />} />
        <Route path="/treatments/dentures" element={<Dentures />} />

        {/* Admin Routes */}
        <Route
          path="/admin/login"
          element={isAdminAuthenticated ? <Navigate to="/admin/dashboard" /> : <Login />}
        />
        <Route
          path="/admin/dashboard"
          element={isAdminAuthenticated ? <Dashboard /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/appointments"
          element={isAdminAuthenticated ? <AppointmentsPage /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/contactDetails"
          element={isAdminAuthenticated ? <ContactDetails /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/image-upload"
          element={isAdminAuthenticated ? <SmileImage /> : <Navigate to="/admin/login" />}
        />
      </Routes>

      {/* Render Footer only when not on admin routes */}
      {!isNavbarFooterHidden && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
