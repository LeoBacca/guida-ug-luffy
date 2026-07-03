# -*- coding: utf-8 -*-
"""Mappa asset carte per la guida PPTX di UG Luffy. Importato da build_pptx2.py."""
import os

BASE = os.path.dirname(os.path.abspath(__file__))
PROC = os.path.join(BASE, "assets", "cards", "proc")
IMG  = os.path.join(BASE, "assets", "IMG")

# key -> (codice, nome, ruolo breve, costo)
CARDS = {
    "leader":     ("OP16-022", "Monkey D. Luffy",        "Leader UG",      "L"),
    "luffy1c":    ("OP16-034", "Monkey D. Luffy",        "Searcher 1c",    "1"),
    "mr1":        ("OP16-054", "Mr.1 (Daz Bonez)",       "Core 2-cost",    "2"),
    "mr2":        ("OP16-055", "Mr.2 Bon Kurei",         "Core 2-cost",    "2"),
    "ivankov":    ("OP16-026", "Emporio Ivankov",        "Searcher 4c",    "4"),
    "crocodile":  ("OP16-045", "Crocodile",              "Blocker/bounce", "4"),
    "mr3":        ("OP16-056", "Mr.3 (Galdino)",         "Powerhouse",     "4"),
    "buggy":      ("OP16-048", "Buggy",                  "Body / +1",      "5"),
    "prisoner":   ("OP16-042", "Prisoner of Impel Down", "2k counter",     "6"),
    "hancock":    ("OP16-032", "Boa Hancock",            "Win condition",  "7"),
    "samurai":    ("OP01-055", "You Can Be My Samurai!!","Value Event",    "E"),
    "navyhq":     ("OP16-038", "Let's Go! To Navy HQ!",  "Finisher",       "E"),
    "gumgumrain": ("OP02-068", "Gum-Gum Rain",           "Unbrick",        "E"),
    "jinbe":      ("OP16-027", "Jinbe",                  "Tech 2k",        "2"),
    "mr3_2c":     ("ST30-014", "Mr.3 (Galdino) 2c",      "Tech rest",      "2"),
    "brook":      ("OP15-032", "Brook",                  "Tech",           "6"),
    "iknow":      ("OP13-040", "I Know You're Strong...","Tech freeze",    "E"),
}

LEADERS = {  # avversari matchup
    "luffy":     ("OP16-022", "Monkey D. Luffy",    "UG"),
    "teach":     ("OP16-080", "Marshall.D.Teach",   "BY"),
    "rosinante": ("OP12-061", "Donquixote Rosinante","PY"),
    "nami":      ("OP11-041", "Nami",               "UY"),
    "yamato":    ("OP16-079", "Yamato",             "B"),
    "enel":      ("OP15-058", "Enel",               "P"),
}

def card_full(key):  return os.path.join(PROC, f"{key}__full.png")
def card_art(key):   return os.path.join(PROC, f"{key}__art.png")
def lead_full(key):  return os.path.join(PROC, f"lead_{key}__full.png")
def lead_art(key):   return os.path.join(PROC, f"lead_{key}__art.png")
def img(name):       return os.path.join(IMG, name)

def name(key):  return CARDS[key][1]
def role(key):  return CARDS[key][2]
def cost(key):  return CARDS[key][3]
def code(key):  return CARDS[key][0]

if __name__ == "__main__":
    miss = []
    for k in CARDS:
        for p in (card_full(k), card_art(k)):
            if not os.path.exists(p): miss.append(p)
    for k in LEADERS:
        for p in (lead_full(k), lead_art(k)):
            if not os.path.exists(p): miss.append(p)
    print("CARDS:", len(CARDS), "LEADERS:", len(LEADERS))
    print("MISSING:", len(miss))
    for m in miss: print("  ", m)
