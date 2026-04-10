const LANG_HU = {
  "ui": {
    "appTitle": "Mentális Egészségügyi Felmérések",
    "appSubtitle": "Pszichológiai önértékelő eszközök",
    "tabTests": "Tesztek",
    "tabHistory": "Előzmények",
    "welcome": "Üdvözöljük. Válasszon ki egy felmérést a kezdéshez.",
    "startTest": "Teszt indítása",
    "nextQuestion": "Következő",
    "prevQuestion": "Előző",
    "viewResults": "Eredmények megtekintése",
    "question": "Kérdés",
    "of": "/",
    "items": "elem",
    "backToTests": "Vissza a tesztekhez",
    "repeatTest": "Teszt megismétlése",
    "viewHistory": "Előzmények megtekintése",
    "otherTests": "Egyéb tesztek",
    "detailByItem": "Részletek elemenként",
    "helpResources": "Segítség források",
    "helpText": "Ha érzelmi válságon megy keresztül, kérjen szakmai segítséget. Országos Krízis Vonal: 116 123 (EU) vagy forduljon mentálhigiénés szakemberhez.",
    "disclaimerTitle": "Fontos megjegyzés:",
    "disclaimerText": "Ez a teszt önértékelő eszköz, és nem helyettesíti a mentálhigiénés szakember diagnózisát. Ha úgy érzi, segítségre van szüksége, kérjük, forduljon szakemberhez.",
    "privacyTitle": "Adatvédelem:",
    "privacyText": "Az eredményei kizárólag a böngészőjében tárolódnak (localStorage). Semmilyen adat nem kerül szerverre, és nem hagyja el a számítógépét.",
    "cat_triage": "Hol kezdjem?",
    "cat_clinical": "Klinikai felmérések",
    "cat_screening": "Szűrés és felismerés",
    "cat_wellbeing": "Jóllét és önbecsülés",
    "cat_personality": "Személyiség",
    "cat_crisis": "Krízis és kockázat",
    "cat_advanced": "Haladó felmérés",
    "noRecords": "Nincsenek mentett bejegyzések.",
    "completeFirst": "Legalább egy teszt kitöltése szükséges az előzmények megtekintéséhez.",
    "goToTests": "Ugrás a tesztekhez",
    "trend": "Tendencia",
    "all": "Összes",
    "clearHistory": "Előzmények törlése",
    "clearConfirm": "Biztosan törölni szeretné az összes előzményt? Ez a művelet nem vonható vissza.",
    "score": "Pontszám",
    "outOf": "/",
    "disclaimer": "Ez az eszköz kizárólag tájékoztató jellegű, és nem helyettesíti a szakmai értékelést. Forduljon mentálhigiénés szakemberhez a megfelelő diagnózisért.",
    "resumePrompt": "Folyamatban lévő tesztje van",
    "continueTest": "Teszt folytatása",
    "resumeMessage": "Folyamatban lévő {test} tesztje van ({n}/{total} kérdés)",
    "dismiss": "Bezárás",
    "questionsAnswered": "megválaszolt kérdés",
    "inProgress": "Folyamatban",
    "testBy": "Tesztek",
    "recommendedTests": "Ajánlott felmérések",
    "highPriority": "Magas prioritás",
    "recommended": "Ajánlott",
    "suggested": "Javasolt",
    "areasEvaluated": "Értékelt területek",
    "kbSelect": "kiválasztás",
    "kbBrowse": "böngészés",
    "kbConfirm": "megerősítés",
    "kbPrevNext": "előző/következő",
    "prevQuestion": "Előző",
    "suggestedRetake": "Ismétlés javasolt",
    "triageRecommended": "Az első felmérés alapján ajánlott",
    "retakeReason": "Utoljára kitöltve"
  },
  "scales": {
    "agreement5": ["Határozottan nem értek egyet","Nem értek egyet","Sem egyetértek, sem nem","Egyetértek","Határozottan egyetértek"],
    "frequency4": ["Egyáltalán nem","Néhány napon","A napok több mint felén","Szinte minden nap"],
    "frequency5": ["Soha","Szinte soha","Néha","Elég gyakran","Nagyon gyakran"],
    "severity4": ["Egyáltalán nem","Enyhén","Mérsékelten","Súlyosan"],
    "severity5": ["Egyáltalán nem","Kissé","Mérsékelten","Meglehetősen","Rendkívül"],
    "yesNo": ["Nem","Igen"]
  },
  "tests": {
    "bdi": {
      "name": "BDI-II",
      "abbr": "BDI-II",
      "fullName": "Beck Depresszió Kérdőív-II",
      "desc": "Felméri a depressziós tünetek jelenlétét és súlyosságát az elmúlt két hétben.",
      "instructions": "Olvassa el figyelmesen az egyes állításcsoportokat, és válassza ki azt, amelyik a legjobban leírja, hogyan érezte magát az elmúlt két hétben, beleértve a mai napot.",
      "questions": [
        {
          "title": "Szomorúság",
          "options": [
            "Nem érzem magam szomorúnak.",
            "Az idő nagy részében szomorúnak érzem magam.",
            "Állandóan szomorú vagyok.",
            "Annyira szomorú vagy boldogtalan vagyok, hogy nem bírom elviselni."
          ]
        },
        {
          "title": "Pesszimizmus",
          "options": [
            "Nem vagyok elcsüggedve a jövőmet illetően.",
            "Jobban el vagyok csüggedve a jövőmet illetően, mint korábban.",
            "Nem várom, hogy jól alakuljanak a dolgaim.",
            "Úgy érzem, a jövőm reménytelen, és csak rosszabbodni fog."
          ]
        },
        {
          "title": "Múltbeli kudarcok",
          "options": [
            "Nem érzem magam kudarcnak.",
            "Többször vallottam kudarcot, mint kellett volna.",
            "Visszatekintve sok kudarcot látok.",
            "Úgy érzem, teljesen kudarcot vallottam mint ember."
          ]
        },
        {
          "title": "Az öröm elvesztése",
          "options": [
            "Ugyanannyi örömet okoznak a dolgok, mint régen.",
            "Nem élvezem annyira a dolgokat, mint korábban.",
            "Nagyon kevés örömöt szerzek abból, amit régen élveztem.",
            "Semmi örömet nem szerzek abból, amit régen élveztem."
          ]
        },
        {
          "title": "Bűntudat",
          "options": [
            "Nem érzek különösebb bűntudatot.",
            "Bűntudatom van sok dolog miatt, amit tettem vagy meg kellett volna tennem.",
            "Az idő nagy részében meglehetős bűntudatot érzek.",
            "Állandóan bűntudatot érzek."
          ]
        },
        {
          "title": "Büntetésérzés",
          "options": [
            "Nem érzem, hogy büntetnének.",
            "Úgy érzem, lehet, hogy megbüntetnek.",
            "Várom, hogy megbüntessenek.",
            "Úgy érzem, megbüntetnek."
          ]
        },
        {
          "title": "Önelutasítás",
          "options": [
            "Ugyanúgy érzek magam iránt, mint mindig.",
            "Elvesztettem az önbizalmamat.",
            "Csalódott vagyok magamban.",
            "Nem szeretem magam."
          ]
        },
        {
          "title": "Önkritika",
          "options": [
            "Nem bírálom vagy hibáztatom magam a szokásosnál jobban.",
            "Kritikusabb vagyok magammal szemben, mint korábban.",
            "Minden hibámért bírálom magam.",
            "Mindenért hibáztatom magam, ami rosszul történik."
          ]
        },
        {
          "title": "Öngyilkossági gondolatok vagy vágyak",
          "options": [
            "Nincsenek gondolataim arról, hogy megöljem magam.",
            "Gondolok arra, hogy megöljem magam, de nem tenném meg.",
            "Szeretném megölni magam.",
            "Megölném magam, ha lenne rá lehetőségem."
          ]
        },
        {
          "title": "Sírás",
          "options": [
            "Nem sírok többet, mint régen.",
            "Többet sírok, mint régen.",
            "Minden apróság miatt sírok.",
            "Sírni szeretnék, de nem tudok."
          ]
        },
        {
          "title": "Izgatottság",
          "options": [
            "Nem vagyok nyugtalanabb vagy feszültebb a szokásosnál.",
            "Nyugtalanabbnak vagy feszültebbnek érzem magam a szokásosnál.",
            "Annyira nyugtalan vagy izgatott vagyok, hogy nehéz mozdulatlanul maradnom.",
            "Annyira nyugtalan vagy izgatott vagyok, hogy állandóan mozognom vagy csinálnom kell valamit."
          ]
        },
        {
          "title": "Érdeklődés elvesztése",
          "options": [
            "Nem vesztettem el az érdeklődésemet mások vagy tevékenységek iránt.",
            "Kevésbé érdekelnek mások vagy dolgok, mint korábban.",
            "Az érdeklődésem nagy részét elvesztettem mások vagy dolgok iránt.",
            "Nehéz bármi iránt érdeklődnöm."
          ]
        },
        {
          "title": "Határozatlanság",
          "options": [
            "Ugyanolyan jól hozok döntéseket, mint mindig.",
            "Nehezebbnek találom a döntéshozatalt, mint korábban.",
            "Sokkal nehezebben hozok döntéseket, mint régen.",
            "Nehézséget okoz bármilyen döntést hoznom."
          ]
        },
        {
          "title": "Értéktelenség",
          "options": [
            "Nem érzem magam értéktelennek.",
            "Nem tartom magam olyan értékesnek és hasznosnak, mint korábban.",
            "Másokhoz képest értéktelenebbnek érzem magam.",
            "Teljesen értéktelennek érzem magam."
          ]
        },
        {
          "title": "Energiavesztés",
          "options": [
            "Ugyanannyi energiám van, mint mindig.",
            "Kevesebb energiám van, mint korábban.",
            "Nincs elég energiám, hogy sokat tegyek.",
            "Nincs elég energiám, hogy bármit is tegyek."
          ]
        },
        {
          "title": "Alvási szokások változása",
          "options": [
            "Nem tapasztaltam változást az alvásomban.",
            "Valamivel többet vagy kevesebbet alszom a szokásosnál.",
            "Sokkal többet vagy sokkal kevesebbet alszom a szokásosnál.",
            "A nap nagy részében alszom, vagy 1-2 órával korábban ébredek, és nem tudok visszaaludni."
          ]
        },
        {
          "title": "Ingerlékenység",
          "options": [
            "Nem vagyok ingerlékenyebb a szokásosnál.",
            "Ingerlékenyebb vagyok a szokásosnál.",
            "Sokkal ingerlékenyebb vagyok a szokásosnál.",
            "Állandóan ingerült vagyok."
          ]
        },
        {
          "title": "Étvágyváltozás",
          "options": [
            "Nem tapasztaltam változást az étvágyamban.",
            "Az étvágyam valamivel kisebb vagy nagyobb a szokásosnál.",
            "Az étvágyam sokkal kisebb vagy sokkal nagyobb a szokásosnál.",
            "Egyáltalán nincs étvágyam, vagy állandóan enni kívánok."
          ]
        },
        {
          "title": "Koncentrációs nehézség",
          "options": [
            "Ugyanolyan jól tudok koncentrálni, mint mindig.",
            "Nem tudok olyan jól koncentrálni, mint szokás.",
            "Nehéz bármire is hosszan odafigyelnem.",
            "Úgy találom, hogy semmire sem tudok koncentrálni."
          ]
        },
        {
          "title": "Fáradtság vagy kimerültség",
          "options": [
            "Nem vagyok fáradtabb vagy kimerültebb a szokásosnál.",
            "Könnyebben elfáradok vagy kimerülök, mint szokás.",
            "Túl fáradt vagy kimerült vagyok ahhoz, hogy sok mindent tegyek, amit régen csináltam.",
            "Túl fáradt vagy kimerült vagyok ahhoz, hogy a legtöbb dolgot megtegyem, amit régen csináltam."
          ]
        },
        {
          "title": "Szexuális érdeklődés elvesztése",
          "options": [
            "Nem vettem észre változást a szexuális érdeklődésemben mostanában.",
            "Kevésbé érdekel a szex, mint korábban.",
            "Most sokkal kevésbé érdekel a szex.",
            "Teljesen elvesztettem az érdeklődésemet a szex iránt."
          ]
        }
      ],
      "results": {
        "minimal": { "label": "Minimális", "desc": "Az Ön pontszáma minimális szintű depressziót jelez. Normális, ha érzelmi hullámvölgyeket tapasztal." },
        "mild": { "label": "Enyhe", "desc": "Az Ön pontszáma enyhe depressziós tüneteket jelez. Fontolja meg, hogy beszéljen szakemberrel, ha a tünetek tartósan fennállnak." },
        "moderate": { "label": "Mérsékelt", "desc": "Az Ön pontszáma mérsékelt depressziós tüneteket jelez. Javasolt mentálhigiénés szakemberrel konzultálni." },
        "severe": { "label": "Súlyos", "desc": "Az Ön pontszáma súlyos depressziós tüneteket jelez. Fontos, hogy mielőbb szakmai segítséget kérjen." }
      }
    },
    "bai": {
      "name": "BAI",
      "abbr": "BAI",
      "fullName": "Beck Szorongás Leltár",
      "desc": "Felméri a szorongásos tünetek súlyosságát az elmúlt héten.",
      "instructions": "Jelölje meg, mennyire zavarta Önt az egyes tünetek az elmúlt héten, beleértve a mai napot.",
      "questions": [
        { "title": "Zsibbadás vagy bizsergés" },
        { "title": "Hőérzet" },
        { "title": "Lábremegés" },
        { "title": "Képtelenség ellazulni" },
        { "title": "Félelem a legrosszabbtól" },
        { "title": "Szédülés vagy fejfájás" },
        { "title": "Szívdobogás vagy gyors szívverés" },
        { "title": "Bizonytalanság" },
        { "title": "Rettegés vagy félelem" },
        { "title": "Idegesség" },
        { "title": "Fulladásérzés" },
        { "title": "Kézremegés" },
        { "title": "Reszketés vagy bizonytalanság" },
        { "title": "Félelem az önuralom elvesztésétől" },
        { "title": "Légzési nehézség" },
        { "title": "Halálfélelem" },
        { "title": "Rémület" },
        { "title": "Emésztési zavar" },
        { "title": "Ájulás vagy szédülés" },
        { "title": "Arcpirulás" },
        { "title": "Meleg/hideg veríték" }
      ],
      "results": {
        "minimal": { "label": "Minimális", "desc": "Az Ön pontszáma minimális szintű szorongást jelez." },
        "mild": { "label": "Enyhe", "desc": "Az Ön pontszáma enyhe szorongást jelez. Figyelje a tüneteit." },
        "moderate": { "label": "Mérsékelt", "desc": "Az Ön pontszáma mérsékelt szorongást jelez. Fontolja meg a szakemberrel való konzultációt." },
        "severe": { "label": "Súlyos", "desc": "Az Ön pontszáma súlyos szorongást jelez. Javasolt szakmai segítséget kérni." }
      }
    },
    "gad7": {
      "name": "GAD-7",
      "abbr": "GAD-7",
      "fullName": "Generalizált Szorongás Kérdőív-7",
      "desc": "Felméri a generalizált szorongás súlyosságát az elmúlt két hétben.",
      "instructions": "Az elmúlt 2 hétben milyen gyakran zavarták a következő problémák?",
      "questions": [
        { "title": "Idegesség, szorongás vagy feszültség érzése" },
        { "title": "Nem képes abbahagyni vagy kontrollálni az aggódást" },
        { "title": "Túlzott aggódás különböző dolgok miatt" },
        { "title": "Nehézség az ellazulásban" },
        { "title": "Olyan nyugtalan, hogy nehéz egy helyben ülni" },
        { "title": "Könnyen bosszankodik vagy ingerült" },
        { "title": "Félelem attól, hogy valami szörnyű dolog történhet" }
      ],
      "results": {
        "minimal": { "label": "Minimális", "desc": "Az Ön pontszáma minimális szintű szorongást jelez." },
        "mild": { "label": "Enyhe", "desc": "Az Ön pontszáma enyhe szorongást jelez." },
        "moderate": { "label": "Mérsékelt", "desc": "Az Ön pontszáma mérsékelt szorongást jelez. Fontolja meg a szakemberrel való konzultációt." },
        "severe": { "label": "Súlyos", "desc": "Az Ön pontszáma súlyos szorongást jelez. Javasolt szakmai segítséget kérni." }
      }
    },
    "msibpd": {
      "name": "MSI-BPD",
      "abbr": "MSI-BPD",
      "fullName": "McLean Szűrőeszköz Borderline Személyiségzavarhoz",
      "desc": "Szűrőeszköz a borderline személyiségzavarhoz kapcsolódó jellemzők felméréséhez.",
      "instructions": "Válaszoljon igennel vagy nemmel az alábbi kérdésekre.",
      "questions": [
        { "title": "Szándékosan megsértette, megégette vagy más módon szándékosan bántotta már valaha saját magát?" },
        { "title": "Volt már öngyilkossági kísérlete?" },
        { "title": "Volt legalább két olyan kapcsolata (vagy kísérlete kapcsolatra), amely nagyon intenzív, de instabil volt?" },
        { "title": "Gyakran változik drámaian az önmagáról alkotott képe?" },
        { "title": "Gyakran változik hirtelen a hangulata?" },
        { "title": "Gyakran érez olyan intenzív dühöt, amelyet nehéz kontrollálni?" },
        { "title": "Gyakran nem bízik más emberekben?" },
        { "title": "Gyakran érzi magát irreálisnak, vagy mintha a körülötte lévő dolgok nem lennének valósak?" },
        { "title": "Gyakran érez ürességet?" },
        { "title": "Gyakran tesz kétségbeesett erőfeszítéseket, hogy elkerülje valaki általi elhagyatást?" }
      ],
      "results": {
        "minimal": { "label": "Minimális", "desc": "Az Ön pontszáma alacsony szintű borderline személyiségzavar jellemzőket jelez." },
        "moderate": {
          "label": "Mérsékelt",
          "desc": "Az Ön pontszáma néhány borderline személyiségzavarhoz kapcsolódó jellemzőt jelez. Fontolja meg a szakemberrel való konzultációt."
        },
        "severe": {
          "label": "Jelentős",
          "desc": "Az Ön pontszáma a borderline jellemzők jelentős jelenlétét jelzi. Átfogó szakmai értékelés javasolt."
        }
      }
    },
    "pss": {
      "name": "PSS-10",
      "abbr": "PSS-10",
      "fullName": "Észlelt Stressz Skála-10",
      "desc": "Méri, milyen mértékben érzékeljük stresszesnek az élethelyzeteket az elmúlt hónapban.",
      "instructions": "A következő kérdések az elmúlt hónapban tapasztalt érzéseire és gondolataira vonatkoznak. Jelölje meg, milyen gyakran érezte vagy gondolta az adott dolgot.",
      "questions": [
        { "title": "Milyen gyakran volt ideges valami váratlan esemény miatt?" },
        { "title": "Milyen gyakran érezte, hogy nem tudja kontrollálni az élete fontos dolgait?" },
        { "title": "Milyen gyakran érezte magát idegesnek és stresszesnek?" },
        { "title": "Milyen gyakran kezelte sikeresen a bosszantó mindennapi gondokat?" },
        { "title": "Milyen gyakran érezte, hogy hatékonyan megbirkózik az élete fontos változásaival?" },
        { "title": "Milyen gyakran bízott abban, hogy képes kezelni személyes problémáit?" },
        { "title": "Milyen gyakran érezte, hogy a dolgok az Ön szerint alakulnak?" },
        { "title": "Milyen gyakran tapasztalta, hogy nem tud megbirkózni mindazzal, amit meg kell tennie?" },
        { "title": "Milyen gyakran tudta kontrollálni az ingerültségét az életben?" },
        { "title": "Milyen gyakran érezte, hogy ura a helyzetnek?" }
      ],
      "results": {
        "minimal": { "label": "Alacsony", "desc": "Az észlelt stressz szintje alacsony. Folytassa jelenlegi megküzdési stratégiáit." },
        "moderate": { "label": "Mérsékelt", "desc": "Az észlelt stressz szintje mérsékelt. Fontolja meg stresszkezelő technikák beépítését." },
        "severe": { "label": "Magas", "desc": "Az észlelt stressz szintje magas. Javasolt szakmai támogatást és stresszcsökkentő technikákat igénybe venni." }
      }
    },
    "asrs": {
      "name": "ASRS v1.1",
      "abbr": "ASRS-v1.1",
      "fullName": "Felnőtt ADHD Önértékelő Skála v1.1",
      "desc": "Szűrőeszköz a figyelemhiányos hiperaktivitás-zavar tüneteinek felméréséhez felnőtteknél.",
      "instructions": "Válaszoljon a következő kérdésekre, gondolva arra, hogyan érezte magát és viselkedett az elmúlt 6 hónapban.",
      "questions": [
        { "title": "Milyen gyakran okoz nehézséget egy projekt végső részleteinek befejezése, miután a kihívást jelentő részeivel már végzett?" },
        { "title": "Milyen gyakran okoz nehézséget a dolgok rendszerezése, amikor olyan feladatot kell elvégeznie, amely szervezést igényel?" },
        { "title": "Milyen gyakran okoz problémát a megbeszélések vagy kötelezettségek megjegyzése?" },
        { "title": "Amikor egy feladat sok gondolkodást igényel, milyen gyakran kerüli vagy halogatja a hozzákezdést?" },
        { "title": "Milyen gyakran fészkelődik vagy mozgatja a kezét vagy lábát, amikor hosszú ideig kell ülnie?" },
        { "title": "Milyen gyakran érzi magát túlzottan aktívnak és kényszert érez arra, hogy tegyen valamit, mintha motor hajtaná?" }
      ],
      "results": {
        "minimal": { "label": "Valószínűtlen", "desc": "Az Ön pontszáma alacsony ADHD valószínűséget jelez." },
        "moderate": { "label": "Lehetséges", "desc": "Az Ön pontszáma néhány ADHD-vel összhangban lévő tünetet jelez. Fontolja meg a szakmai értékelést." },
        "severe": { "label": "Valószínű", "desc": "Az Ön pontszáma magas ADHD-tünet valószínűséget jelez. Átfogó szakmai értékelés javasolt." }
      }
    },
    "ocir": {
      "name": "OCI-R",
      "abbr": "OCI-R",
      "fullName": "Obszesszív-Kompulzív Leltár - Felülvizsgált",
      "desc": "Felméri az obszesszív-kompulzív zavar tüneteit.",
      "instructions": "A következő állítások olyan élményekre vonatkoznak, amelyeket sokan tapasztalnak a mindennapi életben. Jelölje meg, milyen mértékben zavarták ezek az elmúlt hónapban.",
      "questions": [
        { "title": "Annyi mindent félretettem, hogy akadályoznak" },
        { "title": "Gyakrabban ellenőrzöm a dolgokat, mint szükséges" },
        { "title": "Feldúl, ha a tárgyak nincsenek rendesen elrendezve" },
        { "title": "Kényszert érzek arra, hogy számoljak, miközben csinálok valamit" },
        { "title": "Nehéz megérintenem egy tárgyat, ha tudom, hogy idegenek vagy bizonyos emberek érintették" },
        { "title": "Nehéz kontrollálnom a saját gondolataimat" },
        { "title": "Olyan dolgokat gyűjtök, amelyekre nincs szükségem" },
        { "title": "Ismételten ellenőrzöm az ajtókat, ablakokat, fiókokat stb." },
        { "title": "Feldúl, ha mások megváltoztatják a dolgok általam kialakított elrendezését" },
        { "title": "Úgy érzem, bizonyos számokat ismételnem kell" },
        { "title": "Néha meg kell mosnom vagy tisztítanom kell magam, egyszerűen mert szennyezettnek érzem magam" },
        { "title": "Zavarnak a kellemetlen gondolatok, amelyek akaratom ellenére jutnak eszembe" },
        { "title": "Kerülöm a dolgok kidobását, mert félek, hogy később szükségem lehet rájuk" },
        { "title": "Ismételten ellenőrzöm a gáz- és vízcsapokat és a villanykapcsolókat, miután elzártam/lekapcsoltam őket" },
        { "title": "Szükségem van rá, hogy a dolgok egy bizonyos módon legyenek elrendezve" },
        { "title": "Úgy érzem, vannak jó és rossz számok" },
        { "title": "Gyakrabban és hosszabban mosom a kezem, mint szükséges" },
        { "title": "Gyakran vannak kellemetlen gondolataim, és nehezen szabadulok meg tőlük" }
      ],
      "results": {
        "minimal": { "label": "Minimális", "desc": "Az Ön pontszáma minimális szintű obszesszív-kompulzív tüneteket jelez." },
        "moderate": { "label": "Mérsékelt", "desc": "Az Ön pontszáma mérsékelt obszesszív-kompulzív tüneteket jelez. Fontolja meg a szakemberrel való konzultációt." },
        "severe": { "label": "Jelentős", "desc": "Az Ön pontszáma jelentős obszesszív-kompulzív tüneteket jelez. Szakmai értékelés javasolt." }
      }
    },
    "pcl5": {
      "name": "PCL-5",
      "abbr": "PCL-5",
      "fullName": "PTSD Ellenőrző Lista DSM-5-höz",
      "desc": "Felméri a poszttraumás stressz zavar tüneteit az elmúlt hónapban.",
      "instructions": "Az alábbiakban felsorolt problémákat néha tapasztalják az emberek egy nagyon stresszes élmény hatására. Jelölje meg, mennyire zavarta az adott probléma az elmúlt hónapban.",
      "questions": [
        { "title": "A stresszes élmény ismétlődő, zavaró és nem kívánt emlékei" },
        { "title": "A stresszes élményről szóló ismétlődő, zavaró álmok" },
        { "title": "Hirtelen úgy érez vagy cselekszik, mintha a stresszes élmény ténylegesen újra megtörténne" },
        { "title": "Nagyon feldúltnak érzi magát, amikor valami emlékezteti a stresszes élményre" },
        { "title": "Erős fizikai reakciók, amikor valami emlékeztette a stresszes élményre (pl. szívdobogás, légzési nehézség, izzadás)" },
        { "title": "A stresszes élményhez kapcsolódó emlékek, gondolatok vagy érzések kerülése" },
        { "title": "A stresszes élményre emlékeztető külső dolgok kerülése (pl. emberek, helyek, beszélgetések, tevékenységek, tárgyak vagy helyzetek)" },
        { "title": "Nehézség a stresszes élmény fontos részeinek felidézésében" },
        { "title": "Erős negatív hiedelmek önmagáról, más emberekről vagy a világról" },
        { "title": "Önmaga vagy más személy hibáztatása a stresszes élményért vagy az azt követő eseményekért" },
        { "title": "Erős negatív érzések, mint félelem, borzalom, harag, bűntudat vagy szégyen" },
        { "title": "Érdeklődés elvesztése a korábban élvezett tevékenységek iránt" },
        { "title": "Távolságérzet vagy elszigeteltség másoktól" },
        { "title": "Nehézség a pozitív érzések átélésében" },
        { "title": "Ingerült viselkedés, dühkitörések vagy agresszív magatartás" },
        { "title": "Túlzott kockázatvállalás vagy olyan dolgok, amelyek árthatnak Önnek" },
        { "title": "Túlzott éberség, óvatosság vagy résen lét" },
        { "title": "Ijedősség vagy könnyű megrezzenés" },
        { "title": "Koncentrációs nehézségek" },
        { "title": "Nehézség az elalvásban vagy az alvás fenntartásában" }
      ],
      "results": {
        "minimal": { "label": "Minimális", "desc": "Az Ön pontszáma alacsony szintű poszttraumás stressz tüneteket jelez." },
        "moderate": { "label": "Mérsékelt", "desc": "Az Ön pontszáma mérsékelt poszttraumás stressz tüneteket jelez. Fontolja meg a szakemberrel való konzultációt." },
        "severe": { "label": "Jelentős", "desc": "Az Ön pontszáma jelentős poszttraumás stressz tüneteket jelez. Javasolt szakmai segítséget kérni." }
      }
    },
    "bfi44": {
      "name": "BFI-44",
      "abbr": "BFI-44",
      "fullName": "Nagy Ötös Személyiség Kérdőív-44",
      "desc": "Felméri az öt fő személyiségdimenziót: Extraverzió, Barátságosság, Lelkiismeretesség, Neuroticizmus és Nyitottság az Élményekre.",
      "instructions": "Úgy látom magam, mint aki... Jelölje meg, mennyire ért egyet vagy nem ért egyet az egyes állításokkal.",
      "questions": [
        { "title": "Beszédes" },
        { "title": "Hajlamos másokban hibát találni" },
        { "title": "Alapos munkát végez" },
        { "title": "Lehangolt, szomorú" },
        { "title": "Eredeti, új ötletekkel áll elő" },
        { "title": "Tartózkodó" },
        { "title": "Segítőkész és önzetlen másokkal" },
        { "title": "Olykor hanyag" },
        { "title": "Nyugodt, jól kezeli a stresszt" },
        { "title": "Sok különböző dolog iránt kíváncsi" },
        { "title": "Tele van energiával" },
        { "title": "Veszekedést kezdeményez másokkal" },
        { "title": "Megbízható munkaerő" },
        { "title": "Feszült tud lenni" },
        { "title": "Szellemes, mélyen gondolkodó" },
        { "title": "Sok lelkesedést generál" },
        { "title": "Megbocsátó természetű" },
        { "title": "Hajlamos a rendetlenségre" },
        { "title": "Sokat aggódik" },
        { "title": "Élénk fantáziája van" },
        { "title": "Hajlamos a csendes viselkedésre" },
        { "title": "Általában bizalommal van" },
        { "title": "Hajlamos a lustaságra" },
        { "title": "Érzelmileg stabil, nem könnyen feldúlható" },
        { "title": "Találékony" },
        { "title": "Határozott személyiségű" },
        { "title": "Tud hideg és távolságtartó lenni" },
        { "title": "Kitart a feladat befejezéséig" },
        { "title": "Hangulatos lehet" },
        { "title": "Értékeli a művészi, esztétikai élményeket" },
        { "title": "Néha félénk, gátlásos" },
        { "title": "Figyelmes és kedves szinte mindenkivel" },
        { "title": "Hatékonyan végzi a dolgokat" },
        { "title": "Nyugodt marad feszült helyzetekben" },
        { "title": "Inkább rutinmunkát részesíti előnyben" },
        { "title": "Társaságkedvelő, barátságos" },
        { "title": "Néha udvariatlan másokkal" },
        { "title": "Terveket készít és végre is hajtja őket" },
        { "title": "Könnyen ideges lesz" },
        { "title": "Szeret gondolkodni, ötletekkel játszani" },
        { "title": "Kevés művészi érdeklődése van" },
        { "title": "Szeret együttműködni másokkal" },
        { "title": "Könnyen elterelődik a figyelme" },
        { "title": "Jártas a művészetben, zenében vagy irodalomban" }
      ],
      "dimensionNames": {
        "E": "Extraverzió",
        "A": "Barátságosság",
        "C": "Lelkiismeretesség",
        "N": "Neuroticizmus",
        "O": "Nyitottság az Élményekre"
      },
      "dimensionDescs": {
        "E": {
          "low": "Hajlamos tartózkodó, csendes lenni és az egyedüli tevékenységeket részesíti előnyben.",
          "mid": "Egyensúlyt mutat a társaságkedvelés és az egyedüllét igénye között.",
          "high": "Hajlamos társaságkedvelő, energikus lenni és élvezi a másokkal való kapcsolatot."
        },
        "A": {
          "low": "Hajlamos versengőbb és határozottabb lenni az interakcióiban.",
          "mid": "Egyensúlyt mutat az együttműködés és a határozottság között.",
          "high": "Hajlamos együttműködő, együttérző és figyelmes lenni másokkal."
        },
        "C": {
          "low": "Hajlamos rugalmasabb és spontánabb megközelítésre.",
          "mid": "Egyensúlyt mutat a struktúra és a rugalmasság között.",
          "high": "Hajlamos szervezett, fegyelmezett és célorientált lenni."
        },
        "N": {
          "low": "Hajlamos érzelmileg stabil és nyugodt lenni stresszes helyzetekben.",
          "mid": "A pozitív és negatív érzelmek normális skáláját tapasztalja.",
          "high": "Hajlamos több negatív érzelmet és nagyobb stresszérzékenységet tapasztalni."
        },
        "O": {
          "low": "Hajlamos a hagyományos és a praktikus dolgokat előnyben részesíteni.",
          "mid": "Egyensúlyt mutat a kíváncsiság és a gyakorlati érdeklődések között.",
          "high": "Hajlamos kreatív, kíváncsi lenni és nyitott az új élményekre."
        }
      }
    },
    "mbti": {
      "name": "MBTI",
      "abbr": "16P",
      "fullName": "Myers-Briggs Típusindikátor",
      "desc": "Személyiségpreferenciákat azonosít négy dimenzió mentén: Energia, Észlelés, Döntéshozatal és Életmód.",
      "instructions": "Válassza ki azt a lehetőséget, amelyik a legjobban jellemzi Önt a legtöbb helyzetben. Nincsenek helyes vagy helytelen válaszok.",
      "questions": [
        { "title": "Társasági összejöveteleken szívesen ismerkedik sok emberrel, beleértve az idegeneket" },
        { "title": "Inkább realista, mint fantáziadús" },
        { "title": "Rosszabb igazságtalannak lenni, mint kegyetlennek" },
        { "title": "Általában inkább előre meghatározott terv szerint szereti csinálni a dolgokat" },
        { "title": "Egy csoporttal töltött idő után feltöltődve érzi magát" },
        { "title": "Inkább az apró részletekre figyel, mint a nagy képre" },
        { "title": "Döntéshozatalkor először az emberek érzéseit veszi figyelembe" },
        { "title": "Szereti, ha a dolgok el vannak döntve és rendezve vannak" },
        { "title": "Szívesen kezdeményez beszélgetést új emberekkel" },
        { "title": "Jobban bízik a tapasztalatban, mint a megérzésben" },
        { "title": "Többre tartja az együttérzést, mint az objektív igazságot" },
        { "title": "Inkább szigorú menetrendet követ" },
        { "title": "Könnyen szóba áll idegenekkel" },
        { "title": "Inkább arra figyel, ami valóságos és jelen van, mint ami lehetséges" },
        { "title": "Jobban érdekli a csoportharmonia, mint az objektív eredmények" },
        { "title": "Inkább befejez egy projektet, mielőtt újat kezd" },
        { "title": "Szüksége van egyedül töltött időre az energiája feltöltéséhez" },
        { "title": "Szívesen gondolkodik elvont fogalmakról és elméletekről" },
        { "title": "Problémamegoldáskor a logikát helyezi az érzelmek elé" },
        { "title": "Szívesebben tartja nyitva a lehetőségeit, mint hogy elköteleződjön" },
        { "title": "Szabadidejében szívesebben van barátokkal" },
        { "title": "Jobban érdeklik a jövő lehetőségei, mint a jelen tényei" },
        { "title": "Inkább logikai elvek alapján hoz döntéseket" },
        { "title": "Kényelmesebbnek érzi magát a struktúrával és a rutinokkal" },
        { "title": "Ön a társaság lelke" },
        { "title": "Inkább vonzzák a szimbolikus jelentések, mint a szó szerinti tények" },
        { "title": "Konfliktusban a legigazságosabb megoldást keresi, még ha valaki felháborodik is" },
        { "title": "Szereti előre és részletesen megtervezni a nyaralásait" },
        { "title": "Jól érzi magát, ha a figyelem középpontjában van" },
        { "title": "Szívesebben fedez fel új ötleteket, mint bevált módszereket alkalmaz" },
        { "title": "Hajlamos inkább az eszével dönteni, mint a szívével" },
        { "title": "Szívesebben választja a spontaneitást a tervezés helyett" },
        { "title": "Kimerítőnek találja, ha sok időt tölt egyedül" },
        { "title": "Inkább elméleti fogalmakat tanul, mielőtt gyakorlati példákat látna" },
        { "title": "Fontosabbnak tartja a diplomáciát, mint az őszinteséget" },
        { "title": "Kényelmetlenül érzi magát, ha a tervek hirtelen megváltoznak" },
        { "title": "Többet beszél, mint amennyit hallgat a beszélgetésekben" },
        { "title": "Bízik a megérzéseiben és intuíciójában" },
        { "title": "Többre tartja a hatékonyságot, mint az együttműködést" },
        { "title": "Élvezi az improvizációt és az alkalmazkodást menet közben" }
      ],
      "typeDescriptions": {
        "ISTJ": "Felelősségteljes és megbízható. Értékeli a hagyományt, a hűséget és a rendet. Alapos és kitartóan dolgozik a kötelességei teljesítéséért.",
        "ISFJ": "Védelmező és odaadó. Kedves, felelősségteljes és figyelmes mások szükségleteire. Értékeli a harmóniát és a stabilitást.",
        "INFJ": "Idealista és vízionárius. Mélyen érti az embereket, és erős vágya van segíteni másoknak a lehetőségeik kiaknázásában.",
        "INTJ": "Stratégiai gondolkodású és független. Analitikus elméje és világos elképzelése van arról, hogyan lehet javítani a dolgokon. Értékeli a kompetenciát és a tudást.",
        "ISTP": "Gyakorlatias és megfigyelő. Élvezi megérteni, hogyan működnek a dolgok, és hatékonyan megoldani a problémákat.",
        "ISFP": "Művészi és érzékeny. Értékeli az autentikusságot és a harmóniát. Élvezi a szépséget és erős esztétikai érzéke van.",
        "INFP": "Idealista és empatikus. Erős személyes értékei vannak, és vágya arra, hogy jobbá tegye a világot.",
        "INTP": "Logikus és kreatív. Élvezi az összetett rendszerek elemzését és az innovatív ötletek generálását.",
        "ESTP": "Energikus és pragmatikus. Élvezi a cselekvést és a jelenben él. Ügyes a gyakorlati problémák megoldásában.",
        "ESFP": "Spontán és lelkes. Élvezi az életet és örömét megosztja másokkal. Nagylelkű és optimista.",
        "ENFP": "Lelkes és kreatív. Mindenhol lehetőségeket lát, és ragályos energiával inspirálja másokat.",
        "ENTP": "Innovatív és kihívásokat kereső. Élvezi az intellektuális vitákat és folyamatosan új ötleteket és lehetőségeket keres.",
        "ESTJ": "Szervezett és határozott. Értékeli a hatékonyságot és a rendet. Természetes vezető és adminisztrátor.",
        "ESFJ": "Társaságkedvelő és segítőkész. Mélyen törődik másokkal és azon dolgozik, hogy harmóniát teremtsen a környezetében.",
        "ENFJ": "Karizmatikus és empatikus. Inspirálja másokat és természetes képessége van az együttérző vezetésre.",
        "ENTJ": "Született vezető és stratéga. Határozott, hatékony, és élvezi a szervezési és vezetési kihívásokat."
      }
    },
    "phq9": {
      "name": "PHQ-9",
      "abbr": "PHQ-9",
      "fullName": "Beteg Egészségügyi Kérdőív-9",
      "desc": "Gyors depresszió-szűrés, amelyet széles körben alkalmaznak az alapellátásban. 9 kérdés.",
      "instructions": "Az elmúlt 2 hétben milyen gyakran zavarták a következő problémák?",
      "sharedOptions": ["Egyáltalán nem","Néhány napon","A napok több mint felén","Szinte minden nap"],
      "questions": [
        { "title": "Csekély érdeklődés vagy öröm a dolgokban" },
        { "title": "Lehangoltság, depresszió vagy reménytelenség érzése" },
        { "title": "Nehézség az elalvásban vagy az alvás fenntartásában, vagy túl sok alvás" },
        { "title": "Fáradtságérzet vagy kevés energia" },
        { "title": "Étvágytalanság vagy túlevés" },
        { "title": "Rossz érzés önmagával kapcsolatban" },
        { "title": "Nehézség a dolgokra való koncentrálásban" },
        { "title": "Olyan lassan mozog vagy beszél, hogy mások is észreveszik, vagy ennek ellenkezője" },
        { "title": "Gondolatok, hogy jobb lenne meghalni, vagy hogy valahogy bántsa magát" }
      ],
      "results": {
        "minima": { "label": "Minimális", "desc": "Nem észlelhetők a depresszió jelentős tünetei. Továbbra is ügyeljen az érzelmi jóllétére." },
        "leve": { "label": "Enyhe", "desc": "Enyhe depressziós tünetek észlelhetők. Fontolja meg a hangulata figyelemmel kísérését és egészséges szokások kialakítását." },
        "moderada": { "label": "Mérsékelt", "desc": "Mérsékelt depressziós tünetek észlelhetők. Javasolt mentálhigiénés szakemberrel konzultálni." },
        "moderadamente_grave": {
          "label": "Mérsékelten súlyos",
          "desc": "Mérsékelten súlyos depressziós tünetek észlelhetők. Fontos, hogy mielőbb szakmai segítséget kérjen."
        },
        "grave": { "label": "Súlyos", "desc": "Súlyos depressziós tünetek észlelhetők. Sürgős szakmai segítségkérés javasolt." }
      }
    },
    "audit": {
      "name": "AUDIT",
      "abbr": "AUDIT",
      "fullName": "Alkoholfogyasztási Zavarok Azonosító Teszt",
      "desc": "A WHO által kifejlesztett eszköz a problémás alkoholfogyasztás kimutatására.",
      "instructions": "Válaszoljon a következő kérdésekre az alkoholfogyasztásával kapcsolatban. Legyen a lehető legőszintébb.",
      "questions": [
        {
          "title": "Milyen gyakran fogyaszt alkoholtartalmú italokat?",
          "options": ["Soha","Havonta egyszer vagy ritkábban","Havonta 2-4 alkalommal","Hetente 2-3 alkalommal","Hetente 4 vagy több alkalommal"]
        },
        {
          "title": "Hány standard italt iszik jellemzően, amikor iszik?",
          "options": ["1 vagy 2","3 vagy 4","5 vagy 6","7-9","10 vagy több"]
        },
        {
          "title": "Milyen gyakran fogyaszt hat vagy több standard italt egy alkalommal?",
          "options": ["Soha","Ritkábban, mint havonta","Havonta","Hetente","Naponta vagy majdnem naponta"]
        },
        {
          "title": "Az elmúlt évben milyen gyakran fordult elő, hogy nem tudta abbahagyni az ivást, miután elkezdett?",
          "options": ["Soha","Ritkábban, mint havonta","Havonta","Hetente","Naponta vagy majdnem naponta"]
        },
        {
          "title": "Az elmúlt évben milyen gyakran fordult elő, hogy az ivás miatt nem tudta megtenni, amit elvártak Öntől?",
          "options": ["Soha","Ritkábban, mint havonta","Havonta","Hetente","Naponta vagy majdnem naponta"]
        },
        {
          "title": "Az elmúlt évben milyen gyakran volt szüksége reggeli italra, hogy meginduljon egy erős ivászat után?",
          "options": ["Soha","Ritkábban, mint havonta","Havonta","Hetente","Naponta vagy majdnem naponta"]
        },
        {
          "title": "Az elmúlt évben milyen gyakran érzett bűntudatot vagy megbánást az ivás után?",
          "options": ["Soha","Ritkábban, mint havonta","Havonta","Hetente","Naponta vagy majdnem naponta"]
        },
        {
          "title": "Az elmúlt évben milyen gyakran fordult elő, hogy nem tudta felidézni, mi történt az előző este, mert ivott?",
          "options": ["Soha","Ritkábban, mint havonta","Havonta","Hetente","Naponta vagy majdnem naponta"]
        },
        {
          "title": "Ön vagy valaki más megsérült-e az Ön ivása miatt?",
          "options": ["Nem","Igen, de nem az elmúlt évben","Igen, az elmúlt évben"]
        },
        {
          "title": "Aggódott-e rokon, barát, orvos vagy más egészségügyi dolgozó az Ön ivása miatt, vagy javasolta, hogy csökkentse?",
          "options": ["Nem","Igen, de nem az elmúlt évben","Igen, az elmúlt évben"]
        }
      ],
      "results": {
        "bajo_riesgo": { "label": "Alacsony kockázat", "desc": "Az Ön alkoholfogyasztása alacsony kockázatú határon belül van. Tartsa meg az egészséges szokásokat." },
        "riesgo_moderado": {
          "label": "Mérsékelt kockázat",
          "desc": "Az Ön alkoholfogyasztása mérsékelt kockázatot jelent. Fontolja meg a fogyasztás csökkentését és a szakemberrel való konzultációt."
        },
        "riesgo_alto": { "label": "Magas kockázat", "desc": "Az Ön alkoholfogyasztása magas kockázatot jelent. Javasolt szakmai útmutatást kérni a fogyasztás csökkentéséhez." },
        "posible_dependencia": { "label": "Lehetséges függőség", "desc": "Az eredmények lehetséges alkoholfüggőségre utalnak. Fontos, hogy szakosodott szakmai segítséget kérjen." }
      }
    },
    "isi": {
      "name": "ISI",
      "abbr": "ISI",
      "fullName": "Álmatlanság Súlyossági Index",
      "desc": "Felméri az álmatlanság természetét, súlyosságát és hatását az elmúlt két hétben.",
      "instructions": "Értékelje az alvásproblémái súlyosságát az elmúlt 2 hétben.",
      "questions": [
        {
          "title": "Nehézség az elalvásban",
          "options": ["Nincs","Enyhe","Mérsékelt","Súlyos","Nagyon súlyos"]
        },
        {
          "title": "Nehézség az alvás fenntartásában",
          "options": ["Nincs","Enyhe","Mérsékelt","Súlyos","Nagyon súlyos"]
        },
        {
          "title": "Túl korai reggeli ébredés",
          "options": ["Nincs","Enyhe","Mérsékelt","Súlyos","Nagyon súlyos"]
        },
        {
          "title": "Mennyire elégedett a jelenlegi alvási mintázatával?",
          "options": ["Nagyon elégedett","Elégedett","Mérsékelten elégedett","Elégedetlen","Nagyon elégedetlen"]
        },
        {
          "title": "Milyen mértékben veszi észre, hogy az alvásproblémája zavarja a napi működését?",
          "options": ["Egyáltalán nem","Kissé","Némileg","Nagyon","Rendkívül"]
        },
        {
          "title": "Milyen mértékben gondolja, hogy mások észreveszik, hogy az alvásproblémája befolyásolja az életminőségét?",
          "options": ["Egyáltalán nem","Kissé","Némileg","Nagyon","Rendkívül"]
        },
        {
          "title": "Mennyire aggódik a jelenlegi alvásproblémája miatt?",
          "options": ["Egyáltalán nem","Kissé","Némileg","Nagyon","Rendkívül"]
        }
      ],
      "results": {
        "sin_insomnio": { "label": "Nincs klinikai álmatlanság", "desc": "Nem észlelhető klinikai álmatlanság. Az Ön alvása normális paramétereken belül van." },
        "subclinico": {
          "label": "Szubklinikai álmatlanság",
          "desc": "Néhány álmatlansági tünet észlelhető, de nem érik el a klinikai szintet. Fontolja meg az alvási higiénia javítását."
        },
        "clinico_moderado": { "label": "Mérsékelt klinikai álmatlanság", "desc": "Mérsékelt súlyosságú klinikai álmatlanság észlelhető. Javasolt egészségügyi szakemberrel konzultálni." },
        "clinico_grave": {
          "label": "Súlyos klinikai álmatlanság",
          "desc": "Súlyos klinikai álmatlanság észlelhető. Fontos, hogy szakmai segítséget kérjen az alvásproblémák kezeléséhez."
        }
      }
    },
    "eat26": {
      "name": "EAT-26",
      "abbr": "EAT-26",
      "fullName": "Evési Attitűdök Tesztje-26",
      "desc": "Kimutatja az evészavarokra jellemző attitűdöket és viselkedéseket.",
      "instructions": "Jelölje meg, milyen gyakran mutatja az alábbi attitűdöket vagy viselkedésformákat. Válaszoljon őszintén.",
      "sharedOptions": ["Soha","Ritkán","Néha","Gyakran","Nagyon gyakran","Mindig"],
      "questions": [
        { "title": "Rettegek attól, hogy túlsúlyos leszek" },
        { "title": "Kerülöm az evést, amikor éhes vagyok" },
        { "title": "Aggódom az étel miatt" },
        { "title": "Voltak olyan falási rohamaim, amikor úgy éreztem, nem tudok abbahagyni" },
        { "title": "Kis darabokra vágom az ételt" },
        { "title": "Tudom az általam fogyasztott ételek kalóriatartalmát" },
        { "title": "Kifejezetten kerülöm a magas szénhidráttartalmú ételeket" },
        { "title": "Úgy érzem, mások azt szeretnék, ha többet ennék" },
        { "title": "Hányok evés után" },
        { "title": "Rendkívül bűntudatot érzek evés után" },
        { "title": "Foglalkoztat a vágy, hogy vékonyabb legyek" },
        { "title": "Edzés közben arra gondolok, hogy kalóriákat égetek" },
        { "title": "Mások szerint túl vékony vagyok" },
        { "title": "Foglalkoztat a gondolat, hogy zsír van a testemen" },
        { "title": "Tovább tart az étkezésem, mint másoknak" },
        { "title": "Kerülöm a cukortartalmú ételeket" },
        { "title": "Diétás ételeket eszem" },
        { "title": "Úgy érzem, az étel irányítja az életemet" },
        { "title": "Önuralmat tanúsítok az étellel kapcsolatban" },
        { "title": "Úgy érzem, mások nyomást gyakorolnak rám, hogy egyek" },
        { "title": "Túl sok időt és gondolatot fordítok az ételre" },
        { "title": "Kényelmetlenül érzem magam édességek fogyasztása után" },
        { "title": "Diétázom" },
        { "title": "Szeretem, ha a gyomrom üres" },
        { "title": "Szívesen próbálok új és gazdag ételeket" },
        { "title": "Étkezés után késztetést érzek a hányásra" }
      ],
      "results": {
        "bajo_riesgo": { "label": "Alacsony kockázat", "desc": "Nem észlelhető jelentős kockázatot jelentő evési attitűd. Tartsa meg az egészséges kapcsolatát az étellel." },
        "riesgo_significativo": {
          "label": "Jelentős kockázat",
          "desc": "Evészavarra utaló evési attitűdök észlelhetők. Javasolt szakorvossal konzultálni."
        }
      }
    },
    "mdq": {
      "name": "MDQ",
      "abbr": "MDQ",
      "fullName": "Hangulatizavar Kérdőív",
      "desc": "Gyors szűrőeszköz bipoláris zavarhoz és bipoláris spektrumzavarhoz.",
      "instructions": "Válaszoljon a következő kérdésekre az életében valaha tapasztalt élmények alapján.",
      "questions": [
        {
          "title": "Volt-e valaha olyan időszak, amikor annyira jól érezte magát vagy annyira feldobott volt, hogy mások úgy gondolták, nem önmaga?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Volt-e valaha olyan időszak, amikor annyira ingerült volt, hogy kiabált az emberekkel vagy veszekedéseket kezdeményezett?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Volt-e valaha olyan időszak, amikor sokkal magabiztosabbnak érezte magát a szokásosnál?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Volt-e valaha olyan időszak, amikor sokkal kevesebbet aludt a szokásosnál, és nem is hiányzott?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Volt-e valaha olyan időszak, amikor sokkal beszédesebb volt vagy gyorsabban beszélt a szokásosnál?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Volt-e valaha olyan időszak, amikor a gondolatai száguldottak a fejében?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Volt-e valaha olyan időszak, amikor annyira könnyen elterelődött a figyelme, hogy nehéz volt koncentrálnia?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Volt-e valaha olyan időszak, amikor sokkal több energiája volt a szokásosnál?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Volt-e valaha olyan időszak, amikor sokkal aktívabb volt vagy sokkal többet csinált a szokásosnál?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Volt-e valaha olyan időszak, amikor sokkal társaságkedvelőbb vagy nyitottabb volt a szokásosnál?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Volt-e valaha olyan időszak, amikor sokkal jobban érdekelte a szex a szokásosnál?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Volt-e valaha olyan időszak, amikor olyan dolgokat tett, amelyek szokatlanok voltak Öntől, vagy amelyeket mások túlzottnak vagy kockázatosnak tartottak?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Volt-e valaha olyan időszak, amikor úgy költött pénzt, hogy az problémát okozott Önnek vagy a családjának?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Ezen élmények közül több is előfordult-e ugyanabban az időszakban?",
          "options": ["Nem","Igen"]
        },
        {
          "title": "Ha az előző kérdések bármelyikére IGEN-nel válaszolt, mekkora problémát okoztak ezek?",
          "options": ["Semmi probléma","Kis probléma","Mérsékelt probléma","Súlyos probléma"]
        }
      ],
      "results": {
        "positive": {
          "label": "Pozitív szűrés bipoláris zavarra",
          "desc": "Válaszai bipoláris spektrumzavar lehetőségére utalnak. Ez az eredmény NEM diagnózis. Átfogó szakmai értékelés, pszichiáterrel való konzultáció erősen javasolt."
        },
        "negative": {
          "label": "Negatív szűrés",
          "desc": "Válaszai nem utalnak bipoláris spektrumzavar jelenlétére ezen szűrőeszköz szerint. Ne feledje, hogy ez a kérdőív csak szűrőeszköz, és nem helyettesíti a szakmai értékelést."
        }
      }
    },
    "spin": {
      "name": "SPIN",
      "abbr": "SPIN",
      "fullName": "Szociális Fóbia Kérdőív",
      "desc": "Felméri a szociális szorongás tüneteinek jelenlétét és súlyosságát.",
      "instructions": "Jelölje meg, mennyire zavarták a következő problémák az elmúlt héten.",
      "sharedOptions": ["Egyáltalán nem","Kissé","Némileg","Nagyon","Rendkívül"],
      "questions": [
        { "title": "Félek a tekintélyszemélyektől." },
        { "title": "Zavar, ha mások előtt elpirulok." },
        { "title": "A bulik és társasági események megijesztenek." },
        { "title": "Kerülöm, hogy ismeretlen emberekkel beszéljek." },
        { "title": "Nagyon félek a kritikától." },
        { "title": "A zavarba eséstől való félelem megakadályoz dolgok megtételében vagy emberekkel való beszélgetésben." },
        { "title": "Mások előtti izzadás szenvedést okoz nekem." },
        { "title": "Kerülöm a bulikra járást." },
        { "title": "Kerülöm azokat a tevékenységeket, ahol a figyelem középpontjában lennék." },
        { "title": "Az idegenekkel való beszéd megijeszti." },
        { "title": "Rettegek a nyilvános beszédtől." },
        { "title": "Mindent megtennék, hogy elkerüljem a kritikát." },
        { "title": "Szívdobogás zavar, amikor emberek közt vagyok." },
        { "title": "Félek dolgokat csinálni, amikor mások figyelhetnek." },
        { "title": "A legnagyobb félelmem a zavarba kerülés vagy nevetségessé válás." },
        { "title": "Kerülöm a tekintélyszemélyekkel való beszélgetést." },
        { "title": "A mások előtti remegés vagy reszketés szenvedést okoz nekem." }
      ],
      "results": {
        "low": { "label": "Alacsony szociális szorongás", "desc": "Az Ön pontszáma alacsony szintű szociális szorongást jelez." },
        "mild": { "label": "Enyhe szociális szorongás", "desc": "Az Ön pontszáma enyhe szociális szorongást jelez." },
        "moderate": {
          "label": "Mérsékelt szociális szorongás",
          "desc": "Az Ön pontszáma mérsékelt szociális szorongást jelez. Hasznot húzhat szakmai segítségkérésből."
        },
        "severe": { "label": "Súlyos szociális szorongás", "desc": "Az Ön pontszáma súlyos szociális szorongást jelez. Szakmai segítségkérés javasolt." },
        "very_severe": {
          "label": "Nagyon súlyos szociális szorongás",
          "desc": "Az Ön pontszáma nagyon súlyos szociális szorongást jelez. Szakmai segítségkérés erősen javasolt."
        }
      }
    },
    "rosenberg": {
      "name": "RSE",
      "abbr": "RSE",
      "fullName": "Rosenberg Önbecsülés Skála",
      "desc": "A globális önbecsülés legszélesebb körben használt mérőeszköze. Az önértékelési érzéseket méri.",
      "instructions": "Jelölje meg, mennyire ért egyet az alábbi állításokkal.",
      "sharedOptions": ["Határozottan nem értek egyet","Nem értek egyet","Egyetértek","Határozottan egyetértek"],
      "questions": [
        { "title": "Úgy érzem, értékes ember vagyok, legalábbis egyenrangú másokkal." },
        { "title": "Úgy érzem, számos pozitív tulajdonságom van." },
        { "title": "Összességében hajlamos vagyok úgy érezni, hogy kudarcot vallottam." },
        { "title": "Képes vagyok ugyanolyan jól csinálni a dolgokat, mint a legtöbb ember." },
        { "title": "Úgy érzem, nincs sok dolog, amire büszke lehetek." },
        { "title": "Pozitívan viszonyulok magamhoz." },
        { "title": "Összességében elégedett vagyok magammal." },
        { "title": "Bárcsak jobban tisztelném magam." },
        { "title": "Időnként valóban haszontalannak érzem magam." },
        { "title": "Időnként azt gondolom, semmire sem vagyok jó." }
      ],
      "results": {
        "low": { "label": "Alacsony önbecsülés", "desc": "Az Ön pontszáma alacsony szintű önbecsülést jelez. Szakmai támogatás javasolt." },
        "normal": { "label": "Normális önbecsülés", "desc": "Az Ön pontszáma normális, egészséges önbecsülést jelez." },
        "high": { "label": "Magas önbecsülés", "desc": "Az Ön pontszáma magas önbecsülést jelez." }
      }
    },
    "who5": {
      "name": "WHO-5",
      "abbr": "WHO-5",
      "fullName": "WHO-5 Jóllét Index",
      "desc": "A WHO által kifejlesztett rövid érzelmi jóllét mérőeszköz. Mindössze 5 kérdés.",
      "instructions": "Jelölje meg, hogyan érezte magát az elmúlt két hétben.",
      "sharedOptions": [
        "Soha",
        "Időnként",
        "Az idő kevesebb mint felében",
        "Az idő több mint felében",
        "Az idő nagy részében",
        "Mindig"
      ],
      "questions": [
        { "title": "Vidámnak és jókedvűnek éreztem magam." },
        { "title": "Nyugodtnak és ellazultnak éreztem magam." },
        { "title": "Aktívnak és energikusnak éreztem magam." },
        { "title": "Pihenten és felfrissülve ébredtem." },
        { "title": "A mindennapi életem tele volt számomra érdekes dolgokkal." }
      ],
      "results": {
        "low": { "label": "Alacsony jóllét", "desc": "Alacsony szintű érzelmi jóllétet jelez. Szakmai értékelés javasolt." },
        "reduced": { "label": "Csökkent jóllét", "desc": "Csökkent érzelmi jóllétet jelez. Fontolja meg mentálhigiénés szakemberrel való beszélgetést." },
        "moderate": { "label": "Mérsékelt jóllét", "desc": "Mérsékelt szintű érzelmi jóllétet jelez." },
        "high": { "label": "Magas jóllét", "desc": "Magas szintű érzelmi jóllétet jelez." }
      }
    },
    "aq10": {
      "name": "AQ-10",
      "abbr": "AQ-10",
      "fullName": "Autizmus Spektrum Hányados — 10 kérdés",
      "desc": "Rövid szűrés az autizmus spektrummal kapcsolatos jellemzők felméréséhez. Baron-Cohen és mtsai. fejlesztették ki.",
      "instructions": "Olvassa el figyelmesen az egyes állításokat, és jelölje meg, mennyire ért egyet vagy nem ért egyet.",
      "sharedOptions": [
            "Határozottan egyetértek",
            "Kissé egyetértek",
            "Kissé nem értek egyet",
            "Határozottan nem értek egyet"
      ],
      "questions": [
            {
                  "title": "Gyakran észreveszek halk hangokat, amikor mások nem"
            },
            {
                  "title": "Történet olvasásakor nehezen tudom kikövetkeztetni a szereplők szándékait"
            },
            {
                  "title": "Könnyen tudok 'a sorok között olvasni', amikor valaki beszél hozzám"
            },
            {
                  "title": "Általában inkább az átfogó képre koncentrálok, mint az apró részletekre"
            },
            {
                  "title": "Tudom, hogyan ismerjem fel, ha valaki, aki hallgat, unatkozni kezd"
            },
            {
                  "title": "Könnyen csinálok több dolgot egyszerre"
            },
            {
                  "title": "Könnyedén ki tudom találni, mit gondol vagy érez valaki, pusztán az arckifejezése alapján"
            },
            {
                  "title": "Ha félbeszakítanak, gyorsan vissza tudok térni ahhoz, amit csináltam"
            },
            {
                  "title": "Szeretek információt gyűjteni dolgok kategóriáiról"
            },
            {
                  "title": "Nehezen tudom kikövetkeztetni mások szándékait"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Kevés autista jellemző",
                  "desc": "Az Ön pontszáma nem utal jelentős autizmus spektrum jellemzőkre. Ha azonban aggályai vannak, forduljon szakemberhez."
            },
            "moderado": {
                  "label": "Néhány autista jellemző",
                  "desc": "Az Ön pontszáma az autizmus spektrumhoz társuló néhány jellemzőre utal, bár a klinikai beutalási küszöb (≥6) alatt van."
            },
            "alto": {
                  "label": "Jelentős autista jellemzők",
                  "desc": "Az Ön pontszáma meghaladja a beutalási küszöböt (≥6). Átfogó diagnosztikai értékelés javasolt szakemberrel."
            },
            "muy_alto": {
                  "label": "Nagyon jelentős autista jellemzők",
                  "desc": "Az Ön pontszáma magas. Erősen javasolt átfogó diagnosztikai értékelést kérni autizmus spektrum zavarban jártas szakembertől."
            }
      }
},
    "aq50": {
      "name": "AQ-50",
      "abbr": "AQ-50",
      "fullName": "Autizmus Spektrum Hányados — 50 kérdés",
      "desc": "Átfogó autizmus spektrum jellemzők felmérése öt területen: szociális készségek, figyelemváltás, részletekre figyelés, kommunikáció és képzelet.",
      "instructions": "Olvassa el figyelmesen az egyes állításokat, és jelölje meg, mennyire ért egyet vagy nem ért egyet. Nincsenek helyes vagy helytelen válaszok.",
      "questions": [
            {
                  "title": "Szívesebben csinálok dolgokat másokkal, mint egyedül"
            },
            {
                  "title": "Szívesebben csinálom a dolgokat ugyanúgy újra és újra"
            },
            {
                  "title": "Ha megpróbálok elképzelni valamit, nagyon könnyen kialakul egy kép a fejemben"
            },
            {
                  "title": "Gyakran annyira belemerülök egy dologba, hogy szem elől vesztem a többit"
            },
            {
                  "title": "Gyakran észreveszek halk hangokat, amikor mások nem"
            },
            {
                  "title": "Általában észreveszem a rendszámokat vagy hasonló információsorokat"
            },
            {
                  "title": "Mások gyakran mondják, hogy amit mondtam, udvariatlan volt, pedig én udvariasnak gondoltam"
            },
            {
                  "title": "Történet olvasásakor könnyen el tudom képzelni, hogyan nézhetnek ki a szereplők"
            },
            {
                  "title": "Lenyűgöznek a dátumok"
            },
            {
                  "title": "Egy társaságban könnyen nyomon tudok követni több különböző ember beszélgetését"
            },
            {
                  "title": "Könnyen boldogulok társas helyzetekben"
            },
            {
                  "title": "Hajlamos vagyok észrevenni részleteket, amelyeket mások nem"
            },
            {
                  "title": "Szívesebben megyek könyvtárba, mint buliba"
            },
            {
                  "title": "Könnyű számomra történeteket kitalálni"
            },
            {
                  "title": "Jobban vonzódom az emberekhez, mint a dolgokhoz"
            },
            {
                  "title": "Hajlamos vagyok nagyon erős érdeklődési köröket kialakítani, amelyek feldúlnak, ha nem tudok velük foglalkozni"
            },
            {
                  "title": "Szeretem a kötetlen társalgást"
            },
            {
                  "title": "Amikor beszélek, nem mindig könnyű a másiknak szóhoz jutni"
            },
            {
                  "title": "Lenyűgöznek a számok"
            },
            {
                  "title": "Történet olvasásakor nehezen tudom kikövetkeztetni a szereplők szándékait"
            },
            {
                  "title": "Nem különösebben élvezem a szépirodalmat"
            },
            {
                  "title": "Nehezen kötök új barátságokat"
            },
            {
                  "title": "Állandóan mintákat veszek észre a dolgokban"
            },
            {
                  "title": "Szívesebben megyek színházba, mint múzeumba"
            },
            {
                  "title": "Nem zavar, ha a mindennapi rutinom megzavarják"
            },
            {
                  "title": "Gyakran tapasztalom, hogy nem tudom, hogyan tartsam fenn a beszélgetést"
            },
            {
                  "title": "Könnyen tudok 'a sorok között olvasni', amikor valaki beszél hozzám"
            },
            {
                  "title": "Általában inkább az átfogó képre koncentrálok, mint az apró részletekre"
            },
            {
                  "title": "Nem vagyok jó a telefonszámok megjegyzésében"
            },
            {
                  "title": "Általában nem veszem észre az apró változásokat egy helyzetben vagy egy személy megjelenésében"
            },
            {
                  "title": "Tudom, hogyan ismerjem fel, ha valaki, aki hallgat, unatkozni kezd"
            },
            {
                  "title": "Könnyen csinálok több dolgot egyszerre"
            },
            {
                  "title": "Telefonbeszélgetés közben nem vagyok biztos benne, mikor van az én sorom beszélni"
            },
            {
                  "title": "Szívesen csinálok dolgokat spontán"
            },
            {
                  "title": "Gyakran én vagyok az utolsó, aki megérti egy vicc poénját"
            },
            {
                  "title": "Könnyedén ki tudom találni, mit gondol vagy érez valaki, pusztán az arckifejezése alapján"
            },
            {
                  "title": "Ha félbeszakítanak, gyorsan vissza tudok térni ahhoz, amit csináltam"
            },
            {
                  "title": "Jó vagyok a kötetlen társalgásban"
            },
            {
                  "title": "Az emberek gyakran mondják, hogy folyton ugyanarról beszélek"
            },
            {
                  "title": "Gyerekkoromban szívesen játszottam képzeletbeli játékokat más gyerekekkel"
            },
            {
                  "title": "Szeretek információt gyűjteni dolgok kategóriáiról"
            },
            {
                  "title": "Nehezen tudom elképzelni, milyen lenne valaki másnak lenni"
            },
            {
                  "title": "Szeretek alaposan megtervezni minden tevékenységet, amelyben részt veszek"
            },
            {
                  "title": "Szívesen veszek részt társasági alkalmakon"
            },
            {
                  "title": "Nehezen tudom kikövetkeztetni mások szándékait"
            },
            {
                  "title": "Az új helyzetek szorongást keltenek bennem"
            },
            {
                  "title": "Szívesen ismerkedek új emberekkel"
            },
            {
                  "title": "Jó diplomata vagyok"
            },
            {
                  "title": "Nem vagyok jó mások születésnapi dátumának megjegyzésében"
            },
            {
                  "title": "Nagyon könnyű számomra olyan játékokat játszani gyerekekkel, amelyek képzeletet igényelnek"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Kevés autista jellemző",
                  "desc": "Az Ön pontszáma az általános populáció tipikus tartományába esik. Nem utal jelentős autizmus spektrum jellemzőkre."
            },
            "leve": {
                  "label": "Enyhe autista jellemzők",
                  "desc": "Az Ön pontszáma néhány autizmus spektrum jellemzőre utal, az átlagos tartományon belül. Sok diagnózis nélküli ember is ebbe a tartományba esik."
            },
            "moderado": {
                  "label": "Mérsékelt autista jellemzők",
                  "desc": "Az Ön pontszáma meghaladja a 26-os küszöbértéket, és átlag feletti autista jellemzőkre utal. Fontolja meg szakemberrel való konzultációt, ha nehézségeket tapasztal."
            },
            "alto": {
                  "label": "Jelentős autista jellemzők",
                  "desc": "Az Ön pontszáma meghaladja a 32-es klinikai küszöböt. Az autizmussal diagnosztizált emberek 80%-a ebbe a tartományba esik. Diagnosztikai értékelés javasolt."
            },
            "muy_alto": {
                  "label": "Nagyon jelentős autista jellemzők",
                  "desc": "Az Ön pontszáma nagyon magas, és erősen utal autizmus spektrum jellemzők jelenlétére. Átfogó diagnosztikai értékelés erősen javasolt."
            }
      }
},
    "cssrs": {
      "name": "C-SSRS",
      "abbr": "C-SSRS",
      "fullName": "Columbia Öngyilkossági Súlyossági Értékelő Skála — Szűrő",
      "desc": "Világszerte használt öngyilkossági kockázatszűrő eszköz, amelyet sürgősségi osztályokon, alapellátásban és oktatásban alkalmaznak. Ha krízisben van, hívja a 116 123-at (EU) vagy a befrienders.org-ot.",
      "instructions": "Válaszoljon őszintén a következő kérdésekre az esetleges gondolatairól vagy viselkedéseiről. Válaszai bizalmasak, és csak az Ön eszközén tárolódnak.",
      "questions": [
            {
                  "title": "Kívánta-e valaha, hogy meghalna, vagy azt kívánta, hogy elaludjon és ne ébredjen fel?",
                  "options": [
                        "Nem",
                        "Igen"
                  ]
            },
            {
                  "title": "Gondolt-e ténylegesen arra, hogy megöli magát?",
                  "options": [
                        "Nem",
                        "Igen"
                  ]
            },
            {
                  "title": "Gondolkodott-e azon, hogyan tenné ezt? (pl. gondolt egy módszerre, mint gyógyszerek, fegyver vagy más mód)",
                  "options": [
                        "Nem",
                        "Igen"
                  ]
            },
            {
                  "title": "Voltak-e ilyen gondolatai, és szándékában állt-e cselekedni?",
                  "options": [
                        "Nem",
                        "Igen"
                  ]
            },
            {
                  "title": "Elkezdett-e kidolgozni vagy kidolgozta-e annak részleteit, hogyan ölné meg magát? Szándékában áll-e végrehajtani ezt a tervet?",
                  "options": [
                        "Nem",
                        "Igen"
                  ]
            },
            {
                  "title": "Tett-e valaha bármit, kezdett-e el tenni bármit, vagy készült-e tenni bármit, hogy véget vessen az életének? (pl. gyógyszereket gyűjtött, fegyvert szerzett, értékeit elosztotta, búcsúlevelet írt, gyógyszereket vett be, megvágta magát, felakasztani próbálta magát stb.)",
                  "options": [
                        "Nem",
                        "Igen"
                  ]
            }
      ],
      "results": {
            "none": {
                  "label": "Nem azonosított kockázat",
                  "desc": "Jelenleg nem azonosítottak öngyilkossági kockázati tényezőket. Ha valaha is ilyen gondolatai lennének, ne habozzon szakmai segítséget kérni."
            },
            "low": {
                  "label": "Alacsony kockázat",
                  "desc": "Passzív halálvágyat fejezett ki. Bár nem jelez aktív terveket, javasolt beszélnie egy szakemberrel.\n\n🆘 KRÍZIS VONALAK:\n• EU: 116 123\n• USA: 988\n• Nemzetközi: befrienders.org"
            },
            "moderate": {
                  "label": "Mérsékelt kockázat",
                  "desc": "Válaszai öngyilkossági gondolatokra utalnak. Nagyon fontos, hogy beszéljen mentálhigiénés szakemberrel. Egy biztonsági terv segíthet.\n\n🆘 KRÍZIS VONALAK:\n• EU: 116 123\n• USA: 988\n• Nemzetközi: befrienders.org"
            },
            "high": {
                  "label": "Magas kockázat",
                  "desc": "Válaszai az öngyilkos viselkedés magas kockázatára utalnak. Sürgős szakmai értékelésre van szüksége. Kérjük, lépjen kapcsolatba mentálhigiénés szakemberrel vagy hívja a krízis vonalat most.\n\n🆘 KRÍZIS VONALAK:\n• EU: 116 123\n• USA: 988\n• Nemzetközi: befrienders.org"
            },
            "imminent": {
                  "label": "Közvetlen kockázat",
                  "desc": "Válaszai nagyon magas kockázatot jeleznek. Létfontosságú, hogy MOST kérjen szakmai segítséget. Menjen a sürgősségire vagy hívja a krízis vonalat azonnal. Nincs egyedül.\n\n🆘 KRÍZIS VONALAK:\n• EU: 116 123\n• USA: 988\n• Nemzetközi: befrienders.org"
            }
      }
},
    "cage": {
      "name": "CAGE",
      "abbr": "CAGE",
      "fullName": "CAGE Alkoholszűrő Kérdőív",
      "desc": "Rendkívül rövid, 4 kérdéses szűrés alkoholproblémák kimutatására. Kiegészíti az AUDIT-ot.",
      "instructions": "Válaszoljon őszintén a következő kérdésekre az alkohollal való kapcsolatáról.",
      "sharedOptions": [
            "Nem",
            "Igen"
      ],
      "questions": [
            {
                  "title": "Érezte-e valaha, hogy csökkentenie kellene az ivást?"
            },
            {
                  "title": "Bosszantotta-e valaha, ha mások kritizálták az ivását?"
            },
            {
                  "title": "Érzett-e valaha bűntudatot az ivása miatt?"
            },
            {
                  "title": "Ivott-e valaha reggel először, hogy megnyugtassa az idegeit vagy megszabaduljon a másnaposságtól (Szemnyitogató)?"
            }
      ],
      "results": {
            "none": {
                  "label": "Nincs jelzés",
                  "desc": "Nem észlelhető alkoholprobléma jelzése."
            },
            "low": {
                  "label": "Lehetséges kockázat",
                  "desc": "Egy pozitív válasz további vizsgálatot igényel. Fontolja meg az AUDIT teszt kitöltését teljesebb értékeléshez."
            },
            "moderate": {
                  "label": "Valószínű probléma",
                  "desc": "Az Ön pontszáma alkoholhasználati zavar magas valószínűségét jelzi. Javasolt egészségügyi szakemberrel konzultálni."
            },
            "high": {
                  "label": "Magas valószínűség",
                  "desc": "Az Ön pontszáma gyakorlatilag alkoholfüggőségre utal. Nagyon fontos szakosodott szakmai segítséget kérni."
            }
      }
},
    "phqa": {
      "name": "PHQ-A",
      "abbr": "PHQ-A",
      "fullName": "Beteg Egészségügyi Kérdőív — Serdülők",
      "desc": "A PHQ-9 serdülők számára validált változata (11-17 év). Felméri a depressziót az elmúlt két hétben.",
      "instructions": "Az elmúlt 2 hétben milyen gyakran zavarták a következő problémák? Gondoljon arra, hogyan érezte magát az iskolában, barátok közt és otthon.",
      "sharedOptions": [
            "Egyáltalán nem",
            "Néhány napon",
            "A napok több mint felén",
            "Szinte minden nap"
      ],
      "questions": [
            {
                  "title": "Csekély érdeklődés vagy öröm a dolgokban"
            },
            {
                  "title": "Lehangoltság, depresszió vagy reménytelenség érzése"
            },
            {
                  "title": "Nehézség az elalvásban vagy az alvás fenntartásában, vagy túl sok alvás"
            },
            {
                  "title": "Fáradtságérzet vagy kevés energia"
            },
            {
                  "title": "Étvágytalanság vagy túlevés"
            },
            {
                  "title": "Rossz érzés önmagával kapcsolatban — vagy az az érzés, hogy kudarcot vallott, vagy cserben hagyta magát vagy a családját"
            },
            {
                  "title": "Nehézség a dolgokra való koncentrálásban, mint iskolai feladatok, olvasás vagy tévézés"
            },
            {
                  "title": "Olyan lassan mozog vagy beszél, hogy mások is észrevehették? Vagy az ellenkezője — olyan nyugtalan vagy izgatott, hogy a szokásosnál sokkal többet mozgott"
            },
            {
                  "title": "Gondolatok, hogy jobb lenne meghalni, vagy hogy valahogy bántsa magát"
            }
      ],
      "results": {
            "minima": {
                  "label": "Minimális",
                  "desc": "Nem észlelhetők a depresszió jelentős tünetei. Továbbra is ügyeljen az érzelmi jóllétére."
            },
            "leve": {
                  "label": "Enyhe",
                  "desc": "Enyhe tünetek észlelhetők. Beszéljen egy megbízható felnőttel, ha valami aggasztja."
            },
            "moderada": {
                  "label": "Mérsékelt",
                  "desc": "Mérsékelt depressziós tünetek észlelhetők. Javasolt mentálhigiénés szakemberrel beszélni."
            },
            "moderadamente_grave": {
                  "label": "Mérsékelten súlyos",
                  "desc": "Jelentős depressziós tünetek észlelhetők. Fontos mielőbb szakmai segítséget kérni."
            },
            "grave": {
                  "label": "Súlyos",
                  "desc": "Súlyos depressziós tünetek észlelhetők. Sürgősen kérjen szakmai segítséget. Beszéljen egy megbízható felnőttel most."
            }
      }
},
    "triage": {
      "name": "Útmutató",
      "abbr": "Útmutató",
      "fullName": "Kezdeti Tájékozódó Kérdőív",
      "desc": "Nem tudja, hol kezdje? Ez a rövid kérdőív ajánlja, mely felmérések a legfontosabbak az Ön számára.",
      "instructions": "Válaszoljon őszintén a következő kérdésekre arról, hogyan érezte magát mostanában. A végén személyre szabott ajánlásokat kap, melyik felméréseket töltse ki.",
      "sharedOptions": ["Egyáltalán nem","Kissé","Mérsékelten","Meglehetősen","Nagyon"],
      "questions": [
        { "title": "Szomorúnak, lehangoltnak vagy reménytelennek éreztem magam" },
        { "title": "Elvesztettem az érdeklődésemet vagy az örömet a korábban élvezett dolgok iránt" },
        { "title": "Energia nélkül érzem magam vagy fáradt vagyok a legtöbb időben" },
        { "title": "Idegesnek, szorongónak vagy feszültnek érzem magam" },
        { "title": "Túlzott aggodalmakat érzek, amelyeket nem tudok kontrollálni" },
        { "title": "Fizikai szorongásos tüneteket tapasztalok (szívdobogás, izzadás, remegés)" },
        { "title": "Kerülöm a társas helyzeteket, mert félek a megítéléstől vagy nevetségessé válástól" },
        { "title": "Nagyon nehezen tudok nyilvánosan beszélni vagy idegenekkel társalogni" },
        { "title": "Túlterhelve érzem magam az élethelyzetektől" },
        { "title": "Nehézségeim vannak a mindennapi problémák kezelésében" },
        { "title": "Átéltem egy traumatikus élményt, amely továbbra is hat rám" },
        { "title": "Zavaró emlékeim vagy rémálmaim vannak múltbeli eseményekről" },
        { "title": "Nehézségeim vannak az elalvásban vagy az alvás fenntartásában" },
        { "title": "Az alvás minősége befolyásolja a mindennapi működésemet" },
        { "title": "Túlzottan aggódom a testsúlyom vagy testképem miatt" },
        { "title": "Problémás a kapcsolatom az étellel (korlátozás, falási rohamok, öklendezés)" },
        { "title": "Az alkoholfogyasztásom aggaszt vagy problémákat okozott" },
        { "title": "Nehezen tudok koncentrálni, feladatokat szervezni vagy befejezni, amit elkezdek" },
        { "title": "Túlzottan nyugtalan vagyok vagy nehéz egy helyben maradnom" },
        { "title": "Ismétlődő, tolakodó gondolataim vannak, amelyek szenvedést okoznak" },
        { "title": "Szükségét érzem bizonyos cselekedetek vagy rituálék ismétlésének" },
        { "title": "Voltak eufóriás vagy túlzott energiájú időszakaim, amelyeket depressziós időszakok követtek" },
        { "title": "Voltak időszakaim, amikor szokatlanul hiperaktív vagy impulzív voltam" },
        { "title": "Az emberi kapcsolataim intenzívek és instabilak" },
        { "title": "Az érzelmeim gyorsan változnak, és nehezen szabályozom őket" },
        { "title": "Nehezen értem meg mások szándékait vagy érzelmeit" },
        { "title": "Előnyben részesítem a rutinokat, és kényelmetlenül érzem magam, ha megzavarják azokat" }
      ],
      "domainNames": {
        "Estado de ánimo": "Hangulat",
        "Ansiedad": "Szorongás",
        "Ansiedad social": "Szociális szorongás",
        "Estrés": "Stressz",
        "Trauma": "Trauma",
        "Sueño": "Alvás",
        "Alimentación": "Étkezés",
        "Alcohol": "Alkohol",
        "Atención y concentración": "Figyelem és koncentráció",
        "Obsesiones y compulsiones": "Kényszerek és rögeszmék",
        "Cambios de ánimo": "Hangulatingadozás",
        "Regulación emocional": "Érzelemszabályozás",
        "Rasgos del espectro autista": "Autizmus spektrum jellemzők"
      },
      "domainReasons": {
        "Estado de ánimo": "Magas pontszám a hangulati mutatókon",
        "Ansiedad": "Magas pontszám a szorongási mutatókon",
        "Ansiedad social": "Magas pontszám a szociális szorongás mutatókon",
        "Estrés": "Magas pontszám az észlelt stressz mutatókon",
        "Trauma": "Magas pontszám a trauma és poszttraumás stressz mutatókon",
        "Sueño": "Magas pontszám az alvásprobléma mutatókon",
        "Alimentación": "Magas pontszám az étkezési viselkedés mutatókon",
        "Alcohol": "Magas pontszám az alkoholfogyasztás mutatókon",
        "Atención y concentración": "Magas pontszám a figyelmetlenség és hiperaktivitás mutatókon",
        "Obsesiones y compulsiones": "Magas pontszám a kényszeres-rögeszmés mutatókon",
        "Cambios de ánimo": "Magas pontszám a hangulatingadozás mutatókon",
        "Regulación emocional": "Magas pontszám az érzelmi és interperszonális instabilitás mutatókon",
        "Rasgos del espectro autista": "Magas pontszám az autizmus spektrum jellemző mutatókon"
      },
      "results": {
        "triage_label": "Az Ön számára ajánlott felmérések",
        "triage_desc": "Válaszai alapján a következő felméréseket javasoljuk:",
        "suggested_wellbeing": "Mindenkinek ajánlott általános jóllét felmérés",
        "suggested_personality": "Személyiségfelmérés kiegészítésként ajánlott"
      }
    },
    "ipip300": {
      "name": "IPIP-300",
      "abbr": "IPIP-300",
      "fullName": "IPIP-NEO-300 — 300 kérdéses Személyiség Kérdőív",
      "desc": "A legátfogóbb elérhető személyiségfelmérés. 30 alskálát mér, amelyek a Nagy Ötös vonásba csoportosulnak, nagy pontossággal.",
      "instructions": "Jelölje meg, mennyire pontosan írja le az egyes állítás Önt általánosságban. Nincsenek helyes vagy helytelen válaszok. Kérjük, válaszoljon őszintén.",
      "sharedOptions": ["Nagyon pontatlan","Pontatlan","Sem pontos, sem pontatlan","Pontos","Nagyon pontos"],
      "questions": [
        { "title": "Aggódom a dolgok miatt." },
        { "title": "Az idő nagy részében nyugodt vagyok." },
        { "title": "Minden helyzetben a legrosszabbtól félek." },
        { "title": "Ritkán érzek szorongást." },
        { "title": "Könnyen ideges leszek." },
        { "title": "Nem aggódom olyan dolgok miatt, amelyek már megtörténtek." },
        { "title": "Aggódom, mi romolhat el." },
        { "title": "Nyugodt maradok a bizonytalanság közepette." },
        { "title": "Gyakran érzek szorongást." },
        { "title": "Nem ijedek meg könnyen." },
        { "title": "Könnyen felidegesítem magam." },
        { "title": "Ritkán veszítem el a türelmemet." },
        { "title": "Dühös leszek, ha a dolgok nem úgy mennek, ahogy szeretném." },
        { "title": "Nehéz kihozni a sodromból." },
        { "title": "Könnyen frusztrálódom." },
        { "title": "Megőrzöm a higgadtságomat nehéz helyzetekben." },
        { "title": "Sok dolog zavar." },
        { "title": "Nem leszek könnyen dühös." },
        { "title": "Felrobbanok, ha provokálnak." },
        { "title": "Jól kontrollálom az indulataimat." },
        { "title": "Gyakran szomorú vagyok." },
        { "title": "Jól érzem magam a bőrömben." },
        { "title": "Gyakran érzem magam elcsüggedtnek." },
        { "title": "Ritkán vagyok lehangolt." },
        { "title": "Elégedetlen vagyok az életemmel." },
        { "title": "Általában elégedett vagyok." },
        { "title": "Néha ürességet érzek belül." },
        { "title": "Nem engedem, hogy a negatív gondolatok átvegyék az irányítást." },
        { "title": "Hajlamos vagyok a dolgok sötét oldalát látni." },
        { "title": "Élvezem az életet, ahogy van." },
        { "title": "Könnyen zavarba jövök." },
        { "title": "Jól érzem magam társas helyzetekben." },
        { "title": "Aggódom, mit gondolnak mások rólam." },
        { "title": "Nem zavar, ha a figyelem középpontjában vagyok." },
        { "title": "Kényelmetlenül érzem magam, amikor néznek." },
        { "title": "Ritkán érzek feszélyezettséget." },
        { "title": "Nehezen beszélek egy csoport előtt." },
        { "title": "Nem aggódom amiatt, hogy nevetségessé teszem magam." },
        { "title": "Könnyen elpirulok." },
        { "title": "Természetesen viselkedem idegenek között." },
        { "title": "Nehezen állok ellen a kísértéseknek." },
        { "title": "Jól kontrollálom az impulzusaimat." },
        { "title": "Stresszhelyzetben túl sokat eszem vagy iszom." },
        { "title": "Tudom, mikor kell megállni." },
        { "title": "Olyasmire költök pénzt, amire nincs szükségem." },
        { "title": "Jól ellenállok a kísértéseknek." },
        { "title": "Engedek a vágyaimnak." },
        { "title": "Kézben tartom a szokásaimat." },
        { "title": "Olyasmit teszek, amit később megbánok." },
        { "title": "Nem esem könnyen a túlzásba." },
        { "title": "Nyomás alatt szétesek." },
        { "title": "Jól kezelem a stresszes helyzeteket." },
        { "title": "Úgy érzem, elnyomnak a nehézségek." },
        { "title": "Nem engedem, hogy a problémák legyőzzenek." },
        { "title": "Megdermedek nagy nyomás alatt." },
        { "title": "Stressz alatt is jól funkcionálok." },
        { "title": "Nehezen állok talpra a kudarcok után." },
        { "title": "Ellenálló vagyok a megpróbáltatásokkal szemben." },
        { "title": "Elvesztem az önuralmam, ha nagy nyomás alatt vagyok." },
        { "title": "Higgadtan nézek szembe a problémákkal." },
        { "title": "Könnyen barátkozom." },
        { "title": "Nehéz számomra megszólítani másokat." },
        { "title": "Jól érzem magam az emberek társaságában." },
        { "title": "Távolságtartó vagyok idegenekkel." },
        { "title": "Gyorsan kapcsolatot teremtek az emberekkel." },
        { "title": "Tartom a távolságot másoktól." },
        { "title": "Mindenkit melegséggel kezelek." },
        { "title": "Nehéz megbíznom új emberekben." },
        { "title": "Üdvözlőkésznek mutatom magam." },
        { "title": "Nem vagyok túl meleg személyiség." },
        { "title": "Szeretem az emberek társaságát." },
        { "title": "Inkább egyedül vagyok." },
        { "title": "Szeretem a bulikat és összejöveteleket." },
        { "title": "Kerülöm a tömegeket." },
        { "title": "Keresem mások társaságát." },
        { "title": "Szeretem a magányt." },
        { "title": "Jól érzem magam nagy csoportokban." },
        { "title": "Inkább egyedüli tevékenységeket választok." },
        { "title": "Imádok szocializálódni." },
        { "title": "A társasági összejövetelek kimerítnek." },
        { "title": "Átveszem az irányítást a helyzetekben." },
        { "title": "Háttérben maradok." },
        { "title": "Habozás nélkül kimondom, amit gondolok." },
        { "title": "Nehezen fejezem ki a véleményemet." },
        { "title": "Természetesen veszem át a vezető szerepet." },
        { "title": "Hagyom, hogy mások döntsenek." },
        { "title": "Határozottan védelmezem az ötleteimet." },
        { "title": "Nehezen mondok nemet." },
        { "title": "Kezdeményezem a beszélgetéseket." },
        { "title": "Kerülöm a nézőpontom ráerőltetését." },
        { "title": "Mindig elfoglalt vagyok." },
        { "title": "Könnyedén veszem a dolgokat." },
        { "title": "Gyors tempóban élem az életemet." },
        { "title": "Szeretem nyugodtan csinálni a dolgokat." },
        { "title": "Sok mindent csinálok napközben." },
        { "title": "Inkább a laza életritmust kedvelem." },
        { "title": "Gyorsan váltok egyik tevékenységről a másikra." },
        { "title": "Nem szeretem a sietést." },
        { "title": "Nagyon aktív ember vagyok." },
        { "title": "Szeretek pihenni és nem csinálni semmit." },
        { "title": "Kalandot és izgalmat keresek." },
        { "title": "Inkább a kiszámíthatót és a biztonságosat választom." },
        { "title": "Imádom az izgalmas élményeket." },
        { "title": "Kerülöm a kockázatos helyzeteket." },
        { "title": "Szeretem kipróbálni az új és kockázatos dolgokat." },
        { "title": "Inkább a rutint választom a meglepetések helyett." },
        { "title": "Élvezem a sebességet és az adrenalint." },
        { "title": "Nem szeretem a veszélyes tevékenységeket." },
        { "title": "Unatkozom, ha nincs izgalom." },
        { "title": "Elégedett vagyok egy nyugodt élettel." },
        { "title": "Vidám ember vagyok." },
        { "title": "Ritkán vagyok jókedvű." },
        { "title": "Optimizmust sugárzok." },
        { "title": "Nem vagyok különösen vidám ember." },
        { "title": "Könnyen nevetek." },
        { "title": "Nehéz lelkesedést éreznem." },
        { "title": "A dolgok pozitív oldalát látom." },
        { "title": "Nem lelkesedek könnyen." },
        { "title": "Átadom az örömömet másoknak." },
        { "title": "Komolyabb vagyok a legtöbb embernél." },
        { "title": "Nagyon élénk a képzeletem." },
        { "title": "Ritkán fantáziálok." },
        { "title": "Szeretem az ábrándozást." },
        { "title": "Nagyon gyakorlatias vagyok, és nem tévedek el fantáziákban." },
        { "title": "Képzeletbeli világokat teremtek az elmémben." },
        { "title": "Nem vesztegetek időt a képzeletre." },
        { "title": "Lenyűgöz az ötletek világa." },
        { "title": "A tényeket részesítem előnyben a fantáziákkal szemben." },
        { "title": "Az elmém tele van kreatív ötletekkel." },
        { "title": "Nincs sok képzeletem." },
        { "title": "Értékelem a művészetet és a szépséget." },
        { "title": "Nem érdeklődöm a művészi kifejezések iránt." },
        { "title": "Meghat a zene." },
        { "title": "Nem látom az absztrakt művészet értelmét." },
        { "title": "Szeretem a múzeumokat és galériákat látogatni." },
        { "title": "A művészet untat." },
        { "title": "Szeretem a természet szemlélését." },
        { "title": "Nem figyelek az esztétikai részletekre." },
        { "title": "Értékelem a művészi kifejezést minden formájában." },
        { "title": "Inkább a funkcionalitást választom a szépség helyett." },
        { "title": "Nagyon intenzíven élem meg az érzelmeket." },
        { "title": "Ritkán hatódok meg mélyen." },
        { "title": "A filmek és könyvek mélyen érintenek." },
        { "title": "Nem vagyok különösen érzelmes ember." },
        { "title": "Képes vagyok sírni egy szép dalnál." },
        { "title": "Nem engedem, hogy az érzelmek magukkal ragadjanak." },
        { "title": "Mély empátiát érzek mások iránt." },
        { "title": "Az érzelmeimet az ésszel kontrollálom." },
        { "title": "Az érzelmeim változatosak és intenzívek." },
        { "title": "Érzelmileg tartózkodó ember vagyok." },
        { "title": "Szeretem felfedezni az új helyeket." },
        { "title": "Az ismerőset részesítem előnyben az ismeretlennel szemben." },
        { "title": "Szeretem más kultúrák ételeit kipróbálni." },
        { "title": "Jól érzem magam a rutinjaimmal." },
        { "title": "Vonz az egzotikus helyekre való utazás." },
        { "title": "Nem szeretem elhagyni a komfortzónámat." },
        { "title": "Állandóan új élményeket keresek." },
        { "title": "Inkább a szokásos módon csinálom a dolgokat." },
        { "title": "Jól alkalmazkodom az új helyzetekhez." },
        { "title": "A változások kényelmetlenné tesznek." },
        { "title": "Szeretem a bonyolult problémák megoldását." },
        { "title": "Kerülöm a filozófiai vitákat." },
        { "title": "Szeretem az elvont ötletekről elmélkedni." },
        { "title": "Nem érdeklenek az intellektuális viták." },
        { "title": "Sokat olvasok változatos témákban." },
        { "title": "Inkább a gyakorlati tevékenységeket választom az elméletiek helyett." },
        { "title": "Lenyűgöz az új dolgok tanulása." },
        { "title": "Nem érdeklődöm a filozófia iránt." },
        { "title": "Kíváncsi vagyok, hogyan működik minden." },
        { "title": "Nem szeretem a rejtvényeket vagy agytornákat." },
        { "title": "Úgy vélem, a törvényeknek alkalmazkodniuk kell a korhoz." },
        { "title": "Tisztelem a bevett hagyományokat." },
        { "title": "Nyitott vagyok a társadalmi újragondolásra." },
        { "title": "Úgy vélem, a társadalom jobban működik szigorú szabályokkal." },
        { "title": "Megkérdőjelezem a bevett normákat." },
        { "title": "Inkább követem a társadalmi konvenciókat." },
        { "title": "Támogatom a progresszív társadalmi változásokat." },
        { "title": "Fontos a szokások megőrzése." },
        { "title": "Úgy vélem, a fennálló rendet kérdőjelezni kell." },
        { "title": "A hagyományok stabilitást adnak a társadalomnak." },
        { "title": "Megbízom másokban." },
        { "title": "Gyanakvó vagyok mások szándékaival." },
        { "title": "Úgy vélem, a legtöbb ember becsületes." },
        { "title": "Gyanítom, hogy másoknak rejtett indítékai vannak." },
        { "title": "Megadom másoknak a bizalom előlegét." },
        { "title": "Úgy vélem, az emberek ki akarnak használni." },
        { "title": "Hiszek az emberek jóságában." },
        { "title": "Nehezen bízok meg valakiben." },
        { "title": "Feltételezem, hogy az emberek jó szándékúak." },
        { "title": "Szkeptikus vagyok az idegenek kedvességével szemben." },
        { "title": "Mindig őszinte vagyok." },
        { "title": "Néha manipulálok másokat, hogy elérjem, amit akarok." },
        { "title": "Nem hazudnék azért, hogy előnyre tegyek szert." },
        { "title": "Trükköket alkalmazok, hogy mások tegyék, amit akarok." },
        { "title": "Igazságosan bánok másokkal." },
        { "title": "Néha olyannak tüntetem fel magam, ami nem vagyok." },
        { "title": "Még ha kellemetlen is, igazat mondok." },
        { "title": "Nem vagyok mindig teljesen őszinte." },
        { "title": "Az elveim szerint cselekszem." },
        { "title": "Ha előnyös, hízelgést alkalmazok." },
        { "title": "Szeretek segíteni másoknak." },
        { "title": "Nem avatkozom mások problémáiba." },
        { "title": "Elégedettséget érzek, ha tehetek valakiért valamit." },
        { "title": "Először a saját érdekeimet nézem." },
        { "title": "Törődöm mások jóllétével." },
        { "title": "Nem szeretem, ha szívességet kérnek tőlem." },
        { "title": "Segítek a rászorulóknak anélkül, hogy viszonzást várnék." },
        { "title": "Nem érzem kötelességemnek, hogy segítsek másoknak." },
        { "title": "Nagylelkűen adom az időmet." },
        { "title": "Inkább nem avatkozom mások dolgaiba." },
        { "title": "Kerülöm a konfliktusokat." },
        { "title": "Nem bánok vitázni az emberekkel." },
        { "title": "Megegyezést keresek a vitákban." },
        { "title": "Szeretem a jó vitát, még ha feszült is lesz." },
        { "title": "Engedek a béke kedvéért." },
        { "title": "Ragaszkodom a nézőpontomhoz, még ha konfliktust okoz is." },
        { "title": "Inkább a harmóniát választom, mint hogy igazam legyen." },
        { "title": "Nem bánom, ha ellentmondok másoknak." },
        { "title": "Próbálok mindenkit kielégítő megoldásokat találni." },
        { "title": "Elég makacs tudok lenni a vitákban." },
        { "title": "Nem szeretem kérkedni." },
        { "title": "Úgy vélem, jobb vagyok a legtöbb embernél." },
        { "title": "Szerény ember vagyok." },
        { "title": "Szeretem, ha a figyelem középpontjában vagyok." },
        { "title": "Nem tartom magam különlegesnek." },
        { "title": "Úgy vélem, több elismerést érdemlek, mint amennyit kapok." },
        { "title": "Lekicsinylem a saját eredményeimet." },
        { "title": "Szeretem a sikereimről beszélni." },
        { "title": "Nem keresem a csodálatot." },
        { "title": "Tudom, hogy többet érek a legtöbb embernél." },
        { "title": "Meghat a szenvedő emberek sorsa." },
        { "title": "Mások problémái nem hatnak rám nagyon." },
        { "title": "Együttérzést érzek a kevésbé szerencsésekkel." },
        { "title": "Úgy vélem, mindenki oldja meg a saját problémáit." },
        { "title": "Törődöm a hátrányos helyzetűekkel." },
        { "title": "A szomorú történetek nem hatnak meg könnyen." },
        { "title": "Úgy vélem, a társadalomnak védenie kell a kiszolgáltatottakat." },
        { "title": "Az emberek eltúlozzák a problémáikat." },
        { "title": "Fáj látni az állatokat szenvedni." },
        { "title": "Nem vagyok nagyon szentimentális a társadalmi ügyek iránt." },
        { "title": "Tudom, hogy bármilyen helyzetet kezelni tudok." },
        { "title": "Kétlem a képességeimet." },
        { "title": "Sikeresen teljesítem a feladatokat." },
        { "title": "Nem érzem magam felkészültnek a kihívásokra." },
        { "title": "Bízom abban, hogy meg tudom oldani a problémákat." },
        { "title": "Bizonytalannak érzem magam nehéz feladatokkal szemben." },
        { "title": "Jól csinálom a dolgokat." },
        { "title": "Néha alkalmatlannak érzem magam." },
        { "title": "Ügyesen kezelem a nehézségeket." },
        { "title": "Félek, hogy nem érek fel az elvárásokhoz." },
        { "title": "Rendben tartom a holmijaim." },
        { "title": "Mindent szétszórva hagyok." },
        { "title": "Szeretem, ha minden a helyén van." },
        { "title": "Nem zavar a rendetlenség." },
        { "title": "Szervezett rutint követek." },
        { "title": "Meglehetősen rendetlen vagyok." },
        { "title": "Gyakran takarítok és rendet rakok." },
        { "title": "Nem aggódom amiatt, hogy a dolgokat rendben tartsam." },
        { "title": "Zavar a körülöttem lévő káosz." },
        { "title": "A munkaterületem általában rendetlen." },
        { "title": "Teljesítem a kötelezettségeimet." },
        { "title": "Néha nem követem a szabályokat." },
        { "title": "Betartom az ígéreteimet." },
        { "title": "Nem mindig teszem meg, amit elvárnak tőlem." },
        { "title": "Komolyan veszem a felelősségeimet." },
        { "title": "Néha nem tartom be a vállalásaimat." },
        { "title": "Megteszem, amit mondok, hogy meg fogok tenni." },
        { "title": "Nem aggódom sokat a szabályok miatt." },
        { "title": "Szavatartó ember vagyok." },
        { "title": "Néha elhanyagolom a kötelességeimet." },
        { "title": "Keményen dolgozom a céljaim elérése érdekében." },
        { "title": "Beérem a minimummal." },
        { "title": "A kiválóságra törekszem." },
        { "title": "Nem sokat törődöm a sikerrel." },
        { "title": "Folyamatosan fejleszteni akarom magam." },
        { "title": "Nem vagyok nagyon ambiciózus." },
        { "title": "Világos céljaim vannak, és dolgozom az elérésükért." },
        { "title": "Csak annyit teszek, ami szükséges a boldoguláshoz." },
        { "title": "Motivál a nagy dolgok elérése." },
        { "title": "Nem teszek bele több erőfeszítést a szükségesnél." },
        { "title": "Befejezem, amit elkezdek." },
        { "title": "Nehéz koncentrálnom." },
        { "title": "Kitartok, amíg a feladat el nincs végezve." },
        { "title": "Gyakran halogatom a dolgokat." },
        { "title": "Azonnal munkához látok." },
        { "title": "Könnyen elterelődik a figyelmem." },
        { "title": "Nem hagyom félbe a feladatokat." },
        { "title": "Lényegtelen dolgokra pazarlom az időmet." },
        { "title": "A céljaimra összpontosítok." },
        { "title": "Nehezen fogok hozzá a nehéz feladatokhoz." },
        { "title": "Gondolkodom, mielőtt cselekszem." },
        { "title": "A következmények mérlegelése nélkül cselekszem." },
        { "title": "Minden lehetőséget megvizsgálok, mielőtt döntök." },
        { "title": "Impulzívan hozok döntéseket." },
        { "title": "Gondosan mérlegelem a kockázatokat." },
        { "title": "Tervezés nélkül ugrok bele a dolgokba." },
        { "title": "Tervezek, mielőtt cselekszem." },
        { "title": "Sokat nem gondolkodva csinálom a dolgokat." },
        { "title": "Átgondolom a lehetséges következményeket." },
        { "title": "A következmények mérlegelése nélkül mondok dolgokat." }
      ]
    },
    "pid5": {
      "name": "PID-5",
      "abbr": "PID-5",
      "fullName": "Személyiség Kérdőív DSM-5-höz",
      "desc": "A patológiás személyiségvonások átfogó felmérése a DSM-5 dimenzionális modellje szerint. 25 alskálát mér 5 területen.",
      "instructions": "Olvassa el az egyes állításokat, és válassza ki, mennyire jellemzi Önt általánosságban, nem csak ahogy most érzi magát.",
      "sharedOptions": ["Nagyon hamis vagy gyakran hamis","Néha vagy kissé hamis","Néha vagy kissé igaz","Nagyon igaz vagy gyakran igaz"],
      "questions": [
        { "title": "Az érzelmeim nyilvánvaló ok nélkül változnak." },
        { "title": "A hangulataim drasztikusan változnak egyik pillanatról a másikra." },
        { "title": "Gyorsan váltok a boldogságról a szomorúságra egyértelmű ok nélkül." },
        { "title": "A hozzám közel álló emberek mondják, hogy túl érzelmes vagyok." },
        { "title": "Nehezen kontrollálom az érzelmi reakcióimat." },
        { "title": "Könnyen felidegesítem magam olyan helyzeteken, amelyeket mások gond nélkül kezelnek." },
        { "title": "Az érzéseim kiszámíthatatlanok, még számomra is." },
        { "title": "Szinte minden miatt aggódom." },
        { "title": "Mindig számítok arra, hogy valami rossz fog történni." },
        { "title": "Nagyon könnyen ideges leszek." },
        { "title": "Nagyon nehéz abbahagynom az aggódást." },
        { "title": "Állandó szorongást érzek, amit nem tudok megmagyarázni." },
        { "title": "Túlzottan aggódom olyan dolgok miatt, amelyek valószínűleg nem fognak megtörténni." },
        { "title": "Szorongó gondolatok gyakran jönnek az eszembe." },
        { "title": "Félek, hogy szinte minden helyzetben rosszul mennek a dolgok." },
        { "title": "Az idő nagy részében feszült és ideges vagyok." },
        { "title": "Az egyedüllét gondolata megrémít." },
        { "title": "Nagyon aggódom, hogy az életem fontos emberei elhagynak." },
        { "title": "Állandóan szükségem van a szeretteim közelségére." },
        { "title": "Védtelennek érzem magam, ha nem vagyok közel valakihez, akit szeretek." },
        { "title": "Nagyon szenvedek, ha el kell válnom azoktól, akikhez kötődöm." },
        { "title": "Mindent megteszek, hogy megakadályozzam, hogy az emberek eltávolodjanak tőlem." },
        { "title": "Ha távol vagyok egy számomra fontos embertől, nehezen funkcionálok." },
        { "title": "Megváltoztatom a véleményemet, hogy illeszkedjen másokéhoz." },
        { "title": "Nagyon nehezen mondok nemet, még ha akarom is." },
        { "title": "Hagyom, hogy mások döntsenek helyettem, hogy elkerüljem a konfliktust." },
        { "title": "Inkább engedek másoknak, minthogy kiálljak magamért." },
        { "title": "Kis dolgokon is könnyen feldühödöm." },
        { "title": "Gyakran érzem magam dühösnek anélkül, hogy pontosan tudnám, miért." },
        { "title": "Az emberek mondják, hogy rossz természetű vagyok." },
        { "title": "Jobban elvesztem a türelmemet másokkal, mint kellene." },
        { "title": "Zavar, ha az emberek nem úgy csinálják a dolgokat, ahogy én akarom." },
        { "title": "Neheztelek azokra, akik bántottak." },
        { "title": "Hajlamos vagyok a legkisebb provokációra is dühvel reagálni." },
        { "title": "Dühbe gurulok, ha a dolgok nem úgy mennek, ahogy akarom." },
        { "title": "Állandó ingerültséget érzek, amelyet nehéz kontrollálni." },
        { "title": "Ha valaki megbánt, nagyon nehezen engedem el." },
        { "title": "Ugyanazokba a gondolatokba ragadok bele újra és újra." },
        { "title": "Nagyon nehéz abbahagynom a problémáimon való gondolkodást." },
        { "title": "Mentálisan újra és újra lejátszom ugyanazokat a helyzeteket anélkül, hogy megállhatnék." },
        { "title": "Megszállottan gondolok a múltbeli hibáimra." },
        { "title": "Amikor valami zavar, napokig nem tudom abbahagyni a gondolkodást róla." },
        { "title": "A gondolataim ismétlődnek, mint egy elakadt lemez." },
        { "title": "Nehéz elengednem egy ügyet, még ha tudom is, hogy kellene." },
        { "title": "Folyton ugyanazon gondolkozom, még ha nincs is értelme." },
        { "title": "Az emberek mondják, hogy túl sokat gondolkodom." },
        { "title": "Ritkán mutatom ki az érzelmeimet másoknak." },
        { "title": "Az emberek mondják, hogy hidegnek vagy érzelmileg távolinak tűnök." },
        { "title": "Általában nem érzek erős érzelmeket, sem pozitívat, sem negatívat." },
        { "title": "Nehezen fejezem ki, mit érzek, még a hozzám közel álló embereknek is." },
        { "title": "Az olyan helyzetek, amelyek másokat izgatnak, engem közömbösen hagynak." },
        { "title": "Nem hatnak meg a szomorú történetek vagy az érzelmes filmek." },
        { "title": "Inkább nem mutatom meg, mit érzek, mert gyengeségnek tartom." },
        { "title": "Az idő nagy részében szívesebben vagyok egyedül." },
        { "title": "Amennyire csak tudom, kerülöm a társasági összejöveteleket." },
        { "title": "Nem érdeklődöm új barátságok kötése iránt." },
        { "title": "Kényelmetlenül érzem magam, ha másokkal kell interakcióba lépnem." },
        { "title": "Szívesebben csinálom a dolgokat egyedül, mint csoportban." },
        { "title": "Szándékosan elszigetelem magam másoktól." },
        { "title": "Más emberekkel való beszélgetés kimerítő számomra." },
        { "title": "Jobban érzem magam, ha nem kell senkivel foglalkoznom." },
        { "title": "Kerülöm azokat a helyzeteket, ahol szocializálódnom kell." },
        { "title": "Nem zavar, ha hosszú ideig nincs társas kapcsolatom." },
        { "title": "Kevés dolog okoz igazi örömöt az életben." },
        { "title": "Elvesztettem az érdeklődésemet a korábban élvezett tevékenységek iránt." },
        { "title": "Nehezen találok valamit, ami igazán motivál." },
        { "title": "Az élet legtöbbször üresnek és értelmetlennek tűnik." },
        { "title": "Nem tapasztalok örömet még olyan alkalmakkor sem, amelyeknek boldognak kellene lenniük." },
        { "title": "Szinte mindig érzelmi ürességet érzek." },
        { "title": "Semmi sem lelkesít igazán." },
        { "title": "Úgy érzem, mintha a pozitív érzelmeim elhalványultak volna." },
        { "title": "Értéktelennek érzem magam mint ember." },
        { "title": "Úgy vélem, a világ jobb lenne nélkülem." },
        { "title": "Reménytelennek érzem a jövőt." },
        { "title": "Állandóan kritizálom magam mindenért, amit teszek." },
        { "title": "Mély szomorúságot érzek, ami nem múlik el." },
        { "title": "Szinte mindenben kudarcnak tartom magam, amit megpróbálok." },
        { "title": "Úgy vélem, a dolgok soha nem fognak jobbra fordulni számomra." },
        { "title": "Bűntudatot érzek olyan dolgok miatt, amelyek valójában nem az én hibám." },
        { "title": "Nagyon negatívan látom magam." },
        { "title": "Gyakran gondolom azt, hogy nem érdemlem meg a boldogságot." },
        { "title": "Haszontalannak és alkalmatlannak érzem magam, hogy bármit jól csináljak." },
        { "title": "Gyakran sírok vagy sírni szeretnék." },
        { "title": "Teljesen egyedül érzem magam, még ha emberek vesznek is körül." },
        { "title": "Úgy érzem, az életemnek nincs célja vagy iránya." },
        { "title": "Kerülöm a romantikus kapcsolatokat, mert sebezhetőnek érzem tőlük magam." },
        { "title": "Nem érdeklődöm intim kapcsolat iránt senkivel." },
        { "title": "Az érzelmi közelség másokkal nagyon kényelmetlenné tesz." },
        { "title": "Inkább érzelmi távolságot tartok az emberektől." },
        { "title": "Az intim kapcsolatok fojtogatónak tűnnek számomra." },
        { "title": "Nincs szükségem senkire közel az életemben." },
        { "title": "Nem bízom a legtöbb ember szándékaiban." },
        { "title": "Úgy vélem, az embereknek legtöbbször rejtett szándékaik vannak." },
        { "title": "Gyanítom, hogy az emberek a hátam mögött rosszat beszélnek rólam." },
        { "title": "Nehezen hiszem el, hogy bárki segíteni akarna nekem anélkül, hogy viszonzást várna." },
        { "title": "Mindig résen vagyok, mert úgy vélem, valaki megpróbálhat kihasználni." },
        { "title": "Kétlem az általam kapott bókok vagy dicséret őszinteségét." },
        { "title": "Úgy érzem, senkiben sem bízhatok meg teljesen." },
        { "title": "Jó vagyok abban, hogy manipuláljam az embereket, hogy elérjem, amit akarok." },
        { "title": "Hízelgést alkalmazok, hogy az emberek tegyék, amit akarok." },
        { "title": "Nem bánom, ha mások felhasználom a céljaim eléréséhez." },
        { "title": "Pontosan tudom, mit kell mondanom, hogy befolyásoljam mások döntéseit." },
        { "title": "Élvezem, ha finoman kontrollálom az embereket." },
        { "title": "Gyakran hazudok, ha előnyömre válik." },
        { "title": "Nem okoz nehézséget számomra az emberek megtévesztése." },
        { "title": "Kitalálok történeteket, hogy elérjem az akaratomat." },
        { "title": "Néha olyannak tüntetem fel magam, aki nem vagyok, hogy lenyűgözzek másokat." },
        { "title": "Eltúlzom a teljesítményeimet, hogy jó benyomást keltsek." },
        { "title": "Elhallgatok fontos információkat, ha ez az előnyömre szolgál." },
        { "title": "Képes vagyok meggyőzően játszani, még ha hazudok is." },
        { "title": "Nem zavar a becstelenség, ha segít nekem." },
        { "title": "Csaltam vagy megtévesztettem másokat, hogy megszerezzek valamit, amit akartam." },
        { "title": "Azt mondom, amit az emberek hallani akarnak, még ha nem is igaz." },
        { "title": "Különleges bánásmódot érdemlek, mert jobb vagyok a legtöbb embernél." },
        { "title": "Úgy vélem, rendkívüli ember vagyok, és másoknak el kellene ismerniük." },
        { "title": "Az emberek nem értékelik, mennyire értékes vagyok valójában." },
        { "title": "Nehezen értem, mások miért nem látják, milyen különleges vagyok." },
        { "title": "Úgy érzem, felettem állok a szabályoknak, amelyek másokra vonatkoznak." },
        { "title": "Összehasonlítom magam másokkal, és szinte mindig jobbnak tartom magam." },
        { "title": "Szükségem van arra, hogy a társasági helyzetekben a figyelem középpontjában legyek." },
        { "title": "Feltűnő dolgokat csinálok, hogy észrevegyenek." },
        { "title": "Zavar, ha a figyelem nem rám irányul." },
        { "title": "Állandóan keresem mások jóváhagyását és csodálatát." },
        { "title": "Nagyon igyekszem lenyűgözni az embereket." },
        { "title": "Szeretem a nagyszabású gesztusokat, hogy beszéljenek rólam." },
        { "title": "Eltúlzom az érzelmeimet, hogy reakciót váltsak ki másokból." },
        { "title": "Üresnek érzem magam, ha nem kapok figyelmet másoktól." },
        { "title": "Nem érdekel, ha a tetteim bántanak más embereket." },
        { "title": "Az emberek mondják, hogy érzéketlen vagyok mások szenvedésével szemben." },
        { "title": "Nem érzek megbánást, ha olyasmit teszek, ami bántja valakinek." },
        { "title": "Mások könnyei nem hatnak meg." },
        { "title": "Nehéz megértenem, miért sértődnek meg az emberek olyan könnyen." },
        { "title": "Nem aggódom mások érzései miatt, ha nem érintenek közvetlenül." },
        { "title": "Kegyetlen tudok lenni, ha a helyzet megkívánja." },
        { "title": "Nem érdeklődöm aziránt, hogy megvigasztaljak valakit, aki szenved." },
        { "title": "Úgy gondolom, az emberek manapság túl érzékenyek." },
        { "title": "Nem vesztem el az álmomat amiatt, hogy rosszul bántam valakivel." },
        { "title": "Mondták, hogy kemény és könyörtelen ember vagyok." },
        { "title": "Az empátiát gyengeségnek tartom." },
        { "title": "Nem érint meg látni, hogy mások szenvednek a hibáik következményeitől." },
        { "title": "Mindig a saját szükségleteimet helyezem előtérbe, tekintet nélkül arra, hogyan hat ez másokra." },
        { "title": "Gyakran nem tartom be a vállalásaimat és kötelezettségeimet." },
        { "title": "Gondatlan vagyok a pénzügyi felelősségeimmel." },
        { "title": "Az emberek nem számíthatnak rá, hogy megteszem, amit mondok." },
        { "title": "Gyakran hagyok fontos feladatokat befejezetlenül." },
        { "title": "Nem aggódom a határidők betartása miatt." },
        { "title": "Hajlamos vagyok hagyni, hogy mások intézzék a felelősségeimet." },
        { "title": "Nehéz megtartanom egy állást vagy követnem egy hosszú távú tervet." },
        { "title": "A következmények nélkül cselekszem." },
        { "title": "Impulzívan teszek dolgokat, amiket később megbánok." },
        { "title": "Nagyon nehéz ellenállnom az impulzusaimnak." },
        { "title": "Elhamarkodott döntéseket hozok anélkül, hogy minden lehetőséget mérlegelnék." },
        { "title": "Gondolkodás nélkül mondok dolgokat, és később bánom, hogy kimondtam őket." },
        { "title": "Nem tudok várni; azonnali kielégülésre van szükségem." },
        { "title": "Nagyon könnyen elterelődik a figyelmem." },
        { "title": "Nehéz egy feladatra koncentrálnom néhány percnél tovább." },
        { "title": "Állandóan elveszítem a gondolatmenetem." },
        { "title": "Sok mindenbe belekezdek, de nehéz befejeznem őket, mert elterelődik a figyelmem." },
        { "title": "Bármilyen zaj vagy külső inger eltereli a figyelmemet." },
        { "title": "Nehéz követnem egy hosszú beszélgetést anélkül, hogy elveszteném a fókuszt." },
        { "title": "Az elmém elkalandozik, amikor valamire kellene összpontosítanom." },
        { "title": "Gyakran elfelejtem, mit csináltam." },
        { "title": "Szükségem van arra, hogy megismételjék az utasításokat, mert nem tudom megjegyezni őket." },
        { "title": "Élvezem a veszélyes dolgokat." },
        { "title": "Intenzív izgalmat keresek, még ha kockázattal jár is." },
        { "title": "Nem bánom, ha kockázatos helyzetekbe kerülök." },
        { "title": "Könnyen unatkozom, ha nincs adrenalin." },
        { "title": "Meggondolatlan dolgokat tettem, amelyek ártalmasak lehettek volna számomra." },
        { "title": "A veszélyes tevékenységek izgalmasak számomra." },
        { "title": "Gyorsabban vezetek a megengedettnél, mert szeretem a sebességet." },
        { "title": "Szereket használtam anélkül, hogy aggódtam volna a következmények miatt." },
        { "title": "Figyelmen kívül hagyom a figyelmeztető jeleket, és folytatom, amit csinálok." },
        { "title": "Elfogadom a kihívásokat, amelyeket a legtöbb ember túl kockázatosnak tartana." },
        { "title": "Intenzív élményekre van szükségem, hogy érezzem, hogy élek." },
        { "title": "Unatkozom a rutintól, és új, kiszámíthatatlan dolgokat keresek." },
        { "title": "Nem mérlegelem a veszélyeket cselekvés előtt." },
        { "title": "Vonz a tiltott dolgok megtétele." },
        { "title": "Mindennek tökéletesnek kell lennie, különben nem vagyok elégedett." },
        { "title": "Lehetetlennek tartom elfogadni a munkát, ha nem hibátlan." },
        { "title": "Túl sok időt töltök jelentéktelen részletekkel, hogy meggyőződjek, helyesek-e." },
        { "title": "A mércém olyan magas, hogy gyakran nem tudok megfelelni neki." },
        { "title": "Ragaszkodom ahhoz, hogy a dolgokat pontosan úgy csinálják, ahogy akarom." },
        { "title": "Nehéz feladatokat delegálnom, mert senki sem csinálja olyan jól, mint én." },
        { "title": "A perfekcionizmusom gátolja a dolgok időben történő befejezését." },
        { "title": "Nagyon rosszul érzem magam, ha a legkisebb hibát is elkövetem." },
        { "title": "Nagyon szigorú szabályaim vannak arról, hogyan kell a dolgokat csinálni." },
        { "title": "Nem tűröm a középszerűséget, sem magamban, sem másokban." },
        { "title": "Úgy vélem, hatodik érzékem van, amely lehetővé teszi, hogy olyasmiket tudjak, amit mások nem." },
        { "title": "Természetfeletti vagy paranormális élményeim voltak." },
        { "title": "Úgy vélem, gondolataimmal befolyásolhatom az eseményeket." },
        { "title": "Úgy érzem, rejtett erők irányítják, ami a világban történik." },
        { "title": "Úgy vélem, az egybeesések az univerzum nekem szóló üzenetei." },
        { "title": "Volt már érzésem, hogy különleges képességeim vannak, amelyekkel mások nem rendelkeznek." },
        { "title": "Úgy vélem, a gondolataim közvetlenül hathatnak a valóságra." },
        { "title": "Különleges kapcsolatot érzek a természetfelettivel vagy a misztikussal." },
        { "title": "Az emberek furcsának vagy különcnek tartanak." },
        { "title": "A gondolkodásmódom nagyon különbözik a legtöbb emberétől." },
        { "title": "Olyan ötleteim vannak, amelyeket mások furcsának vagy rendkívülinek tartanak." },
        { "title": "A viselkedésem kényelmetlenné teszi az embereket." },
        { "title": "Olyan dolgokat mondok, amelyeket mások furcsának vagy értelmetlennek tartanak." },
        { "title": "Olyan érdeklődési köröm vagy hobbijaim vannak, amelyeket a legtöbb ember nagyon különösnek talál." },
        { "title": "Olyan módon fejezem ki magam, amit mások nem értenek." },
        { "title": "Mondták már, hogy a világlátásom nagyon szokatlan." },
        { "title": "Az emberek furcsán néznek rám a viselkedésem miatt." },
        { "title": "A reakcióim a helyzetekre különböznek mások reakcióitól." },
        { "title": "Van egy személyes stílusom, amelyet mások nagyon normálistól eltérőnek tartanak." },
        { "title": "Gyakran gondolok olyan dolgokra, amelyeket a legtöbb ember soha el sem képzelne." },
        { "title": "Alapvetően különbözőnek érzem magam minden más embertől." },
        { "title": "Néha úgy érzem, a körülöttem lévő dolgok nem valósak." },
        { "title": "Volt olyan érzésem, mintha a testemen kívül lennék." },
        { "title": "Néha látok dolgokat, amelyeket mások nem." },
        { "title": "Hallottam hangokat vagy hangokat, amelyeket mások nem hallottak." },
        { "title": "Néha úgy érzem, a testem formát vagy méretet változtat." },
        { "title": "Voltak olyan élményeim, amelyekben úgy éreztem, elszakadtam magamtól." },
        { "title": "Néha a környezetem torzultnak vagy valótlannak tűnik." },
        { "title": "Úgy éreztem, hogy a gondolataim nem az enyémek." },
        { "title": "Néha elvesztem annak érzését, hol végződöm én, és hol kezdődik a külvilág." },
        { "title": "Furcsa testi érzéseim voltak, amelyeket nem tudok megmagyarázni." },
        { "title": "Néha úgy érzem, mintha a valóság szétesne körülöttem." },
        { "title": "Voltak pillanatok, amikor nem ismertem fel a saját tükörképemet." }
      ]
    },
    "ipip_mmpi": {
      "name": "IPIP-Klinikai",
      "abbr": "IPIP-Klinikai",
      "fullName": "IPIP Klinikai Skálák (MMPI skáláknak megfelelő)",
      "desc": "Átfogó klinikai személyiségfelmérés nyilvános elérhető tételek felhasználásával. 10 klinikai és 3 validitási skálát mér, amelyek megfelelnek az MMPI skáláinak.",
      "instructions": "Válaszoljon igaz vagy hamis alapján, ahogy az egyes állítások általánosságban jellemzik Önt. Legyen őszinte; nincsenek helyes vagy helytelen válaszok.",
      "sharedOptions": ["Hamis","Igaz"],
      "questions": [
        { "title": "Soha nem hazudtam." },
        { "title": "Sokat aggódom az egészségem miatt." },
        { "title": "Az idő nagy részében szomorú vagyok." },
        { "title": "Úgy vélem, az emberek a hátam mögött beszélnek rólam." },
        { "title": "Több energiám van, mint a legtöbb embernek." },
        { "title": "Hangokat hallok, amelyeket mások nem hallanak." },
        { "title": "Nagyon kiegyensúlyozott személynek tartom magam." },
        { "title": "Néha nyilvánvaló ok nélkül fáj a fejem." },
        { "title": "A szabályok unalmasnak és feleslegesnek tűnnek." },
        { "title": "Nagyon érdeklődöm a művészi és kulturális tevékenységek iránt." },
        { "title": "Többször ellenőrzöm a dolgokat, hogy biztosan jól vannak-e." },
        { "title": "Néha nagyon furcsa gondolataim vannak." },
        { "title": "Inkább egyedül vagyok, mint mások társaságában." },
        { "title": "Mindig kedves vagyok minden emberrel, akivel találkozom." },
        { "title": "Úgy érzem, gyakran zavar a gyomrom." },
        { "title": "A jövő sötétnek és reménytelennek tűnik." },
        { "title": "Úgy érzem, hogy követnek vagy figyelnek." },
        { "title": "Hajlamos vagyok figyelmen kívül hagyni a problémáimat, amíg el nem múlnak." },
        { "title": "Nem bízom a legtöbb ember szándékaiban." },
        { "title": "Sok projektet indítok egyszerre anélkül, hogy befejezném őket." },
        { "title": "Elégedett vagyok az életemmel, ahogy van." },
        { "title": "Voltak problémáim tekintélyszemélyekkel." },
        { "title": "Nagyon érzékeny embernek tartom magam érzelmileg." },
        { "title": "Nagyon nehéz fontos döntéseket hoznom." },
        { "title": "Néha úgy érzem, elszakadtam a valóságtól." },
        { "title": "Nehéz beszélgetést kezdenem idegenekkel." },
        { "title": "Soha nem éreztem haragot senki iránt." },
        { "title": "Gyakran fájnak a testem különböző részei ismert ok nélkül." },
        { "title": "Elvesztettem az érdeklődésemet a dolgok iránt, amelyeket régen élveztem." },
        { "title": "Úgy vélem, különleges képességeim vannak, amelyekkel mások nem rendelkeznek." },
        { "title": "A családi kapcsolataim nagyon jók." },
        { "title": "Néha bizsergést vagy zsibbadást érzek orvosi ok nélkül." },
        { "title": "Úgy érzem, hogy a hozzám közel álló emberek összeesküdnek ellenem." },
        { "title": "Késztetést érzek, hogy mindig mozgásban legyek." },
        { "title": "Szeretem a szabályok megszegését, ha tudom." },
        { "title": "Szeretem a költészetet és az irodalmat olvasni." },
        { "title": "Túlzottan aggódom az apró dolgok miatt." },
        { "title": "Néha úgy érzem, a testem formát vagy méretet változtat." },
        { "title": "Kényelmetlenül érzem magam nagy társasági összejöveteleken." },
        { "title": "Soha nem vettem el olyasmit, ami nem az enyém volt." },
        { "title": "Aggódom, hogy súlyos, diagnosztizálatlan betegségem van." },
        { "title": "Könnyebben sírok, mint korábban." },
        { "title": "Néha úgy érzem, valaki irányítja a gondolataimat." },
        { "title": "Általában jól kezelem a nehéz helyzeteket." },
        { "title": "Ha konfliktus van, inkább nem gondolok rá." },
        { "title": "Úgy érzem, az emberek rossz szándékkal figyelnek engem." },
        { "title": "Az ötleteim nagyon gyorsan váltanak egyik témáról a másikra." },
        { "title": "Gyakran cselekszem a következmények mérlegelése nélkül." },
        { "title": "Könnyű meghatódnom a szomorú történeteken." },
        { "title": "Szükségem van rá, hogy minden tökéletesen rendben legyen." },
        { "title": "Néha úgy hallom a saját gondolataimat, mintha hangosan kimondanám őket." },
        { "title": "Kerülöm a nyilvános beszéd helyzeteit." },
        { "title": "Mindig igazat mondok, kivétel nélkül." },
        { "title": "Úgy érzem, a szívem gyakran szabálytalanul ver." },
        { "title": "Fáradt vagyok és nincs energiám a nap nagy részében." },
        { "title": "Természetfeletti élményeim voltak, amelyeket nem tudok megmagyarázni." },
        { "title": "Meglehetősen kompetens személynek tartom magam." },
        { "title": "Néha szédülök vagy gyengének érzem magam egyértelmű ok nélkül." },
        { "title": "Biztos vagyok benne, hogy vannak emberek, akik ártani akarnak nekem." },
        { "title": "Nehéz sokáig egy helyben maradnom." },
        { "title": "Nem sokat törődöm a társadalmi normák követésével." },
        { "title": "A legtöbb embernél jobban élvezem a virágokat és a természetet." },
        { "title": "Ismétlődő gondolataim vannak, amelyeket nem tudok megállítani." },
        { "title": "Néha úgy érzem, hogy a körülöttem lévő dolgok nem valósak." },
        { "title": "Nehéz új barátokat szereznem." },
        { "title": "Soha nem késtem el egy megbeszélésről vagy vállalásról." },
        { "title": "Gyakrabban járok orvoshoz, mint a legtöbb ember." },
        { "title": "Értéktelennek érzem magam vagy tehernek mások számára." },
        { "title": "Dolgokat látok, amelyeket mások nem." },
        { "title": "Úgy érzem, a családom mindenben támogat." },
        { "title": "Néha elvesztem az érzést a testem részeiben." },
        { "title": "Úgy vélem, valaki mérgezni próbál vagy ártani akar nekem." },
        { "title": "Sokkal kevesebbet alszom, mint mások, és jól érzem magam." },
        { "title": "Jogi problémáim voltak a viselkedésem miatt." },
        { "title": "Érdeklődöm a divat és a lakberendezés iránt." },
        { "title": "Állandó szorongást érzek, amelyet nem tudok megmagyarázni." },
        { "title": "Néha úgy érzem, hogy nem vagyok önmagam." },
        { "title": "Inkább egyedüli tevékenységeket választok, mint az olvasás vagy egyedüli séta." },
        { "title": "Soha nem irigykedtem senkire." },
        { "title": "Gyakran érzek hányingert vagy gyomorfájdalmat." },
        { "title": "Néha azt gondolom, jobb lenne nem élni." },
        { "title": "Úgy érzem, meg tudom jósolni a jövőt." },
        { "title": "Érzelmileg stabil személynek tartom magam." },
        { "title": "Volt ájulási rohamom vagy eszméletvesztési epizódom." },
        { "title": "Úgy vélem, a munkatársaim rosszat beszélnek rólam." },
        { "title": "Kockázatos dolgokat csinálok pusztán az izgalomért." },
        { "title": "Az őszinteség nem mindig a legjobb politika." },
        { "title": "Szeretem a főzést és a bonyolult ételek elkészítését." },
        { "title": "Úgy érzem, valami rossz fog történni, de nem tudom, mi." },
        { "title": "A gondolataim néha zavaróan összekeverednek." },
        { "title": "Ideges leszek, ha sok ember vesz körül." },
        { "title": "Soha nem beszéltem rosszat másról." },
        { "title": "Aggódom, hogy a testem nem működik rendesen." },
        { "title": "Nehéz koncentrálnom arra, amit csinálok." },
        { "title": "Éreztem már olyan lények jelenlétét, amelyek nincsenek ott." },
        { "title": "Nincsenek nagyobb problémáim az életemben." },
        { "title": "Néha nagyon fáj a hátam nyilvánvaló ok nélkül." },
        { "title": "Úgy vélem, vannak emberek, akik kémkednek utánam." },
        { "title": "Nagyszerű terveim vannak a jövőmre, amelyeket mások nem értenek." },
        { "title": "Könnyen unatkozom a rutinoktól és az egyhangúságtól." },
        { "title": "Nagy művészi érzékenységű embernek tartom magam." },
        { "title": "A szükségesnél többször mosom a kezemet vagy ellenőrzöm a zárakat." },
        { "title": "Úgy érzem, az elmém másképp működik, mint a legtöbb emberé." },
        { "title": "Kerülöm a bulikat és társasági eseményeket, ha tudom." },
        { "title": "Mindig abszolút minden ígéretemet betartom." },
        { "title": "Odafigyelek a testem bármilyen változására." },
        { "title": "Bűntudatot érzek a múltban tett dolgaim miatt." },
        { "title": "Úgy érzem, kommunikálni tudok a holtakkal." },
        { "title": "Úgy vélem, a legtöbb ember jó és megbízható." },
        { "title": "Ha stresszes vagyok, súlyos fejfájásom lesz." },
        { "title": "Úgy érzem, az emberek nevetnek rajtam, amikor nem vagyok jelen." },
        { "title": "Képesnek érzem magam bármire, amit eldöntök." },
        { "title": "Gyakran hazudtam, hogy kimászszak a bajból." },
        { "title": "Szeretem a művészetről, történelemről vagy kultúráról szóló műsorokat nézni." },
        { "title": "Félek, hogy elvesztem az irányítást a tetteim felett." },
        { "title": "Néha úgy érzem, valaki más irányítja a mozdulataimat." },
        { "title": "Szívesebben dolgozom egyedül, mint csapatban." },
        { "title": "Soha nem éreztem vágyat arra, hogy frusztrációból összetörjek valamit." },
        { "title": "Úgy vélem, gyakrabban betegszelek meg, mint a legtöbb ember." },
        { "title": "Nem élvezem az ételt úgy, mint régen." },
        { "title": "Intenzív misztikus látomásaim vagy élményeim voltak." },
        { "title": "A barátaim alkalmazkodó embernek tartanának." },
        { "title": "Néha gombócot érzek a torkomban orvosi ok nélkül." },
        { "title": "Úgy vélem, a szomszédaim rosszat kívánnak nekem." },
        { "title": "Nagyon gyorsan beszélek, és néha nem értik az emberek." },
        { "title": "Nehéz megtartanom egy állást hosszú ideig." },
        { "title": "Könnyen meghatódom zenehallgatáskor." },
        { "title": "Többször kell ellenőriznem, hogy bezártam-e az ajtót." },
        { "title": "Úgy érzem, van valami alapvetően más bennem." },
        { "title": "Kényelmesebben érzem magam otthon, mint ha kimegyek." },
        { "title": "Soha nem szegtem meg szabályt vagy előírást." },
        { "title": "Gyakran vannak izomfájdalmaim ismert ok nélkül." },
        { "title": "Az alvási szokásaim rendhagyóak; túl sokat vagy túl keveset alszom." },
        { "title": "Néha úgy érzem, a lelkem elhagyja a testemet." },
        { "title": "A legtöbb problémámat segítség nélkül tudom megoldani." },
        { "title": "Látásproblémáim vannak, amelyeket az orvosok nem tudnak megmagyarázni." },
        { "title": "Úgy érzem, szervezett összeesküvés van ellenem." },
        { "title": "Energiával és vitalitással vagyok tele." },
        { "title": "Nem érzek bűntudatot, ha rosszat teszek." },
        { "title": "Szeretem gondoskodni másokról és figyelni a szükségleteikre." },
        { "title": "Intenzív félelmet érzek anélkül, hogy pontosan tudnám, mitől." },
        { "title": "Néha nem ismerem fel a saját képemet a tükörben." },
        { "title": "Kimerítőnek találom a hosszú társasági életet." },
        { "title": "Soha nem volt helytelen gondolatom." },
        { "title": "Gyakran érzem, hogy nehezen kapok levegőt." },
        { "title": "Nehéz megtalálnom a motivációt a dolgok megtételéhez." },
        { "title": "Éreztem már, hogy külső erő szállt meg." },
        { "title": "Legtöbbször jól érzem magam a bőrömben." },
        { "title": "Nyomás alatt remegést vagy tikkelést tapasztalok." },
        { "title": "Úgy vélem, bizonyos emberek követnek vagy nyomon követnek." },
        { "title": "Könnyen elvesztem a türelmemet, ha a dolgok lassan haladnak." },
        { "title": "Dühömben más emberek tulajdonát rongáltam meg." },
        { "title": "Szeretem a mély beszélgetéseket az érzelmekről." },
        { "title": "Nehéz ellazulnom; mindig feszült vagyok." },
        { "title": "Nehéz különbséget tennem álmok és valóság között." },
        { "title": "Nehéz az emberek szemébe néznem." },
        { "title": "Soha nem éreztem lustaságot és soha nem kerültem el egy felelősséget." },
        { "title": "Úgy érzem, a belső szerveim nem működnek rendesen." },
        { "title": "Az életnek mostanában nem volt sok értelme számomra." },
        { "title": "Különleges üzeneteket kaptam a televízión vagy rádión keresztül." },
        { "title": "Úgy vélem, jó ítélőképességem van a döntéshozatalhoz." },
        { "title": "Néha átmenetileg nem tudom mozgatni a testem egy részét." },
        { "title": "Úgy érzem, az ellenségeim tönkre akarják tenni a hírnevemet." },
        { "title": "Gyakran impulzívan költök pénzt." },
        { "title": "Nem bánom, ha szükség esetén megbántom mások érzéseit." },
        { "title": "Szeretem a saját és mások érzelmeit felfedezni." },
        { "title": "Vannak rituáléim vagy szokásaim, amelyeket pontosan be kell tartanom." },
        { "title": "Néha úgy érzem, nincs saját identitásom." },
        { "title": "A társasági tevékenységeknél jobban szeretem a csendes tevékenységeket." },
        { "title": "Soha nem vágtam be a sorba és soha nem vettem igénybe helytelen rövidebb utat." },
        { "title": "Állandóan aggódom, hogy egészségügyi problémám van." },
        { "title": "Úgy érzem, csalódást okoztam azoknak, akik fontosak számomra." },
        { "title": "Éreztem már, hogy más emberek olvassák a gondolataimat." },
        { "title": "Jól alkalmazkodom az életem változásaihoz." },
        { "title": "Néha intenzív fájdalmat érzek orvosi diagnózis nélkül." },
        { "title": "Úgy érzem, senkiben sem bízhatok meg teljesen." },
        { "title": "Állandóan tevékenynek kell lennem." },
        { "title": "Felhasználtam más embereket, hogy megkapjam, amit akarok." },
        { "title": "Úgy érzem, a kétségeim és félelmeim néha megbénítanak." },
        { "title": "Néha teljesen elszigeteltnek érzem magam a körülöttem lévő világtól." }
      ]
    }
  }
};
