// Registro carte — immagini in ../assets/cards/proc/{key}__art.png / __full.png
// img:true = esiste l'immagine processata; img:false = tooltip testuale
window.DATA = window.DATA || {};
window.DATA.carte = {
  // ------ mazzo (con immagine) ------
  leader:     { code:"OP16-022", nome:"Monkey D. Luffy (Leader)", ruolo:"Leader UG · 5000 · 4 vite", costo:"L", img:true },
  luffy1c:    { code:"OP16-034", nome:"Monkey D. Luffy (1c)",     ruolo:"Searcher / aggressore early", costo:"1", img:true },
  mr1:        { code:"OP16-054", nome:"Mr.1 (Daz Bonez)",         ruolo:"Core 2-cost · +3k con 5+ carte in mano", costo:"2", img:true },
  mr2:        { code:"OP16-055", nome:"Mr.2 Bon Kurei (Bon Clay)",ruolo:"Core 2-cost · copia il power del Leader", costo:"2", img:true },
  ivankov:    { code:"OP16-026", nome:"Emporio Ivankov",          ruolo:"Searcher 4c · doppio corpo", costo:"4", img:true },
  crocodile:  { code:"OP16-045", nome:"Crocodile (4c)",           ruolo:"Blocker 6k · bounce & replay", costo:"4", img:true },
  mr3:        { code:"OP16-056", nome:"Mr.3 (Galdino) 4c",        ruolo:"Pesca 2 + freeze ≤9c", costo:"4", img:true },
  buggy:      { code:"OP16-048", nome:"Buggy (5c)",               ruolo:"6k + Prisoner gratis + Blocker on demand", costo:"5", img:true },
  prisoner:   { code:"OP16-042", nome:"Prisoner of Impel Down",   ruolo:"6k · counter 2000 · copie illimitate", costo:"6", img:true },
  hancock:    { code:"OP16-032", nome:"Boa Hancock (7c)",         ruolo:"WIN CONDITION · 9k Unblockable + freeze", costo:"7", img:true },
  samurai:    { code:"OP01-055", nome:"You Can Be My Samurai!!",  ruolo:"Event valore · resta i tuoi e pesca", costo:"1", img:true },
  navyhq:     { code:"OP16-038", nome:"Let's Go! To the Navy HQ!",ruolo:"FINISHER · restand totale (5 nomi diversi)", costo:"1", img:true },
  gumgumrain: { code:"OP02-068", nome:"Gum-Gum Rain",             ruolo:"Counter 3k · anti-brick", costo:"0", img:true },
  jinbe:      { code:"OP16-027", nome:"Jinbe (2c)",               ruolo:"Counter 2000 · corpo di riserva", costo:"2", img:true },
  mr3_2c:     { code:"ST30-014", nome:"Mr.3 (Galdino) 2c 2k",     ruolo:"Counter 2000 · moltiplica DON!!", costo:"2", img:true },
  brook:      { code:"OP15-032", nome:"Brook (6c)",               ruolo:"Rest + restand un personaggio", costo:"6", img:true },
  iknow:      { code:"OP13-040", nome:"I Know You're Strong…",    ruolo:"Counter 3k + freeze 2 personaggi", costo:"1", img:true },
  // ------ tech / citate (senza immagine) ------
  gravityblade:{ code:"OP06-058", nome:"Gravity Blade: Raging Tiger", ruolo:"Bottom-deck 2 personaggi ≤6c", costo:"7", img:false },
  rushluffy:  { code:"ST30-012", nome:"Monkey D. Luffy (Rush)",   ruolo:"6k Rush · resta un Blocker quando attacca", costo:"4", img:false },
  missolive:  { code:"OP16-050", nome:"Miss Olive",               ruolo:"Blocker 6k · bounce → pesca 2 scarta 1 — sparita dalle liste", costo:"5", img:false },
  luna:       { code:"OP08-036", nome:"Electrical Luna",          ruolo:"Freeza tutti i rested ≤7c · senza counter", costo:"3", img:false },
  allout:     { code:"OP13-040b", nome:"All Out (1c)",            ruolo:"Freeza fino a 2 rested ≤7c · counter 3k", costo:"1", img:false },
  dmg:        { code:"OP12-037", nome:"Dead Man's Game",          ruolo:"Resta 2 tra personaggi/DON!! avversari", costo:"1", img:false },
  jetculverin:{ code:"OP11-061", nome:"Jet Culverin",             ruolo:"Bottom-deck un personaggio ≤4c", costo:"3", img:false },
  galdinorest:{ code:"OP16-037", nome:"Galdino (2c Rest)",        ruolo:"On Play: resta un personaggio ≤5c", costo:"2", img:false },
  rebecca:    { code:"—",        nome:"Rebecca",                  ruolo:"Filtro anti-brick (tech last-minute di Adam)", costo:"—", img:false },
  ivankov3c:  { code:"—",        nome:"Emporio Ivankov (3c)",     ruolo:"Ridondanza sul turno 3 andando primi (Impact)", costo:"3", img:false },
  croc6c:     { code:"ST30-010", nome:"Crocodile (6c)",           ruolo:"Blocker + freeze · troppo lento", costo:"6", img:false },
  mr2_4c:     { code:"—",        nome:"Mr.2 Bon Kurei (4c)",      ruolo:"Tech scartata: troppo clunky", costo:"4", img:false },
  luffy4c:    { code:"—",        nome:"Monkey D. Luffy (4c)",     ruolo:"Tech scartata: Blocker troppo costoso", costo:"4", img:false },
  inazuma:    { code:"—",        nome:"Inazuma",                  ruolo:"Blocker economico (non nella build)", costo:"—", img:false },
  houndblaze: { code:"—",        nome:"Hound Blaze",              ruolo:"Tech da mirror (liste asiatiche)", costo:"—", img:false },
  champrifle: { code:"—",        nome:"Gum-Gum Champion Rifle",   ruolo:"Hyped ma bocciata", costo:"—", img:false },
  olive5c:    { code:"OP16-050", nome:"Miss Olive",               ruolo:"(alias)", costo:"5", img:false }
};

// Leader avversari (immagini lead_{key}__art.png)
window.DATA.leaders = {
  luffy:     { code:"OP16-022", nome:"Monkey D. Luffy",      colore:"UG", img:true },
  teach:     { code:"OP16-080", nome:"Marshall D. Teach",    colore:"BY", img:true },
  rosinante: { code:"OP12-061", nome:"Donquixote Rosinante", colore:"PY", img:true },
  nami:      { code:"OP11-041", nome:"Nami",                 colore:"UY", img:true },
  yamato:    { code:"OP16-079", nome:"Yamato",               colore:"B",  img:true },
  enel:      { code:"OP15-058", nome:"Enel",                 colore:"P",  img:true }
};

// Alias → key per l'auto-tooltip nel testo (solo alias non ambigui, match case-insensitive su word boundary)
window.DATA.cardAliases = {
  "boa hancock": "hancock", "hancock": "hancock", "7c boa": "hancock", "boa": "hancock",
  "mr.2 bon kurei": "mr2", "bon clay": "mr2", "bon kurei": "mr2", "mr.2": "mr2", "mr. 2": "mr2",
  "mr.1": "mr1", "mr. 1": "mr1", "daz bonez": "mr1", "daz bones": "mr1",
  "mr.3": "mr3", "mr. 3": "mr3", "galdino 4c": "mr3", "4c galdino": "mr3",
  "galdino 2k": "mr3_2c", "2c galdino": "mr3_2c",
  "emporio ivankov": "ivankov", "ivankov": "ivankov",
  "crocodile": "crocodile", "croc": "crocodile",
  "buggy": "buggy",
  "prisoner of impel down": "prisoner", "prisoner": "prisoner", "prigioniero": "prisoner",
  "luffy 1c": "luffy1c", "1c luffy": "luffy1c", "luffy searcher": "luffy1c",
  "you can be my samurai": "samurai", "samurai": "samurai",
  "let's go": "navyhq", "navy hq": "navyhq", "lets go": "navyhq",
  "gum-gum rain": "gumgumrain", "gum gum rain": "gumgumrain",
  "jinbe": "jinbe", "brook": "brook",
  "i know you're strong": "iknow", "i know youre strong": "iknow",
  "gravity blade": "gravityblade",
  "rush luffy": "rushluffy", "force luffy": "rushluffy",
  "miss olive": "missolive",
  "electrical luna": "luna", "luna": "luna",
  "all out": "allout",
  "dead man's game": "dmg", "dead mans game": "dmg",
  "jet culverin": "jetculverin",
  "rebecca": "rebecca",
  "hound blaze": "houndblaze",
  "champion rifle": "champrifle"
};
