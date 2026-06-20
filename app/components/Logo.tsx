import Image from "next/image";

type LogoProps = {
  /** Hauteur de l'icône en pixels. Défaut: 28 */
  iconSize?: number;
  /** Taille du wordmark en classes Tailwind */
  textClassName?: string;
  /** Inverse la couleur du wordmark (utile sur fond foncé) */
  inverse?: boolean;
};

export function Logo({ iconSize = 28, textClassName = "text-xl", inverse = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/logo-icon.png"
        alt=""
        width={iconSize}
        height={Math.round(iconSize * 1.53)}
        priority
      />
      <span className={`font-heading font-extrabold tracking-tight ${textClassName} ${inverse ? "text-white" : "text-gray-900"}`}>
        Urgence<span className="text-primary-600">Care</span>
      </span>
    </span>
  );
}
