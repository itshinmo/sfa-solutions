import { Footer, Header } from "@/components";
import {
  HeroSection,
  ResearchSection,
  SfaSection,
  TeamSection,
} from "./components";

export const HomePage = () => {
  return (
    <div className="primary-gradient relative flex flex-col">
      <Header />

      <main className="flex w-full flex-col">
        <HeroSection />

        <SfaSection className="py-28" />

        <ResearchSection className="bg-background py-28" />

        <TeamSection className="py-28" />
      </main>

      <Footer />
    </div>
  );
};
