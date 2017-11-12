const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = MS_IN_SECOND * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;
function diffDates(start, end) {
  const diff = {
    ms: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  };

  let ms = end - start;
  while (ms > MS_IN_DAY) {
    diff.days++;
    ms -= MS_IN_DAY;
  }
  while (ms > MS_IN_HOUR) {
    diff.hours++;
    ms -= MS_IN_HOUR;
  }
  while (ms > MS_IN_MINUTE) {
    diff.minutes++;
    ms -= MS_IN_MINUTE;
  }
  while (ms > MS_IN_SECOND) {
    diff.seconds++;
    ms -= MS_IN_SECOND;
  }
  return diff;
}


export default diffDates
