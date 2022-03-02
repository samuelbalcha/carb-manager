export function toHrMin(timeInMinutes) {
  const hours = timeInMinutes / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  return rhours > 0 ? `${rhours} hr ${rminutes} min` : `${rminutes} min`;
}

export function kJoulesToCalories(kjVal) {
  return (kjVal * 0.239).toFixed(2).toString();
}

export function kcalTokJoules(kcalVal) {
  return (kcalVal / 0.239).toFixed(2).toString();
}
