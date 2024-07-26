class StringCalculator {
  add(numbers) {
    if (numbers == "" || numbers == " " || !numbers) {
      return 0;
    }

    if (numbers.length < 2) {
      return parseInt(numbers);
    }

    const numList = this.tokenizeString(numbers);
    const negativeValuesStr = this.getNegativeValuesStr(numList) || "";

    if (negativeValuesStr.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeValuesStr}`);
    }

    const total = numList.reduce((currSum, num) => {
      if (num <= 1000) currSum += num;
      return currSum;
    }, 0);

    return total;
  }

  tokenizeString(numbers) {
    let delimiter = ",";

    if (/^\/\/(.*)\n(.*)/.test(numbers)) {
      const delimiterList = numbers.substring(0, numbers.indexOf("\n"));
      numbers = numbers.substring(numbers.indexOf("\n") + 1);
      delimiter = this.getDelimiterToSeprateStr(delimiterList);
    }

    const splitRegex = `[^${delimiter}\\n]+`;
    const numList = numbers
      .match(new RegExp(splitRegex, "g"))
      .map((num) => parseInt(num));

    return numList;
  }

  getNegativeValuesStr(numList) {
    const negativeValues = numList.filter((num) => num < 0);
    return negativeValues.join(", ");
  }

  getDelimiterToSeprateStr(str) {
    return str.replace(/[\/\[\]]/g, "");
  }
}

module.exports = StringCalculator;
