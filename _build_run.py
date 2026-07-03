# -*- coding: utf-8 -*-
"""Esegue il build completo della guida TACTICAL importando gli helper da build_pptx2."""
import os
import build_pptx2 as B
from build_pptx2 import (Inches, RGBColor, BLUE, GREEN, GOLD, DANGER, CYAN)

PURPLE = RGBColor(0x9B, 0x5C, 0xE0)


def cap6_newlist():
    s = B.slide(); B.base(s)
    B.kicker_h2(s, "SECTOR 06 // CONCLUSION", "NUOVA LISTA IN FASE DI TEST",
                folio="DOC 06/06", accent=GREEN)
    nx, ny, nw, nh = B.pic_contain(s, B.A.img("ch6_new_decklist_testing.png"),
                                   Inches(0.55), Inches(1.95), Inches(6.6), Inches(3.6))
    B.corner_brackets(s, nx-B.Pt(3), ny-B.Pt(3), nw+B.Pt(6), nh+B.Pt(6), CYAN,
                      seg=Inches(0.22), lw=1.5)
    B.scanline(s, nx, ny+nh-Inches(0.28), nw, "BUILD // TESTING.v2", color=CYAN)
    m, _ = B.module(s, Inches(7.4), Inches(1.95), Inches(5.35), Inches(3.6),
                    title="DIFF // VS LISTA GENERICA", accent=GOLD)
    diffs = [("+ Jinbe x2", "piu consistenza 2-cost / counter", "green"),
             ("+ Brook x1", "combo difensiva con Hancock", "green"),
             ("+ I Know You're Strong x3", "freeze, ottima vs mirror & PY", "green"),
             ("Prisoner 12 -> 8", "fa spazio alle tech", "danger"),
             ("Navy HQ 2 -> 3", "piu accesso al finisher", "gold"),
             ("Mr.3 in 2 varianti", "+ versione 2k counter", "blue")]
    yy = Inches(2.5)
    for nm, d, st in diffs:
        B.led_dot(s, Inches(7.6), yy+Inches(0.06), state=st, size=Inches(0.12))
        B.text(s, Inches(7.85), yy, Inches(4.8), Inches(0.46),
               [{"segs": nm, "sz": 11.5, "bold": True, "color": B.INK, "space_after": 0},
                {"segs": d, "sz": 9.5, "color": B.INK_DIM}], line_spacing=1.0)
        yy += Inches(0.5)
    B.rect(s, Inches(0.55), Inches(5.75), Inches(12.2), Inches(1.1), B.SURFACE_HI,
           line=GOLD, lw=1.3, shadow=True)
    B.rect(s, Inches(0.55), Inches(5.75), Inches(0.06), Inches(1.1), GOLD)
    B.term_log(s, Inches(0.85), Inches(5.88), Inches(11.8),
               [("A inizio meta gioca la lista piu GENERICA. Poi fine-tuna le tech verso i deck popolari.", B.INK),
                ("UG Luffy premia i fondamentali: nessun matchup e gratis, ma con skill ogni matchup e vincibile.", GOLD)],
               title="KEY TAKEAWAYS", accent=GOLD)
    B.footer_hud(s, chap=6)


def closing():
    s = B.slide(); B.base(s, vignette=False)
    B.art_band(s, "leader", 0, Inches(1.6), B.SW, Inches(3.4), code="OP16-022", scrim=True)
    B.rect(s, 0, Inches(1.6), B.SW, Inches(3.4), B.BG_DEEP, alpha=30)
    B.rect(s, 0, Inches(2.5), B.SW, Inches(2.4), B.BG_DEEP, alpha=58)
    B.rect(s, 0, Inches(2.5), B.SW, B.Pt(1.4), CYAN)
    B.rect(s, 0, Inches(4.9), B.SW, B.Pt(1.4), CYAN)
    B.text(s, Inches(0.7), Inches(2.7), Inches(12), Inches(1.0),
           [{"segs": [("UG ", {"color": BLUE}), ("LUFFY", {"color": GREEN}),
                      ("  -  PRONTO PER OP16", {"color": B.INK})], "track": -5}],
           sz=40, bold=True, font=B.DISP, anchor=B.MSO_ANCHOR.MIDDLE)
    B.text(s, Inches(0.72), Inches(3.85), Inches(12), Inches(0.6),
           [{"segs": "COSTRUISCI LA BOARD  ·  VAI LARGO  ·  RESTA HEALTHY  ·  CHIUDI COL RE-STAND", "track": 100}],
           color=B.INK_DIM, sz=15, font=B.UISB)
    B.text(s, Inches(0.7), Inches(5.3), Inches(12), Inches(0.5),
           [{"segs": [("GUIDA DI  ", {"color": B.MUTED, "font": B.MONO, "sz": 12}),
                      ("Enricomaria Rustico  ·  @DogXWisdom", {"color": GOLD, "bold": True, "sz": 14}),
                      ("    ·    metafy.gg", {"color": B.MUTED, "font": B.MONO, "sz": 12})]}])
    B.term_log(s, Inches(0.7), Inches(5.95), Inches(12),
               [("DECK MANUAL  ·  OP16 PRISON BREAK  ·  END OF FILE", B.MUTED)], accent=GREEN)
    B.gradient_band(s, B.SH-Inches(0.16), Inches(0.16))
    B.PNUM[0] += 1


# ===================== BUILD =====================
B.grid_png()
B.cover()
B.indice()

# CAP 1
B.divider(1, "THE AGGRO KING IS BACK", "Identita del mazzo - stile di gioco", "luffy", lead=True)
B.cap1_identity()

# CAP 2
B.divider(2, "META ANALYSIS", "Meta OP16 - tier list - matrice win-rate", "teach", lead=True)
B.cap2_meta_overview()
B.cap2_tierlist()
B.cap2_winrate()

# CAP 3
B.divider(3, "THE DECKLIST", "Lista - carta per carta - tech pool", "leader", lead=False)
B.cap3_decklist()
B.card_slide("SECTOR 03 // CARD INTEL", ["luffy1c"], "MONKEY D. LUFFY (1C)",
             "SEARCHER / OPENER",
             ["Cerca quasi ogni carta del deck, anche un'altra copia di se",
              "Miglior opener 1 (2 copie con 1 DON!! grazie al re-stand)",
              "Diventa il 5 nome diverso per abilitare il re-stand Event",
              "Con 4 nomi diversi swinga anche per 5k"],
             "Troppo forte, troppo consistente, zero downside. 4-of obbligatorio.", "x4")
B.card_slide("SECTOR 03 // CARD INTEL", ["mr1", "mr2"], "MR.1 & MR.2 - CORE 2-COST",
             "CORE 2-COST",
             ["Base del deck: swingano 4k con 1 DON!! e si ciclano da soli",
              "Mr.2 copia il power dei Leader >5k (8k vs Nami con 1 DON!!)",
              "Mr.2 non ha counter -> giocalo subito; ottimi target Samurai",
              "Bounce con Crocodile per riusarli stanti"],
             "Staple. Mr.2 scala meglio nel late (no limite hand size).", "x4 / x4")
B.card_slide("SECTOR 03 // CARD INTEL", ["hancock"], "BOA HANCOCK (7C)",
             "WIN CONDITION",
             ["Corpo 9k UNBLOCKABLE: overstattato e difficile da rimuovere",
              "On Play: freeza qualsiasi minaccia rilevante della meta",
              "Chain Hancock -> Hancock: lock della board 2 turni",
              "Combo con Samurai: la resti subito senza rischi"],
             "La carta piu forte del deck. Main win condition nei game lunghi.", "x3",
             combo="Boa Hancock -> re-stand 2 DON!! -> Mr.3 (freeza + pesca 2) -> Samurai "
                   "restando Hancock+Mr.3 -> re-stand -> PESCA 4 e FREEZA 2.")
B.card_slide("SECTOR 03 // CARD INTEL", ["mr3"], "MR.3 GALDINO (4C)",
             "POWERHOUSE BLU",
             ["Una delle migliori carte stampate in OP16 per il blu",
              "Con Boa Hancock 7c spegne intere board",
              "Paghi solo 2 DON!! reali (re-stand) + pesca 2 carte",
              "Combo eccezionale con You Can Be My Samurai"],
             "Insane. 4-of obbligatorio.", "x4")
B.card_slide("SECTOR 03 // CARD INTEL", ["buggy", "prisoner"],
             "BUGGY (5C) & PRISONER", "BODY / COUNTER",
             ["Buggy: cheata un Prisoner + pesca 1 -> +1 ogni turno",
              "Genera di fatto un Blocker ogni turno (race)",
              "Prisoner = 2k counter: mano piena protegge i corpi 6k",
              "Buggy + Prisoner + Samurai = enorme value in un turno"],
             "Buggy 4-of obbligatorio. Prisoner x12 (puo scendere a 10).", "x4 / x12")
B.card_slide("SECTOR 03 // CARD INTEL", ["navyhq"], "LET'S GO! TO THE NAVY HQ",
             "RE-STAND / FINISHER",
             ["Il vero motivo per giocare il deck: ri-erige la board",
              "Genera swing extra -> lethal turns devastanti",
              "Usabile anche come counter difensivo (no downside)",
              "Il deck pesca/cerca tanto -> la vedi quando serve"],
             "Mandatory. Mai sotto 2 copie; puo salire a 3.", "x2")
B.card_slide("SECTOR 03 // CARD INTEL", ["samurai"], "YOU CAN BE MY SAMURAI",
             "VALUE / SYNERGY",
             ["Brilla qui: sviluppiamo tanti corpi, non temiamo i rested",
              "Quasi sempre 2 DON!! liberi col re-stand del Leader",
              "Converte corpi stanchi in risorse extra (draw)",
              "Reprint recente -> legale nel format attuale"],
             "Non obbligatoria, ma l'opzione piu generica e sinergica ora.", "x4")
B.card_slide("SECTOR 03 // CARD INTEL", ["ivankov", "crocodile"],
             "IVANKOV & CROCODILE (4C)", "SUPPORT / TEMPO",
             ["Ivankov: searcher, sviluppa 2 corpi, abilita lethal a sorpresa",
              "Crocodile: Blocker che bounce-a i tuoi 2c per riusarli",
              "Crocodile blocca gratis molti swing 5k on-curve",
              "Entrambi con counter -> poca ragione per tagliarli"],
             "Staple. Crocodile sottovalutato: 4-of dopo averlo testato.", "x4 / x4")
B.cap3_techcards()

# CAP 4
B.divider(4, "GENERAL STRATEGY", "Stile - mulligan - piano partita - combo", "luffy", lead=True)
B.cap4_playstyle()
B.cap4_mulligan()
B.cap4_gameplan()
B.combo_line()

# CAP 5
B.divider(5, "THE MATCHUPS BIBLE", "6 matchup chiave + life management", "teach", lead=True)
B.cap5_overview()
B.matchup_slide("luffy", "VS - MIRROR (BG LUFFY)", "Even", "Secondo",
    "Board control puro + life. Si decide nel combat.",
    "Vai largo: Luffy 1c, Mr.1, Mr.2 + Crocodile. Ivankov ottimo (tradeggia i loro 2c). Arriva al turno 6 con >=2 corpi 6k.",
    "Boa Hancock chiave: freeza il loro corpo fastidioso. Rispondi sempre al freeze col tuo. Vantaggio = board gia sviluppata early.",
    "Win con Navy HQ. Niente removal -> calcola quando abilitano il loro re-stand (4-5 nomi). I life sono cruciali.",
    ["Board control > aggressione cieca", "Stabilisci piu corpi 6k il prima possibile",
     "Attento al life management early", "Gestisci i freeze (rispondi al loro)",
     "Non sovra-proteggere i piccoli gia ciclati", "Traccia quanto e vicino il loro Navy HQ"],
    ["I life sono RISORSA cruciale: resta conservativo, counter gli attacchi early.",
     "Troppo danno early -> al re-stand subisci 8-12 swing (5k/6k) impossibili da counterare tutti.",
     "Non andare iper-aggressivo regalando la board sperando nei freeze.",
     "Calcola sempre il loro lethal prima di committare; tieni counter in mano."],
    keep_n=4, ring=BLUE)
B.matchup_slide("teach", "VS - BY TEACH", "Easy", "Secondo",
    "Siediti e vinci. Teach fatica vs swing larghi e non gestisce la board.",
    "Vai largo: Luffy 1c, Mr.1, Mr.2 + Ivankov/Crocodile. Buggy+Prisoner forte ma non priorita subito. Conta il NUMERO di attacchi.",
    "Occhio ai Trigger, specie Teach da 8 (nega + rimuove Crocodile/Buggy). Ordine: 6k da 4/5c, poi piccoli. Hancock li forza nel Teach da 10.",
    "Breve se hai giocato bene. Nega il Teach da 10, preparati a Borsalino da 5. Resta largo -> hand size bassa. Navy HQ e lethal.",
    ["Vai il piu largo possibile (#swing > size)", "Non perdere tempo a tradeggiare la loro board",
     "Gioca attorno ai Trigger (specie Teach da 8)", "Rispetta Vasco Shot / Van Augur",
     "Hancock + Mr.3 per freezare gli stabilizzatori", "Navy HQ come finisher principale"],
    ["Teach RECUPERA molti life (double heal) -> inseguire le sue vite e inutile.",
     "Non trascinare: tu sei veloce, lui lento. Chiudi prima che si stabilizzi.",
     "Tieni i TUOI life: counter quel che serve, il piano e race non difesa lunga.",
     "Boa Hancock nega i turni del Teach da 10 (il loro grosso swing) -> meno danno."],
    keep_n=3, ring=DANGER)
B.matchup_slide("rosinante", "VS - PY ROSINANTE", "Even", "Primo",
    "Non vincere la board war: pressa e forza spesa di risorse. Puo brickare.",
    "Vai largo presto. Se mancano 2k bodies / Law da 4 -> aggro e puniscili. Sviluppa 6k ma occhio a Gum-Gum Lightning e Sakazuki.",
    "Fase piu importante. Rosinante vuole Roslaw a 5. Baita i Blocker poi freezali (Hancock -> I Know / Electrical Luna).",
    "Leggi i counter (hand reading). Card advantage > life (double heal). Svuota la mano, poi Navy HQ. Brook da 8 e DMG utili.",
    ["Non vincere la board war: svuota la mano", "Pressione larga ma swing significativi",
     "Punisci se mancano 2k bodies / searcher / Law", "Hancock + Mr.3 + freeze per i Blocker",
     "Focus su hand size piu che sui life", "Navy HQ come finisher"],
    ["Guarda la loro CARD ADVANTAGE piu dei life: hanno double heal -> le vite ingannano.",
     "Resta conservativo coi TUOI life: stai intorno a 2-3 life.",
     "Hand reading: stima i loro counter per non regalare swing parati.",
     "Attento a Sakazuki early (cheata DON!!) -> double Borsalino + DON!! per I Love You."],
    keep_n=3, ring=PURPLE)
B.matchup_slide("nami", "VS - UY NAMI", "Even", "Primo",
    "Piu vicino a even: molti corpi swingano 7k in Nami con 1 DON!!.",
    "Sviluppa e prepara il mid. Stabilisci Mr.2 e Crocodile, chiudi con Buggy+Prisoner. Miglior curva 1. Scava per Hancock.",
    "Scava per Hancock: Nami non ha risposte, freeza Nico Robin da 7 e i Blocker. Ordine: piccoli prima, Hancock fra gli ultimi. Leader ultimo.",
    "E cio verso cui costruisci. Stabilisci Hancock (7k + pressione). Lethal via Hancock multipla, Brook da 6 o DMG. Navy HQ non sempre forte.",
    ["Corpi 6k early (swingano 7k con 1 DON!!)", "Prioritizza Boa Hancock (freeza Robin 7)",
     "Ordine swing: 7k dai 4/5c prima", "Non tradeggiare troppo: vai al Leader",
     "Nega il loro draw (counter/block)", "Win = 7k ripetuti + Hancock + Brook/DMG"],
    ["Counter OGNI attacco che chiede una sola carta -> neghi anche il loro draw.",
     "Sviluppa un BLOCKER: se swingano 7k al Leader, blocchi + 2k counter per negare.",
     "Tieni il Leader come ultimo attacco: 5k extra che costa loro una carta; rimuovi i Trigger col Leader swing.",
     "Non tradeggiare quasi mai: vai al Leader, resta healthy, entra comodo nel late."],
    keep_n=4, ring=BLUE)
B.matchup_slide("yamato", "VS - B YAMATO", "Even", "Secondo",
    "Entrambi al Leader. Loro 5 life, noi 4 -> pressione su di noi. Clock setup.",
    "Curva loro prevedibile (Kurikomon -> Yamato -> 6k). Counter i primi 5k/6k e resta healthy. 5k+7k spesso meglio di due 6k.",
    "Parte importante. Hancock + Mr.3 danno tempo (Luna/I Know quasi inutili: board 8k+). Yamato non ha removal -> ti gestisce attaccando.",
    "Facile se hai navigato bene. Skill: counter power di entrambi. Attento a Ground Death. Imposta Navy HQ (niente loro removal).",
    ["Resta healthy early (counter i primi 5k/6k)", "Gioca attorno alla curva prevedibile",
     "Board larga ma rispetta i loro piccoli", "Boa Hancock + Mr.3 per il tempo nel mid",
     "Mix 5k+7k > 6k (tanti 2k counter)", "Navy HQ come finisher (niente loro removal)"],
    ["Asimmetria: loro 5 life, noi 4 -> la pressione iniziale e su di NOI.",
     "Resta healthy nell'early: counter i primi 5k/6k che chiedono una sola carta.",
     "Entrambi al Leader -> la partita e gestione di LIFE e hand size (tanti loro 2k counter).",
     "Quando attaccano un tuo 6k rested va bene: pseudo-Blocker. Rispetta gli Event +3k/+4k."],
    keep_n=3, ring=BLUE)
B.matchup_slide("enel", "VS - P ENEL", "Even", "Primo",
    "Ancora ottimo. Fai stickare corpi significativi. Aggro grezzo.",
    "Vai largo, poi swing coi piccoli in base ai loro 1-cost. Swing 5k+ face. Stabilisci >=1 corpo 6k. Chiudi con Buggy+Prisoner.",
    "Hancock NON cruciale qui (facile da rimuovere). Meglio largo coi 6k. Swinga 5k o 7k. Portali a 2 life. Gestisci i tuoi life.",
    "Piu semplice. Difficile impostare Navy HQ -> vinci con aggro grezzo + 6k swing. Ai 9 DON!! senza loro Blocker, i 7k swing diventano migliori.",
    ["Sticka piu corpi 6k (li forzi a spendere removal)", "Prioritizza i 6k swing sui 5k",
     "Non rincorrere troppo la loro board", "Attento ai tuoi piccoli se hanno piu 1-cost",
     "Non fidarti di Hancock / Navy HQ", "Gestisci i life: clock fino a ~2 life, poi aggro"],
    ["Resta HEALTHY: Enel rusha e rimuove quasi ogni minaccia -> counter gli attacchi early.",
     "Gestisci i TUOI life: sotto i 2 life e doloroso (Enel + board -> swing 5k/10k al Leader).",
     "Sul lato avversario: portali a 2 life. Piu pressione = piu dura per Enel pulire la board.",
     "Attento ai tuoi piccoli se Enel parte con piu 1-cost: ti danno trade gratis."],
    keep_n=2, ring=PURPLE)

# CAP 6
B.divider(6, "CONCLUSION", "Chiusura - nuova lista in test", "leader", lead=False)
cap6_newlist()
closing()

os.makedirs(os.path.join(B.BASE, "output"), exist_ok=True)
out = os.path.join(B.BASE, "output", "Guida UG Luffy - OP16 (TACTICAL).pptx")
B.prs.save(out)
print("OK ->", out)
print("Slide totali:", len(B.prs.slides._sldIdLst))
