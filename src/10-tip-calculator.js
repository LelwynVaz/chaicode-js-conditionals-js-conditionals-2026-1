/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  let terribleRating = 0.05;
  let poorRating = 0.10;
  let okayRating = 0.15;
  let goodRating = 0.20;
  let excellentRating = 0.25;
  let orderTipsAmount;
  let orderTotalAmount = billAmount;

  if (serviceRating === 5 && billAmount > 0) {
    orderTipsAmount = billAmount * excellentRating;
    orderTotalAmount = orderTotalAmount + orderTipsAmount;
    return {tipPercentage: excellentRating * 100, tipAmount: Math.round(orderTipsAmount * 100) / 100, totalAmount: Math.round(orderTotalAmount * 100) / 100}
    }
  else if (serviceRating === 4 && billAmount > 0) {
    orderTipsAmount = billAmount * goodRating;
    orderTotalAmount = orderTotalAmount + orderTipsAmount;
    return {tipPercentage: goodRating * 100, tipAmount: Math.round(orderTipsAmount * 100) / 100, totalAmount: Math.round(orderTotalAmount * 100) / 100}
  }
  else if (serviceRating === 3 && billAmount > 0) {
    orderTipsAmount = billAmount * okayRating;
    orderTotalAmount = orderTotalAmount + orderTipsAmount;
    return {tipPercentage: okayRating * 100, tipAmount: Math.round(orderTipsAmount * 100) / 100, totalAmount: Math.round(orderTotalAmount * 100) / 100};
  }
    else if (serviceRating === 2 && billAmount > 0) {
    orderTipsAmount = billAmount * poorRating;
    orderTotalAmount = orderTotalAmount + orderTipsAmount;
    return {tipPercentage: poorRating * 100, tipAmount: Math.round(orderTipsAmount * 100) / 100, totalAmount: Math.round(orderTotalAmount * 100) / 100};
  }
  else if (serviceRating === 1 && billAmount > 0) {
    orderTipsAmount = billAmount * terribleRating;
    orderTotalAmount = orderTotalAmount + orderTipsAmount;
    return {tipPercentage: terribleRating * 100, tipAmount: Math.round(orderTipsAmount * 100) / 100, totalAmount: Math.round(orderTotalAmount * 100) / 100};
  }
  else {
    return null;
  }
}

