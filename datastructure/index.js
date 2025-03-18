let a = "santhanam";
a = "new value";

let employeeName = "santhanam";
let employeeAge = 20;
let isEmployee = true;
let degress = null; // null
let values; // undefined
let employee1 = { employeeName, employeeAge, isEmployee, degress, values };
let employee2 = { employeeName, employeeAge, isEmployee, degress, values };
let employees = [employee1, employee2];

Navith = {
  name: "",
  degress: [
    {
      degreeName: "BE",
      subjects: [
        { subjectName: "math", teacherName: "", semester: "" },
        "science",
      ],
    },
  ],
};

csDep = [
  { className: "", classTeacher: "", classDean: "" },
  { className: "", classTeacher: "", classDean: "" },
];

console.info(typeof employeeName);
console.info(typeof employeeAge);
console.info(typeof isEmployee);
console.info(typeof degress);
console.info(typeof undefined);
console.info(employee1);
console.info(employees);
console.info("----------------");

// College
/**
 * Princi : string
 * Vice Princi : string
 * Location: object
 * Departments: array => object
 * Teachers: array => object
 */

let princi = "John";
let vicePrinci = "Doe";

/**
 * Teacher
 * teacherName
 * subjectName
 */

let teacherName = "John";
let subjectName = "Math";
let teacher = { teacherName, subjectName };

/**
 * DepartName
 * Location
 * HeadOfDepartment
 */

let departmentName = "IT";
let location = "Block 1";
let headOfDepartment = "Doe";

let deprtment = { departmentName, location, headOfDepartment };

/**
 * Street,
 * City,
 * Phone
 * State
 * Email
 * Zip
 */

let collegeLocation = {};
let college = {
  princi,
  vicePrinci,
  collegeLocation,
  departments: [deprtment],
  teachers: [teacher],
};
console.info(college);
// TODO: Banking
/**
 * Build a datascrture for a banking system, with the following information bankName, managerName, locations (city, state, zip, locationId),
 * employees - employeeName (firstName, LastName), designation, yearOfExp, locationId
// TODO: Narato

/**
 * characterName, age, gender, powers [ power () ], village, enimies [ enimy (name, age, genger, powers)]
 */