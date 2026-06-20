const STEPS = [
  { n: 1, title: "Création de l'urgence",   desc: "Un dossier unique est ouvert dès l'arrivée du patient." },
  { n: 2, title: "Prise en charge médicale", desc: "L'équipe soignante intervient sans délai ni condition de paiement." },
  { n: 3, title: "Examens et traitements",   desc: "Prescriptions et résultats sont centralisés dans le même parcours." },
  { n: 4, title: "Clôture du dossier",       desc: "Le récapitulatif des soins est généré une fois le patient stabilisé." },
  { n: 5, title: "Suivi et pilotage",        desc: "Les indicateurs alimentent le pilotage national en temps réel." },
];

export function Steps() {
  return (
    <section id="comment" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-container">
        <div className="reveal text-center">
          <span className="eyebrow">Comment ça fonctionne</span>
          <h2 className="heading-2 mt-4 mx-auto max-w-3xl">Le parcours d'une urgence, du premier geste au pilotage</h2>
        </div>

        {/* Desktop: 5 cols, horizontal stepper */}
        <div className="reveal mt-20 hidden lg:block">
          <div className="relative grid grid-cols-5 gap-4">
            {/* connector line */}
            <div className="absolute left-[10%] right-[10%] top-7 h-px bg-gray-200" />
            {STEPS.map((s) => (
              <div key={s.n} className="relative flex flex-col items-center text-center">
                <span className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-trust-600 bg-white font-heading text-[18px] font-bold text-trust-700">
                  {s.n}
                </span>
                <h3 className="mt-5 font-heading text-[16px] font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stepper, number left, title+desc stacked right */}
        <div className="reveal mt-16 flex flex-col gap-8 lg:hidden">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative flex items-start gap-4">
              {i < STEPS.length - 1 && (
                <span className="absolute left-[27px] top-14 h-8 w-0.5 bg-gray-200" />
              )}
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-trust-600 bg-white font-heading text-[18px] font-bold text-trust-700">
                {s.n}
              </span>
              <div className="flex flex-col gap-1 pt-1">
                <h3 className="font-heading text-[17px] font-bold text-gray-900">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
