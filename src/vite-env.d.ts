/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Base URL of the backend, e.g. `https://api.example.com/api`.
   * When set, feedback is posted to `${VITE_API_BASE_URL}/feedback`.
   */
  readonly VITE_API_BASE_URL?: string;

  /**
   * Full feedback endpoint URL. Overrides `VITE_API_BASE_URL`.
   */
  readonly VITE_FEEDBACK_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
