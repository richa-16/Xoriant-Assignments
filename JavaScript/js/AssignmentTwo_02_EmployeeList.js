var EmployeeList = new Array();
var count =0;
function Sort(){
	
	//EmployeeList.sort(function(a, b){return a-b});
	EmployeeList.sort(function(a,b) {return (a.id > b.id) ? 1 : -1;} );
	DisplayEmployees();
}

function AddEmployee(){
	var EmployeeId = parseInt(document.getElementById('empId').value);
	var EmployeeName = document.getElementById('empName').value;
	var EmployeeSalary = parseInt(document.getElementById('empSalary').value);
	var EmployeeDepNo = parseInt(document.getElementById('empDepNo').value);
	
	var Employees = new Employee(EmployeeId,EmployeeName,EmployeeSalary,EmployeeDepNo);
	var emp = Employees.addEmployee();
	count++;
	
	EmployeeList.push({
		id: emp[0],
		name: emp[1],
		salary: emp[2],
		dep:emp[3]
	});
	
	
	console.log("Total "+count);
	console.log("EmployeeList length "+ EmployeeList.length)
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

function DisplayEmployees(){
	console.log("Display");
	var para = document.getElementById('ans');
	var i=0;
	var addElement = document.createElement("p");
	addElement.innerHTML = "<br><br><p>New output </p>";
	para.appendChild(addElement);
	
	for(i = 0; i< EmployeeList.length; i++){
		var id = EmployeeList[i]["id"];
		var name = EmployeeList[i]["name"];
		var salary = EmployeeList[i]["salary"];
		var dep = EmployeeList[i]["dep"];
		var str = " ";
		str = "id : " + id + " name : "+ name+" salary : "+ salary +" dep: "+dep;
		var addElement = document.createElement("p");
		addElement.innerHTML = "<br><br><p>New output </p>"+str;
		para.appendChild(addElement);
		
	}
}
