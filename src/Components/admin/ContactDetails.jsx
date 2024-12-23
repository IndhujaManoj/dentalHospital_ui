import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./ContactDetails.css";

function ContactDetailsPage() {
  const [contactDetails, setContactDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortOption, setSortOption] = useState("nameAsc");
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    // Fetch contact details
    axios
      .get("http://localhost:5000/api/contact") // Update with the correct API endpoint
      .then((response) => {
        setContactDetails(response.data.data); // Adjusted for API response structure
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching contact details:", error);
        setLoading(false);
      });
  }, []);

  const handleBackToDashboard = () => {
    navigate("/admin/dashboard"); // Navigate to the dashboard
  };

  // Function to format the date and time
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return { formattedDate, formattedTime };
  };

  // Function to delete contact
  const handleDeleteContact = (id) => {
    axios
      .delete(`http://localhost:5000/api/contact/${id}`)
      .then((response) => {
        console.log("Contact deleted:", response.data);
        // Remove the deleted contact from the state
        setContactDetails(contactDetails.filter((detail) => detail._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting contact:", error);
      });
  };

  // Memoized filtering and sorting logic
  const filteredAndSortedData = useMemo(() => {
    let filteredData = [...contactDetails];

    // Apply Name Filter
    if (nameFilter) {
      filteredData = filteredData.filter((detail) =>
        detail.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    // Apply Email Filter
    if (emailFilter) {
      filteredData = filteredData.filter((detail) =>
        detail.email.toLowerCase().includes(emailFilter.toLowerCase())
      );
    }

    // Apply Date Filter
    if (dateFilter) {
      filteredData = filteredData.filter((detail) => {
        const contactDate = new Date(detail.createdAt);
        const filterDate = new Date(dateFilter);
        return (
          contactDate.getFullYear() === filterDate.getFullYear() &&
          contactDate.getMonth() === filterDate.getMonth() &&
          contactDate.getDate() === filterDate.getDate()
        );
      });
    }

    // Sorting logic
    filteredData.sort((a, b) => {
      switch (sortOption) {
        case "nameAsc":
          return a.name.localeCompare(b.name);
        case "nameDesc":
          return b.name.localeCompare(a.name);
        case "dateAsc":
          return new Date(a.createdAt) - new Date(b.createdAt);
        case "dateDesc":
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return 0;
      }
    });

    return filteredData;
  }, [contactDetails, nameFilter, emailFilter, dateFilter, sortOption]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredAndSortedData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handlers for filters
  const handleNameFilterChange = (e) => setNameFilter(e.target.value);
  const handleEmailFilterChange = (e) => setEmailFilter(e.target.value);
  const handleDateFilterChange = (e) => setDateFilter(e.target.value);

  // Handlers for sorting
  const handleSortChange = (e) => setSortOption(e.target.value);

  if (loading) {
    return <div className="loading">Loading contact details...</div>;
  }

  return (
    <div className="contact-details-container">
      <button className="back-btn" onClick={handleBackToDashboard}>
        &#8592; Back to Dashboard
      </button>
      <h1 className="contact-details-title">Contact Details</h1>

      {/* Filter Controls */}
      <div className="filter-controls">
        <input
          type="text"
          placeholder="Filter by Name"
          value={nameFilter}
          onChange={handleNameFilterChange}
        />
        <input
          type="email"
          placeholder="Filter by Email"
          value={emailFilter}
          onChange={handleEmailFilterChange}
        />
        <input
          type="date"
          placeholder="Filter by Date"
          value={dateFilter}
          onChange={handleDateFilterChange}
        />
      </div>

      {/* Sorting Controls */}
      <div className="sorting-controls">
        <label htmlFor="sortDropdown">Sort By:</label>
        <select id="sortDropdown" value={sortOption} onChange={handleSortChange}>
          <option value="nameAsc">Name: A-Z</option>
          <option value="nameDesc">Name: Z-A</option>
          <option value="dateAsc">Date: Oldest First</option>
          <option value="dateDesc">Date: Newest First</option>
        </select>
      </div>

      {contactDetails.length === 0 ? (
        <p className="no-contacts-message">No contact details available.</p>
      ) : (
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th> {/* New column for Delete button */}
            </tr>
          </thead>
          <tbody>
            {currentData.map((detail) => {
              const { formattedDate, formattedTime } = formatDateTime(detail.createdAt);
              return (
                <tr key={detail._id}>
                  <td>{detail.name}</td>
                  <td>{detail.email}</td>
                  <td>{detail.message}</td>
                  <td>{formattedDate}</td>
                  <td>{formattedTime}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteContact(detail._id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(filteredAndSortedData.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`pagination-btn ${currentPage === index + 1 ? "active" : ""}`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default ContactDetailsPage;
