// Template String -> Str concatenation opr
let tableBody = document.querySelector('#table-body');

let employees = [
    {
        name : 'John',
        age : 40,
        designation : 'Manager'
    },
    {
        name : 'Wilson',
        age : 35,
        designation : 'Tech Lead'
    }
];

let displayEmployee = (employees) => {
    let strConcat = '';
    let templateStr = '';
    employees.forEach((employee) => {
        strConcat += "<tr>" +
                        "<td>" + employee.name + "</td>" +
                        "<td>" + employee.age + "</td>" +
                        "<td>" + employee.designation + "</td>" +
                    "</tr>";
        templateStr += `<tr>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.designation}</td>
                    </tr>`;
    });
    tableBody.innerHTML = templateStr;
};

displayEmployee(employees);