console.log("   BANKING   ");
/**TODO:Banking System
//  Bankname, Managername, location which includes
// (city, state, zip, locationId)
// Employeename(firstName,Lastname), Role, experience, address
*/
let Bank = [
  {
    bankname:"HDFC",
    Managername:"JD",
    location:{
      city:"vellore",
      state:"Tamil Nadu",
      zip:"632009",
      locationId:"ID8764576",
    },
  }
];
let Employeess = [
  {
    Employee1:{firstName:"lokesh",lastName:"kanagaraj"},
    Role:"HR",
    experience:"2 years as helper, 4 years as team leader",
    address:"no.324,2nd street,Tnagar,Vellore",
    contact:"9867567845",
    email_id:"loki@gmail.com",
    },
    {
      Employee2:{firstName:"Anirudh",lastName:"Ravichandran"},
      Role:"Team_lead",
      experience:"4 years as helper,",
      address:"no.456,32nd street,Knagar,Vellore",
      contact:"9786456758",
      email_id:"ani@gmail.com",
      },
];
console.info(Bank,Employeess);