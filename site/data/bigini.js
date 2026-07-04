// Bigini — quick reference da 30 secondi per i 13 matchup
// Distillati da: mu-mirror-teach.js, mu-nami-enel.js, mu-rosinante-yamato.js, mu-field.js
window.DATA = window.DATA || {};
window.DATA.bigini = {

  "mirror": {
    dado: "SECONDO (Dog) · PRIMO (Raphterra: minacci per primo il restand al turno dei 9 DON!!)",
    mulligan: "Cerca <strong>Crocodile</strong> + weenie o <strong>Buggy</strong>+<strong>Prisoner</strong>; doppio <strong>Mr.2 Bon Clay</strong> = snap keep (Equinby).",
    fai: [
      "Costruisci 5 nomi diversi: chi risolve prima <strong>Let's Go!! to the Navy Headquarters</strong> vince.",
      "Swinga sempre coi 6k, mai lasciarli stanti; rispondi a ogni loro freeze col tuo.",
      "Lascia un corpo stante per bluffare il restand, anche senza l'event in mano (Equinby)."
    ],
    nonFare: [
      "Non inseguire i loro 6k: o li uccidi o vai face (Dog coaching).",
      "Non giocare <strong>Mr.2 Bon Clay</strong> per primo: te lo freezano e non swinga mai.",
      "Non committare tutta la board: swinga solo con corpi che puoi rimpiazzare."
    ],
    rispetta: [
      { nome: "Let's Go!! to the Navy Headquarters (1c)", perche: "traccia i loro 4-5 nomi diversi" },
      { nome: "Boa Hancock (7c)", perche: "freeza i tuoi corpi chiave: rispondi col tuo" },
      { nome: "Galdino / Mr.3 (4c)", perche: "ogni versione taglia gli swing del restand" },
      { nome: "Gravity Blade (7c)", perche: "punisce la board lasciata stante per il setup" },
      { nome: "Rush Luffy (4c)", perche: "punisce il Blocker del Prisoner attivato in anticipo" }
    ],
    lossCondition: "Il loro restand risolto prima del tuo: 8-12 swing da 6k+ che vita, blocker e mano non reggono.",
    lineaLethal: "5 nomi diversi → swing tutti da 6k+ → <strong>Let's Go!! to the Navy Headquarters</strong> → seconda raffica; se counterano pesante, pivota sulla board."
  },

  "teach": {
    dado: "SECONDO (Dog, Raphterra: rompi la curva Shiryu → Teach 8 → Teach 10)",
    mulligan: "Il più permissivo del mazzo: matchup favorevole, una mano discreta basta (easy keep primo e secondo).",
    fai: [
      "Vai il più largo possibile: conta il numero di swing, non la dimensione (5-6, 5-6).",
      "Vai sempre face: è una race che vinci tu — Teach è lento.",
      "Tieni sempre una <strong>Boa Hancock</strong> per il Teach da 10: gli neghi anche il Blocker."
    ],
    nonFare: [
      "Non tradeggiare la loro board: «anche se uccidi quel Pudding, cambia qualcosa? No».",
      "Non trascinare la partita: non fargli mai vedere il late game.",
      "Non swingare <strong>Mr.2 Bon Clay</strong> per primo: giochi attorno al trigger San Juan Wolf."
    ],
    rispetta: [
      { nome: "Teach (8c)", perche: "il trigger più forte: swinga prima i 4/5-cost" },
      { nome: "Teach (10c)", perche: "blocker che disabilita un attaccante nel late" },
      { nome: "Vasco Shot (1c)", perche: "attacca prima coi corpi che può girare" },
      { nome: "San Juan Wolf (4c)", perche: "trigger: porta il loro Leader a 7000" },
      { nome: "Zehahaha (8c)", perche: "ruba una life card: resta a 3 life" }
    ],
    lossCondition: "«O half-triggerano come pazzi, o hai mancato tutta l'early game» (Dog coaching).",
    lineaLethal: "Full board di nomi diversi → loro pushano → swing con tutto + restand; con <strong>Rush Luffy</strong>: Luffy, swing 9, Leader skill, swing 9 di nuovo."
  },

  "rosinante": {
    dado: "PRIMO (Dog, Raphterra: neghi la sequenza Law 4c → Rosinante & Law 6c)",
    mulligan: "Weenie ripetuti (Equinby) o <strong>Luffy</strong> 1c / <strong>Mr.2 Bon Clay</strong> / <strong>Daz Bones</strong> / <strong>Buggy</strong>+<strong>Prisoner</strong>; secondi, doppia <strong>Electrical Luna</strong> = snap keep.",
    fai: [
      "Drena la mano: 5-5 forza più scarti di un singolo 8 (Dog coaching).",
      "Baita il loro blocker 8k a bloccare, poi freezalo con <strong>Boa Hancock</strong> e <strong>Galdino</strong>.",
      "Giudica la partita sulla loro hand size, non sui life: hanno double heal."
    ],
    nonFare: [
      "Non fare full swing se non sei al sicuro: poke con Leader e sacrificabili.",
      "Non lasciare corpi rested a caso: 8k, Sakazuki e Gum-Gum Lightning li puliscono.",
      "Non andare wide quando i loro blocker counterano gratis (Dog coaching)."
    ],
    rispetta: [
      { nome: "Rosinante & Law (6c)", perche: "la loro unica vera fonte di valore" },
      { nome: "I Love You (1c)", perche: "«cheata fuori i 2k»: attacca a 7k+" },
      { nome: "Law (4c)", perche: "con 7+ carte in mano scarti 2" },
      { nome: "Sakazuki (7c)", perche: "spegne quasi ogni tuo personaggio rested" },
      { nome: "Noro Noro Beam Sword (2c)", perche: "counter del late: attacca comunque a 7k+" }
    ],
    lossCondition: "Perdi se accetti la guerra di board control invece di svuotargli la mano: loro non scalano, tu sì.",
    lineaLethal: "Poke a 9/10 DON!!: se usano i blocker, all-in + restand; <strong>Gravity Blade</strong> il turno prima del push manda due Rosinante & Law a fondo mazzo."
  },

  "nami": {
    dado: "PRIMO (Dog, Raphterra) · SECONDO se hai Gravity Blade (Impact)",
    mulligan: "Vuoi <strong>Buggy</strong>+<strong>Prisoner</strong> E <strong>Mr.2 Bon Clay</strong>: senza uno dei due mulliga — i weenie generici qui valgono poco (Equinby).",
    fai: [
      "Swinga 7k+ ogni turno dal primo utile: due carte o danno; <strong>Mr.2 Bon Clay</strong> sempre a 9.",
      "Damage denial: countera i loro swing — ogni danno negato è un draw negato.",
      "Recupera sempre il pezzo mancante di <strong>Buggy</strong>+<strong>Prisoner</strong>: non rimuovono due cose insieme."
    ],
    nonFare: [
      "Non inseguire le vite in early: «vuoi le loro carte, non le loro vite» (Adam).",
      "Non over-counterare per salvare 6k che puoi ridevelopare il turno dopo.",
      "Non affidarti a <strong>Let's Go!! to the Navy Headquarters</strong>: spesso mancano i DON!! (Dog, Adam)."
    ],
    rispetta: [
      { nome: "Nico Robin (7c)", perche: "il loro motore: freezala o negale il turno" },
      { nome: "Wiper (5c)", perche: "KOa la board se vai 5-wide esposto" },
      { nome: "Teach (Trigger 6/8c)", perche: "rimuove i 4/5-cost: swingali per primi" },
      { nome: "Perona (Trigger)", perche: "rimuove un corpo: Leader come ultimo attacco" },
      { nome: "Kiku + Dr. Hogback", perche: "nei life: l'unica vera loss condition (Impact)" }
    ],
    lossCondition: "Perdi solo se non ricostruisci più la board dopo uno sweep — o su Kiku + Hogback nei life.",
    lineaLethal: "Blueprint: 7-7-7-9 → restand con <strong>Galdino</strong> → 9-9-9-9 — uccide da 2 vite e 5 carte in mano anche attraverso un trigger."
  },

  "yamato": {
    dado: "SECONDO, unanime (Dog, Raphterra, coaching): rompi Kin'emon 4c → Yamato 6c",
    mulligan: "Cerca <strong>Luffy</strong> 1c, <strong>Mr.2 Bon Clay</strong>, <strong>Daz Bones</strong>: curva bassa, poi resta healthy.",
    fai: [
      "Resta healthy: countera i 5k/6k early che chiedono una sola carta.",
      "Compra il turno che ti manca: <strong>Boa Hancock</strong> + <strong>Galdino</strong> sui loro 8k.",
      "Spesso meglio 5k + 7k che due 6k: hanno tanti 2k counter."
    ],
    nonFare: [
      "Non free-blockare senza contare gli attacchi rimasti (Yamato 8k + Otama sul blocker).",
      "Non affidarti a un solo corpo difensivo: Ground Death lo spegne.",
      "Non giocarla lunga: nel late hanno più attacchi di te — sei in race."
    ],
    rispetta: [
      { nome: "Yamato (8c)", perche: "entra nel tuo blocker dopo i poke" },
      { nome: "Otama (2c)", perche: "riduce il power per uccidere il blocker" },
      { nome: "Ground Death (Event)", perche: "spegne un blocker sul turno di lethal" },
      { nome: "Yamato (6c)", perche: "recupera un 6k e gioca un 2k gratis" },
      { nome: "Kin'emon (4c)", perche: "pezzo di curva: se manca, hai tempo" }
    ],
    lossCondition: "«O triggherano come pazzi, o hai mancato tutta l'early» — e sei ~1 turno indietro sul lethal.",
    lineaLethal: "Sopravvivi al loro push salvando i combo pieces, poi <strong>Let's Go!! to the Navy Headquarters</strong> o <strong>Brook</strong>: non hanno removal, il setup è facile."
  },

  "enel": {
    dado: "PRIMO, sempre (tutte le fonti): sviluppi i 6k prima di Ei Thor e ritardi il 6C Enel",
    mulligan: "Multipli 2-drop obbligatori: uno solo viene «Lorded» (Equinby); doppio 2-drop si tiene anche senza altro.",
    fai: [
      "Sviluppa ogni turno, mai un turno vuoto: forzi Ei Thor, che non pesca.",
      "Sticka i 6k e swinga 6k+: per pulirli servono due combo card (Kiten + Mamaragan).",
      "Freeza il 6C Enel più volte con <strong>Galdino</strong> e <strong>Boa Hancock</strong>, murato dietro i blocker."
    ],
    nonFare: [
      "Non inseguire i loro weenie: quella battaglia non si vince (tutte le fonti).",
      "Non basare il piano su <strong>Boa Hancock</strong> (Dog: Enel la rimuove) né sul restand event.",
      "Non forzare il lethal: prima conta gli eventi nel loro trash."
    ],
    rispetta: [
      { nome: "Enel (6c)", perche: "il corpo da freezare fino al lethal" },
      { nome: "Holly (3c)", perche: "doppio attacco early = chance crollate" },
      { nome: "Law (4c)", perche: "con 7+ carte in mano scarti 2" },
      { nome: "Lightning Dragon (0c)", perche: "tiene freezati i tuoi blocker rested" },
      { nome: "Mamaragan", perche: "rende quasi gratis difendere i tuoi 5k" }
    ],
    lossCondition: "È una race 4 vite contro 5: perdi se manchi l'early o se partono con più 1-drop.",
    lineaLethal: "Portali a ~2 vite, aspetta che finiscano gli eventi (trash check), poi 7k+ con <strong>Brook</strong>/<strong>Rush Luffy</strong> a bypassare i blocker."
  },

  "lucy": {
    dado: "SECONDO (Raphterra): rompi la catena Cavendish/Bartolomeo → 7C Sabo e neghi il draw del turno 1",
    mulligan: "<strong>Luffy</strong> 1c, <strong>Mr.2 Bon Clay</strong>, <strong>Daz Bones</strong>: curva bassa per la board ampia.",
    fai: [
      "Due o più corpi a turno + 6k continui: rimuovono una sola minaccia a turno.",
      "Freeza 7C Sabo e Cavendish con <strong>Boa Hancock</strong> e <strong>Galdino</strong>.",
      "Lascia DON!! aperti: il Double Attack del leader non deve connettere."
    ],
    nonFare: [
      "Non buttare il vantaggio nel late: calcola sempre un possibile 10C Roger.",
      "Non forzare lo 0 vite: se serve tienili a 1 e svuota prima la mano."
    ],
    rispetta: [
      { nome: "7C Sabo", perche: "minaccia e blocker chiave: freezalo" },
      { nome: "10C Roger", perche: "lethal a sorpresa: calcola sempre le difese" },
      { nome: "7C Flame Flame Fruit", perche: "abilita il Double Attack del leader" },
      { nome: "Stage (Lucy)", perche: "senza Stage finiscono presto i 2k counter" }
    ],
    lossCondition: "Perdi di colpo su Double Attack + 10C Roger se non calcoli le difese nel late.",
    lineaLethal: "Board wide → freeze event sulla loro board → raffica di 6k sul leader finché la mano cede."
  },

  "rbace": {
    dado: "SECONDO (Raphterra): neghi la sequenza 8C I am Whitebeard → 10C Newgate",
    mulligan: "<strong>Luffy</strong> 1c, <strong>Mr.2 Bon Clay</strong>, <strong>Daz Bones</strong> o il package <strong>Buggy</strong>+<strong>Prisoner</strong>.",
    fai: [
      "Vai wide dal turno uno: il loro leader 6000 non ferma i tuoi 6k naturali.",
      "Punisci i turni senza DON!! sul leader: o counterano o perdono la pescata.",
      "Corri: hanno solo 3 vite — portali a 0 il prima possibile."
    ],
    nonFare: [
      "Non fissarti su <strong>Boa Hancock</strong>: 6C Boa e 4C Galdino la freezano — tieni piani B."
    ],
    rispetta: [
      { nome: "8C I am Whitebeard", perche: "buffa il leader e prepara Newgate" },
      { nome: "6C Boa", perche: "freeza le tue carte chiave" },
      { nome: "10C Newgate", perche: "il boss on-curve da negare" }
    ],
    lossCondition: "Perdi se li lasci arrivare comodi al power play Whitebeard → Newgate.",
    lineaLethal: "0 vite via aggro → chiudi con <strong>Boa Hancock</strong> + <strong>Brook</strong>; se Boa è spenta: <strong>Galdino</strong> 2c + 6k + restand event."
  },

  "shanks": {
    dado: "SECONDO (Raphterra): ritardi il turno a 10 DON!! e il power play Beckman + 10C Shanks",
    mulligan: "<strong>Luffy</strong> 1c, <strong>Mr.2 Bon Clay</strong>, <strong>Daz Bones</strong> o la combo <strong>Buggy</strong>+<strong>Prisoner</strong>.",
    fai: [
      "Vai wide presto: brickano spesso e finiscono i counter in fretta (Adam).",
      "Swinga a 6k: neghi il counter gratis (-1000) della Leader ability.",
      "Leggi la loro scorta di counter: quando finiscono, capitalizza."
    ],
    nonFare: [
      "Non farli arrivare vivi ai 10 DON!!: lì la partita si complica.",
      "Non lasciare che Lucky Roo blocchi: <strong>Rush Luffy</strong> lo resta, <strong>Gravity Blade</strong> lo affonda."
    ],
    rispetta: [
      { nome: "10C Shanks", perche: "il boss: non deve mai entrare in gioco" },
      { nome: "5C Beckman", perche: "metà del power play a 10 DON!!" },
      { nome: "4C Lucky Roo", perche: "il loro unico freno alla tua aggressione" }
    ],
    lossCondition: "Perdi se non brickano e stabilizzano coi boss al turno dei 10 DON!!.",
    lineaLethal: "0 vite prima dei 10 DON!! → <strong>Brook</strong> per il doppio attacco, idealmente con <strong>Boa Hancock</strong>: senza counter, basta qualsiasi corpo."
  },

  "sengoku": {
    dado: "SECONDO preferito (Raphterra), ma qui l'ordine di turno conta poco",
    mulligan: "<strong>Luffy</strong> 1c, <strong>Mr.2 Bon Clay</strong>, <strong>Daz Bones</strong>: go wide e aggro.",
    fai: [
      "Aggro totale in early: rampano ai 7 DON!! e non hanno difese reali.",
      "Board ampia di 5k/6k: i loro attacchi finiscono nei tuoi weenie."
    ],
    nonFare: [
      "Non temere i tre Admiral: nemmeno il loro power play ferma l'aggressione."
    ],
    rispetta: [
      { nome: "7C Kuzan", perche: "disabilita i blocker: occhio al lethal disperato" },
      { nome: "7C Borsalino", perche: "si fa blocker: <strong>Boa Hancock</strong> lo nega" }
    ],
    lossCondition: "Praticamente solo se li lasci arrivare comodi ai 7 DON!! con vite e mano intatte.",
    lineaLethal: "A poche vite chiudi come preferisci: restand event, double attack con <strong>Brook</strong>, o qualsiasi lethal in mano."
  },

  "redace": {
    dado: "SECONDO (Raphterra): togli la curva Stage → 6C Vista e guadagni un turno di attacchi coi weenie",
    mulligan: "<strong>Luffy</strong> 1c, <strong>Mr.2 Bon Clay</strong>, <strong>Daz Bones</strong> o <strong>Buggy</strong>+<strong>Prisoner</strong>.",
    fai: [
      "Tutta la pressione sul leader: wide di 6k+ (Raphterra) o face-face-face (Adam).",
      "Continua a giocare weenie anche sotto Vista: si rimpiazzano col draw on-play.",
      "Dal loro turno a 8 DON!!: blocker e counter pronti per il Double Attack."
    ],
    nonFare: [
      "Non restandare la board a ripetizione: Ace vince i trade (Adam).",
      "Non free-blockare su attacchi piccoli: l'8k rusher arriva sul blocker rested.",
      "Non prendere vite da attacchi piccoli: scendi troppo per quando arriva l'8k."
    ],
    rispetta: [
      { nome: "8C Whitebeard", perche: "leader +2000 e Double Attack nel late" },
      { nome: "8k rusher (dalla mano)", perche: "uno ogni turno dal mid game" },
      { nome: "6C Vista", perche: "pulisce i weenie solo con la Stage" },
      { nome: "4C Luffy", perche: "porta il loro leader a 7k" }
    ],
    lossCondition: "Even per Raphterra, peggior matchup meta per Adam: si perde su un Double Attack alto non calcolato nel late.",
    lineaLethal: "Linea Adam: face-face-face fino a 0 vite, poi restand event come ultimo gas; <strong>Boa Hancock</strong> + <strong>Brook</strong> in Double Attack resta dura da difendere."
  },

  "mihawk": {
    dado: "SECONDO (Raphterra): segui la tua curva e ritardi 6C Law e 10C Law and Bepo",
    mulligan: "<strong>Luffy</strong> 1c, <strong>Mr.2 Bon Clay</strong>, <strong>Daz Bones</strong>.",
    fai: [
      "Go wide e poke a 6k: hanno pochissimi 2k counter.",
      "Freeza 5C Smoker (mid) e 9C Mihawk (late) con <strong>Boa Hancock</strong>/<strong>Galdino</strong>.",
      "Il turno prima dei loro 10 DON!!: board tutta attiva, zero attacchi dei corpi."
    ],
    nonFare: [
      "Non over-difendere i rested: All Out/Luna li freezano e hai sprecato carte.",
      "Non regalare valore ai freeze: lasciagli un solo rested da freezare.",
      "Non attaccare con <strong>Daz Bones</strong> sotto 5 carte in mano: niente 6k (gotcha di Adam)."
    ],
    rispetta: [
      { nome: "1C All Out / 3C Electrical Luna", perche: "il loro modo principale di vincere" },
      { nome: "10C Law and Bepo", perche: "play certo a 10 DON!!: leader 7k" },
      { nome: "5C Smoker", perche: "l'attaccante più impattante del mid game" },
      { nome: "9C Mihawk", perche: "l'attaccante chiave del late game" }
    ],
    lossCondition: "Perdi se i freeze event ti drenano counter e gli lasci il leader a 7k dopo Law and Bepo.",
    lineaLethal: "Negagli il leader 7k al turno di Law and Bepo: a poche vite e senza counter muoiono alla tua board wide il turno dopo."
  },

  "kalgara": {
    dado: "Nessuna preferenza indicata dalle fonti (matchup raro, fuori dal meta)",
    mulligan: "Nessun criterio dalle fonti: non esiste un piano turno-per-turno codificato.",
    fai: [
      "Tieni <strong>Gravity Blade</strong>: rimuove in un colpo la board che altrimenti affronti pezzo per pezzo (Adam)."
    ],
    nonFare: [
      "Non costruire il piano su una board fight che può evaporare in un turno.",
      "Non investire tutte le risorse in board: un'attivazione del leader la polverizza."
    ],
    rispetta: [
      { nome: "Effetto Leader", perche: "una singola attivazione polverizza la tua board" },
      { nome: "Nami (la loro)", perche: "doppia in board, cura i burn alle vite" },
      { nome: "Wiper", perche: "dopo il setup «uccide tutto»" }
    ],
    lossCondition: "«Il peggior matchup che abbia mai giocato» (Adam): il loro motore esplode — «se vedi 7 Kalgara, fai 7-2».",
    lineaLethal: "Nessuna linea codificata dalle fonti: <strong>Gravity Blade</strong> è l'unica arma indicata (Adam)."
  }

};
