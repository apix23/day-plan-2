// =============================================================
//  ☕ MigraCode Coffee — Exercise 01: Strings
// =============================================================
//
//  You just started working at "MigraCode Coffee". Before opening,
//  you need to prepare some texts for the café.
//
//  HOW TO WORK:
//    1. Replace every `null` marked with ✏️ with your own code.
//    2. Run this file:   node 01-strings.js
//    3. Each `console.assert` checks one of your answers.
//       - If the answer is correct, it prints NOTHING.
//       - If it is wrong, it prints "Assertion failed: ..."
//    4. When no "Assertion failed" messages appear, you are done! 🎉
//
//  ⚠️  Do NOT change the console.assert lines. Only change the ✏️ lines.
// =============================================================

const cafeName = "MigraCode Coffee";
//this is my solutions

// -------------------------------------------------------------
// Exercise 1.1 — Make the café name LOUD for the street sign.
// Create `loudName` with the café name in UPPERCASE.
// 💡 Hint: strings have a method called .toUpperCase()
// -------------------------------------------------------------
const loudName = null; // ✏️

console.assert(
  loudName === "MIGRACODE COFFEE",
  `1.1 loudName should be "MIGRACODE COFFEE" but it is ${loudName}`,
);

// -------------------------------------------------------------
// Exercise 1.2 — Write the welcome message for the door.
// It must be exactly: "Welcome to MigraCode Coffee!"
// Use the `cafeName` variable inside a template literal (backticks ``).
// -------------------------------------------------------------
const welcomeMessage = null; // ✏️

console.assert(
  welcomeMessage === "Welcome to MigraCode Coffee!",
  `1.2 welcomeMessage should be "Welcome to MigraCode Coffee!" but it is ${welcomeMessage}`,
);

// -------------------------------------------------------------
// Exercise 1.3 — The sign maker charges per letter.
// Create `nameLength` with the number of characters in `cafeName`.
// 💡 Hint: .length
// -------------------------------------------------------------
const nameLength = null; // ✏️

console.assert(
  nameLength === 16,
  `1.3 nameLength should be 16 but it is ${nameLength}`,
);

// -------------------------------------------------------------
// Exercise 1.4 — A customer typed their order with extra spaces.
// Create `cleanOrder` with the spaces at the start and end removed.
// 💡 Hint: .trim()
// -------------------------------------------------------------
const typedOrder = "     latte   ";
const cleanOrder = null; // ✏️

console.assert(
  cleanOrder === "latte",
  `1.4 cleanOrder should be "latte" but it is "${cleanOrder}"`,
);

// -------------------------------------------------------------
// Exercise 1.5 — We write the first letter of the customer's
// name on the cup. Create `cupLetter` with the FIRST letter of
// `customerName`.
// 💡 Hint: strings start counting at index 0 → customerName[0]
// -------------------------------------------------------------
const customerName = "Amina";
const cupLetter = null; // ✏️

console.assert(
  cupLetter === "A",
  `1.5 cupLetter should be "A" but it is ${cupLetter}`,
);

// -------------------------------------------------------------
// Exercise 1.6 — Does the menu have tea?
// Create `hasTea` that is true if the menu text contains "tea".
// 💡 Hint: .includes()
// -------------------------------------------------------------
const menu = "espresso, latte, cappuccino, tea";
const hasTea = null; // ✏️

console.assert(
  hasTea === true,
  `1.6 hasTea should be true but it is ${hasTea}`,
);

console.log(
  "✅ Finished running 01-strings.js — no 'Assertion failed' above means you solved it!",
);
