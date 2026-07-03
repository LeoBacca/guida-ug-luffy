// Registro delle fonti — usato per badge, colori e pagina "Fonti"
window.DATA = window.DATA || {};
window.DATA.fonti = {
  dog: {
    id: "dog",
    nome: "Dog of Wisdom",
    sotto: "Guida Metafy «Prison Break»",
    persona: "Enricomaria Rustico (@DogXWisdom)",
    tipo: "Guida premium",
    colore: "#FFC23D",
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
    credenziali: "10-0 in Swiss · Top 8 al Regional di Mexico City · lista derivata dal coaching di Enrico (Dog)",
    descr: "Intervista YouTube dopo il Top 8: analisi carta per carta della sua lista (Jinbe tagliato, Gravity Blade come tech chiave, Rebecca last-minute), percentuali dichiarate per matchup, concetti di gameplay e trappole di regolamento vissute in torneo.",
    link: "YouTube · Vampier Gaming",
    copre: "Percentuali reali da torneo · lista Mexico · regole trappola"
  },
  dogcoach: {
    id: "dogcoach",
    nome: "Dog · Coaching",
    sotto: "2 sessioni di coaching live",
    persona: "Enrico (Dog of Wisdom) coach di Tom",
    tipo: "Coaching",
    colore: "#E8B34B",
    credenziali: "Lo stesso autore della guida, ma «ai ferri corti»: partite live commentate + video review",
    descr: "Due sessioni di coaching trascritte: consigli operativi che integrano (e a volte aggiornano) la Matchups Bible — la «Boa War» nel mirror, l'ordine degli attacchi vs Nami, la priorità di studio dei matchup.",
    link: "Session 1 + Session 2 (trascrizioni)",
    copre: "6 matchup in pratica · priorità di studio · scelte di lista live"
  },
  impactnoob: {
    id: "impactnoob",
    nome: "Impact & Noob",
    sotto: "Ladder sessions + Nami masterclass",
    persona: "Impact (“Josh”) + Noob, coach su YouTube",
    tipo: "Gameplay commentato",
    colore: "#3FE0FF",
    credenziali: "Ratio dichiarati: 9-1 vs Nami · 3-3 vs Enel · mirror ~65% per il più bravo",
    descr: "Tre video: due ladder session (6 partite commentate a due voci) e una masterclass interamente dedicata al matchup Nami (~6 partite demo con Noob che pilota Nami). È la fonte dei blueprint di lethal e della timeline primo/secondo vs Nami.",
    link: "YouTube: tAIXJ3HOKQo · u_q6tf3FmwI · 6ghvUvWA7E4",
    copre: "Blueprint lethal · masterclass Nami · dibattiti su Miss Olive e Gravity Blade"
  },
  equinby: {
    id: "equinby",
    nome: "Equinby",
    sotto: "Coaching + VOD review",
    persona: "Equinby, coach su YouTube",
    tipo: "Coaching",
    colore: "#B48CFF",
    credenziali: "33 «chicche» operative · approccio matematico (calcolatrice ipergeometrica)",
    descr: "Sessione live: mulligan interattivo, VOD review vs Teach e nel mirror, Q&A sulla lista. È la fonte del principio più importante della guida: «Luffy non perde prendendo danni: perde quando muore la board o finisce il gas».",
    link: "YouTube: cM6ECq9K7_o",
    copre: "Principio danni-vs-carte · regole mulligan · mirror avanzato"
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
