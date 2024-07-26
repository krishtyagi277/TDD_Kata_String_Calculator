TDD Kata 1 - String Calculator is a popular coding exercise designed to practice Test-Driven Development (TDD) principles. The exercise involves implementing a simple string calculator that can take a string of numbers and return their sum. Here's a breakdown of the typical steps involved:

\*\*Create a simple String calculator with a method add(String numbers).

1. The method can take 0, 1, or 2 numbers and will return their sum (for example, add("1,2") should return 3).
2. Empty string should return 0.
   \*\*Allow the add method to handle an unknown amount of numbers.

For example, add("1,2,3,4") should return 10.

3.  \*\*Allow the add method to handle new lines between numbers (instead of commas).

        a.) Allow the Add method to handle new lines between numbers (instead of commas).
            the following input is ok: “1\n2,3” (will equal 6)
            the following input is NOT ok: “1,\n” (not need to prove it - just clarifying)

    ——————————————————————————————-

4.  Support different delimiters
    a.) to change a delimiter, the beginning of the string will contain a separate line that looks like this: “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
    b.) the first line is optional. all existing scenarios should still be supported

5.  Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.
    if there are multiple negatives, show all of them in the exception message.

6.  Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2

7.  Delimiters can be of any length with the following format: “//[delimiter]\n” for example: “//[***]\n1**_2_**3” should return 6

8.  Allow multiple delimiters like this: “//[delim1][delim2]\n” for example “//[\*][%]\n1\*2%3” should return 6.
    ————————————————————————————————
9.  make sure you can also handle multiple delimiters with length longer than one char
