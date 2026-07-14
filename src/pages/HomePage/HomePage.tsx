import {
  AchievementSection,
  HeroSection,
  ResearchSection,
  SfaSection,
  TeamSection,
} from "./components";

export const HomePage = () => {
  return (
    <main className="behind-header flex w-full flex-col">
      <div className="primary-gradient relative flex flex-col">
        <HeroSection />

        <SfaSection className="py-28" />

        <ResearchSection className="bg-background py-28" />

        <AchievementSection className="py-28" />

        <TeamSection className="bg-background py-28" />
      </div>
    </main>
  );
};
