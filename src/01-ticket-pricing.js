/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here
  var childPrice = 8;
  var teenPrice = 12;
  var adultPrice = 15;
  var seniorPrice = 10;
  var weekendExtraPrice = 3;
  if (age < 0 || age != Number(age)) {
    return -1;
  }
  else if (age <= 12 && !isWeekend) {
    return("$",childPrice);
  } else if (age <= 12 && isWeekend){
    return("$",childPrice + weekendExtraPrice);
  }
  else if (age <= 17 && !isWeekend) {
    return("$",teenPrice);
  } else if (age <= 17 && isWeekend){
    return("$",teenPrice + weekendExtraPrice);
  }
  else if (age <= 59 && !isWeekend) {
    return("$",adultPrice);
  } else if (age <= 59 && isWeekend){
    return("$",adultPrice + weekendExtraPrice);
  }
  else if (age >= 60 && !isWeekend) {
    return("$",seniorPrice);
  } else if (age >= 60 && isWeekend){
    return("$",seniorPrice + weekendExtraPrice);
  }
  else {
    return -1;
  }
}
