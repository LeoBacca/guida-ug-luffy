// Registro delle fonti — usato per badge, colori, tier di valore e pagina "Fonti"
window.DATA = window.DATA || {};
window.DATA.fonti = {
  equinby: {
    id: "equinby",
    nome: "Equinby",
    sotto: "Coaching + VOD review",
    persona: "Equinby (a.k.a. Elijah / OPTCGgrinder) — coach su YouTube",
    tipo: "Coaching",
    colore: "#B48CFF",
    tier: "S", peso: 4,
    tierNota: "★ Il preferito. La fonte del principio-cardine della guida: «Luffy non perde prendendo danni — perde quando muore la board o finisce il gas». Coaching con calcolatrice ipergeometrica: insight profondo e non ovvio, non solo indicazioni generali. Le info più aggiornate della guida (video più recente: il gruppo è passato a 3 Gravity Blade).",
    credenziali: "«chicche» operative su 2 sessioni · approccio matematico (calcolatrice ipergeometrica)",
    descr: "Due sessioni di coaching live. (1) File 11: mulligan interattivo, VOD review vs Teach/mirror, Q&A lista. (2) File 16: breakdown completo del deck (win condition e OTK, motore difensivo) + VOD review a stecca di mirror/Nami/Rosie (nega il draw di Nami, Gravity Blade 3x «la nuova norma»). È la fonte del principio più importante: «Luffy perde quando muore la board o finisce il gas».",
    link: "YouTube: cM6ECq9K7_o · 7m0wrtnZhOE",
    copre: "Principio danni-vs-carte · regole mulligan · mirror avanzato · Nami raffinato · Gravity Blade 3x"
  },
  impactnoob: {
    id: "impactnoob",
    nome: "Impact & Noob",
    sotto: "Ladder + Nami masterclass + coaching fondamentali",
    persona: "Impact (“Josh”) + Noob, coach su YouTube",
    tipo: "Gameplay commentato",
    colore: "#3FE0FF",
    tier: "S", peso: 4,
    tierNota: "Un gradino sopra le indicazioni generali: blueprint di lethal, timeline primo/secondo, dibattiti tecnici (Miss Olive, Gravity Blade, Boa a 2 copie) e i grandi fondamentali di sviluppo/tempo — «sviluppato QUANDO conta (con i DON!!), non al turno 1». Insight più affilato delle guide.",
    credenziali: "Ratio dichiarati: 9-1 vs Nami · 3-3 vs Enel · mirror ~65% per il più bravo",
    descr: "Quattro video: due ladder session (6 partite a due voci), una masterclass dedicata a Nami (~6 partite demo con Noob su Nami), e una sessione di coaching live sui grandi concetti (sviluppo «quando conta», non giocare a carte scoperte, leggere il counter, box A/B degli on-KO) + matchup Nami dal POV di UG. È la fonte dei blueprint di lethal, della timeline primo/secondo e dei fondamentali di sviluppo.",
    link: "YouTube: tAIXJ3HOKQo · u_q6tf3FmwI · 6ghvUvWA7E4 · NDizxrgpWt8",
    copre: "Blueprint lethal · masterclass Nami · fondamentali di sviluppo/tempo · dibattiti su Miss Olive e Gravity Blade"
  },
  hrvoje: {
    id: "hrvoje",
    nome: "Hrvoje",
    sotto: "Intervista decklist (canale di Elijah)",
    persona: "Hrvoje «the goat» — 3× champion, ospite di Elijah/equinby",
    tipo: "Intervista decklist",
    colore: "#2CE5C0",
    tier: "S", peso: 4,
    tierNota: "Ospite del canale di Elijah (equinby) e quasi al suo livello: 3× champion con BG Luffy. Breakdown carta-per-carta profondissimo, tutto fondamentali e piani di lethal — e rivaluta più carte che il resto della guida dava per «scartate».",
    credenziali: "3× champion (2 a Bielefeld) · 1° posto + Top 4 + Top 16 in OP16 con BG Luffy · invito Worlds",
    descr: "Intervista sul canale di Elijah/equinby: analisi carta per carta della lista con cui Hrvoje ha vinto, più i fondamentali del deck (piano di lethal, mulligan «trusta il deck», board > big leader, la minaccia di Navy HQ). Rivaluta Ivankov 3c, Jet Culverin e Champion Rifle, ed è la prima voce forte CONTRO la Gravity Blade nel mirror.",
    link: "YouTube: 9siKPZyqPwE (canale Elijah)",
    copre: "Decklist campione · fondamentali aggro · piani di lethal · dibattito Gravity Blade"
  },
  madoka: {
    id: "madoka",
    nome: "Madoka",
    sotto: "Coaching Rosinante (reverse-engineering)",
    persona: "Madoka_hk (Hong Kong) — coach di PY Rosinante",
    tipo: "Coaching avversario",
    colore: "#F45D9A",
    tier: "S", peso: 4, spot: "rosinante",
    tierNota: "GOAT del matchup Rosinante — ma SOLO lì. È coaching fatto PER chi gioca Rosinante: ne abbiamo estratto per reverse-engineering come batterlo con UG Luffy. Fonte spot, monouso: fuori dal matchup Rosinante non pesa.",
    credenziali: "~1000 game di PY Rosinante · canale con guida Rosinante · coaching 1-a-1 all'europeo «vins» prima di 3 regionali",
    descr: "Sessione di coaching di ~51 min in cui Madoka insegna a un allievo a giocare PY Rosinante, inclusa una partita commentata dal lato Rosinante contro Goofy (= UG Luffy). Ogni sua istruzione su come battere Luffy è, ribaltata, una contromossa per noi: gestione dei life, matematica del lethal-defense, come spengono il restand, la tech Flame Split, il Mr.1 sotto le 5 carte.",
    link: "YouTube: XUTT0j0ISWo",
    copre: "SOLO Rosinante · deckbuild anti-Luffy · life management ribaltato · lethal-math difensiva"
  },
  dogcoach: {
    id: "dogcoach",
    nome: "Dog · Coaching",
    sotto: "2 sessioni di coaching live",
    persona: "Enrico (Dog of Wisdom) coach di Tom",
    tipo: "Coaching",
    colore: "#E8B34B",
    tier: "A", peso: 3,
    tierNota: "Enrico «ai ferri corti»: più candido e operativo della sua guida — integra e a volte aggiorna la Matchups Bible con consigli pratici da partita live.",
    credenziali: "Lo stesso autore della guida, ma «ai ferri corti»: partite live commentate + video review",
    descr: "Due sessioni di coaching trascritte: consigli operativi che integrano (e a volte aggiornano) la Matchups Bible — la «Boa War» nel mirror, l'ordine degli attacchi vs Nami, la priorità di studio dei matchup.",
    link: "Session 1 + Session 2 (trascrizioni)",
    copre: "6 matchup in pratica · priorità di studio · scelte di lista live"
  },
  dog: {
    id: "dog",
    nome: "Dog of Wisdom",
    sotto: "Guida Metafy «Prison Break»",
    persona: "Enricomaria Rustico (@DogXWisdom)",
    tipo: "Guida premium",
    colore: "#FFC23D",
    tier: "B", peso: 2,
    tierNota: "La spina dorsale della guida: indicazioni generali affidabili su tutto il format. Solido e completo, ma resta a livello di framework generale — l'insight fine arriva dai coaching.",
    credenziali: "Vincitore Bandai Card Fest 2024 · Top 8 World Contender 2025 · Top player regionali offline",
    descr: "La guida premium su Metafy «Prison Break (OP16) — The Aggro King is Back», aggiornata al 12 giugno 2026. Sei capitoli: intro, meta analysis, decklist card-by-card con tech pool, strategia generale, la Matchups Bible (6 matchup) e conclusione con la lista in testing.",
    link: "x.com/DogXWisdom · Metafy",
    copre: "6 matchup meta · 2 decklist · 15 tech card · matchups bible"
  },
  raphterra: {
    id: "raphterra",
    nome: "Raphterra",
    sotto: "Guida Metafy «Blue-Green Luffy»",
    persona: "Raphterra (metafy.gg/@raphterra)",
    tipo: "Guida premium",
    colore: "#27E08A",
    tier: "B", peso: 2,
    tierNota: "Ottime indicazioni generali da campione nazionale: fondamentali, matematica del restand, 12 matchup coperti. Affidabile e ben strutturata, ma generale come impostazione.",
    credenziali: "Pluricampione nazionale · Asia Finalist · Finalista Grand Asia Open 3v3 · Specialista Green",
    descr: "Guida Metafy completa: analisi leader, core 37 carte + tech, la lista GAO Finalist (con cui un giocatore western ha vinto il Regional di Toronto), fondamentali con la matematica del restand, e 12 matchup (5 meta + 7 field).",
    link: "metafy.gg/@raphterra · x.com/Raphterra",
    copre: "12 matchup · lista GAO 50 carte · fondamentali del restand · cheat sheet"
  },
  adam: {
    id: "adam",
    nome: "Adam “RayDeospirata”",
    sotto: "Intervista post Top 8 Mexico",
    persona: "Adam, intervistato da Vampier Gaming (Jacobe)",
    tipo: "Tournament report",
    colore: "#FF8A5B",
    tier: "C", peso: 1,
    tierNota: "Un report da torneo con qualche spunto reale (Gravity Blade come tech del weekend, andare wide vs Rosinante), ma poco insight per punto e molte scelte legate al singolo evento: da prendere con le pinze.",
    credenziali: "10-0 in Swiss · Top 8 al Regional di Mexico City · lista derivata dal coaching di Enrico (Dog)",
    descr: "Intervista YouTube dopo il Top 8: analisi carta per carta della sua lista (Jinbe tagliato, Gravity Blade come tech chiave, Rebecca last-minute), percentuali dichiarate per matchup, concetti di gameplay e trappole di regolamento vissute in torneo.",
    link: "YouTube · Vampier Gaming",
    copre: "Percentuali reali da torneo · lista Mexico · regole trappola"
  }
};

// Scala favorability per lo spettro dei verdetti (pos: -2 .. +2)
window.DATA.favScale = [
  { pos: -2,    label: "Molto sfavorito" },
  { pos: -1.5,  label: "Sfavorito" },
  { pos: -0.75, label: "Leggermente sfavorito" },
  { pos: 0,     label: "Even" },
  { pos: 0.75,  label: "Leggermente favorito" },
  { pos: 1.5,   label: "Favorito" },
  { pos: 2,     label: "Molto favorito" }
];

// Scala del "peso" delle fonti — quanto vale l'insight di ciascuna voce.
// Voluta dall'utente: non tutte le opinioni valgono uguale.
window.DATA.pesoScale = [
  { tier: "S", peso: 4, label: "Insight d'élite",        colore: "#FFD447",
    nota: "Le voci che spostano davvero il modo di giocare: analisi profonde, non ovvie. Il vertice della guida." },
  { tier: "A", peso: 3, label: "Coaching operativo",     colore: "#27E08A",
    nota: "Sopra le indicazioni generali: consigli pratici da partita, più affilati delle guide." },
  { tier: "B", peso: 2, label: "Basi generali solide",   colore: "#3FE0FF",
    nota: "La spina dorsale: framework affidabile su cui è costruita la guida, ma generale." },
  { tier: "C", peso: 1, label: "Da prendere con le pinze", colore: "#FF8A5B",
    nota: "Contesto e spunti, ma meno insight per punto: pesa meno nelle scelte." }
];
