class StringCalculator {
  add(numbers) {
    if (numbers == "" || numbers == " ") {
      return 0;
    }

    if (numbers.length < 2) {
      return parseInt(numbers);
    }

    const splitRegex = /\n|\,/;
    const numberArr = numbers.split(splitRegex);

    const sum = numberArr.reduce(
      (currSum, num) => (currSum += parseInt(num)),
      0
    );

    return sum;
  }
}

module.exports = StringCalculator;
