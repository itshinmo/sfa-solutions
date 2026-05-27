import { motion } from "framer-motion";
import { useEffect, useRef, useState, type JSX } from "react";

import { CountUp } from "@/components/helpers";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/utils";

type ResearchCardProps = {
  title: JSX.Element;
  description: string;
  delay?: number;
};

const ResearchCard = (props: ResearchCardProps) => {
  const { description, title, delay = 0 } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{
        once: true, // animate only first time
        amount: 0.35,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: "easeOut",
      }}
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

export const ResearchSection = (props: ResearchSectionProps) => {
  const { className } = props;

  const sectionRef = useRef<HTMLElement | null>(null);
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setStartCounters(true);
          observer.disconnect(); // keep mounted forever
        }
      },
      {
        threshold: 0.35,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "desktopContainer flex w-full flex-col items-center",
        className,
      )}
    >
      <h2 className="h1 mb-12">Research Results</h2>

      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
        <ResearchCard
          delay={0}
          title={
            <span>
              {startCounters && (
                <CountUp
                  value={2000}
                  speed={750}
                />
              )}
              <span> m</span>
              <sup>3</sup>
            </span>
          }
          description="Water saved per hectare"
        />

        <ResearchCard
          delay={0.1}
          title={
            <>
              {startCounters && (
                <CountUp
                  value={28}
                  speed={10}
                />
              )}
              <span> %</span>
            </>
          }
          description="Reduction in water use"
        />

        <ResearchCard
          delay={0.2}
          title={
            <>
              {startCounters && (
                <CountUp
                  value={4}
                  speed={5}
                />
              )}
              <span> x</span>
            </>
          }
          description="Increase in water productivity"
        />

        <ResearchCard
          delay={0.3}
          title={
            <>
              {startCounters && (
                <CountUp
                  value={246}
                  speed={100}
                />
              )}
            </>
          }
          description="Supported crop species"
        />
      </div>
    </section>
  );
};
