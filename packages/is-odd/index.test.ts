import { describe, expect, test } from '../../node_modules/@jest/globals'
import { isOdd } from "./index";

describe('isOdd', () => {
    test('it detects even numbers', () => {
        expect(isOdd(0)).toBe(false);
    });

    test('it detects odd numbers', () => {
        expect(isOdd(1)).toBe(true);
    });
});
