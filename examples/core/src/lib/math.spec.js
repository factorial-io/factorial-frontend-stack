import * as math from "./math";

describe("Test math lib functions", () => {
  it("should return the square of a number", () => {
    expect(math.square(2)).toBe(4);
    expect(math.square(3)).toBe(9);
  });
});
