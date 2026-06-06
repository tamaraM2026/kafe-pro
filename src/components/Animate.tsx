import { useInView } from "@/hooks/use-in-view";

interface AnimateProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Animate({ children, delay, className = "" }: AnimateProps) {
  const { ref, visible } = useInView();
  const delayClass = delay ? `delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`animate-in ${delayClass} ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
