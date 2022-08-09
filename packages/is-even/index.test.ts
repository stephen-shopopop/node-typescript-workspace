import { describe, expect, test } from '../../node_modules/@jest/globals'
import { isEven } from "./index";

describe('isEven', () => {
    test('it detects even numbers', () => {
        expect(isEven(0)).toBe(true);
    });

    test('it detects odd numbers', () => {
        expect(isEven(1)).toBe(false);
    });
});
