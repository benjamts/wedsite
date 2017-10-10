export default function reallyStopPropagation(e) {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
}