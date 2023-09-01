import { describe, expect, test, it } from "@jest/globals";
import { merge } from "./index";

describe("merge function", () => {
  it("should merge two sorted arrays", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const merged = merge(collection1, collection2);
    expect(merged).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle empty arrays", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const merged = merge(collection1, collection2);
    expect(merged).toStrictEqual([]);
  });

  it("should handle arrays of different lengths", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4];
    const merged = merge(collection1, collection2);
    expect(merged).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
