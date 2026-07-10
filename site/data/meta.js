// Vista "Meta OP16" — percezione dei pro, spread e tier a confronto
// (niente winrate sim "di massa": contano le valutazioni di chi il mazzo lo gioca davvero)
window.DATA = window.DATA || {};
window.DATA.meta = {
  intro: "<p>OP15 era in pratica un formato a due: <strong>Purple Enel</strong> e <strong>Nami</strong>. OP16 ha rimescolato tutto — l'ingresso più pesante è <strong>BY Teach</strong>, forte sia contro Nami che contro Enel: è il motivo principale per cui il meta è cambiato ed è diventato una «giungla» (Dog). Anche Raphterra usa la stessa parola: una giungla dove tanti mazzi possono arrivare in top cut.</p><p>Dog prevede un meta a <strong>6 mazzi principali</strong> + outsider; in media ogni mazzo ha ~4 matchup buoni e 2 cattivi — tipico di un formato aperto. In un meta così, dice Dog, la <strong>flessibilità</strong> di UG Luffy (tante tool card, build che cambia col campo) è la sua forza più grande.</p>",

  notaPercezione: "Le tier list e le statistiche pubbliche della prima settimana danno UG Luffy sfavorito contro Nami ed Enel. Chi il mazzo lo gioca ad alto livello la vede diversamente: la curva di apprendimento è ripida, e più lo mastichi più i «matchup pari» diventano favorevoli. Qui sotto trovi solo le percezioni dei pro — etichette e ratio dichiarati, niente numeri da ladder.",

  // Note per-deck di Dog (cap. 2.2) — giudizi qualitativi, non numeri
  perDeck: [
    { id:"teach", nome:"BY Teach", nota:"Popolarissimo; soffre UG Luffy e ancor più PY Rosinante; fatica contro i mazzi molto aggressivi; ma countera Enel alla grande." },
    { id:"yamato", nome:"B Yamato", nota:"Countera bene le strategie lente; molto consistente, «tricky»; probabilmente il più debole dei contender tier-1." },
    { id:"luffy", nome:"UG Luffy", nota:"Può quasi sempre giocare aggressivo; la build cambia molto col meta grazie alle tante tool card → la flessibilità è la sua forza più grande. Gatekeepa molti deck tier-2." },
    { id:"rosinante", nome:"PY Rosinante", nota:"Top contender; non ha un brutto MU vs Enel (parte forte); soffre i mazzi molto aggressivi; più cala di popolarità più diventa forte." },
    { id:"nami", nome:"Nami", nota:"È sempre Nami; molti giocatori stanchi passano a Teach; MU vs Teach pessimo; i giudizi vs Luffy/Rosinante cambieranno quando i matchup nuovi saranno imparati." },
    { id:"enel", nome:"P Enel", nota:"In declino: malissimo vs Teach e vs Nami (che ha ricevuto nuovo supporto). Dog non crede che Enel batta facilmente UG Luffy." }
  ],

  tierlist: {
    dog: {
      titolo: "I pick di Dog per il meta",
      c: "<p>Migliori scelte: <strong>Teach</strong>, <strong>Nami</strong>, <strong>Rosinante</strong>, <strong>UG Luffy</strong> (questa guida), probabilmente <strong>Enel</strong> (in calo perché Teach e Nami lo counterano). Ultimo contender: <strong>Yamato</strong>. Mostra anche la tier list dei pro giapponesi: «riflette grossomodo la realtà, ma non sono del tutto d'accordo».</p>",
      img: "ch2_tierlist_op16.png"
    },
    raphterra: {
      titolo: "Lo spread di Raphterra",
      c: "<p>Favoriti: <strong>BY Nami</strong>, <strong>BY Teach</strong>, <strong>RB Lucy</strong> (+ mid-tier: Red Shanks, Green Mihawk, Purple Sengoku). Even: <strong>Mirror</strong>, <strong>PY Rosinante</strong>. Sfavorito ma vincibile: <strong>Purple Enel</strong>. Sfavoriti rari: Yellow Kalgara, Red-Green Luffy, Black Yamato.</p>"
    },
    adam: {
      titolo: "La predizione di Adam",
      c: "<p>Il triangolo di OP16: <strong>UG Luffy batte Teach e Nami</strong>; <strong>Enel batte UG Luffy</strong>; <strong>Nami e Teach battono Enel</strong>. «UG Luffy sarà il best deck del formato».</p>"
    }
  },

  conclusione: "<p>Inizio formato molto aperto e matchup-dependent. Dog: monitora la popolarità dei mazzi, tieniti pronto a rifinire la lista (o a cambiare pick). Video citato: <em>«The ULTIMATE OP16 Tier List | Every Leader Ranked w/ @dogxwlsd»</em> — canale Testing Hill, YouTube.</p>"
};

// ---- Dibattiti aperti (vista dedicata) ----
window.DATA.dibattiti = [
  {
    id: "nami-dado",
    tema: "Vs Nami: primo o secondo?",
    contesto: "La posizione di Impact & Noob è EVOLUTA nel tempo — non un litigio ma un aggiornamento documentato, legato all'arrivo di Gravity Blade in lista.",
    timeline: true,
    posizioni: [
      { fonte:"impactnoob", quando:"File 09 (ladder pt.1)", testo:"<strong>SECONDO</strong>: forza Nami a rinunciare a Nico Robin sul suo turno a 7 DON." },
      { fonte:"impactnoob", quando:"File 10 (ladder pt.2)", testo:"<strong>PRIMO</strong>: se Nami va prima può usare Gravity Blade sul combo Buggy+Prisoner prima che ti sviluppi; andare 5-wide a 4 DON protegge." },
      { fonte:"impactnoob", quando:"File 12 (masterclass)", testo:"<strong>SECONDO (con Gravity Blade in lista)</strong>: se Nami va prima non può permettersi Robin al turno 7 → turno debole → il tuo Gravity Blade pulisce la sua risposta." },
      { fonte:"dog", quando:"Guida (Matchups Bible)", testo:"<strong>PRIMO</strong>: la curva migliore è andando primi (restand 2 DON → Buggy+Prisoner a 5 DON con 2 DON avanzati)." },
      { fonte:"raphterra", quando:"Guida (cap. 7.2)", testo:"<strong>PRIMO</strong>: le rende difficile attivare la leader ability e nega la linea 5c Nami → 7c Robin." }
    ],
    takeaway: "Il consenso dipende dalla lista: senza Gravity Blade → primo (Dog, Raphterra). Con Gravity Blade → secondo (Impact, masterclass)."
  },
  {
    id: "miss-olive",
    tema: "Miss Olive: promossa o bocciata?",
    contesto: "Era il dibattito più spaccato tra le fonti — chiuso dal campo: sparita dalle liste.",
    timeline: false,
    posizioni: [
      { fonte:"impactnoob", quando:"File 10", testo:"<strong>PRO</strong>: promossa, «buona in quasi ogni partita»; ha carrieato un mirror vinto senza vedere un solo Buggy. L'«Olive» (pesca 3 scarta 1) è anche il modo migliore di comprarsi un turno vs Nami (rimuove una Prank)." },
      { fonte:"equinby", quando:"File 11", testo:"<strong>CONTRO</strong>: «l'ho pescata 25 volte e giocata 0» — non convinto, dichiara apertamente l'opposto di Impact & Noob." },
      { fonte:"dog", quando:"Guida (cap. 3 tech pool)", testo:"<strong>CONTRO</strong>: un Crocodile 4c peggiore; ha counter e cicla ma il corpo costa troppo; lo slot da 5 appartiene a Buggy." },
      { fonte:"adam", quando:"File 07", testo:"<strong>CONTRO</strong>: troppo costosa — il filtraggio lo fa meglio Rebecca." }
    ],
    takeaway: "RISOLTO (lug 2026): OUT — non la gioca più nessuno. Il campo ha dato ragione ai 3 contro; la difesa di Impact non ha retto alla prova del meta."
  },
  {
    id: "luna-gb",
    tema: "Electrical Luna vs Gravity Blade",
    contesto: "Quale removal/freeze event merita lo slot?",
    timeline: false,
    posizioni: [
      { fonte:"impactnoob", quando:"File 09 + 12", testo:"<strong>Gravity Blade &gt; Luna</strong>: la rimozione permanente batte lo stun temporaneo. Luna non aiuta nemmeno vs Enel (il MU più difficile) → «se non aiuta lì, tagliala». Impact ha già tagliato Luna e All Out. Ranking GB: broken in mirror/Nami/Rosinante, inutile vs Teach, mediocre vs Enel (ma trigger di valore)." },
      { fonte:"equinby", quando:"File 11", testo:"<strong>Entrambe</strong>: gioca 2 Luna + 1 Gravity Blade. Luna fortissima vs Nami, GB vince mirror e Rosinante (ma morta vs Enel). Con tanti mirror attesi: 2 GB." },
      { fonte:"dogcoach", quando:"File 08", testo:"<strong>Luna declassata</strong>: Stronger (I Know You're Strong) &gt; Luna — freezare 4 personaggi è uno scenario raro." },
      { fonte:"dog", quando:"Guida (cap. 3)", testo:"Nella tech pool: «I Know You're Strong è meglio di Electrical Luna in questo mazzo»; Luna solo se aggiungi più freeze event." }
    ],
    takeaway: "Gravity Blade ha guadagnato consenso (Adam la definisce «tech chiave», Raphterra la gioca 1x come pet card). Luna divide: solo Equinby la difende davvero."
  },
  {
    id: "jinbe",
    tema: "Jinbe: dentro o fuori?",
    contesto: "Evoluzione quasi unanime verso il taglio.",
    timeline: true,
    posizioni: [
      { fonte:"dog", quando:"Guida (cap. 3 → cap. 6)", testo:"Nel cap. 3 lo scarta («sembrava un −1»), ma nella lista in testing del cap. 6 lo reinserisce <strong>x2</strong> per i 2k counter con nome unico." },
      { fonte:"raphterra", quando:"Guida (cap. 4)", testo:"<strong>x2</strong>: voleva 12 counter da 2k puliti + nome unico per il restand, safety per il mulligan aggressivo." },
      { fonte:"adam", quando:"File 07 (post-Mexico)", testo:"<strong>x0</strong>: mai giocato in 17 partite di Swiss. Inefficiente: costa, non cicla, non rampa." },
      { fonte:"equinby", quando:"File 11", testo:"<strong>Lo odia</strong>: «vorrei che quei Jinbe fossero Galdino»." }
    ],
    takeaway: "Le guide (scritte prima) lo giocano x2; le voci dal campo (dopo) lo tagliano. Trend chiaro: fuori."
  },
  {
    id: "galdino-count",
    tema: "Quanti Mr.3 (Galdino) 4c?",
    contesto: "Tutti concordano che è fortissimo — ma sul numero c'è distanza.",
    timeline: false,
    posizioni: [
      { fonte:"dog", quando:"Guida (cap. 3)", testo:"<strong>x4 obbligatorio</strong>: «una delle carte più forti stampate in OP16», insane per il blu." },
      { fonte:"raphterra", quando:"Guida (cap. 3)", testo:"<strong>Sempre x4</strong>: «una delle carte individuali più forti», di fatto costa 2 DON grazie al restand del Leader." },
      { fonte:"adam", quando:"File 07", testo:"<strong>x4 (giocato x3 per errore)</strong>: ammette che il taglio a 3 fu uno sbaglio — «mai cambiare una carta 2 giorni prima di un torneo». Galdino è il motivo principale delle sue vittorie vs Nami." },
      { fonte:"impactnoob", quando:"File 10", testo:"<strong>1-of</strong> (riferito alla versione/slot in discussione nella loro lista): doppio Galdino in mano = brick." }
    ],
    takeaway: "x4 è il consenso delle guide e di Adam. La posizione 1-of di Impact riguarda il rischio di doppioni in mano — contesto di lista diverso."
  },
  {
    id: "percezione-pubblico",
    tema: "La percezione dei pro vs il consenso pubblico",
    contesto: "Tier list e statistiche pubbliche danno UG Luffy sfavorito contro Nami (e messo male contro Enel). Chi lo gioca davvero non è d'accordo.",
    timeline: false,
    posizioni: [
      { fonte:"raphterra", quando:"Cap. 7.2", testo:"Nami è <strong>Favorito</strong> per chi conosce il mazzo — «il consenso pubblico dice sfavorito, i giocatori UG di alto livello dicono favorito. Segui il gameplan e ignora le tier list pubbliche.»" },
      { fonte:"dog", quando:"Cap. 2 + Bible", testo:"Contro Nami ed Enel «i numeri che girano sono off»: quei matchup si vincono molto più di quanto la massa creda. Le sue etichette: Nami <strong>Even</strong>, Enel <strong>Even</strong>." },
      { fonte:"adam", quando:"File 07", testo:"La prova in torneo: <strong>9 Nami affrontate, 9 vinte</strong> al Mexico Regional (dichiarato 60-40, 70-30 con Gravity Blade + dado)." },
      { fonte:"impactnoob", quando:"File 12", testo:"<strong>9-1</strong> dichiarato contro Nami — «è il deck stesso a essere naturalmente fortissimo contro Nami, non una lista tecata»." }
    ],
    takeaway: "La curva di apprendimento di UG Luffy è ripida: le valutazioni della massa fotografano chi il mazzo non lo sa ancora giocare. Fidati delle percezioni di chi lo pilota — e del tuo testing."
  }
];
