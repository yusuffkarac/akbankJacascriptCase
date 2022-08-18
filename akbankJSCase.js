function evenOrOdd(value) {
  sum = 0;

  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }

  if (sum % 2 == 1) {
    return "Odd";
  } else if (sum % 2 == 0) {
    return "Even";
  }
}
console.log(evenOrOdd(43));
