import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaCheckCircle, FaUsers, FaEnvelope, FaAddressBook } from "react-icons/fa";  // Added FaAddressBook for contact icon
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
        alert("There was an error fetching data. Please try again.");
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
        <h1>Welcome, Admin</h1>
        <p>Today’s Date: {currentDate}</p>
        <p>Current Time: {currentTime}</p> {/* Displaying the current time */}
      </header>

      <div className="dashboard-content">
        {/* Statistics Section */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <FaCalendarAlt className="stat-icon" />
            <h2>Total Appointments</h2>
            <p>{appointmentsCount}</p>
          </div>
          <div className="stat-card approved">
            <FaCheckCircle className="stat-icon approved-icon" />
            <h2>Approved Appointments</h2>
            <p>{approvedAppointmentsCount}</p>
          </div>
          {/* New stat card for Contact Details */}
          <div className="stat-card">
            <FaAddressBook className="stat-icon" />
            <h2>Contact Details</h2>
            <p>{contactDetailsCount}</p>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-btn" onClick={handleViewAppointments}>
              <FaCalendarAlt className="action-icon" /> View Appointments
            </button>
            <button className="action-btn" onClick={handleViewContactDetails}>
              <FaEnvelope className="action-icon" /> View Contact Details
            </button>
            <button className="action-btn" onClick={handleUploadSmile}>
              <FaUsers className="action-icon" /> Upload Smile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
