const TEAM = [
  {
    initials: "OT",
    name: "OGOU Fifamè Thaumaturge",
    role: "Cofondatrice — UX Designer",
    bio: "Certifiée Google UX Design Professional Certificate. Global Ambassador du programme 10x1000 Tech for Inclusion (International Finance Corporation & Ant Group). Lauréate du concours mondial Global Challenger 2025, catégorie Innovation, pour UrgenceCare, distinction qui lui a valu une participation à l'Inclusion Conference on the Bund à Shanghai.",
  },
  {
    initials: "SA",
    name: "Dr Sètondji ATCHGBA",
    role: "Cofondateur — Médecin",
    bio: "Médecin formé au Bénin, inscrit à l'Ordre des Médecins du Bénin, avec une expérience de terrain dans les services d'urgence en France.",
  },
];

export function Team() {
  return (
    <section id="equipe" className="bg-gray-50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-container">
        <div className="reveal text-center">
          <span className="eyebrow">L'équipe</span>
          <h2 className="heading-2 mt-4 mx-auto max-w-3xl">Une expertise tech et clinique, du terrain béninois</h2>
        </div>

        <div className="reveal mt-14 grid gap-6 lg:grid-cols-2">
          {TEAM.map((m) => (
            <div key={m.name} className="rounded-2xl border border-gray-200 bg-white p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 font-heading text-[15px] font-bold text-primary-700">
                {m.initials}
              </span>
              <h3 className="heading-3 mt-5">{m.name}</h3>
              <p className="mt-1 font-heading text-[13px] font-bold uppercase tracking-wider text-trust-700">
                {m.role}
              </p>
              <p className="mt-5 text-[14.5px] leading-relaxed text-gray-600">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
