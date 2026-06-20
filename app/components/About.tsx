export function About() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-container">
        <div className="reveal">
          <span className="eyebrow">À propos</span>
          <h2 className="heading-2 mt-4 max-w-3xl">Né d'un constat, devenu une mission</h2>
        </div>

        <div className="reveal mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="body-lg">
              Tout est parti d'un commentaire, lu en mars 2025 : celui d'une personne dont le père venait de mourir après un accident, parce que l'hôpital avait attendu le paiement avant de commencer les soins. Ce constat a donné naissance à UrgenceCare. En juin 2025, le projet a été formalisé et présenté pour la première fois au concours international Global Challenger.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
            <h3 className="heading-3">Un produit construit sur le terrain</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-700">
              Conçu en collaboration directe avec des agents de santé : médecins, pharmaciens, agents de caisse, techniciens d'imagerie et de biologie.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Médecins", "Pharmaciens", "Agents de caisse", "Techniciens imagerie", "Techniciens biologie"].map((t) => (
                <span key={t} className="rounded-full bg-white px-3 py-1.5 text-[12px] font-medium text-gray-700 ring-1 ring-gray-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
