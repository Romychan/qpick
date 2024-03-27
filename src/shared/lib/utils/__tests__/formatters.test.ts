import { formatCardNumber, formatExpiryDate, formatPrice } from '../formatters';

describe('formatPrice', () => {
  it('should work correctly', () => {
    expect(formatPrice(10).replace(/\u00a0/g, ' ')).toEqual('10 ₽');
    expect(formatPrice(100).replace(/\u00a0/g, ' ')).toBe('100 ₽');
    expect(formatPrice(1000).replace(/\u00a0/g, ' ')).toBe('1 000 ₽');
    expect(formatPrice(10000).replace(/\u00a0/g, ' ')).toBe('10 000 ₽');
    expect(formatPrice(100000).replace(/\u00a0/g, ' ')).toBe('100 000 ₽');
    expect(formatPrice(1000000).replace(/\u00a0/g, ' ')).toBe('1 000 000 ₽');
  });

  it('should work correctly with other locales and currencies', () => {
    expect(formatPrice(10000, 'currency', 'en-US', 'USD')).toBe('$10,000');
  });
});

describe('formatCardNumber', () => {
  it('should work correctly', () => {
    expect(formatCardNumber('1234123412341234')).toEqual('1234 1234 1234 1234');
    expect(formatCardNumber('123412341234123')).toEqual('1234 1234 1234 123');
    expect(formatCardNumber('12341234123')).toEqual('1234 1234 123');
  });
});

describe('formatExpiryDate', () => {
  it('should work correctly', () => {
    expect(formatExpiryDate('13')).toEqual('01/3');
    expect(formatExpiryDate('123')).toEqual('12/3');
    expect(formatExpiryDate('1234')).toEqual('12/34');
  });
});
