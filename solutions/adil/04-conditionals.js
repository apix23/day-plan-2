// =============================================================
//  ☕ MigraCode Coffee — Exercise 04: if / else
// =============================================================
//
//  The café needs to make decisions: Are we open? Which cup size?
//  Does this customer get a discount? Let's use `if` / `else`.
//
//  HOW TO WORK:
//    1. Write the code inside each function marked with ✏️.
//    2. Run this file:   node 04-conditionals.js
//    3. No "Assertion failed" messages = everything is correct 🎉
//
//  ⚠️  Do NOT change the console.assert lines.
// =============================================================

// -------------------------------------------------------------
// Exercise 4.1 — isOpen
// The café is open from 8 (included) until 20 (NOT included).
// Return true if `hour` is inside opening hours, false otherwise.
//   isOpen(8)  → true
//   isOpen(19) → true
//   isOpen(20) → false
//   isOpen(6)  → false
// 💡 Hint: you can combine conditions with && (and)
// -------------------------------------------------------------
function isOpen(hour) {
  // ✏️ your code here
}

console.assert(isOpen(8) === true, `4.1 isOpen(8) should be true but got ${isOpen(8)}`);
console.assert(isOpen(19) === true, `4.1 isOpen(19) should be true but got ${isOpen(19)}`);
console.assert(isOpen(20) === false, `4.1 isOpen(20) should be false but got ${isOpen(20)}`);
console.assert(isOpen(6) === false, `4.1 isOpen(6) should be false but got ${isOpen(6)}`);

// -------------------------------------------------------------
// Exercise 4.2 — getCupSize
// Return the cup size for the amount of millilitres:
//   250 ml or less   → "small"
//   400 ml or less   → "medium"
//   more than 400 ml → "large"
// 💡 Hint: if / else if / else
// -------------------------------------------------------------
function getCupSize(ml) {
  // ✏️ your code here
}

console.assert(getCupSize(200) === "small", `4.2 getCupSize(200) returned ${getCupSize(200)}`);
console.assert(getCupSize(250) === "small", `4.2 getCupSize(250) returned ${getCupSize(250)}`);
console.assert(getCupSize(330) === "medium", `4.2 getCupSize(330) returned ${getCupSize(330)}`);
console.assert(getCupSize(500) === "large", `4.2 getCupSize(500) returned ${getCupSize(500)}`);

// -------------------------------------------------------------
// Exercise 4.3 — getDiscount
// Return the discount PERCENTAGE for a customer:
//   - children younger than 12 → 50
//   - people 65 or older       → 30
//   - students                 → 10
//   - everybody else           → 0
// If someone matches more than one rule, the FIRST rule wins.
// -------------------------------------------------------------
function getDiscount(age, isStudent) {
  // ✏️ your code here
}

console.assert(getDiscount(8, false) === 50, `4.3 getDiscount(8, false) returned ${getDiscount(8, false)}`);
console.assert(getDiscount(70, false) === 30, `4.3 getDiscount(70, false) returned ${getDiscount(70, false)}`);
console.assert(getDiscount(22, true) === 10, `4.3 getDiscount(22, true) returned ${getDiscount(22, true)}`);
console.assert(getDiscount(35, false) === 0, `4.3 getDiscount(35, false) returned ${getDiscount(35, false)}`);
console.assert(getDiscount(10, true) === 50, `4.3 getDiscount(10, true) returned ${getDiscount(10, true)}`);

// -------------------------------------------------------------
// Exercise 4.4 — checkPayment
// Return a message depending on the money the customer gives:
//   money equal to total   → "Thank you!"
//   money more than total  → "Your change is €X.XX"  (use toFixed(2))
//   money less than total  → "Sorry, not enough money"
//   checkPayment(5, 5)    → "Thank you!"
//   checkPayment(10, 7.5) → "Your change is €2.50"
//   checkPayment(3, 7.5)  → "Sorry, not enough money"
// -------------------------------------------------------------
function checkPayment(money, total) {
  // ✏️ your code here
}

console.assert(checkPayment(5, 5) === "Thank you!", `4.4 checkPayment(5, 5) returned ${checkPayment(5, 5)}`);
console.assert(
  checkPayment(10, 7.5) === "Your change is €2.50",
  `4.4 checkPayment(10, 7.5) returned ${checkPayment(10, 7.5)}`
);
console.assert(
  checkPayment(3, 7.5) === "Sorry, not enough money",
  `4.4 checkPayment(3, 7.5) returned ${checkPayment(3, 7.5)}`
);

console.log("✅ Finished running 04-conditionals.js — no 'Assertion failed' above means you solved it!");
