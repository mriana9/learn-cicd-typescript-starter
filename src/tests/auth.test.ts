import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("should extract the API key from the Authorization header", () => {
    const headers = {
      authorization: "ApiKey 123456789",
    };
    expect(getAPIKey(headers)).toBe("ApiKey 123456789");
  });

  test("should throw an error if the Authorization header is missing", () => {
    const headers = {};
    expect(() => getAPIKey(headers)).toThrow();
  });
});
