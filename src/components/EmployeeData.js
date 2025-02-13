import "../css/EmployeeData.css";

const EmployeeData = ({ item }) => {
    console.log(item);
    
  return (
    <div className="EmployeData-con">
      <div>
        <img className="EmployeData-img" src={item.imageurl} />
      </div>
      <div>
        <h1> {item.name}</h1>
        <h3>{item.email}</h3>
        <h3>{item.mobile}</h3>
        <h3>{item.dob}</h3>
      </div>
    </div>
  );
};

export default EmployeeData;
