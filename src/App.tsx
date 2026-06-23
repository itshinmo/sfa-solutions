import { Toaster } from "@/components/ui/toaster";
import BLOGS_DATA from "@/constants/blogs-data";
import { ROUTES } from "@/constants/routes";
import { MainLayout } from "@/layouts";
import { BlogsPage, HomePage, NotFoundPage } from "@/pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router";

const queryClient = new QueryClient();

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isRTL = i18n.language === "fa";

    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const setupBlogsRouting = () => {
    return BLOGS_DATA.map(blogData => {
      return (
        <Route
          path={`${ROUTES.BLOG}/${blogData.id}`}
          element={blogData.component}
        />
      );
    });
  };

  return (
    <>
      <Toaster />

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route
                element={<HomePage />}
                index
              />

              <Route
                path={ROUTES.BLOGS}
                element={<BlogsPage />}
              />

              <Route path={ROUTES.BLOG}>{setupBlogsRouting()}</Route>
            </Route>

            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
