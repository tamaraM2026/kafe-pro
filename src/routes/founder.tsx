import { createFileRoute } from "@tanstack/react-router";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder — Kafe con Propósito" },
      { name: "description", content: "Meet Tamara Medina Sapovalova, founder of Kafe con Propósito." },
    ],
  }),
  component: Founder,
});

function Founder() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-sage/15 rounded-[3rem] rotate-2" aria-hidden />
          <img src={founder} alt="Tamara Medina Sapovalova" width={800} height={1000} className="relative rounded-[2.5rem] shadow-2xl object-cover w-full" />
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] text-terracotta">FROM TAMARA</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-burgundy">Why I built this</h1>
          <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-lg">
            <p>I built Kafe con Propósito because I needed it myself. Not just a networking event. Not an online group. A real community — one that meets you where you are and grows with you.</p>
            <p>I've spent over 20 years in international business across Latin America and Europe. I know what it feels like to be the only woman in the room, to relocate and start over, to build something without a map. Kafe is the room I wish had existed.</p>
          </div>
          <p className="mt-8 font-display text-xl text-burgundy">— Tamara Medina Sapovalova, Founder</p>
        </div>
      </div>
    </section>
  );
}
