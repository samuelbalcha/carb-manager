import {
  toHrMin,
  kJoulesToCalories,
  kcalTokJoules
} from "../../src/utils/utils";

describe("toHrMin", () => {
  it("should return hr & min when given value is greater than 60", () => {
    const result = toHrMin(65);
    expect(result).toEqual("1 hr 5 min");
  });

  it("should return min when given value is less than 60", () => {
    const result = toHrMin(55);
    expect(result).toEqual("55 min");
  });
});

describe("kJoulesToCalories", () => {
  it("should return value in calories", () => {
    const result = kJoulesToCalories(774);
    expect(result).toEqual("184.99");
  });
});

describe("kcalTokJoules", () => {
  it("should return value in kJ", () => {
    const result = kcalTokJoules(184.99);
    expect(result).toEqual("774.02");
  });
});
