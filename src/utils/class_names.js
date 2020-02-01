export default function classNames () {
  let classes = ''

  for (const arg of arguments) {
    if (arg === undefined) {
      continue
    }

    const argType = Object.prototype.toString.call(arg)

    if (argType === '[object String]') {
      classes += (' ' + arg)
    } else if (argType === '[object Object]') {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          classes += (' ' + key)
        }
      }
    } else {
      throw new TypeError(
        `classNames accepts strings and objects as arguments. Got ${arg}.`
      )
    }
  }

  return classes.trim()
}
