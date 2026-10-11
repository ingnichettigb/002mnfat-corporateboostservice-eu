/**
 * ============================================================================
 *  UNICA FONTE DI VERITÀ DEL LANCIATORE
 * ============================================================================
 *  Per creare il lanciatore di una nuova SaaS si modifica SOLO questo file
 *  (poi `npm run icons`). Da qui derivano: pagina, meta tag, manifest PWA,
 *  icone (SVG e PNG) e token colore del CSS.
 *
 *  NB: questo file deve restare "puro" (nessun import con alias `@/`), perché
 *  viene letto anche da `vite.config.ts` e da `scripts/generate-icons.ts`.
 * ============================================================================
 */

export const SUPPORTED_LANGS = ["it", "en", "es", "de"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const APP_CONFIG = {
  /* ---------- Identità del prodotto ---------- */
  codePrefix: "002",
  codeName: "MiniFAT",
  shortName: "002MiniFAT",
  fullName: "002MiniFAT – Smart Dossier",
  saasUrl: "https://002mnfat.corporateboostservice.eu",

  /* ---------- Marchio / editore ---------- */
  kicker: "CORPORATE BOOST SERVICE",
  author: "Corporate Boost Service",

  /* ---------- Lingue ----------
   * La lingua viene scelta in automatico dalle preferenze del sistema/browser
   * dell'utente (navigator.languages). Se non è tra quelle supportate si usa
   * `defaultLang`. Il manifest PWA e i meta tag renderizzati lato server
   * usano sempre `defaultLang`. */
  defaultLang: "it" as Lang,

  /* ---------- Testi specifici del prodotto, per lingua ----------
   * tagline     = sottotitolo in maiuscolo sotto il nome
   * description = frase per meta description e manifest */
  texts: {
    it: { tagline: "DOSSIER INTELLIGENTE, PRONTO PER IL CANTIERE.", description: "Dossier intelligente, pronto per il cantiere" },
    en: { tagline: "SMART DOSSIER, READY FOR SITE.", description: "Smart dossier, ready for site" },
    es: { tagline: "DOSSIER INTELIGENTE, LISTO PARA LA OBRA.", description: "Dossier inteligente, listo para la obra" },
    de: { tagline: "SMARTES DOSSIER, BEREIT FÜR DIE BAUSTELLE.", description: "Smartes Dossier, bereit für die Baustelle" },
  } satisfies Record<Lang, { tagline: string; description: string }>,

  /* ---------- Testi disegnati nell'icona (uguali in tutte le lingue) ---------- */
  icon: {
    top: "002", // grande, colore accent
    mid: "FAT", // medio, colore testo
    bottom: "SMART DOSSIER", // piccolo, colore cyan, nella fascia in basso
  },

  /* ---------- Colori (da qui derivano icona, manifest e CSS) ---------- */
  colors: {
    accent: "#b4ff3c", // colore primario (pulsante, numero, titoli)
    cyan: "#00e5ff", // colore secondario (bordi, globo, kicker)
    blue: "#0a2a4a", // blu profondo (pannelli, theme-color)
    bg: "#06090f", // sfondo
    fg: "#f8fafc", // testo
  },

  /* ---------- PWA ---------- */
  pwa: {
    display: "standalone" as const,
    orientation: "portrait-primary" as const,
    iconSizes: [72, 96, 128, 144, 152, 192, 384, 512],
    maskableSizes: [192, 512],
  },
} as const;
