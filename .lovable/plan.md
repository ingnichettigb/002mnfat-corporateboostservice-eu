## Problema
Il logo `<img>` non si vede in preview. Soluzione semplice: niente immagine, sostituire con una "wordmark" tipografica "MiniFAT" grande e contrastata.

## Cambiamento
In `src/routes/index.tsx`, sostituire l'`<img>` del logo con un blocco wordmark:

- Sfondo: tile arrotondato (`#0a2a4a`, blu del tema) con bordo lime `#b4ff3c` 2px e leggero glow
- Testo: "MiniFAT" su una riga, font weight 900, letter-spacing stretto, colore lime `#b4ff3c`
- "FAT" in bianco per contrasto interno (Mini in lime, FAT in bianco) → leggibile su qualsiasi sfondo
- Sotto, badge piccolo "PWA" o "SMART DOSSIER" come micro-label opzionale
- Dimensioni: ~280×96px, centrato, sostituisce esattamente l'attuale 144×144 logo
- `aria-label="MiniFAT logo"` sul contenitore

Rimuovere completamente il riferimento a `/icons/icon-192x192.png` nella landing. Le icone in `public/icons/` restano comunque per manifest/apple-touch/favicon (servono dopo il deploy).

Nessun altro file viene toccato.
