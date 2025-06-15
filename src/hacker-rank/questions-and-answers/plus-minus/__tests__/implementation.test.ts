
import { plusMinus } from '../implementation';

describe('plusMinus', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    // Mock console.log before each test
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.log after each test
    consoleSpy.mockRestore();
  });

  it('should calculate ratios for sample input', () => {
    const arr = [-4, 3, -9, 0, 4, 1];
    plusMinus(arr);
    
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy.mock.calls[0][0]).toBe('0.500000'); // 3/6 positive
    expect(consoleSpy.mock.calls[1][0]).toBe('0.333333'); // 2/6 negative
    expect(consoleSpy.mock.calls[2][0]).toBe('0.166667'); // 1/6 zero
  });

  it('should handle all positive numbers', () => {
    const arr = [1, 2, 3, 4];
    plusMinus(arr);
    
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy.mock.calls[0][0]).toBe('1.000000'); // 4/4 positive
    expect(consoleSpy.mock.calls[1][0]).toBe('0.000000'); // 0/4 negative
    expect(consoleSpy.mock.calls[2][0]).toBe('0.000000'); // 0/4 zero
  });

  it('should handle all negative numbers', () => {
    const arr = [-1, -2, -3];
    plusMinus(arr);
    
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy.mock.calls[0][0]).toBe('0.000000'); // 0/3 positive
    expect(consoleSpy.mock.calls[1][0]).toBe('1.000000'); // 3/3 negative
    expect(consoleSpy.mock.calls[2][0]).toBe('0.000000'); // 0/3 zero
  });

  it('should handle all zeros', () => {
    const arr = [0, 0, 0, 0];
    plusMinus(arr);
    
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy.mock.calls[0][0]).toBe('0.000000'); // 0/4 positive
    expect(consoleSpy.mock.calls[1][0]).toBe('0.000000'); // 0/4 negative
    expect(consoleSpy.mock.calls[2][0]).toBe('1.000000'); // 4/4 zero
  });

  it('should handle single element array', () => {
    const arr = [5];
    plusMinus(arr);
    
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy.mock.calls[0][0]).toBe('1.000000'); // 1/1 positive
    expect(consoleSpy.mock.calls[1][0]).toBe('0.000000'); // 0/1 negative
    expect(consoleSpy.mock.calls[2][0]).toBe('0.000000'); // 0/1 zero
  });
});
