// TODO
/**characterId:** This is a unique, alphanumeric identifier assigned to each character. It serves as a primary key, allowing for easy referencing and retrieval of specific character data. Example: "NAR001".
- **firstName:** The given name of the character. Example: "Naruto".
- **lastName:** The family name or clan name of the character. Example: "Uzumaki".
- **clan:** This attribute specifies the clan to which the character belongs. Clans in the Naruto universe often have unique abilities and traditions. Example: "Uchiha".
- **village:** This indicates the primary village or settlement with which the character is affiliated. Example: "Konohagakure".
- **rank:** This attribute describes the character's ninja rank or status within their village or organization. Example: "Hokage", "Jonin", "Genin", "Missing-nin".

**Abilities and Affiliations:**

- **jutsu:** This is an array (list) of strings, where each string represents a specific jutsu (ninja technique) that the character is known to use.
- **affiliation:** This is an array of strings detailing the various groups, organizations, or alliances that the character is associated with. Example: ["Konohagakure", "Team 7", "Akatsuki"].

**Family and Personal Details:**

- **family:** This is a nested JSON object containing information about the character's family relationships:
  - **parents:** An array of strings listing the names of the character's parents. Example: ["Minato Namikaze", "Kushina Uzumaki"].
  - **spouse:** A string representing the name of the character's spouse, or `null` if they are not married. Example: "Hinata Hyuga".
  - **children:** An array of strings listing the names of the character's children. Example: ["Boruto Uzumaki", "Himawari Uzumaki"].
- **characteristics:** This is a nested JSON object containing physical and personality traits:
  - **hairColor:** A string describing the character's hair color. Example: "Blonde".
  - **eyeColor:** A string describing the character's eye color, which may include variations related to special abilities like the Sharingan. Example: "Blue", "Black (Sharingan variations)".
  - **personality:** A brief, descriptive string summarizing the character's general personality traits. Example: "Energetic, Optimistic, Determined"
*/
console.info("HERO OF ANIME");
let firstName = "Naruto";
let lastName = "Uzumaki";
let Clan = "Uzumaki clan";
let village = "Hidden leaf village";
let rank = "7th Hokage";
let characterId = { firstName, lastName, Clan, village, rank};

let special = "Raseengan";
let Ninjutsu1 = "Shadow clone";
let Ninjutsu2 = "Uzumaki barroge";
let transition = "SAGE jutsu";

let jutsu = {special, Ninjutsu1, Ninjutsu2, transition};

let Team = "Team 7";
let Teamleader = "Kakashi hatake";
let guards = "Ambu Black cops";
let Teammates ="Sasuke uchiha, Sakura haruna";

let Teams= { Team, Teamleader, guards, Teammates};

let fathername = " Minato namikasae";
let mothername = "kushina Uzumaki";
let parents = { fathername,mothername};
let Wife = "Hinata Hyuga";

let child1 ="Boruto Uzumaki";
let child2 = "Himavari Uzumaki";
let children = {child1, child2};

let family = {parents, Wife, children};

let hairColor = "Yellow";
let eyeColor = "Blue and change as Red in nine tails and sage mode ";
let personality = "Never give up STRATEGY, Optimistic, Energetic";

let characteristics = {hairColor, eyeColor, personality};

let NA = {
    Details:(characterId),
    Abilities:[jutsu],
    Affiliation:[Teams],
    Family:(family),
    Personal_Details:(characteristics)
};
console.info(NA);