type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  highlight?: boolean;
};

const ICON_BASE = "h-5 w-5 stroke-trust-700";

const FEATURES: Feature[] = [
  {
    title: "Gestion des urgences",
    desc: "Création et suivi d'un dossier unique pour chaque urgence vitale. C'est le point de départ qui réunit tous les services autour du patient.",
    icon: (
      <svg className={ICON_BASE} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Coordination des soins",
    desc: "Prescriptions, examens et résultats regroupés dans un même parcours.",
    icon: (
      <svg className={ICON_BASE} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="M8 7l3 9M16 7l-3 9" />
      </svg>
    ),
  },
  {
    title: "Traçabilité des ressources",
    desc: "Chaque médicament et chaque examen sont reliés à une urgence réelle.",
    icon: (
      <svg className={ICON_BASE} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l9-5 9 5-9 5-9-5z" />
        <path d="M3 12l9 5 9-5M3 17l9 5 9-5" />
      </svg>
    ),
  },
  {
    title: "Facturation simplifiée",
    desc: "Génération automatique d'un récapitulatif des soins réalisés à la clôture des soins, jamais avant.",
    icon: (
      <svg className={ICON_BASE} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    title: "Pilotage national",
    desc: "Indicateurs consolidés pour les autorités sanitaires.",
    highlight: true,
    icon: (
      <svg className={ICON_BASE} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l5-5 4 4 8-8M21 8h-5v5" />
      </svg>
    ),
  },
];

export function Solution() {
  return (
    <section id="solution" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-container">
        <div className="reveal text-center">
          <span className="eyebrow">La solution</span>
          <h2 className="heading-2 mt-4 mx-auto max-w-3xl">Une plateforme unique pour coordonner l'urgence</h2>
        </div>

        <div className="reveal mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-shadow hover:shadow-soft ${
                f.highlight ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-trust-50">
                {f.icon}
              </span>
              <h3 className="heading-3 mt-5">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href="mailto:contact@urgencecare.bj?subject=Demande%20de%20démonstration"
            className="inline-block rounded-full bg-primary-600 px-7 py-3.5 font-heading text-[15px] font-bold text-white shadow-cta transition-shadow hover:shadow-cta-hover"
          >
            Demander une démonstration
          </a>
        </div>
      </div>
    </section>
  );
}
