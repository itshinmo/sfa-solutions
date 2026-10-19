import { Footer, Header } from "@/components";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div
      id="main-layout"
      className="flex min-h-svh flex-col"
    >
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
