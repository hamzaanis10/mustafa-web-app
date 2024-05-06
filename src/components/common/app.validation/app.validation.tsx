import { z } from 'zod';

export const nicknameSchema = z.string().min(4, {
  message: "Nickname must be atleast 4 characters long",
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