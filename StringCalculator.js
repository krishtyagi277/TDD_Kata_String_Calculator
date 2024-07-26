class StringCalculator {
  add(numbers) {
    if (numbers == "" || numbers == " ") {
      return 0;
    }

    if (numbers.length < 2) {
      return parseInt(numbers);
    }

    const numList = this.tokenizeString(numbers);
    const sum = numList.reduce((currSum, num) => (currSum += parseInt(num)), 0);

    return sum;
  }

  tokenizeString(numbers) {
    let delimiter = ",";

    if (/^\/\/(.*)\n(.*)/.test(numbers)) {
      const delimiterList = numbers.substring(0, numbers.indexOf("\n"));
      numbers = numbers.substring(numbers.indexOf("\n") + 1);
      delimiter = this.seprateDelimiter(delimiterList);
    }

    const splitRegex = `[^${delimiter}\\n]+`;
    const numList = numbers.match(new RegExp(splitRegex, "g"));
    return numList;
  }

  seprateDelimiter(str) {
    return str.replace(/[\/\[\]]/g, "");
  }
}

module.exports = StringCalculator;
