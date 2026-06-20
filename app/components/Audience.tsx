const AUDIENCES = [
  {
    label: "État",
    desc: "Piloter et évaluer les dispositifs nationaux de prise en charge.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V10l7-5 7 5v11M10 21v-6h4v6" />
      </svg>
    ),
  },
  {
    label: "Hôpitaux",
    desc: "Coordonner les urgences et fluidifier les opérations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="17" rx="2" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    label: "Professionnels de santé",
    desc: "Accéder rapidement aux informations nécessaires à la prise en charge.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
  },
  {
    label: "Patients",
    desc: "Bénéficier d'une prise en charge plus rapide et mieux suivie.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export function Audience() {
  return (
    <section id="pour-qui" className="bg-gray-50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-container">
        <div className="reveal text-center">
          <span className="eyebrow">Pour qui ?</span>
          <h2 className="heading-2 mt-4 mx-auto max-w-3xl">Conçu pour tout l'écosystème de soin</h2>
        </div>

        <div className="reveal mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a) => (
            <div key={a.label} className="rounded-2xl bg-white p-7 text-left">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <span className="block h-5 w-5">{a.icon}</span>
              </span>
              <h3 className="heading-3 mt-5">{a.label}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-600">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
