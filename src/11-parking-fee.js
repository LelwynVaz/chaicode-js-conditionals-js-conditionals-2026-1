/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  // Your code here
  let carBaseFee = 5;
  let motorcycleBaseFee = 3;
  let busBaseFee = 10;
  let carHourlyFee = 3;
  let motorcycleHourlyFee = 2;
  let busHourlyFee = 7;

  let carMaxFee = 30;
  let motorcycleMaxFee = 18;
  let busMaxFee = 60;

  let parkedHours = Math.ceil(hours);
  let parkingFees;

  switch (vehicleType) {
    case "car":
      if (parkedHours > 0) {
        parkingFees = carBaseFee;
        parkedHours = parkedHours - 1;
        if (parkedHours > 0) {
          parkingFees = parkingFees + (parkedHours * carHourlyFee);
          if (parkingFees > carMaxFee) {
            return carMaxFee;
          } else {
            return parkingFees;
          }
        } else {
          return parkingFees;
        }
      }
      else {
        return -1;
      }

    case "motorcycle":
      if (parkedHours > 0) {
        parkingFees = motorcycleBaseFee;
        parkedHours = parkedHours - 1;
        if (parkedHours > 0) {
          parkingFees = parkingFees + (parkedHours * motorcycleHourlyFee);
          if (parkingFees > motorcycleMaxFee) {
            return motorcycleMaxFee;
          } else {
            return parkingFees;
          }
        } else {
          return parkingFees;
        }
      }
      else {
        return -1;
      }

    case "bus":
      if (parkedHours > 0) {
        parkingFees = busBaseFee;
        parkedHours = parkedHours - 1;
        if (parkedHours > 0) {
          parkingFees = parkingFees + (parkedHours * busHourlyFee);
          if (parkingFees > busMaxFee) {
            return busMaxFee;
          } else {
            return parkingFees;
          }
        } else {
          return parkingFees;
        }
      }
      else {
        return -1;
      }

    default:
      return -1;
  }
}
