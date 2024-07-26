class StringCalculator {
  add(numbers) {
    if (numbers == "" || numbers == " ") {
      return 0;
    }

    if (numbers.length < 2) {
      return parseInt(numbers);
    }

    const numList = this.tokenizeString(numbers);
    const negativeValueStr = this.fiterNegativeValues(numList) || "";

    if (negativeValueStr.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeValuesStr}`);
    }

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

  fiterNegativeValues(numList) {
    const negativeValues = numList.filter((num) => parseInt(num) < 0);
    return negativeValues.join(", ");
  }

  seprateDelimiter(str) {
    return str.replace(/[\/\[\]]/g, "");
  }
}

module.exports = StringCalculator;
