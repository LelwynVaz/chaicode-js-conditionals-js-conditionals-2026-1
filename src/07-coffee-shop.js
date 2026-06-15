/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  var smallCoffee = 3.00;
  var mediumCoffee = 4.00;
  var largeCoffe = 5.00;
  var regular = 0.00;
  var latte = 1.00;
  var cappuccino = 1.50;
  var mocha = 2.00;
  var whippedCream = 0.50;
  var extraShot = 0.75;
  var price;
  if (size == "small") {
    if (type == "regular") {
      if (extras.extraShot && !extras.whippedCream) {
        price = smallCoffee + regular + extraShot;
        return ("$",+price.toFixed(2));
      }
      else if (extras.whippedCream && !extras.extraShot) {
        price = smallCoffee + regular + whippedCream;
        return ("$",+price.toFixed(2));
      }
      else if (extras.extraShot && extras.whippedCream) {
        price = smallCoffee + regular + whippedCream + extraShot;
        return ("$",+price.toFixed(2));
      }
      else {
        price = smallCoffee + regular;
        return ("$",+price.toFixed(2));
      }
    }
    else if (type == "latte") {
      if (extras.extraShot && !extras.whippedCream) {
        price = smallCoffee + latte + extraShot;
        return ("$",+price.toFixed(2));
      }
      else if (extras.whippedCream && !extras.extraShot) {
        price = smallCoffee + latte + whippedCream;
        return ("$",+price.toFixed(2));
      }
      else if (extras.extraShot && extras.whippedCream) {
        price = smallCoffee + latte + whippedCream + extraShot;
        return ("$",+price.toFixed(2));
      }
      else {
        price = smallCoffee + latte;
        return ("$",+price.toFixed(2));
      }
    }
    else if (type == "cappuccino") {
      if (extras.extraShot && !extras.whippedCream) {
        price = smallCoffee + cappuccino +extraShot;
        return ("$",+price.toFixed(2));
      }
      else if (extras.whippedCream && !extras.extraShot) {
        price = smallCoffee + cappuccino + whippedCream;
        return ("$",+price.toFixed(2));
      }
      else if (extras.extraShot && extras.whippedCream) {
        price = smallCoffee + cappuccino + whippedCream + extraShot;
        return ("$",+price.toFixed(2));
      }
      else {
        price = smallCoffee + cappuccino;
        return ("$",+price.toFixed(2));
      }
    }
    else if (type == "mocha") {
      if (extras.extraShot && !extras.whippedCream) {
        price = smallCoffee + mocha + extraShot;
        return ("$",+price.toFixed(2));
      }
      else if (extras.whippedCream && !extras.extraShot) {
        price = smallCoffee + mocha + whippedCream;
        return ("$",+price.toFixed(2));
      }
      else if (extras.extraShot && extras.whippedCream) {
        price = smallCoffee + mocha + whippedCream + extraShot;
        return ("$",+price.toFixed(2));
      }
      else {
        price = smallCoffee + mocha;
        return ("$",+price.toFixed(2));
      }
    }
    else {
      return -1;
    }
  }
  else if (size == "medium") {
    if (type == "regular") {
      if (extras.extraShot && !extras.whippedCream) {
        price = mediumCoffee + regular + extraShot;
        return ("$",+price.toFixed(2));
      }
      else if (extras.whippedCream && !extras.extraShot) {
        price = mediumCoffee + regular + whippedCream;
        return ("$",+price.toFixed(2));
      }
      else if (extras.extraShot && extras.whippedCream) {
        price = mediumCoffee + regular + whippedCream + extraShot;
        return ("$",+price.toFixed(2));
      }
      else {
        price = mediumCoffee + regular;
        return ("$",+price.toFixed(2));
      }
    }
    else if (type == "latte") {
      if (extras.extraShot && !extras.whippedCream) {
        price = mediumCoffee + latte + extraShot;
        return ("$",+price.toFixed(2));
      }
      else if (extras.whippedCream && !extras.extraShot) {
        price = mediumCoffee + latte + whippedCream;
        return ("$",+price.toFixed(2));
      }
      else if (extras.extraShot && extras.whippedCream) {
        price = mediumCoffee + latte + whippedCream + extraShot;
        return ("$",+price.toFixed(2));
      }
      else {
        price = mediumCoffee + latte;
        return ("$",+price.toFixed(2));
      }
    }
    else if (type == "cappuccino") {
      if (extras.extraShot && !extras.whippedCream) {
        price = mediumCoffee + cappuccino +extraShot;
        return ("$",+price.toFixed(2));
      }
      else if (extras.whippedCream && !extras.extraShot) {
        price = mediumCoffee + cappuccino + whippedCream;
        return ("$",+price.toFixed(2));
      }
      else if (extras.extraShot && extras.whippedCream) {
        price = mediumCoffee + cappuccino + whippedCream + extraShot;
        return ("$",+price.toFixed(2));
      }
      else {
        price = mediumCoffee + cappuccino;
        return ("$",+price.toFixed(2));
      }
    }
    else if (type == "mocha") {
      if (extras.extraShot && !extras.whippedCream) {
        price = mediumCoffee + mocha + extraShot;
        return ("$",+price.toFixed(2));
      }
      else if (extras.whippedCream && !extras.extraShot) {
        price = mediumCoffee + mocha + whippedCream;
        return ("$",+price.toFixed(2));
      }
      else if (extras.extraShot && extras.whippedCream) {
        price = mediumCoffee + mocha + whippedCream + extraShot;
        return ("$",+price.toFixed(2));
      }
      else {
        price = mediumCoffee + mocha;
        return ("$",+price.toFixed(2));
      }
    }
    else {
      return -1;
    }
    
  }
  else if (size == "large") {
    if (type == "regular") {
      if (extras.extraShot && !extras.whippedCream) {
        price = largeCoffe + regular + extraShot;
        return ("$",+price.toFixed(2));
      }
      else if (extras.whippedCream && !extras.extraShot) {
        price = largeCoffe + regular + whippedCream;
        return ("$",+price.toFixed(2));
      }
      else if (extras.extraShot && extras.whippedCream) {
        price = largeCoffe + regular + whippedCream + extraShot;
        return ("$",+price.toFixed(2));
      }
      else {
        price = largeCoffe + regular;
        return ("$",+price.toFixed(2));
      }
    }
    else if (type == "latte") {
      if (extras.extraShot && !extras.whippedCream) {
        price = largeCoffe + latte + extraShot;
        return ("$",+price.toFixed(2));
      }
      else if (extras.whippedCream && !extras.extraShot) {
        price = largeCoffe + latte + whippedCream;
        return ("$",+price.toFixed(2));
      }
      else if (extras.extraShot && extras.whippedCream) {
        price = largeCoffe + latte + whippedCream + extraShot;
        return ("$",+price.toFixed(2));
      }
      else {
        price = largeCoffe + latte;
        return ("$",+price.toFixed(2));
      }
    }
    else if (type == "cappuccino") {
      if (extras.extraShot && !extras.whippedCream) {
        price = largeCoffe + cappuccino +extraShot;
        return ("$",+price.toFixed(2));
      }
      else if (extras.whippedCream && !extras.extraShot) {
        price = largeCoffe + cappuccino + whippedCream;
        return ("$",+price.toFixed(2));
      }
      else if (extras.extraShot && extras.whippedCream) {
        price = largeCoffe + cappuccino + whippedCream + extraShot;
        return ("$",+price.toFixed(2));
      }
      else {
        price = largeCoffe + cappuccino;
        return ("$",+price.toFixed(2));
      }
    }
    else if (type == "mocha") {
      if (extras.extraShot && !extras.whippedCream) {
        price = largeCoffe + mocha + extraShot;
        return ("$",+price.toFixed(2));
      }
      else if (extras.whippedCream && !extras.extraShot) {
        price = largeCoffe + mocha + whippedCream;
        return ("$",+price.toFixed(2));
      }
      else if (extras.extraShot && extras.whippedCream) {
        price = largeCoffe + mocha + whippedCream + extraShot;
        return ("$",+price.toFixed(2));
      }
      else {
        price = largeCoffe + mocha;
        return ("$",+price.toFixed(2));
      }
    }
    else {
      return -1;
    }
  }
  else {
    return -1;
  }
    
}