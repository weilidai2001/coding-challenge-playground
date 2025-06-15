import { add } from '../math';

describe('add function', () => {
  it('adds two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, 20)).toBe(30);
    expect(add(0, 5)).toBe(5);
  });

  it('adds negative numbers correctly', () => {
    expect(add(-1, -1)).toBe(-2);
    expect(add(-5, 3)).toBe(-2);
    expect(add(10, -15)).toBe(-5);
  });

  it('adds decimal numbers correctly', () => {
    expect(add(1.5, 2.5)).toBe(4);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
