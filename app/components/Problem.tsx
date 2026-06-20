const SERVICES = [
  { label: "Urgences",       x: "20%", y: "20%" },
  { label: "Pharmacie",      x: "65%", y: "12%" },
  { label: "Imagerie",       x: "10%", y: "55%" },
  { label: "Biologie",       x: "55%", y: "50%" },
  { label: "Administration", x: "32%", y: "82%" },
];

export function Problem() {
  return (
    <section id="probleme" className="bg-gray-50 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-container items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <span className="eyebrow">Le problème</span>
          <h2 className="heading-2 mt-4">Quand chaque minute compte</h2>
          <p className="body-lg mt-6 max-w-xl">
            Aujourd'hui, la prise en charge d'une urgence implique souvent plusieurs services : urgences, pharmacie, imagerie, biologie, administration. Ces acteurs travaillent avec des informations dispersées, ce qui complique le suivi des soins, la traçabilité des ressources et le pilotage global du système.
          </p>
        </div>

        <div className="reveal relative h-[340px] md:h-[400px]">
          {SERVICES.map((s) => (
            <span
              key={s.label}
              className="absolute inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-[13px] font-medium text-gray-700 shadow-soft"
              style={{ left: s.x, top: s.y }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
