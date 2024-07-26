class StringCalculator {
  add(numbers) {
    if (numbers == "" || numbers == " ") {
      return 0;
    }

    if (numbers.length < 2) {
      return parseInt(numbers);
    }

    const numberArr = numbers.split(",");

    let sum = 0;

    for (const num of numberArr) {
      sum += parseInt(num);
    }

    return sum;
  }
}

module.exports = StringCalculator;
