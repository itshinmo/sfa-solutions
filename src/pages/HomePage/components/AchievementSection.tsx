import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/utils";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

type AchievementCardProps = {
  idx: string;
  title: string;
  description: string;
  delay?: number;
};

const AchievementCard = (props: AchievementCardProps) => {
  const { description, title, idx, delay = 0 } = props;

  return (
    <motion.div
      className="w-full max-w-[28rem]"
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, delay, ease: "easeOut" }}
    >
      <Card className="w-full">
        <CardContent className="flex flex-row gap-x-3">
          <div className="flex aspect-square size-8 shrink-0 items-center justify-center">
            <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full font-black">
              {idx}
            </span>
          </div>

          <div className="flex flex-col">
            <h5 className="h4 mb-2">{title}</h5>

            <p>{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

type AchievementSectionProps = {
  className?: string;
};

const ACHIEVEMENTS = [
  { idx: "I", titleKey: "1title", descriptionKey: "1description" },
  { idx: "II", titleKey: "2title", descriptionKey: "2description" },
  { idx: "III", titleKey: "3title", descriptionKey: "3description" },
  { idx: "IV", titleKey: "4title", descriptionKey: "4description" },
] as const;

export const AchievementSection = (props: AchievementSectionProps) => {
  const { className } = props;

  const { t } = useTranslation(["common", "achievement-section"]);

  return (
    <section
      className={cn(
        "maincontainer flex w-full flex-col items-center",
        className,
      )}
    >
      <h2 className="h1 mb-12">{t("achievements")}</h2>

      <div className="flex max-w-6xl flex-row flex-wrap items-center justify-center gap-4">
        {ACHIEVEMENTS.map((achievement, index) => (
          <AchievementCard
            key={achievement.idx}
            idx={achievement.idx}
            delay={index * 0.1}
            description={t(`achievement-section:${achievement.descriptionKey}`)}
            title={t(`achievement-section:${achievement.titleKey}`)}
          />
        ))}
      </div>
    </section>
  );
};
