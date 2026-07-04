// Dati matchup "field" — i 7 matchup fuori dai 6 meta principali
// Fonti: Raphterra (Guida Metafy, Cap. 8 + Cap. 6) · Adam "RayDeospirata" (intervista post Top 8 Mexico)
window.DATA = window.DATA || {}; window.DATA.matchups = window.DATA.matchups || {};

// ============================================================
// RED BLUE LUCY (OP16-002)
// ============================================================
window.DATA.matchups["lucy"] = {
  id: "lucy", nome: "Lucy (Sabo)", sigla: "RB Lucy", colore: "Rosso/Blu", colorHex: "#FF6B8A", leaderImg: null, tier: "field",
  tagline: "Loro rimuovono una minaccia a turno, tu ne giochi due: la board wide li mette fuori passo.",
  verdetti: [
    { fonte: "raphterra", label: "Favorito", pos: 1.5, winrate: null, dado: "secondo", nota: "Andare secondi rompe la loro curva preferita di concatenare 4C Cavendish o 4C Bartolomeo consecutivi in 7C Sabo, e gli nega la pescata del primo turno: più facile metterli sotto pressione sulle risorse in early." }
  ],
  consenso: [
    "Piano wide standard: due o più personaggi a turno e attacchi continui a 6k o più — RB Lucy fatica a difendersi dalla pressione costante a 6000.",
    "Le loro removal sono affidabili ma in genere tolgono una sola minaccia per turno: una board molto ampia li lascia sempre indietro.",
    "Nel late game congela la loro board con i freeze event, ma tieni SEMPRE in conto un possibile <strong>10C Roger</strong> per non buttare il vantaggio."
  ],
  dibattiti: [],
  gameplan: {
    early: "<ul><li><strong>Curva bassa:</strong> gioca i personaggi da 1 e 2 costi per costruire una board ampia.</li><li><strong>Mulligan:</strong> cerca <strong>1C Luffy</strong>, <strong>2C Bon Clay</strong>, <strong>2C Daz Bones</strong>.</li><li><strong>Weenies al sicuro:</strong> se l'avversario non sviluppa personaggi piccoli in early, i tuoi weenies restati assorbono in sicurezza gli attacchi del loro leader.</li></ul>",
    mid: "<ul><li><strong>Curva mid:</strong> transiziona nel package <strong>5C Buggy + 6C Prisoner of Impel Down</strong>, poi <strong>7C Boa</strong> per mantenere la pressione.</li><li><strong>Spam di 6k sul leader:</strong> se gli manca la Stage, faticano a proteggersi perché il mazzo esaurisce in fretta i 2k counter.</li><li><strong>Freeze:</strong> congela <strong>7C Sabo</strong> e <strong>4C Cavendish</strong> con <strong>7C Boa</strong> e <strong>4C Galdino</strong> mentre continui ad attaccare wide.</li></ul>",
    late: "<ul><li><strong>Freeze finale:</strong> usa i freeze event per bloccare la loro board.</li><li><strong>Rispetto per Roger:</strong> se li hai portati a 0 vite presto, calcola ogni difesa contro un potenziale turno <strong>10C Roger</strong> e gioca difensivo per non perdere di colpo.</li><li><strong>Piano alternativo:</strong> se serve, tienili a 1 vita e riduci prima le carte in mano attaccando la loro board.</li></ul>"
  },
  leaderText: "<p>Lucy (Dressrosa / Armata Rivoluzionaria) — 5000 power, 4 vite, Rosso/Blu.</p><ul><li><strong>In battaglia:</strong> «[Quando attacca / Quando l'avversario attacca] Puoi scartare un qualsiasi numero di carte Evento o Stage dalla tua mano: questo Leader guadagna +1000 power durante questa battaglia per ogni carta scartata.»</li><li><strong>Pescata:</strong> «[Activate:Main / Una volta per turno] Se durante questo turno hai attivato una carta Evento con costo base 3 o più, pesca 1 carta.»</li></ul>",
  carteAvversarie: [
    { nome: "7C Sabo", nota: "La loro minaccia/blocker chiave: freezalo con 7C Boa e 4C Galdino. Se lo usano per bloccare i tuoi attacchi, puniscilo con 3C Electrical Luna o 1C All Out per tenerlo restato e congelato anche il turno dopo." },
    { nome: "4C Cavendish", nota: "Pezzo della loro curva ideale verso 7C Sabo; da freezare insieme a Sabo mentre continui ad attaccare." },
    { nome: "4C Bartolomeo", nota: "L'altro 4 costi della catena on-curve in 7C Sabo: andare secondi la spezza." },
    { nome: "1C Viola", nota: "Uno dei loro principali 2k counter, ma spesso preferiscono giocarla sul campo come searcher e corpo piccolo invece di tenerla in mano per difendersi." },
    { nome: "7C Flame Flame Fruit", nota: "Abilita gli swing aggressivi in Double Attack del leader: lascia DON!! aperti per impedire che il Double Attack connetta." },
    { nome: "10C Roger", nota: "Lethal a sorpresa: la loro win condition primaria è Double Attack col leader via Flame Flame Fruit seguito da Roger per la spinta finale. Calcola sempre le difese contro un possibile turno Roger." },
    { nome: "Stage (Lucy)", nota: "Senza la loro carta Stage faticano molto a proteggersi dai 6k continui: il mazzo finisce presto i 2k counter." }
  ],
  perFonte: [
    {
      fonte: "raphterra", origine: "Cap. 8.1 + Cap. 6",
      sezioni: [
        { titolo: "Verdetto e turn order", html: "<p><strong>Favorability: Favored.</strong> Turn order: <strong>vai secondo</strong>.</p><ul><li><strong>Perché secondo:</strong> disturba la loro curva preferita di concatenare <strong>4C Cavendish</strong> o <strong>4C Bartolomeo</strong> consecutivi in <strong>7C Sabo</strong>.</li><li><strong>Bonus risorse:</strong> gli nega la pescata del primo turno, rendendo più facile metterli sotto pressione sulle risorse in early.</li></ul>" },
        { titolo: "Mulligan", html: "<p>Priorità: <strong>1C Luffy</strong>, <strong>2C Bon Clay</strong>, <strong>2C Daz Bones</strong>.</p>" },
        { titolo: "Macro gameplan", html: "<ul><li><strong>Strategia wide standard:</strong> schiera due o più personaggi per turno.</li><li><strong>Soglia d'attacco:</strong> attacca frequentemente a 6k o superiore — <strong>Red Blue Lucy</strong> può faticare a difendersi dalla pressione continua a 6k.</li><li><strong>Late game:</strong> usa i freeze event per bloccare la loro board, tenendo conto di un potenziale <strong>10C Roger</strong> per non perdere il vantaggio.</li></ul>" },
        { titolo: "Curva e presenza sulla board", html: "<ul><li><strong>Sequenza di curva:</strong> gioca i personaggi da 1 e 2 costi in early per costruire una board ampia. Transiziona nel package <strong>5C Buggy + 6C Prisoner of Impel Down</strong> nel mid-game, seguito da <strong>7C Boa</strong> per mantenere la pressione.</li><li><strong>Vantaggio weenie:</strong> se l'avversario non sviluppa personaggi piccoli in early, i tuoi piccoli restati possono assorbire in sicurezza gli attacchi del loro leader.</li><li><strong>Removal sopraffatte:</strong> Lucy ha removal affidabili ma in genere può rimuovere solo un personaggio per turno. Costruire una board molto ampia garantisce che non riescano a tenere il passo con le tue minacce.</li></ul>" },
        { titolo: "Pressione sulle risorse", html: "<ul><li><strong>Spam di attacchi 6k:</strong> punta il leader con 6k consecutivi. Se all'avversario manca la carta Stage, faticherà a proteggersi perché il loro mazzo esaurisce naturalmente in fretta i 2k counter.</li><li><strong>1C Viola:</strong> è uno dei loro 2k counter principali, ma spesso preferiscono giocarla sul campo come searcher e corpo piccolo invece di tenerla in mano per la difesa.</li></ul>" },
        { titolo: "Controllo board e freeze", html: "<ul><li><strong>Stallare le minacce ad alto costo:</strong> usa <strong>7C Boa</strong> e <strong>4C Galdino</strong> per freezare i loro <strong>7C Sabo</strong> e <strong>4C Cavendish</strong> mentre continui ad attaccare con la tua board wide.</li><li><strong>Punire i blocchi:</strong> se l'avversario usa <strong>7C Sabo</strong> per bloccare i tuoi attacchi, puoi usare i freeze event come <strong>3C Electrical Luna</strong> e <strong>1C All Out</strong> per tenerlo restato e congelato nel loro turno successivo.</li></ul>" },
        { titolo: "Consapevolezza difensiva", html: "<ul><li><strong>Gestire Double Attack e Roger:</strong> la loro win condition primaria è lo swing aggressivo in Double Attack del leader via <strong>7C Flame Flame Fruit</strong>, seguito da un <strong>10C Roger</strong> per una spinta lethal a sorpresa. Assicurati di lasciare DON!! aperti per impedire che un Double Attack connetta.</li><li><strong>Giocare intorno a 10C Roger:</strong> se li riduci a 0 vite presto, calcola sempre le tue difese contro un potenziale turno <strong>Roger</strong> e gioca difensivo per evitare una sconfitta improvvisa. Se serve, puoi tenerli a 1 vita e ridurre prima le carte in mano attaccando la loro board.</li></ul>" },
        { titolo: "Tech card", html: "<ul><li><strong>3C Electrical Luna / 1C All Out:</strong> per freezare la loro board e tenere bloccate le minacce restate.</li></ul>" },
        { titolo: "Posizionamento nel meta (Cap. 6)", html: "<p>Nel Cap. 6, <strong>Red-Blue Lucy</strong> è uno dei sei mazzi attorno a cui ruota il formato OP16, e figura tra i matchup <strong>Favored</strong> di UG Luffy contro i top tier.</p>" }
      ]
    }
  ],
  timeline: null
};

// ============================================================
// RED BLUE ACE (OP13-002)
// ============================================================
window.DATA.matchups["rbace"] = {
  id: "rbace", nome: "Portgas D. Ace (RB)", sigla: "RB Ace", colore: "Rosso/Blu", colorHex: "#FF7A5C", leaderImg: null, tier: "field",
  tagline: "Leader 6000 con 3 vite: i tuoi personaggi attaccano comunque a 6k, e la corsa la vinci tu.",
  verdetti: [
    { fonte: "raphterra", label: "Leggermente favorito", pos: 0.75, winrate: null, dado: "secondo", nota: "Andare secondi nega la loro sequenza on-curve preferita: 8C I am Whitebeard seguito da 10C Newgate." }
  ],
  consenso: [
    "Vai wide dal turno uno: il power base 6000 di RB Ace non è un problema, perché tutti i tuoi personaggi attaccano a 6k senza sforzo.",
    "Aggro attraverso il mid-game, portali a 0 vite il più in fretta possibile, poi chiudi con <strong>7C Boa + 6C Brook</strong>.",
    "Non andare in tunnel vision su <strong>7C Boa</strong>: RB Ace ora gioca <strong>6C Boa</strong> e <strong>4C Galdino</strong> per freezare le tue carte — tieni pronte le win condition alternative."
  ],
  dibattiti: [],
  gameplan: {
    early: "<ul><li><strong>Curva bassa:</strong> curve out con i personaggi da 2 costi.</li><li><strong>Mulligan:</strong> <strong>1C Luffy</strong>, <strong>2C Bon Clay</strong>, <strong>2C Daz Bones</strong>, oppure il package <strong>5C Buggy + 6C Prisoner of Impel Down</strong>.</li><li><strong>Erosione della mano:</strong> con una mano aggro early e lo spam di 6k gli eroderai la mano rapidamente.</li></ul>",
    mid: "<ul><li><strong>Curva mid:</strong> prosegui in <strong>5C Buggy + 6C Prisoner of Impel Down</strong>, poi <strong>7C Boa</strong>.</li><li><strong>Buchi di DON!!:</strong> sfrutta i turni in cui non hanno DON!! attaccati al leader: saranno costretti a counterare più attacchi, altrimenti perdono la pescata dell'abilità leader.</li></ul>",
    late: "<ul><li><strong>Finisher:</strong> chiudi con <strong>7C Boa + 6C Brook</strong>.</li><li><strong>Piano B:</strong> se <strong>7C Boa</strong> viene disabilitata (loro <strong>6C Boa</strong> e <strong>4C Galdino</strong>), pivota su <strong>2C Galdino</strong> + attaccanti 6k + il board restand event.</li><li><strong>Piano C:</strong> setup di <strong>2C Bon Clay</strong> che attacca due volte con <strong>6C Brook</strong> come win condition.</li></ul>"
  },
  leaderText: "<p>Portgas.D.Ace (Pirati di Barbabianca) — 6000 power, 3 vite, Rosso/Blu.</p><ul><li><strong>In difesa:</strong> «[Quando l'avversario attacca / Una volta per turno] Puoi scartare 1 carta dalla tua mano: fino a 1 Leader o Personaggio avversario riceve -2000 power durante questa battaglia.»</li><li><strong>Pescata:</strong> «[DON!! x1 / Una volta per turno] Quando ricevi danno o un tuo Personaggio con power base 6000 o più viene messo K.O., pesca 1 carta.»</li></ul>",
  carteAvversarie: [
    { nome: "8C I am Whitebeard", nota: "Metà del loro power play on-curve (in 10C Newgate): andare secondi lo nega. Buffa anche il leader, ma 2C Bon Clay copia il power del leader e attacca comunque in modo efficiente." },
    { nome: "10C Newgate", nota: "Il follow-up on-curve. Nel late game 4C Rush Luffy lo mette in rest." },
    { nome: "7C Zoro", nota: "Altro buff al loro leader: anche qui 2C Bon Clay resta efficiente (valuta di salvarne l'attacco o di rimbalzarlo e rigiocarlo con 4C Crocodile)." },
    { nome: "6C Boa", nota: "Freeza le tue carte — uno dei motivi per non fissarti su 7C Boa. 7C Gravity Blade la manda in fondo al mazzo." },
    { nome: "4C Galdino", nota: "L'altro pezzo freeze che può disabilitare la tua 7C Boa: tieni pronto il pivot sulle win condition alternative." },
    { nome: "4C Marco", nota: "Bersaglio da bottom-deck con 7C Gravity Blade." }
  ],
  perFonte: [
    {
      fonte: "raphterra", origine: "Cap. 8.2",
      sezioni: [
        { titolo: "Verdetto e turn order", html: "<p><strong>Favorability: Slightly Favored.</strong> Turn order: <strong>vai secondo</strong>. Andare secondi nega la loro sequenza on-curve preferita di giocare <strong>8C I am Whitebeard</strong> seguito da <strong>10C Newgate</strong>.</p>" },
        { titolo: "Mulligan", html: "<p>Priorità: <strong>1C Luffy</strong>, <strong>2C Bon Clay</strong>, <strong>2C Daz Bones</strong>, oppure il package <strong>5C Buggy + 6C Prisoner of Impel Down</strong>.</p>" },
        { titolo: "Macro gameplan", html: "<p>Vai wide dal turno uno. Red Blue Ace gira su un power base di 6k, ma non è un problema: tutti i tuoi personaggi possono attaccare a 6k senza difficoltà. Aggro attraverso il mid-game, spingili a 0 vite il più in fretta possibile, poi chiudi con la finisher <strong>7C Boa + 6C Brook</strong>.</p>" },
        { titolo: "Curva early game", html: "<ul><li><strong>Pressione 6k:</strong> i leader da 6k power sono avversari comodi, perché la maggior parte dei tuoi personaggi attacca comunque a 6k. Se parti con una mano aggro e spammi 6k, gli eroderai la mano rapidamente.</li><li><strong>Sequenza di curva:</strong> 2 costi in early, poi <strong>5C Buggy + 6C Prisoner of Impel Down</strong>, poi <strong>7C Boa</strong>.</li></ul>" },
        { titolo: "Interazioni chiave", html: "<ul><li><strong>Uso di 2C Bon Clay:</strong> valuta di conservarne l'attacco, o di rimbalzarlo e rigiocarlo con <strong>4C Crocodile</strong>: può comunque attaccare il leader in modo efficiente anche se l'avversario buffa il leader con <strong>7C Zoro</strong> o <strong>8C I am Whitebeard</strong>.</li><li><strong>Win condition alternative:</strong> non andare in tunnel vision solo su <strong>7C Boa</strong>. Red Blue Ace ora gioca <strong>6C Boa</strong> e <strong>4C Galdino</strong> per freezare le carte avversarie. Se <strong>7C Boa</strong> viene disabilitata, pivota su <strong>2C Galdino</strong> + attaccanti 6k + il board restand event, oppure prepara <strong>2C Bon Clay</strong> che attacca due volte con <strong>6C Brook</strong> come win condition.</li></ul>" },
        { titolo: "Sfruttare i buchi di DON!!", html: "<ul><li><strong>Finestre dell'abilità leader:</strong> approfitta dei turni in cui non hanno DON!! attaccati al leader: saranno costretti a counterare fuori da più attacchi, perché altrimenti perdono la pescata dell'abilità leader.</li></ul>" },
        { titolo: "Tech card", html: "<ul><li><strong>7C Gravity Blade:</strong> manda in fondo al mazzo i loro <strong>4C Marco</strong> e <strong>6C Boa</strong>.</li><li><strong>4C Rush Luffy:</strong> mette in rest il loro <strong>10C Newgate</strong> nel late game.</li></ul>" }
      ]
    }
  ],
  timeline: null
};

// ============================================================
// RED SHANKS (OP09-001)
// ============================================================
window.DATA.matchups["shanks"] = {
  id: "shanks", nome: "Shanks", sigla: "Red Shanks", colore: "Rosso", colorHex: "#FF5466", leaderImg: null, tier: "field",
  tagline: "Tanti brick, pochi counter: portali a 0 vite prima che vedano mai i 10 DON!!.",
  verdetti: [
    { fonte: "raphterra", label: "Leggermente favorito", pos: 0.75, winrate: null, dado: "secondo", nota: "Vuoi andare secondo per ritardare il loro turno a 10 DON!! e quindi il power play 5C Beckman + 10C Shanks." },
    { fonte: "adam", label: "Favorito", pos: 1.5, winrate: null, dado: null, nota: "Vai wide, loro brikkano. Se NON brikkano in early e arrivano a 10 DON!! diventa complicato; ma se riesci ad andare wide in early, stai bene. In Swiss a Mexico (Saturday R2): match molto confortevole, wide board, avversario brikkato." }
  ],
  consenso: [
    "Entrambe le fonti lo danno dalla tua parte: Red Shanks gira con molti brick e finisce in fretta i counter contro un aggro che si allarga rapidamente.",
    "La finestra è tutta lì: se vai wide presto, spesso li porti a 0 vite prima ancora che raggiungano il turno a 10 DON!! e i loro boss.",
    "Se invece non brikkano e arrivano vivi ai 10 DON!! (5C Beckman + 10C Shanks), la partita si complica."
  ],
  dibattiti: [],
  gameplan: {
    early: "Piano wide standard. Mulligan per <strong>1C Luffy</strong>, <strong>2C Bon Clay</strong>, <strong>2C Daz Bones</strong>, oppure la combo <strong>5C Buggy + 6C Prisoner of Impel Down</strong>. Gioca on curve e continua a swingare 6k: osserva come counterano, è facile leggerli una volta rimasti senza counter e capitalizzare.",
    mid: "Tassa la mano con 6k ripetuti: a 6k non ottengono mai il counter gratis dell'abilità leader (-1000). Una volta che l'hanno già usata nel turno, puoi valutare swing a 5k. Andando secondo, spesso li porti a 0 vite prima che arrivino ai 10 DON!!. Gestisci <strong>4C Lucky Roo</strong> con <strong>4C Rush Luffy</strong> (lo resta, non blocca) o <strong>7C Gravity Blade</strong> (bottom-deck).",
    late: "A 0 vite, chiudi con <strong>6C Brook</strong> per attaccare due volte, idealmente con <strong>7C Boa</strong>: a quel punto dovrebbero essere senza counter e di solito qualsiasi personaggio basta a finirli prima che stabilizzino coi boss."
  },
  leaderText: "Shanks (I Quattro Imperatori / Pirati del Rosso) — 5000 power, 5 vite, Rosso. «[Una volta per turno] Puoi attivare questo effetto quando l'avversario attacca: fino a 1 Leader o Personaggio avversario riceve -1000 power per il turno.»",
  carteAvversarie: [
    { nome: "5C Beckman", nota: "Metà del loro power play a 10 DON!! (con 10C Shanks): andare secondi lo ritarda di un turno." },
    { nome: "10C Shanks", nota: "Il boss con cui vorrebbero stabilizzare: l'obiettivo è che non arrivino mai vivi a giocarlo." },
    { nome: "4C Lucky Roo", nota: "Il loro strumento principale per rallentare la tua aggressione: usalo come bersaglio di 4C Rush Luffy (lo resta e non blocca) o di 7C Gravity Blade (bottom-deck, insieme agli altri personaggi early-mid)." }
  ],
  perFonte: [
    {
      fonte: "raphterra", origine: "Cap. 8.3 + Cap. 6",
      sezioni: [
        { titolo: "Verdetto e turn order", html: "<p><strong>Favorability: Slightly Favored.</strong> Turn order: <strong>vai secondo</strong>, per ritardare il loro turno a 10 DON!! e quindi il power play <strong>5C Beckman + 10C Shanks</strong>.</p>" },
        { titolo: "Mulligan", html: "<p>Priorità: <strong>1C Luffy</strong>, <strong>2C Bon Clay</strong>, <strong>2C Daz Bones</strong>, oppure la combo <strong>5C Buggy + 6C Prisoner of Impel Down</strong>.</p>" },
        { titolo: "Macro gameplan", html: "<p>Segui il gameplan normale: vai wide e attacca con molteplici 6k dalla board ampia. Red Shanks gira con molti brick e tende a finire in fretta i counter contro un aggro che si allarga velocemente. Andando secondo, spesso li metti a 0 vite prima ancora che raggiungano il turno a 10 DON!!. Da lì, <strong>7C Boa</strong> o qualsiasi altro personaggio li finisce prima che possano stabilizzare con le loro boss card.</p>" },
        { titolo: "Sequenza d'attacco", html: "<ul><li><strong>Colpire a 6k:</strong> attaccali ripetutamente a 6k, così non ottengono un counter gratis dall'abilità leader. Una volta che l'hanno già usata, puoi valutare swing a 5k.</li><li><strong>Giocare on curve:</strong> resta sulla curva e continua a swingare 6k. Osserva come l'avversario countera: è abbastanza facile leggerlo quando è rimasto senza counter, e a quel punto puoi capitalizzare.</li></ul>" },
        { titolo: "Leggere la scorta di counter", html: "<ul><li><strong>Riconoscere la finestra:</strong> il modo tipico di vincere è tassare ripetutamente la loro mano e portarli a 0 vite prima che arrivino a 10 DON!!, poi usare <strong>6C Brook</strong> per attaccare due volte, idealmente con <strong>7C Boa</strong>. A quel punto dovrebbero essere senza counter, e di solito qualsiasi personaggio basta.</li></ul>" },
        { titolo: "Gestire i loro strumenti difensivi", html: "<ul><li><strong>4C Lucky Roo:</strong> il loro modo principale di rallentare la tua aggressione. Usa <strong>4C Rush Luffy</strong> per metterlo in rest e impedirgli di bloccare, oppure mandalo in fondo al mazzo con <strong>7C Gravity Blade</strong>.</li></ul>" },
        { titolo: "Tech card", html: "<ul><li><strong>4C Rush Luffy:</strong> resta <strong>4C Lucky Roo</strong> per impedirgli di bloccare.</li><li><strong>7C Gravity Blade:</strong> bottom-deck di <strong>4C Lucky Roo</strong> e degli altri personaggi early-mid.</li></ul>" },
        { titolo: "Posizionamento nel meta (Cap. 6)", html: "<p>Fuori dai top tier, <strong>Red Shanks</strong> è elencato tra i matchup favorevoli del mid-tier (insieme a Green Mihawk e Purple Sengoku).</p>" }
      ]
    },
    {
      fonte: "adam", origine: "Intervista Top 8 Mexico — guida ai matchup + record Swiss",
      sezioni: [
        { titolo: "Verdetto: favorito", html: "<p><strong>Favorito.</strong> Vai wide, loro brikkano. Se NON brikkano in early e arrivano a 10 DON!!, diventa complicato. Ma se riesci ad andare wide in early, stai bene.</p>" },
        { titolo: "In torneo", html: "<p>Saturday Round 2 dello Swiss a Mexico City: vittoria in un match <strong>molto confortevole</strong> — wide board, avversario che brikka.</p>" }
      ]
    }
  ],
  timeline: null
};

// ============================================================
// PURPLE SENGOKU (OP16-060)
// ============================================================
window.DATA.matchups["sengoku"] = {
  id: "sengoku", nome: "Sengoku", sigla: "Purple Sengoku", colore: "Viola", colorHex: "#8E6BE8", leaderImg: null, tier: "field",
  tagline: "Tutto il loro mazzo rampa verso i 7 DON!!: tu li ammazzi prima che ci arrivino.",
  verdetti: [
    { fonte: "raphterra", label: "Favorito", pos: 1.5, winrate: null, dado: "secondo", nota: "Secondo è preferito, ma in questo matchup l'ordine di turno conta poco." }
  ],
  consenso: [
    "Purple Sengoku è molto debole in early-mid game: quasi tutte le loro carte servono a rampare in fretta alla soglia dei 7 DON!!, con strumenti trascurabili per fermare la tua aggressione.",
    "Nemmeno il loro power play — tre Admiral giocati dalla mano — fa granché per fermare l'aggressione.",
    "Una volta che sono a poche vite, puoi chiudere come preferisci: restand event, double attack con <strong>6C Brook</strong>, o qualsiasi lethal disponibile in mano."
  ],
  dibattiti: [],
  gameplan: {
    early: "Go wide e aggro. Mulligan per <strong>1C Luffy</strong>, <strong>2C Bon Clay</strong>, <strong>2C Daz Bones</strong>. Segui il piano go-wide normale e attacca con una board ampia di attaccanti da 5k e 6k: non hanno risposte reali all'onslaught iniziale.",
    mid: "Quando finalmente calano gli Admiral da 7 costi, i loro attacchi sono costretti a entrare nei tuoi weenies: tu resti a un totale di vite sano, mentre con ogni probabilità hai già svuotato la loro mano e portato le loro vite in basso.",
    late: "Lethal a scelta: setup con il restand event, oppure portali a poche vite e usa i double attack con <strong>6C Brook</strong> — qualsiasi linea disponibile in mano. Traccia <strong>7C Kuzan</strong> (disabilita i blocker, occhio al loro lethal disperato) e <strong>7C Borsalino</strong> (può farsi blocker: usaci <strong>7C Boa</strong>)."
  },
  leaderText: "Sengoku (Marina) — 5000 power, 5 vite, Viola. «[Activate:Main] Puoi rimettere 8 dei tuoi DON!! attivi nel mazzo DON!!: gioca dalla mano fino a 3 carte Personaggio di tipo [Admiral] con nomi diversi.»",
  carteAvversarie: [
    { nome: "7C Kuzan", nota: "Può disabilitare i blocker: tienilo a mente se l'avversario potrebbe tentare un lethal disperato." },
    { nome: "7C Borsalino", nota: "Può trasformarsi in blocker, ma di solito non è un problema: usa semplicemente 7C Boa su di lui per impedirgli di mettersi in rest, e comunque un singolo blocker non basta a fermare il tuo board restand event nel late game." }
  ],
  perFonte: [
    {
      fonte: "raphterra", origine: "Cap. 8.5 + Cap. 6",
      sezioni: [
        { titolo: "Verdetto e turn order", html: "<p><strong>Favorability: Favored.</strong> Turn order: <strong>secondo</strong> è preferito, ma l'ordine di turno non conta molto in questo matchup.</p>" },
        { titolo: "Mulligan", html: "<p>Priorità: <strong>1C Luffy</strong>, <strong>2C Bon Clay</strong>, <strong>2C Daz Bones</strong>.</p>" },
        { titolo: "Macro gameplan", html: "<p>Go wide e go aggro. Purple Sengoku non riesce davvero a sopravvivere al tuo onslaught iniziale, e nemmeno il loro power play di calare tre Admiral dalla mano fa granché per fermare la tua aggressione.</p>" },
        { titolo: "Dominio early game", html: "<ul><li><strong>Sfruttare la dipendenza dal ramp:</strong> Purple Sengoku è molto debole in early-mid game, perché la maggior parte delle loro carte serve a rampare in fretta alla soglia dei 7 DON!!. Hanno strumenti trascurabili per fermare la tua aggressione: segui il piano go-wide aggro normale e attacca con una board ampia di attaccanti da 5k e 6k.</li><li><strong>Forzare gli attacchi nei weenies:</strong> per quando giocano i loro Admiral da 7 costi, tu sarai ancora a un totale di vite sano, perché i loro attacchi sono forzati nei tuoi weenies — mentre tu con ogni probabilità hai già esaurito la loro mano e li hai messi a poche vite.</li></ul>" },
        { titolo: "Lethal nel late game", html: "<ul><li><strong>Molteplici linee di chiusura:</strong> una volta che sono a poche vite, puoi spesso chiudere come preferisci: setup del lethal con il restand event, portarli a poche vite e usare i double attack con <strong>6C Brook</strong>, o qualsiasi lethal disponibile in mano.</li></ul>" },
        { titolo: "Minacce chiave da tracciare", html: "<ul><li><strong>7C Kuzan:</strong> può disabilitare i blocker — tienilo a mente se l'avversario potrebbe andare per un lethal disperato.</li><li><strong>7C Borsalino:</strong> può trasformarsi in blocker, ma di solito non è un problema: puoi semplicemente usare <strong>7C Boa</strong> su di lui per impedirgli di mettersi in rest, e un singolo blocker non basterà a fermare il tuo board restand event nel late game.</li></ul>" },
        { titolo: "Posizionamento nel meta (Cap. 6)", html: "<p>Fuori dai top tier, <strong>Purple Sengoku</strong> è elencato tra i matchup favorevoli del mid-tier (insieme a Red Shanks e Green Mihawk).</p>" }
      ]
    }
  ],
  timeline: null
};

// ============================================================
// RED ACE (OP16-001)
// ============================================================
window.DATA.matchups["redace"] = {
  id: "redace", nome: "Portgas D. Ace (Red)", sigla: "Red Ace", colore: "Rosso", colorHex: "#FF4D4D", leaderImg: null, tier: "field",
  tagline: "Even sulla carta per Raphterra, incubo assoluto per Adam: 8k rusher ogni turno e zero margine d'errore.",
  verdetti: [
    { fonte: "raphterra", label: "Even", pos: 0, winrate: null, dado: "secondo", nota: "Secondo per togliergli la curva 1C Stage → 6C Vista che pulisce i tuoi weenies: guadagni un turno intero di attacchi prima che Vista possa arrivare." },
    { fonte: "adam", label: "Peggior matchup (meta)", pos: -2, winrate: null, dado: null, nota: "Il peggior matchup in assoluto tra i mazzi giocabili (ma non senza linee). Adam ha highrollato moltissimo e ha vinto UNA partita: «Non ho mai pescato meglio in vita mia: Buggy → Prisoner → Boa → Galdino → Boa → restand event»." }
  ],
  consenso: [
    "Pressione sul leader avversario: sia il piano di Raphterra (wide con 6k+ sempre sul leader) sia quello di Adam (face-face-face) convergono sul colpire la vita, non sul perdersi nei trade.",
    "Rispetto massimo per i loro colpi grossi: gli 8k rusher dal mid-game in poi e il Double Attack di <strong>8C Whitebeard</strong> puniscono free block leggeri e vite prese con superficialità."
  ],
  dibattiti: [
    {
      tema: "Even o peggior matchup?",
      posizioni: [
        { fonte: "raphterra", testo: "Even. Il matchup si gioca: vai secondo per sfruttare il turno pieno di attacchi pre-Vista, continua a giocare weenies anche sotto 6C Vista (si rimpiazzano con la pescata on-play), freeza gli attaccanti con 7C Boa/4C Galdino e preparati al Double Attack di 8C Whitebeard dal loro turno a 8 DON!!. 7C Gravity Blade su curva (bottom-deck di 4C Luffy e 6C Vista) è fortissima qui." },
        { fonte: "adam", testo: "PEGGIOR MATCHUP IN ASSOLUTO (tra i mazzi rilevanti), pur con delle linee. Ha vinto una sola partita, highrollando come mai in vita sua. La linea corretta è disperata: NON restandare la board — molti perdono proprio perché continuano a restandare la board e Ace fa trade. Spingi col leader, face-face-face, portali a 0 vite, POI usa il restand event e prega: dopo lo 0 vite + restand event hai l'ultimo gas per provare a vincere." }
      ],
      sintesi: "Disaccordo netto: Raphterra lo classifica Even con un piano tecnico completo, Adam (dopo 17 partite di Swiss + testing) lo vive come il peggior matchup del mazzo. Il punto di contatto: la board fight prolungata non paga — Ace trade-a troppo bene. Se il piano tecnico non regge, la linea di Adam è il piano B: tutta la pressione in faccia e il restand event come ultimo colpo."
    }
  ],
  gameplan: {
    early: "Setup dei weenies e attacca subito con loro: vuoi che assorbano attacchi prima che l'avversario abbia l'opportunità di rimuoverli con <strong>6C Vista</strong>. Andando secondo hai un turno pieno di attacchi pre-Vista. Mulligan: <strong>1C Luffy</strong>, <strong>2C Bon Clay</strong>, <strong>2C Daz Bones</strong>, oppure <strong>5C Buggy + 6C Prisoner of Impel Down</strong>.",
    mid: "Vai wide con personaggi da 6k power o più e continua a colpire il leader avversario, mentre freezi i loro attaccanti con <strong>7C Boa</strong> e <strong>4C Galdino</strong>. Continua a giocare weenies anche se «tanto Vista li pulisce»: si rimpiazzano con la pescata on-play e ciclano la mano. <strong>2C Bon Clay</strong> copia il power del loro leader e colpisce a 8k+ anche se si buffano con <strong>4C Luffy</strong>.",
    late: "Occhio costante agli 8k rusher e soprattutto a <strong>8C Whitebeard</strong> (leader +2000 e Double Attack): dal loro turno a 8 DON!! prepara blocker e counter event. <strong>7C Boa + 6C Brook</strong> in Double Attack resta difficilissimo da difendere per loro. Linea disperata di Adam: niente board fight, face-face-face fino a 0 vite avversarie, poi restand event come ultimo gas."
  },
  leaderText: "Portgas.D.Ace (Pirati di Barbabianca) — 5000 power, 5 vite, Rosso. «[Activate:Main / Una volta per turno] Fino a 1 tuo Personaggio [Monkey.D.Luffy], oppure fino a 1 tuo Personaggio con un tipo che include \"Whitebeard Pirates\" e con 8000 power o più, guadagna Rush durante questo turno.»",
  carteAvversarie: [
    { nome: "6C Vista", nota: "Il loro clear dei weenies — ma per l'effetto On Attack gli serve un DON!! attaccato, abilitato dalla Stage early. Se mancano la Stage, Vista entra ma non pulisce. Nei turni successivi freezalo con 7C Boa o 4C Galdino; 7C Gravity Blade lo manda in fondo al mazzo." },
    { nome: "1C Stage (Moby Dick)", nota: "Il pezzo che abilita Vista: andare secondi nega la curva 1C Stage → 6C Vista, regalandoti un turno di attacchi coi weenies." },
    { nome: "4C Luffy", nota: "Porta il loro leader a 7k, ma devono comunque scartare carte: con una board wide li tassi lo stesso. 2C Bon Clay copia il power del leader per colpire a 8k+. Bersaglio ideale (con Vista) della Gravity Blade." },
    { nome: "8k rusher (dalla mano)", nota: "La forza di Red Ace: dal mid-game in poi possono giocare un 8k con Rush dalla mano ogni turno. Attenzione ai free block su attacchi piccoli (l'8k può arrivare sul tuo blocker restato) e a prendere vite da attacchi piccoli (rischi di scendere troppo). Countera al meglio gli attacchi che costano 1 sola carta." },
    { nome: "8C Whitebeard", nota: "La minaccia più grossa: dà al leader +2000 power e Double Attack nel loro turno d'attacco. Il modo più comune di perdere è farsi trovare impreparati a un Double Attack alto e scendere a zero di colpo nel late game. Dal loro turno a 8 DON!!, blocker e counter event pronti." }
  ],
  perFonte: [
    {
      fonte: "raphterra", origine: "Cap. 8.6",
      sezioni: [
        { titolo: "Verdetto e turn order", html: "<p><strong>Favorability: Even.</strong> Turn order: <strong>vai secondo</strong>, perché vogliamo togliergli la curva <strong>1C Stage</strong> → <strong>6C Vista</strong> per pulire i tuoi weenies. Andando secondo ottieni un turno in cui i tuoi weenies attaccano senza essere immediatamente rimossi da <strong>6C Vista</strong>.</p>" },
        { titolo: "Mulligan", html: "<p>Priorità: <strong>1C Luffy</strong>, <strong>2C Bon Clay</strong>, <strong>2C Daz Bones</strong>, <strong>5C Buggy + 6C Prisoner of Impel Down</strong>.</p>" },
        { titolo: "Macro gameplan", html: "<p>In early, setup dei weenies e attacchi aggressivi con loro il prima possibile, per puntare sulla possibilità che assorbano attacchi prima che l'avversario possa liberarsene con <strong>6C Vista</strong>. Vai wide con personaggi da 6k power o più e continua a colpire il leader avversario, mentre freezi i loro attaccanti con <strong>7C Boa</strong> e <strong>4C Galdino</strong>. Occhio ai loro 8k rusher: tienilo sempre a mente quando difendi un possibile lethal o prendi free block.</p>" },
        { titolo: "Giocare intorno a 6C Vista", html: "<ul><li><strong>Vantaggio di andare secondo:</strong> hai un turno pieno in cui attacchi coi weenies e l'avversario non ha ancora abbastanza DON!! per <strong>6C Vista</strong>: quei weenies avranno probabilmente già assorbito attacchi prima del turno di Vista.</li><li><strong>Se vai primo:</strong> all'avversario servono <strong>6C Vista</strong> a 6 DON!! E la <strong>Moby Dick Stage</strong> giocata nei primi turni per attaccare un DON!! a Vista e abilitarne l'effetto On Attack. Se mancano la Stage early, possono giocare Vista ma Vista non pulirà i tuoi weenies.</li><li><strong>Vista ha già pulito la board:</strong> anche nel loro best case in cui ti puliscono i weenies on curve, non è la fine del mondo: quei weenies si sono già rimpiazzati con la pescata on-play e con ogni probabilità hanno già attaccato. Nei turni seguenti, usa <strong>7C Boa</strong> o <strong>4C Galdino</strong> per freezare <strong>6C Vista</strong> e impedirgli di pulire altri weenies.</li><li><strong>Continua a giocare weenies:</strong> non esitare a giocarli perché «tanto Vista li pulisce». Giocali comunque: si rimpiazzano con la pescata on-play e ciclano la mano.</li></ul>" },
        { titolo: "Gestire 4C Luffy", html: "<ul><li><strong>Colpire attraverso il boost:</strong> <strong>4C Luffy</strong> è un'altra carta che li porta a 7k power, ma devono comunque scartare carte, e con una board wide li tassi lo stesso.</li><li><strong>2C Bon Clay:</strong> copia il power del leader avversario per colpire comunque a 8k o più anche se si buffano.</li><li><strong>7C Boa + 6C Brook:</strong> le combo Double Attack restano difficili da difendere per loro.</li></ul>" },
        { titolo: "Gestire le loro win condition", html: "<ul><li><strong>8k Rush:</strong> la forza di Red Ace è la capacità di calare 8k rusher dalla mano ogni turno dal mid-game in poi. Attento a prendere free block su attacchi piccoli: un 8k può arrivare a swingare sul tuo blocker restato. Attento anche a prendere vite da attacchi piccoli: rischi di scendere troppo quando arriva l'8k rusher. Countera al meglio gli attacchi che richiedono 1 sola carta.</li><li><strong>8C Whitebeard:</strong> il personaggio più minaccioso che possono mettere in campo, soprattutto perché dà al loro leader +2k power e Double Attack nel turno d'attacco. Un modo comune di perdere questo matchup è farsi trovare impreparati a un Double Attack ad alto power e scendere a zero inaspettatamente nel late game. Quando l'avversario raggiunge il turno a 8 DON!!, prepara blocker e counter event per difenderti dal possibile Double Attack.</li></ul>" },
        { titolo: "Tech card", html: "<ul><li><strong>7C Gravity Blade:</strong> carta molto forte in questo matchup, specialmente giocata on curve mandando in fondo al mazzo i loro <strong>4C Luffy</strong> e <strong>6C Vista</strong>.</li></ul>" }
      ]
    },
    {
      fonte: "adam", origine: "Intervista Top 8 Mexico — guida ai matchup",
      sezioni: [
        { titolo: "Verdetto: peggior matchup (ma non senza linee)", html: "<p><strong>PEGGIOR MATCHUP IN ASSOLUTO</strong> tra i mazzi rilevanti — ma non senza linee. Adam ha highrollato moltissimo e ha vinto UNA partita: «Non ho mai pescato meglio in vita mia: Buggy → Prisoner → Boa → Galdino → Boa → restand event».</p>" },
        { titolo: "La strategia corretta (disperata)", html: "<p><strong>NON restandare la board.</strong> Molti giocatori perdono proprio perché continuano a restandare la board: Ace fa trade e la vince lui. La linea giusta: spingi con il leader, <strong>face-face-face</strong>, portali a 0 vite, poi usa il <strong>restand event</strong> e prega.</p><p class=\"chicca\">Dopo lo 0 vite + restand event hai l'ultimo gas per provare a vincere: è tutto lì il matchup secondo Adam.</p>" }
      ]
    }
  ],
  timeline: null
};

// ============================================================
// GREEN MIHAWK (OP14-020)
// ============================================================
window.DATA.matchups["mihawk"] = {
  id: "mihawk", nome: "Dracule Mihawk", sigla: "Green Mihawk", colore: "Verde", colorHex: "#27E08A", leaderImg: null, tier: "field",
  tagline: "Pochissimi 2k counter e i freeze come unica difesa: non over-difendere, e negagli il leader 7k.",
  verdetti: [
    { fonte: "raphterra", label: "Leggermente favorito", pos: 0.75, winrate: null, dado: "secondo", nota: "Secondo per seguire la tua curva, ma anche per ritardare i loro turni di 6C Law e 10C Law and Bepo." },
    { fonte: "adam", label: "Favorito", pos: 1.5, winrate: null, dado: null, nota: "La wide board è difficile da gestire per loro. Attenzione al gotcha: Daz Bonez richiede 5 carte in mano — Adam ci ha quasi perso il round vs Mihawk in Swiss." }
  ],
  consenso: [
    "Favorevole per entrambe le fonti: la board wide li mette in grossa difficoltà.",
    "Green Mihawk ha pochissimi 2k counter: dopo un po' li vedrai counterare con i counter event per fermare i tuoi 6k.",
    "I freeze event (<strong>1C All Out</strong>, <strong>3C Electrical Luna</strong>) sono il loro modo più comune di vincere il matchup: non regalar loro valore over-difendendo i tuoi personaggi restati."
  ],
  dibattiti: [],
  gameplan: {
    early: "Piano go-wide aggro: gioca weenies presto e attaccaci il prima possibile — Mihawk deve pescare i suoi strumenti anti-weenie per contestarti la board. Se hanno weenies loro, redirigi comunque quasi tutti gli attacchi sul leader: meglio che ogni attacco chieda una carta dalla mano o prenda una vita, piuttosto che sprecarlo a pulire una board che loro riempiono di nuovo. Mulligan: <strong>1C Luffy</strong>, <strong>2C Bon Clay</strong>, <strong>2C Daz Bones</strong>.",
    mid: "Poke a 6k con la board ampia. Attenzione a <strong>1C All Out</strong> e <strong>3C Electrical Luna</strong>: non over-difendere i personaggi restati finché hanno DON!! per i freeze event, e valuta di saltare qualche attacco per dare valore minimo ai loro freeze (es. lasciargli 1 solo personaggio restato da freezare invece di due). Usa <strong>7C Boa</strong> e <strong>4C Galdino</strong> per fermare gli attaccanti più impattanti: <strong>5C Smoker</strong> nel mid-game, <strong>9C Mihawk</strong> nel late.",
    late: "Prima che arrivino a 10 DON!! (turno quasi certo di <strong>10C Law and Bepo</strong>): lascia TUTTA la board attiva e salta del tutto gli attacchi dei personaggi, per impedirgli di ottenere il leader a 7k al turno seguente. A quel punto sono già a poche vite e pochi counter: se gli neghi il leader 7k, probabilmente muoiono alla tua board wide di attacchi il turno dopo."
  },
  leaderText: "Dracule Mihawk (La Flotta dei Sette) — 5000 power, 5 vite, Verde. «Se il Leader avversario ha l'attributo [Slash], questo Leader guadagna +1000 power. [Activate:Main / Una volta per turno] Puoi mettere in rest 1 delle tue carte: se c'è un Personaggio con costo 5 o più, rimetti attivi fino a 3 dei tuoi DON!!. Poi, per questo turno non puoi giocare carte Personaggio dalla mano.»",
  carteAvversarie: [
    { nome: "1C All Out", nota: "Freeze event: insieme a Electrical Luna è il loro modo più comune di vincere il matchup. Non over-difendere i restati finché hanno DON!! disponibili per giocarlo." },
    { nome: "3C Electrical Luna", nota: "L'altro freeze event: se difendi i personaggi restati con counter, te li freezano comunque e hai sprecato carte per niente (possono tenerli restati per turni consecutivi)." },
    { nome: "5C Smoker", nota: "Il loro attaccante più impattante del mid-game: bersaglio tipico di 7C Boa / 4C Galdino." },
    { nome: "9C Mihawk", nota: "L'attaccante chiave del late game: da fermare con 7C Boa." },
    { nome: "6C Law", nota: "Uno dei turni che vuoi ritardare andando secondo." },
    { nome: "10C Law and Bepo", nota: "Il loro play quasi certo a 10 DON!!: il turno prima lascia tutta la board attiva e salta gli attacchi dei personaggi, così non ottengono il leader a 7k al turno successivo." }
  ],
  perFonte: [
    {
      fonte: "raphterra", origine: "Cap. 8.7 + Cap. 6",
      sezioni: [
        { titolo: "Verdetto e turn order", html: "<p><strong>Favorability: Slightly Favored.</strong> Turn order: <strong>vai secondo</strong> — per seguire la tua curva, ma anche per ritardare i loro turni di <strong>6C Law</strong> e <strong>10C Law and Bepo</strong>.</p>" },
        { titolo: "Mulligan", html: "<p>Priorità: <strong>1C Luffy</strong>, <strong>2C Bon Clay</strong>, <strong>2C Daz Bones</strong>.</p>" },
        { titolo: "Macro gameplan", html: "<p>Segui il gameplan go-wide aggro in early-mid, pungendoli con 6k dalla board ampia. Attenzione a <strong>1C All Out</strong> e <strong>3C Electrical Luna</strong>: è il loro modo più comune di vincere questo matchup. Non over-difendere i tuoi personaggi restati, perché possono semplicemente freezarli con i freeze spell. Usa <strong>7C Boa</strong> per disabilitare i loro attaccanti più impattanti, poi prepara un turno di board restand event nel late game.</p>" },
        { titolo: "Approccio early game", html: "<ul><li><strong>Deployment dei weenies:</strong> Green Mihawk deve pescare i suoi strumenti anti-weenie per contestare la tua board early. Gioca weenies presto e attaccaci il prima possibile.</li><li><strong>Redirezione degli attacchi:</strong> se l'avversario ha weenies early per contestare la board, la maggior parte dei tuoi attacchi rende di più rediretta sul leader, perché Mihawk di solito riempie di nuovo la board di weenies anche se gliela pulisci. Meglio che i tuoi attacchi chiedano sempre una carta dalla mano o prendano una vita, piuttosto che sprecarli per pulire la board.</li><li><strong>Esaurimento dei counter:</strong> Green Mihawk ha pochissimi 2k counter. Li troverai probabilmente a counterare con i counter event una volta finiti i 2k counter, per fermare i tuoi attacchi da 6k.</li></ul>" },
        { titolo: "Gestire i freeze event", html: "<ul><li><strong>Non over-difendere:</strong> i freeze event sono i loro strumenti principali per fermare la tua aggressione e sopravvivere fino al late game. Se stanno colpendo i tuoi personaggi restati, non over-difenderli, a meno che l'avversario non abbia più DON!! disponibili per i freeze event. Se li difendi con counter, l'avversario può semplicemente freezare i tuoi personaggi, facendoti sprecare carte per niente: di solito riescono a tenerli restati per turni consecutivi.</li><li><strong>Minimizzare il valore dei freeze:</strong> valuta di saltare del tutto alcuni attacchi per dare all'avversario il valore minimo dai freeze event — per esempio lasciandogli 1 solo personaggio restato da freezare invece di due, rendendo i loro freeze event inefficienti.</li></ul>" },
        { titolo: "Controllo mid-game", html: "<ul><li><strong>Bersagli di Boa e Galdino:</strong> usa <strong>7C Boa</strong> e <strong>4C Galdino</strong> per impedire ai loro personaggi più impattanti di attaccare: tipicamente <strong>5C Smoker</strong> nel mid-game e <strong>9C Mihawk</strong> nel late game.</li></ul>" },
        { titolo: "Il turno a 10 DON!!", html: "<ul><li><strong>Prevenire il leader 7k:</strong> il loro turno a 10 DON!! è con ogni probabilità un play di <strong>10C Law and Bepo</strong>. Prima che l'avversario arrivi a 10 DON!!, lascia l'intera board attiva e salta del tutto gli attacchi dei personaggi. Il motivo principale è impedirgli di ottenere il leader a 7k power nel turno seguente.</li><li><strong>Chiudere la partita:</strong> nel late game sono probabilmente già a poche vite e pochi counter. Se impedisci loro di diventare un leader 7k, con ogni probabilità muoiono semplicemente alla tua board wide di attacchi il turno successivo.</li></ul>" },
        { titolo: "Posizionamento nel meta (Cap. 6)", html: "<p>Fuori dai top tier, <strong>Green Mihawk</strong> è elencato tra i matchup favorevoli del mid-tier (insieme a Red Shanks e Purple Sengoku).</p>" }
      ]
    },
    {
      fonte: "adam", origine: "Intervista Top 8 Mexico — guida ai matchup + record Swiss",
      sezioni: [
        { titolo: "Verdetto: favorito", html: "<p><strong>Favorito.</strong> La wide board è difficile da gestire per loro.</p>" },
        { titolo: "Il gotcha di Daz Bonez", html: "<p class=\"chicca\">Gotcha da torneo: <strong>Daz Bonez</strong> diventa 6k solo se hai <strong>5 carte in mano</strong> quando attacchi. Al Saturday Round 5 dello Swiss a Mexico City, Adam ha attaccato con 3 carte in mano invece di 5, non ha ottenuto il bonus e ha <strong>quasi perso la partita</strong> contro Mihawk per questo. Ricordatelo prima di dichiarare l'attacco.</p>" }
      ]
    }
  ],
  timeline: null
};

// ============================================================
// YELLOW KALGARA
// ============================================================
window.DATA.matchups["kalgara"] = {
  id: "kalgara", nome: "Kalgara", sigla: "Yellow Kalgara", colore: "Giallo", colorHex: "#FFD34D", leaderImg: null, tier: "field",
  tagline: "«Il peggior matchup che abbia mai giocato con questo mazzo»: un'attivazione del leader e la tua board è polvere.",
  verdetti: [
    { fonte: "adam", label: "Peggior matchup in assoluto", pos: -2, winrate: null, dado: null, nota: "«Il peggior matchup che abbia mai giocato con questo mazzo». Fuori dal meta, ma se il campo se ne riempie sono dolori: «Se vedi 7 Kalgara in un giorno, fai 7-2»." },
    { fonte: "raphterra", label: "Sfavorito", pos: -1.5, winrate: null, dado: null, nota: "Nella tier list del Cap. 6 è l'unico mazzo nella fascia «Unfavored». Ma è relativamente raro e soffre di problemi di consistenza: spesso perde dagli altri top deck nei primi round di un torneo." }
  ],
  consenso: [
    "Entrambe le fonti lo danno sfavorito — e per entrambe è un incontro raro: mazzo fuori dal meta con problemi di consistenza.",
    "Il pericolo è l'esplosività: non costruire il piano su una board fight che può evaporare in un turno."
  ],
  dibattiti: [],
  gameplan: {
    early: "Nessuna fonte dà un piano turno-per-turno (matchup raro, fuori dal meta). Il quadro di Adam: mazzo esplosivo che non ti lascia fare grind — doppia <strong>Nami</strong> in board, cura dei burn alle vite, poi <strong>Wiper</strong> che uccide tutto.",
    mid: "Metti in conto che una <strong>singola attivazione dell'effetto leader</strong> può polverizzare la tua board: non investire tutte le risorse in una board che può sparire in un turno.",
    late: "<strong>7C Gravity Blade</strong> è la tech che Adam indica contro i mazzi fuori dal meta come Kalgara (e Sky Luffy): rimuove in un colpo una board che altrimenti saresti costretto ad affrontare pezzo per pezzo."
  },
  leaderText: null,
  carteAvversarie: [
    { nome: "Nami (la loro)", nota: "Ne mettono due in board: parte del motore esplosivo, con cura dei burn alle vite." },
    { nome: "Wiper", nota: "Il drop che, dopo il setup, «uccide tutto»." }
  ],
  perFonte: [
    {
      fonte: "adam", origine: "Intervista Top 8 Mexico — guida ai matchup + meta prediction",
      sezioni: [
        { titolo: "Verdetto: il peggiore in assoluto (non meta)", html: "<p>«<strong>Il peggior matchup che abbia mai giocato con questo mazzo</strong>» — peggio ancora di Red Ace, ma fuori dal meta.</p>" },
        { titolo: "Perché fa così paura", html: "<ul><li>Mazzo <strong>esplosivo</strong>: doppia <strong>Nami</strong> in board, cura i burn alle vite, droppa <strong>Wiper</strong>, uccide tutto.</li><li>Con una <strong>sola attivazione del leader effect</strong>, la tua board viene polverizzata.</li></ul>" },
        { titolo: "L'anti-meta pick", html: "<p>La wildcard della meta prediction di Adam: <strong>Kalgara batte sia UG Luffy sia Enel</strong>. Se questi due diventano i top deck del formato, Kalgara diventa l'anti-meta pick.</p><p class=\"chicca\">La battuta di Adam sul quanto è sfavorito: «Se vedi 7 Kalgara in un giorno, fai 7-2».</p>" },
        { titolo: "L'unica arma: Gravity Blade", html: "<p>Dalla sezione sulla <strong>Gravity Blade</strong>: contro i mazzi fuori dal meta (Kalgara, Sky Luffy, ecc.) l'evento rimuove una board che altrimenti saresti costretto ad affrontare pezzo per pezzo.</p>" }
      ]
    },
    {
      fonte: "raphterra", origine: "Cap. 6",
      sezioni: [
        { titolo: "Posizionamento nel meta", html: "<p>Nella tier list del Cap. 6, <strong>Yellow Kalgara</strong> è l'unico mazzo nella fascia <strong>Unfavored</strong>. Raphterra però lo raggruppa con <strong>Red-Green Luffy</strong> e <strong>Black Yamato</strong> tra i matchup sfavoriti ma <em>relativamente rari</em>: questi mazzi tendono a soffrire di problemi di consistenza, che spesso li fanno perdere contro gli altri top deck nei primi round di un torneo.</p>" }
      ]
    }
  ],
  timeline: null
};
