import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";
describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "TEST case",
        expected: ["test", "case"],
    },
    {
        input: "   multiple    spaces   here  ",
        expected: ["multiple", "spaces", "here"],
    },
    {
        input: "",
        expected: [],
    },
    {
        input: "   ",
        expected: [],
    },
    {
        input: "singleword",
        expected: ["singleword"],
    },
    {
        input: "  MixEd CaSe InPuT ",
        expected: ["mixed", "case", "input"],
    },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
