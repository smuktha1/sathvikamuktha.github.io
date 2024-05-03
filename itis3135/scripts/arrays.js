const person = [];
const salary = [];
document.getElementById("addSalary").addEventListener("click", addSalary);
document.getElementById("modifySalary").addEventListener("click", modifySalary);
document.getElementById("displayResults").addEventListener("click", displayResults);
document.getElementById("displaySalary").addEventListener("click", displaySalary);

function addSalary(){

    let personName = document.getElementById("personName").value;
    let salaryAmount = parseFloat(document.getElementById("salaryAmount").value);
    let display = document.getElementById("display");
  
    if (!personName.trim() || isNaN(salaryAmount)) {
        alert("Please enter a valid name and a numeric salary amount");
        return;
    }

    person.push(personName);
    salary.push(salaryAmount);
  
    document.getElementById("personName").value = "";
    document.getElementById("salaryAmount").value = "";
  
    display.innerHTML = "<h2>Here are the names and corresponding salaries:</h2>";
    person.forEach((personEntry, index) => {
      display.innerHTML += `<p>Name: ${personEntry}   ||   Salary: $${salary[index]}</p>`;
    });
  
}


function modifySalary() {
     let selectEmployee = document.createElement("select");
     selectEmployee.id = "selectEmployee";
     person.forEach((personEntry, index) => {
     let option = document.createElement("option");
     option.value = index;
     option.text = personEntry;
     selectEmployee.appendChild(option);
     });
    
     let newSalaryInput = document.createElement("input");
     newSalaryInput.type = "text";
     newSalaryInput.id = "newSalary";
     newSalaryInput.placeholder = "Enter new salary";
    
     let submitButton = document.createElement("button");
     submitButton.innerHTML = "Submit";
     submitButton.addEventListener("click", function() {
     let selectedIndex = document.getElementById("selectEmployee").value;
     let newSalaryValue = parseFloat(document.getElementById("newSalary").value);
     salary[selectedIndex] = newSalaryValue;
     display.innerHTML = "<h2>Here are the names and corresponding salaries after modification:</h2>";
            person.forEach((personEntry, index) => {
            display.innerHTML += `<p>Name: ${personEntry}  ||  Salary: $${salary[index]}</p>`;
     });
     document.getElementById("newSalary").value = "";
     });

    let modifySalaryDiv = document.getElementById("modifySalaryDiv");
    modifySalaryDiv.innerHTML = "";
    modifySalaryDiv.appendChild(selectEmployee);
    modifySalaryDiv.appendChild(newSalaryInput);
    modifySalaryDiv.appendChild(submitButton);
}



function displayResults() {
    let totalSalary = 0;
    let highestSalary = -Infinity;
    for (let i = 0; i < salary.length; i++) {
        totalSalary += salary[i];
        if (salary[i] > highestSalary) {
            highestSalary = salary[i];
        }
    }
    let averageSalary = totalSalary / salary.length;

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Results</h2>";
    resultsDiv.innerHTML += `<p>Average Salary: $${averageSalary.toFixed(2)}</p>`;
    resultsDiv.innerHTML += `<p>Highest Salary: $${highestSalary.toFixed(2)}</p>`;
}



function displaySalary() {
    let table = "<h2>Table</h2><table><tr><th>Name || </th><th>Salary</th></tr>";
    for (let i = 0; i < person.length; i++) {
        table += `<tr><td>${person[i]}   </td><td>$${salary[i]}</td></tr>`;
    }
    table += "</table>";
    document.getElementById("results_table").innerHTML = table;
}