// =============================================================
//  ☕ MigraCode Coffee — Exercise 05: while loops
// =============================================================
//
//  Some jobs in the café repeat: counting down, serving cups,
//  using coffee beans day after day... Let's use `while` loops!
//
//  HOW TO WORK:
//    1. Write the code inside each function marked with ✏️.
//       Use a `while` loop in every exercise of this file.
//    2. Run this file:   node 05-while-loops.js
//    3. No "Assertion failed" messages = everything is correct 🎉
//
//  ⚠️  Do NOT change the console.assert lines.
//  ⚠️  If your terminal gets stuck, you probably made an infinite
//      loop. Press Ctrl + C to stop it and check your condition!
// =============================================================

// -------------------------------------------------------------
// Exercise 5.1 — drawCups
// Return a string with `n` coffee cups.
//   drawCups(3) → "☕☕☕"
//   drawCups(0) → ""
// 💡 Start with an empty string "" and add one "☕" each loop.
// -------------------------------------------------------------
function drawCups(n) {
  // ✏️ your code here
}

console.assert(drawCups(3) === "☕☕☕", `5.1 drawCups(3) returned "${drawCups(3)}"`);
console.assert(drawCups(1) === "☕", `5.1 drawCups(1) returned "${drawCups(1)}"`);
console.assert(drawCups(0) === "", `5.1 drawCups(0) returned "${drawCups(0)}"`);

// -------------------------------------------------------------
// Exercise 5.2 — countdown
// Before opening, we count down out loud. Return a string with the
// numbers from `from` down to 1, separated by spaces, and then "OPEN!"
//   countdown(3) → "3 2 1 OPEN!"
//   countdown(1) → "1 OPEN!"
// -------------------------------------------------------------
function countdown(from) {
  // ✏️ your code here
}

console.assert(countdown(3) === "3 2 1 OPEN!", `5.2 countdown(3) returned "${countdown(3)}"`);
console.assert(countdown(1) === "1 OPEN!", `5.2 countdown(1) returned "${countdown(1)}"`);
console.assert(countdown(5) === "5 4 3 2 1 OPEN!", `5.2 countdown(5) returned "${countdown(5)}"`);

// -------------------------------------------------------------
// Exercise 5.3 — daysOfCoffee
// We have `beans` grams of coffee and we use `gramsPerDay` every day.
// Return how many FULL days we can work before running out.
//   daysOfCoffee(1000, 300) → 3   (1000 → 700 → 400 → 100, not enough for day 4)
//   daysOfCoffee(500, 100)  → 5
// 💡 Keep looping WHILE there are enough beans for one more day.
// -------------------------------------------------------------
function daysOfCoffee(beans, gramsPerDay) {
  // ✏️ your code here
}

console.assert(daysOfCoffee(1000, 300) === 3, `5.3 daysOfCoffee(1000, 300) returned ${daysOfCoffee(1000, 300)}`);
console.assert(daysOfCoffee(500, 100) === 5, `5.3 daysOfCoffee(500, 100) returned ${daysOfCoffee(500, 100)}`);
console.assert(daysOfCoffee(50, 100) === 0, `5.3 daysOfCoffee(50, 100) returned ${daysOfCoffee(50, 100)}`);

// -------------------------------------------------------------
// Exercise 5.4 — cupsUntilFreeCoffee
// Our loyalty card gives a FREE coffee when you collect 10 stamps.
// Each coffee you buy gives you 1 stamp. If a customer already has
// `stamps`, return how many more coffees they must buy to reach 10.
//   cupsUntilFreeCoffee(7)  → 3
//   cupsUntilFreeCoffee(10) → 0
// 💡 Yes, you could do 10 - stamps... but practise with a while loop!
// -------------------------------------------------------------
function cupsUntilFreeCoffee(stamps) {
  // ✏️ your code here
}

console.assert(cupsUntilFreeCoffee(7) === 3, `5.4 cupsUntilFreeCoffee(7) returned ${cupsUntilFreeCoffee(7)}`);
console.assert(cupsUntilFreeCoffee(0) === 10, `5.4 cupsUntilFreeCoffee(0) returned ${cupsUntilFreeCoffee(0)}`);
console.assert(cupsUntilFreeCoffee(10) === 0, `5.4 cupsUntilFreeCoffee(10) returned ${cupsUntilFreeCoffee(10)}`);

console.log("✅ Finished running 05-while-loops.js — no 'Assertion failed' above means you solved it!");
