const sortWords = require("./2_sort_words");

test("Sort Words (1)", () => {
  expect(sortWords([])).toStrictEqual({
    odd: [],
    even: [],
  });
});

test("Sort Words (2)", () => {
  expect(sortWords(["work", "hard", "mommy"])).toStrictEqual({
    odd: ["mommy"],
    even: ["work", "hard"],
  });
});

test("Sort Words (3)", () => {
  expect(sortWords(["oh!", "ah!", "hi", "my"])).toStrictEqual({
    odd: ["oh!", "ah!"],
    even: ["hi", "my"],
  });
});
