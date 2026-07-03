# UG LUFFY // OP16 — La Guida Definitiva

Sito locale interattivo che aggrega **tutto** quello che 6 fonti diverse hanno detto sul mazzo
**Blue/Green Monkey D. Luffy (OP16-022)** di One Piece Card Game: 2 guide premium Metafy
(Dog of Wisdom, Raphterra), l'intervista post-Top 8 Mexico di Adam "RayDeospirata",
le sessioni di coaching di Dog ed Equinby e le ladder session di Impact & Noob.

> ⚠️ Contiene trascrizioni derivate da guide premium Metafy (Dog of Wisdom, Raphterra):
> materiale a scopo di studio personale. Supporta i creator originali su Metafy.

## Come si apre

**Online:** https://leobacca.github.io/guida-ug-luffy/

**In locale:** doppio clic su **`APRI GUIDA.bat`** (oppure apri `site/index.html` nel browser).
Tutto funziona offline, nessun server necessario.

## Struttura

| Percorso | Cosa contiene |
|---|---|
| `site/index.html` | L'app (design system Tactical HUD, router, viste) |
| `site/data/*.js` | I contenuti: fonti, carte, meta, decklist, tech, fondamentali, 13 matchup |
| `assets/cards/proc/` | Immagini carte processate (`{key}__art/full.png`) |
| `assets/IMG/` | Tier list, board state e chart di supporto |
| `content/` | Trascrizioni markdown delle due guide Metafy |
| `Updates/` | Note curate da interviste/coaching/ladder (file 07–12) |
| `*.py` | Pipeline PPTX precedente (indipendente dal sito) |

## Regole contenuto

- Tutto in **italiano**, gergo TCG in inglese.
- **Niente winrate "di massa"** (matrice sim week-1): solo percezioni dei pro
  (Favorito/Even/Sfavorito) e ratio dichiarati dai giocatori.
- Ogni affermazione è **attribuita alla fonte**; i disaccordi sono documentati
  nella vista "Dibattiti aperti".

## Aggiornare i contenuti

Nuova fonte o matchup → nuovo file in `site/data/` che estende `window.DATA`
(vedi lo schema degli altri file `mu-*.js`), poi aggiungi il `<script src>` in `site/index.html`.
L'app normalizza automaticamente le varianti di schema.
