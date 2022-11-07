import { describe, expect, it } from "vitest";
import fetch from "node-fetch";
// The two tests marked with concurrent will be run in parallel
describe("suite", () => {
  it("serial test", async () => {
    const res = await fetch("https://uuid.rocks/plain", {});
    const text = await res.text();
    expect(text.length).toBe(36);
  });
});
