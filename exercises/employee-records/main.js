var employees = [];

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";

    this.printEmployeeForm = function () {
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
    };
}

var mike = new Employee("Mike", "Code Monkey", "100k/year");
employees.push(mike);
var michelle = new Employee("Michelle", "Front end web developer", "110k/year");
employees.push(michelle);
var jordan = new Employee("Jordan", "Professional Extrordinaire", "Quite a bit");
employees.push(jordan);

jordan.status = "Part Time";

employees.forEach(function (employee, i, employees) {
    employee.printEmployeeForm();
});
