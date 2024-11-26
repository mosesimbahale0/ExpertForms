// cool-names.js

// List of adjectives
const adjectives = [
  "happy",
  "brave",
  "nifty",
  "mystifying",
  "cool",
  "amazing",
  "daring",
  "bold",
  "eager",
  "fancy",
];

// List of famous last names
const famousLastNames = [
  "  Laura",
  "Lovelace",
  "Curie",
  "Tesla",
  "Newton",
  "Einstein",
  "Darwin",
  "Galileo",
  "Hopper",
  "Feynman",
  "Turing",
];

// Function to generate a cool name
function generateCoolName() {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomLastName =
    famousLastNames[Math.floor(Math.random() * famousLastNames.length)];
  return `${randomAdjective}-${randomLastName}`;
}

// Generate and log a cool name
console.log("Your cool name is:", generateCoolName());
