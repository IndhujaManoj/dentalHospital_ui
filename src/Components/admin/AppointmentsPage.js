import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AppointmentPage.css";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortOption, setSortOption] = useState("statusAsc");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/appointments");
        setAppointments(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch appointments.");
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleBackClick = () => {
    navigate("/admin/dashboard");
  };

  // Optimized filtering and sorting logic using useMemo
  const filteredAppointments = useMemo(() => {
    let filtered = [...appointments];

    // Apply status filter
    if (statusFilter) {
      filtered = filtered.filter((appointment) => appointment.status === statusFilter);
    }

    // Apply date filter
    if (dateFilter) {
      filtered = filtered.filter((appointment) => {
        const appointmentDate = new Date(appointment.date);
        const filterDate = new Date(dateFilter);
        return (
          appointmentDate.getFullYear() === filterDate.getFullYear() &&
          appointmentDate.getMonth() === filterDate.getMonth() &&
          appointmentDate.getDate() === filterDate.getDate()
        );
      });
    }

    // Sorting by status (ascending or descending)
    const priority = { pending: 1, approved: 2, cancelled: 3 };
    filtered.sort((a, b) => {
      return sortOption === "statusAsc"
        ? priority[a.status] - priority[b.status]
        : priority[b.status] - priority[a.status];
    });

    return filtered;
  }, [appointments, statusFilter, dateFilter, sortOption]);



  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/appointments/status`, { id, status });
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === id ? { ...appointment, status } : appointment
        )
      );
    } catch (err) {
      setError("Failed to update status.");
    }
  };
  
  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAppointments = filteredAppointments.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  const handleApplyFilters = () => {
    setCurrentPage(1); // Reset to the first page after applying filters
  };

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!appointments.length) {
    return <div className="error-message">No appointments available.</div>;
  }

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);

  const pageButtons = Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => paginate(index + 1)}
      className={`pagination-btn ${currentPage === index + 1 ? "active" : ""}`}
    >
      {index + 1}
    </button>
  ));

  return (
    <div className="appointments-container">
      <button className="back-btn" onClick={handleBackClick}>
        &#8592; Back to Dashboard
      </button>
      <h1 className="appointments-title">View Appointments</h1>

      <div className="appointments-table-wrapper">
        {/* Filter Controls */}
        <div className="filter-controls">
          <div className="filter-item">
            <label htmlFor="statusFilter">Status:</label>
            <select
              id="statusFilter"
              value={statusFilter}
              onChange={handleStatusFilterChange}
            >
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div className="filter-item">
            <label htmlFor="dateFilter">Date:</label>
            <input
              type="date"
              id="dateFilter"
              value={dateFilter}
              onChange={handleDateFilterChange}
            />
          </div>

          <div className="filter-item">
            <button onClick={handleApplyFilters}>Apply Filters</button>
          </div>
        </div>

        {/* Sorting Controls */}
        <div className="sorting-controls">
          <label htmlFor="sortDropdown">Sort By:</label>
          <select
            id="sortDropdown"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="statusAsc">Status: Pending First</option>
            <option value="statusDesc">Status: Approved First</option>
          </select>
        </div>

        {/* Appointments Table */}
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentAppointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.name}</td>
                <td>{formatDate(appointment.date)}</td>
                <td>{appointment.time}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.email}</td>
                <td>{appointment.message}</td>
                <td>
                  <div className="status-buttons">
                    <button
                      className={`status-btn pending ${appointment.status === "pending" ? "active" : ""}`}
                      onClick={() => handleStatusChange(appointment._id, "pending")}
                      disabled={appointment.status === "approved"}
                    >
                      Pending
                    </button>
                    <button
                      className={`status-btn approved ${appointment.status === "approved" ? "active" : ""}`}
                      onClick={() => handleStatusChange(appointment._id, "approved")}
                      disabled={appointment.status === "approved"}
                    >
                      Approved
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="pagination">
          {pageButtons}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
