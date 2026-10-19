import type { TFunction } from "i18next";
import { z } from "zod";

export const FEEDBACK_CATEGORY_VALUES = ["website", "app", "payment"] as const;

export const MAX_FEEDBACK_IMAGE_SIZE = 5 * 1024 * 1024;
export const MIN_FEEDBACK_FIELD_LENGTH = 3;

export const createFeedbackSchema = (t: TFunction<"feedback">) =>
  z.object({
    category: z.enum(FEEDBACK_CATEGORY_VALUES, {
      error: t("required"),
    }),
    title: z
      .string()
      .trim()
      .min(MIN_FEEDBACK_FIELD_LENGTH, {
        error: t("min-length", { count: MIN_FEEDBACK_FIELD_LENGTH }),
      }),
    content: z
      .string()
      .trim()
      .min(MIN_FEEDBACK_FIELD_LENGTH, {
        error: t("min-length", { count: MIN_FEEDBACK_FIELD_LENGTH }),
      }),
    img: z
      .instanceof(File)
      .refine(file => file.size <= MAX_FEEDBACK_IMAGE_SIZE, {
        error: t("image-too-large"),
      })
      .optional()
      .nullable(),
  });

export type FeedbackFormValues = z.infer<
  ReturnType<typeof createFeedbackSchema>
>;
