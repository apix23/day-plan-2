// =============================================================
//  ☕ MigraCode Coffee — Exercise 02: Numbers
// =============================================================
//
//  The café is open and customers are arriving. Time to do some
//  maths with prices!
//
//  HOW TO WORK:
//    1. Replace every `null` marked with ✏️ with your own code.
//    2. Run this file:   node 02-numbers.js
//    3. No "Assertion failed" messages = everything is correct 🎉
//
//  ⚠️  Do NOT change the console.assert lines. Only change the ✏️ lines.
// =============================================================

const lattePrice = 3.5;
const croissantPrice = 2.25;

// -------------------------------------------------------------
// Exercise 2.1 — A customer buys one latte and one croissant.
// Create `breakfastTotal` with the price of both together.
// Use the variables above, do not write 5.75 directly!
// -------------------------------------------------------------
const breakfastTotal = null; // ✏️

console.assert(
  breakfastTotal === 5.75,
  `2.1 breakfastTotal should be 5.75 but it is ${breakfastTotal}`
);

// -------------------------------------------------------------
// Exercise 2.2 — A group orders 4 lattes.
// Create `groupTotal` with the price of 4 lattes.
// -------------------------------------------------------------
const groupTotal = null; // ✏️

console.assert(
  groupTotal === 14,
  `2.2 groupTotal should be 14 but it is ${groupTotal}`
);

// -------------------------------------------------------------
// Exercise 2.3 — The group of 4 friends wants to split the bill
// equally. Create `pricePerFriend` dividing `groupTotal` by 4.
// -------------------------------------------------------------
const pricePerFriend = null; // ✏️

console.assert(
  pricePerFriend === 3.5,
  `2.3 pricePerFriend should be 3.5 but it is ${pricePerFriend}`
);

// -------------------------------------------------------------
// Exercise 2.4 — The baker brought 17 cookies. They go in boxes
// of 5 cookies each.
//   - `fullBoxes`: how many COMPLETE boxes can we fill?
//   - `cookiesLeft`: how many cookies are left over?
// 💡 Hint: Math.floor() rounds down, and % gives the remainder.
// -------------------------------------------------------------
const cookies = 17;
const boxSize = 5;
const fullBoxes = null; // ✏️
const cookiesLeft = null; // ✏️

console.assert(
  fullBoxes === 3,
  `2.4 fullBoxes should be 3 but it is ${fullBoxes}`
);
console.assert(
  cookiesLeft === 2,
  `2.4 cookiesLeft should be 2 but it is ${cookiesLeft}`
);

// -------------------------------------------------------------
// Exercise 2.5 — Prices on the receipt always show 2 decimals.
// Create `receiptPrice` with `lattePrice` formatted as "3.50".
// 💡 Hint: .toFixed(2) — notice it returns a STRING, not a number!
// -------------------------------------------------------------
const receiptPrice = null; // ✏️

console.assert(
  receiptPrice === "3.50",
  `2.5 receiptPrice should be the string "3.50" but it is ${receiptPrice}`
);

// -------------------------------------------------------------
// Exercise 2.6 — The order form gives us the quantity as TEXT.
// Create `quantity` converting `quantityFromForm` into a number.
// 💡 Hint: Number("...")
// -------------------------------------------------------------
const quantityFromForm = "3";
const quantity = null; // ✏️

console.assert(
  quantity === 3,
  `2.6 quantity should be the number 3 but it is ${quantity} (type: ${typeof quantity})`
);

console.log("✅ Finished running 02-numbers.js — no 'Assertion failed' above means you solved it!");
