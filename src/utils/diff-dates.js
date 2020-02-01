/*
  This solution should handle leap years and months with different numbers of
  days in a way that's fairly intuitive for humans.

  Dates with exactly the same month and day, but different year, will always
  have a difference of an exact number of years.

  The interval between, e.g., 28 February 2015 and 28 March 2015 will be
  considered exactly one month, not 28 days. If both those days are in 2016,
  the  difference will still be exactly one month, not 29 days.
*/
function diffDates (date1, date2) {
  let result
  if (date1 < date2) {
    result = {
      years: date2.getYear() - date1.getYear(),
      months: date2.getMonth() - date1.getMonth(),
      days: date2.getDate() - date1.getDate(),
      hours: date2.getHours() - date1.getHours(),
      minutes: date2.getMinutes() - date1.getMinutes(),
      seconds: Math.ceil(date2.getSeconds() - date1.getSeconds())
    }
    if (result.minutes < 0) {
      result.hours--
      result.minutes += 60
    }
    if (result.hours < 0) {
      result.days--
      result.hours += 24
    }
    if (result.days < 0) {
      result.months--
      // days = days left in date1's month,
      //      + days that have passed in date2's month
      const copy1 = new Date(date1.getTime())
      copy1.setDate(32)
      result.days = 32 - date1.getDate() - copy1.getDate() + date2.getDate()
    }
    if (result.months < 0) {
      result.years--
      result.months += 12
    }
  } else { // swap
    result = diffDates(date2, date1)
    for (const [key, value] of Object.entries(result)) {
      result[key] = -value
    }
  }
  return result
}

export default diffDates
