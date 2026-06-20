export function CtaFinal() {
  return (
    <section className="px-6 pb-16 pt-8">
      <div className="reveal mx-auto max-w-container">
        <div className="rounded-hero bg-primary-700 px-6 py-24 text-center md:px-12">
          <h2 className="mx-auto max-w-3xl font-heading font-extrabold tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.1 }}>
            Aucune urgence vitale ne devrait attendre.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white/90">
            Discutons de la mise en place d'UrgenceCare dans votre établissement ou votre territoire.
          </p>
          <a
            href="mailto:contact@urgencecare.bj?subject=Demande%20de%20démonstration"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-heading text-[15px] font-bold text-gray-900 shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Demander une démonstration
          </a>
        </div>
      </div>
    </section>
  );
}
