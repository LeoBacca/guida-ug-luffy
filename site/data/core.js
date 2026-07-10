// ============================================================================
// LAYER CORE — il distillato delle SOLE fonti scelte: Impact & Noob + Elijah (Equinby)
// Costruito direttamente dalle trascrizioni: Updates/09, 10, 11, 12, 15, 16.
// REGOLA DELLA GUIDA: quando due affermazioni si contraddicono, VALE LA PIÙ RECENTE.
// L'ordine cronologico dei video è la spina dorsale di questo file (chrono[]).
// ============================================================================
window.DATA = window.DATA || {};
window.DATA.core = {

  regolaRecenza: "Queste sei sessioni sono studiate in ordine cronologico. Quando due affermazioni si contraddicono — anche della stessa persona — vale l'informazione PIÙ RECENTE. Le posizioni superate restano visibili come storia, mai come consiglio.",

  // --------------------------------------------------------------------------
  // CRONOLOGIA — i 6 video core, in ordine. L'ultimo (★) vince i conflitti.
  // --------------------------------------------------------------------------
  chrono: [
    { id:"v09", n:1, fonte:"impactnoob", titolo:"Ladder Session pt.1",
      link:"youtube.com/watch?v=tAIXJ3HOKQo", file:"Updates/09",
      focus:"vs Enel, vs Nami, mirror — due coach commentano in coppia",
      novita:["vs Enel è una gara, non control vs aggro", "Bon Clay a 9 vs Nami (mai 7/8)", "Luna probabilmente da tagliare", "prima posizione sul dado vs Nami: secondi"] },
    { id:"v10", n:2, fonte:"impactnoob", titolo:"Ladder Session pt.2 + deck discussion",
      link:"youtube.com/watch?v=u_q6tf3FmwI", file:"Updates/10",
      focus:"mirror, vs Nami (Wiper) — e la discussione lista più densa",
      novita:["dado vs Nami rivisto: primi (paura della loro Gravity Blade)", "tutti i Galdino broken nel mirror, ma 1-of", "Miss Olive promossa (poi bocciata dal campo)", "blueprint lethal 7-7-8-9 → 9-9-10", "«Get lower, swing higher»"] },
    { id:"v11", n:3, fonte:"equinby", titolo:"Coaching: mulligan + VOD review (Teach, mirror)",
      link:"youtube.com/watch?v=cM6ECq9K7_o", file:"Updates/11",
      focus:"la sessione mulligan interattiva + il principio cardine della guida",
      novita:["«Luffy perde per board morta o gas finito, non per danni»", "regole di mulligan matchup per matchup (ipergeometrica)", "mirror: 2 vite aggressivo, Croc drain, bluff del restand", "lista: 2 Luna + 1 Gravity Blade, Jinbe bocciato"] },
    { id:"v12", n:4, fonte:"impactnoob", titolo:"Masterclass: come battere Nami",
      link:"youtube.com/watch?v=6ghvUvWA7E4", file:"Updates/12",
      focus:"~6 partite demo vs Noob su Nami + Q&A di deck building",
      novita:["dado vs Nami definitivo: SECONDI con Gravity Blade in lista", "Gravity Blade > Luna (risposta definitiva)", "blueprint lethal con Boa: 7-7-7-9 → 9-9-9-9", "Brook bocciato (posizione poi superata)", "Boa a 2 copie", "record 9-1 vs Nami, 3-3 vs Enel"] },
    { id:"v15", n:5, fonte:"impactnoob", titolo:"Live coaching: i grandi concetti di sviluppo",
      link:"youtube.com/watch?v=NDizxrgpWt8", file:"Updates/15",
      focus:"i fondamentali universali (sviluppo, tempo, informazione) + Nami dal POV di UG",
      novita:["«sviluppato QUANDO conta (con i DON!!), non al turno 1»", "non giocare a carte scoperte", "leggere il counter (2k su swing da 1k)", "on-KO: box A vs box B", "la curva Nami da temere: Marco 5 → Robin 7"] },
    { id:"v16", n:6, fonte:"equinby", titolo:"Deck breakdown completo + VOD review a stecca", ultimo:true,
      link:"youtube.com/watch?v=7m0wrtnZhOE", file:"Updates/16",
      focus:"il breakdown carta-per-carta, i tre OTK, mirror/Nami/Rosinante raffinati",
      novita:["★ Gravity Blade 3×: «the new norm»", "★ Brook riabilitato: 2 Boa + 1 Brook", "★ Jinbe riconsiderato", "i tre OTK (Brook+Boa, DMG+Galdino, Restand)", "mirror = guerra di hand size", "vs Nami: nega il draw della leader skill"] }
  ],

  // --------------------------------------------------------------------------
  // FONDAMENTALI CORE — solo Impact/Noob + Elijah, organizzati per tema
  // --------------------------------------------------------------------------
  principi: [
    {
      gruppo: "I principi cardine",
      icona: "🧭",
      items: [
        { nome: "Come si perde davvero: board morta o gas finito", fonte:"equinby", video:"v11",
          c: "<p class='chicca'>«<strong>Il modo in cui Luffy perde non è subendo danno alla vita. Perdi quando la board muore, o quando finisci il gas.</strong>» La qualità della mano è la risorsa più importante, non la vita.</p><ul><li><strong>La spirale dell'overcounter:</strong> overcounteri la vita → meno carte in mano → l'avversario cala un big body → swinga 8 sul tuo 6k → non hai carte per proteggerlo → il body muore → game compromesso.</li><li><strong>La spirale virtuosa:</strong> PRENDI il danno → più carte → proteggi i corpi 6k → la board resta → vinci.</li><li><strong>2 vite ≈ 3 vite:</strong> spesso identico per le sorti del game (ti swingano la board comunque), ma una carta in più in mano decide chi sopravvive al crackback.</li><li><strong>Anche i free block non sono gratis:</strong> usarne uno adesso può significare non avere il counter quando serve davvero per un 6k. «Ci sono spot dove non dovresti nemmeno free-blockare.» Chiediti sempre: come perdo questo game? Quasi sempre la risposta è «muore la board».</li><li><strong>Il payoff:</strong> con 10 carte in mano dopo aver preso danno, swinghi 5 volte nello stesso turno: «il turno dopo avremo 12 swing contro 4 carte in mano e 2 vite — la partita è finita».</li><li><strong>Unica eccezione — vs Nami:</strong> counterare vale se neghi un draw o se proteggi specificamente Bon Clay.</li></ul>" },
        { nome: "Sviluppato QUANDO conta (con i DON!!), non al turno 1", fonte:"impactnoob", video:"v15",
          c: "<p class='chicca'>«Nell'early e mid game la prima priorità è SEMPRE lo sviluppo» — ma il punto non è vomitare la mano al turno 1: è essere <strong>sviluppato quando conta davvero, cioè quando hai tanti DON!!</strong>.</p><ul><li><strong>Board senza DON!! = board innocua:</strong> 5-wide con 0 DON!! non minaccia niente; 5-wide con 10 DON!! i tuoi 5k swingano per 7/8/9 — «magari ti swingo dodici 6 in un turno solo».</li><li><strong>Andare wide TROPPO presto è una trappola:</strong> (a) i corpi calati presto vengono swingati → spendi carte per proteggerli (i Buggy costano cari da difendere); meglio PRENDERE il danno early → più carte → difendi meglio dopo. (b) Con i DON!! attaccati un singolo 2k-check fallito ti uccide: 5 corpi con 10 DON!! fanno molta più paura.</li><li><strong>«Bomb» non è solo un 12-cost:</strong> cinque 5k SONO un bomb — swingano «un milione di 7» il turno dopo.</li><li><strong>Sviluppare «stampa» DON!!:</strong> un corpo grosso calato ora paga 2 DON!! extra che tornano come attack power OGNI turno per il resto della partita.</li><li><strong>Buggy + Prisoner = un «Jinbe+Weevil più lento»:</strong> arrivare un turno dopo cambia molto meno di quanto pensi — la board piena al turno 2 è inutile senza i DON!! per farla valere.</li></ul>" },
        { nome: "L'obiettivo è VINCERE (e l'attacco vince le partite)", fonte:"equinby", video:"v11", video2:"v15",
          c: "<p class='chicca'>«L'obiettivo di Teach è non perdere. L'obiettivo di Nami è non perdere. <strong>L'obiettivo di Luffy è VINCERE.</strong>» (Elijah). E Impact: «In One Piece l'attacco vince i campionati: devi uccidere l'avversario.»</p><ul><li>Gioca la carta difensiva <strong>solo se rischi davvero di iniziare a morire</strong>. Se l'avversario non può ucciderti, continua a sviluppare — anche se andresti a 0, sviluppa il pezzo che LI uccide.</li><li><strong>Le «surviving plays» perdono comunque</strong> (Noob): giocate tecnicamente corrette in difesa ma passive rimandano solo la sconfitta. «Magari sopravvivi — ma è una vita che vale la pena vivere?»</li><li><strong>Unica eccezione: il mirror</strong>, dove l'obiettivo diventa «non perdere» (vedi il ballo del restand).</li></ul>" }
      ]
    },
    {
      gruppo: "La win condition: mille tagli + OTK",
      icona: "👑",
      items: [
        { nome: "Mille tagli: lima la mano, colpisci a 6", fonte:"equinby", video:"v16",
          c: "<p class='chicca'>Il piano macro: <strong>limare quante più carte possibile dalla mano avversaria e impostare un OTK</strong>. «I dettagli dell'OTK non contano molto» — l'importante è arrivarci.</p><ul><li><strong>Colpisci a 6 il più possibile</strong> con tanti corpi: lima i loro 2k. Quando finiscono i 2k, <strong>passi ai 7</strong> e muoiono in fretta.</li><li>Funziona solo con una <strong>massa critica di 6</strong> — cioè andando davvero wide.</li><li>I 6k mettono l'avversario in <strong>posizioni impossibili</strong>: difende la vita o i personaggi? Gli limi carte gratis → resta corto → board control facile → snowball.</li></ul>" },
        { nome: "I tre OTK", fonte:"equinby", video:"v16",
          c: "<ol><li><strong>Brook + Boa</strong> — l'OTK più affidabile: porti l'avversario a 0-1 vite e Brook+Boa chiude «attraverso quasi tutto». Non teme Perona; l'unico trigger che lo impatta davvero è quello di Teach (nega l'unblockable).</li><li><strong>Dead Man's Game + Galdino</strong> — con due corpi 6k stickati il DMG è <strong>di fatto GRATIS</strong>: recuperi tutti i DON!! tra Leader e carta → 10 DON!! per swingare fuori.</li><li><strong>Restand (Let's Go! To the Navy HQ)</strong> — 5 nomi diversi, li colpisci ~8 volte (fino a 12); con Boa gli 8 scalano. Sequenza tipo: 3 corpi + Galdino + un corpo random → tap Galdino, dividi i DON!! → 7-7 / 5-7 → refresh → 9-9 → chiudi con cinque 7 e un 5.</li></ol>" },
        { nome: "Il motore difensivo compra i turni", fonte:"equinby", video:"v16",
          c: "<p>Perché è così difficile ucciderti: <strong>Gravity Blade</strong> riduce affidabilmente gli swing dell'avversario; <strong>Galdino</strong> e <strong>Boa</strong> isolano/freezano un singolo bersaglio → attacchi ripetutamente mentre il loro corpo più grosso è stunnato. Hai tanti turni per limare la mano → «qualunque tool di kill peschi, il più delle volte li uccide».</p><ul><li><strong>Proteggi i 6k</strong>; i weenie (Luffy 1c, Daz Bones, Bon Clay) sono expendable.</li><li>Ma <strong>tieni sempre un weenie in rotazione per i draw di Crocodile</strong>: «Croc che diventa un blocker 4/6 gratis è super super buono».</li><li><strong>Removal in un deck aggro:</strong> i mid-range spendono interi turni su corpi da cui si aspettano valore ripetuto — Gravity Blade rimuove <strong>due turni del loro sviluppo</strong> in una carta e i tuoi corpi swingano impuniti.</li></ul>" },
        { nome: "La gerarchia dei 2-drop", fonte:"equinby", video:"v16",
          c: "<p>Le carte core sono le <strong>12 unità early</strong>: Luffy 1c, Daz Bones e Bon Clay. <strong>Luffy 1c è il PEGGIORE dei tre</strong>: «il più delle volte è un 1-cost da 3k, perché spesso devi metterci due DON!! per farlo valere». Sii cosciente dei nomi che giochi per farlo scalare. (Ma resta da non tagliare: senza, la lista perde il mid-range play — Impact & Noob, sessione 2.)</p>" }
      ]
    },
    {
      gruppo: "Filosofia di swing",
      icona: "🗡️",
      items: [
        { nome: "«Get lower, swing higher»", fonte:"impactnoob", video:"v10",
          c: "<p class='chicca'>«Tanta gente non swinga correttamente con questo mazzo, e questo lo rende molto più debole. <strong>Scendi più in basso, swinga più in alto.</strong> Non è difficile.» L'errore comune: swingare a valori troppo bassi (7 invece di 9) o non committare abbastanza sul turno lethal. UG Luffy vince portando l'avversario a valori bassi velocemente e chiudendo con numeri che non si tengono.</p>" },
        { nome: "Attacca con più corpi in UN turno, non uno alla volta", fonte:"equinby", video:"v16",
          c: "<p>L'aggro fondamentale (analogia col vecchio Red Zoro): se attacchi uno per uno, l'avversario ti pota i corpi a uno a uno e resti senza attaccanti. Con tutto insieme, anche con 1-2 swing non gestisce 3-4 corpi rested.</p><ul><li>Se ti wipa qualcosa, usa <strong>meno risorse possibili</strong> per riempire di nuovo e riattaccare.</li><li><strong>Trappola comune: difendere roba che non va difesa.</strong> Board control all'inizio, chiudi col restand alla fine.</li></ul>" },
        { nome: "Sequenzia gli swing (e testa le counter)", fonte:"impactnoob", video:"v15", video2:"v09",
          c: "<ul><li>Swinga i <strong>6 sui corpi avversari PRIMA</strong> di mandare il <strong>9 (Boa)</strong> in faccia: se i loro corpi muoiono ai primi 6, «liquidi» gli swing rimanenti; col 9 per primo perdi i 7 successivi.</li><li><strong>Attacca prima col body meno importante</strong> per testare la counter: se l'avversario contra, non continuare a investire.</li><li>Con re-stand disponibile e board larga: <strong>swinga prima Buggy (il 5) per vedere se contrano</strong>, poi committa al lethal completo.</li><li><strong>Ivankov senza swing immediato è quasi sempre sbagliato</strong>: giocarlo passivo spreca la sua pressione — Ivankov E swing nello stesso turno.</li></ul>" },
        { nome: "Con blocker avversari: vai even + redirection test", fonte:"impactnoob", video:"v10",
          c: "<p class='chicca'>Quando l'avversario ha <strong>3+ blocker</strong>, non caricare DON!! sui corpi: fai più <strong>check a 6k</strong> («se hanno blocker, vai più even»). E usa il <strong>redirection test</strong>: swinga UN singolo 6 per vedere se redirige sul blocker. Se lo fa, fermati — ogni swing ulteriore verrà rediretto. Se non lo fa, hai guadagnato informazione gratis.</p>" }
      ]
    },
    {
      gruppo: "Informazione, conteggio e letture",
      icona: "🧠",
      items: [
        { nome: "Non giocare a carte scoperte", fonte:"impactnoob", video:"v15",
          c: "<p>Ogni azione che richiede DON!! dà informazione sulla tua mano. <strong>Fai PRIMA le azioni a basso costo di DON!!</strong> (gli swing dei piccoli), così l'avversario non sa cosa farai col resto. Eccezione: usa Galdino (o un searcher) per primo SOLO se ciò che peschi cambia il turno («se pesco la Gravity Blade la gioco»); se il draw non cambia niente, tieni le opzioni nascoste.</p>" },
        { nome: "CONTA — e leggi come countera", fonte:"impactnoob", video:"v15",
          c: "<p class='chicca'>«CONTA»: prima di committare fai i conti (muoio a uno split? ho il lethal? quanti 2k mi servono?) — non a sensazione. E osserva SEMPRE come countera: un <strong>2k su uno swing che chiedeva 1k</strong> significa mano fatta di 2k o brick (un 1k l'avrebbe usato) → <strong>non scalare gli swing</strong>: andare a 10 = andare a 9. Vai a 9 e tieni l'opzione di pivotare.</p>" },
        { nome: "Se ti counterano con Galdino o Borsalino, la loro mano è povera", fonte:"equinby", video:"v16",
          c: "<p>Swinghi un 5 e ti danno un <strong>Galdino</strong> o un <strong>Borsalino</strong> come counter? <strong>Sai automaticamente che la loro mano è povera di counter</strong> — nessuno regala quelle carte. Da lì massimizzi la pressione.</p>" },
        { nome: "On-KO (Kiku / Robin): box A vs box B", fonte:"impactnoob", video:"v15",
          c: "<p>Uccidere un corpo con effetto on-KO non ha regola secca. Chiediti SEMPRE entrambe: «cosa succede se lo uccido?» E «cosa succede se NON lo uccido?» — la gente si ferma alla prima. Con UG Luffy uccidi Nami «con un milione di carte» in un turno solo: negare al Kiku 4-5 swing (che accorciano il TUO clock) spesso vale più della vita che curano.</p>" },
        { nome: "Bluff e conteggio del restand", fonte:"equinby", video:"v11",
          c: "<ul><li><strong>Bluffa il restand:</strong> lascia un corpo standing senza swingarlo anche se NON hai l'evento — l'avversario non lo sa, e il bluff lo disincentiva a swingare libero.</li><li><strong>Il ballo del restand:</strong> se aspetti il restand «garantito», l'avversario può Galdinare la board (da 12 swing a 8). A volte conviene andare PRIMA del garantito: l'avversario spreca il turno preventivo senza pressarti, tu ti ricarichi e il turno dopo il restand È garantito.</li><li><strong>Conta le risorse equivalenti:</strong> vita + blocker + carte in mano sono la stessa cosa contro 12 swing da 6: «non importa se è una vita o un 2k in mano».</li></ul>" }
      ]
    },
    {
      gruppo: "Risorse e recupero",
      icona: "📈",
      items: [
        { nome: "Recuperare da una mano scarsa", fonte:"equinby", video:"v16",
          c: "<p class='chicca'>Anche con una mano brutta: <strong>forza l'avversario a vita bassa + minaccia l'OTK</strong>. Whiffi il turno 3 → jammi per 8 → prendi una vita, cali Buggy+Prisoner, refresh, swing 7 → avversario a 3 → ti appoggi coi 7 dai corpi 6k (1 DON!! per un 7 è un ottimo affare). <strong>Non giocare la partita «per sempre»: sei un deck aggro.</strong></p>" },
        { nome: "La combo Buggy + Prisoner: priorità e timing", fonte:"impactnoob", video:"v09", video2:"v10",
          c: "<ul><li><strong>Priorità assoluta:</strong> recupera sempre il pezzo mancante della combo, anche rinunciando a un corpo extra. Garantisce anche un 2k da qualsiasi brick via Prisoner.</li><li><strong>Due linee di timing</strong> (entrambe valide): <em>Linea A</em> — 5 DON!!: Buggy+Prisoner; 7 DON!!: restand + Luffy → tre corpi attivi. <em>Linea B</em> — 5 DON!!: Ivankov/Crocodile; 7 DON!!: Buggy+Prisoner+Luffy → triplo sviluppo. La B è leggermente più forte se arrivi intatto al turno dei 7 DON!!.</li><li>A 9 DON!! da lì: «swinghi sei 6k e poi restandi. Gross.»</li></ul>" },
        { nome: "Luffy + Rush + pump di Galdino: la linea kill", fonte:"impactnoob", video:"v10",
          c: "<p>Una delle linee kill più efficaci: <strong>gioca Luffy, dagli Rush, gioca Galdino, pumpa su un altro body</strong>, poi swinga tutto. «Puoi uccidere quasi chiunque così.»</p>" }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // MULLIGAN — le regole di Elijah (v11), con l'ipergeometrica
  // --------------------------------------------------------------------------
  mulligan: {
    fonte: "equinby", video: "v11",
    generali: "<p><strong>Andando primi</strong> cerchi: Luffy 1c + 2-drop, OPPURE doppio 2-drop, OPPURE un weenie + Buggy/Prisoner. <strong>Andando secondi</strong>: doppio 2-drop + Crocodile, OPPURE un 4-drop con un piano. Le mani che non soddisfano nessun criterio si mulligano contro quasi tutto.</p>",
    regole: [
      { t:"Doppio Bon Clay = snap keep", c:"Primo e secondo, contro tutto, senza eccezioni: Bon Clay è forte sia vs leader 5k che 7k. Doppio Bon Clay + Luffy: le altre carte non contano nemmeno." },
      { t:"Doppio Luffy: tieni, ma scagliona", c:"Propende per il keep. Andando primi: gioca il primo al turno 1 ma NON il secondo subito — aspetta un turno di draw per informare la seconda search. Eccezione: vs leader 6k giochi entrambi." },
      { t:"Matematica, non sensazione", c:"Per le decisioni di confine Elijah usa il calcolatore ipergeometrico: con 10 «Prisoner» nel deck trovi il pezzo entro il turno dei 5 DON!! ~71% delle volte (coi draw di Luffy); con 8 copie crolla al ~45%." }
    ],
    perMatchup: [
      { mu:"Nami",      primo:"Severissimo: vuoi Buggy+Prisoner E Bon Clay — i weenie generici valgono poco qui. Senza uno dei due: mull.", secondo:"Come primo, ancora più severo." },
      { mu:"Enel",      primo:"Servono MULTIPLI 2-drop: uno solo viene «Lorded». Mulliga mani che vs tutto il resto terresti.", secondo:"Idem, mull facile." },
      { mu:"Teach",     primo:"Permissivo: matchup favorevole, una mano discreta basta.", secondo:"Easy keep." },
      { mu:"Mirror",    primo:"Vuoi Crocodile + weenie; attenzione ai brick.", secondo:"Snap keep con doppio Bon Clay." },
      { mu:"Rosinante", primo:"Weenie ripetuti (Elijah non ha certezza al 100%).", secondo:"Nell'era 2-Luna il doppio Luna era snap keep — oggi con 3 Gravity Blade la logica si sposta sulla GB." }
    ]
  },

  // --------------------------------------------------------------------------
  // MATCHUP CORE — solo quello che Impact/Noob & Elijah hanno detto davvero
  // --------------------------------------------------------------------------
  matchups: {

    nami: {
      id:"nami", nome:"Nami", sigla:"BY Nami", colorHex:"#35C4F0", leaderImg:"lead_nami",
      verdetto: { label:"Molto favorito", nota:"Impact: 9-1 dichiarato in torneo (unica sconfitta: un Wiper fortunato); Noob storicamente 70-80% anche senza Gravity Blade. «È il deck stesso a essere naturalmente fortissimo contro Nami, non una lista tecata.»" },
      dado: { scelta:"SECONDI — con Gravity Blade in lista", video:"v12", conflitto:"nami-dado",
        nota:"Posizione evoluta in tre tappe (vedi il conflitto qui sotto). Il perché: se Nami va prima non può giocare Robin al turno dei 7 DON!! senza prendere troppi poke → turno debole → la tua Gravity Blade pulisce e il loro turno successivo non ha swing di risposta. «Se becco la Gravity Blade su uno dei loro turni a 7 DON, la partita è semplicemente finita.»" },
      formula: "La formula di Elijah (il video più recente): <strong>fai una board che gli tira più carte possibile fuori dalla mano → stunna i loro corpi grossi (Galdino/Boa) → nega i draw della leader skill</strong>, così non hanno counter infiniti per i tuoi 7.",
      inBreve: [
        "Bon Clay SEMPRE a 9, mai a 7 o 8 (a 7/8 una carta li salva; a 9 sono bloccati)",
        "Mulligan severissimo: Buggy+Prisoner E Bon Clay, o mull",
        "Counter i loro swing = negargli pescate (l'eccezione al «prendi il danno»)",
        "I 6k sono la valuta del matchup; Daz Bones/Luffy 1c expendable",
        "Blueprint: 7-7-7-9 → restand → 9-9-9-9"
      ],
      regole: [
        { t:"Bon Clay sempre a 9", video:"v12",
          c:"<p>Ogni Bon Clay in gioco deve swingare per 9 (2 DON!! extra). A 7 o 8 Nami contra con una singola carta; a 9, dopo la leader skill, quasi sempre prendono la vita — a meno che tu ne mandi tre da 9 insieme. «È esattamente come Enel gioca il proprio matchup, e va copiato.» Con 3 corpi a terra: 9/9/9 è la linea standard.</p>" },
        { t:"Damage denial: negare vita = negare pescate", video:"v12",
          c:"<p><strong>Nami pesca quando ti toglie vita.</strong> Contro di lei conviene contrare gli swing coi blocker quando possibile: ogni swing negato è una carta in meno per difendersi dal tuo turno. Nel mid-late Nami resta senza un «vero turno» — bloccata a giocare l'unica carta buona in un momento pessimo (Gecko Moria + swing 7 è un turno oggettivamente scarso contro di te).</p>" },
        { t:"Nega il draw della leader skill", video:"v16",
          c:"<p>Se impedisci a Nami di pescare dalla leader skill, il tuo primo 7 del turno dopo prende <strong>due carte</strong> e lei ne ripesca solo <strong>una</strong>; altrimenti ne ripesca due e non hai concluso niente. Vale la pena usare le carte in modo aggressivo in difesa pur di negare quel draw.</p>" },
        { t:"Ivankov in campo = la tua «leader skill di Nami»", video:"v16",
          c:"<p>Un Ivankov che resta in campo ti ridà una carta ogni turno solo stando lì: difendi aggressivo e usa Ivankov per ripescare. Linee: prendi vita presto con Ivankov giù e nega l'ultima; oppure scendi a 2, difendi, rimuovi la prima Robin con la Boa e resta a 1.</p>" },
        { t:"6k preziosi, weenie expendable — e il trucco dell'1k", video:"v12",
          c:"<ul><li>Proteggi <strong>Crocodile, Buggy, Prisoner</strong>; Bon Clay (già swingato), Daz Bones e Luffy 1c si sacrificano senza rimpianti. Non spendere DON!! su Daz Bones/Luffy se non ti serve la loro ricerca: nella masterclass Daz Bones ha swingato 2 volte in 6 partite.</li><li><strong>Il trucco:</strong> gli 1k qui non fanno nulla — ma con un blocker 6k blocchi il loro swing da 6 e pitchi l'1k come counter: una carta morta diventa un 2k reale. Ripetilo e a fine partita hai in mano solo 2k puliti.</li><li>Dal POV di Nami, attaccare i tuoi 6k = «promuoverti a leader da 6k»: non lo farà quasi mai. Sfruttalo: DON!! su un 6k «di scorta» che sai che non difenderà.</li></ul>" },
        { t:"Boa: a 9 DON!!, macchina da 2k-check", video:"v10", video2:"v15",
          c:"<ul><li>«A 7 DON!! non gioco Boa. Gioco Buggy a 7, Prisoner a 7, 8 con Bon Clay + Croc, 7 col leader. Boa la gioco il turno dopo, a 9, quando ho più DON!!.»</li><li>Swinga <strong>Boa (9)</strong> e leader/Croc (8) per forzare i 2k fuori dalla mano: quando non hanno il 2k, il danno è garantito.</li><li><strong>Non dare a Boa la PRIMA vita</strong> dell'avversario: se è un trigger, gli summoni un corpo che ti riattacca. «Salto quella prima leader skill per non summonargli accidentalmente un corpo.»</li><li>Vita <strong>face-up</strong>? Non possono usare l'effetto KO da quella vita → <strong>swinga alla Nami leader</strong>.</li></ul>" },
        { t:"Bon Clay due volte, Daz Bones standing", video:"v15",
          c:"<p>Cerca sempre di far swingare i Bon Clay DUE volte. E <strong>non girare i Daz Bones di lato senza motivo</strong>: una Nami non è nemmeno supposta swingarci dentro (salvo piano Robin) — tenerlo standing gioca attorno alla loro Gravity Blade.</p>" },
        { t:"Varianti: Wiper e Gravity Blade avversaria", video:"v10",
          c:"<ul><li><strong>Wiper:</strong> gioca lento — non aprirti 5-wide su turni dove non chiudi: Wiper KO-a l'intera board esposta. (È l'unica sconfitta del 9-1 di Impact.)</li><li><strong>La loro Gravity Blade:</strong> 5-wide su 4 DON!! con corpi di costi diversi la depotenzia — non possono eliminare tutto con un solo evento.</li></ul>" },
        { t:"Il momento critico: la ricostruzione", video:"v12",
          c:"<p>Il vero rischio è quando <strong>non riesci a ricostruire la board</strong> dopo che è stata spazzata: sei corto di carte e senza giocata. Se ricostruisci sempre, ogni swing di Nami nella tua board diventa gratis da assorbire. E ricorda: non esiste un solo gameplan — si vince anche senza Boa, o senza Buggy+Prisoner: adattati alla mano.</p>" },
        { t:"La curva Nami da temere (per anticiparla)", video:"v15",
          c:"<p>La curva più sottovalutata di Nami: <strong>Marco al 5 → Robin al 7</strong> (Marco blocca, protegge il turno-Robin e gioca attorno alla Gravity Blade). Se Nami NON gioca Robin lì, gioca robetta che viene grav-bladata e non ti pressa mai. Il suo danno in faccia è «fake»: «per favore, dammi quella vita — voglio solo le carte».</p>" }
      ],
      blueprints: [
        { nome:"Lethal con Boa (la sequenza completa)", video:"v12",
          c:"<p>Board: <strong>Buggy + Prisoner + Crocodile + Boa</strong> (+ Galdino in mano).</p><ol><li>Swing 5 col leader (forza subito la skill, strappi una carta)</li><li>DON!! su Crocodile → swing 7</li><li>Gioca Galdino, dividi il DON!!: Buggy e Prisoner swingano 7 ciascuno</li><li>Swing 9 con Boa</li><li><strong>Restand</strong>, riattiva Galdino, ridistribuisci col refresh del leader</li><li>Swing finale: <strong>9-9-9-9</strong></li></ol><p>Totale <strong>7-7-7-9 / 9-9-9-9</strong>: uccide da 2 vite e 5 carte in mano anche attraverso un trigger.</p>" },
        { nome:"Con Bon Clay", video:"v10", c:"<p><strong>7 / 7 / 8 / 9 → restand → 9 / 9 / 10.</strong> «Ti chiedo quattro carte sulla prima ondata. Il 9 lo prendi. Poi restando e ti colpisco per nove altre quattro volte.»</p>" },
        { nome:"Senza Boa", video:"v12", c:"<p><strong>7-7-8 → restand → 9-9, poi 7-9-9.</strong> Funziona comunque, solo con meno pressione totale.</p>" }
      ],
      comePerdi: "<p>Due soli scenari reali: (1) <strong>Kiku in prima vita + Dr. Hogback in seconda</strong> — le uniche carte che cheattano corpi extra in campo (fuori da questo, isola il big body e freezalo per sempre con Galdino e Boa); (2) <strong>trigger early</strong> — Kiku in prima vita o Thriller Bark che summona e ti uccide un Bon Clay in uno spot sbagliato. I trigger tardivi non contano quasi.</p>",
      conflitti: ["nami-dado","luna"]
    },

    mirror: {
      id:"mirror", nome:"Mirror (UG Luffy)", sigla:"UG // UG", colorHex:"#2E8BFF", leaderImg:"lead_luffy",
      verdetto: { label:"Skill check puro", nota:"«Il giocatore migliore vince ~65% delle volte» (Impact; Noob è più ottimista: 90%). È l'unico matchup dove l'obiettivo del deck cambia: da «vincere» a «non perdere» (Elijah)." },
      dado: { scelta:"—", nota:"Nessuna indicazione secca dalle due fonti: contano molto di più le regole sotto." },
      formula: "«Per la maggior parte, il mirror è una questione di <strong>hand size</strong>: limi la mano dell'avversario così non può continuare» (Elijah). La prima Gravity Blade pesa più di tutto; se la becchi da trigger, vinci sul posto.",
      inBreve: [
        "Guerra di hand size: lima e non regalare swing",
        "Tutti i Galdino sono broken qui — ma 1-of (2 in mano = brick)",
        "Stai aggressivamente a 2 vite: difendi il Croc dal «Croc drain»",
        "Bluffa il restand: un corpo standing tiene in ostaggio il loro turno",
        "Gravity Blade solo col board già sviluppato"
      ],
      regole: [
        { t:"Guerra di hand size + Gravity Blade", video:"v16",
          c:"<ul><li>La <strong>prima</strong> Gravity Blade è importantissima, la seconda molto meno, la terza quasi non esce. Il motivo per giocarne 3: vuoi la miglior chance di vederne una presto — e <strong>una GB da trigger nel mirror vince la partita all'istante</strong>.</li><li><strong>Timing:</strong> assicurati che il tuo board sia sviluppato PRIMA di spararla. Sotto-sviluppato → loro ridevelopano e resti in loop. Da posizione di vantaggio → «grav-bladi i suoi due corpi mentre hai i tuoi due: i tuoi swingano impuniti».</li></ul>" },
        { t:"Tutti i Galdino sono broken — ma 1-of", video:"v10",
          c:"<p>«Turns out all the Galdino cards are broken»: il 2k, il freeze e il rest — in una partita ne hanno giocati 4 totali, ogni volta era la giocata corretta. Il freeze blocca la risposta dopo una swing importante; il rest toglie un body difensivo chiave. MA: <strong>1-of</strong> — «quando ho iniziato a pescarne due in mano, ho iniziato a odiarli». Con due Galdino in mano sei bricked.</p>" },
        { t:"Stai a 2 vite: la difesa dal «Croc drain»", video:"v11",
          c:"<p class='chicca'>Strategia avversaria tipica: swingare <strong>6 ripetuti sul tuo Crocodile</strong> — ogni volta o counteri o lo perdi; dopo 3-4 swing sei a secco e muori al restand a prescindere dalla vita. La difesa: <strong>stai aggressivamente a 2 vite</strong> → puoi free-blockare i 6 sul Croc dando l'1k garbage → il Croc drain non gli conviene più. «Voglio poter girare il mio Croc senza paura.»</p>" },
        { t:"Boa: congela il duplicato, non il Croc", video:"v11",
          c:"<ul><li>Il Croc spesso non swinga comunque (paura del restand): freezarlo è «donare» una swing che non avrebbe fatto. Congela <strong>Daz Bones</strong> o un body che userebbe volentieri.</li><li>Il restand richiede <strong>5 nomi diversi</strong>: se ha 2 Croc o 2 Bon Clay, <strong>congela il duplicato</strong> → inibisci il restand E togli una swing reale.</li></ul>" },
        { t:"Bluffa il restand + il ballo", video:"v11",
          c:"<ul><li><strong>Non girare sempre tutti i tuoi body:</strong> un corpo standing bluffa il restand anche se non ce l'hai — l'avversario non può swingare libero.</li><li><strong>Il ballo:</strong> aspettare il restand garantito = rischiare il Galdino avversario sulla board (da 12 swing a 8). A volte vai PRIMA del garantito: lui spreca il turno preventivo, tu ti ricarichi, e il turno dopo È garantito.</li><li>Nel conteggio: <strong>vita + blocker + carte in mano sono risorse equivalenti</strong> contro 12 swing da 6.</li></ul>" },
        { t:"Luffy 1c: cerca, non counterare", video:"v11",
          c:"<ul><li>Al turno dei 4 DON!!, se non hai già il play per il turno dopo: <strong>gioca Luffy per cercarlo</strong> invece del 2-drop — perdere 1 DON!! di valore è poco rispetto a trovare la linea.</li><li><strong>Mai usare Luffy come counter</strong>: è un +1 (body + search). Se devi counterare, usa Buggy.</li></ul>" },
        { t:"Gioca sopra i tuoi weenie", video:"v16",
          c:"<p>Nel mirror è corretto <strong>giocare sopra i tuoi stessi weenie</strong>: vuoi che i tuoi attacchi restino validi il turno dopo. Se ti attaccano i weenie, quei corpi non swingano più — giocaci sopra e tieni personaggi attivi.</p>" },
        { t:"Ivankov nudo = turno sprecato", video:"v09",
          c:"<p>Il «double nude Ivankov» (giocato senza swingare) è un turno buttato: devi giocare Ivankov E swingare nello stesso turno.</p>" },
        { t:"Il piano B: vincere di card advantage", video:"v10",
          c:"<p>Nel mirror si può vincere anche <strong>senza mai giocare Buggy+Prisoner</strong>, gestendo il card advantage e mantenendo più Galdino dell'avversario. (Impact & Noob l'hanno fatto con Miss Olive — carta poi sparita dalle liste: il concetto resta, la carta no. Vedi il conflitto risolto.)</p>" },
        { t:"Jet Culverin ha utility qui", video:"v16",
          c:"<p>Oltre che tech anti-Enel, <strong>Jet Culverin</strong> colpisce Croc/Daz Bones rested nel mirror.</p>" }
      ],
      blueprints: [
        { nome:"Il math del lethal con re-stand", video:"v09",
          c:"<p>Board da 5 corpi: 5/6/6/6/7 + re-stand del leader → hai a disposizione tre 6, tre 7 e due 5. <strong>Swinga prima Buggy (il 5) per vedere se contrano</strong>, poi committa al lethal completo. Non fare «no DON!! commitment» se la board è già larga abbastanza per chiudere.</p>" }
      ],
      comePerdi: "<p>Perdendo la guerra di hand size: «surviving plays» passive che rimandano la sconfitta, Croc drenato perché stavi a 3 vite col terrore di free-blockare, o board Galdinata mentre aspettavi il restand perfetto. E i brick: doppio Galdino in mano, Electrical Luna morte (le Lune avversarie «non hanno fatto nulla» in due sessioni).</p>",
      conflitti: ["gb-copie","missolive"]
    },

    enel: {
      id:"enel", nome:"Enel", sigla:"P Enel", colorHex:"#B48CFF", leaderImg:"lead_enel",
      verdetto: { label:"Sfavorito (il peggiore)", nota:"Il matchup peggiore di Impact in assoluto: 3-3 in torneo — «è decisamente uno svantaggio». Si vince, ma è una gara in salita." },
      dado: { scelta:"—", nota:"Nessuna indicazione esplicita dalle due fonti core." },
      formula: "«È una gara per entrambi» — non esiste un ruolo aggro/control netto. Sei naturalmente sfavorito nella corsa (4 vite vs 5), ma puoi attaccare con <strong>tutti i corpi contemporaneamente</strong> — Enel coi suoi weenie no.",
      inBreve: [
        "Ignora la battaglia dei weenie: non puoi vincerla",
        "Tutta la pressione attraverso le 5 vite",
        "Mulligan: MULTIPLI 2-drop o mull (uno solo viene «Lorded»)",
        "Luna e Gravity Blade non lavorano qui (il trigger GB sì)",
        "Jet Culverin = la removal per Rau"
      ],
      regole: [
        { t:"Ignora i weenie, pressa le vite", video:"v09",
          c:"<p>Contro Enel <strong>ignora la battaglia dei weenie</strong> — non puoi vincerla. Concentra tutta la pressione attraverso le 5 vite avversarie. «We played towards our regular version of our deck's win condition»: l'avversario era a 3 vite con 10 carte in mano, ed è morto lo stesso.</p>" },
        { t:"Mulligan: multipli 2-drop", video:"v11",
          c:"<p>Un singolo 2-drop viene <strong>«Lorded»</strong> (KO immediato): servono multipli. Mulliga mani che contro tutto il resto terresti. «For sure mull versus Enel.»</p>" },
        { t:"Galdino: timing sulla loro Boa", video:"v09",
          c:"<p>Usa Galdino quando l'avversario ha già speso il turno sul suo pezzo grosso (es. la loro Boa Hancock): così lo «perm-freezi» senza che possa rispondere.</p>" },
        { t:"Luna e Gravity Blade non lavorano qui", video:"v09", video2:"v12",
          c:"<ul><li><strong>Electrical Luna non aiuta contro Enel</strong> — «e se non aiuta nel matchup più difficile, in quale lo fa?» (l'inizio della fine per Luna in lista).</li><li><strong>Gravity Blade</strong> come rimozione è mediocre qui (non c'è il bersaglio giusto) — ma il suo <strong>trigger</strong> è comunque valore: elimina gratis corpi piccoli tipo Dog o Frankie.</li></ul>" },
        { t:"Jet Culverin: la removal per Rau", video:"v16",
          c:"<p>«Per lo più una tech per Enel: è il modo più facile di rimuovere <strong>Rau</strong> (il Law 6c).» L'alternativa (la removal «two sword style»: resta 3 → KO 2 rested ≤4) richiede che Rau abbia già attaccato.</p>" },
        { t:"Testa le counter prima di committare", video:"v09",
          c:"<p>Attacca prima col body meno importante per testare la counter; ordina gli swing partendo dai corpi su cui ti aspetti risposta, per non sprecare gli swing da lethal.</p>" }
      ],
      blueprints: [],
      comePerdi: "<p>Perdendo la testa nella battaglia dei weenie (che è persa in partenza) o tenendo mani con un solo 2-drop. La matematica della gara è contro di te (4 vite vs 5): ogni turno passato a non pressare le vite è un turno regalato.</p>",
      conflitti: ["luna"]
    },

    teach: {
      id:"teach", nome:"Teach", sigla:"BY Teach", colorHex:"#FFC23D", leaderImg:"lead_teach",
      verdetto: { label:"Favorito", nota:"«Matchup già vinto comunque» (Impact, parlando di dove NON serve Gravity Blade). Per Elijah il mulligan qui è il più permissivo: una mano discreta basta." },
      dado: { scelta:"—", nota:"Nessuna indicazione secca; il matchup si gioca sui principi sotto." },
      formula: "È IL matchup dove applicare il principio cardine: <strong>prendi il danno, tieni le carte, proteggi i 6k</strong>. Teach vince solo se ti fa morire la board — non lasciarglielo fare.",
      inBreve: [
        "Prendi il danno: perdi solo se muore la board o finisci il gas",
        "Ordine swing: Crocodile per PRIMO, Bon Clay SEMPRE ultimo",
        "Lethal: Luffy → swing 9 → leader skill → swing 9",
        "Skip il Galdino-slam: l'extra swing vale di più",
        "Niente Gravity Blade qui: non serve"
      ],
      regole: [
        { t:"Il principio cardine, spiegato proprio qui", video:"v11",
          c:"<p>Quando overcounteri contro Teach: meno carte → cala Shiryu → swinga 8 sul tuo 6k → non lo proteggi → board morta. Quando prendi il danno: 10 carte in mano → «il turno dopo 12 swing contro 4 carte e 2 vite: la partita è finita». Anche i free block hanno un costo: quello che usi ora può mancare al 6k il turno dopo.</p>" },
        { t:"Crocodile per primo, Bon Clay per ultimo", video:"v11",
          c:"<ul><li><strong>Croc apre gli attacchi:</strong> (1) Vasco Shot è face-up e lo conosci — swingare Croc prima lo devalua; (2) la skill di Teach «nega un attacco + poppa un personaggio»: se Croc ha già swingato, popparlo dopo vale meno.</li><li><strong>Bon Clay chiude SEMPRE:</strong> è lo strumento per giocare attraverso i trigger di <strong>San Juan Wolf</strong>. Se lo swinghi presto e scatta Wolf, perdi il push.</li></ul>" },
        { t:"La linea lethal", video:"v11",
          c:"<p>Sul turno finale (con Luffy disponibile): <strong>gioca Luffy, swinga 9, lui usa la leader skill, swinga 9 di nuovo</strong>. NON tastare prima con un 5 «di assaggio»: un avversario sveglio blocca gratis e hai sprecato la swing.</p>" },
        { t:"Skip il Galdino-slam", video:"v10",
          c:"<p>Contro Teach la giocata Galdino-slam è <strong>peggiore</strong> di avere una swing extra: «l'extra swing è più importante del Galdino slam contro Teach» (Noob, con Impact d'accordo).</p>" },
        { t:"L'OTK Brook+Boa e il suo unico nemico", video:"v16",
          c:"<p>L'OTK Brook+Boa uccide «attraverso quasi tutto» — l'unico trigger che lo impatta davvero è <strong>quello di Teach</strong>, che nega l'unblockable. Tienilo in conto nel conteggio del lethal.</p>" }
      ],
      blueprints: [],
      comePerdi: "<p>Overcounterando: è l'unico modo di regalare a Teach una partita che non può vincere da solo. La board muore per mancanza di gas, mai per il suo clock.</p>",
      conflitti: []
    },

    rosinante: {
      id:"rosinante", nome:"Rosinante", sigla:"PY Rosinante", colorHex:"#F45D9A", leaderImg:"lead_rosinante",
      verdetto: { label:"Favorito (con Gravity Blade)", nota:"«Con un terzo Gravity Blade in lista quel matchup è già ampiamente vinto» — al punto che Rosinante «non ha counterplay reale» contro la terza copia (Impact)." },
      dado: { scelta:"—", nota:"Nessuna indicazione secca dalle due fonti core." },
      formula: "Rosinante spende <strong>due turni interi</strong> a sviluppare i corpi da cui si aspetta valore per tutta la partita (Promo Law + Rosinante&Law). <strong>Gravity Blade cancella quei due turni con una carta</strong> — e i tuoi corpi swingano impuniti.",
      inBreve: [
        "Gravity Blade è il game-winner: rimuove 2 turni di sviluppo loro",
        "Sparala col TUO board già sviluppato, mai da sotto",
        "Se lasciano il board standing per il setup restand → GB = game over",
        "Mulligan: weenie ripetuti"
      ],
      regole: [
        { t:"Gravity Blade: il game-winner", video:"v11", video2:"v12",
          c:"<p>Game-winning quando lasciano il board standing per il setup del restand: «quando li grav-bladi puoi stringergli la mano. Game over. Hanno lasciato troppo valore sul tavolo e li hai spazzati». Per Impact è broken qui quanto nel mirror e vs Nami — e col terzo GB in lista Rosinante non ha counterplay reale.</p>" },
        { t:"Rimuovi lo sviluppo multi-turno", video:"v16",
          c:"<p>I mid-range come Rosinante sviluppano corpi «da valore ripetuto» spendendo interi turni (blocker Promo Law + Rosinante = due turni di sviluppo). La hard removal ribalta il matchup: <strong>rimuovi i loro due turni e prendi valore ripetuto dai tuoi corpi</strong> — non hanno più niente da swingarti nel board.</p>" },
        { t:"Timing della GB: board sviluppato prima", video:"v16",
          c:"<p>Se sei sotto-sviluppato quando grav-bladi, ridevelopano e resti in loop. Da posizione di vantaggio, è dura rimontare: prendi un intero turno extra di swing.</p>" },
        { t:"Mulligan", video:"v11",
          c:"<p>Vuoi <strong>weenie ripetuti</strong> (Elijah senza certezza al 100%). Nota storica: andando secondi, il doppio Luna era snap keep nell'era 2-Luna — oggi la lista è passata a 3 Gravity Blade.</p>" }
      ],
      blueprints: [],
      comePerdi: "<p>Sparando la Gravity Blade da sotto-sviluppato (loro ridevelopano e resti nel loop), o lasciando che il loro board multi-turno si accumuli senza risposta mentre giochi passivo.</p>",
      conflitti: ["gb-copie"]
    }
  },

  // --------------------------------------------------------------------------
  // CONFLITTI — dove le voci si sono contraddette. VALE LA PIÙ RECENTE.
  // stato: "risolto" | "movimento" | "aperto"
  // --------------------------------------------------------------------------
  conflitti: [
    { id:"brook", tema:"Brook: dentro o fuori?", stato:"risolto",
      attuale:"<strong>1× in lista</strong>, accanto a 2 Boa («2 Boa, 1 Brook»)", attualeVideo:"v16",
      tappe:[
        { video:"v11", pos:"Elijah lo vuole ma non trova lo slot: «se fosse un torneo con decklist aperte, giocherei Brook di sicuro»." },
        { video:"v12", pos:"Impact lo BOCCIA: «Brook fa schifo» — Boa finisce quasi sempre neutralizzata (mirror e Nami la freezano col Galdino, Enel la uccide, Teach la redirige); servirebbe solo vs Rosinante, già vinto col terzo Gravity Blade." },
        { video:"v16", pos:"Elijah lo RIABILITA: «Sono più un fan di Brook adesso — 2 Boa, 1 Brook. Non vuoi mai pescarne due, ma la prima è buona». E Brook+Boa è diventato l'OTK più affidabile del deck (ignora Perona).", vale:true }
      ],
      nota:"L'esempio perfetto della regola: la bocciatura di Impact era vera nel suo momento, ma la parola più recente (Elijah, deck breakdown) lo rimette in lista. Vale: Brook 1×." },

    { id:"gb-copie", tema:"Gravity Blade: quante copie?", stato:"risolto",
      attuale:"<strong>3× — «the new norm»</strong>", attualeVideo:"v16",
      tappe:[
        { video:"v11", pos:"1× GB + 2 Luna: GB è dead vs Enel (per questo 1-of), ma «se ti aspetti tanti mirror, giocane multiple — è una delle carte singole più forti del mirror»." },
        { video:"v12", pos:"GB promossa a pieni voti: broken nel mirror, vs Nami e vs Rosinante; inutile solo vs Teach (già vinto) e situazionale vs Enel (ma il trigger vale)." },
        { video:"v16", pos:"«Tre Gravity Blade, la nuova norma» — il gruppo di Elijah gioca 3 GB: polarizzante nel mirror (vuoi vederla presto), super buona vs Rosinante e la prima vs Nami. Senza i rendimenti calanti della quarta.", vale:true }
      ],
      nota:"Da 1 copia a 3 in tre video. Vale: 3×." },

    { id:"luna", tema:"Electrical Luna: gioca o taglia?", stato:"risolto",
      attuale:"<strong>OUT</strong> — sostituita dalla scalata di Gravity Blade", attualeVideo:"v16",
      tappe:[
        { video:"v09", pos:"Impact l'aveva già tagliata (con All Out): «non aiuta nel matchup Enel — e se non aiuta nel matchup più difficile, in quale lo fa?». Nelle partite osservate le Lune avversarie non hanno mai inciso." },
        { video:"v11", pos:"Elijah la difende: 2× — «Luna è molto, molto, molto buona contro Nami. Luna ti vince le partite contro Nami». GB peggiore di Luna proprio vs Nami." },
        { video:"v12", pos:"Impact dà la risposta definitiva: <strong>Gravity Blade &gt; Luna</strong> — rimozione permanente batte stun temporaneo di un turno che spesso si scarica a vuoto." },
        { video:"v16", pos:"Il gruppo di Elijah passa a 3 Gravity Blade: Luna esce anche dalla sua lista.", vale:true }
      ],
      nota:"Elijah stesso ha abbandonato la posizione pro-Luna. Vale: OUT." },

    { id:"nami-dado", tema:"vs Nami: primi o secondi?", stato:"risolto",
      attuale:"<strong>SECONDI — con Gravity Blade in lista</strong>", attualeVideo:"v12",
      tappe:[
        { video:"v09", pos:"Secondi: andare secondi forza Nami fuori da Robin al turno dei 7 DON!! con una board larga — il suo turno diventa debole (Marco + swing 7)." },
        { video:"v10", pos:"Rivisto: PRIMI — se Nami va prima può usare la sua Gravity Blade per KOare i pezzi della combo Buggy+Prisoner prima che li sviluppi." },
        { video:"v12", pos:"Posizione finale: SECONDI, ora che la GB è in lista. Nami prima non può giocare Robin al 7 (troppi poke) → turno debole → la tua GB pulisce → il loro turno dopo non ha swing. «Se becco la GB su uno dei loro turni a 7 DON, la partita è finita.»", vale:true }
      ],
      nota:"Attenzione alla condizione: la scelta «secondi» presuppone Gravity Blade in lista. Se non la giochi, il ragionamento del video 2 (primi) torna valido." },

    { id:"boa-copie", tema:"Boa Hancock: 2 o 3 copie?", stato:"risolto",
      attuale:"<strong>2×</strong> (entrambe le voci allineate)", attualeVideo:"v16",
      tappe:[
        { video:"v12", pos:"Impact gioca 2 («il più grande hater di Boa di sempre»): si vincono partite senza mai calarla. Nota: all'epoca Elijah preferiva 3." },
        { video:"v16", pos:"Elijah scende a 2: «2 Boa, 1 Brook» — il terzo slot da finisher va a Brook.", vale:true }
      ],
      nota:"Convergenza completa: 2 Boa + 1 Brook." },

    { id:"jinbe", tema:"Jinbe: bocciato o recuperabile?", stato:"movimento",
      attuale:"<strong>In riconsiderazione</strong> come 12° 2k / corpo di consistenza", attualeVideo:"v16",
      tappe:[
        { video:"v11", pos:"Elijah lo boccia secco: «Non voglio proprio Jinbe. Voglio che quei Jinbe siano Galdini» — non si rimpiazza, non fa nulla di rilevante al suo costo." },
        { video:"v16", pos:"Elijah ci ripensa: lo CONSIDERA «per aiutare la consistenza — un corpo extra nell'early, il 12° 2k».", vale:true }
      ],
      nota:"Non più bocciato secco: in test. Legato al dubbio «11 o 12 2k» che Elijah dichiara aperto." },

    { id:"missolive", tema:"Miss Olive: consistente o inutile?", stato:"risolto",
      attuale:"<strong>OUT</strong> — sparita dalle liste: non la gioca più nessuno", attualeVideo:null,
      tappe:[
        { video:"v09", pos:"Impact & Noob la scoprono: «il miglior modo per guadagnare un turno extra nel mazzo» + garantisce un 2k via combo Buggy+Prisoner." },
        { video:"v10", pos:"Promossa dopo la sessione: «buona in quasi tutte le partite» — hanno vinto un mirror senza mai calare Buggy grazie a lei." },
        { video:"v11", pos:"Elijah è scettico: «l'ho pescata 25 volte, l'ho messa sul board zero volte». Capisce la teoria (trova counter, evita hard-block), non la vede in pratica. «Sono aperto a sbagliarmi.»" },
        { chi:"DAL CAMPO", pos:"Il meta ha deciso (luglio 2026): <strong>non la gioca più nessuno</strong>. La nicchia teorizzata da Impact & Noob non si è mai concretizzata nelle liste — la lettura di Elijah era quella giusta.", vale:true }
      ],
      nota:"Tra i video la recenza non bastava (due persone diverse, nessuna ritrattazione) — ha chiuso il campo: fuori dalle liste, 100%." },

    { id:"dmg", tema:"Dead Man's Game: inaffidabile o OTK?", stato:"movimento",
      attuale:"<strong>Rivalutato: è l'OTK n.2 del deck</strong> (DMG + Galdino, di fatto gratis con due 6k)", attualeVideo:"v16",
      tappe:[
        { video:"v12", pos:"Impact: ok ma meno affidabile del restand — «sorprendentemente è più facile montare il restand OTK che soddisfare le condizioni di Dead Man's»." },
        { video:"v16", pos:"Elijah lo inserisce tra i tre OTK del deck: con due corpi 6k stickati, DMG+Galdino è «di fatto GRATIS» — recuperi tutti i DON!! e ne hai 10 per swingare fuori.", vale:true }
      ],
      nota:"Non contraddizione frontale ma rivalutazione: da piano B scomodo a linea codificata." }
  ],

  // --------------------------------------------------------------------------
  // LA LISTA — verdetto ATTUALE carta per carta (stato al video più recente)
  // stato: "in" | "out" | "test" | "aperto"
  // --------------------------------------------------------------------------
  lista: [
    { key:"gravityblade", nome:"Gravity Blade", stato:"in", copie:"3×", video:"v16", conflitto:"gb-copie",
      attuale:"«The new norm»: polarizzante nel mirror, game-winner vs Rosinante, la prima è ottima vs Nami. Sparala sempre col board già sviluppato.",
      storia:"1× + 2 Luna → «GB > Luna» → 3×" },
    { key:"hancock", nome:"Boa Hancock", stato:"in", copie:"2×", video:"v16", conflitto:"boa-copie",
      attuale:"Il perno del board control (rende triviale swingare sopra i loro corpi) e metà dell'OTK con Brook. Ma 2 copie bastano: si vincono partite senza mai calarla.",
      storia:"Impact 2× / Elijah 3× → convergenza su 2×" },
    { key:"brook", nome:"Brook", stato:"in", copie:"1×", video:"v16", conflitto:"brook",
      attuale:"«Più fan di Brook adesso»: Brook+Boa è l'OTK più affidabile del deck (ignora Perona). Non vuoi mai pescarne due — la prima è buona.",
      storia:"voluto ma senza slot → bocciato da Impact → riabilitato 1×" },
    { key:"luna", nome:"Electrical Luna", stato:"out", copie:"0×", video:"v16", conflitto:"luna",
      attuale:"Fuori: stun temporaneo battuto dalla rimozione permanente. Non aiutava vs Enel, e la sua nicchia (Nami) è coperta meglio dalla GB.",
      storia:"tagliata da Impact → difesa da Elijah (2×) → fuori anche da Elijah" },
    { key:"jinbe", nome:"Jinbe (2c)", stato:"test", copie:"0-1×", video:"v16", conflitto:"jinbe",
      attuale:"In riconsiderazione come 12° 2k per la consistenza — dopo essere stato bocciato senza appello.",
      storia:"«voglio che quei Jinbe siano Galdini» → riconsiderato" },
    { key:"missolive", nome:"Miss Olive", stato:"out", copie:"0×", video:null, conflitto:"missolive",
      attuale:"Fuori: non la gioca più nessuno. Impact & Noob l'avevano promossa in ladder, ma la nicchia non si è mai concretizzata — Elijah («pescata 25 volte, giocata 0») aveva ragione, e il campo ha chiuso il dibattito.",
      storia:"promossa (Impact & Noob) ↔ scettico (Elijah) → sparita dal meta" },
    { key:"rushluffy", nome:"Rush Luffy (4c)", stato:"test", copie:"0-2×", video:"v12",
      attuale:"Entrambi la amano («that card is nuts» — Elijah; «I like Rush Luffy a lot» — Impact) ma è IL brick assoluto a fine partita. Impact non trova lo slot; Elijah ne vorrebbe 1-2. Stabilizza il turno 4-5 DON!! («10 hit sul quattro»).",
      storia:"desiderata da entrambi, frenata dal rischio brick" },
    { key:"mr3", nome:"Galdino 4c (freeze)", stato:"in", copie:"1×", video:"v10",
      attuale:"Broken in singola copia («all the Galdino cards are broken»), problematico in doppia: «quando ho iniziato a pescarne due, ho iniziato a odiarli». Vs Teach: skip lo slam, meglio l'extra swing.",
      storia:"confermato 1-of" },
    { key:"galdinorest", nome:"Galdino 2c (rest)", stato:"in", copie:"1×", video:"v11",
      attuale:"«Se fosse un 2k sarebbe un 4-of al 100%»: resetta il Borsalino/Boa avversario per ~0 DON!! netti, e fa da 5° nome per il restand. 1× solo per mancanza di spazio.",
      storia:"1-of desiderato in più copie" },
    { key:"luffy1c", nome:"Luffy 1c (personaggio)", stato:"in", copie:"core", video:"v16",
      attuale:"Da NON tagliare (senza, manca il mid-range play e il 6k extra nei momenti chiave) — ma è «il peggiore dei tre 2-drop»: spesso un 1-cost da 3k se non curi i nomi in campo.",
      storia:"«non va tagliato» → «il peggiore dei tre», ma resta core" },
    { key:"crocodile", nome:"Crocodile (4c)", stato:"aperto", copie:"3-4×", video:"v11",
      attuale:"Elijah va avanti e indietro: i due fail-mode del deck sono «niente 2-drop» (e Croc è un brick) e «troppi brick a fine game» (e Croc è il brick più difficile da smaltire). Top 4 Mexico giocava 3; le stats dicono 4.",
      storia:"3 vs 4: dilemma dichiarato aperto" },
    { key:"gumgumrain", nome:"Gum-Gum Rain", stato:"test", copie:"0-1×", video:"v11",
      attuale:"«Hedge contro i brick» / conta come 12° 2k. Ha senso soprattutto se tagli Luffy 1c (riduci già i brick); se lo tieni, non servono due hedge diversi.",
      storia:"mai vista giocare in sessione, ma difesa in teoria" },
    { key:"ivankov3c", nome:"Ivankov 3c", stato:"in", copie:"tech", video:"v12",
      attuale:"Ridondanza per il turno 3 andando primi: la ricerca «non colpisce mai» (~26% reale) e va bene così — è comunque un 4k che swinga e pesca, difficile da punire. Se colpisce, spesso vinci sul posto.",
      storia:"rivalutato da Impact come collante di curva" },
    { key:"dmg", nome:"Dead Man's Game", stato:"in", copie:"1×", video:"v16", conflitto:"dmg",
      attuale:"OTK n.2 del deck: con due corpi 6k stickati è di fatto gratis (recuperi tutti i DON!!) — 10 DON!! per swingare fuori con Galdino.",
      storia:"«meno affidabile del restand» → codificato tra i tre OTK" },
    { key:"navyhq", nome:"Let's Go! To the Navy HQ", stato:"in", copie:"core", video:"v12",
      attuale:"L'OTK n.3: 5 nomi diversi, ~8 hit che scalano con Boa. Sorpresa di Impact: è PIÙ facile montare il restand OTK che le condizioni di Dead Man's.",
      storia:"win condition storica, confermata" },
    { key:"jetculverin", nome:"Jet Culverin", stato:"test", copie:"tech", video:"v16",
      attuale:"Tech anti-Enel («il modo più facile di rimuovere Rau») con utility extra nel mirror (colpisce Croc/Daz Bones rested).",
      storia:"nuova entrata nel deck breakdown di Elijah" },
    { key:"houndblaze", nome:"Hound Blaze", stato:"out", copie:"0×", video:"v11",
      attuale:"«Trash. Don't play it.» — Elijah, senza discussione.",
      storia:"bocciata e mai più menzionata" }
  ],

  notaLista: "Il dubbio dichiarato ancora aperto da Elijah nel video più recente: giocare 11 o 12 counter da 2k. Jinbe e Gum-Gum Rain sono i candidati al 12° slot."
};
