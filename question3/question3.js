// Given Code

// if (recipe == 'SPANISH') {
//   fudge = SPANISH_FUDGE;
//   amt = base * SPANISH_FUDGE;
//   sugar = 2 * bottom(amt) + top(amt) * 1.17;
// } else if ((recipe == 'FRENCH') || (recipe == 'ENGLISH')) {
//   fudge = (recipe == 'FRENCH') ? FRENCH_FUDGE : ENGLISH_FUDGE;
//   amt = base * fudge;
//   sugar = 2 * bottom(amt) + top(amt) * 1.17;
//   if (recipe == 'FRENCH') {
//       chocolate = 7;
//   }
// } else {
//   fudge = 1;
//   amt = base;
//   sugar = 2 * bottom(amt) + top(amt) * 1.17;
// }

/********************* Refactored Code *********************/

// In this refactor amt = base * fudge is repeated, normally I would move this into its own small
// arrow function but as per instruction I did not make new variables or functions.

switch (recipe) {
  case "SPANISH":
    fudge = SPANISH_FUDGE;
    amt = base * fudge;
    break;
  case "FRENCH":
    fudge = FRENCH_FUDGE;
    amt = base * fudge;
    chocolate = 7;
    break;
  case "ENGLISH":
    fudge = ENGLISH_FUDGE;
    amt = base * fudge;
    break;
  default:
    fudge = 1;
    amt = base;
};

sugar = 2 * bottom(amt) + top(amt) * 1.17;