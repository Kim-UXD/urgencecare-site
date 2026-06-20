import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-10">
      <div className="mx-auto max-w-container">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-icon.png" alt="" width={20} height={31} />
            <span className="text-[13.5px] text-gray-400">
              © 2026 UrgenceCare. Tous droits réservés.
            </span>
          </div>
          <div className="flex gap-7">
            <a
              href="mailto:contact@urgencecare.bj"
              className="text-[14.5px] font-medium text-gray-400 transition-colors hover:text-white"
            >
              Contact
            </a>
            <a
              href="mailto:contact@urgencecare.bj?subject=Demande%20de%20démonstration"
              className="text-[14.5px] font-medium text-gray-400 transition-colors hover:text-white"
            >
              Demande de démo
            </a>
          </div>
        </div>

        <div className="mt-6 h-px bg-white/8" style={{ background: "rgba(255,255,255,0.08)" }} />

        <div className="flex justify-center pt-6">
          <span className="rounded-full border border-white/15 px-5 py-2 text-[12.5px] font-medium text-gray-400">
            Conçu par Solvher
          </span>
        </div>
      </div>
    </footer>
  );
}
