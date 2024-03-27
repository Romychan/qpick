import { z } from 'zod';

import { FormSchema } from './schemas';

/** Type for validation order form */
export type FormSchemaType = z.infer<typeof FormSchema>;
