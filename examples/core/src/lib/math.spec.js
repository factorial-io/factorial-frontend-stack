import * as math from "./math";

describe("Test math lib functions", () => {
  it("should return the square of a number", () => {
    expect(math.square(2)).toBe(4);
    expect(math.square(3)).toBe(9);
  });

  it("should return the cube of a number", () => {
    expect(math.cube(2)).toBe(8);
    expect(math.cube(3)).toBe(27);
  });

  it("should merge two arrays", () => {
    expect(math.merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
