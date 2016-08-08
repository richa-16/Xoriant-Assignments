var EmployeeList = new Array();
var count =0;
function Sort(){
	
}

function AddEmployee(){
	var EmployeeId = parseInt(document.getElementById('empId')).value;
	var EmployeeName = document.getElementById('empName');
	var EmployeeSalary = parseInt(document.getElementById('empSalary'));
	var EmployeeDepNo = parseInt(document.getElementById('empDepNo'));
	
	var Employee = new Employee(EmployeeId,EmployeeName,EmployeeSalary,EmployeeDepNo);
	var emp = Employee.addEmployee();
	count++;
	EmployeeList.push( emp);
	Console.log("Total "+count);
	Console.log("EmployeeList length "+ EmployeeList.length)
}

function Employee(EmployeeId,EmployeeName,EmployeeSalary,EmployeeDepNo){
	this.empId = EmployeeId;
	this.empName = EmployeeName;
	this.empSalary = EmployeeSalary;
	this.empDepNo = EmployeeDepNo;
	
	this.addEmployee = function addEmployee(){
		var Emp = new Array();
		Emp[0] = this.empId;
		Emp[1] = this.empName;
		Emp[2] = this.empSalary;
		Emp[3] = this.empDepNo;
		return Emp;
	}
}
