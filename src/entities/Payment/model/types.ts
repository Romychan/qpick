import { z } from 'zod';

import {
  CardPaymentSchema,
  CashPaymentSchema,
  PaymentFormSchema,
} from './schemas';

/** Type for validation card payment form */
export type CardPaymentFormType = z.infer<typeof CardPaymentSchema>;

/** Type for validation cash payment form */
export type CashPaymentFormType = z.infer<typeof CashPaymentSchema>;

/** Type for validation payment form */
export type PaymentFormType = z.infer<typeof PaymentFormSchema>;
