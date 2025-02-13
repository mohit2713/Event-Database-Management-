import { useEffect, useState } from "react";
import "../css/Body.css";
import Modal from "./Modal";
import EmployeeList from "./EmployeeList";
import EmployeeData from "./EmployeeData";

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [show, setShow] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    imageurl: "",
  });
  const [employees, setEmployees] = useState([]);

  const [employeeDetail, setEmployeeDetail] = useState(0);

  const showEmployeeDetail = (index) => {
    setEmployeeDetail(index);
    setShow(true);
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, formData]; // Append the formData to employees array
      if (updatedEmployees.length >= 0) {
        showEmployeeDetail(updatedEmployees.length - 1);
      }
      return updatedEmployees;
    }); // will not fill latest employee state immediateltly due to react batch states
    setFormData({ name: "", email: "", mobile: "", dob: "", imageurl: "" });
    closeModal();
  };

  const handleDeleteEmployee = (number) => {
    setEmployees(() => {
      const updatedEmployeesList = employees.filter(
        (item) => item.mobile !== number
      ); // Append the formData to employees array
      if (updatedEmployeesList.length <= 0) {
        setShow(false);
      } else showEmployeeDetail(updatedEmployeesList.length - 1);
      return updatedEmployeesList;
    });
  };

  // useEffect(() => {}, [employees]);

  return (
    <div className="body-container">
      <div className="modal">
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleSubmit}
          onChange={handleChange}
          formData={formData}
        />
      </div>
      <div className="header-container">
        <h1>Event Database Management</h1>
        <button className="header-button" onClick={openModal}>
          Add Employee
        </button>
      </div>
      <div className="Employee-container">
        <div className="Employee-list-container">
          {/* // Employee list */}
          <h2>Employee list</h2>
          <hr></hr>
          {employees.map((item, index) => {
            return (
              <div>
                <EmployeeList
                  item={item}
                  onClickDelete={() => handleDeleteEmployee(item.mobile)}
                  onClickShowEmp={() => showEmployeeDetail(index)}
                />
              </div>
            );
          })}
        </div>
        <div className="Employee-information-container">
          {/* // Employee information */}
          <h2>Employee information</h2>
          <hr></hr>
          {show ? (
            <div>
              <EmployeeData item={employees[employeeDetail]} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Body;
