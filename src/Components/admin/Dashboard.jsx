import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaCheckCircle, FaUsers, FaEnvelope, FaAddressBook } from "react-icons/fa"; // Added FaAddressBook for contact icon
import "./Dashboard.css";

function Dashboard() {
  const [appointmentsCount, setAppointmentsCount] = useState(0);
  const [approvedAppointmentsCount, setApprovedAppointmentsCount] = useState(0);
  const [contactDetailsCount, setContactDetailsCount] = useState(0); // State for contact details count
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const navigate = useNavigate();

  const handleViewAppointments = () => {
    navigate("/admin/appointments");
  };

  const handleViewContactDetails = () => {
    navigate("/admin/contactDetails");
  };

  const handleUploadSmile = () => {
    navigate("/admin/image-upload"); // Navigates to the Upload Smile page
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch appointments count
        const appointmentsResponse = await axios.get("http://localhost:5000/api/appointments");
        const totalAppointments = appointmentsResponse.data.data.length;
        const approvedAppointments = appointmentsResponse.data.data.filter(
          (appointment) => appointment.status === "approved"
        ).length;

        setAppointmentsCount(totalAppointments);
        setApprovedAppointmentsCount(approvedAppointments);

        // Fetch contact details count
        const contactDetailsResponse = await axios.get("http://localhost:5000/api/contact"); // Replace with actual API endpoint
        setContactDetailsCount(contactDetailsResponse.data.data.length); // Adjust based on response structure
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();

    // Update current time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up the interval when component unmounts
    return () => clearInterval(timeInterval);
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-header__title">Welcome, Admin</h1>
        <p className="dashboard-header__info">Today’s Date: {currentDate}</p>
        <p className="dashboard-header__info">Current Time: {currentTime}</p> {/* Displaying the current time */}
      </header>

      <div className="dashboard-content">
        {/* Statistics Section */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <FaCalendarAlt className="stat-card__icon" />
            <h2 className="stat-card__title">Total Appointments</h2>
            <p className="stat-card__count">{appointmentsCount}</p>
          </div>
          <div className="stat-card stat-card--approved">
            <FaCheckCircle className="stat-card__icon" />
            <h2 className="stat-card__title">Approved Appointments</h2>
            <p className="stat-card__count">{approvedAppointmentsCount}</p>
          </div>
          {/* New stat card for Contact Details */}
          <div className="stat-card">
            <FaAddressBook className="stat-card__icon" />
            <h2 className="stat-card__title">Contact Details</h2>
            <p className="stat-card__count">{contactDetailsCount}</p>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="quick-actions">
          <h2 className="quick-actions__title">Quick Actions</h2>
          <div className="quick-actions__grid">
            <button className="action-btn" onClick={handleViewAppointments}>
              <FaCalendarAlt className="action-btn__icon" /> View Appointments
            </button>
            <button className="action-btn" onClick={handleViewContactDetails}>
              <FaEnvelope className="action-btn__icon" /> View Contact Details
            </button>
            <button className="action-btn" onClick={handleUploadSmile}>
              <FaUsers className="action-btn__icon" /> Upload Smile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
