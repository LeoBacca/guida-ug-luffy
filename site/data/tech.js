// Dati tech card — sito "guida definitiva" UG (Blue/Green) Luffy OP16
// Il "tribunale delle tech card": ogni tech discussa dalle fonti, con il verdetto di OGNI fonte che ne parla.
// Fonti: dog (Dogofeisdom, guida Metafy capp. 3 e 6), raphterra (guida Metafy capp. 3-4),
// adam (Adam "RayDeospirata", intervista Top 8 Regional Mexico City), dogcoach (coaching sessions di Enrico/Dog con Tom),
// impactnoob (Impact + Noob, sessioni ladder pt.1-2 + masterclass Nami), equinby (coaching VOD review).
// verdetto: "in" | "out" | "test" | "dipende". Ordinate dalle più dibattute alle più uniformi.
window.DATA = window.DATA || {};
window.DATA.tech = [

  // ==========================================================================
  // LE PIÙ DIBATTUTE
  // ==========================================================================

  { key: "jinbe", nome: "Jinbe (2c 2k)", domanda: "Serve il 2k counter extra con corpo?",
    verdetti: [
      { fonte: "dog", verdetto: "test", testo: "cap.3: scartato — «ogni volta che giocavo Jinbe mi stavo praticamente dando un −1», pur ammettendo che «nel worst case è comunque un 2k counter»; cap.6: reintegrato ×2 nella lista in testing, come 2k con nome unico per il restand event" },
      { fonte: "raphterra", verdetto: "in", testo: "×2 nella GAO: «volevo 12 copie pulite di 2k counter, e Jinbe ha avuto il posto» — rete di sicurezza per mulligare aggressivo (corpo da 2 da droppare se sbagli curva) e nome unico cheap per accendere il restand event nei push di lethal" },
      { fonte: "adam", verdetto: "out", testo: "×0: era in lista al torneo ma non l'ha MAI messo in campo in 17 partite di Swiss. Costa 5 DON (netti 3 col Leader) per swingare solo 5 — meno efficiente di Mr.2 che paga 2 per swingare 6; non cicla, non dà DON extra. «Zero valore nel mazzo»: rimpiazzato da qualsiasi carta che cicli" },
      { fonte: "equinby", verdetto: "dipende", testo: "Nel file 11 lo bocciava seccamente: «Jinbe proprio non mi piace. Vorrei che quei Jinbe fossero Galdino» (non si rimpiazza, non fa nulla di rilevante per il costo). SOFTENING nel video più recente: ora è incerto e lo CONSIDERA per la consistenza — «non so se giocare 11 o 12 2k... non sono sicuro se giocare Jinbe per un corpo extra nell'early», valutandolo come possibile 12° 2k pur restando tiepido" },
      { fonte: "dogcoach", verdetto: "dipende", testo: "già in coaching Enrico suggeriva l'uscita: «se vedi tanta rappresentazione Nami, considera 4× dell'alternativa ai Jinbe» (il Mr.3 green), perché la combo restand più facile vs Nami è Buggy + Prisoner + Boa + Mr.3" }
    ],
    trend: "Le guide (prima) lo giocano ×2; le voci dal campo (dopo) lo tagliano quasi all'unanimità — anche se Equinby, nel video più recente, lo ri-considera per la consistenza (12° 2k). Resta uno dei flip-flop più netti del pool" },

  { key: "missolive", nome: "Miss Olive (5c blocker)", domanda: "Il filtro draw-e-scarta vale lo slot da 5 costi?",
    verdetti: [
      { fonte: "dog", verdetto: "out", testo: "«In pratica una versione peggiore del Crocodile 4-cost»: ha counter e cicla la mano, ma è troppo costosa per il corpo che dà — «se fosse stata un 7k l'avrei considerata». Il 5-cost slot è di Buggy, e lì non c'è play migliore" },
      { fonte: "raphterra", verdetto: "dipende", testo: "0-2 copie a preferenza: hand advantage vero (bounce di un tuo 2c → pesca 2, scarta 1) e resta come blocker, ma «a volte è difficile incastrarla nelle curve ottimali». Ruolo diverso dal Croc: lei è puro deck digging e filtro brick, lui presenza sul board" },
      { fonte: "adam", verdetto: "out", testo: "non raccomandata: filtra ma è troppo costosa sul 5 DON, quando dovresti sviluppare board con Croc o Buggy. Rebecca fa il lavoro di filtro meglio, costa meno e ha pure il trigger" },
      { fonte: "impactnoob", verdetto: "in", testo: "promossa dopo le sessioni ladder: «buona in quasi tutte le partite». Nel mirror hanno vinto un game senza mai calare Buggy gestendo il card advantage proprio con lei; la definiscono il miglior modo del mazzo per guadagnare un turno extra" },
      { fonte: "equinby", verdetto: "out", testo: "scettico dopo 25-30 game: «l'ho pescata 25 volte; l'ho messa sul board zero volte». Ne capisce la teoria (filtrare per trovare counter e sopravvivere un turno extra) ma «quella situazione non capita abbastanza spesso» — pur dichiarandosi aperto a sbagliarsi" },
      { fonte: "hrvoje", verdetto: "in", testo: "1-of «insurance / brick management», un mainstay di ogni BG Luffy: «il deck non ha tanta libertà nel gestire i brick; anche moulligando perfetto a volte una carta si incastra, la curva è troppo stretta». Ti lascia anche scartare un HQ extra quando ne peschi due" }
    ],
    trend: "Il caso più spaccato del tribunale: bocciata da Dog, Adam ed Equinby, promossa sul campo da Impact+Noob — dibattito esplicitamente aperto" },

  { key: "luna", nome: "Electrical Luna (3c event)", domanda: "Il freeze di massa vale il rischio brick?",
    verdetti: [
      { fonte: "dog", verdetto: "out", testo: "«Non credo sarà migliore di I Know You're Strong in questo deck»: è molto improbabile che l'avversario abbia abbastanza personaggi rested da giustificarla — «il più delle volte non avranno più di due rested rilevanti comunque». Possibile 2-of solo se il deck virasse su più freeze event" },
      { fonte: "raphterra", verdetto: "dipende", testo: "alternativa high-ceiling ad All Out: può freezare l'intero board e il Trigger è un blowout difensivo (resta qualsiasi personaggio, senza limiti di costo), ma è counterless — nel matchup sbagliato è una carta morta. Da giocare solo bilanciando con cura il conteggio dei counterless" },
      { fonte: "dogcoach", verdetto: "out", testo: "«Stronger [I Know You're Strong] è meglio della Luna: è rarissimo dover freezare 4 personaggi» — concateni già i freeze di Mr.3 e Boa. E nel mirror «freezare il board è molto pericoloso»: investi il turno e ti uccidono col restand event" },
      { fonte: "equinby", verdetto: "in", testo: "×2 fisse, insieme alla Gravity Blade: «Luna ti vince le partite contro Nami. Molto, molto, molto buona» — proprio nel matchup dove la Gravity Blade rende meno" },
      { fonte: "impactnoob", verdetto: "out", testo: "tagliata (assieme ad All Out): «non aiuta nel matchup Enel — e se non aiuta nel matchup più difficile, in quale lo fa?». Nelle sessioni le Lune avversarie non hanno mai inciso; verdetto finale: Gravity Blade > Luna, «la rimozione permanente batte uno stun temporaneo di un turno»" }
    ],
    trend: "Bocciata quasi ovunque a favore di All Out o Gravity Blade, ma Equinby la difende a spada tratta come tech anti-Nami" },

  { key: "brook", nome: "Brook (6c)", domanda: "Il restander non-Impel Down merita lo slot da finisher?",
    verdetti: [
      { fonte: "dog", verdetto: "test", testo: "cap.3: lo giocava all'inizio, poi tagliato — «troppo situazionale per il playstyle che volevo, e anche un po' troppo costoso» — ma «ancora giocabile: se volete includerlo, 2-of, specialmente per la combo con Boa Hancock»; cap.6: rientra ×1 nella lista in testing" },
      { fonte: "raphterra", verdetto: "in", testo: "×2 nella GAO: finisher primario late game — Double Unblockable con Boa (13k + 15k nello stesso turno) e On Play che resta anche i DON attivi avversari per negare i counter event. «Chiude le partite cogliendo gli avversari di sorpresa»; nel cap.4: piano B affidabile se il percorso del restand viene chiuso" },
      { fonte: "adam", verdetto: "in", testo: "×2, la sua carta preferita: lethal creativi (9-9-9 con due Brook), nega l'«I love you» di Rosinante, e ruba partite andando dritto alle vite quando la board fight è persa. «Non scendere a ×1: se voglio vederne uno, ne gioco due». Attenzione: NON è Impel Down — con lui solo in campo il Leader non attiva (i giudici l'hanno fermato in stream)" },
      { fonte: "equinby", verdetto: "in", testo: "EVOLUTO a ×1 fisso: «sono più un fan di Brook adesso — 2 Boa, 1 Brook. Non vuoi mai pescarne due, ma la prima è buona». Buono quando il board è bloccato. (Nel file 11 lo voleva ma faticava a trovare lo slot: «se fosse un torneo con decklist aperte giocherei Brook di sicuro».)" },
      { fonte: "impactnoob", verdetto: "out", testo: "«fa schifo»: Boa finisce quasi sempre neutralizzata in ogni matchup rilevante — mirror e Nami la freezano col Galdino, Ace la freeza, Enel la uccide, Teach la redirige — quindi il suo bersaglio ideale sparisce. Servirebbe solo vs Rosinante, matchup già stravinto col terzo Gravity Blade in lista" },
      { fonte: "hrvoje", verdetto: "test", testo: "×1, «non ne sono innamorato»: «ti uccide negli stessi spot di HQ/DMG — spesso non conta che sia proprio Brook — ma ci sono casi limite in cui è l'unico lethal disperato che passa». Lo tiene per top cut: sovraccarica il conteggio dell'avversario (Usahachi + DMG + Brook + HQ = «noi comuni mortali non li contiamo tutti»)" }
    ],
    trend: "Dalle guide ×2 come finisher di lusso al «fa schifo» di Impact: la sua sorte dipende tutta da quanto sopravvive Boa" },

  { key: "iknow", nome: "I Know You're Strong / All Out (1c event)", domanda: "Il freeze event verde è meglio della race pura?",
    verdetti: [
      { fonte: "dog", verdetto: "test", testo: "cap.3: fuori lista («raramente avevo due bersagli buoni da freezare — combinavo già Mr.3 e Boa»), ma «carta davvero buona, senza downside: è anche un +3000 counter... giocherei 2-3 copie se il meta diventa più favorevole; penso sia migliore di Electrical Luna in questo deck»; cap.6: entra ×3 nella lista in testing" },
      { fonte: "raphterra", verdetto: "dipende", testo: "«tech safe e affidabile per field aperti», mai davvero morta in mano (3k counter sul Leader). Ma nella GAO l'ha tagliata andando all-in sul restand event: «la riconsidererei pesantemente con un meta saturo di Purple-Yellow Rosinante, altrimenti sto benissimo senza»" },
      { fonte: "adam", verdetto: "out", testo: "era il suo freeze event fino al giovedì prima del regional, poi sostituito dalla Gravity Blade: «prolunga la situazione senza risolverla — Nami aspetta semplicemente e continua a curare»; la Blade vince perché rimuove invece di prorogare (nel transcript «freeze event Luffy», quasi certamente questa carta)" },
      { fonte: "dogcoach", verdetto: "in", testo: "Enrico approva il pacchetto di Tom (Samurai fuori, Stronger ×2 dentro): «meglio della Luna, è rarissimo dover freezare 4 personaggi». Caveat: i freeze event sono «praticamente inutili» contro Enel in modalità Rage, e nel mirror investire il turno nel freeze è rischioso" },
      { fonte: "impactnoob", verdetto: "out", testo: "tagliata insieme alla Luna: gli slot rendono di più su carte da race (es. più Luffy per il push finale)" }
    ],
    trend: "Il freeze package divide: Dog lo tiene in testing, Raphterra e il campo aggro lo tagliano — vive solo nei meta lenti" },

  { key: "rushluffy", nome: "Rush Luffy / Force Luffy (4c, ST30)", domanda: "Il Rush a sorpresa vale un brick in più?",
    verdetti: [
      { fonte: "raphterra", verdetto: "in", testo: "×1 nella GAO: «lo adoro come one-of surprise factor» — Rush rarissimo nel green, e quando attacca resta un blocker avversario (bypassa i muri e i blocker On-KO come Marco e Lucky Roo). «In un mondo ideale ne giocherei di più, ma è counterless: non essere troppo greedy o la mano ti bricka pesantemente»" },
      { fonte: "adam", verdetto: "out", testo: "sconsigliato al momento: «un po' troppo costoso» per un mazzo che vuole essere efficiente. Potrebbe avere un posto se i blocker diventano molto presenti nel meta" },
      { fonte: "equinby", verdetto: "test", testo: "«Adoro Force Luffy. Lo voglio in lista, forse anche in due copie: quella carta è nuts». Tensione altissima però: è il brick assoluto a fine game — potentissimo sul turno 4-5 DON, morto in mano quando devi sopravvivere" },
      { fonte: "impactnoob", verdetto: "test", testo: "pt.2: lodato — «ti dà tipo 10 hit sul turno da 4, fortissimo», stabilizza il turno 4-5 e nei game senza ne hanno sentito la mancanza; linea kill: Luffy + Rush + Galdino pump. Ma nella masterclass Nami resta fuori: «mi piace molto», la priorità però è minimizzare i brick (~4 counterless totali in lista)" }
    ],
    trend: "Piace a quasi tutti, entra in poche liste: il problema non è la carta, è il budget di brick" },

  { key: "dmg", nome: "Dead Man's Game (1c event)", domanda: "Il rest di blocker/DON serve davvero per il lethal?",
    verdetti: [
      { fonte: "dog", verdetto: "test", testo: "«potrebbe vedere gioco come 1-of in futuro, a seconda di quanto difensivo diventa il meta»: negare due blocker, o un blocker più un DON aperto, è rilevante in diverse situazioni; uso molto simile a Brook per sbloccare i turni lethal" },
      { fonte: "raphterra", verdetto: "dipende", testo: "0-2 copie: «la tech più consistente con cui sostituirei la Gravity Blade» — board control, pezzo di lethal (resta i blocker di Enel/Rosinante o i DON dei counter event) e nel worst case 3k counter sul Leader" },
      { fonte: "adam", verdetto: "test", testo: "non testata prima del torneo, quindi fuori lista: «potrebbe avere potenziale, da esplorare nelle sessioni successive»" },
      { fonte: "impactnoob", verdetto: "out", testo: "ritenuta ok ma meno affidabile del restand OTK: sorprendentemente «è più facile montare il restand OTK che soddisfare le condizioni di Dead Man's», nonostante sulla carta sembri il contrario" },
      { fonte: "hrvoje", verdetto: "in", testo: "«Il miglior tool di lethal del deck», ma non ci si affida (spesso non serve; alcuni deck pianificano di bloccarlo con doppio Borsalino). Ottimo anche come control mid-game: con dei corpi (idealmente la ball) tappi qualunque cosa sul loro board — «un Force Hodi in forma di evento»" }
    ],
    trend: "L'eterna promessa: tutti la rispettano, nessuna delle fonti la gioca davvero" },

  { key: "ivankov3c", nome: "Emporio Ivankov (3c)", domanda: "Il 3-cost di ridondanza ha un posto?",
    verdetti: [
      { fonte: "dog", verdetto: "out", testo: "«più la testavo, più sentivo che non serviva affatto»: i pochi 2-cost del deck negano quasi sempre il primo effetto On Play, e col build Samurai il secondo non scattava mai; corpo 4k non ideale. «Non sono un fan, e non credo verrà giocata in futuro»" },
      { fonte: "impactnoob", verdetto: "in", testo: "riabilitata come pura ridondanza per il turno 3 andando primi (prima non c'era un buon 3-drop). La search «non colpisce mai» (~26% reale, percepito zero) e va benissimo così: è comunque un 4k che swinga e pesca una carta, difficile da punire; se la search colpisce «spesso vinci la partita all'istante»" },
      { fonte: "hrvoje", verdetto: "in", testo: "2-3 copie: «la gente lo legge male — non lo giochi per colpire un 2-cost (irrealistico, ~20% senza setup)». Cos'è davvero: un 3c 4k con scry 1 che pesca quando attacca — fa in due step ciò che fanno le tue carte migliori, ed è una copia extra della prima curva (la tua più debole), quindi la migliori. Il 2° al Treasure Cup ne giocava 4" }
    ],
    trend: "Contraddizione frontale: bocciata a inizio formato da Dog, riabilitata dal campo con aspettative ridimensionate" },

  // ==========================================================================
  // I PROCESSI SUL CONTEGGIO (core card, nessuno le taglia — si litiga sulle copie)
  // ==========================================================================

  { key: "hancock", nome: "Boa Hancock (7c)", domanda: "Quante copie del boss: 2 o 3?",
    verdetti: [
      { fonte: "dog", verdetto: "in", testo: "×3: «la carta più forte del deck» e win condition principale delle partite lunghe. Non serve vederla ogni game — «il più delle volte ce ne basta una per sigillare la partita»" },
      { fonte: "raphterra", verdetto: "in", testo: "×3 nella GAO (2 nel core): «2-3 copie; 4 è rischioso» perché è counterless e brick nell'early. Must-have contro i leader che si autopompano (Blue-Yellow Nami, Red-Blue Ace)" },
      { fonte: "adam", verdetto: "in", testo: "«LA carta più rotta del mazzo»: 9k unblockable che freeza tutto «tranne suo marito». Con il Galdino 4c è l'unico modo di stare in partita contro Enel. Conteggio ricostruito ×2 (forse 3)" },
      { fonte: "impactnoob", verdetto: "in", testo: "ma solo ×2: Impact si autodefinisce «il più grande hater di Boa di sempre» — meno necessaria di quanto si pensi in molti matchup; si vince anche senza mai calarla. Il co-host concorda su 2, altri preferiscono 3" },
      { fonte: "equinby", verdetto: "in", testo: "×2 («2 Boa, 1 Brook»; «ho double boa»). È il perno del board control (rende triviale swingare sopra i corpi avversari) e chiude via Brook. Conferma la linea delle voci dal campo: 2 copie, non 3 — nel suo video più recente è sceso da 3 a 2 col Brook accanto" },
      { fonte: "hrvoje", verdetto: "in", testo: "×2 (scesa da 3): «la amo ma è un brick». Più importante nel Nami (immune ai trigger, buchi i Leader da 7k); molto rilevante anche vs mirror ed Enel (nel mirror forse non la cali se hai di meglio). Sammy ne gioca 1 e regge, ma 2 è la sua baseline" },
      { fonte: "dogcoach", verdetto: "in", testo: "vs Nami è priorità assoluta: «tutto ciò che facciamo negli altri matchup non funziona — cala Boa APPENA puoi»; vs Rosinante serve soprattutto a spegnere il blocker; nel mirror vale la «Boa War»: mai proattivi, «più riesci a ritardarla, meglio è»" }
    ],
    trend: "Nessuno la taglia: la guerra è sul conteggio — 3 per le guide, 2 per le voci dal campo" },

  { key: "ivankov", nome: "Emporio Ivankov (4c)", domanda: "Il secondo searcher: 2, 3 o 4 copie?",
    verdetti: [
      { fonte: "dog", verdetto: "in", testo: "×4, «quasi mandatory» nonostante sia la carta più controversa che gioca: consistenza del turno da 4 DON, secondo searcher, e nel late game il two-in-one migliore per arrivare a 5 nomi diversi. «Ha anche counter: non vedo una ragione forte per tagliarlo»" },
      { fonte: "raphterra", verdetto: "dipende", testo: "×2: la sua forza sta strettamente nel turno da 4 DON, poi rendimenti calanti (1k counter in mano). «2 è la baseline affidabile, ma è tra le prime carte da tagliare per fare spazio alle tech»; le sue 2 copie servono ad assecondare mulligan aggressivi" },
      { fonte: "adam", verdetto: "in", testo: "«OBBLIGATORIO, non tagliare mai... se non lo giochi, non conosci il mazzo». Abilita lethal line estreme (6 swing da 8-9 col restand) ed è ottimo nel mirror: «non scenderei sotto ×3 se il mirror diventa comune»" },
      { fonte: "dogcoach", verdetto: "dipende", testo: "può scendere a 3 (qualcuno taglia a 2). Tre usi: non mancare il turno da 4 DON senza 2-cost in board, abilitare il restand event con due corpi già in campo, e searcher extra — senza di lui resti con un solo searcher nel deck" },
      { fonte: "impactnoob", verdetto: "in", testo: "caveat di pilotaggio più che di lista: «Ivankov senza swing immediato è quasi sempre sbagliato» — il «double nude Ivankov» visto in ladder è un turno completamente sprecato" }
    ],
    trend: "Range 2-4: tutti lo giocano, nessuno concorda su quanto — il termometro è quanta consistenza early vuoi pagare in slot tech" },

  { key: "crocodile", nome: "Crocodile (4c)", domanda: "3 o 4 copie del bounce-blocker?",
    verdetti: [
      { fonte: "dog", verdetto: "in", testo: "×4: «una delle mie carte preferite... molti provano a tagliarla, ma più giochi il deck più capisci che è una delle migliori risorse». Ho provato 3 copie, ora 4 e mi sento confident" },
      { fonte: "raphterra", verdetto: "in", testo: "×4 nella GAO (2 nel core anti-intasamento): «credo fermamente che vada a 4 in questo build restand-heavy» — enabler fantastico dei turni lethal perché tiene i personaggi attivi e al sicuro, e il Blocker serve per fare fortress assemblando i pezzi" },
      { fonte: "adam", verdetto: "in", testo: "×4: «uno dei miei preferiti quando hai bisogno di ciclare». Da preferire a Buggy sul 5 DON quando vuoi swingare face senza esporre il board o proteggere un pezzo chiave (es. Mr.2)" },
      { fonte: "equinby", verdetto: "dipende", testo: "back-and-forth continuo tra 3 e 4: nei due fail-mode del deck è sempre imputato — senza 2-drop è un brick, e a fine game è il brick più difficile da smaltire (hard-block da 4 DON = un corpo in meno sul board). Top 4 Mexico giocava 3; «le stats dicono 4»" },
      { fonte: "hrvoje", verdetto: "in", testo: "«È un 4-of, folle giocarne meno» — «il bounce-play da 5-cost di OP1 ma più economico (4-6 invece di 5-6)», restanda, cheata swing da 8k/9k, protegge Bon Clay. Ha girato a 3 solo preparando pesante vs Teach (dove «è whatever») e per spazio, e ha fatto Top 4 con 3: «prova vivente che il best 50 non conta, conta il giocatore»" }
    ],
    trend: "Consenso totale sul ruolo; il dibattito residuo è solo sul quarto slot (Hrvoje: «è un 4-of», ma Top 4 con 3)" },

  { key: "mr3", nome: "Mr.3 Galdino (4c)", domanda: "Il 4-of più condiviso del formato... o un 1-of?",
    verdetti: [
      { fonte: "dog", verdetto: "in", testo: "×4 mandatory: «probabilmente una delle migliori carte stampate in OP16... semplicemente insane». Col Leader la paghi 2 DON reali per freezare un boss ≤9c e pescare 2 carte" },
      { fonte: "raphterra", verdetto: "in", testo: "«una delle carte singole più forti del deck: sempre 4 copie». Delayed activation per il massimo value: lascialo sul board, attaccaci, poi trashalo" },
      { fonte: "adam", verdetto: "in", testo: "«il modo in cui batti Enel»: freeza e ricarica la mano quando hai ciclato via tutti i counter — ha vinto da solo la partita vs Teach partita con 4 Prisoner in mano. Combo «criminale» con Brook: ~10 DON potenziali in un turno" },
      { fonte: "dogcoach", verdetto: "in", testo: "contro Enel «prioritizza Galdino per freezare l'Enel [NL] piuttosto che gli eventi»; vs Rosinante è fortissimo per la sequenza freeze che crea turni senza risposta" },
      { fonte: "impactnoob", verdetto: "dipende", testo: "voce fuori dal coro sul conteggio: «mi piaceva come 1-of; quando abbiamo iniziato a pescarne due in mano, ho iniziato a odiarli» — ottima in singola copia, problematica in doppia. E vs Teach «l'extra swing vale più della giocata Galdino» (nota: dal transcript non è certissimo a quale variante di Galdino si riferisca il conteggio; il contesto punta alla 4c)" }
    ],
    trend: "×4 di consenso granitico nelle guide; l'unica dissonanza è Impact+Noob, che sul conteggio dicono 1-of" },

  { key: "galdinorest", nome: "Mr.3 Galdino rest (2c, OP16)", domanda: "Il rest-Galdino da 2 costi merita lo slot?",
    verdetti: [
      { fonte: "dog", verdetto: "test", testo: "cap.3: carta toolbox da meta — 5° nome per il lethal, buona se i blocker proliferano e nel mirror; «se fosse stata un 2k counter sarebbe stata broken». «Probabilmente testerò due copie, ma dal mio testing finora non è stata così utile»" },
      { fonte: "raphterra", verdetto: "dipende", testo: "tech per vincere la board race early (Purple Enel e mirror): resta un personaggio ≤5c per pulirlo in battaglia o freezarlo il turno dopo con Luna/All Out; loop col Croc per restarne due nello stesso turno" },
      { fonte: "equinby", verdetto: "in", testo: "1-of fondamentale, e ne vorrebbe di più: paga ~0 DON reali per resettare il Borsalino o la Boa avversaria, e fa da 5° nome per il restand. «Se questa carta fosse un 2K, sarebbe un 4-of al 100%: questo deck giocherebbe sedici 2K»" },
      { fonte: "impactnoob", verdetto: "in", testo: "«tutti i Galdino sono broken nel mirror» — e la versione rest è ottima per togliere un body difensivo chiave prima del push" }
    ],
    trend: "Da toolbox dubbioso (Dog) a 1-of di consenso nelle voci dal campo" },

  { key: "mr3_2c", nome: "Mr.3 Galdino 2k (2c, ST30)", domanda: "Il pump-Galdino 2k: quante copie?",
    verdetti: [
      { fonte: "dog", verdetto: "in", testo: "cap.3: «sto provando questa carta come 2-of... la sto testando con ottimi risultati» — ricicla i DON del restand event: dopo il restand del board si ri-erige anche lui e ridistribuisce altri 4 DON su due corpi 6k, per swing da 8k e 10k; cap.6: confermata ×2" },
      { fonte: "raphterra", verdetto: "in", testo: "×2 nel core dei 37: «altamente flessibile» — investi 2 DON attivi, ne estrai 4 riposati; loop col restand event e col bounce del Croc; nel worst case è un 2k counter" },
      { fonte: "adam", verdetto: "in", testo: "×3, «avrebbero dovuto essere 4»: «il mio mini preferito del weekend» e motivo principale delle vittorie su tante Nami. «La cosa più rotta nella combo con Brook e la Gravity Blade» (~10 DON gratis in un turno). «Non cambierò mai più una carta due giorni prima di un torneo»" },
      { fonte: "dogcoach", verdetto: "in", testo: "Enrico approva il ratio 2k di Tom: il Mr.3 green piace «perché abilita linee di lethal con il restand event»; con tanta Nami nel field, «considera 4× dell'alternativa ai Jinbe»" },
      { fonte: "impactnoob", verdetto: "in", testo: "broken nel mirror con le altre versioni, ed è il perno dei blueprint lethal vs Nami: 7-7-7-9 → restand → riattivi Galdino → 9-9-9-9" }
    ],
    trend: "Consenso pieno e in crescita: 2-of nelle guide, Adam lo voleva ×4" },

  { key: "gravityblade", nome: "Gravity Blade Raging Tiger (7c event)", domanda: "Quante copie del wipe blu: 1, 2 o 3?",
    verdetti: [
      { fonte: "raphterra", verdetto: "in", testo: "×1 nella GAO: «la mia pet card... high-risk/high-reward»: blowout totali su board pari o in vantaggio, partite letteralmente rubate a Red Ace e Yellow Kalgara. «Massimo 1 copia se il meta non lo esige: raramente ne casti più di una a partita». Brilla nel mirror e vs Ace, Teach, Rosinante" },
      { fonte: "adam", verdetto: "in", testo: "×2 e ne voleva 3: «LA tech del weekend» (idea originale di Enrico/Dog, presa il giovedì prima del torneo): «la migliore carta quando ce l'hai, contro OGNI matchup tranne Enel». Ci ha battuto Santiago, futuro vincitore del regional; il trigger da vita è «rotto»" },
      { fonte: "equinby", verdetto: "in", testo: "EVOLUTA a ×3 («three grabblade, the new norm»): il suo gruppo è passato da 1 a 3 copie. Motivo: è polarizzante nel mirror → vuoi la miglior chance di vederne una presto, senza i rendimenti calanti del 4°; e «non fa male» vs Rosie/Nami. Timing chiave: sparala col BOARD GIÀ SVILUPPATO / da posizione di vantaggio — se sei sotto-sviluppato loro ridevelopano e resti in loop; da avanti prendi un turno intero di swing impuniti. Nel mirror la 1ª GB conta più di tutto e la GB da trigger «vince all'istante». (Nel file 11 la giocava ×1 accanto a 2 Luna — «quando ti Gravity Bladeano puoi stringergli la mano: game over». Dead vs Enel.)" },
      { fonte: "impactnoob", verdetto: "in", testo: "fino a ×3 in lista: broken nel mirror, vs Nami e vs Rosinante (che col terzo Gravity Blade «non ha counterplay reale»); inutile solo vs Teach (già vinto), mediocre vs Enel ma col trigger che vale comunque. Inserita per mirror/Rosinante — la scoperta vs Nami è arrivata dopo: «se becco la Gravity Blade su uno dei loro turni a 7 DON, la partita è semplicemente finita»" },
      { fonte: "hrvoje", verdetto: "dipende", testo: "La prima voce forte CONTRO, almeno nel mirror: la ODIA. «Nel mirror fa giocare entrambi meno una partita vera, e non è neanche buona lì — solo se sei già avanti sul board. Se sei even e loro ridevelopano, ti sei invalidato un intero turno.» La tiene ×1 solo per obbligo di meta (se non ce l'hai e loro sì, ti freghi): «alla prima scusa la taglio». Vs Nami «non ha mai trovato uno spot» per usarla — preferisce più corpi / attach. NB: Elijah (l'intervistatore) dissente apertamente e la considera forte contro tutto tranne Enel" }
    ],
    trend: "Consenso quasi totale sul giocarla e in salita (Elijah è passato da 1 a «3, la nuova norma»), ma Hrvoje rompe il coro: è il primo a dire che nel mirror è sopravvalutata e la tiene solo per obbligo — dibattito aperto con Elijah" },

  // ==========================================================================
  // VERDETTI PIÙ UNIFORMI
  // ==========================================================================

  { key: "gumgumrain", nome: "Gum-Gum Rain (0c event)", domanda: "Serve l'hedge contro i brick?",
    verdetti: [
      { fonte: "dog", verdetto: "in", testo: "×1: sbrickatore cercabile — «a volte sentivo di avere troppi brick in mano, ed ero a 49 carte: era l'aggiunta migliore per l'ultimo slot». Fixa la mano scartando Croc/Boa/Samurai doppi" },
      { fonte: "raphterra", verdetto: "in", testo: "×1 nella GAO (0-2 a seconda dei counterless in lista): «il testing mostrava 1-3 brick morti a fine partita — un filter event a costo 0 li trasforma in difesa attiva». Unico 3k counter del deck giocabile anche sui personaggi, non solo sul Leader" },
      { fonte: "impactnoob", verdetto: "dipende", testo: "«è letteralmente solo un hedge contro i brick»: mai vista giocare in tutta la sessione. La sua utilità dipende dal conteggio brick della lista — non ha senso tenere due hedge diversi se i counterless sono già al minimo" },
      { fonte: "equinby", verdetto: "in", testo: "×1: «conta come il dodicesimo 2K» della lista" }
    ],
    trend: "Filler di consistenza a costo zero: dentro quasi ovunque, mai più di una copia" },

  { key: "samurai", nome: "You Can Be My Samurai (event)", domanda: "Il motore di value su corpi rested regge il meta?",
    verdetti: [
      { fonte: "dog", verdetto: "test", testo: "cap.3: ×4, la scelta caratterizzante della lista iniziale — «l'opzione più generica: consistente, flessibile, sinergizza benissimo con ciò che il deck vuole fare» — pur ammettendo «non sono del tutto convinto che resterà nella lista per sempre»; cap.6: sparisce del tutto dalla lista in testing, sostituita dal pacchetto Jinbe / Mr.3 2k / I Know You're Strong / Brook" },
      { fonte: "dogcoach", verdetto: "out", testo: "in coaching Tom ha sostituito i Samurai con 1 Brook + 2 Stronger + 1 Luna, con l'ok di Enrico: carta forte ma «bricka a volte», e non hai abbastanza 1k da scartare volentieri" }
    ],
    trend: "Parabola completata in poche settimane: da playset identitario a tagliata dal suo stesso ideatore" },

  { key: "champrifle", nome: "Gum-Gum Champion Rifle (event)", domanda: "Il KO a sorpresa è affidabile?",
    verdetti: [
      { fonte: "dog", verdetto: "out", testo: "«hypata all'inizio del set, ma non credo sia una buona carta... penso sia semplicemente brutta»: quasi ogni deck ha personaggi piccoli da lasciare sul board per negarla, il payoff è troppo random, e tenere un DON aperto in questo deck è rarissimo" },
      { fonte: "adam", verdetto: "dipende", testo: "«se l'avversario se l'aspetta: inutile. Se non se l'aspetta: fenomenale. Tutto lì»" },
      { fonte: "hrvoje", verdetto: "test", testo: "RIVALUTATA e giocata ×1 come tech Swiss (niente top cut): «pensavamo fosse cattiva senza darle una vera chance; in teoria facile giocarci attorno, in pratica no — non sul momento». Gli ha vinto il game vs Lucy (bounce del Sabo attivo, danni in faccia). ⚠️ Liability vs Enel (scelgono Enel / si riprendono un quest = carta gratis): usala molto presto lì, solo per il 2k value" }
    ],
    trend: "Da bocciata (Dog) a metagame read (Adam) a sorpresa-Swiss vinta sul campo (Hrvoje): sale se il field è pieno di board deck e povero di Enel" },

  { key: "houndblaze", nome: "Hound Blaze (event)", domanda: "La rimozione da mirror vale gli slot?",
    verdetti: [
      { fonte: "dog", verdetto: "out", testo: "molte liste asiatiche la giocano ed è «davvero buona nel mirror», ma fuori dal mirror non ha abbastanza target rilevanti. Forse utile vs BY Teach, ma quel matchup è già ottimo: «non costruirei la lista per migliorarlo»" },
      { fonte: "equinby", verdetto: "out", testo: "«Spazzatura. Non giocatela.» — senza ulteriore discussione" }
    ],
    trend: "Bocciatura bipartisan: vivrebbe solo in un meta di mirror infiniti" },

  { key: "croc6c", nome: "Crocodile (6c, ST30)", domanda: "Il blocker-freeze da 6 costi ha senso?",
    verdetti: [
      { fonte: "dog", verdetto: "out", testo: "«semplicemente una carta molto lenta»: non dà nulla di meglio di Boa 7c, il freeze funziona solo su personaggi già rested, e il corpo è troppo debole per il costo. «Non credo sia pensata per questo deck»" },
      { fonte: "raphterra", verdetto: "out", testo: "«generalmente omessa: 0 copie». Il due-in-uno difensivo (freeze + blocker 6k) esiste, ma il rapporto costo/power è basso e le altre tech danno molto più value" }
    ],
    trend: "L'unico vero consenso negativo totale del pool" },

  // ==========================================================================
  // VOCI A FONTE SINGOLA
  // ==========================================================================

  { key: "rebecca", nome: "Rebecca", domanda: "Il filtro con trigger è la tech mancante?",
    verdetti: [
      { fonte: "adam", verdetto: "in", testo: "×1 (forse 2): «dopo il weekend penso sia obbligatoria». Cicla i brick quando accumuli troppe carte senza counter; gli ha salvato 3-4 partite (un corpo recuperato, o un turno extra di sopravvivenza con 8 counter in mano). Trigger che rimuove carte avversarie (ha mandato a fondo mazzo un Sabo). Preferita a Miss Olive: filtra meglio, costa meno, ha il trigger" }
    ],
    trend: "Tech personale di Adam: nessun'altra fonte la discute" },

  { key: "jetculverin", nome: "Gum-Gum Jet Culverin (3c event)", domanda: "Il bottom-deck economico anti-Enel serve?",
    verdetti: [
      { fonte: "raphterra", verdetto: "dipende", testo: "0-2 copie «strettamente in base a quanta Purple Enel ti aspetti»: a 3 DON manda a fondo mazzo Holly o Reiju mantenendo lo sviluppo grazie ai 2 DON del Leader. Fuori da quel matchup è counterless e rischia di restare in mano come brick" },
      { fonte: "hrvoje", verdetto: "in", testo: "REFRAME: per Hrvoje NON è anti-Enel — anzi lì è debole. È removal generico che bottoma un base-4-cost, e overperforma (forse 2-of): Rau/Law, Burgess/Frankie buffati, Croc nel mirror, Galdino pre-giocato vs Nami (=swing da 4 carte), Cavendish vs Lucy (stoppa lo snowball), Hibari vs Kobe, il Luffy 7k vs Red Ace. «Il removal è tra le cose più forti nei TCG»" },
      { fonte: "equinby", verdetto: "dipende", testo: "«Per lo più una tech per Enel: è il modo più facile di rimuovere Rau.» L'alternativa è la removal two-sword-style (rest 3 → KO due rested ≤4, colpisce Rau ma richiede che abbia attaccato — meno flessibile). Culverin ha anche utility nel mirror (colpisce Croc/Dazbones rested). Si allinea alla lettura anti-Rau di Raphterra, contro il reframe tuttofare di Hrvoje" }
    ],
    trend: "Doppia lettura: silver bullet anti-Enel/Rau (Raphterra, Equinby), ma per Hrvoje è removal tuttofare da base-4-cost (mirror/Nami/Lucy/field) — sale a 2-of" },

  { key: "mr2_4c", nome: "Mr.2 Bon Clay (4c)", domanda: "Il rest offensivo da 4 costi ha un ruolo?",
    verdetti: [
      { fonte: "dog", verdetto: "out", testo: "«ero entusiasta al reveal», ma nel testing è risultata clunky e troppo costosa: quasi mai serve restare i personaggi avversari (forse solo nel mirror), ed è pessima in difesa — «un glass cannon da 4 DON, semplicemente troppo caro per quello che fa»" }
    ],
    trend: "Bocciata da Dog a inizio formato e mai più menzionata da nessuno" },

  { key: "luffy4c", nome: "Monkey D. Luffy (4c blocker)", domanda: "Serve un blocker Luffy in curva?",
    verdetti: [
      { fonte: "dog", verdetto: "out", testo: "stesso principio del Bon Clay 4c: «troppo costoso per il deck». Buono solo nello scenario specifico in cui serve davvero un Blocker, ma difficile da proteggere e counterless — e la curva va tenuta bassa, con il 7-slot riservato a Boa" }
    ],
    trend: "Fuori dai piani di tutti: la curva del deck non lo vuole" },

  { key: "inazuma", nome: "Inazuma", domanda: "Servono blocker cheap nel build?",
    verdetti: [
      { fonte: "dog", verdetto: "out", testo: "«potrebbe essere utile se entrassimo in un meta dove servono davvero blocker piccoli», ma non fitta questo build orientato alle carte che generano value. Resta una buona tech choice solo per chi vuole blocker molto economici" }
    ],
    trend: "Mai entrata nel discorso dopo il cap. 3 di Dog" }

];
