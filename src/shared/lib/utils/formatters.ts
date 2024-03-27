/**
 * Formats the price by adding a space separator
 *
 * @param price Price for formatting
 * @param style Type of formatting
 * @param locale A string with a language locale
 * @param currency Currency code
 * @returns Price with space separator
 *
 * @example formatPrice(2400); // 2 400 ₽
 */
export const formatPrice = (
  price: number | null | undefined,
  style = 'currency',
  locale = 'ru',
  currency = 'RUB',
): string => {
  if (!price) return '';

  return price.toLocaleString(locale, {
    style,
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

/**
 * Formats the card number by adding spaces through 4 digits
 *
 * @param cardNumber Card number
 * @returns The card number with a space separator
 *
 * @example formatCardNumber(1234123412341234); // 1234 1234 1234 1234
 */
export const formatCardNumber = (cardNumber: string): string => {
  if (!cardNumber) return '';

  const matches = cardNumber.replace(/\s+/g, '').match(/\d{4,16}/g);
  const match = matches ? matches[0] : '';
  const parts = [];

  for (let i = 0; i < match.length; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  return parts.length ? parts.join(' ') : cardNumber;
};

/**
 * Formats the date in MM/YY format
 *
 * @param date Date to format
 * @returns Date in MM/YY format
 *
 * @example formatExpiryDate(1212); // 12/12
 * @example formatExpiryDate(112); // 01/12
 */
export const formatExpiryDate = (date: string): string => {
  if (!date) return '';

  return date
    .replace(/[^0-9]/g, '')
    .replace(/^([2-9])$/g, '0$1')
    .replace(/^(1{1})([3-9]{1})$/g, '0$1/$2')
    .replace(/^0{1,}/g, '0')
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2');
};
