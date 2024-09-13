import * as z from "zod";

const loginValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is invalid!" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" }),
});

const registerValidationSchema = z
  .object({
    surName: z
      .string({ required_error: "Surname is required" })
      .min(1, { message: "Surname must be at least 1 character long" }),
    firstName: z
      .string({ required_error: "First name is required" })
      .min(1, { message: "First name must be at least 1 character long" }),
    middleName: z.string().optional(), // Optional
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Email is invalid!" }),
    mobileNumber: z
      .string({ required_error: "Mobile phone number is required" })
      .min(10, { message: "Mobile number must be at least 10 digits long" })
      .regex(/^\+[1-9]\d{1,14}$/, {
        message: "Invalid phone number, include country code",
      }),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Minimum 8 characters with a combination of capital letters, small letters, numbers and special characters",
        },
      ),
    confirmPassword: z.string({
      required_error: "Confirm password is required",
    }),
    // .min(8, {
    //   message: "Confirmation password must be at least 8 characters long",
    // })
    // .regex(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   {
    //     message:
    //       "Password must contain one uppercase, one lowercase, one number, and one special character",
    //   },
    // ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const authValidationSchema = {
  loginValidationSchema,
  registerValidationSchema,
};
