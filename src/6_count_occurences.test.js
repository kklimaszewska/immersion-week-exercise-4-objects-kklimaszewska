const countOccurences = require("./6_count_occurences");

test("Count Occurences (1)", () => {
  expect(countOccurences("hello is it you hello hello")).toStrictEqual({
    1: ["is", "it", "you"],
    3: ["hello"],
  });
});

test("Count Occurences (2)", () => {
  expect(countOccurences("hey mama hey mama")).toStrictEqual({
    2: ["hey", "mama"],
  });
});
