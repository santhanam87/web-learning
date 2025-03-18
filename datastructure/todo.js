// TODO: Banking
/**
 * Build a datascrture for a banking system, with the following information bankName, managerName, locations (city, state, zip, locationId),
 * employees - employeeName (firstName, LastName), designation, yearOfExp, locationId
 */
var Bank_Info = [
  {
    bankName: "Best bank",
    managerName: "Joe",
    locations: {
      city: "Cheeni",
      state: "Tamil Nadu",
      zip: "0986746",
      locationId: "6586824",
    },
  },
  {
    bankName: "Best bank",
    managerName: "Dow",
    locations: {
      city: "Cheeni",
      state: "Tamil Nadu",
      zip: "0977461",
      locationId: "6678624",
    },
  },
];
var Employe_info = [
  {
    employe: { firstName: "Jon", lastName: "Dow" },
    designation: "janetor",
    yearOfExp: "5",
    locationId: Bank_Info[0].locations.locationId,
  },
  {
    employe: { firstName: "Jonny", lastName: "Dow" },
    designation: "teller",
    yearOfExp: "15",
    locationId: Bank_Info[1].locations.locationId,
  },
];
console.info(Bank_Info, Employe_info);
// TODO: Narato
//WHY NARRATO WHY???!!!
/**
 * characterName, age, gender, powers [ power () ], village, enimies [ enimy (name, age, genger, powers)]
 */
