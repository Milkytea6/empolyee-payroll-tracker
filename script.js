// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
  

const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  
  // Array of empolyees
  let employeesArray = [];

  // When the user clicks the "Add Employees" button, input windows of first name, 
  // last name, and salary display allowing user to input data into each window.
  let inputFirstName = window.prompt("Enter employee's first name.")
  let inputLastName = window.prompt("Enter employee's last name.")
  let inputSalary = parseInt(window.prompt("Enter empolyee's slaray."))
  
  // Collect employee data
  // Store inputs into Employee object.
  let newEmployee = {
    firstName: inputFirstName,
    lastName: inputLastName,
    salary: inputSalary
  };
  
  // Pushes Employee into employeesArray.
  employeesArray.push(newEmployee);
  
  // Then another input window will display asking if the user would like to continue adding or stop adding employees.
  let inputContinue = window.confirm("Add another employee?");
  
  if (inputContinue) {
    // Allows employees able to be addded to newly pushed array.
    let additionalEmployees = collectEmployees();
    // Concatenates the employeesArray with additionalEmployees.
    employeesArray = employeesArray.concat(additionalEmployees);
  }
  else {
    return employeesArray;
  }
};

// Then the data will be stored and displayed in the HTML table in a row sorted alphabetically by last name.
// <<SHOULD HAPPEN IN STATER CODE LINE 102>>

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

  // Access each object in employeesArray and get newEmployee.salary key.
  // Average all the values in newEmployee.salary and console log the result.


  // const salaries = employeesArray.inputSalary;

  // const sum = salaries.reduce((acc, curr) => acc + curr, 0);
  // const average = (sum/employeesArray.length);
  // console.log(average);


}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);




