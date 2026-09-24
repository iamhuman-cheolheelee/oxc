import { describe, expect, it } from "vitest";

import { rawTransferSupported } from "../src-js/index.js";
import { parse, parseSync } from "./parser.ts";

import type { Comment } from "./parser.ts";

const cases: { source: string; expected: Comment }[] = [];
for (const marker of ["<!--", "-->"]) {
  for (const prefix of ["", "'😀';\n"]) {
    for (const value of ["", "a", " text ", "😀", "<!-- -->"]) {
      for (const lineEnding of ["", "\n", "\r", "\r\n", "\u2028", "\u2029"]) {
        cases.push({
          source: `${prefix}${marker}${value}${lineEnding}`,
          expected: {
            type: "Line",
            value,
            start: prefix.length,
            end: prefix.length + marker.length + value.length,
          },
        });
      }
    }
  }
}

describe.each([
  { name: "JSON", options: {}, supported: true },
  { name: "raw", options: { experimentalRawTransfer: true }, supported: rawTransferSupported() },
])("HTML comments ($name)", ({ options, supported }) => {
  describe.skipIf(!supported).each([
    { name: "sync", parse: parseSync },
    { name: "async", parse },
  ])("$name", ({ parse }) => {
    it.each(cases)("parses $source", async ({ source, expected }) => {
      const result = await parse("test.js", source, { ...options, sourceType: "script" });
      expect(result.errors).toHaveLength(0);
      expect(result.comments).toEqual([expected]);
    });
  });
});
