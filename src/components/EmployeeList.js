import "../css/employeelist.css";

const EmployeeList = ({ item, onClickDelete, onClickShowEmp }) => {
  return (
    <div className="employeelist-con-top">
      <div className="employeelist-con" onClick={onClickShowEmp}>
        <div className="employeelist-name">{item.name}</div>
      </div>
      <button className="employeelist-button" onClick={onClickDelete}>
        ❌
      </button>
    </div>
  );
};

export default EmployeeList;
