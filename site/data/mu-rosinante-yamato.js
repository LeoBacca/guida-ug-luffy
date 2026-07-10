// Dati matchup — PY Rosinante & Black Yamato
// Fonti: Dog of Wisdom (Matchups Bible §5.3 e §5.5), Raphterra (Cap. 7.3 e 8.4),
// Adam "RayDeospirata" (intervista Mexico, file 07), Dog Coaching (file 08), Equinby (file 11),
// Madoka (coaching Rosinante reverse-engineered, file 13 — SOLO Rosinante).
window.DATA = window.DATA || {}; window.DATA.matchups = window.DATA.matchups || {};

/* ============================================================
   PY ROSINANTE
   ============================================================ */
window.DATA.matchups["rosinante"] = {
  id: "rosinante",
  nome: "Donquixote Rosinante",
  sigla: "PY Rosinante",
  colore: "Viola/Giallo",
  colorHex: "#C77DFF",
  leaderImg: "lead_rosinante",
  tier: "meta",
  tagline: "Guerra di risorse contro un deck che non scala: svuota la loro mano, freeza i blocker e chiudi col restand — con Gravity Blade è quasi partita gratis.",

  verdetti: [
    { fonte: "dog", label: "Even", pos: 0, winrate: null, dado: "primo",
      nota: "«Uno dei migliori deck del format». Non puoi vincere la guerra di board control: pressali e forzali a spendere risorse." },
    { fonte: "raphterra", label: "Leggermente favorito", pos: 0.75, winrate: null, dado: "primo",
      nota: "Piccolo conflitto interno alla guida: il cheat sheet dice EVEN, il testo dice Slightly Favored. Andare primi toglie loro la sequenza Law (4c) → Rosinante & Law (6c)." },
    { fonte: "adam", label: "Misto / favorito con Gravity Blade", pos: 0.75, winrate: null, dado: null,
      nota: "Gravity Blade ≈ partita gratis se la vedi. Senza Gravity Blade dipende molto dal dado." },
    { fonte: "madoka", label: "Even — ma sei tu sul clock", pos: 0, winrate: null, dado: "primo",
      nota: "Reverse-engineering dal lato Rosinante: «se la partita va lunga, Rosinante vince di sicuro → Luffy deve chiudere». Ciò che il Rosinante teme davvero è la minaccia di restand e la Gravity Blade." }
  ],

  consenso: [
    { testo: "<strong>Vai primo.</strong> Dog: più pressione e loro più lenti. Raphterra: prendi l'iniziativa aggressiva e neghi la sequenza <strong>Law (4c)</strong> → <strong>Rosinante & Law (6c)</strong>. Adam: senza Gravity Blade il dado pesa molto.", fonti: ["dog", "raphterra", "adam"] },
    { testo: "<strong>Card advantage &gt; danno.</strong> Dog: guarda la loro hand size più dei life (hanno double heal). Dog coaching: «l'unica cosa che conta contro Rosie è la card advantage — danno costante, lento ma inesorabile». Raphterra: poke costante per drenare la mano prima dello standoff finale. <strong>Madoka lo conferma dal loro lato:</strong> «i life servono ad assorbire lo swing più grosso; contano le carte, non i counter (filtriamo con lo Stage)» — un <strong>6k singolo lo prendono volentieri</strong>, non è pressione.", fonti: ["dog", "dogcoach", "raphterra", "madoka"] },
    { testo: "<strong>Vai wide.</strong> Dog: vai largo presto e forza più carte possibili dalla loro mano. Adam: «vai il più wide possibile, sennò usano <strong>Gum-Gum Lightning</strong> e Suki». Raphterra: sviluppa una board larga e paziente.", fonti: ["dog", "adam", "raphterra"] },
    { testo: "<strong>Freeza i blocker con Boa Hancock e Galdino (Mr.3).</strong><ul><li><strong>Dog:</strong> baita <strong>Rosinante & Law (6c)</strong> a bloccare, poi freezalo con un altro Blocker per più turni.</li><li><strong>Dog coaching:</strong> Boa qui serve soprattutto a negare il blocker, non il Leader.</li><li><strong>Raphterra:</strong> stalla gli 8k con Galdino/Boa e nel late combina i freeze event per bloccare 3+ attaccanti.</li></ul>", fonti: ["dog", "dogcoach", "raphterra"] },
    { testo: "<strong>Win condition: Let's Go!! to the Navy Headquarters.</strong> Rosinante non ha molti modi di interagire con la board stante: imposta 5 nomi diversi e minaccia il restand dal turno dei 9 DON!! in poi.", fonti: ["dog", "raphterra"] },
    { testo: "<strong>Rispetta i tool difensivi economici:</strong> <strong>I Love You (1c)</strong>, <strong>Noro Noro Beam Sword (2c)</strong> e <strong>Borsalino (5c)</strong>. Dog coaching: «I Love You è cheating: cheata fuori i 2k». Raphterra: se lasciano DON!! attivi, attacca a 7k+ per forzare almeno due carte.", fonti: ["dog", "dogcoach", "raphterra"] },
    { testo: "<strong>Il deck bricka e non scala.</strong> Dog: se non partono con 2k bodies o searcher, puniscili. Dog coaching: «non c'è late game plan, fanno sempre le stesse cose» — trascina con i freeze e vinci di risorse.", fonti: ["dog", "dogcoach"] },
    { testo: "<strong>Gravity Blade è la carta del matchup.</strong> Adam: partita quasi gratis. Raphterra: giocala il turno prima del push per rimuovere due <strong>Rosinante & Law (6c)</strong>. Equinby: «quando ti Gravity-Bladeano puoi stringere la mano: game over». <strong>Madoka (dal lato che la subisce):</strong> la sua sola minaccia li deforma — sequenziano <strong>Sakazuki + Mamaragan</strong> «per giocare attorno alla Gravity Blade» e attaccano prima di sviluppare per paura del trigger.", fonti: ["adam", "raphterra", "equinby", "madoka"] },
    { testo: "<strong>«Con lo stun event in mano non possono vincere».</strong> Madoka lo insegna testualmente al suo allievo Rosinante: i tuoi freeze (<strong>Electrical Luna</strong>, <strong>I Know You're Strong…</strong>, <strong>All Out</strong>) sono ciò che li terrorizza — devono baitarteli fuori. Tienili, minacciali (anche da bluff): board attiva + minaccia freeze = decisioni impossibili per loro (Raphterra dice lo stesso dall'altro lato).", fonti: ["madoka", "raphterra"] },
    { testo: "<strong>Proteggi la tua hand size: sotto le 5 carte il tuo Mr.1 si spegne.</strong> Madoka: «quando scendono sotto le 5 carte — e capita spesso — il loro <strong>Mr.1</strong> non guadagna l'attacco». Rosinante prova a portarti sotto le 5 carte apposta: non svuotarti in counter difensivi se ti servono gli swing di Mr.1.", fonti: ["madoka"] }
  ],

  dibattiti: [
    { tema: "Quanto è favorito il matchup?",
      posizioni: [
        { fonte: "dog", testo: "Even secco — con una netta preferenza per andare primi." },
        { fonte: "raphterra", testo: "Slightly Favored nel testo… ma EVEN nel cheat sheet della stessa guida. Conflitto interno mai risolto." },
        { fonte: "adam", testo: "Dipende dalla lista: con Gravity Blade è quasi favorito «gratis», senza è un coin flip pesantemente influenzato dal dado." }
      ] },
    { tema: "Quanto alto swingare?",
      posizioni: [
        { fonte: "dogcoach", testo: "Meglio 5-5 che un 8: due swing simmetrici forzano più scarti e drenano i 2k che poi mancheranno nel late. La card advantage vale più del danno singolo." },
        { fonte: "dog", testo: "Pressione larga ma con swing significativi: 6k+ se hanno il Blocker da 6k, altrimenti gli attacchi sono gratis da difendere." },
        { fonte: "raphterra", testo: "Nel late game attacca a 7k o più: così anche con <strong>I Love You</strong> o <strong>Noro Noro Beam Sword</strong> devono spendere almeno due carte." }
      ] },
    { tema: "Aggressione o pazienza?",
      posizioni: [
        { fonte: "dog", testo: "Gioca «quasi come glass cannon» ma ristabilendo sempre una board resiliente: Rosinante soffre la pressione costante con swing multipli." },
        { fonte: "raphterra", testo: "Patient poking: attacca solo con Leader e corpi sacrificabili, lascia il grosso della board attiva per minacciare il restand — la minaccia psicologica a 9/10 DON!! vince da sola." }
      ] },
    { tema: "Chi vince se la partita va per le lunghe?",
      posizioni: [
        { fonte: "dog", testo: "Rosinante non scala: «non c'è un late game plan, fanno sempre le stesse cose». Trascina la partita con i freeze e vinci di risorse — il tempo lavora per te." },
        { fonte: "dogcoach", testo: "Stesso avviso: «questo deck non scala nel late game, è come un Popolino». Grindali e alla fine vinci." },
        { fonte: "madoka", testo: "Dal loro lato la lettura è OPPOSTA: «se la partita va lunga, Rosinante vince di sicuro — ogni turno diventa più difficile da uccidere. Quindi Luffy deve chiudere il prima possibile». Sei tu sul clock." }
      ] }
  ],

  gameplan: {
    early: "<p>Vai largo presto e leggi il <em>loro</em> start.</p><ul><li><strong>Start forte (2k bodies + Law):</strong> se partono con 2k bodies + curva <strong>Law (4c)</strong> è più dura — tradeggiano i piccoli.</li><li><strong>Start lento o senza 2k bodies:</strong> vai <strong>aggro</strong> — non riescono a tradeggiare e sprecano il Leader swing sui piccoli.</li><li><strong>Sviluppo:</strong> corpi da 6k (resilienti), ma occhio a <strong>Gum-Gum Lightning</strong> e <strong>Sakazuki</strong>.</li><li><strong>Counter early con mano buona:</strong> counter gli attacchi che chiedono una sola carta — preservi i life per lo standoff e resti sotto la soglia delle 7 carte di <strong>Law (4c)</strong> (Raphterra).</li><li><strong>Linea top di Dog:</strong> <strong>Buggy + Prisoner a 5 DON!!</strong>, poi Hancock e Mr.3.</li></ul>",
    mid: "<p>Per Dog è <strong>la parte più importante</strong> del matchup. Rosinante è prevedibile: vuole <strong>Rosinante & Law (6c)</strong> appena arriva a 5 DON!!.</p><ul><li><strong>Bait & freeze:</strong> baitalo a bloccare, poi freezalo insieme a un altro Blocker per più turni.</li></ul><p><strong>Sequenza top:</strong></p><ol><li><strong>Boa Hancock</strong> nega un Blocker.</li><li>Forzi un altro block.</li><li><strong>I Know You're Strong…</strong> o <strong>Electrical Luna</strong> → un turno intero senza i loro Blocker.</li></ol><ul><li><strong>Niente corpi rested con leggerezza (Raphterra):</strong> li clearano con gli 8k, <strong>Sakazuki (7c)</strong> e <strong>Gum-Gum Lightning</strong>; attacca con Leader e corpi sacrificabili.</li><li><strong>Loop di Crocodile:</strong> usa <strong>Crocodile</strong> per rigiocare i 2-cost stanti.</li><li><strong>Swing (Dog coaching):</strong> 5-5 invece di 8 e attacca i loro rested ≤6k per forzare decisioni.</li></ul>",
    late: "<ul><li><strong>Hand reading:</strong> conta i counter che possono avere, guarda la card advantage più dei life (double heal, o heal + DON!! aperto per <strong>I Love You</strong>).</li><li><strong>Sakazuki early = DON!! cheat:</strong> aspettati double <strong>Borsalino</strong> con un DON!! aperto.</li></ul><p>Dal turno dei 9/10 DON!! (Raphterra):</p><ol><li>Poke col Leader e i sacrificabili, poi reagisci.</li><li><strong>Se tengono i blocker attivi:</strong> sviluppa e passa con la board attiva.</li><li><strong>Se usano i blocker:</strong> attacca con tutto e chiudi col restand, oppure freeza tutto e chiudi il turno dopo.</li></ol><ul><li><strong>Gravity Blade:</strong> il turno prima del push — due <strong>Rosinante & Law</strong> a fondo mazzo.</li><li><strong>Brook (8c per Dog)</strong> e <strong>DMG:</strong> gestiscono doppio Blocker o Blocker + DON!! aperto.</li><li><strong>Life:</strong> resta a 2-3.</li></ul>"
  },

  carteAvversarie: [
    { nome: "Rosinante & Law (6c)", nota: "L'unica vera fonte di valore del loro deck insieme al blocker alto (Dog coaching). 8k attacker/blocker: baitalo a bloccare e freezalo (Dog); stallalo con Galdino/Boa (Raphterra); target preferito della Gravity Blade — due copie a fondo mazzo il turno prima del push." },
    { nome: "I Love You (1c Event)", nota: "Tool difensivo economico che blocca molti swing da 6k (Dog). «È cheating: cheata fuori i 2k» (Dog coaching). Anticipala se lasciano un DON!! aperto e attacca a 7k+ per forzare due carte (Raphterra). Brook restanda e droppa un blocker/DON!!: la nega (Adam)." },
    { nome: "Law (4c)", nota: "On Play: ti fa scartare 2 carte se hai 7+ carte in mano. Con una mano forte, counter gli attacchi early per restare sotto la soglia; con una mano debole prendi i life e accetta il rischio (Raphterra). La curva 2k bodies → Law da 4 è il loro start migliore (Dog)." },
    { nome: "Sakazuki (7c)", nota: "Riduzione di potenza che spegne quasi ogni tuo personaggio (Dog). Parte del pacchetto clear se lasci corpi rested con leggerezza (Raphterra). Un Sakazuki early gli cheata DON!!: aspettati double Borsalino con DON!! aperto per I Love You (Dog)." },
    { nome: "Borsalino (5c)", nota: "Tool difensivo/heal economico da rispettare (Dog). Con il double heal la loro vita è ingannevole: giudica la partita sulla loro mano, non sui life." },
    { nome: "Gum-Gum Lightning (2c)", nota: "Removal event: spegne i tuoi corpi se non vai abbastanza wide (Adam: «sennò usano Gum-Gum Lightning e Suki»). Con Sakazuki e gli 8k è il motivo per cui non devi lasciare corpi rested a caso (Raphterra). <strong>Madoka:</strong> combinata con <strong>Mamaragan</strong> è come <em>spengono il tuo restand</em> — uccidono due corpi per farti scendere sotto i 5 nomi diversi. Sovraccarica di corpi/nomi." },
    { nome: "Mamaragan", nota: "Removal per corpi piccoli / 0-power. Madoka: il primo bersaglio è il tuo <strong>Luffy (1c)</strong> («0 di power, è il più sicuro») perché è l'enabler del restand; poi si combina con Gum-Gum Lightning per rompere i 5 nomi. Proteggi/ripesca il Luffy da 1." },
    { nome: "Flame Split (evento OP07, ~1c giallo)", nota: "Tech che i Rosinante europei aggiungono APPOSTA contro Luffy (Madoka). Dà +1000 al loro Leader e <strong>resta un tuo personaggio a 0 DON!!</strong> (come un Drake economico); col pump può <strong>uccidere un tuo 4-cost</strong> ed è ottima sul loro turno di lethal. Non affidarti a un singolo 4-cost (Galdino, Crocodile): te lo restano/uccidono nel momento peggiore." },
    { nome: "Noro Noro Beam Sword (2c)", nota: "Counter event del late game: se lasciano DON!! attivi, mettila in conto e attacca a 7k+ così devono comunque spendere almeno due carte (Raphterra)." },
    { nome: "The Stage", nota: "Filtro che gli permette di tenere le carte-counter e scartare la spazzatura (Madoka: «il valore di counter non conta quanto la carta in mano, filtro con lo Stage»). Per questo la metrica giusta è quante CARTE gli fai spendere, non i counter." }
  ],

  perFonte: [
    {
      fonte: "madoka",
      origine: "Coaching Rosinante reverse-engineered (file 13)",
      sezioni: [
        { t: "Il quadro: sei tu sul clock",
          c: "<p>Questo dossier è <strong>reverse-engineering</strong>: Madoka insegna a un allievo a pilotare <strong>PY Rosinante</strong> contro Goofy (= UG Luffy). Ogni sua istruzione, ribaltata, è una tua contromossa.</p><p class=\"chicca\">«Se la partita va per le lunghe, <strong>Rosinante vince di sicuro</strong> — ogni turno diventa più difficile da uccidere. Quindi Luffy deve chiudere il prima possibile.» → Ribalta la narrazione «loro non scalano, tu li grindi»: dal loro lato <strong>il tempo lavora per LORO</strong>. Non durdlare aspettando di grindarli — piazza la spallata mentre la board è tua.</p>" },
        { t: "Come teccano contro di te (Flame Split &amp; co.)",
          c: "<p>Contro Luffy la lista Rosinante si adatta apposta:</p><ul><li><strong>Wiper (5c) + Flame Split</strong> entrano per il matchup: «se vuoi massimizzare contro Goofy, metti la Flame Split, è forte».</li><li><strong>4× Crocodile</strong> — «non giocare 4 Croc è trollare»: loop che ricicla i 2-cost.</li><li><strong>Più 2k counter possibili</strong>, non tech di nicchia: «rende il deck più consistente».</li></ul><p class=\"chicca\"><strong>Flame Split</strong> (evento OP07, ~1c giallo): +1000 al loro Leader e <strong>resta un tuo personaggio a 0 DON!!</strong>; col pump <strong>uccide un tuo 4-cost</strong> ed è ottima sul loro turno di lethal. → Non affidarti a un singolo 4-cost come perno difensivo: <strong>Galdino</strong> e <strong>Crocodile</strong> possono essere restati/uccisi per 0 DON!! nel momento peggiore. Mettila nel conto del loro lethal.</p>" },
        { t: "«Con lo stun in mano non possono vincere»",
          c: "<p class=\"chicca\">Testuale di Madoka al suo allievo: «Alcuni provano a giocare attorno allo stun event e non bloccano. È <strong>strettamente sbagliato</strong>: quando hanno lo stun in mano <strong>non puoi mai vincere</strong>. Devi farglielo uscire dalla mano.»</p><p>→ È la prova, dal campo nemico, che i tuoi freeze (<strong>Electrical Luna</strong>, <strong>I Know You're Strong…</strong>, <strong>All Out</strong>) sono la carta che li terrorizza. <strong>Tienili</strong>, gioca in modo che debbano rispettarli, e nel board standoff il freeze chiude. Funziona anche <strong>da bluff</strong>: board attiva + minaccia freeze = per loro decisioni impossibili.</p>" },
        { t: "Life management ribaltato: il 6k singolo è gratis",
          c: "<p class=\"chicca\">«I life servono ad assorbire lo swing più grosso. Questo deck Goofy non può fare tanti 5k: se ho un 1k inutile countero il loro 5k; ma se aprono con un <strong>6k lo prendo</strong>, non posso counterare tutti i 6k. Prendo <strong>sempre</strong> tutti i free block.»</p><p>→ Tre contromosse:</p><ul><li>Un <strong>6k singolo non è pressione</strong>: lo prendono volentieri. Per drenare carte vai <strong>7k+</strong> (li obblighi a 2 carte) o vai <strong>così wide</strong> che non counterano tutto.</li><li><strong>Free-blockano sempre</strong>: attacchi gratis dentro i blocker sono sprecati.</li><li>Contano le <strong>carte</strong>, non i counter (filtrano con lo <strong>Stage</strong>): la metrica è quante carte gli fai spendere.</li></ul>" },
        { t: "Mr.1 sotto le 5 carte: proteggi la mano",
          c: "<p class=\"chicca\">«Quando scendono sotto le 5 carte — e capita spesso — il loro <strong>Mr.1</strong> non guadagna l'attacco.»</p><p>→ Insight nuovo: il tuo <strong>Mr.1 (Daz Bones)</strong> guadagna il boost <strong>solo con 5+ carte in mano</strong>, e Rosinante prova a portarti sotto le 5 apposta. Quando ti servono gli swing di Mr.1, <strong>non svuotarti in counter difensivi</strong>: tieni la mano ≥ 5.</p>" },
        { t: "La matematica del loro lethal-defense",
          c: "<p>La «scorciatoia» che Madoka insegna per calcolare se sopravvive al tuo restand:</p><p class=\"chicca\">Ogni <strong>carta in mano</strong> = 1 counter · ogni <strong>blocker</strong> = 1 attacco bloccato · ogni <strong>life</strong> = <strong>2 attacchi</strong> (ne prendi 1 e counteri con la carta che peschi) · <strong>I Love You</strong> = <strong>2 swing</strong>.</p><p>→ Il tuo conto di lethal: devi superare <strong>blocker + (life × 2) + carte in mano + (I Love You × 2)</strong>. Quindi: ogni <strong>I Love You</strong> vale doppio (falli spendere prima); <strong>svuota mano e blocker</strong> prima del turno di restand; puntare ai loro life è il piano meno efficiente (valgono doppio in difesa).</p>" },
        { t: "Come spengono il tuo restand (e come giocarci attorno)",
          c: "<p class=\"chicca\">«Come punisce il Rosie il restand? <strong>Gum-Gum Lightning</strong> per uccidere un corpo + <strong>Mamaragan</strong> per un altro → il restand è spento» (richiede <strong>5 nomi diversi</strong>). Sul turno di restand mirano al <strong>Luffy (1c)</strong>: «0 di power, è il più sicuro» — è l'enabler.</p><p>→ Contromosse: <strong>sovraccarica di nomi/corpi</strong> così che le due removal non bastino a scendere sotto i 5; <strong>proteggi/ripesca il Luffy da 1</strong>; tieni un <strong>piano B</strong> di lethal (DMG, Brook, doppio swing con Hancock).</p>" },
        { t: "Gravity Blade li deforma (dal lato che la subisce)",
          c: "<p>Conferma da campo nemico di ciò che dicono Adam ed Equinby.</p><ul><li>Madoka fa sequenziare <strong>Sakazuki + Mamaragan</strong> «perché <strong>devi giocare attorno alla Gravity Blade</strong>».</li><li>«Dovrei attaccare prima di sviluppare perché il <strong>trigger di Gravity Blade</strong> può fregarti.»</li></ul><p>→ La <strong>sola minaccia</strong> di Gravity Blade (in mano o in life) li costringe a sequenze subottimali. Oltre a rimuovere due <strong>Rosinante &amp; Law</strong> a fondo mazzo il turno prima del push, vale come deterrente permanente.</p>" },
        { t: "Sopravvivi al loro turno più pericoloso",
          c: "<p class=\"chicca\">«Questo è di solito il turno più pericoloso del Rosie [il ~7 DON!! con <strong>Saka Mama</strong> o <strong>doppio Rosinante &amp; Law</strong>]. Se Goofy sopravvive a questo turno e poi concatena le sue carte buone, <strong>starà bene</strong>.»</p><p>→ Identifica e sopravvivi al grande turno di clear del mid (~7 DON!!): tieni un cuscino di life/counter per quel turno. Superato quello, se concateni i tuoi payoff (freeze, Hancock, restand) stabilizzi.</p>" }
      ]
    },
    {
      fonte: "dog",
      origine: "Matchups Bible §5.3",
      sezioni: [
        { t: "Overview",
          c: "<p><strong>Difficoltà: Even · Start preferito: Primo.</strong> Uno dei migliori deck del format: si basa su <strong>resource management</strong> e quantità di pressione.</p><ul><li><strong>Non puoi vincere la guerra di board control:</strong> pressali e forzali a spendere risorse.</li><li><strong>Generano molte risorse ma possono brickare:</strong> se non partono con diversi <strong>2k bodies</strong> o <strong>searcher</strong>, il loro gioco si complica → puniscili.</li><li><strong>Andando primo:</strong> più pressione, loro più lenti.</li><li><strong>Rispetta i tool difensivi economici:</strong> <strong>Borsalino (5c)</strong> e l'Event da 1 <strong>I Love You</strong> bloccano molti swing da 6k.</li><li><strong>Win condition:</strong> setup di <strong>Let's Go!! to the Navy Headquarters</strong> — non hanno molti modi di interagire con la board stante.</li><li><strong>Mulligan:</strong> vedi lo screenshot «mulligan PY Rosinante» nel capitolo sorgente.</li></ul>" },
        { t: "Early game",
          c: "<p>Vai largo presto: dipende molto dal <em>loro</em> start.</p><ul><li><strong>Start con 2k bodies + Law (4c):</strong> più difficile — tradeggiano meglio i piccoli.</li><li><strong>Start lento / senza 2k bodies:</strong> più facile — vai <strong>aggro</strong>: non riescono a tradeggiare efficacemente e spesso devono spendere il Leader swing sui piccoli.</li><li><strong>Sviluppa corpi da 6k</strong> (resilienti), ma occhio a <strong>Gum-Gum Lightning</strong> e <strong>Sakazuki</strong> — spengono quasi ogni personaggio.</li><li><strong>Swing larghi:</strong> forza più carte possibili dalla loro mano.</li><li><strong>Linea top:</strong> spesso <strong>Buggy + Prisoner a 5 DON!!</strong>, poi <strong>Boa Hancock</strong> (nega un Blocker) e <strong>Mr.3</strong> (impedisce trade efficienti nei tuoi 6k).</li></ul>" },
        { t: "Mid game",
          c: "<p><strong>La parte più importante del matchup.</strong> Rosinante è prevedibile: vuole <strong>Rosinante & Law (6c)</strong> appena arriva a 5 DON!!.</p><ul><li><strong>Quasi glass cannon, ma resiliente:</strong> ristabilisci sempre una board resiliente — Rosinante soffre la pressione costante con swing multipli mentre sviluppi nuovi corpi.</li><li><strong>Bait & freeze:</strong> baita carte come <strong>Rosinante & Law</strong> a bloccare, poi freezalo insieme a un altro Blocker per più turni.</li></ul><p><strong>Sequenza top:</strong></p><ol><li><strong>Boa Hancock</strong> nega un Blocker.</li><li>Forzi un altro block.</li><li><strong>I Know You're Strong…</strong> o <strong>Electrical Luna</strong> → un turno senza i loro Blocker.</li></ol><p>Questi freeze possono spostare il vantaggio; se PY Rosinante sale di rappresentazione, diventano staple.</p>" },
        { t: "Late game",
          c: "<ul><li><strong>Hand reading:</strong> capire quanti <strong>counter</strong> possono avere in mano è importante.</li><li><strong>Card advantage &gt; life:</strong> hanno <strong>double heal</strong>, o double heal + un DON!! aperto.</li><li><strong>Sakazuki early = DON!! cheat:</strong> aspettati double <strong>Borsalino</strong> con un DON!! aperto per <strong>I Love You</strong>.</li><li><strong>Piano:</strong> rimuovi più carte possibili dalla loro mano, poi costruisci la board per <strong>Let's Go!! to the Navy Headquarters</strong> — i freeze danno un turno extra.</li><li><strong>Brook (8c):</strong> utile se restano con un solo DON!! aperto per I Love You.</li><li><strong>DMG:</strong> aiuta — gestisce doppio Blocker o Blocker + DON!! aperto.</li><li><strong>Life:</strong> sii conservativo, resta intorno a <strong>2-3 life</strong>.</li></ul>" },
        { t: "Tips",
          c: "<ul><li><strong>Niente guerra di board control:</strong> pressa e svuota la loro mano.</li><li><strong>Pressione larga ma swing significativi:</strong> 6k+ se hanno Blocker da 6k.</li><li><strong>Punisci i brick:</strong> se mancano 2k bodies / searcher / <strong>Law (4c)</strong>.</li><li><strong>Nega i Blocker:</strong> con <strong>Boa Hancock</strong>, <strong>Mr.3</strong> e i freeze (<strong>I Know You're Strong…</strong> / <strong>Electrical Luna</strong>).</li><li><strong>Focus sulla hand size</strong> più che sui life (recuperano molto).</li><li><strong>Finisher:</strong> <strong>Let's Go!! to the Navy Headquarters</strong>.</li></ul>" }
      ]
    },
    {
      fonte: "raphterra",
      origine: "Cap. 7.3",
      sezioni: [
        { t: "Verdetto, dado e mulligan",
          c: "<p><strong>Favorability: Slightly Favored</strong> (ma il cheat sheet della stessa guida riporta <strong>EVEN</strong> — conflitto interno). <strong>Turn order: primo</strong>: ti dà l'iniziativa aggressiva e previene la loro sequenza preferita <strong>Law (4c)</strong> → <strong>Rosinante & Law (6c)</strong>.</p><p><strong>Mulligan priority:</strong> <strong>Luffy (1c)</strong>, <strong>Mr.2 Bon Clay (2c)</strong>, <strong>Daz Bones (2c)</strong>, oppure la combo <strong>Buggy (5c) + Prisoner of Impel Down (6c)</strong>.</p>" },
        { t: "Cheat sheet (testo integrale)",
          c: "<ul><li>Imposta pazientemente 5 carte con nomi diversi per abilitare il <strong>restand event da 1c</strong> nel late game.</li><li>Poke col Leader e con gli attaccanti di poco valore. <strong>Non fare full swing se non sei al sicuro.</strong></li><li>Freeza l'intera board avversaria con <strong>Galdino (4c)</strong>, <strong>Boa (7c)</strong> e i freeze event mentre prepari il turno di lethal.</li><li>Counter gli attacchi early se hai una buona mano, per giocare attorno all'effetto discard di <strong>Law (4c)</strong>.</li><li>Gioca attorno ai loro counter event del late game: <strong>I Love You (1c)</strong> e <strong>Noro Noro Beam Sword (2c)</strong>.</li></ul>" },
        { t: "Macro gameplan",
          c: "<p>La win condition primaria è il <strong>restand event da 1c</strong> e/o i freeze event (<strong>All Out (1c)</strong>, <strong>Electrical Luna (3c)</strong>), a seconda della tua lista. Obiettivo: costruire una board larga e restare paziente con gli attacchi. <strong>PY Rosinante può clearare i tuoi personaggi nel mid game se li lasci rested con leggerezza.</strong> Attacca principalmente col Leader e con i personaggi sacrificabili, lasciando la maggioranza della board attiva per minacciare il restand dal turno dei 9 DON!! in poi.</p>" },
        { t: "The Active Board Standoff",
          c: "<ul><li><strong>Rispetta il clear:</strong> lo eseguono con gli attaccanti da 8k, l'effetto di riduzione potenza di <strong>Sakazuki (7c)</strong> e removal event come <strong>Gum-Gum Lightning (2c)</strong>.</li><li><strong>Patient poking:</strong> attacca solo con Leader e corpi sacrificabili; lascia i corpi core attivi per il requisito dei 5 nomi diversi del restand. <strong>Crocodile (4c)</strong> è ottimo qui: attacchi con un 2-cost, poi lo bounci e lo rigiochi così resta attivo durante il turno avversario.</li></ul>" },
        { t: "Pressione psicologica a 9/10 DON!!",
          c: "<p>Lasciando i personaggi attivi mentre ti avvicini ai turni da 9 e 10 DON!!, forzi l'avversario a rispettare la minaccia del board restand. Poiché PY Rosinante si affida ai Blocker, esiteranno ad attaccarci, dovendo tenere le difese su in caso di turno restand.</p><p>In più, la board attiva li rende guardinghi verso la tua combo freeze (<strong>Electrical Luna (3c)</strong> + <strong>Boa (7c)</strong> o <strong>Galdino (4c)</strong>). <em>Anche se non hai quelle carte in mano</em>, la board attiva li costringe a decisioni difficili dove un singolo misplay può costargli la partita.</p>" },
        { t: "Il loop di late game",
          c: "<p>Dai turni di 9 e 10 DON!!, avvia una sequenza di poke con Leader e sacrificabili, poi reagisci alle loro scelte:</p><ul><li><strong>Se counterano e tengono i blocker attivi:</strong> sviluppare la board e passare con i personaggi attivi è un esito perfettamente accettabile. Hai ridotto la loro mano e riprovi il turno dopo senza scoprirti.</li><li><strong>Se usano i blocker:</strong> attacca con tutta la board. Da lì puoi (1) usare il <strong>restand event da 1c</strong> per il lethal, oppure (2) usare i freeze per bloccare la loro board e impostare il lethal al turno successivo.</li><li><strong>Gravity Blade (7c):</strong> se la giochi, è eccellente per rimuovere la loro board di mid game (preferibilmente due copie di <strong>Rosinante & Law (6c)</strong>) il turno immediatamente prima del push di restand.</li></ul>" },
        { t: "Note chiave del matchup",
          c: "<ul><li><strong>Preserva i life early:</strong> se la tua mano d'apertura è buona, counter proattivamente gli attacchi early che chiedono una sola carta. Ti serve un life total sano per navigare lo standoff del late game — e giochi anche attorno al discard di <strong>Law (4c)</strong>.</li><li><strong>Stallare il mid game:</strong> mentre costruisci per i 9/10 DON!! sei vulnerabile agli attacchi alti. Usa <strong>Galdino (4c)</strong> e <strong>Boa (7c)</strong> per stallare i loro 8k (<strong>Rosinante & Law (6c)</strong>, <strong>Sakazuki (7c)</strong>), con cui altrimenti swingherebbero liberamente. Nel late game combina questi personaggi con i freeze event per bloccare tre o più attaccanti.</li><li><strong>Baiting counters:</strong> se nel mid game hanno personaggi rested da 6k o meno, attaccali dentro. Crei un decision point dove potrebbero counterare invece di lasciar andare il corpo. Anche una piccola erosione di mano rende più facile leggere le loro opzioni nello standoff finale.</li><li><strong>Rispetta i counter event:</strong> nel late game, se lasciano DON!! attivi, anticipa <strong>I Love You (1c)</strong> e <strong>Noro Noro Beam Sword (2c)</strong>. Attacca a 7k o più così devono spendere almeno due carte per counterare, anche usando un event.</li></ul>" },
        { t: "Tech card",
          c: "<ul><li><strong>Electrical Luna (3c)</strong> / <strong>All Out (1c)</strong>: per freezare la loro board mentre imposti il lethal.</li><li><strong>Gravity Blade (7c)</strong>: per mandare a fondo mazzo i loro 6-cost.</li></ul>" }
      ]
    },
    {
      fonte: "adam",
      origine: "Intervista Mexico (file 07)",
      sezioni: [
        { t: "Verdetto",
          c: "<p><strong>Misto / favorito con Gravity Blade.</strong> Con <strong>Gravity Blade</strong> in mano è «quasi game gratis». Senza Gravity Blade, dipende molto dal dado.</p>" },
        { t: "Il piano: vai il più wide possibile",
          c: "<p>«Vai il più wide possibile: altrimenti usano <strong>Gum-Gum Lightning</strong> e Suki». Stesso concetto ribadito nell'analisi di <strong>Buggy</strong>: contro Rosinante devi andare il più largo possibile, perché se resti stretto le loro removal ti puniscono pezzo per pezzo.</p>" },
        { t: "Gravity Blade",
          c: "<p>La card tech del weekend (idea originale di Enrico / Dog of Wisdom, presa al loro incontro del giovedì): «la migliore carta quando ce l'hai contro OGNI matchup tranne Enel». Contro Rosinante è quasi partita gratis se la vedi: rimuove la board in modo quasi ineludibile (nel mazzo il costo massimo è 5, spesso meno). Adam la giocava x2 e avrebbe voluto x3.</p><p class=\"chicca\">Se la fai scattare da trigger sulla vita è rotta: Adam ha triggerato Gravity Blade e mandato a fondo mazzo il Sabo di un Blue/Yellow Luffy.</p>" },
        { t: "Brook nega I Love You",
          c: "<p><strong>Brook</strong> restanda e droppa un blocker/DON!!: nega l'«<strong>I Love You</strong>» di Rosinante. Attenzione alla regola vissuta in torneo: Brook <em>non</em> è Impel Down, quindi non abilita da solo l'effetto Leader.</p>" }
      ]
    },
    {
      fonte: "dogcoach",
      origine: "Coaching (file 08) — Sessione 2, Rosinante Law",
      sezioni: [
        { t: "Formato della sessione",
          c: "<p>Enrico mostra le sue partite registrate contro Rosinante Law, poi gioca live contro Tom (Enrico pilota Rosinante, Tom pilota Luffy). Nella priorità di studio, Mirror + Rosinante erano i matchup assegnati per l'appuntamento successivo.</p>" },
        { t: "Rosinante non genera valore",
          c: "<p class=\"chicca\">«Le uniche cose che generano valore nel loro deck sono il <strong>Rosinante & Law (6c)</strong> e il blocker alto. Tutto il resto non genera valore.» Il loro deck bricka spesso: se vai wide con i 6k, puoi vincere per sola pressione sulle carte.</p>" },
        { t: "Card advantage, non danno",
          c: "<p class=\"chicca\">«L'unica cosa da avere in mente quando giochi contro Rosie è la card advantage. […] La cosa più importante è il danno costante. Lento ma inesorabile.» Focus sulle carte che esci dalla loro mano, non tanto sui life.</p>" },
        { t: "Swing 5-5 invece di 8",
          c: "<p class=\"chicca\">«Come detto, contro Rosie ci interessa solo la card advantage. Quindi qui è meglio andare 5-5 invece di un 8.» Se vanno due swing da 5, magari scartano un 2k che poi mancherà nel late game. Il singolo 8 è meno efficiente.</p>" },
        { t: "Se aspettano coi blocker su, è una buona notizia",
          c: "<p class=\"chicca\">«Se il Rosinante decide di tenere i blocker stanti per bloccare il tuo aggro, per te è ancora meglio.» Significa che non stanno attaccando e stai dominando la partita.</p>" },
        { t: "Il blocker 6k è la chiave della partita",
          c: "<p class=\"chicca\">«Se mancano il blocker 6k, non dico che hai vinto la partita, ma quasi.» Il deck cerca il blocker solo tramite il Rosinante da 1: non è garantito. Se lo mancano, è quasi vinta.</p>" },
        { t: "Boa Hancock: qui serve a negare il blocker",
          c: "<p class=\"chicca\">«Il motivo per cui vogliamo giocare Boa la maggior parte delle volte è negare il blocker Rosi Law. Dobbiamo semplicemente spegnere il blocker.» A differenza di altri matchup, Boa qui è fondamentale per il blocker, non per il Leader.</p>" },
        { t: "Quando NON andare wide",
          c: "<p class=\"chicca\">«Evita di andare wide quando i blocker che hanno in board stanno di fatto counterando gratis. È quello che vogliamo evitare.»</p>" },
        { t: "«A loro non importa del danno» — sfruttalo",
          c: "<p class=\"chicca\">Dal lato Rosinante: «non gli importa di prendere danno, perché i nostri swing saranno simmetrici — sempre 5 e 6. Se counterano il primo swing o il quinto, non cambia nulla.» Ma se li porti prima a 2 life, abilitano il Dial (accesso a counter): quindi vai wide, non grosso, e forzali a usare le risorse difensive presto.</p>" },
        { t: "«I Love You» è cheating",
          c: "<p class=\"chicca\">«L'unica cosa che ti interessa è l'<strong>I Love You</strong>. Quella carta cheata fuori i 2k.» Quando non ce l'hanno o la mancano, sono molto più vulnerabili ai 6k swing.</p>" },
        { t: "Galdino e la sequenza freeze",
          c: "<p class=\"chicca\">Usa <strong>Galdino (Mr.3)</strong> per freezare il Law o il blocker principale, poi swinga tutto: crei turni in cui non possono rispondere.</p>" },
        { t: "Il deck non scala nel late game",
          c: "<p class=\"chicca\">«Questo deck non scala nel late game. Fanno sempre la stessa cosa. È come un Popolino: non c'è un late game plan.» Quindi trascina la partita con i freeze ripetuti e alla fine vincerai per risorse.</p>" }
      ]
    },
    {
      fonte: "equinby",
      origine: "Coaching + deck breakdown (file 11 · 16)",
      sezioni: [
        { t: "Gravity Blade è il game-winner vs Rosinante",
          c: "<p class=\"chicca\">Equinby gioca 2 <strong>Electrical Luna</strong> + 1 <strong>Gravity Blade</strong> e considera Gravity Blade game-winning nel mirror e contro Rosinante, proprio quando l'avversario lascia la board standing per il setup del restand: «Quando ti Gravity-Bladeano puoi stringergli la mano. Game over. Hanno lasciato tantissimo valore sul tavolo e tu li hai spazzati via.» <em>(Nel file 11 la teneva 1-of perché dead vs Enel; nel video più recente è passato a <strong>3 Gravity Blade come «nuova norma»</strong> — vedi il tribunale delle Tech.)</em></p>" },
        { t: "Perché la removal spegne Rosinante (i loro 2 turni di sviluppo)",
          c: "<p class=\"chicca\">Il razionale della hard removal in un deck aggro (file 16): i deck mid-range spendono <strong>interi turni</strong> a sviluppare corpi da cui si aspettano valore per tutta la partita. Rosinante mette <strong>blocker Promo Law + Rosinante & Law</strong> = <strong>due turni di sviluppo</strong>. La <strong>Gravity Blade</strong> ribalta il matchup perché <strong>rimuove due loro turni in una carta</strong>, e da lì hanno pochissimo da swingarti nel board → tu prendi valore ripetuto coi tuoi corpi. «Rimuovi lo sviluppo multi-turno dell'avversario e prendi valore ripetuto dai tuoi.»</p>" },
        { t: "Mulligan vs Rosinante",
          c: "<p class=\"chicca\">Contro Rosinante vuoi <strong>weenie ripetuti</strong> (Equinby ammette di non avere certezza al 100% sui criteri). Andando secondi vs Rosie: <strong>doppia Electrical Luna = snap keep</strong>.</p>" }
      ]
    }
  ],

  timeline: null
};

/* ============================================================
   BLACK YAMATO
   ============================================================ */
window.DATA.matchups["yamato"] = {
  id: "yamato",
  nome: "Yamato",
  sigla: "B Yamato",
  colore: "Nero",
  colorHex: "#9AA7B8",
  leaderImg: "lead_yamato",
  tier: "meta",
  tagline: "Una race al Leader contro un deck esplosivo ma prevedibilissimo: parti un turno indietro sul lethal — rubalo con freeze, blocker e restand.",

  verdetti: [
    { fonte: "dog", label: "Even", pos: 0, winrate: null, dado: "secondo",
      nota: "Entrambi vanno al Leader: matchup di clock setup; loro partono a 5 life, noi a 4." },
    { fonte: "raphterra", label: "Leggermente sfavorito", pos: -0.75, winrate: null, dado: "secondo",
      nota: "«È una race: sei di solito 1 turno indietro sul lethal» — l'obiettivo è stallare quell'unico turno con freeze e blocker. Secondo per negare Kin'emon (4c) → Yamato (6c) on curve." },
    { fonte: "dogcoach", label: "Even (straightforward)", pos: 0, winrate: null, dado: "secondo",
      nota: "Il die roll dà un grande boost: andando secondi la loro curva peggiora e hanno un turno in meno per la board. Matchup «abbastanza straightforward»: i giocatori Yamato spesso misplayano." }
  ],

  consenso: [
    { testo: "<strong>Vai secondo: unanime.</strong> Dog (Bible), Raphterra e il coaching di Dog concordano tutti: andare secondi previene/peggiora la loro curva <strong>Kin'emon (4c)</strong> → <strong>Yamato (6c)</strong> e toglie loro un turno di board.", fonti: ["dog", "raphterra", "dogcoach"] },
    { testo: "<strong>Resta healthy nell'early:</strong> counter gli attacchi da 5k/6k che chiedono una sola carta. Dog: ti serve per il mid game quando arrivano i loro 6k. Raphterra: avranno di sicuro attacchi da 8k più grandi dopo. Dog coaching: «il tuo obiettivo principale è restare il più healthy possibile» — la combo dei 9 DON!! è pericolosa solo se sei basso di life.", fonti: ["dog", "raphterra", "dogcoach"] },
    { testo: "<strong>Yamato non ha removal né interazione con la nostra board.</strong> Dog: l'unico modo che hanno di gestirla è attaccarla. Dog coaching: «se inseguono la tua board, perdono al 100%». Conseguenza condivisa: <strong>Let's Go!! to the Navy Headquarters</strong> è facile da impostare ed è il finisher principale.", fonti: ["dog", "dogcoach", "raphterra"] },
    { testo: "<strong>Boa Hancock + Galdino (Mr.3) comprano il turno che ti manca.</strong> Dog: danno tempo nel mid game, chiudi il mid con almeno una Hancock che nega un loro 6k swing. Raphterra: stunna le copie di <strong>Yamato (8c)</strong> con Boa e Galdino mentre imposti il restand. Dog coaching: «più Boa concateni, più diventa facile».", fonti: ["dog", "raphterra", "dogcoach"] },
    { testo: "<strong>Free block col cervello:</strong> conta sempre gli attacchi rimasti prima di prenderlo. Raphterra: aprono coi 5k del Leader/personaggi per baitare il block, poi lo Yamato da 8k (magari con <strong>Otama (2c)</strong>) entra nel tuo blocker per ucciderlo. Dog: se attaccano un tuo 6k rested di solito va bene — ha già dato valore e fa da pseudo-blocker.", fonti: ["raphterra", "dog"] },
    { testo: "<strong>Hanno tanti 2k counter:</strong> i 6k swing non sono sempre i più efficienti. Dog: spesso meglio 5k + 7k che due 6k. Dog coaching: «se hai la possibilità di andare 5 e 7, vai 5 e 7 (se non hanno blocker)».", fonti: ["dog", "dogcoach"] },
    { testo: "<strong>Curva prevedibilissima:</strong> Kurikomon → Yamato → 8k/combo dei 9 DON!!. Dog: «Yamato è molto prevedibile, guarda la partita dal loro lato». Se mancano <strong>Kin'emon (4c)</strong> o <strong>Yamato (6c)</strong> on curve, hai il tempo di impostare il tuo lethal (Raphterra).", fonti: ["dog", "raphterra", "dogcoach"] },
    { testo: "<strong>La reach di lethal di Navy HQ è assurda (Hrvoje).</strong> In torneo ha ucciso uno Yamato <strong>andando primi</strong> (la curva peggiore) impostando <strong>Let's Go to Navy HQ</strong> e sparandola sul turno da 9 DON!! da <strong>4 vite e 4 carte in mano</strong> — «cosa fai contro 12 swing?» (ogni vita ≈ 2 swing). La sola minaccia ti fa vincere: gioca <strong>2 copie di HQ</strong>, non 1. L'<strong>Ivankov green</strong> è ottimo qui per impostare i nomi diversi, specie andando primi.", fonti: ["hrvoje"] }
  ],

  dibattiti: [
    { tema: "Even o sfavorito?",
      posizioni: [
        { fonte: "dog", testo: "Even in Bible, meglio andando secondi. Late game «relativamente facile se hai navigato bene» le fasi precedenti." },
        { fonte: "raphterra", testo: "Slightly Unfavored: «se pescano bene e giocano correttamente, vincono la maggior parte delle volte» — sei sempre ~1 turno indietro sul lethal. Ma hanno problemi di consistenza e whiffano spesso, quindi ne vinci comunque una buona quota. Conta anche la differenza di esperienza nel matchup." },
        { fonte: "dogcoach", testo: "In pratica più morbido del previsto: matchup «abbastanza straightforward», i giocatori Yamato spesso misplayano (es. inseguono la board invece del Leader — e lì perdono al 100%)." }
      ] },
    { tema: "Race sprint o partita costruita lentamente?",
      posizioni: [
        { fonte: "raphterra", testo: "«È una race»: non puoi batterli nel long game perché nel late hanno più attacchi di te. Vai wide e aggro subito, poi stalla il turno che ti manca." },
        { fonte: "dog", testo: "«Partita da costruire lentamente»: naviga ogni fase, guadagna risorse, resta healthy. Il clock setup conta più della velocità grezza — ma anche per Dog entrambi vanno al Leader e devi capire quanto tempo hai." }
      ] }
  ],

  gameplan: {
    early: "<p>Early semplice: pochi loro personaggi nei primi turni, curva prevedibile (Kurikomon → 6k bodies).</p><ul><li><strong>Counter i primi 5k/6k:</strong> counter gli attacchi che chiedono una sola carta e sviluppa restando healthy.</li><li><strong>Se partono con 1-cost:</strong> tradeggiano Mr.1, Mr.2 Bon Clay, Luffy da 5 — sviluppa corpi più grandi o proteggi i piccoli col loop di <strong>Crocodile</strong>.</li><li><strong>Se non hanno weenie early:</strong> i tuoi piccoli funzionano da pseudo-blocker (Raphterra).</li><li><strong>Chiusura dell'early:</strong> <strong>Buggy + Prisoner</strong> o Crocodile + più corpi.</li><li><strong>Swing:</strong> spesso meglio 5k + 7k che due 6k (tanti 2k counter dal loro lato).</li></ul>",
    mid: "<p>Una delle fasi più importanti: non rallenti molto la loro aggressione, ma puoi comprare tempo.</p><ul><li><strong>Boa Hancock + Mr.3:</strong> danno tempo — stunna le copie di <strong>Yamato (8c)</strong> (Raphterra).</li><li><strong>Freeze quasi inutili qui:</strong> <strong>Electrical Luna</strong> e <strong>I Know You're Strong…</strong> servono a poco (board fatta di 8k+).</li><li><strong>Entrambi al Leader:</strong> nessuno dei due interagisce con la board dell'altro → gestisci <strong>life e hand size</strong>.</li><li><strong>6k rested attaccati:</strong> di solito va bene — hanno già dato valore.</li><li><strong>Chiusura del mid:</strong> almeno una <strong>Hancock</strong> in board che nega uno dei loro 6k swing.</li><li><strong>Free block:</strong> prima conta sempre quanti attacchi gli restano (occhio a Yamato 8k + <strong>Otama</strong> sul tuo blocker).</li></ul>",
    late: "<p>Relativamente facile se hai navigato bene. Skill chiave: leggere la <strong>counter power</strong> di entrambi.</p><ul><li><strong>Minacce da rispettare:</strong> la combo 8k bodies + Yamato che ri-porta il <strong>Blocker da 2</strong> (punisce con 5k/6k/8k), gli Event difensivi +3k/+4k e <strong>Ground Death</strong> (spegne un tuo Blocker → non affidarti a un solo corpo difensivo).</li><li><strong>Imposta il lethal:</strong> <strong>Let's Go!! to the Navy Headquarters</strong> è facile da abilitare (niente removal loro).</li><li><strong>Alternative:</strong> doppi swing con Hancock, <strong>Brook</strong> (restand), <strong>DMG</strong> (spegne più Blocker insieme).</li><li><strong>Scommesse sul lethal (Raphterra):</strong> o speri che non abbiano i counter, o in difesa accetti che i tuoi life possano contenere counter, perché devi salvare i combo pieces in mano (<strong>Brook</strong> + restand event).</li></ul>"
  },

  carteAvversarie: [
    { nome: "Yamato (6c)", nota: "Il pezzo di curva da negare andando secondi (Raphterra). Riporta un corpo 6k o meno dal trash e gioca un 2k gratis — blocker o searcher (Dog coaching)." },
    { nome: "Yamato (8c)", nota: "Gli 8k swing del mid/late: stunnali con Boa (7c) e Galdino (4c) mentre imposti il restand (Raphterra). Un buon giocatore lo usa per entrare nel tuo blocker subito dopo i poke da 5k." },
    { nome: "Kin'emon (4c)", nota: "L'altro pezzo di curva: se mancano Kin'emon o Yamato (6c) on curve, hai il tempo di impostare il tuo lethal (Raphterra)." },
    { nome: "Kurikomon", nota: "L'opener tipico della loro curva prevedibile: Kurikomon → Yamato → 8k / combo dei 9 DON!! (Dog, Dog coaching)." },
    { nome: "Otama (2c)", nota: "Riduzione di potenza usata per assicurare il kill sul tuo blocker dopo averti baitato il free block coi 5k (Raphterra). Conta gli attacchi rimasti prima di bloccare." },
    { nome: "Ground Death (Event)", nota: "Spegne un tuo Blocker sul turno di lethal: non affidarti mai a un solo corpo difensivo (Dog)." },
    { nome: "Blocker da 2 (2c)", nota: "Yamato lo ri-porta dal trash: la combo 8k bodies + Blocker da 2 riproposto punisce con sequenze 5k/6k/8k (Dog). Insieme agli Event difensivi +3k/+4k è la loro counter power da rispettare." }
  ],

  perFonte: [
    {
      fonte: "dog",
      origine: "Matchups Bible §5.5",
      sezioni: [
        { t: "Overview",
          c: "<p><strong>Difficoltà: Even · Start preferito: Secondo.</strong> Matchup dove entrambi vanno soprattutto al <strong>Leader</strong>: matchup basato sul <strong>clock setup</strong>.</p><ul><li><strong>Rispetta la loro counter power:</strong> capire quanta pressione Yamato può fare — tanto draw, ciclano bene → molti 2k counter.</li><li><strong>Life:</strong> loro partono a <strong>5 life</strong>, noi a <strong>4</strong> → pressione su di noi. Non gestiamo bene i loro 6k → capire quanto tempo abbiamo.</li><li><strong>Resta healthy nell'early:</strong> counter gli attacchi che chiedono una sola carta.</li><li><strong>Board larga:</strong> a seconda dei loro 2k bodies decidi se andare wide coi piccoli o affidarti a <strong>Buggy + Prisoner</strong> / <strong>Crocodile</strong>.</li><li><strong>Mid/late:</strong> <strong>Boa Hancock + Mr.3</strong> negano i loro 6k swinger.</li><li><strong>Yamato non ha vera removal:</strong> l'unico modo di gestire la nostra board è attaccarla — e se attaccano un nostro 6k rested va bene: ha già dato valore e fa da pseudo-Blocker.</li><li><strong>Mulligan:</strong> vedi lo screenshot «mulligan B Yamato» nel capitolo sorgente.</li></ul>" },
        { t: "Early game",
          c: "<p>Semplice: pochi loro personaggi nei primi turni, curva prevedibile (da <strong>Kurikomon</strong> in Yamato → 6k bodies). Counter i primi attacchi (5k/6k) e sviluppa restando healthy. Attento se partono con <strong>1-cost</strong> (tradeggiano Mr.1, Mr.2 Bon Clay, Luffy da 5): a volte sviluppa corpi più grandi o proteggi i piccoli (swinghi un 2-cost, giochi <strong>Crocodile</strong>, bounci e rigiochi dopo).</p><p>Nota: <strong>i 6k swing non sono sempre i più efficienti</strong> contro Yamato (tanti 2k counter); spesso meglio <strong>5k + 7k</strong> che due 6k. Chiudi l'early con <strong>Buggy + Prisoner</strong> o Crocodile + più corpi. Resta abbastanza healthy per il mid game (quando arrivano i loro 6k).</p>" },
        { t: "Mid game",
          c: "<p>Una delle parti più importanti. Non rallenti molto la loro aggressione, ma <strong>Boa Hancock + Mr.3</strong> danno tempo. <strong>Electrical Luna</strong> e <strong>I Know You're Strong…</strong> sono qui quasi inutili (board fatta di 8k+). Capisci quanta pressione possono fare; vicino ai 10 DON!! spingi di più.</p><p>Nessuno dei due interagisce con la board dell'altro → entrambi al Leader: gestisci <strong>life e hand size</strong>. Quando attaccano i tuoi 6k rested, di solito va bene (sviluppi nuove minacce mentre il loro corpo ha già attaccato e assorbito uno swing). Chiudi il mid con almeno una <strong>Hancock</strong> in board negando uno dei loro 6k swing.</p>" },
        { t: "Late game",
          c: "<p>Relativamente facile se hai navigato bene. Skill chiave: capire la <strong>counter power</strong> di entrambi.</p><ul><li><strong>Blocker da entrambi i lati:</strong> entrambi hanno <strong>Blocker</strong> e pochi modi di gestirli → puoi fare doppio Blocker, ma anche loro.</li><li><strong>Combo loro pericolosa:</strong> 8k bodies + Yamato che ri-porta il <strong>Blocker da 2</strong> → punisce con 5k/6k/8k.</li><li><strong>Event difensivi:</strong> rispetta i loro +3k/+4k.</li><li><strong>Ground Death:</strong> spegne un tuo Blocker → non affidarti a un solo corpo difensivo.</li><li><strong>Obiettivo — setup di lethal:</strong> facile impostare <strong>Let's Go!! to the Navy Headquarters</strong> (Yamato non ha removal per la nostra board): con nomi diversi crei molti swing e chiudi.</li><li><strong>Partita da costruire lentamente:</strong> naviga ogni fase, guadagna risorse, resta healthy.</li><li><strong>Yamato è molto prevedibile:</strong> guarda la partita dal loro lato.</li><li><strong>Alternative al lethal:</strong> doppi swing con Hancock, o <strong>Brook</strong> (spegne i loro 6k swing). <strong>DMG</strong> utile (spegne più Blocker insieme).</li></ul>" },
        { t: "Tips",
          c: "<ul><li>Resta healthy nell'early (counter i primi 5k/6k che chiedono una sola carta).</li><li>Capisci e gioca attorno alla loro curva prevedibile (Kurikomon → Yamato → 8k).</li><li>Board larga ma rispetta i loro piccoli; pianifica gli swing per non farti tradeggiare.</li><li><strong>Boa Hancock + Mr.3</strong> per il tempo nel mid game.</li><li>Mix 5k + 7k spesso meglio dei 6k (tanti 2k counter).</li><li><strong>Let's Go!! to the Navy Headquarters</strong> come finisher (niente loro removal).</li></ul>" }
      ]
    },
    {
      fonte: "raphterra",
      origine: "Cap. 8.4",
      sezioni: [
        { t: "Verdetto, dado e mulligan",
          c: "<p><strong>Favorability: Slightly Unfavored. Turn order: secondo</strong> — per prevenire la loro sequenza on curve <strong>Kin'emon (4c)</strong> → <strong>Yamato (6c)</strong>.</p><p><strong>Mulligan priority:</strong> <strong>Luffy (1c)</strong>, <strong>Mr.2 Bon Clay (2c)</strong>, <strong>Daz Bones (2c)</strong>.</p>" },
        { t: "Macro gameplan",
          c: "<p><strong>È una race.</strong> Non puoi batterli nel long game: nel late hanno più attacchi di te. Vai wide e mettili sotto aggro presto. Nel mid game, stunna le loro copie di <strong>Yamato (8c)</strong> con <strong>Boa (7c)</strong> e <strong>Galdino (4c)</strong> e prova a impostare il tuo restand event per vincere. <strong>Sei di solito 1 turno indietro sul lethal: il tuo obiettivo ultimo è stallare quell'unico turno quanto basta per assicurarti il lethal.</strong></p>" },
        { t: "Approccio difensivo",
          c: "<ul><li><strong>Priorità di counter:</strong> Black Yamato è un deck esplosivo con tantissimi attacchi dal mid game in poi. Avranno sempre grossi attacchi da 8k nel mid-late, quindi per quanto possibile counter fuori dagli attacchi che richiedono <em>una sola carta</em> per essere counterati: gli attacchi più grossi arriveranno di sicuro dopo.</li></ul>" },
        { t: "Free block: come valutarli",
          c: "<p>Di solito aprono i loro turni con attacchi da 5k dal Leader Yamato e dai personaggi, dandoti l'opportunità di free block coi tuoi blocker da 6k. <strong>Ma attenzione:</strong> un buon giocatore Yamato userà lo <strong>Yamato da 8k</strong> per attaccare il tuo blocker subito dopo, magari usando anche <strong>Otama (2c)</strong> per ridurne la potenza e assicurarsi il kill.</p><p>Prima di prendere il free block, valuta se ti serve per il tuo turno d'attacco o se ti va bene usarlo come corpo sacrificale che assorbe attacchi. Dipende da quanti counter hai in mano e quanti attacchi restano all'avversario. <strong>Conta sempre il numero di attacchi rimasti all'avversario prima di prendere free block.</strong></p>" },
        { t: "Condizioni di vittoria",
          c: "<ul><li><strong>Dipendenza dalle loro pescate:</strong> vincere o perdere dipende in gran parte da come pesca Black Yamato. Se pescano bene e giocano correttamente, dovrebbero vincere la maggior parte delle volte, principalmente perché sei quasi sempre 1 turno indietro sul lethal. Però Black Yamato ha problemi di consistenza e molte partite in cui whiffa la mano: ne vinci comunque una buona quantità. C'è anche un fattore di differenza di esperienza nel matchup.</li><li><strong>Niente weenie early da parte loro:</strong> tutti i tuoi personaggi early funzionano da pseudo-blocker, perché assorbono attacchi che sarebbero andati al tuo Leader.</li><li><strong>Pezzi di curva mancati:</strong> se mancano <strong>Kin'emon (4c)</strong> o <strong>Yamato (6c)</strong> on curve, hai il tempo di impostare il tuo lethal.</li><li><strong>Inesperienza nel matchup:</strong> se non conoscono il pairing e si concentrano troppo sull'attaccare i life ignorando i tuoi 6k rested.</li></ul>" },
        { t: "Winning line",
          c: "<p>La via principale per vincere: pokali giù assicurandoti di impostare blocker e counter <em>quanto basta</em> per sopravvivere al loro turno di lethal, poi rispondi col lethal tuo via <strong>board restand event</strong> o restand di <strong>Brook (6c)</strong>.</p><p>La maggior parte delle volte devi fare delle scommesse quando vai per il lethal: o speri che non abbiano i counter in mano, oppure — quando difendi i loro attacchi — accetti che i tuoi life possano contenere counter, perché devi salvare i combo pieces in mano: <strong>Brook (6c)</strong> e il board restand event.</p>" }
      ]
    },
    {
      fonte: "dogcoach",
      origine: "Coaching (file 08) — Sessione 2, overview Yamato",
      sezioni: [
        { t: "Meccanica del deck",
          c: "<p>Enrico spiega la meccanica e mostra un video:</p><ul><li>Sul <strong>Yamato (6c)</strong>: riporta un corpo da 6k o meno dal trash + gioca un 2k gratis (blocker o searcher).</li><li>La combo avviene a <strong>9 DON!!</strong>: 5-cost + 2-cost → spawna 9k+ bodies con Rush (3 attacchi invece di 1).</li><li>Curva molto prevedibile: Kurikomon → Yamato → combo dei 9 DON!!.</li><li><strong>Yamato non ha interazioni con la tua board.</strong> Se inseguono la tua board, perdono al 100%.</li></ul>" },
        { t: "Rimani healthy nell'early — base del matchup",
          c: "<p class=\"chicca\">«Il tuo obiettivo principale è restare sempre il più healthy possibile.» Counter gli attacchi da 5-6k che chiedono una carta. La combo a 9 DON!! è pericolosa solo se hai pochi life.</p>" },
        { t: "I 6k swing sono meno efficienti vs Yamato",
          c: "<p class=\"chicca\">«A volte, se hai la possibilità di andare 5 e 7, è meglio andare 5 e 7. Se non hanno un blocker. Perché i 6k non sono così potenti contro questo deck — hanno tanti 2k counter.»</p>" },
        { t: "Boa + Mr.3 = tempo",
          c: "<p class=\"chicca\">«<strong>Boa Hancock + Mr.3</strong> danno tempo. […] Più Boa concateni, più diventa facile.»</p>" },
        { t: "Let's Go to the Navy HQ funziona benissimo",
          c: "<p class=\"chicca\">«È facile impostare <strong>Let's Go!! to the Navy Headquarters</strong>: Yamato non ha removal per la nostra board.» Con 5 nomi diversi crei molti swing e chiudi.</p>" },
        { t: "Come si perdono le partite",
          c: "<p class=\"chicca\">«O trigghereranno come pazzi, o hai mancato tutta l'early game.»</p>" },
        { t: "Die roll",
          c: "<p class=\"chicca\">Il die roll dà un grande boost: <strong>andando secondi</strong> la curva avversaria è peggiore e hanno un turno in meno per la loro board. (Coerente con Bible e Raphterra: nessun conflitto, tutti vogliono andare secondi.)</p>" },
        { t: "Priorità di studio",
          c: "<p>Nella lista di priorità di studio di Enrico, Yamato è al 4° posto: «abbastanza straightforward, i giocatori spesso misplayano».</p>" }
      ]
    }
  ],

  timeline: null
};
