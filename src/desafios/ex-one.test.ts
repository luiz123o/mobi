import { maskify } from "./ex-one";

test("maskify correctly masks the string", () => {
  expect(maskify("4556364607935616")).toBe("############5616");
  expect(maskify("64607935616")).toBe("#######5616");
  expect(maskify("1")).toBe("1");
  expect(maskify("")).toBe("");
  expect(maskify("Skippy")).toBe("##ippy");
  expect(maskify("Nanananananananananana Batman!")).toBe(
    "##########################man!"
  );
});

test("does not mask if string has 4 characters or less", () => {
  expect(maskify("1234")).toBe("1234");
  expect(maskify("abc")).toBe("abc");
});