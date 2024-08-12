const employee= [
    {id:1, name:'john', age:30, department:'IT', salary:50000, specialization:'javascript'},
    {id:2, name:'alice', age:27, department:'HR', salary:45000, specialization:'management'},
    {id:3, name:'bob', age:32, department:'finance', salary:60000, specialization:'taxes and accounting'},

]

function displayEmployees(){ 
    const totalEmployees= employee.map((employee, index)=>`<p>${employee.id}:${employee.name}: ${employee.name}-${employee.department}- $${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML=totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries=employee.reduce((acc,employee)=> acc+employee.salary,0);
    alert(`total salaries:$${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees=employee.filter(employee=>employee.department=='HR');
    const hrEmployeesDisplay=hrEmployees.map((employee, index)=>`<p>${employee.id}:${employee.name}:${employee.name}- ${employee.department}- $${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML=hrEmployeesDisplay;
}

function findEmployeeById(employeeId){
    const foundEmployee=employee.find(employee=>employee.id=== employeeId);
    if(foundEmployee)
    {
        document.getElementById('employeeDetails').innerHTML=`<p>${foundEmployee.id}:${foundEmployee.name}-${foundEmployee.department}- $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeeDetails').innerHTML='no employees has been found with this ID';

    }   
}

function findEmployeeBySpecialization(spec){
    const employeeSpecialization=employee.find(employee => employee.specialization===spec);
    if(spec){
        document.getElementById('employeeDetails').innerHTML=`<p> ${employeeSpecialization.id}:${employeeSpecialization.name}- ${employeeSpecialization.department}- ${employeeSpecialization.specialization}</p>`;
    }
    else{
        document.getElementById('employeeDetails').innerHTML='no specialization found';
    }

}