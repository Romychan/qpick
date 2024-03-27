import { z } from 'zod';

/** The schema for validating a user form */
export const UserFormSchema = z.object({
  firstName: z
    .string({ required_error: 'Обязательно к заполнению' })
    .min(2, 'Поле должно содержать не менее 2 символов')
    .max(16, 'Поле должно содержать не более 16 символов'),
  secondName: z
    .string({ required_error: 'Обязательно к заполнению' })
    .min(2, 'Поле должно содержать не менее 2 символов')
    .max(32, 'Поле должно содержать не более 32 символов'),
  email: z
    .string({ required_error: 'Обязательно к заполнению' })
    .email('Недопустимый адрес электронной почты')
    .min(6, 'Поле должно содержать не менее 6 символов')
    .max(64, 'Поле должно содержать не более 64 символов'),
});
