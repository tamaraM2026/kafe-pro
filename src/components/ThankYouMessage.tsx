import { Link } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useLang } from "@/hooks/use-translations";

interface ThankYouMessageProps {
  heading: string;
  body: string;
  downloadUrl?: string;
  downloadLabel?: string;
}

export function ThankYouMessage({
  heading,
  body,
  downloadUrl,
  downloadLabel,
}: ThankYouMessageProps) {
  const lang = useLang();

  return (
    <section className="py-28 bg-cream">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Animate>
          <span className="text-5xl">&#10003;</span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">
            {heading}
          </h1>
          <p className="mt-4 text-lg text-foreground/75 leading-relaxed">{body}</p>
          {downloadUrl && (
            <a
              href={downloadUrl}
              download
              className="mt-8 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-terracotta to-terracotta/80 text-primary-foreground font-medium hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {downloadLabel ?? "Download the guide now"}
            </a>
          )}
          <Link
            to={"/$lang"}
            params={{ lang }}
            className="mt-8 block text-burgundy hover:text-terracotta transition-colors underline underline-offset-4"
          >
            Back to the homepage
          </Link>
        </Animate>
      </div>
    </section>
  );
}
