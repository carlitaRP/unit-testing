import {compute } from './compute';

let number = -3;
let number1 = 2;
let number2 = 0;

describe('compute', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(number);
    expect(result).toBe(0);
  })

})

describe('compute', () => {
  it('should return 2 if input is positive', () => {
    const result = compute(number1);
    expect(result).toBe(2);
  })
})


describe('compute', () => {
  it('should return 2 if input is positive', () => {
    const result = compute(number2);
    expect(result).toBe(2);
  })
})


