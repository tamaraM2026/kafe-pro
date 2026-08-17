import { createFileRoute } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import founder from "@/assets/founder.jpg";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/web3forms";

export const Route = createFileRoute("/es/10x-unstuck")({
  head: () => ({
    meta: [
      {
        title: "10 Días, 10 Acciones, 10x Desbloqueada — Kafe con Propósito",
      },
      {
        name: "description",
        content:
          "Una guía gratuita de autocoaching de 10 días con ejercicios diarios, reflexiones y acciones para ayudarte a salir del estancamiento.",
      },
      {
        property: "og:title",
        content: "10 Días, 10 Acciones, 10x Desbloqueada — Kafe con Propósito",
      },
      {
        property: "og:description",
        content:
          "Una guía gratuita de autocoaching de 10 días con ejercicios diarios, reflexiones y acciones para ayudarte a salir del estancamiento.",
      },
    ],
    links: [
      { rel: "alternate", hreflang: "en", href: "/en/10x-unstuck" },
      { rel: "alternate", hreflang: "es", href: "/es/10x-unstuck" },
      { rel: "alternate", hreflang: "x-default", href: "/en/10x-unstuck" },
    ],
  }),
  component: TenxPageEs,
});

const days = [
  "El secreto del éxito: tu actitud",
  "¿Qué te mueve realmente? Tus valores",
  "Convertir tus sueños en realidad",
  "Lo que dice tu voz interior",
  "El tiempo: ¿quién tiene el control?",
  "¿Eres la persona que quieres ser?",
  "Hacia dónde te llevan tus decisiones diarias",
  "Elegir bien tus influencias",
  "Responsabilidad y toma de decisiones",
  "Cuidar de ti misma: la base de todo",
];

const forYouItems = [
  "Sabes que algo tiene que cambiar, pero no sabes por dónde empezar",
  "Te sientes ocupada todo el tiempo pero no realmente productiva",
  "Estás en transición, de carrera, de lugar, de identidad, y quieres claridad",
  "Has empezado cosas antes y no las has terminado, y estás lista para intentarlo de otra manera",
  "Quieres acciones diarias prácticas, no solo teoría",
];

function TenxPageEs() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium">
              GUÍA GRATUITA
            </p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05]">
              <span className="bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">
                10 días. 10 acciones.
              </span>
              <br />
              <span className="bg-gradient-to-r from-terracotta to-burgundy bg-clip-text text-transparent">
                10x Desbloqueada.
              </span>
            </h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-xl text-foreground/75 leading-relaxed">
              Una guía de 10 días para salir de donde estás atascada.
            </p>
          </Animate>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Animate>
            <blockquote className="border-l-4 border-gradient-to-b from-burgundy to-terracotta pl-8 py-4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-burgundy to-terracotta rounded-full" />
              <p className="font-display text-2xl md:text-3xl italic text-foreground/85 leading-relaxed">
                "El cambio lleva tiempo. Pero si haces un poco cada día, esas
                pequeñas acciones forman nuevos hábitos. Sin darte cuenta, tu
                vida cambia."
              </p>
            </blockquote>
          </Animate>
        </div>
      </section>

      {/* Days grid */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">
              TU RECORRIDO DE 10 DÍAS
            </p>
          </Animate>
          <div className="mt-14 grid md:grid-cols-2 gap-4">
            {days.map((day, i) => (
              <Animate key={i} delay={(i % 2 * 100) as 0 | 100}>
                <div className="flex gap-5 items-start bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                  <span className="shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-terracotta to-terracotta/70 text-primary-foreground flex items-center justify-center font-display text-lg">
                    {i + 1}
                  </span>
                  <p className="text-foreground/85 leading-relaxed pt-1.5">
                    {day}
                  </p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* For you */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">
              ¿ES ESTO PARA TI?
            </p>
          </Animate>
          <ul className="mt-12 space-y-4">
            {forYouItems.map((item, i) => (
              <Animate key={i} delay={(i * 100) as 0 | 100 | 200 | 300 | 400}>
                <li className="flex gap-4 items-start">
                  <span className="shrink-0 mt-1 h-6 w-6 rounded-full bg-sage/30 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sage"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <p className="text-lg text-foreground/85 leading-relaxed">
                    {item}
                  </p>
                </li>
              </Animate>
            ))}
          </ul>
        </div>
      </section>

      {/* Tamara block */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Animate>
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <img
                src={founder}
                alt="Tamara Medina Sapovalova"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shrink-0 border-4 border-white/60 shadow-md"
              />
              <div>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Escribí esta guía después de años acompañando a mujeres en
                  procesos de reinvención: cambios de carrera, mudanzas a otro
                  país, esos silenciosos momentos de "¿y ahora qué?" entre un
                  capítulo y el siguiente. Estos 10 días son la esencia de lo
                  que realmente funciona cuando dejas de esperar el momento
                  perfecto y empiezas a construir desde donde estás.
                </p>
                <p className="mt-4 font-display text-xl text-burgundy">
                  Tamara Medina Sapovalova
                </p>
                <p className="text-sm text-muted-foreground">
                  Fundadora, Kafe con Propósito
                </p>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Opt-in form */}
      <section className="py-28 bg-burgundy/95 backdrop-blur-xl text-primary-foreground">
        <div className="mx-auto max-w-xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl">
              Comienza tus{" "}
              <span className="bg-gradient-to-r from-terracotta to-terracotta/70 bg-clip-text text-transparent">
                10 días
              </span>
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Déjanos tus datos y recibe la guía directo en tu correo, gratis.
            </p>
          </Animate>
          <Animate delay={100}>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="mt-8 flex flex-col gap-3"
            >
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input
                type="hidden"
                name="subject"
                value="Kafe: 10x Productive guide signup (ES)"
              />
              <input type="hidden" name="from_name" value="Kafe con Propósito website" />
              <input
                type="hidden"
                name="redirect"
                value="https://kafeconproposito.com/es/guide-thank-you"
              />
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />
              <input
                type="text"
                name="name"
                required
                placeholder="Tu nombre"
                className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Tu correo"
                className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50"
              />
              <button
                type="submit"
                className="mt-2 w-full px-8 py-3 rounded-full bg-gradient-to-r from-terracotta to-terracotta/80 text-primary-foreground font-medium hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Envíame la guía →
              </button>
              <p className="mt-2 text-xs text-primary-foreground/60">
                Sin spam. Cancela cuando quieras.
              </p>
            </form>
          </Animate>
        </div>
      </section>
    </>
  );
}
