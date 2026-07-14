import { Footer, Header } from "@/components";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div id="main-layout">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
