import { z } from 'zod';

import { PaymentFormSchema } from '~/entities/Payment';
import { UserFormSchema } from '~/entities/User';

/** The schema for validating a order form */
export const FormSchema = z.object({
  payment: PaymentFormSchema,
  user: UserFormSchema,
});
