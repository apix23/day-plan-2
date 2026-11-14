// =============================================================
//  ☕ MigraCode Coffee — Exercise 06: The Order Machine (final!)
// =============================================================
//
//  Time to put EVERYTHING together: strings, numbers, functions,
//  if / else, while loops... and this time YOU also write the
//  console.assert checks!
//
//  HOW TO WORK:
//    1. Complete the functions marked with ✏️.
//    2. In section 6.4, write your OWN console.assert lines.
//    3. Run this file:   node 06-cafe-machine.js
// =============================================================

// -------------------------------------------------------------
// Exercise 6.1 — getPrice
// Return the price of a drink from our menu:
//   "espresso" → 1.5
//   "latte"    → 3.5
//   "tea"      → 1.8
//   any other  → 0   (we don't sell it)
// The drink name may come with UPPERCASE letters or spaces,
// like "  Latte ", so clean it first (remember exercise 01!).
// -------------------------------------------------------------
function getPrice(drink) {
  // ✏️ your code here
}

console.assert(getPrice("latte") === 3.5, `6.1 getPrice("latte") returned ${getPrice("latte")}`);
console.assert(getPrice("  ESPRESSO ") === 1.5, `6.1 getPrice("  ESPRESSO ") returned ${getPrice("  ESPRESSO ")}`);
console.assert(getPrice("Tea") === 1.8, `6.1 getPrice("Tea") returned ${getPrice("Tea")}`);
console.assert(getPrice("pizza") === 0, `6.1 getPrice("pizza") returned ${getPrice("pizza")}`);

// -------------------------------------------------------------
// Exercise 6.2 — applyDiscount
// Return the price after applying a discount percentage.
//   applyDiscount(10, 50) → 5
//   applyDiscount(10, 0)  → 10
//   applyDiscount(20, 10) → 18
// -------------------------------------------------------------
function applyDiscount(price, percent) {
  // ✏️ your code here
}

console.assert(applyDiscount(10, 50) === 5, `6.2 applyDiscount(10, 50) returned ${applyDiscount(10, 50)}`);
console.assert(applyDiscount(10, 0) === 10, `6.2 applyDiscount(10, 0) returned ${applyDiscount(10, 0)}`);
console.assert(applyDiscount(20, 10) === 18, `6.2 applyDiscount(20, 10) returned ${applyDiscount(20, 10)}`);

// -------------------------------------------------------------
// Exercise 6.3 — takeOrder
// The full order machine! Return a message for the customer:
//
//   - If the drink is not on the menu (price 0):
//       "Sorry Amina, we don't have pizza"
//   - Otherwise:
//       "Amina: 2 x latte = €7.00 ☕☕"
//     (one ☕ per drink — use a while loop for the cups!)
//
// Use getPrice, and formatting like in exercise 03.
// Write the drink name in the message in lowercase and without spaces.
// -------------------------------------------------------------
function takeOrder(name, drink, quantity) {
  // ✏️ your code here
}

console.assert(
  takeOrder("Amina", "latte", 2) === "Amina: 2 x latte = €7.00 ☕☕",
  `6.3 takeOrder("Amina", "latte", 2) returned "${takeOrder("Amina", "latte", 2)}"`
);
console.assert(
  takeOrder("Carlos", " Espresso", 3) === "Carlos: 3 x espresso = €4.50 ☕☕☕",
  `6.3 takeOrder("Carlos", " Espresso", 3) returned "${takeOrder("Carlos", " Espresso", 3)}"`
);
console.assert(
  takeOrder("Amina", "pizza", 1) === "Sorry Amina, we don't have pizza",
  `6.3 takeOrder("Amina", "pizza", 1) returned "${takeOrder("Amina", "pizza", 1)}"`
);

// -------------------------------------------------------------
// Exercise 6.4 — YOUR TURN to write the tests! 🧪
//
// Here is a function that is ALREADY written. It decides if a
// customer is a "VIP" (they visited 20 times or more).
//
// Write AT LEAST 3 console.assert lines that check it works:
//   - one customer who IS a VIP
//   - one customer who is NOT a VIP
//   - the "edge" case: exactly 20 visits
// Look at the asserts in the other exercises to copy the format.
// -------------------------------------------------------------
function isVip(visits) {
  return visits >= 20;
}

// ✏️ write your console.assert lines here


console.log("✅ Finished running 06-cafe-machine.js — no 'Assertion failed' above means you solved it!");
