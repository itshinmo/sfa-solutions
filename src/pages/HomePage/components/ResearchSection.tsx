import { motion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { CountUp } from "@/components/helpers";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/utils";
import { useTranslation } from "react-i18next";

type ResearchCardProps = {
  title: ReactNode;
  description: string;
  delay?: number;
};

const ResearchCard = (props: ResearchCardProps) => {
  const { description, title, delay = 0 } = props;

  return (
    <motion.div
      dir="ltr"
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, delay, ease: "easeOut" }}
    >
      <Card className="h-32 w-52">
        <CardContent className="flex h-full w-full flex-col items-center text-center">
          <h5 className="h2 text-primary mt-2 mb-2">{title}</h5>

          <p className="text-description">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

type ResearchSectionProps = {
  className?: string;
};

const STATS = [
  {
    value: 2000,
    speed: 750,
    suffix: (
      <>
        <span> m</span>
        <sup>3</sup>
      </>
    ),
    descriptionKey: "saved-desc",
  },
  {
    value: 28,
    speed: 10,
    suffix: <span> %</span>,
    descriptionKey: "reduced-desc",
  },
  {
    value: 4,
    speed: 5,
    suffix: <span> x</span>,
    descriptionKey: "increase-desc",
  },
  {
    value: 246,
    speed: 100,
    suffix: null,
    descriptionKey: "support-desc",
  },
] as const;

export const ResearchSection = (props: ResearchSectionProps) => {
  const { className } = props;

  const sectionRef = useRef<HTMLElement | null>(null);
  const [startCounters, setStartCounters] = useState(false);

  const { t } = useTranslation(["common", "research-section"]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];

        if (entry?.isIntersecting) {
          setStartCounters(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "maincontainer flex w-full flex-col items-center",
        className,
      )}
    >
      <h2 className="h1 mb-12">{t("research-section:results")}</h2>

      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
        {STATS.map((stat, index) => (
          <ResearchCard
            key={stat.descriptionKey}
            delay={index * 0.1}
            title={
              <>
                {startCounters && (
                  <CountUp
                    value={stat.value}
                    speed={stat.speed}
                  />
                )}
                {stat.suffix}
              </>
            }
            description={t(`research-section:${stat.descriptionKey}`)}
          />
        ))}
      </div>
    </section>
  );
};
