import { z } from 'zod';

/** The schema for validating a form with a card payment type */
export const CardPaymentSchema = z.object({
  type: z.literal('card'),
  card: z
    .string({ required_error: 'Обязательно к заполнению' })
    .regex(
      /^(\d{4} \d{4} \d{4} \d{4})$/,
      'Номер карты должен состоять из 16 цифр',
    )
    .transform((value) => value.replace(/\s/g, '')),
  expiryDate: z
    .string({ required_error: 'Обязательно к заполнению' })
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Недопустимый формат даты'),
  cvv: z
    .string({ required_error: 'Обязательно к заполнению' })
    .regex(/^\d{3}$/, 'CVV должен состоять из 3 цифр'),
});

/** The schema for validating a form with a cash payment type */
export const CashPaymentSchema = z.object({
  type: z.literal('cash'),
});

/** The schema for validating a payment form */
export const PaymentFormSchema = z.discriminatedUnion('type', [
  CardPaymentSchema,
  CashPaymentSchema,
]);
