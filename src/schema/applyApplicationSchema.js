import * as z from "zod";

const applyApplicationFormSchema = z.object({
  // personal info form
  dateOfBirth: z
    .string()
    .regex(/^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(19|20)\d\d$/, {
      message: "Invalid date format. Use MM-DD-YYYY.",
    })
    .refine(
      (dateStr) => {
        const today = new Date();
        const birthDate = new Date(dateStr);
        return birthDate < today;
      },
      { message: "Date of birth must be in the past." },
    ),

  homeAddress: z
    .string()
    .min(5, { message: "Home address must be at least 5 characters long." }),

  citizenship: z
    .string()
    .min(1, { message: "Citizenship is required." })
    .refine((val) => ["Pakistan"].includes(val), {
      message: "Invalid citizenship.",
    }),

  // current qualification form
  undergraduate: z.object({
    degree: z.string().min(1, { message: "Degree is required" }),
    discipline: z.string().min(1, { message: "Discipline is required" }),
    university: z.string().min(1, { message: "University is required" }),
    commenced: z.preprocess(
      (val) => (val ? new Date(val) : undefined),
      z.date({ invalid_type_error: "Invalid date for commencement" }),
    ),
    completed: z.preprocess(
      (val) => (val ? new Date(val) : undefined),
      z.date({ invalid_type_error: "Invalid date for completion" }),
    ),
    marks: z.coerce
      .number()
      .min(0, "Marks cannot be less than 0")
      .max(100, "Marks cannot be more than 100"),
    gpa: z.coerce
      .number()
      .min(0, "GPA cannot be less than 0")
      .max(4, "GPA cannot be more than 4"),
  }),

  postgraduate1: z.object({
    degree: z.string().optional(),
    discipline: z.string().optional(),
    university: z.string().optional(),
    commenced: z.preprocess(
      (val) => (val ? new Date(val) : undefined),
      z
        .date()
        .optional()
        .refine((val) => !val || !isNaN(val.getTime()), {
          message: "Invalid commencement date.",
        }),
    ),
    completed: z.preprocess(
      (val) => (val ? new Date(val) : undefined),
      z
        .date()
        .optional()
        .refine((val) => !val || !isNaN(val.getTime()), {
          message: "Invalid completion date.",
        }),
    ),
    marks: z.coerce
      .number()
      .min(0, "Marks cannot be less than 0")
      .max(100, "Marks cannot be more than 100")
      .optional(),
    gpa: z.coerce
      .number()
      .min(0, "GPA cannot be less than 0")
      .max(4, "GPA cannot be more than 4")
      .optional(),
  }),

  postgraduate2: z.object({
    degree: z.string().optional(),
    discipline: z.string().optional(),
    university: z.string().optional(),
    commenced: z.preprocess(
      (val) => (val ? new Date(val) : undefined),
      z
        .date()
        .optional()
        .refine((val) => !val || !isNaN(val.getTime()), {
          message: "Invalid commencement date.",
        }),
    ),
    completed: z.preprocess(
      (val) => (val ? new Date(val) : undefined),
      z
        .date()
        .optional()
        .refine((val) => !val || !isNaN(val.getTime()), {
          message: "Invalid completion date.",
        }),
    ),
    marks: z.coerce
      .number()
      .min(0, "Marks cannot be less than 0")
      .max(100, "Marks cannot be more than 100")
      .optional(),
    gpa: z.coerce
      .number()
      .min(0, "GPA cannot be less than 0")
      .max(4, "GPA cannot be more than 4")
      .optional(),
  }),

  // english proficiency form
  englishTest: z.enum(["IELTS", "PTE"], {
    message: "Test must be either IELTS or PTE",
  }), // Restrict to either IELTS or PTE
  englishTestDate: z.preprocess(
    (val) => (val ? new Date(val) : undefined),
    z
      .date()
      .optional()
      .refine((val) => !val || !isNaN(val.getTime()), {
        message: "Invalid completion date.",
      }),
  ),
  englishTestResult: z.object({
    overall: z.coerce
      .number()
      .min(0, "Overall score cannot be less than 0")
      .max(9, "Overall score cannot be more than 9"),
    listening: z.coerce
      .number()
      .min(0, "Listening score cannot be less than 0")
      .max(9, "Listening score cannot be more than 9"),
    reading: z.coerce
      .number()
      .min(0, "Reading score cannot be less than 0")
      .max(9, "Reading score cannot be more than 9"),
    speaking: z.coerce
      .number()
      .min(0, "Speaking score cannot be less than 0")
      .max(9, "Speaking score cannot be more than 9"),
    writing: z.coerce
      .number()
      .min(0, "Writing score cannot be less than 0")
      .max(9, "Writing score cannot be more than 9"),
  }),

  // Intended studies form schema
  intendedStudiesOption1: z.object({
    degree: z.string().min(1, { message: "Degree is required." }),
    discipline: z.string().min(1, { message: "Discipline/Area is required." }),
    university: z.string().min(1, { message: "University is required." }),
    plannedStart: z.preprocess(
      (val) => (val ? new Date(val) : undefined),
      z.date({ invalid_type_error: "Invalid date for planned start" }),
    ),
    duration: z.preprocess(
      (val) => (val ? new Date(val) : undefined),
      z
        .date()
        .optional()
        .refine((val) => !val || !isNaN(val.getTime()), {
          message: "Invalid date for planned start.",
        }),
    ),
    tuitionFee: z.coerce
      .number()
      .min(0, { message: "Tuition fee must be at least 0." }),
    alreadyApplied: z.boolean({
      message: "Please select Yes or No for 'Already Applied'.",
    }),
    admissionGranted: z.boolean({
      message: "Please select Yes or No for 'Already Applied'.",
    }),
    australianVisaApplied: z.boolean({
      message: "Please select Yes or No for 'Already Applied'.",
    }),
    australianVisaGranted: z.boolean({
      message: "Please select Yes or No for 'Already Applied'.",
    }),
  }),

  intendedStudiesOption2: z.object({
    degree: z.string().optional(),
    discipline: z.string().optional(),
    university: z.string().optional(),
    plannedStart: z.preprocess(
      (val) => (val ? new Date(val) : undefined),
      z
        .date()
        .optional()
        .refine((val) => !val || !isNaN(val.getTime()), {
          message: "Invalid date for planned start.",
        }),
    ),
    duration: z
      .preprocess(
        (val) => (val ? new Date(val) : undefined),
        z
          .date()
          .optional()
          .refine((val) => !val || !isNaN(val.getTime()), {
            message: "Invalid date for planned start.",
          }),
      )
      .optional(),
    tuitionFee: z.coerce
      .number()
      .min(0, { message: "Tuition fee must be at least 0." })
      .optional(),
    alreadyApplied: z.boolean().optional(),
    admissionGranted: z.boolean().optional(),
    australianVisaApplied: z.boolean().optional(),
    australianVisaGranted: z.boolean().optional(),
  }),

  intendedStudiesOption3: z.object({
    degree: z.string().optional(),
    discipline: z.string().optional(),
    university: z.string().optional(),
    plannedStart: z.preprocess(
      (val) => (val ? new Date(val) : undefined),
      z
        .date()
        .optional()
        .refine((val) => !val || !isNaN(val.getTime()), {
          message: "Invalid date for planned start.",
        }),
    ),
    duration: z
      .preprocess(
        (val) => (val ? new Date(val) : undefined),
        z
          .date()
          .optional()
          .refine((val) => !val || !isNaN(val.getTime()), {
            message: "Invalid date for planned start.",
          }),
      )
      .optional(),
    tuitionFee: z.coerce
      .number()
      .min(0, { message: "Tuition fee must be at least 0." })
      .optional(),
    alreadyApplied: z.boolean().optional(),
    admissionGranted: z.boolean().optional(),
    australianVisaApplied: z.boolean().optional(),
    australianVisaGranted: z.boolean().optional(),
  }),
});

export const applyApplicationSchema = {
  applyApplicationFormSchema,
};
