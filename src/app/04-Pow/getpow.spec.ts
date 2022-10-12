/*Description
Implement a pow function: x^n, where x = base, n = exponent. NOTE: Don't use Math.pow(), should implement using for, while..

Mockup

..
Unit Test

 Should return 1 if n = 0
 Should return 0 if n is negative
 Should return 8 if x=2, n=3
 Should return 9 if x=3, n=2
*/


import {getPow} from './getPow';

describe('getPow', () => {
  it ('should return the pow function', () => {
    const result = getPow(2,3);
    expect(result).toBe(8)
  })
})

describe('getPow', () => {
  it ('should return the pow function', () => {
    const result = getPow(2,0);
    expect(result).toBe(1)
  })
})

describe('getPow', () => {
  it ('should return the pow function', () => {
    const result = getPow(2,-3);
    expect(result).toBe(0)
  })
})
