export default function classNames() {
  let classes = '';

  for (let arg of arguments) {
    if (arg === undefined) {
      continue;
    }

    let argType = Object.prototype.toString.call(arg);

    if (argType === '[object String]') {
      classes += (' ' + arg);

    } else if (argType === '[object Object]') {
      for (let key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes += (' ' + key);
        }
      }

    } else {
      throw new TypeError(
        `classNames accepts strings and objects as arguments. Got ${arg}.`
      );
    }
  }

  return classes.trim();
}