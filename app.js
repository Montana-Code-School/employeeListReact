
var EmployeeList = React.createClass({
  render: function() {
    var employeeNodes = this.props.data.map(function(employee) {
      return (
        <Employee
          name={employee.name}
          position={employee.position}
          hireDate={employee.hireDate}
          yearsOfService={employee.yearsOfService}
          imgurl={employee.imgurl}
          DOB={employee.DOB}
          age={employee.age}
          key={employee.id}
          />
      );
    });
    return (
      <div className="employeeList">
        {employeeNodes}
      </div>
    );
  }
});

var Employee = React.createClass({
  render: function() {
    return (
      <div className="employee">
        <h2 className="employeeTitle">{this.props.name}</h2>
        <ul>
          <li>Position : {this.props.position}</li>
          <li>Hire Date : {this.props.hireDate}</li>
          <li>Years of Service : {this.props.yearsOfService}</li>
          <li>Date of Birth : {this.props.DOB}</li>
          <li>Age : {this.props.age}</li>
        </ul>
        <img className="employeeimg" src={this.props.imgurl}/>
      </div>
    );
  }
});

var EmployeePage = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="employeeTitle">And Our Fake Employees</h1>
        <EmployeeList data={this.props.data} />
      </div>
    );
  }
});

ReactDOM.render(
  <EmployeePage data={employeeList}/>,
  document.getElementById('content')
);
