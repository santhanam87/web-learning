// TODO: Banking
/**
 * Build a datascrture for a banking system, with the following information bankName, managerName, locations (city, state, zip, locationId),
 * employees - employeeName (firstName, LastName), designation, yearOfExp, locationId
 */
var banks = [
  {
    bankName: "Best bank",
    managerName: "Joe",
    locations: {
      city: "Cheeni",
      state: "Tamil Nadu",
      zip: "0986746",
      locationId: "6586824",
    },
    employes: [
      {
        name: { firstName: "Jon", lastName: "Dow" },
        designation: "janetor",
        yearOfExp: "5",
        locationId: "6586824",
      },
    ],
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
    employes: [
      {
        name: { firstName: "Jonny", lastName: "Dow" },
        designation: "teller",
        yearOfExp: "15",
        locationId: "6678624",
      },
    ],
  },
];
console.info(JSON.stringify(banks));
// TODO: Narato
//WHY NARRATO WHY???!!!
/**
 * characterName, age, gender, powers [ power () ], village, enimies [ enimy (name, age, genger, powers)]
 */
