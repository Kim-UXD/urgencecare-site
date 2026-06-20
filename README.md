# UrgenceCare — Landing page (Next.js 15)

Page d'accueil officielle d'UrgenceCare. Construite avec Next.js 15 (App Router), TypeScript et Tailwind CSS.

## Prise en main

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande         | Effet                                                            |
| ---------------- | ---------------------------------------------------------------- |
| `npm run dev`    | Démarre le serveur en mode développement avec rechargement à chaud |
| `npm run build`  | Compile le site pour la production                               |
| `npm run start`  | Démarre le serveur de production (à lancer après `build`)        |
| `npm run lint`   | Vérifie le code avec ESLint                                      |

## Déploiement

### Vercel (recommandé)

1. Pousser le projet sur GitHub
2. Importer le repo sur [vercel.com](https://vercel.com)
3. Connecter le domaine `urgencecare.com` dans les paramètres du projet

Vercel détecte automatiquement Next.js — aucune configuration supplémentaire requise.

### Autre hébergeur

`npm run build` produit un dossier `.next/`. Pour un déploiement statique sur n'importe quel hébergeur (Netlify, OVH, etc.), il est possible d'activer l'export statique en ajoutant `output: 'export'` dans `next.config.ts` puis `npm run build` produira un dossier `out/` à déposer.

## Structure

```
urgencecare-next/
├── app/
│   ├── components/        # Tous les composants UI (Nav, Hero, Solution…)
│   ├── globals.css        # Styles globaux + tokens Tailwind custom
│   ├── layout.tsx         # Layout racine (metadata, polices)
│   └── page.tsx           # Page d'accueil — orchestre les composants
├── public/
│   ├── logo-icon.png      # Icône du logo (bouclier + croix)
│   └── favicon.png        # Favicon
├── tailwind.config.ts     # Palette UrgenceCare + tokens design
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Personnalisation

### Couleurs

La palette est définie dans `tailwind.config.ts`. Le rouge principal de la marque est `primary-600` (#D9221F), recalé exactement sur la couleur du logo.

### Contenu

Chaque section de la page est un composant indépendant dans `app/components/`. Pour modifier un texte, ouvrir le fichier correspondant :
- `Nav.tsx` — barre de navigation et menu mobile
- `Hero.tsx` — section d'accueil
- `Problem.tsx` — section "Le problème"
- `Solution.tsx` — section "La solution" avec les 5 capacités
- `Audience.tsx` — section "Pour qui"
- `Steps.tsx` — section "Comment ça fonctionne"
- `Vision.tsx` — bloc Vision
- `About.tsx` — section "À propos"
- `Team.tsx` — section "L'équipe"
- `CtaFinal.tsx` — appel à l'action final
- `Footer.tsx` — pied de page

### Métadonnées (SEO, partage social)

Modifier `app/layout.tsx` — l'export `metadata` contient le titre, la description et le favicon.

## Crédits

Conçu et développé par [Solvher](mailto:contact@urgencecare.bj).
