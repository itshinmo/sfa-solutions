import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/utils";
import { motion } from "motion/react";
import type { JSX } from "react";
import { FaTractor } from "react-icons/fa";
import { FaDroplet, FaEarthAsia } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";

type SfaCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  delay?: number;
};

const SfaCard = (props: SfaCardProps) => {
  const { description, icon, title, delay = 0 } = props;

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
      <Card className="h-60 w-64">
        <CardContent className="flex h-full flex-col items-center text-center">
          <div>{icon}</div>

          <h5 className="h4 mt-4 mb-2">{title}</h5>

          <p className="text-description">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

type SfaSectionProps = {
  className?: string;
};

export const SfaSection = (props: SfaSectionProps) => {
  const { className } = props;

  return (
    <section
      className={cn(
        "maincontainer flex w-full flex-col items-center",
        className,
      )}
    >
      <h2 className="h1 mb-4">Smart Farm Aqua (SFA)</h2>

      <p className="p text-description mb-8 text-center">
        AI-powered irrigation optimization system designed for arid and
        semi-arid agriculture.
      </p>

      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
        <SfaCard
          icon={<FaDroplet className="fill-primary size-12" />}
          title="Water Optimization"
          description="SFA determines the optimal irrigation schedule for crops and orchards using advanced yield production functions and mathematical optimization."
        />

        <SfaCard
          icon={<LuBrainCircuit className="stroke-primary size-12" />}
          title="AI Assistant"
          description="Farmers can ask questions in natural language. The system retrieves information from agricultural databases and generates expert advice using AI."
        />

        <SfaCard
          icon={<FaTractor className="fill-primary size-12" />}
          title="Multi-Crop Support"
          description="The model supports 246 crop and orchard species and adapts irrigation schedules according to crop growth stages and water stress sensitivity."
        />

        <SfaCard
          icon={<FaEarthAsia className="fill-primary size-12" />}
          title="Global Applicability"
          description="Designed for arid and semi-arid regions worldwide and compatible with national agricultural datasets and water management systems."
        />
      </div>
    </section>
  );
};
