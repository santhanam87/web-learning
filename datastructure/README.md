### Data Structure

# TODO 1 : Bancking System Json Structure

- **characterId:** A unique identifier for each character (string, e.g., "NAR001").
- **firstName:** The character's first name (string).
- **lastName:** The character's last name (string).
- **clan:** The character's clan affiliation (string, e.g., "Uchiha").
- **village:** The character's home village (string, e.g., "Konohagakure").
- **rank:** The character's ninja rank (string, e.g., "Hokage," "Jonin").
- **jutsu:** An array of the character's known jutsu (array of strings).
- **affiliation:** An array of the character's affiliations (array of strings, e.g., "Konohagakure," "Team 7").
- **family:** An object containing information about the character's family:
  - **parents:** An array of the character's parents' names (array of strings).
  - **spouse:** The character's spouse's name (string, or null).
  - **children:** An array of the character's children's names (array of strings).
- **characteristics:** An object containing physical and personality traits:
  - **hairColor:** The character's hair color (string).
  - **eyeColor:** The character's eye color (string, or variations, like "Sharingan variations").
  - **personality:** A brief description of the character's personality (string).

# TODO 2 : Naruto character JSON structure:

**Core Character Information:**

- **characterId:** This is a unique, alphanumeric identifier assigned to each character. It serves as a primary key, allowing for easy referencing and retrieval of specific character data. Example: "NAR001".
- **firstName:** The given name of the character. Example: "Naruto".
- **lastName:** The family name or clan name of the character. Example: "Uzumaki".
- **clan:** This attribute specifies the clan to which the character belongs. Clans in the Naruto universe often have unique abilities and traditions. Example: "Uchiha".
- **village:** This indicates the primary village or settlement with which the character is affiliated. Example: "Konohagakure".
- **rank:** This attribute describes the character's ninja rank or status within their village or organization. Example: "Hokage", "Jonin", "Genin", "Missing-nin".

**Abilities and Affiliations:**

- **jutsu:** This is an array (list) of strings, where each string represents a specific jutsu (ninja technique) that the character is known to use. Example: ["Rasengan", "Shadow Clone Technique"].
- **affiliation:** This is an array of strings detailing the various groups, organizations, or alliances that the character is associated with. Example: ["Konohagakure", "Team 7", "Akatsuki"].

**Family and Personal Details:**

- **family:** This is a nested JSON object containing information about the character's family relationships:
  - **parents:** An array of strings listing the names of the character's parents. Example: ["Minato Namikaze", "Kushina Uzumaki"].
  - **spouse:** A string representing the name of the character's spouse, or `null` if they are not married. Example: "Hinata Hyuga".
  - **children:** An array of strings listing the names of the character's children. Example: ["Boruto Uzumaki", "Himawari Uzumaki"].
- **characteristics:** This is a nested JSON object containing physical and personality traits:
  - **hairColor:** A string describing the character's hair color. Example: "Blonde".
  - **eyeColor:** A string describing the character's eye color, which may include variations related to special abilities like the Sharingan. Example: "Blue", "Black (Sharingan variations)".
  - **personality:** A brief, descriptive string summarizing the character's general personality traits. Example: "Energetic, Optimistic, Determined".
