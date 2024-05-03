let people = [];
let salaries = [];
let select = document.getElementById("namesArray");

function addSalary() {
    let name = document.getElementById("name").value.trim();
    let salary = document.getElementById("addSalaryBox").value.trim();

    if (name === "" || isNaN(salary) || salary === "") {
        alert("Please enter a valid name and salary.");
        return;
    }

    people.push(name);
    salaries.push(parseFloat(salary));

    document.getElementById("name").value = "";
    document.getElementById("addSalaryBox").value = "";
    document.getElementById("name").focus();
    populateNamesDropdown(); 
}

function modifySalary() {
    let index = document.getElementById("namesArray").selectedIndex;
    let newSalary = parseFloat(document.getElementById("modifySalaryBox").value.trim());

    if (index === -1 || isNaN(newSalary) || newSalary === "") {
        alert("Please select an employee and enter a valid salary.");
        return;
    }

    salaries[index] = newSalary;

    document.getElementById("modifySalaryBox").value = "";
}

function displayResults() {
    if (salaries.length === 0) {
        alert("No salaries added yet.");
        return;
    }

    let totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
    let averageSalary = totalSalary / salaries.length;
    let highestSalary = Math.max(...salaries);

    document.getElementById("results").innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: ${averageSalary.toFixed(2)}</p>
        <p>Highest Salary: ${highestSalary.toFixed(2)}</p>
    `;
}

function displaySalary() {
    if (people.length === 0) {
        alert("No salaries added yet.");
        return;
    }

    let tableBody = document.getElementById("results_table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    for (let i = 0; i < people.length; i++) {
        let row = tableBody.insertRow();
        let nameCell = row.insertCell(0);
        let salaryCell = row.insertCell(1);
        nameCell.textContent = people[i];
        salaryCell.textContent = salaries[i].toFixed(2);
    }

    document.getElementById("results_table").style.display = "block";
}

function populateNamesDropdown() {
    select.innerHTML = "";

    for (let i = 0; i < people.length; i++) {
        let option = document.createElement("option");
        option.textContent = people[i];
        option.value = i;
        select.appendChild(option);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("name").focus();
});