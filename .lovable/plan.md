## Nota
"MiniFAT" è un nome proprio del brand → non va MAI tradotto (né in italiano né in altre lingue). Resta sempre "MiniFAT", mai "MiniGRASSO".

## Verifica codice attuale
In `src/routes/index.tsx` il nome è già usato come brand non tradotto:
- Logo wordmark: "Mini" + "FAT"
- H1: "MiniFAT – Smart Dossier"
- CTA: "Open MiniFAT / Apri MiniFAT →"
- Prompt install EN/IT: entrambi usano "MiniFAT"
- Footer: "© {year} MiniFAT"

Nessuna stringa traduce "FAT" → "Grasso". Il codice è già corretto.

## Azione
1. Salvare una memoria di progetto `mem://constraints/brand-name.md` con la regola: "MiniFAT è brand name, non tradurre mai (no MiniGRASSO). Vale per tutte le lingue, tutti i futuri SaaS clonati da questo template userano la stessa regola con il loro nome."
2. Aggiungere riga Core in `mem://index.md`: "Brand names (es. MiniFAT) non si traducono mai in nessuna lingua."
3. Nessuna modifica al codice — già conforme.

Confermi così procedo?
