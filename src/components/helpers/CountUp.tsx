import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  speed?: number; // units per second
  decimals?: number;
  className?: string;
};

export const CountUp = ({
  value,
  speed = 100,
  decimals = 0,
  className,
}: CountUpProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;

    const duration = Math.abs(value / speed) * 1000;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const current = value * progress;

      setDisplayValue(current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayValue(0);

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, speed]);

  return <span className={className}>{displayValue.toFixed(decimals)}</span>;
};
