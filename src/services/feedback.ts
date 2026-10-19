export type FeedbackCategory = "website" | "app" | "payment";

export type FeedbackInput = {
  category: FeedbackCategory;
  title: string;
  content: string;
  image?: File | null;
};

export type FeedbackSubmitResult = {
  ok: true;
  mocked: boolean;
};

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

/**
 * The backend lives in a separate repository. Set `VITE_FEEDBACK_ENDPOINT`
 * (or `VITE_API_BASE_URL`) to point at it. When no endpoint is configured the
 * request is simulated so the form remains usable during local development.
 */
const feedbackEndpoint =
  import.meta.env.VITE_FEEDBACK_ENDPOINT ??
  (apiBaseUrl ? `${apiBaseUrl}/feedback` : "");

const MOCK_REQUEST_DELAY_MS = 600;

const wait = (milliseconds: number) =>
  new Promise<void>(resolve => {
    setTimeout(resolve, milliseconds);
  });

export const submitFeedback = async (
  input: FeedbackInput,
): Promise<FeedbackSubmitResult> => {
  const formData = new FormData();

  formData.append("category", input.category);
  formData.append("title", input.title);
  formData.append("content", input.content);

  if (input.image) {
    formData.append("image", input.image);
  }

  if (!feedbackEndpoint) {
    await wait(MOCK_REQUEST_DELAY_MS);

    return { ok: true, mocked: true };
  }

  const response = await fetch(feedbackEndpoint, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Feedback submission failed (${response.status}).`);
  }

  return { ok: true, mocked: false };
};
