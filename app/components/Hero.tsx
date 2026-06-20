"use client";

export function Hero() {
  return (
    <section id="top" className="px-3 pt-3 pb-2 md:px-6 md:pt-6">
      <div
        className="relative overflow-hidden rounded-hero text-center"
        style={{
          background:
            "linear-gradient(135deg, #1E3A8A 0%, #2563EB 45%, #E23936 100%)",
        }}
      >
        <div className="px-6 py-20 md:px-12 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-heading text-[12px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            ⚡ Prise en charge des urgences vitales
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl font-heading font-extrabold tracking-tight text-white" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.08 }}>
            Aucune urgence vitale ne devrait attendre.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
            UrgenceCare est une plateforme conçue pour permettre la prise en charge immédiate des urgences vitales, tout en assurant la coordination des soins, la traçabilité des ressources utilisées et le pilotage national du dispositif.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contact@urgencecare.bj?subject=Demande%20de%20démonstration"
              className="rounded-full bg-white px-7 py-3.5 font-heading text-[15px] font-bold text-gray-900 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Demander une démonstration
            </a>
            <a
              href="#solution"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full border border-white/30 px-7 py-3.5 font-heading text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Découvrir la plateforme
            </a>
          </div>

          {/* Pulse SVG line */}
          <svg className="mx-auto mt-14 h-12 w-full max-w-3xl opacity-90" viewBox="0 0 800 60" fill="none" preserveAspectRatio="xMidYMid meet">
            <path
              d="M0 30 L180 30 L210 30 L230 12 L250 48 L270 18 L290 30 L420 30 L440 8 L460 52 L480 22 L500 30 L640 30 L660 18 L680 42 L700 30 L800 30"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
