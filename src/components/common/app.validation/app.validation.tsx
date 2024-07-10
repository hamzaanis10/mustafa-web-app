import { z } from 'zod';
 
export const nicknameSchema = z.string().min(4, {
  message: "Nickname must be atleast 4 characters long",
});
 
export const FullNameSchema = z.object({
  firstName: z.string().min(1, 'First name cannot be empty').min(3, 'First name must be at least 3 characters'),
  lastName: z.string().min(1, 'Last name cannot be empty').min(3, 'Last name must be at least 3 characters')
});
 
export const emailSchema = z.string().email({
  message: "Invalid email format"
});
 
export const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])/, {
    message: "Password must be a combination of letters, numbers, and symbols",
  });
 
export const repeatPasswordSchema = z.object({
  password: passwordSchema,
  repeatPassword: z.string(),
}).refine((data) => data.password === data.repeatPassword, {
  message: "Passwords must match",
  path: ["repeatPassword"],
});