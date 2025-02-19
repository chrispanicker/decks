//Ripped these functions from P5's calculation.js
export function constrain(n, low, high) {
  return Math.max(Math.min(n, high), low);
};

export function map(n, start1, stop1, start2, stop2) {
  const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;

  if (start2 < stop2) {
    return constrain(newval, start2, stop2);
  } else {
    return constrain(newval, stop2, start2);
  }
};
