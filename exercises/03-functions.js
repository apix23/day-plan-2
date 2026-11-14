// =============================================================
//  ☕ MigraCode Coffee — Exercise 03: Functions
// =============================================================
//
//  Doing the same calculation again and again is boring.
//  Let's write functions so the café can reuse them!
//
//  HOW TO WORK:
//    1. Write the code inside each function marked with ✏️.
//       Remember: a function must `return` its result.
//    2. Run this file:   node 03-functions.js
//    3. No "Assertion failed" messages = everything is correct 🎉
//
//  ⚠️  Do NOT change the console.assert lines.
// =============================================================

// -------------------------------------------------------------
// Exercise 3.1 — greet
// Return a greeting for the customer, like:
//   greet("Amina") → "Hello Amina, what would you like today?"
// -------------------------------------------------------------
function greet(name) {
  // ✏️ your code here
}

console.assert(
  greet("Amina") === "Hello Amina, what would you like today?",
  `3.1 greet("Amina") returned: ${greet("Amina")}`
);
console.assert(
  greet("Carlos") === "Hello Carlos, what would you like today?",
  `3.1 greet("Carlos") returned: ${greet("Carlos")}`
);

// -------------------------------------------------------------
// Exercise 3.2 — calculateTotal
// Return the price multiplied by the quantity.
//   calculateTotal(3.5, 2) → 7
// -------------------------------------------------------------
function calculateTotal(price, quantity) {
  // ✏️ your code here
}

console.assert(
  calculateTotal(3.5, 2) === 7,
  `3.2 calculateTotal(3.5, 2) returned: ${calculateTotal(3.5, 2)}`
);
console.assert(
  calculateTotal(2, 5) === 10,
  `3.2 calculateTotal(2, 5) returned: ${calculateTotal(2, 5)}`
);

// -------------------------------------------------------------
// Exercise 3.3 — formatPrice
// Return the amount as text with the euro sign and 2 decimals.
//   formatPrice(7)    → "€7.00"
//   formatPrice(2.25) → "€2.25"
// -------------------------------------------------------------
function formatPrice(amount) {
  // ✏️ your code here
}

console.assert(
  formatPrice(7) === "€7.00",
  `3.3 formatPrice(7) returned: ${formatPrice(7)}`
);
console.assert(
  formatPrice(2.25) === "€2.25",
  `3.3 formatPrice(2.25) returned: ${formatPrice(2.25)}`
);

// -------------------------------------------------------------
// Exercise 3.4 — orderSummary
// Use YOUR functions calculateTotal and formatPrice to build:
//   orderSummary("Amina", "latte", 2, 3.5)
//     → "Amina ordered 2 x latte: €7.00"
// -------------------------------------------------------------
function orderSummary(name, drink, quantity, price) {
  // ✏️ your code here
}

console.assert(
  orderSummary("Amina", "latte", 2, 3.5) === "Amina ordered 2 x latte: €7.00",
  `3.4 orderSummary(...) returned: ${orderSummary("Amina", "latte", 2, 3.5)}`
);
console.assert(
  orderSummary("Carlos", "tea", 1, 1.8) === "Carlos ordered 1 x tea: €1.80",
  `3.4 orderSummary(...) returned: ${orderSummary("Carlos", "tea", 1, 1.8)}`
);

console.log("✅ Finished running 03-functions.js — no 'Assertion failed' above means you solved it!");
