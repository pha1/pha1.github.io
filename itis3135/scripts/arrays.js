/* Javascript for arrays.html */
const arrayPeople = [];
const arraySalary = [];
let newName = "";
let salary;

let displayResults = function()
{
    let sum = 0;
    let count = 0;
    let avg = 0;
    let highestSalary = 0;

    for (let step = 0; step < arraySalary.length; step++)
    {
        sum += arraySalary[step];
        count++;

        if (arraySalary[step] > highestSalary)
        {
            highestSalary = arraySalary[step];
        }
    }
    
    avg = sum/count;
    document.getElementById("results").innerHTML ="<h2>Results</h2>" + "<p>Average Salary: " + avg + "</p>" + 
        "<p>Highest Salary: " + highestSalary + "</p>";
}

let displaySalary = function()
{
    let placeholder;
        /* Need to parse the rest of the table into the innerHTML*/
            for (let step = 0; step < arrayPeople.length; step++)
            {
                if (step == 0)
                {
                    placeholder += "<thead>"+
                        "<tr>"+
                        "<th>Name</th>"+
                        "<th>Salary</th>"+
                        "</tr>"+
                        "</thead>"+
                        "<tbody>";
                }

                placeholder = placeholder + 
                    "<tr>" +
				    "<td>" + arrayPeople[step] + "</td>" +
				    "<td>" + arraySalary[step] + "</td>"
                    "</tr>";
            }
        /* Add the </tbody> */
        placeholder += "<tbody>";
        document.getElementById("results_table").innerHTML = placeholder;
    ;
}

let addSalary = function()
{
    newName = prompt("Please enter a name:");

    if (newName === null || newName === "")
    {
        alert("No entry!");
        return;
    }

    arrayPeople.push(newName);

    salary = prompt("Please enter a salary:");

    if (isNaN(salary))
    {
        do
        {
            salary = prompt("That is not a number! Please enter a number between 0 and 19!");
        } while (isNaN(salary) || salary === "")
    }

    arraySalary.push(salary);
}