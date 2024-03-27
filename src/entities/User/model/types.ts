import { z } from 'zod';

import { UserFormSchema } from './schemas';

/** Type for validation user form */
export type UserFormType = z.infer<typeof UserFormSchema>;
