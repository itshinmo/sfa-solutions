import type { FEEDBACK_CATEGORY_VALUES } from "@/components/forms/feedback-schema";

/** Static sample data shown until the feedback API is wired up. */
export type FeedbackRecord = {
  id: string;
  title: string;
  category: (typeof FEEDBACK_CATEGORY_VALUES)[number];
  status: "open" | "resolved";
  submittedAt: string;
};

export const SAMPLE_FEEDBACK: readonly FeedbackRecord[] = [
  {
    id: "1",
    title: "Login button is not aligned on mobile",
    category: "website",
    status: "open",
    submittedAt: "2026-09-18",
  },
  {
    id: "2",
    title: "Irrigation schedule resets after refresh",
    category: "app",
    status: "open",
    submittedAt: "2026-09-21",
  },
  {
    id: "3",
    title: "Payment receipt was not sent",
    category: "payment",
    status: "resolved",
    submittedAt: "2026-09-24",
  },
  {
    id: "4",
    title: "Add dark mode to the dashboard",
    category: "app",
    status: "open",
    submittedAt: "2026-09-30",
  },
];
