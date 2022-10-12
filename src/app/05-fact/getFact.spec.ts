/*
Description
Implement a factorial function

Mockup

Unit Test

 Should return 1 if n is 0
 Should return 0 if n is negative
 Should return 6 if n is 3
 Should return 24 if n is 4
 Should return 120 if n is 5
 Should return 0 if n > 16
*/

import { getFact } from './getfact';

describe('getCurrencies', () => {
  it('should return the fact of the numbers', () => {
    const result = getFact(-2);
    expect(result).toBe(0);
  });
});

describe('getCurrencies', () => {
  it('should return the fact of the numbers', () => {
    const result = getFact(0);
    expect(result).toBe(1);
  });
});

describe('getCurrencies', () => {
  it('should return the fact of the numbers', () => {
    const result = getFact(3);
    expect(result).toBe(6);
  });
});

describe('getCurrencies', () => {
  it('should return the fact of the numbers', () => {
    const result = getFact(4);
    expect(result).toBe(24);
  });
});

describe('getCurrencies', () => {
  it('should return the fact of the numbers', () => {
    const result = getFact(5);
    expect(result).toBe(120);
  });
});

describe('getCurrencies', () => {
  it('should return the fact of the numbers', () => {
    const result = getFact(17);
    expect(result).toBe(0);
  });
});

