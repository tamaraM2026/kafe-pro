import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

export function useCountUp(target: string, duration = 1200) {
  const { ref, visible } = useInView();
  const numericPart = parseInt(target.replace(/\D/g, ""), 10) || 0;
  const suffix = target.replace(/[\d]/g, "");
  const prefix = target.match(/^[^\d]*/)?.[0] ?? "";
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!visible || numericPart === 0) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numericPart * eased);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, numericPart, suffix, prefix, duration]);

  return { ref, display };
}
