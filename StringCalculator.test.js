const StringCalculator = require("./StringCalculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
    expect(calculator.add(" ")).toBe(0);
  });

  test("should return the number for a single number", () => {
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("4")).toBe(4);
  });

  test("should return the number for a single number", () => {
    expect(calculator.add("1,2,3")).toBe(6);
    expect(calculator.add("1,2")).toBe(3);
  });

  test("should handle an unknown amount of numbers", () => {
    expect(calculator.add("1,2,3,4")).toBe(10);
  });

  test("should handle new lines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("should support different delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });

  test("should throw an exception for negative numbers", () => {
    expect(() => calculator.add("1,-2,3")).toThrow("Negatives not allowed: -2");
    expect(() => calculator.add("-1,-2,3")).toThrow(
      "Negatives not allowed: -1, -2"
    );
  });

  test("should ignore numbers bigger than 1000", () => {
    expect(calculator.add("2,1001")).toBe(2);
    expect(calculator.add("1000,1001")).toBe(1000);
  });
});
