import { PageLoader } from "@/components/helpers";
import { Toaster } from "@/components/ui/toaster";
import { ROUTES } from "@/constants/routes";
import { MainLayout } from "@/layouts";
import { queryClient } from "@/lib/query-client";
import { HomePage } from "@/pages/HomePage";
import { QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

// Secondary routes are split into their own chunks. This keeps the initial
// bundle small (the blog articles, charts, and 404 animation are not needed on
// the home page).
const BlogsPage = lazy(async () => {
  const module = await import("@/pages/BlogsPage");

  return { default: module.BlogsPage };
});

const BlogPostPage = lazy(async () => {
  const module = await import("@/pages/BlogsPage");

  return { default: module.BlogPostPage };
});

const FeedbackPage = lazy(async () => {
  const module = await import("@/pages/FeedbackPage");

  return { default: module.FeedbackPage };
});

const AdminDashboardPage = lazy(async () => {
  const module = await import("@/pages/AdminDashboardPage");

  return { default: module.AdminDashboardPage };
});

const NotFoundPage = lazy(async () => {
  const module = await import("@/pages/NotFoundPage");

  return { default: module.NotFoundPage };
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />

      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route
                index
                element={<HomePage />}
              />

              <Route path={ROUTES.BLOGS}>
                <Route
                  index
                  element={<BlogsPage />}
                />

                <Route
                  path=":blogId"
                  element={<BlogPostPage />}
                />
              </Route>

              <Route
                path={ROUTES.FEEDBACK}
                element={<FeedbackPage />}
              />

              <Route
                path={ROUTES.ADMIN_DASHBOARD}
                element={<AdminDashboardPage />}
              />
            </Route>

            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
