import { Cache } from "./pokecache.js";
import { test, expect } from "vitest";

test.concurrent.each([
  { key: "https://example.com", val: "testdata", interval: 500 },
  { key: "https://example.com/path", val: "moretestdata", interval: 1000 },
])("Test caching expiration after %sms for key %s", async ({ key, val, interval }) => {
  const cache = new Cache(interval);
  
  cache.add(key, val);
  expect(cache.get(key)).toBe(val);

  await new Promise((resolve) => setTimeout(resolve, interval * 2));
  
  expect(cache.get(key)).toBeUndefined();

  cache.stopReapLoop();
});
