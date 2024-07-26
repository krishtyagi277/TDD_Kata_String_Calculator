const REGEX_CHECK_STARTS_WITH_CUSTOM_DELIMITER = /^\/\/(.*)\n(.*)/;
const REGEX_TO_FILTER_DELIMITER = /[\/\[\]]/g;
const EMPTY_STRING = "";
const SINGLE_SPACE = " ";
const DEFAULT_DELIMITER = ",";
const MAX_NUMBER_LIMIT = 1000;

class StringCalculator {
  /**
   * Adds the numbers in the given string.
   * @param {string} numbers - The input string containing numbers to add.
   * @returns {number} The sum of the numbers.
   * @throws {Error} If the string contains negative numbers.
   */
  add(numbers) {
    if (numbers == EMPTY_STRING || numbers == SINGLE_SPACE || !numbers) {
      return 0;
    }

    if (numbers.length < 2) {
      return parseInt(numbers);
    }

    const numList = this.tokenizeString(numbers);
    const negativeValuesStr =
      this.getNegativeValuesStr(numList) || EMPTY_STRING;

    if (negativeValuesStr.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeValuesStr}`);
    }

    const totalSum = this.getTotal(numList);
    return totalSum;
  }

  /**
   * Tokenizes the input string into an array of numbers.
   * @param {string} numbers - The input string containing numbers.
   * @returns {number[]} The array of numbers.
   */
  tokenizeString(numbers) {
    let delimiter = DEFAULT_DELIMITER;

    if (REGEX_CHECK_STARTS_WITH_CUSTOM_DELIMITER.test(numbers)) {
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

  /**
   * Finds and returns a string of negative values from the list.
   * @param {number[]} numList - The array of numbers.
   * @returns {string} The string of negative numbers, separated by commas.
   */
  getNegativeValuesStr(numList) {
    const negativeValues = numList.filter((num) => num < 0);
    return negativeValues.join(", ");
  }

  /**
   * Removes the characters '/', '[', and ']' from the input string.
   * @param {string} str - The input string.
   * @returns {string} The cleaned string with specified characters removed.
   */
  getDelimiterToSeprateStr(str) {
    return str.replace(REGEX_TO_FILTER_DELIMITER, EMPTY_STRING);
  }

  /**
   * Calculates the total sum of the numbers in the list.
   * Ignores numbers greater than MAX_NUMBER_LIMIT.
   * @param {number[]} numList - The array of numbers.
   * @returns {number} The total sum of the numbers.
   */
  getTotal(numList) {
    const total = numList.reduce((currSum, num) => {
      if (num <= MAX_NUMBER_LIMIT) currSum += num;
      return currSum;
    }, 0);

    return total;
  }
}

module.exports = StringCalculator;
