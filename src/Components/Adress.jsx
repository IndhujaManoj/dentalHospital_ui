import React from 'react'
import "./Adress.css"

const Adress = () => {
  return (
    <div className='adresscard'>
        <div className="row mt-5 mb-5">
  <div className="col-12">
    <div className="card" style={{ background: 'linear-gradient(135deg, #0098d8, #007bb5)', color: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Melapalayam, Tirunelveli</h5>
        <p className="card-text" style={{ margin: '1rem 0' }}>
          <i className="fas fa-map-marker-alt"></i> Address:
          1 Floor, Vaalan Complex, Near Bharat Petroleum, Ambai Main Road, Melapalayam, Tirunelveli - 627005.
        </p>
        <p className="card-text" style={{ margin: '1rem 0' }}>
          <i className="fas fa-clock"></i> Week Days: 04:00 PM to 08:30 PM<br />
          <i className="fas fa-calendar-alt"></i> Sundays: By appointment
        </p>
        <p className="card-text" style={{ margin: '1rem 0' }}>
          <i className="fas fa-phone"></i> Helpline: +91 9360290001, +91 936725390<br />
          <i className="fas fa-phone-volume"></i> Landline: 0462-2353400
        </p>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Adress
