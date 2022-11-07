import { describe, expect, it } from "vitest";
import fetch from "node-fetch";
const host = "https://js-example-1.pages-examples.pages.dev";

async function get(path: string): Promise<string> {
  const res = await fetch(`${host}${path}`, {});
  return await res.text();
}

// The two tests marked with concurrent will be run in parallel
describe("pages", () => {
  it("should serve both /foo and /foo/", async () => {
    expect(await get("/")).toMatchInlineSnapshot('"/functions/index.js"');
    expect(await get("")).toMatchInlineSnapshot('"/functions/index.js"');

    expect(await get("/helloworld")).toMatchInlineSnapshot(
      '"/functions/helloworld.js"'
    );
    expect(await get("/helloworld/")).toMatchInlineSnapshot(
      '"/functions/helloworld.js"'
    );

    expect(await get("/fruits/apple")).toMatchInlineSnapshot(
      '"/functions/fruits/apple.js"'
    );
    expect(await get("/fruits/apple/")).toMatchInlineSnapshot(
      '"/functions/fruits/apple.js"'
    );

    expect(await get("/fruits/banana")).toMatchInlineSnapshot(
      '"/functions/fruits/banana.js"'
    );
    expect(await get("/fruits/banana/")).toMatchInlineSnapshot(
      '"/functions/fruits/banana.js"'
    );

    expect(await get("/fruits")).toMatchInlineSnapshot(
      '"/functions/fruits/index.js"'
    );
    expect(await get("/fruits/")).toMatchInlineSnapshot(
      '"/functions/fruits/index.js"'
    );
  });
});
