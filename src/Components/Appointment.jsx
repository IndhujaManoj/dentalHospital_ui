import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Appointment.css";
import Appointmentimg from "../assets/appo.png";

const Appointment = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedTime, setSelectedTime] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);

  // Validate inputs
  const validateInput = (name, date, time, phone, email, message) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required.";
    }

    if (!date) {
      errors.date = "Date is required.";
    }

    if (!time) {
      errors.time = "Time is required.";
    }

    if (!phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Invalid phone number. It should be a 10-digit number.";
    }

    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address. Ensure it follows the format example@example.com.";
    }

    if (!message.trim()) {
      errors.message = "Message is required.";
    }

    return errors;
  };

  // Fetch booked slots for the selected date
  useEffect(() => {
    if (date) {
      const fetchBookedSlots = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/appointments/booked-slots?date=${date}`
          );
          if (response.data) {
            setBookedSlots(response.data.bookedSlots); // Store the booked slots
          }
        } catch (error) {
          console.error("Error fetching booked slots:", error);
        }
      };
      fetchBookedSlots();
    }
  }, [date]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateInput(name, date, selectedTime, phone, email, message);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Submit the appointment to the API
        const response = await axios.post("http://localhost:5000/api/appointments", {
          name,
          date,
          time: selectedTime,
          phone,
          email,
          message,
        });

        if (response.data.success) {
          alert("Appointment request submitted successfully!");

          // Clear form inputs
          setName("");
          setDate("");
          setSelectedTime("");
          setPhone("");
          setEmail("");
          setMessage("");
          setErrors({});
        } else {
          alert("Error submitting the appointment. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting appointment:", error);
        alert("Error submitting the appointment. Please try again.");
      }
    }
  };

  const handleTimeSelect = (slot) => {
    if (bookedSlots.includes(slot)) {
      alert("This time slot is already booked. Please select another one.");
      return;
    }
    setSelectedTime(slot);
    setShowDropdown(false);
  };

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM"
  ];

  return (
    <div className="container-fluid">
      <div className="row appointment-container">
        {/* Left Side: Form */}
        <div className="col-md-6 form-side">
          <h2 className="mb-4">Make an Appointment</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name*"
              className={`form-control mb-3 ${errors.name ? "is-invalid" : ""}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            
            <input
              name="date"
              type="date"
              placeholder="dd-mm-yyyy*"
              className={`form-control mb-3 ${errors.date ? "is-invalid" : ""}`}
              min={new Date().toISOString().split("T")[0]} // Restrict to today's date and later
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && <div className="invalid-feedback">{errors.date}</div>}

            <div className="position-relative mb-3">
              <input
                type="text"
                className={`form-control ${errors.time ? "is-invalid" : ""}`}
                placeholder="Choose Time"
                value={selectedTime}
                readOnly
                onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown visibility
              />
              {errors.time && <div className="invalid-feedback">{errors.time}</div>}
              {showDropdown && (
                <ul className="Appointdropdown-menu show w-100">
                  {timeSlots.map((slot, index) => (
                    <li
                      key={index}
                      className="Appointdropdown-item"
                      onClick={() => handleTimeSelect(slot)} // Handle time selection
                    >
                      {bookedSlots.includes(slot) ? (
                        <span style={{ color: "gray", cursor: "not-allowed" }}>{slot}</span>
                      ) : (
                        slot
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <input
              type="text"
              className={`form-control mb-3 ${errors.phone ? "is-invalid" : ""}`}
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}

            <input
              type="email"
              placeholder="Email*"
              className={`form-control mb-3 ${errors.email ? "is-invalid" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}

            <textarea
              placeholder="Message"
              className={`form-control mb-3 ${errors.message ? "is-invalid" : ""}`}
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}

            <button type="submit" className="btn btn-primary send-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6 image-side">
          <img src={Appointmentimg} alt="Doctor" className="img-fluid" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
