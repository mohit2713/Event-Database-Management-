import React from "react";
import "../css/Modal.css";
const Modal = ({ isOpen, onClose, onChange, onSubmit, formData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Add Employee information</h1>
        <form onSubmit={onSubmit} className="modal-information-form">
          <label className="modal-label-field">Name</label>
          <input
            className="modal-input-field"
            name="name"
            type="text"
            onChange={onChange}
            value={formData.name}
            placeholder="name"
            required
          />

          <label className="modal-label-field">Email</label>
          <input
            className="modal-input-field"
            name="email"
            type="text"
            placeholder="email"
            value={formData.email}
            onChange={onChange}
            required
          />

          <label className="modal-label-field">Mobile</label>
          <input
            className="modal-input-field"
            type="number"
            name="mobile"
            placeholder="phone number"
            value={formData.mobile}
            onChange={onChange}
            required
          />

          <label className="modal-label-field">DOB</label>
          <input
            className="modal-input-field"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={onChange}
            required
          />

          <label className="modal-label-field" typeof="text">
            Image
          </label>
          <input
            className="modal-input-field"
            type="url"
            name="imageurl"
            placeholder="image url"
            value={formData.imageurl}
            onChange={onChange}
            required
          />
           <button type="submit">Submit</button>
        </form>
        <div className="modal-buttons-con">
         
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      x{" "}
    </div>
  );
};

export default Modal;
