const toCamelCase = (str) => {
  let special;
  if (str.includes("-")) {
    special = "-";
  } else {
    special = "_";
  }
  if (str === "") {
    return "";
  }
  const array = str.split(special).map((word, i) => {
    if (i > 0) {
      return word.replace(word[0], word[0].toUpperCase());
    } else {
      return word;
    }
  });

  return array.join("");
};

console.log(toCamelCase("the-stealth-wa-Rrior"));
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
