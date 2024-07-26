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
});
