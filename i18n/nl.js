const LANG_NL = {
  "ui": {
    "appTitle": "Mentale Gezondheidsbeoordelingen",
    "appSubtitle": "Psychologische zelfevaluatie tools",
    "tabTests": "Tests",
    "tabHistory": "Geschiedenis",
    "welcome": "Welkom. Selecteer een beoordeling om te beginnen.",
    "startTest": "Start test",
    "nextQuestion": "Volgende",
    "prevQuestion": "Vorige",
    "viewResults": "Bekijk resultaten",
    "question": "Vraag",
    "of": "van",
    "items": "items",
    "backToTests": "Terug naar tests",
    "repeatTest": "Test herhalen",
    "viewHistory": "Bekijk geschiedenis",
    "otherTests": "Andere tests",
    "detailByItem": "Detail per item",
    "helpResources": "Hulpbronnen",
    "helpText": "Als u door een emotionele crisis gaat, zoek dan professionele hulp. Zelfmoordpreventie (NL): bel 113 of 0800-0113, (BE): bel 1813, of neem contact op met een zorgverlener.",
    "disclaimerTitle": "Belangrijke opmerking:",
    "disclaimerText": "Deze test is een zelfevaluatie-instrument en vervangt geen diagnose door een professional in de geestelijke gezondheidszorg. Als u voelt dat u hulp nodig heeft, raadpleeg dan een specialist.",
    "privacyTitle": "Uw privacy:",
    "privacyText": "Uw resultaten worden alleen opgeslagen in uw browser (localStorage). Er worden geen gegevens naar een server gestuurd of verlaten uw computer.",
    "cat_triage": "Waar te beginnen?",
    "cat_clinical": "Klinische Beoordelingen",
    "cat_screening": "Screening & Detectie",
    "cat_wellbeing": "Welzijn & Zelfbeeld",
    "cat_personality": "Persoonlijkheid",
    "cat_crisis": "Crisis & Risico",
    "cat_advanced": "Uitgebreide Beoordeling",
    "noRecords": "Geen opgeslagen gegevens.",
    "completeFirst": "Voltooi ten minste één test om de geschiedenis te bekijken.",
    "goToTests": "Ga naar tests",
    "trend": "Trend",
    "all": "Alles",
    "clearHistory": "Geschiedenis wissen",
    "clearConfirm": "Weet u zeker dat u de volledige geschiedenis wilt wissen? Deze actie kan niet ongedaan worden gemaakt.",
    "score": "Score",
    "outOf": "van",
    "disclaimer": "Dit hulpmiddel is uitsluitend bedoeld voor informatieve doeleinden en vervangt geen professionele evaluatie. Raadpleeg een specialist voor een juiste diagnose.",
    "resumePrompt": "U heeft een test in uitvoering",
    "continueTest": "Ga door met de test",
    "resumeMessage": "U heeft een {test} test in uitvoering ({n}/{total} vragen)",
    "dismiss": "Sluiten",
    "questionsAnswered": "vragen beantwoord",
    "inProgress": "In uitvoering",
    "testBy": "Tests per",
    "recommendedTests": "Aanbevolen beoordelingen",
    "highPriority": "Hoge prioriteit",
    "recommended": "Aanbevolen",
    "suggested": "Voorgesteld",
    "areasEvaluated": "Geëvalueerde gebieden",
    "kbSelect": "selecteren",
    "kbBrowse": "bladeren",
    "kbConfirm": "bevestigen",
    "kbPrevNext": "vorige/volgende",
    "suggestedRetake": "Aangeraden om opnieuw te doen",
    "triageRecommended": "Aanbevolen op basis van uw initiële beoordeling",
    "retakeReason": "Laatst gedaan"
  },
  "scales": {
    "agreement5": ["Helemaal mee oneens","Mee oneens","Niet mee eens/niet mee oneens","Mee eens","Helemaal mee eens"],
    "frequency4": ["Helemaal niet","Meerdere dagen","Meer dan de helft van de dagen","Bijna elke dag"],
    "frequency5": ["Nooit","Bijna nooit","Soms","Vrij vaak","Heel vaak"],
    "severity4": ["Helemaal niet","Licht","Matig","Ernstig"],
    "severity5": ["Helemaal niet","Een beetje","Matig","Best veel","Extreem"],
    "yesNo": ["Nee","Ja"]
  },
  "tests": {
    "bdi": {
      "name": "BDI-II",
      "abbr": "BDI-II",
      "fullName": "Beck Depression Inventory-II",
      "desc": "Beoordeelt de aanwezigheid en ernst van depressieve symptomen in de afgelopen twee weken.",
      "instructions": "Lees elke groep stellingen zorgvuldig door en kies degene die het beste beschrijft hoe u zich de afgelopen twee weken, inclusief vandaag, heeft gevoeld.",
      "questions": [
        {
          "title": "Verdriet",
          "options": [
            "Ik voel me niet verdrietig.",
            "Ik voel me een groot deel van de tijd verdrietig.",
            "Ik ben de hele tijd verdrietig.",
            "Ik ben zo verdrietig of ongelukkig dat ik het niet kan verdragen."
          ]
        },
        {
          "title": "Pessimisme",
          "options": [
            "Ik ben niet ontmoedigd over mijn toekomst.",
            "Ik voel me meer ontmoedigd over mijn toekomst dan voorheen.",
            "Ik verwacht niet dat dingen voor mij zullen lukken.",
            "Ik heb het gevoel dat mijn toekomst hopeloos is en alleen maar slechter zal worden."
          ]
        },
        {
          "title": "Gevoel van mislukking",
          "options": [
            "Ik voel me geen mislukkeling.",
            "Ik heb vaker gefaald dan ik had gemoeten.",
            "Als ik terugkijk, zie ik veel mislukkingen.",
            "Ik heb het gevoel dat ik als persoon volledig ben mislukt."
          ]
        },
        {
          "title": "Verlies van plezier",
          "options": [
            "Ik haal net zoveel plezier als altijd uit de dingen die ik leuk vind.",
            "Ik geniet niet zo veel van dingen als voorheen.",
            "Ik haal heel weinig plezier uit de dingen waar ik vroeger van genoot.",
            "Ik kan nergens meer plezier uit halen waar ik vroeger van genoot."
          ]
        },
        {
          "title": "Schuldgevoel",
          "options": [
            "Ik voel me niet in het bijzonder schuldig.",
            "Ik voel me schuldig over veel dingen die ik heb gedaan of had moeten doen.",
            "Ik voel me het grootste deel van de tijd behoorlijk schuldig.",
            "Ik voel me de hele tijd schuldig."
          ]
        },
        {
          "title": "Gevoel van straf",
          "options": [
            "Ik heb niet het gevoel dat ik gestraft word.",
            "Ik heb het gevoel dat ik misschien gestraft word.",
            "Ik verwacht dat ik gestraft zal worden.",
            "Ik heb het gevoel dat ik gestraft word."
          ]
        },
        {
          "title": "Onvrede met zichzelf",
          "options": [
            "Ik denk nog steeds hetzelfde over mezelf.",
            "Ik heb het vertrouwen in mezelf verloren.",
            "Ik ben teleurgesteld in mezelf.",
            "Ik heb een afkeer van mezelf."
          ]
        },
        {
          "title": "Zelfkritiek",
          "options": [
            "Ik bekritiseer of geef mezelf niet vaker de schuld dan normaal.",
            "Ik ben kritischer op mezelf dan ik vroeger was.",
            "Ik bekritiseer mezelf om al mijn fouten.",
            "Ik geef mezelf de schuld van alles wat fout gaat."
          ]
        },
        {
          "title": "Suïcidale gedachten of wensen",
          "options": [
            "Ik denk er niet aan om een eind aan mijn leven te maken.",
            "Ik denk wel eens aan zelfmoord, maar zou het niet doen.",
            "Ik zou een eind aan mijn leven willen maken.",
            "Ik zou een eind aan mijn leven maken als ik de kans kreeg."
          ]
        },
        {
          "title": "Huilen",
          "options": [
            "Ik huil niet vaker dan vroeger.",
            "Ik huil meer dan vroeger.",
            "Ik huil om elk klein ding.",
            "Ik heb zin om te huilen, maar ik kan het niet."
          ]
        },
        {
          "title": "Gejaagdheid",
          "options": [
            "Ik ben niet onrustiger of gejaagder dan normaal.",
            "Ik voel me onrustiger of gejaagder dan normaal.",
            "Ik ben zo onrustig of gejaagd dat ik moeilijk stil kan blijven zitten.",
            "Ik ben zo onrustig of gejaagd dat ik in beweging moet blijven of iets moet doen."
          ]
        },
        {
          "title": "Verlies van interesse",
          "options": [
            "Ik heb geen interesse verloren in andere mensen of activiteiten.",
            "Ik ben minder geïnteresseerd in andere mensen of dingen dan voorheen.",
            "Ik heb het grootste deel van mijn interesse in andere mensen of dingen verloren.",
            "Het is moeilijk om nergens in geïnteresseerd te raken."
          ]
        },
        {
          "title": "Besluiteloosheid",
          "options": [
            "Ik kan nog net zo goed beslissingen nemen als vroeger.",
            "Ik vind het moeilijker om beslissingen te nemen dan normaal.",
            "Ik heb veel meer moeite om beslissingen te nemen dan vroeger.",
            "Ik heb moeite om überhaupt beslissingen te nemen."
          ]
        },
        {
          "title": "Gevoel van waardeloosheid",
          "options": [
            "Ik heb niet het gevoel dat ik waardeloos ben.",
            "Ik overweeg mezelf niet zo waardevol en nuttig als vroeger.",
            "Ik voel me waardelozer in vergelijking met anderen.",
            "Ik voel me volkomen waardeloos."
          ]
        },
        {
          "title": "Verlies van energie",
          "options": [
            "Ik heb net zoveel energie als altijd.",
            "Ik heb minder energie dan ik vroeger had.",
            "Ik heb niet genoeg energie om heel veel te doen.",
            "Ik heb niet genoeg energie om iets te doen."
          ]
        },
        {
          "title": "Veranderingen in slaappatroon",
          "options": [
            "Ik heb geen verandering ervaren in mijn slaappatroon.",
            "Ik slaap iets meer of iets minder dan normaal.",
            "Ik slaap veel meer of veel minder dan normaal.",
            "Ik slaap het grootste deel van de dag óf ik word 1-2 uur te vroeg wakker en kan niet meer in slaap komen."
          ]
        },
        {
          "title": "Prikkelbaarheid",
          "options": [
            "Ik ben niet prikkelbaarder dan normaal.",
            "Ik ben prikkelbaarder dan normaal.",
            "Ik ben veel prikkelbaarder dan normaal.",
            "Ik ben de hele tijd prikkelbaar."
          ]
        },
        {
          "title": "Veranderingen in eetlust",
          "options": [
            "Ik heb geen verandering ervaren in mijn eetlust.",
            "Mijn eetlust is iets minder of iets groter dan normaal.",
            "Mijn eetlust is veel minder of veel groter dan normaal.",
            "Ik heb helemaal geen eetlust óf ik heb de hele tijd trek in eten."
          ]
        },
        {
          "title": "Concentratieproblemen",
          "options": [
            "Ik kan me net zo goed concentreren als vroeger.",
            "Ik kan me niet zo goed concentreren als normaal.",
            "Het is moeilijk om mijn gedachten ergens lang bij te houden.",
            "Ik merk dat ik me nergens meer op kan concentreren."
          ]
        },
        {
          "title": "Vermoeidheid",
          "options": [
            "Ik ben niet sneller moe of vermoeid dan normaal.",
            "Ik raak makkelijker moe of vermoeid dan normaal.",
            "Ik ben te moe of vermoeid om veel van de dingen te doen die ik vroeger deed.",
            "Ik ben te moe of vermoeid om de meeste dingen te doen die ik vroeger deed."
          ]
        },
        {
          "title": "Verlies van interesse in seks",
          "options": [
            "Ik heb geen recente verandering gemerkt in mijn interesse in seks.",
            "Ik ben minder geïnteresseerd in seks dan ik vroeger was.",
            "Ik ben nu veel minder geïnteresseerd in seks.",
            "Ik heb alle interesse in seks volledig verloren."
          ]
        }
      ],
      "results": {
        "minimal": { "label": "Minimaal", "desc": "Uw score suggereert een minimaal niveau van depressie. Het is normaal om emotionele ups en downs te ervaren." },
        "mild": { "label": "Licht", "desc": "Uw score suggereert lichte depressieve symptomen. Overweeg met een professional te praten als ze aanhouden." },
        "moderate": { "label": "Matig", "desc": "Uw score suggereert matige depressieve symptomen. Het wordt aanbevolen om met een professional in de geestelijke gezondheidszorg te overleggen." },
        "severe": { "label": "Ernstig", "desc": "Uw score suggereert ernstige depressieve symptomen. Het is belangrijk om zo snel mogelijk professionele hulp te zoeken." }
      }
    },
    "bai": {
      "name": "BAI",
      "abbr": "BAI",
      "fullName": "Beck Anxiety Inventory",
      "desc": "Beoordeelt de ernst van angstsymptomen in de afgelopen week.",
      "instructions": "Geef aan in hoeverre u in de afgelopen week (inclusief vandaag) last heeft gehad van de volgende symptomen.",
      "questions": [
        { "title": "Gevoelloosheid of tintelingen" },
        { "title": "Warm hebben" },
        { "title": "Knikkende of slappe knieën/benen" },
        { "title": "Niet kunnen ontspannen" },
        { "title": "Angst dat het ergste gebeurt" },
        { "title": "Duizelig of licht in het hoofd" },
        { "title": "Hartkloppingen of versnelde hartslag" },
        { "title": "Onvast op de benen" },
        { "title": "Doodsbang of angstig" },
        { "title": "Zenuwachtig" },
        { "title": "Gevoel van verstikking" },
        { "title": "Trillende handen" },
        { "title": "Trillerig of beverig" },
        { "title": "Angst om de controle te verliezen" },
        { "title": "Ademhalingsmoeilijkheden" },
        { "title": "Angst om te sterven" },
        { "title": "Bang" },
        { "title": "Maagklachten / indigestie" },
        { "title": "Flauwvallen of licht in het hoofd" },
        { "title": "Blozen in het gezicht" },
        { "title": "Koude/warme zweetuitbarstingen" }
      ],
      "results": {
        "minimal": { "label": "Minimaal", "desc": "Uw score suggereert een minimaal niveau van angst." },
        "mild": { "label": "Licht", "desc": "Uw score suggereert lichte angst. Houd uw symptomen in de gaten." },
        "moderate": { "label": "Matig", "desc": "Uw score suggereert matige angst. Overweeg een professional te raadplegen." },
        "severe": { "label": "Ernstig", "desc": "Uw score suggereert ernstige angst. Het wordt aanbevolen professionele hulp in te schakelen." }
      }
    },
    "gad7": {
      "name": "GAD-7",
      "abbr": "GAD-7",
      "fullName": "Generalized Anxiety Disorder-7",
      "desc": "Beoordeelt de ernst van gegeneraliseerde angst in de afgelopen twee weken.",
      "instructions": "Hoe vaak heeft u de afgelopen 2 weken last gehad van de volgende problemen?",
      "questions": [
        { "title": "Zenuwachtig, angstig of gespannen voelen" },
        { "title": "Niet kunnen stoppen met piekeren of zorgen maken" },
        { "title": "Te veel zorgen maken over verschillende dingen" },
        { "title": "Moeite met ontspannen" },
        { "title": "Zó rusteloos zijn dat het moeilijk is om stil te zitten" },
        { "title": "Snel geërgerd of prikkelbaar worden" },
        { "title": "Bang voelen, alsof er iets vreselijks zou kunnen gebeuren" }
      ],
      "results": {
        "minimal": { "label": "Minimaal", "desc": "Uw score suggereert een minimaal niveau van angst." },
        "mild": { "label": "Licht", "desc": "Uw score suggereert lichte angst." },
        "moderate": { "label": "Matig", "desc": "Uw score suggereert matige angst. Overweeg te praten met een professional." },
        "severe": { "label": "Ernstig", "desc": "Uw score suggereert ernstige angst. Het vermelden en bespreken met professionele zorgverleners wordt aanbevolen." }
      }
    },
    "msibpd": {
      "name": "MSI-BPD",
      "abbr": "MSI-BPD",
      "fullName": "McLean Screening Instrument for Borderline Personality Disorder",
      "desc": "Screeningsinstrument voor kenmerken geassocieerd met een borderline persoonlijkheidsstoornis.",
      "instructions": "Beantwoord elke van de volgende vragen met ja of nee.",
      "questions": [
        { "title": "Heeft u zichzelf ooit opzettelijk gesneden, verbrand of anderszins pijn gedaan?" },
        { "title": "Heeft u ooit een zelfmoordpoging gedaan?" },
        { "title": "Heeft u ten minste twee relaties (of pogingen daartoe) gehad die zeer intens maar onstabiel waren?" },
        { "title": "Verandert uw gevoel van wie u bent vaak dramatisch?" },
        { "title": "Verandert uw stemming regelmatig plotseling?" },
        { "title": "Voelt u vaak intense woede die moeilijk onder controle te houden is?" },
        { "title": "Wantrouwt u vaak andere mensen?" },
        { "title": "Voelt u zich vaak onwerkelijk of alsof de dingen om u heen onwerkelijk zijn?" },
        { "title": "Voelt u zich vaak leeg?" },
        { "title": "Doet u vaak wanhopige pogingen om te voorkomen dat u door iemand in de steek wordt gelaten?" }
      ],
      "results": {
        "minimal": { "label": "Minimaal", "desc": "Uw score suggereert een lage aanwezigheid van kenmerken die verband houden met borderline persoonlijkheidsstoornis." },
        "moderate": {
          "label": "Matig",
          "desc": "Uw score suggereert enkele kenmerken die geassocieerd worden met een borderline persoonlijkheidsstoornis. Overweeg overleg met een professional."
        },
        "severe": {
          "label": "Significant",
          "desc": "Uw score suggereert een significante aanwezigheid van borderline kenmerken. Een uitgebreide professionele beoordeling wordt aanbevolen."
        }
      }
    },
    "pss": {
      "name": "PSS-10",
      "abbr": "PSS-10",
      "fullName": "Perceived Stress Scale-10",
      "desc": "Meet in hoeverre situaties in het leven de afgelopen maand als stressvol worden ervaren.",
      "instructions": "De volgende vragen gaan over uw gevoelens en gedachten in de afgelopen maand. Geef aan hoe vaak u op een bepaalde manier dacht of voelde.",
      "questions": [
        { "title": "Hoe vaak was u overstuur omdat er onverwachts iets gebeurde?" },
        { "title": "Hoe vaak had u het gevoel dat u de belangrijke dingen in uw leven niet in de hand had?" },
        { "title": "Hoe vaak voelde u zich zenuwachtig en gestrest?" },
        { "title": "Hoe vaak bent u succesvol omgegaan met irriterende alledaagse problemen?" },
        { "title": "Hoe vaak had u het gevoel dat u effectief omging met belangrijke veranderingen in uw leven?" },
        { "title": "Hoe vaak voelde u zich zelfverzekerd om persoonlijke problemen op te lossen?" },
        { "title": "Hoe vaak had u het gevoel dat dingen liepen zoals u wilde?" },
        { "title": "Hoe vaak merkte u dat u niet kon omgaan met alle dingen die u nog moest doen?" },
        { "title": "Hoe vaak was u in staat irritaties in uw leven onder controle te houden?" },
        { "title": "Hoe vaak had u het gevoel dat u alles goed op een rijtje had?" }
      ],
      "results": {
        "minimal": { "label": "Laag", "desc": "Uw ervaren stressniveau is laag. Ga door met uw huidige copingstrategieën." },
        "moderate": { "label": "Matig", "desc": "Uw ervaren stressniveau is gemiddeld. Overweeg om stressmanagementtechnieken toe te passen." },
        "severe": { "label": "Hoog", "desc": "Uw ervaren stressniveau is hoog. Het is aan te raden professionele steun en stressreductietechnieken in te schakelen." }
      }
    },
    "asrs": {
      "name": "ASRS v1.1",
      "abbr": "ASRS-v1.1",
      "fullName": "Adult ADHD Self-Report Scale v1.1",
      "desc": "Screeningsinstrument voor ADHD-symptomen bij volwassenen.",
      "instructions": "Beantwoord de volgende vragen en denk hierbij aan hoe u zich de afgelopen 6 maanden heeft gevoeld en gedragen.",
      "questions": [
        { "title": "Hoe vaak heeft u moeite met het afronden van de laatste details van een project als het uitdagende deel achter de rug is?" },
        { "title": "Hoe vaak heeft u moeite de boel op orde te krijgen als u een taak moet uitvoeren die organisatie vereist?" },
        { "title": "Hoe vaak heeft u moeite om zich afspraken of verplichtingen te herinneren?" },
        { "title": "Als u een taak moet doen die veel denkwerk vereist, hoe vaak vermijdt u dat dan, of stelt u het uit?" },
        { "title": "Hoe vaak wiebelt u met uw handen of voeten wanneer u lang stil moet zitten?" },
        { "title": "Hoe vaak voelt u zich overdreven actief en gedreven om dingen te doen, alsof u door een motor wordt aangedreven?" }
      ],
      "results": {
        "minimal": { "label": "Onaannemelijk", "desc": "Uw score suggereert een kleine kans op ADHD." },
        "moderate": { "label": "Mogelijk", "desc": "Uw score suggereert enkele symptomen die overeenkomen met ADHD. Overweeg een professionele beoordeling." },
        "severe": { "label": "Waarschijnlijk", "desc": "Uw score suggereert een grote kans op ADHD-symptomen. Een brede professionele beoordeling wordt aanbevolen." }
      }
    },
    "ocir": {
      "name": "OCI-R",
      "abbr": "OCI-R",
      "fullName": "Obsessive-Compulsive Inventory-Revised",
      "desc": "Beoordeelt symptomen van obsessieve-compulsieve stoornis (OCD).",
      "instructions": "De volgende uitspraken gaan over ervaringen die veel mensen in hun dagelijks leven hebben. Geef aan in welke mate u er gedurende de afgelopen maand door gehinderd werd.",
      "questions": [
        { "title": "Ik heb zoveel spullen bewaard dat ze in de weg liggen" },
        { "title": "Ik controleer dingen vaker dan nodig is" },
        { "title": "Ik raak overstuur als dingen niet netjes geordend zijn" },
        { "title": "Ik voel de dwang om te tellen terwijl ik bezig ben" },
        { "title": "Ik vind het moeilijk een voorwerp aan te raken waarvan ik weet dat vreemden of bepaalde mensen het hebben aangeraakt" },
        { "title": "Ik vind het moeilijk om mijn eigen gedachten onder controle te houden" },
        { "title": "Ik verzamel dingen die ik niet nodig heb" },
        { "title": "Ik controleer herhaaldelijk deuren, ramen, lades, etc." },
        { "title": "Ik raak overstuur als anderen de manier waarop ik dingen heb neergezet veranderen" },
        { "title": "Ik heb het gevoel dat ik bepaalde cijfers of nummers moet herhalen" },
        { "title": "Ik moet soms mezelf wassen of schoonmaken simpelweg omdat ik me besmet/vies voel" },
        { "title": "Ik raak overstuur van onaangename gedachten die tegen mijn wil in me opkomen" },
        { "title": "Ik gooi liever geen dingen weg omdat ik bang ben dat ik ze later weer nodig heb" },
        { "title": "Ik controleer herhaaldelijk of waterkranen, het gas en de lichtschakelaars uit zijn na ze al te hebben uitgezet" },
        { "title": "Ik moet dingen op een specifieke manier ordenen" },
        { "title": "Ik heb het gevoel dat er 'goede' en 'slechte' cijfers zijn" },
        { "title": "Ik was mijn handen vaker en langer dan nodig is" },
        { "title": "Ik krijg vaak vervelende gedachten in mijn hoofd waar ik moeilijk van afkom" }
      ],
      "results": {
        "minimal": { "label": "Minimaal", "desc": "Uw score suggereert een minimaal niveau van obsessief-compulsieve symptomen." },
        "moderate": { "label": "Matig", "desc": "Uw score suggereert matige obsessief-compulsieve symptomen. Overweeg of u hiervoor met een professional in gesprek wilt." },
        "severe": { "label": "Significant", "desc": "Uw score suggereert aanzienlijke obsessief-compulsieve symptomen. Een professionele beoordeling is aan te raden." }
      }
    },
    "pcl5": {
      "name": "PCL-5",
      "abbr": "PCL-5",
      "fullName": "PTSD Checklist for DSM-5",
      "desc": "Beoordeelt symptomen van een posttraumatische stressstoornis in de afgelopen maand.",
      "instructions": "Hieronder vindt u een lijst van klachten die mensen soms hebben in reactie op een zeer stressvolle ervaring. Geef aan hoeveel last u hier de afgelopen maand van heeft gehad.",
      "questions": [
        { "title": "Herhaalde, verontrustende en ongewenste herinneringen aan de stressvolle ervaring" },
        { "title": "Herhaalde, verontrustende dromen over de stressvolle ervaring" },
        { "title": "Plotseling voelen of handelen alsof de stressvolle ervaring opnieuw plaatsvindt" },
        { "title": "Zich zeer overstuur voelen wanneer u aan de stressvolle ervaring wordt herinnerd" },
        { "title": "Heftige lichamelijke reacties (bv. hartkloppingen, ademhalingsproblemen, zweten) wanneer u aan de ervaring wordt herinnerd" },
        { "title": "Het vermijden van herinneringen, gedachten of gevoelens gerelateerd aan de stressvolle ervaring" },
        { "title": "Het vermijden van externe triggers gekoppeld aan de ervaring (mensen, plaatsen, gesprekken, activiteiten, voorwerpen of situaties)" },
        { "title": "Moeite met het herinneren van bepaalde belangrijke aspecten van de stressvolle ervaring" },
        { "title": "Sterk negatieve overtuigingen over uzelf, anderen of de wereld uiten of ervaren" },
        { "title": "Uzelf of een ander de schuld geven van de stressvolle ervaring of wat er daarna is gebeurd" },
        { "title": "Het ervaren van sterke negatieve gevoelens zoals angst, afschuw, woede, schuld of schaamte" },
        { "title": "Verlies van interesse in activiteiten waar u eerder van genoot" },
        { "title": "Zich afstandelijk of afgesneden voelen van andere mensen" },
        { "title": "Moeite om positieve gevoelens te ervaren" },
        { "title": "Prikkelbaar gedrag, woede-uitbarstingen of zich agressief gedragen" },
        { "title": "Te veel risico's nemen of dingen doen die u schade kunnen berokkenen" },
        { "title": "Zeer waakzaam zijn of constant op uw hoede" },
        { "title": "Snel schrikken of zenuwachtig voelen" },
        { "title": "Concentratieproblemen" },
        { "title": "Moeite om in slaap te vallen of in slaap te blijven" }
      ],
      "results": {
        "minimal": { "label": "Minimaal", "desc": "Uw score suggereert een laag niveau van posttraumatische stresssymptomen." },
        "moderate": { "label": "Matig", "desc": "Uw score suggereert matige posttraumatische stresssymptomen. Overweeg uw gezondheidszorgprofessional te raadplegen." },
        "severe": { "label": "Significant", "desc": "Uw score suggereert significante posttraumatische stresssymptomen. De hulp van een zorgprofessional is ten zeerste aanbevolen." }
      }
    },
    "bfi44": {
      "name": "BFI-44",
      "abbr": "BFI-44",
      "fullName": "Big Five Inventory-44",
      "desc": "Beoordeelt de vijf belangrijkste persoonlijkheidsdimensies: Extraversie, Inschikkelijkheid, Zorgvuldigheid, Emotionele Stabiliteit (Neuroticisme) en Openheid voor Ervaringen.",
      "instructions": "Ik zie mezelf als iemand die... Geef aan in hoeverre u het eens of oneens bent met elke stelling.",
      "questions": [
        { "title": "Spraakzaam is" },
        { "title": "De neiging heeft anderen op hun fouten te wijzen" },
        { "title": "Grondig werk levert" },
        { "title": "Snel depressief, somber is" },
        { "title": "Origineel is, met nieuwe ideeën komt" },
        { "title": "Gereserveerd is" },
        { "title": "Behulpzaam en onzelfzuchtig is richting anderen" },
        { "title": "Soms wat slordig of onzorgvuldig kan zijn" },
        { "title": "Ontspannen is, goed met stress omgaat" },
        { "title": "Nieuwsgierig is naar veel verschillende dingen" },
        { "title": "Vol energie zit" },
        { "title": "Snel ruzie maakt met anderen" },
        { "title": "Een betrouwbare werknemer is" },
        { "title": "Gespitst of gespannen kan zijn" },
        { "title": "Inventief is, een diepe denker" },
        { "title": "Veel enthousiasme opwekt" },
        { "title": "Vergevingsgezind is" },
        { "title": "Gedesorganiseerd / chaotisch neigt te zijn" },
        { "title": "Zich veel zorgen maakt" },
        { "title": "Een levendige fantasie heeft" },
        { "title": "De neiging heeft stil en gereserveerd te zijn" },
        { "title": "Mensen doorgaans vertrouwt" },
        { "title": "De neiging heeft lui te zijn" },
        { "title": "Emotioneel stabiel is, niet snel van streek" },
        { "title": "Vindingrijk is" },
        { "title": "Een assertieve persoonlijkheid heeft" },
        { "title": "Koud en afstandelijk kan zijn" },
        { "title": "Doorzet tot de taak volbracht is" },
        { "title": "Humeurig kan zijn" },
        { "title": "Artistieke en esthetische ervaringen waardeert" },
        { "title": "Soms verlegen, geremd is" },
        { "title": "Attent en aardig is voor bijna iedereen" },
        { "title": "Dingen efficiënt aanpakt" },
        { "title": "Onder gespannen situaties kalm blijft" },
        { "title": "De voorkeur geeft aan routinewerk" },
        { "title": "Extravert is, sociaal" },
        { "title": "Soms onbeschoft is tegen anderen" },
        { "title": "Plannen maakt en die uitvoert" },
        { "title": "Snel zenuwachtig wordt" },
        { "title": "Graag reflecteert, speelt met ideeën" },
        { "title": "Weinig artistieke interesses heeft" },
        { "title": "Graag samenwerkt met anderen" },
        { "title": "Snel afgeleid is" },
        { "title": "Geraffineerd in kunst, muziek of literatuur is" }
      ],
      "dimensionNames": {
        "E": "Extraversie",
        "A": "Inschikkelijkheid",
        "C": "Zorgvuldigheid",
        "N": "Neuroticisme",
        "O": "Openheid voor Ervaringen"
      },
      "dimensionDescs": {
        "E": {
          "low": "U bent geneigd gereserveerd en rustiger te zijn. U brengt graag tijd alleen door.",
          "mid": "U toont een balans tussen sociale omgang en momenten rust voor uzelf.",
          "high": "U bent geneigd assertief, sociaal en extravert te zijn, en haalt energie uit contact."
        },
        "A": {
          "low": "U bent directer, vaak wat sceptischer en zult sneller in competitie treden met anderen.",
          "mid": "U toont een balans tussen meewerken en duidelijk uw mening / assertiviteit tonen.",
          "high": "U bent heel coöperatief, barmhartig en wilt vaak tegemoet komen aan de behoeften van anderen."
        },
        "C": {
          "low": "U bent spontaner, werkt minder op de klok en houdt van flexibiliteit in uw aanpak.",
          "mid": "U toont in uw aanpak een balans tussen structuur en flexibiliteit.",
          "high": "U bent georganiseerd, consciëntieus, volgt goed en planmatig alles op en richt u op het doel."
        },
        "N": {
          "low": "U bent overwegend emotioneel zeer stabiel en blijft kalm te midden van stress of tegenslag.",
          "mid": "U ervaart zowel positieve als negatieve emoties binnen het gebalanceerde gezonde spectrum.",
          "high": "U bent gevoelig voor prikkels en stress; het is aannemelijk dat u meer uitersten en negatieve stemmingen ervaart."
        },
        "O": {
          "low": "U trekt meer naar het conventionele en het in praktijk brengen in plaats van direct 'buiten de lijntjes'.",
          "mid": "U brengt nieuwsgierigheid en praktijk in het dagelijks leven samen.",
          "high": "U houdt van abstractie, esthetiek en hecht veel waarde aan creativiteit, originaliteit en nieuwe ervaringen."
        }
      }
    },
    "mbti": {
      "name": "MBTI",
      "abbr": "16P",
      "fullName": "Myers-Briggs Type Indicator",
      "desc": "Identificeert persoonlijkheidsvoorkeuren in vier dimensies: Energie, Waarneming, Besluitvorming en Levensstijl.",
      "instructions": "Selecteer de optie die u het beste beschrijft in de meeste situaties. Er zijn geen goede of foute antwoorden.",
      "questions": [
        { "title": "Op sociale bijeenkomsten communiceert u het liefst met veel mensen, inclusief vreemden" },
        { "title": "U bent eerder realistisch dan fantasierijk" },
        { "title": "Het is erger om onrechtvaardig te zijn dan meedogenloos" },
        { "title": "U doet dingen liever volgens een vastgesteld plan" },
        { "title": "Na tijd met een groep voelt u zich energiek" },
        { "title": "U concentreert zich liever op specifieke details dan op het grotere geheel" },
        { "title": "Bij het nemen van beslissingen houdt u in de eerste plaats rekening met de gevoelens van mensen" },
        { "title": "U houdt ervan als zaken beslist en afgehandeld zijn" },
        { "title": "U neemt liever het initiatief om gesprekken met nieuwe mensen te beginnen" },
        { "title": "U vertrouwt meer op ervaring dan op intuïtie" },
        { "title": "U waardeert mededogen meer dan objectieve waarheid" },
        { "title": "U volgt het liefst een strak schema" },
        { "title": "U praat gemakkelijk met onbekenden" },
        { "title": "U besteedt meer aandacht aan wat echt en aanwezig is dan aan wat zou kunnen zijn" },
        { "title": "U geeft meer om groepsharmonie dan om objectieve resultaten" },
        { "title": "U rondt het liefst een project af voordat u aan een ander begint" },
        { "title": "U heeft tijd alleen nodig om uw energie op te laden" },
        { "title": "U geniet van het nadenken over abstracte concepten en theorieën" },
        { "title": "Bij het oplossen van problemen geeft u voorrang aan logica boven gevoelens" },
        { "title": "U houdt uw opties liever open in plaats van u direct vast te leggen" },
        { "title": "In uw vrije tijd bent u het liefst bij vrienden" },
        { "title": "U bent meer geïnteresseerd in toekomstige mogelijkheden dan actuele feiten" },
        { "title": "U neemt bij voorkeur beslissingen op basis van logische principes" },
        { "title": "U voelt zich comfortabeler met structuur en routines" },
        { "title": "U bent het middelpunt van het feest" },
        { "title": "U bent meer aangetrokken tot symbolische betekenissen dan letterlijke feiten" },
        { "title": "In een conflict zoekt u naar de eerlijkste oplossing, zelfs als iemand zich daardoor gekwetst voelt" },
        { "title": "U plant uw vakanties graag ruim van tevoren en tot in detail" },
        { "title": "U voelt zich op uw gemak in het middelpunt van de belangstelling" },
        { "title": "U geniet meer van het verkennen van nieuwe ideeën dan van het toepassen van bewezen methoden" },
        { "title": "U kiest er vaak voor om met uw verstand te beslissen in plaats van met uw hart" },
        { "title": "U verkiest spontaniteit boven planning" },
        { "title": "U vindt het uitputtend om veel tijd alleen door te brengen" },
        { "title": "U leert liever theorie voordat u praktijkvoorbeelden ziet" },
        { "title": "U vindt diplomatie belangrijker dan directheid" },
        { "title": "U voelt zich ongemakkelijk als plannen plotseling veranderen" },
        { "title": "In gesprekken praat u meer dan u luistert" },
        { "title": "U vertrouwt op uw voorgevoel en intuïtie" },
        { "title": "U waardeert efficiëntie meer dan samenwerking" },
        { "title": "U geniet van improvisatie en het direct kunnen aanpassen aan zaken" }
      ],
      "typeDescriptions": {
        "ISTJ": "Verantwoordelijk en betrouwbaar. U waardeert traditie, loyaliteit en orde. U bent grondig en voert uw taken gestaag uit.",
        "ISFJ": "Beschermend en toegewijd. U bent vriendelijk, verantwoordelijk en let op de behoeften van anderen. U waardeert harmonie en stabiliteit.",
        "INFJ": "Idealistisch en visionair. U heeft een diep begrip van mensen en een sterk verlangen om anderen te helpen hun potentieel te bereiken.",
        "INTJ": "Strategisch en onafhankelijk. U heeft een analytische geest en een heldere visie op hoe de dingen verbeterd kunnen worden. Kennis is belangrijk.",
        "ISTP": "Praktisch en observerend. U vindt het leuk om te begrijpen hoe de dingen werken en bent oplossingsgericht.",
        "ISFP": "Artistiek en gevoelig. U waardeert authenticiteit en harmonie. U geniet van het heden en hebt een goed gevoel voor esthetiek.",
        "INFP": "Idealistisch en empathisch. U hebt sterke persoonlijke waarden en een wens om de wereld een beetje mooier te maken.",
        "INTP": "Logisch en vindingrijk. U bent van het analyseren van denksystemen en het aandragen van innovatieve concepten en theorieën.",
        "ESTP": "Energiek en pragmatisch. U houdt van actie en leeft in het hier en nu. U kunt als de beste snel in de praktijk problemen oplossen.",
        "ESFP": "Spontaan en enthousiast. U ziet de lol in van het leven en houdt van entertainment. U bent vergevingsgezind en brengt sfeer.",
        "ENFP": "Enthousiast en creatief. U brengt mogelijkheden in beeld en hebt een aanstekelijke bevlogenheid richting de toekomst en in anderen.",
        "ENTP": "Innovatief en de uitdaging zoekend. U houdt van abstracte debatten of op denkniveau uitdagen met nieuwe ideeën.",
        "ESTJ": "Planmatig en vastbesloten. U bent het toonbeeld van structuur en orde. Een leiderstype dat graag toeziet en aanstuurt.",
        "ESFJ": "Sociaal ingesteld en extravert in actie voor anderen. U schept orde, maar met een sfeer waarin harmonie en groepszorg voorop staat.",
        "ENFJ": "Charismatisch en empathisch leider. U enthousiasmeert en inspireert anderen op de weg met visie, met een natuurlijke interesse voor de mens.",
        "ENTJ": "Geboren leiderstype en planner. U bent daadkrachtig, werkt efficiënt naar doelen en kiest altijd de beste weg om systemen of de groep aan te sturen."
      }
    },
    "phq9": {
      "name": "PHQ-9",
      "abbr": "PHQ-9",
      "fullName": "Patient Health Questionnaire-9",
      "desc": "Snelle screening op depressie die veel wordt gebruikt in de eerstelijnszorg. 9 vragen.",
      "instructions": "In hoeverre heeft u de afgelopen 2 weken last gehad van de volgende problemen?",
      "sharedOptions": ["Helemaal niet","Meerdere dagen","Meer dan de helft van de dagen","Bijna elke dag"],
      "questions": [
        { "title": "Weinig interesse of plezier om dingen te doen" },
        { "title": "Zich somber, depressief of wanhopig voelen" },
        { "title": "Moeite inslapen of doorslapen, of te veel slapen" },
        { "title": "Zich moe voelen of weinig energie hebben" },
        { "title": "Slechte eetlust of te veel eten" },
        { "title": "Slecht over uzelf voelen - of het gevoel hebben dat u gefaald heeft of dat u uzelf of uw familie terleurgesteld heeft" },
        { "title": "Moeite hebben met u te concentreren op dingen, zoals de krant lezen of televisie kijken" },
        { "title": "Zo traag bewegen of spreken dat anderen dat mogelijk hebben gemerkt. Óf precies het tegenovergestelde: zo onrustig of gejaagd dat u veel meer dan normaal rondliep" },
        { "title": "Gedachten dat u beter af zou zijn als u dood was, of dat u uzelf op de een of andere manier iets aan zou willen doen" }
      ],
      "results": {
        "minima": { "label": "Minimaal", "desc": "Er zijn geen significante symptomen van depressie gedetecteerd. Blijf zorgen voor uw emotionele welzijn." },
        "leve": { "label": "Licht", "desc": "Lichte symptomen van depressie gedetecteerd. Houd uw stemming in de gaten en pas gezonde leefgewoonten toe." },
        "moderada": { "label": "Matig", "desc": "Matige symptomen van depressie gedetecteerd. Overleg inwinnen bij de medische zorg is aanbevolen." },
        "moderadamente_grave": {
          "label": "Gematigd zwaar",
          "desc": "Redelijk zware symptomen van depressie gedetecteerd. Het is verstandig op reguliere termijn en te raadplegen met arts of instelling."
        },
        "grave": { "label": "Ernstig", "desc": "Zeer ernstige symptomen van depressie. Er wordt u met nadruk aangeraden spoedeisend hulp te betrekken in dit proces." }
      }
    },
    "audit": {
      "name": "AUDIT",
      "abbr": "AUDIT",
      "fullName": "Alcohol Use Disorders Identification Test",
      "desc": "Ontwikkeld door de WHO om problematisch alcoholgebruik te detecteren.",
      "instructions": "Beantwoord de volgende vragen over uw alcoholgebruik. Wees asjeblieft zo eerlijk mogelijk.",
      "questions": [
        {
          "title": "Hoe vaak drinkt u alcoholhoudende dranken?",
          "options": ["Nooit","1 keer per maand of minder","2 tot 4 keer per maand","2 tot 3 keer per week","4 of meer keer per week"]
        },
        {
          "title": "Hoeveel standaardglazen met alcohol drinkt u gewoonlijk op een dag dat u drinkt?",
          "options": ["1 of 2","3 of 4","5 of 6","7 tot 9","10 of meer"]
        },
        {
          "title": "Hoe vaak drinkt u zes of meer glazen bij één gelegenheid?",
          "options": ["Nooit","Minder dan eenmaal per maand","Maandelijks","Wekelijks","Dagelijks of bijna dagelijks"]
        },
        {
          "title": "Hoe vaak vond u het afgelopen jaar moeilijk om na de eerste slok weer te stoppen?",
          "options": ["Nooit","Minder dan eenmaal per maand","Maandelijks","Wekelijks","Dagelijks of bijna dagelijks"]
        },
        {
          "title": "Hoe vaak in het afgelopen jaar schoot u door langdurig drinken tekort ten aanzien van zaken die normaal van u verwacht werden?",
          "options": ["Nooit","Minder dan eenmaal per maand","Maandelijks","Wekelijks","Dagelijks of bijna dagelijks"]
        },
        {
          "title": "Hoe vaak in het verleden was er the day after de alcohol nog steeds behoefte aan de start van een ochtend op gang te komen met het eerste alcoholische drankje?",
          "options": ["Nooit","Minder dan eenmaal per maand","Maandelijks","Wekelijks","Dagelijks of bijna dagelijks"]
        },
        {
          "title": "Hoe vaak heeft u zich het afgelopen jaar schuldig gerealiseerd na het drinken?",
          "options": ["Nooit","Minder dan eenmaal per maand","Maandelijks","Wekelijks","Dagelijks of bijna dagelijks"]
        },
        {
          "title": "Hoe vaak kon u in het afgelopen jaar delen van uw ervaring tijdens het drinken naderhand niet meer herinneren?",
          "options": ["Nooit","Minder dan eenmaal per maand","Maandelijks","Wekelijks","Dagelijks of bijna dagelijks"]
        },
        {
          "title": "Heeft u, of iemand anders, fysieke schade opgelopen tijdens drankgebruik / vechtpartij enz.?.",
          "options": ["Nee","Ja, maar niet in het afgelopen jaar","Ja, in het afgelopen jaar"]
        },
        {
          "title": "Heeft men uit zorgen wel eens aangedrongen alcohol na het gesprek op een lager plan / stoppen te zetten?",
          "options": ["Nee","Ja, maar niet in het afgelopen jaar","Ja, in het afgelopen jaar"]
        }
      ],
      "results": {
        "bajo_riesgo": { "label": "Laag risico", "desc": "Uw alcoholgebruik valt binnen de grenzen van een laag risico. Behoud gezonde gewoonten." },
        "riesgo_moderado": {
          "label": "Matig risico",
          "desc": "Uw alcoholgebruik brengt een matig risico met zich mee. Overweeg uw consumptie te verminderen en praat eventueel met een professional."
        },
        "riesgo_alto": { "label": "Hoog risico", "desc": "Uw alcoholconsumptie brengt een hoog risico met zich mee. Het wordt sterk aangeraden u te laten adviseren door een arts omtrent afbouw." },
        "posible_dependencia": { "label": "Mogelijke afhankelijkheid", "desc": "De resultaten suggereren mogelijke afhankelijkheid. Professionele en gespecialiseerde hulpverlening (verslavingsdeskundige) is een zeer te adviseren volgende stap." }
      }
    },
    "isi": {
      "name": "ISI",
      "abbr": "ISI",
      "fullName": "Insomnia Severity Index",
      "desc": "Evalueert de aard, ernst en de gevolgen van slapeloosheid (insomnie) in de afgelopen twee weken.",
      "instructions": "Beoordeel de ernst van uw slaapproblemen gedurende de afgelopen 2 weken.",
      "questions": [
        {
          "title": "Moeite wegens het in slaap vallen",
          "options": ["Geen","Licht","Matig","Ernstig","Zeer ernstig"]
        },
        {
          "title": "Moeite om in slaap te blijven",
          "options": ["Geen","Licht","Matig","Ernstig","Zeer ernstig"]
        },
        {
          "title": "Te vroeg in de ochtend ontwaken / vroege shifts wakker",
          "options": ["Geen","Licht","Matig","Ernstig","Zeer ernstig"]
        },
        {
          "title": "Hoe ontevreden/tevreden bent u met uw huidige slaappatroon?",
          "options": ["Zeer tevreden","Tevreden","Matig tevreden","Ontevreden","Zeer ontevreden"]
        },
        {
          "title": "In hoeverre verstoort het uw functioneren of welzijn in taken overdag?",
          "options": ["Helemaal niet","Een beetje","Enigszins","Aanzienlijk","Zeer aanzienlijk"]
        },
        {
          "title": "In hoeverre merkt de naaste gemeenschap in welzijn uw tekort aan slaap / effect op gezondheid?",
          "options": ["Helemaal niet","Een beetje","Enigszins","Veel","Heel erg veel"]
        },
        {
          "title": "Hoe bezorgd bent u momenteel over de situatie van uw slapeloosheid?",
          "options": ["Helemaal niet","Een beetje bezorgd","Matig bezorgd","Behoorlijk bezorgd","Zeer angstig en bezorgd"]
        }
      ],
      "results": {
        "sin_insomnio": { "label": "Geen klinische insomnie", "desc": "Uw slaap-waakritme en herstel overdag vallen in deze periode niet buiten een aannemelijk referentiekader." },
        "subclinico": {
          "label": "Subklinische insomnie",
          "desc": "Mogelijk voelt u zich niet optimaal maar bevindt op het kruispunt. Kijk zelf actief wat er qua factoren verholpen zou knnen worden."
        },
        "clinico_moderado": { "label": "Klinische matige slapeloosheid", "desc": "Noodzaakt onderzoek door gespecialiseerde medische diagnostiek en in overweging medicaties / therapie bespreekbaar te overwegen." },
        "clinico_grave": {
          "label": "Zeer zware langdurige insomnie",
          "desc": "Gevolgschades op mentale en fysiologische waarden. Huisarts moet benaderd te zijn om interventie (somnoloog etc.) tot in overweging te regelen"
        }
      }
    },
    "eat26": {
      "name": "EAT-26",
      "abbr": "EAT-26",
      "fullName": "Eating Attitudes Test-26",
      "desc": "Detecteert attitudes en gedragingen die kenmerkend kunnen zijn voor een disfunctioneel relatiesysteem rondom voeding en zelfbeeld.",
      "instructions": "Geef aan in voorkomende gradaties of the stelling bij u relevant op het gebied uw actuele voeding voorkwam.",
      "sharedOptions": ["Nooit","Zelden","Soms","Vaak","Zeer vaak","Altijd"],
      "questions": [
        { "title": "Ik ben doodsbang om te dik te worden" },
        { "title": "Ik vermijd eten hoewel ik fysiek gewoon honger constateer" },
        { "title": "Mijn brein is constant gericht in theorie op voedingwaarde etc." },
        { "title": "Eetbuien gehad met als uitgang ik kon werkelijk niet stoppen de toevoer" },
        { "title": "Voeding uit plichtsgetrouw of dwang steevast extra in kleine porties indelen tijdens bereiding of eten" },
        { "title": "Mijn caloriekennis is steevast constant van al de dagelijks ingenomen voedingsstoffen in mijn hoofd" },
        { "title": "Zorgvuldig met schrappen of overslaan op voeding hoog in het koolhydraat-percentage te reageren" },
        { "title": "Mijn omgeving drukt steevast ongeremd mij in suggesties om eten met kwantiteit uit te bouwen" },
        { "title": "Mij na eten actief (over)geven c.q braakneigingen na consumeren maaltijd te ondergaan" },
        { "title": "Zeer belast door een wroegend effect / intens schuldgevoel wegens eten of voedselinname" },
        { "title": "De dwang in mijn gedachten reikt constant om slanker / niet the verdikken" },
        { "title": "Sporter of bewegende activiteit primair ingezet in mijn perceptie als verbrandproces / boetefactor wegens voedsel" },
        { "title": "Anderen in mijn fysieke kringen waarschuwen regelmatig te kwetsbaar fysiek mager te neigen worden" },
        { "title": "Mijn gedachten obsessief op aanwezigheid van vet deeltjes in de spiegeling op bot / vormen van het lichamelijke bestel" },
        { "title": "Neem extra de gelegenheid om voeding consumeren over opvallende lange duur te rekken" },
        { "title": "Mijd suikers zoveel de realiteit dit toestaat / afschuwing op zoetige ingrediënten aan te vangen" },
        { "title": "Mijn eetpatroon definieërt de 'dieet of slanke optie' en weigering om voorgaande te overstijgen" },
        { "title": "Constant het overheersende gevoel of gedachten omtrent (inmenging van voeding op mijn dag functioneert dominant" },
        { "title": "Discipline om in groepen/sociaal aanzien of op weigeren geen toegang of aanraking te verdragen tot voedzaam etenswaar" },
        { "title": "Sociaal onder druk ervaren worden en hier niet kunnen uitsluiten verplicht the voeden door in de omringde actoren" },
        { "title": "Dagritme gaat disproportioneel gepaard naar tijdsdruk in bestedingen met overdenken en voorbespiegeling naar al the voeding van heden, of the consummeren" },
        { "title": "Eetervaring van zoet deprimerend afkeren om zich wegens calorie bezwaren van mijn schuld" },
        { "title": "In een dieet verblijven" },
        { "title": "Ik heb het aangename euforische gevoel liefst rond te dragen in op het gegeven 'leeg gevoel van de maag'" },
        { "title": "Bij het innemen / proeven van nieuwe smakelijke / rijke structuren uiterst tot aangenaam verkiezen" },
        { "title": "Direct drang waargenomen nadat de maag of keel werd gepasseerd met voeden op het overgeven / ontdoening met braken als intentie na iedere opname van voer" }
      ],
      "results": {
        "bajo_riesgo": { "label": "Laag risico", "desc": "Laag risico op mogelijke eetstoornissen kenmerken. Continueert dit gezonder perspectief met uw lijf" },
        "riesgo_significativo": {
          "label": "Significant risico",
          "desc": "U wordt zeer wel degelijk gewaar mogelijk onder eet-themathiek gebukt en wordt geadviseerd dit objectief op in een spreekuur op specialiteit zorg op disnfunctionele lichaamspercepties aen diagnostiek in medische orde the betrekken "
        }
      }
    },
    "mdq": {
      "name": "MDQ",
      "abbr": "MDQ",
      "fullName": "Mood Disorder Questionnaire",
      "desc": "Snelle screeningstool voor bipolaire stoornis en bipolair spectrum.",
      "instructions": "Beantwoord de volgende vragen over ervaringen die u op enig moment in uw leven mogelijk heeft gehad.",
      "questions": [
        {
          "title": "Heeft u ooit een periode gehad waarin u zich zó goed of hyper voelde dat andere mensen vonden dat u niet uzelf was?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Heeft u ooit een periode gehad waarin u zó prikkelbaar was dat u tegen mensen schreeuwde of ruzie begon?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Heeft u ooit een periode gehad waarin u veel meer zelfvertrouwen had dan normaal?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Heeft u ooit een periode gehad waarin u veel minder sliep dan normaal en dit ook niet miste?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Heeft u ooit een periode gehad waarin u veel spraakzamer was of sneller sprak dan normaal?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Heeft u ooit een periode gehad waarin gedachten door uw hoofd raasden?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Heeft u ooit een periode gehad waarin u zo snel afgeleid was dat u moeite had u te concentreren?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Heeft u ooit een periode gehad waarin u veel meer energie had dan normaal?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Heeft u ooit een periode gehad waarin u veel actiever was of veel meer dingen deed dan normaal?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Heeft u ooit een periode gehad waarin u veel socialer of extraverter was dan normaal?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Heeft u ooit een periode gehad waarin u veel meer interesse in seks had dan normaal?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Heeft u ooit een periode gehad waarin u dingen deed die ongebruikelijk voor u waren of die door anderen of u naderhand als overdreven of riskant werden ervaren?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Heeft u ooit een periode gehad waarin u geld uitgaf op een manier die problemen veroorzaakte voor u of uw familie?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Zagen zich meerdere van deze zojuist genoemde bevindingen/situaties in tegelijk in een en zelfde omliggende periode gelijktijdig manifesteren in uw verleden?",
          "options": ["Nee","Ja"]
        },
        {
          "title": "Indien het op enige van the voorstaande vragen is met JA beantwoord; in welke mate resulteerden the gemelde situaties naar de omvang in het sociaal of werkveld aandoenden consequenties in 'problematiek' in die specifieke actuele verleden?",
          "options": ["Geen probleem","Kleine incidentie of probleem","Aanzienlijke problemen en schades of functioneel stoornissen / matige problematiek","Zware vergaande gevolgen in werk of sociaal als ernstige mate ervaren"]
        }
      ],
      "results": {
        "positive": {
          "label": "Positieve screening voor bipolair spectrum",
          "desc": "Uw scores wijzen in meer symptomen na bipolair kenmerk. Dit is uitdrukkelijk GEEN definitieve diagnose. Oordeel moet in nader overleg aan psychiater te leggen indien relevant op verzoek / referentie van the HA huisarts de praktijk het traject wordt onderworpen."
        },
        "negative": {
          "label": "Negatieve screening",
          "desc": "Uw antwoorden duiden vooralsnog in de meting niet een bipolair verloop / spectrum af vanuit the MDQ."
        }
      }
    },
    "spin": {
      "name": "SPIN",
      "abbr": "SPIN",
      "fullName": "Social Phobia Inventory",
      "desc": "Evalueert de aanwezigheid en ernst van sociale-angstsymptomen.",
      "instructions": "Geef aan in hoeverre de volgende klachten u in het sociaal verkeer in de afgelopen week hebben gehinderd.",
      "sharedOptions": ["Helemaal niet","Een beetje","Enigszins","Veel","Extreem"],
      "questions": [
        { "title": "Ik ben bang voor mensen die op hogere autoriteitsniveaus verkeren." },
        { "title": "Ik heb er erge hinder of zorgen over het kleuren of blozen in mijn gezicht in het bijstaan van medemensen." },
        { "title": "Bruiloften of openbare formele feestelijkheid schrikt me aanzienlijk ontzettend in afnemend voelen op aanzicht." },
        { "title": "Contact maken of aan de conversatie starten gericht in de conversatie met onbekende personen mijd in structuur af." },
        { "title": "Ik ben een van kritische aard geuite mededeling erg vrezend of zeer op schroom door reacties bang." },
        { "title": "Schroom of onvoorziene de fout of dom in beeld te belanden als dom gepercipieerd doen af afkappen en in de gesprekken te mijden." },
        { "title": "Lichamelijk opwarmen met zichtbare transpiratiesporen of bezwete situatie als aanschouwlijk effect door derden levert fobie op." },
        { "title": "Publiekelijk op te komen in formelere en gezelschappen in partijen the frequenteren of om partij te sluiten onthoud of omwijd ik mijzelf het allerliefst." },
        { "title": "Indien het woord direct en ikzelf als spreker the worden de as als aandachtsveld ben verwerp ik of zal ik ontsnappen / wegblijven te hanteren the optie" },
        { "title": "Op onbekenden gericht spreken slaat mijn wezenlijk doen fobie gericht uit koers door het aanspreken met onbekenden door mijzelf aangenomen op acties uitgaand bevreesdheid effect teweeg brengen." },
        { "title": "Ik huiver met publiek de ruimte of zaal the addresseren de spreker openbaar the presenteren." },
        { "title": "Ik ga het door in situaties met ontloop strategie de negatieve de stempel the onttrekken met angst." },
        { "title": "Sociaal en onder nabije blikken treedt in het samenkomen voelend dat mijn hart frequent overslaat in boezemfibrilerend of onrust aangeslagen op borst teweeg in versnellende pulsaties in medemens." },
        { "title": "Op werk of functioneren of consummerend dat direct georienteerd op ogen waarnemend observeerd / kijk in afgeremd op angst vastgeklonken in het gehandelde vrees ik de uitoefening." },
        { "title": "Aandacht focussen in blunder wezen het figuur staan schamend of gek staan geniet voor mij een zware fobische last aan in vreeswaarde verreweg boven af als angstdomein aanzettende prioriteiten." },
        { "title": "Ieders contact de of autoriteit aansturen wordt vergaand met mijn tactieken gemijd the direct te interacteren the ontkomen." },
        { "title": "Ik vrees voor in aanraking the geraken in the publiekelijke the bewijzen en aantonen trillend zichtbaar motorisch beefbeweging wegens het sociale opgewekte stress te ervaren trilling beangstigt mijn functionering onder zicht" }
      ],
      "results": {
        "low": { "label": "Lage sociale angst", "desc": "Weinig sociaal angst spectrum of fobische indicatie ervaren onder de gepeilde parameters en de grenswaarde blijft hier aanzienlijk negatief dalen." },
        "mild": { "label": "Milde sociale angstervaring", "desc": "Milde beangstheid of niet vergaande belemmeringen wel lokaal gespannen bij verrichtingen. U doorstaat nog best het kader zonder de volledige desoriëntatie the mijden door schroom op social spectrum." },
        "moderate": {
          "label": "Matig aanwijsbare problematiek rond sociaal angst functioneren",
          "desc": "Beleving resulteert in best matige rem op het vrij manifesterend welzijn waarbij al wat disproportionele angst ervaren het doen gaat dwarsbomen op het vlak. Overwegen van een verwezen professional of CGt is in stappen best niet gek om op werk in functionele setting uw welvaren tot verlichting in the inbrengthe behouden te kunnen"
        },
        "severe": { "label": "Stevig diepere sociale angstaandoening", "desc": "Zware rem op the uitoefening in het dagelijkse interpersoonlijke veld waarbij fobie met serieuze belemmeringen samengaat is door de schaal score aangewezen uit u referentie u referentie met huisarts wegens uw klachten op de sociale vermijden en lijdensniveaus te betrekken wordt sterk verwezen hier." },
        "very_severe": {
          "label": "Zeer verreikende ernstige belemmerende impact der Sociaal Fobie",
          "desc": "Zeer ernstig in de verrichting geremd belemmerend ontwijken. Professionele consult in zorg in wezen onontbeerlijk om in levenspad weer zonder overmatige op structurele stelsel angst-overname het de opgave functioneren. Psychotherapeut met sociaal angstfobie is hoog als optie of medisch ingreep the peilen op in opties in het traject verwezen sterk aangeraden."
        }
      }
    },
    "rosenberg": {
      "name": "RSE",
      "abbr": "RSE",
      "fullName": "Rosenberg Self-Esteem Scale",
      "desc": "De meest gebruikte maatstaf voor globaal gevoel van eigenwaarde. Het meet de mate waarin iemand zichzelf als waardevol beschouwt.",
      "instructions": "Geef aan in hoeverre u het eens bent met de volgende stellingen.",
      "sharedOptions": ["Helemaal mee oneens","Mee oneens","Mee eens","Helemaal mee eens"],
      "questions": [
        { "title": "Ik heb het gevoel een persoon van waarde te zijn, tenminste op gelijk niveau als anderen." },
        { "title": "Ik voel dat ik goede en positieve eigenschappen of kwaliteiten bezit." },
        { "title": "Over het algemeen neig ik te geloven en het gevoel dragen dat ik een algehele mislukkeling the aanzien zou beschouwen in zijn de optiek het leven." },
        { "title": "Ik ben adequaat in staat taken the realiseren net zo tenminste even in de kwaliteit vergeleken wezen in de brede the verrichtingen ten aanzien met de doorsnee algemene man / medemens omstreek te staan." },
        { "title": "Ik concludeer niet of zelden echt iets te bezitten waar het trots mee voor the kunnen prijzen te aannemen of referentie in eigendom der kunnen aannemen door the referentie het oordeel." },
        { "title": "Ik heb grotendeels echt en voornamelijk een positieve attitude op voor het mijzelf bekijken op mijn inborst in stand en opzicht behouden voor de oordeel" },
        { "title": "Globaal oordelend concludeer ik algemeen wel content met wie the ben mezelf in zijn tevreden te verzoenen met de spiegel het karakteristieke." },
        { "title": "Ik wens soms the dragen meer in the respect the verzoenen met me met mijn wezen als referentie." },
        { "title": "Er doen van tijd tot the periode episodes optreden over het fundamenteel doelloze het gevoel zich ten onbruik wezen ten opzichte mijner." },
        { "title": "Af ten the aanzien vlagen ik best in gedachten schiet voor nergens in waarde tot een goed bruikbare factor the verrichten door het leven" }
      ],
      "results": {
        "low": { "label": "Lage zelfwaardering", "desc": "Score refereert the duiden ten wezen op een in de regel zwak gevoel ter de basale factor zelfesteem the wezen. De reflectering met zorgprofessional als steun het vergt voor advies om onterechte schematische oordelen the overzien uit medische en cognitief opties " },
        "normal": { "label": "Gezonde gematigd stabiele algemene mate Zelf-Estimeer norm", "desc": "Beoogde score en meetwaarde levert geen uitschieters en uw zelfliefde referentie levert geen problematisch structurele in geesten of functionele verweer nader geconstateerd rond the basale reflectie oordelen uw algemene gevoel het norm the betrekken." },
        "high": { "label": "Goede hogere eigen zelfliefde factor of Zelfrespect op schaal", "desc": "Hoog eigen geloof met gezonde krachtige identiteits oordeel en referentie een solide positieve attitude om voor het respecteren met een reflectie te bezegigen als hoog score resulaat" }
      }
    },
    "who5": {
      "name": "WHO-5",
      "abbr": "WHO-5",
      "fullName": "WHO-5 Well-Being Index",
      "desc": "Een korte maatstaf ontwikkeld door de WHO voor emotioneel welzijn. Slechts 5 vragen.",
      "instructions": "Geef aan hoe u zich de afgelopen twee weken heeft gevoeld.",
      "sharedOptions": [
        "Nooit",
        "Soms",
        "Minder dan de helft van de tijd",
        "Meer dan de helft van de tijd",
        "Meestal",
        "Voortdurend"
      ],
      "questions": [
        { "title": "Ik voelde me vrolijk en in een goede stemming." },
        { "title": "Ik voelde me kalm en ontspannen." },
        { "title": "Ik voelde me actief en energiek." },
        { "title": "Ik werd fris en uitgerust wakker." },
        { "title": "Mijn dagelijks leven was gevuld met dingen die me interesseren." }
      ],
      "results": {
        "low": { "label": "Laag welzijn", "desc": "Duidt op een laag emotioneel welzijn. Professionele evaluatie, zoals een screening op depressie, wordt aanbevolen." },
        "reduced": { "label": "Verminderd welzijn", "desc": "Duidt op verminderd emotioneel welzijn. Overweeg in gesprek te gaan met een zorgprofessional." },
        "moderate": { "label": "Matig welzijn", "desc": "Duidt op een matig niveau van emotioneel welzijn." },
        "high": { "label": "Hoog welzijn", "desc": "Duidt op een hoog niveau van emotioneel en algemeen welzijn." }
      }
    },
    "aq10": {
      "name": "AQ-10",
      "abbr": "AQ-10",
      "fullName": "Autism Spectrum Quotient — 10 items",
      "desc": "Korte screening voor kenmerken geassocieerd met het autismespectrum. Ontwikkeld door Baron-Cohen et al.",
      "instructions": "Lees elke stelling zorgvuldig en geef aan in hoeverre u het er mee eens of oneens bent.",
      "sharedOptions": [
            "Helemaal mee eens",
            "Mee eens",
            "Mee oneens",
            "Helemaal mee oneens"
      ],
      "questions": [
            {
                  "title": "Ik hoor vaak kleine geluidjes die anderen niet horen"
            },
            {
                  "title": "Wanneer ik een verhaal lees, vind ik het moeilijk om de bedoelingen van de personages te begrijpen"
            },
            {
                  "title": "Wanneer iemand tegen me praat, vind ik het makkelijk om 'tussen de regels door' te lezen"
            },
            {
                  "title": "Ik richt me meestal op het grote geheel in plaats van op de kleine details"
            },
            {
                  "title": "Ik heb makkelijk door wanneer iemand die naar me luistert zich begint te vervelen"
            },
            {
                  "title": "Ik vind het makkelijk om meerdere dingen tegelijk te doen"
            },
            {
                  "title": "Ik kan makkelijk opmaken wat iemand denkt of voelt door alleen maar naar zijn/haar gezicht te kijken"
            },
            {
                  "title": "Als ik onderbroken word, kan ik heel snel weer de draad oppakken"
            },
            {
                  "title": "Ik vind het leuk om informatie te verzamelen over soorten of categorieën dingen (bijv. typen auto's, treinen, planten)"
            },
            {
                  "title": "Ik vind het moeilijk om de bedoelingen van andere mensen te doorzien"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Weinig autistische kenmerken",
                  "desc": "Uw score suggereert geen significante trekken van het autismespectrum. Heeft u echter zorgen, raadpleeg dan een professional."
            },
            "moderado": {
                  "label": "Enkele autistische kenmerken",
                  "desc": "Uw score wijst op enkele kenmerken uit het autismespectrum, maar blijft onder de klinische verwijzingsdrempel (≥6)."
            },
            "alto": {
                  "label": "Aanzienlijke autistische kenmerken",
                  "desc": "Uw score is gelijk aan of hoger dan de verwijzingsdrempel (≥6). Een uitgebreide diagnostische screening door een gespecialiseerde professional wordt aanbevolen."
            },
            "muy_alto": {
                  "label": "Zeer aanwezige autistische sterk indicatieve kenmerken",
                  "desc": "Uw score is hoog en sluit het best in in klinische verwijzingen the diagnosticum is zeer voor referentie om psycholoog en of test traject sterk met klinische diagnostische procedures in the schrijven ter controle vast the oordelen ten behoeve"
            }
      }
    },
    "aq50": {
      "name": "AQ-50",
      "abbr": "AQ-50",
      "fullName": "Autism Spectrum Quotient — 50 items",
      "desc": "Uitgebreide beoordeling van kenmerken van het autismespectrum over vijf domeinen: sociale vaardigheden, aandacht verplaatsen, aandacht voor detail, communicatie en verbeelding.",
      "instructions": "Lees elke stelling zorgvuldig en geef aan in hoeverre u het ermee eens of oneens bent. Er zijn geen goede of foute antwoorden.",
      "questions": [
            { "title": "Ik doe dingen liever met anderen dan alleen" },
            { "title": "Ik doe dingen het liefst steeds weer op dezelfde manier" },
            { "title": "Als ik me iets probeer voor te stellen, vind ik het heel makkelijk om hiervan een plaatje in mijn hoofd te maken" },
            { "title": "Ik ga vaak zó op in één ding, dat ik al het andere uit het oog verlies" },
            { "title": "Ik merk vaak kleine geluidjes op die anderen niet horen" },
            { "title": "Auto-kentekens of soortgelijke reeksen informatie vallen me altijd op" },
            { "title": "Andere mensen zeggen vaak dat de dingen die ik zeg onbeleefd zijn, ook al vind ik zelf van niet" },
            { "title": "Wanneer ik een verhaal lees, kan ik me makkelijk voorstellen hoe de personages eruit zien" },
            { "title": "Ik ben gefascineerd door datums" },
            { "title": "In een groep mensen kan ik de gesprekken van verschillende mensen moeiteloos volgen" },
            { "title": "Sociaal onder de mensen zijn gaat mij gemakkelijk af" },
            { "title": "Mij vallen details sneller op dan andere mensen" },
            { "title": "Ik ga liever naar de bibliotheek dan naar een feest" },
            { "title": "Ik vind het makkelijk om verhalen te verzinnen" },
            { "title": "Ik voel me sterker aangetrokken tot mensen dan tot dingen" },
            { "title": "Mijn interesses zijn vaak zó sterk dat ik van streek raak wanneer ik er niet mee bezig kan zijn" },
            { "title": "Ik houd van koetjes en kalfjes praten (chit-chat)" },
            { "title": "Als ik aan het woord ben, is het voor anderen niet altijd makkelijk om er een woord tussen te krijgen" },
            { "title": "Cijfers en getallen fascineren me" },
            { "title": "Als ik een verhaal lees, vind ik het moeilijk te begrijpen wat de bedoelingen van de personages zijn" },
            { "title": "Fictieboeken vind ik niet bijzonder leuk om te lezen" },
            { "title": "Ik vind nieuwe vriendschappen onderhouden ontzettend moeilijk de weg" },
            { "title": "Ik merk de the hele tijd patronen bij the structureren objecten de in relatie of indeling structurele details te observeren op" },
            { "title": "Theater trekt mij preferent ten opzichte van het the in the in musea structurele of esthetische kunststuk the te bezichtigen object" },
            { "title": "Ik raak niet snel overstuur the storend de the verstoring the worden onder the planning the routinewerk te ontnemen" },
            { "title": "Ik kamp en vind mij vaak aangelopen er met het onkundig de onbespreekbaar conversatie met medemensen de levendige de houden" },
            { "title": "Mij voegt de interpretatie in tussen regels the lezen uiterst met inzicht gemakkelijk te in the waarnemende spreken toe" },
            { "title": "Het totaal beeld het vogel blik in plaatje zie en ik liever als ik liever concentreren mij the prefereren the in the kleinere de stippen the micro onder" },
            { "title": "Cijfers opslaan nummers refereren telefoon het reeks valt mij verdomd niet gunstig ten brein the archiverings aan" },
            { "title": "Doorgaans passeren voor mij wezenlijke context veranderingen onopgemerkt voorbij of veranderingen haardrachten uiterlijke vertoning van passanten" },
            { "title": "De communicatie levert me het de snelle indicering op indicaties onverveelde niet saaie aanhorende de in gadeslaande luisteraard" },
            { "title": "Tegelijk en multitakend optreden is the opererende met efficiënt in the vloeiend mijn handel the functioneel mij het gemakkelijk" },
            { "title": "Spreken via het tefefoon the met niet visueel de gesprek contact vult me twijfeling en verward over the beurt passering wanneer ik beurt het the in de spreken of zwijgen kan" },
            { "title": "Spontane de en niet het the planning in ongeplande moment en doende aan dacht in the uitvoer is waar ik van nature plezier prefereer the vol verlenen" },
            { "title": "Anderen of clou van the verhaallijn en grappige context het begrijp the of the vat eind pas als de rest reeds als eerste de ontknoping is lachtende in meedraaiende moment uit " },
            { "title": "The aandoening of blik emotionele perceptie ik af in the fysionomie of in in blik the lees perfect wezen het doende te gezicht uiting the onttaken of the en af de" },
            { "title": "Uit de stroom en context focus uit en dan The hervatten naar werk the ik onmiddellijk perfect en adequaat uit uiterst vloeiend over uitbreke" },
            { "title": "Het luchtige de kletspraat gesprekken te praat the small-talk functioneert op my goed" },
            { "title": "Personen the medemensen om attenteren the verwijten my al door en een door over door blijf zeuren of the praten of the het herhalen blijf doordram topic op het eigen blijf onderwerp " },
            { "title": "The spelen het fantaseren gedurende als we kinds we in pretenderen de rol the met interactie spel het te in jeugd of the en de om ik pleziert het in vermaakt" },
            { "title": "Sla enorm veel the details the in database over types categories objecten in en specificaties categories graag op de specificaties in The data mij in vermaak" },
            { "title": "The ervarend een mij The the projecteren hoe en of referentie the andere partij zich the the leven the op doormaken bevalt uiterst niet on the peilen the onbegrijpelijke de en onttrek" },
            { "title": "Plannen in details en nauw gevat the alle te nader in of details we the om uit onder hand in doen actie de " },
            { "title": "Feestelijkheid en sociale aangelegen partij en interacties bijeen the ik the aards beleef het als vermaak The vreugdevuur in in the" },
            { "title": "Ik raak the gissen naar the ontcijfer en van in wezen en de ware of the van intenties we medemensen intentie de aan de gadesla van de ontcijfer de niet intentie in ontcijfer intentie te ontcijfer te " },
            { "title": "Nieuwigheid object context of andere omgeving of parameters the angst of gespannen maken en situatie teweeg aanzuig met wezen " },
            { "title": "Vreemden en nieuwe op the wezen de mensen The ik verwelkom the interacterende verheug en mij blijdschap pleziert The in" },
            { "title": "Mij als de het verzoend of wel als the diplomaat of tact The een zeer passend of tact een het mediator in goed uiting the diplomatie the " },
            { "title": "Geboortedata the van naaste of andere de bewaakt het opslag en het me in het niet wekt het me in de kalender te wezen on the op slaan the of onthoud the en met mij" },
            { "title": "Samen aantonen met The jeugd spelen van en pretenderen fantasiespel uiterst met verbeeld The gemakkelijk The weest om de spel The in een kind of speels the om" }
      ],
      "results": {
            "bajo": {
                  "label": "Weinig autistische kenmerken",
                  "desc": "Uw score valt binnen het gemiddelde bereik van de algemene populatie. Er worden geen significante autismespectrumkenmerken gesuggereerd."
            },
            "leve": {
                  "label": "Lichte autistische kenmerken",
                  "desc": "Uw score duidt op enkele kenmerken uit het autismespectrum, maar binnen het bredere gemiddelde bereik."
            },
            "moderado": {
                  "label": "Matige autistische kenmerken",
                  "desc": "Uw score overschrijdt de grens van 26 en suggereert bovengemiddelde autistische trekken. Overweeg een professional als dit uw welzijn beïnvloedt."
            },
            "alto": {
                  "label": "Significante autistische kenmerken",
                  "desc": "Uw score ligt boven de klinische grens van 32. Diagnostische begeleiding wordt ten zeerste aanbevolen om te kijken of een ASD-diagnose past."
            },
            "muy_alto": {
                  "label": "Zeer significante autistische kenmerken",
                  "desc": "Uw score is zeer hoog. Een uitgebreid diagnostisch onderzoek naar ASS(autismespectrumstoornis) door een specialist wordt sterk aanbevolen."
            }
      }
    },
    "cssrs": {
      "name": "C-SSRS",
      "abbr": "C-SSRS",
      "fullName": "Columbia Suicide Severity Rating Scale — Screener",
      "desc": "Wereldwijd gebruikt screeningsinstrument voor suïciderisico in noodhulp, eerste hulp en onderwijs. Bel bij een crisis: 113 of 0800-0113 (NL) / 1813 (BE).",
      "instructions": "Beantwoord de volgende vragen over gedachten of gedragingen die u mogelijk heeft gehad eerlijk.",
      "questions": [
            {
                  "title": "Heeft u gewenst dat u dood was of gewenst dat u kon gaan slapen en niet meer wakker zou worden?",
                  "options": ["Nee","Ja"]
            },
            {
                  "title": "Heeft u daadwerkelijk gedachten gehad om een eind aan uw leven te maken?",
                  "options": ["Nee","Ja"]
            },
            {
                  "title": "Heeft u nagedacht over hóé u dit zou kunnen doen? (Bijv. nagedacht over een methode zoals pillen of op een andere manier)",
                  "options": ["Nee","Ja"]
            },
            {
                  "title": "Heeft u deze gedachten gehad en enige intentie gehad om ernaar te handelen?",
                  "options": ["Nee","Ja"]
            },
            {
                  "title": "Bent u begonnen met het uitwerken, of heeft u de details uitgewerkt van hoe u een eind aan uw leven wilt maken? Bent u van plan dit plan uit te voeren?",
                  "options": ["Nee","Ja"]
            },
            {
                  "title": "Heeft u ooit iets gedaan, bent u ergens aan begonnen of heeft u zich voorbereid om een eind aan uw leven te maken? (Bijv. pillen verzameld, waardevolle spullen weggegeven, een afscheidsbrief geschreven, uzelf gesneden, etc.)",
                  "options": ["Nee","Ja"]
            }
      ],
      "results": {
            "none": {
                  "label": "Geen risico geïdentificeerd",
                  "desc": "Er zijn op dit moment geen indicatoren voor suïciderisico vastgesteld. Aarzel niet om professionele hulp te zoeken als u ooit zulke gedachten krijgt."
            },
            "low": {
                  "label": "Laag risico",
                  "desc": "U heeft passieve doodswensen geuit. Hoewel u geen actieve plannen aangeeft, wordt geadviseerd hierover met een professional te spreken.\n\n🆘 CRISISLIJNEN:\n• NL: Bel 113 of 0800-0113\n• BE: Bel 1813\n• Internationaal: befrienders.org"
            },
            "moderate": {
                  "label": "Matig risico",
                  "desc": "Uw antwoorden duiden op suïcidale gedachten. Het is heel belangrijk om met een professional te praten. Een signalerings- of veiligheidsplan kan helpen.\n\n🆘 CRISISLIJNEN:\n• NL: Bel 113 of 0800-0113\n• BE: Bel 1813"
            },
            "high": {
                  "label": "Hoog risico",
                  "desc": "Uw antwoorden duiden op een aanzienlijk risico op suïcidaal gedrag. U heeft een spoedbeoordeling door een professional nodig. Neem nu contact op met uw arts of een crisislijn.\n\n🆘 CRISISLIJNEN:\n• NL: Bel of chat 113 of 0800-0113\n• BE: Bel 1813"
            },
            "imminent": {
                  "label": "Acuut risico",
                  "desc": "Uw antwoorden duiden op een zeer hoog, onmiddellijk risico. Het is van levensbelang dat u NU hulp zoekt. Neem direct contact op met spoedeisende hulp (112), uw huisarts, of een crisislijn. U bent niet alleen.\n\n🆘 CRISISLIJNEN:\n• NL: Bel 112 (nood) of 113 / 0800-0113\n• BE: Bel 112 (nood) of 1813"
            }
      }
    },
    "cage": {
      "name": "CAGE",
      "abbr": "CAGE",
      "fullName": "CAGE Alcohol Screening Questionnaire",
      "desc": "Ultrasnelle screening (4 vragen) om alcoholproblemen te detecteren. Vult de AUDIT aan.",
      "instructions": "Beantwoord de volgende vragen eerlijk over uw relatie met alcohol.",
      "sharedOptions": [
            "Nee",
            "Ja"
      ],
      "questions": [
            {
                  "title": "Heeft u ooit het gevoel gehad dat u minder zou moeten drinken (Cut down)?"
            },
            {
                  "title": "Hebben mensen u geïrriteerd door kritiek te hebben op uw drinkgedrag (Annoyed)?"
            },
            {
                  "title": "Heeft u zich ooit slecht of schuldig gevoeld over uw drinkgedrag (Guilty)?"
            },
            {
                  "title": "Heeft u ooit 's ochtends als eerste een drankje genomen om uw zenuwen tot rust te brengen of om van een kater af te komen (Eye-opener)?"
            }
      ],
      "results": {
            "none": {
                  "label": "Geen indicatoren",
                  "desc": "Er zijn geen indicatoren voor alcoholproblemen gedetecteerd."
            },
            "low": {
                  "label": "Mogelijk risico",
                  "desc": "Eén bevestigend antwoord geeft aan dat verder onderzoek nuttig is. Overweeg de uitgebreidere AUDIT-"
            },
            "moderate": {
                  "label": "Waarschijnlijk probleem",
                  "desc": "Uw score suggereert een grote kans op een stoornis in het alcoholgebruik. Het raadplegen van uw huisarts is aanbevolen."
            },
            "high": {
                  "label": "Grote waarschijnlijkheid",
                  "desc": "Uw score wijst vrijwel zeker op alcoholafhankelijkheid. Het is essentieel om gespecialiseerde medische hulp te zoeken."
            }
      }
    },
    "phqa": {
      "name": "PHQ-A",
      "abbr": "PHQ-A",
      "fullName": "Patient Health Questionnaire — Adolescents",
      "desc": "PHQ-9 versie speciaal gevalideerd voor jongeren (11-17 jaar). Beoordeelt de stemming tijdens de afgelopen twee weken.",
      "instructions": "Hoe vaak heb je de afgelopen 2 weken last gehad van de volgende problemen? Denk aan hoe je je hebt gevoeld op school, met vrienden, en thuis.",
      "sharedOptions": [
            "Helemaal niet",
            "Meerdere dagen",
            "Meer dan de helft van de dagen",
            "Bijna elke dag"
      ],
      "questions": [
            { "title": "Weinig interesse of plezier om dingen te doen" },
            { "title": "Je somber, depressief, of hopeloos voelen" },
            { "title": "Moeite met in slaap vallen of in slaap blijven, of juist veel te veel slapen" },
            { "title": "Je moe voelen of weinig energie hebben" },
            { "title": "Slechte eetlust, of juist veel te eten" },
            { "title": "Je slecht over jezelf voelen — het gevoel hebben dat je een mislukkeling bent of jezelf/je familie hebt teleurgesteld" },
            { "title": "Moeite hebben met je te concentreren op dingen, zoals schoolwerk, lezen of tv kijken" },
            { "title": "Zo traag bewegen of praten dat andere mensen het zouden hebben gemerkt? Óf juist het tegenovergestelde: zo onrustig of wiebelig dat je veel meer bewoog dan normaal" },
            { "title": "Gedachten dat je beter af zou zijn als je dood was of dat je jezelf op de een of andere manier pijn zou willen doen" }
      ],
      "results": {
            "minima": {
                  "label": "Minimaal",
                  "desc": "Geen of heel weinig symptomen van depressie. Probeer te blijven doen wat je nu doet voor je mentale gezondheid!"
            },
            "leve": {
                  "label": "Licht",
                  "desc": "Lichte symptomen gedetecteerd. Praat eens met een volwassene die je vertrouwt als je ergens mee zit of je rot voelt."
            },
            "moderada": {
                  "label": "Matig",
                  "desc": "Matige symptomen van depressie gedetecteerd. Het is een goed moment om met een arts of een psycholoog op school te praten."
            },
            "moderadamente_grave": {
                  "label": "Best wel ernstig",
                  "desc": "Aanzienlijke depressieve symptomen. Het is heel belangrijk dat je hier binnenkort professionele hulp bij krijgt."
            },
            "grave": {
                  "label": "Ernstig",
                  "desc": "Zware symptomen van depressie gedetecteerd. Je hebt nu het recht, maar ook echt de noodzaak om hulp te krijgen. Praat vandaag nog met een ouder, docent, of vertrouwenspersoon."
            }
      }
    },
    "triage": {
      "name": "Oriëntatie",
      "abbr": "Gids",
      "fullName": "Initiële Oriëntatie Vragenlijst",
      "desc": "Weet u niet waar u moet beginnen? Deze korte vragenlijst adviseert welke beoordelingen voor u het meest relevant zijn.",
      "instructions": "Beantwoord de volgende vragen eerlijk over hoe u zich de laatste tijd voelt. Aan het eind ontvangt u persoonlijke testaanbevelingen.",
      "sharedOptions": ["Helemaal niet","Een beetje","Matig","Best veel","Heel erg veel"],
      "questions": [
        { "title": "Ik heb me overwegend verdrietig, somber of hopeloos gevoeld" },
        { "title": "Ik heb interesse of plezier verloren in dingen die ik normaal wel leuk vind" },
        { "title": "Ik voel me gebrek aan energie en continu uitgeput of futloos" },
        { "title": "Ik voel me nerveus, op scherp of angstig of gespannen overkomen" },
        { "title": "Ik bezit aan overmatig structurele gedachtens en zorgen niet behapbaar the sturen" },
        { "title": "Ik ervaar hevige fysiologische klachten de hart overslag of zweethanden of paniekaanvallen " },
        { "title": "Sociaal vrees voor beoordeeltheid te bekeken uitoefenen te mijd the interactief " },
        { "title": "Ervarend de in sociaal beklemmende communicatie angst bij ongekende the de spreken toe" },
        { "title": "Ervaar door de bomen in stress of problem het overweldigende te falen" },
        { "title": "Algeheel ervaart in structurering de reguliere verplichte wezen het uit overzicht wegnemen" },
        { "title": "Herinner er belemmerend structureel op de traumatische gebleven trauma te manifesteren op" },
        { "title": "Nare intense of fysiologische herinnering of de het droom op in retrospect in trauma aan eerdere the" },
        { "title": "Niet inslaap het lang the nachtbrekend of op de of of blijvend frequent the in op ontwaken the gebrek " },
        { "title": "Dagdraai de slopende in functioneel functioneren the ontberende fysiologisch The consequentie the der op " },
        { "title": "Mijn uiterst obsessieve beklemd streeft het voedend afvallen en maat The of wegend de gedachten op fixatie factor " },
        { "title": "De eet component the of uitbraken The extremer uithongeren op of the vlagen schuld en dwang " },
        { "title": "Alcohol en the controle gedaald op dranken een onoverkomelijk verplicht in The schades problem The de wezen" },
        { "title": "Uit chaos of taak concentratie the structureren onrust en the afkappenden onvermogen om te the ronden " },
        { "title": "Onrust The het uiterste aandrijven aan te en de stil vlagen onmogelijk the zittend op " },
        { "title": "In een in herhaling onuitwisbare the the intreding het gedachte het patroon dat het wekt the aanzuigende dwang the angstig wezen" },
        { "title": "Het rituelen dwang op opruimingen controles en handelingen onoverkomelijk vastberaden op routine en " },
        { "title": "Manische hoogte extatisch om te of hyper direct depressieve the valkuilen The wissels te " },
        { "title": "Ervaringen aan tomeloos excessief hoog riskante The uitspattingen hyper the verzeild te uit aan vlage the zijn " },
        { "title": "Mijn sociaal The naaste binding heel intens aanhankelijk en uiterst ontploffen steevast of bindings wissel de" },
        { "title": "Emoties op the piekend onbeschrijfbaar onregulerend the op of gedaald op The extreem vallen factor" },
        { "title": "Inlevende intentie The weglezen communicatien in non verbale the de misverstane the the vat in referentien van uitschiet te" },
        { "title": "Uiterst of in detail beklemd structureren de te aan in op the hechten routine storing raakt volledig uit of " }
      ],
      "domainNames": {
        "Estado de ánimo": "Stemming",
        "Ansiedad": "Angst",
        "Ansiedad social": "Sociale angst",
        "Estrés": "Stress",
        "Trauma": "Trauma",
        "Sueño": "Slaap",
        "Alimentación": "Eetgedrag",
        "Alcohol": "Alcohol",
        "Atención y concentración": "Aandacht en Concentratie",
        "Obsesiones y compulsiones": "Obsessies en Compulsies",
        "Cambios de ánimo": "Stemmingswisselingen",
        "Regulación emocional": "Emotionele Regulatie",
        "Rasgos del espectro autista": "Autismespectrumkenmerken"
      },
      "domainReasons": {
        "Estado de ánimo": "Hoge score op stemmingsindicatoren",
        "Ansiedad": "Hoge score op angstindicatoren",
        "Ansiedad social": "Hoge score op sociale angstindicatoren",
        "Estrés": "Hoge score op ervaren stress",
        "Trauma": "Hoge score op traumagerelateerde of PTSS indicatoren",
        "Sueño": "Hoge score op slaapproblematiek indicatoren",
        "Alimentación": "Hoge score op indicatoren eetstoornissen/gedrag",
        "Alcohol": "Hoge score op bezorgdheid omtrent alcoholconsumptie",
        "Atención y concentración": "Hoge score op ADHD of aandachtstekort-indicatoren",
        "Obsesiones y compulsiones": "Hoge score op obsessief of dwangmatig handelen",
        "Cambios de ánimo": "Hoge score op manische/of stemmingsuitslagen",
        "Regulación emocional": "Hoge score op emotieregulatie of prikkelbaarheid (o.a. BPD of stress regulatie)",
        "Rasgos del espectro autista": "Hoge score op the rigide structurele routines en kenmerken bij ASS"
      },
      "results": {
        "triage_label": "Uw aanbevolen beoordelingen",
        "triage_desc": "Op basis van uw antwoorden hebben we de volgende tools in assessment the beoordelen klaargezet geadviseerd:",
        "suggested_wellbeing": "Algemene welzijn screening wordt the additioneel voor ieders aanbevolen wezen in",
        "suggested_personality": "Samen in met Persoonlijkheid vragenlijst in ter completering uw profiel te profileren"
      }
    },
    "ipip300": {
      "name": "IPIP-300",
      "abbr": "IPIP-300",
      "fullName": "IPIP-NEO-300 — 300-Item Personality Inventory",
      "desc": "De meest uitgebreide vrij beschikbare persoonlijkheidstest. Meet uiterst gedetailleerd de 'Big Five', gesplitst in 30 sub-facetten.",
      "instructions": "Geef aan hoe accuraat elke stelling u over het algemeen typeert of beschrijft. Er zijn geen goede of foute antwoorden. Probeer zo eerlijk mogelijk in de optiek op te oordelen.",
      "sharedOptions": ["Zeer onjuist","Onjuist","Noch onjuist/noch juist (neutraal)","Juist","Zeer juist"],
      "questions": [
        { "title": "Ik maak me te veel zorgen over dingen." },
        { "title": "Ik ben meestal ontspannen." },
        { "title": "Ik vrees het ergste in elke situatie." },
        { "title": "Ik voel me zelden angstig of bezorgd." },
        { "title": "Ik word snel zenuwachtig." },
        { "title": "Ik pieker niet over dingen die al zijn gebeurd." },
        { "title": "Ik maak me veel te veel zorgen over wat er allemaal mis kan gaan." },
        { "title": "Ik blijf rustig in onverwachte the onzekere omstandigheden." },
        { "title": "Ik ben vaak angstig of snel uit evenwicht." },
        { "title": "Ik ben the niet bang uit de the slaan in de paniek factor." },
        { "title": "Ik ben vlot in de prikkel de irritatie geirriteerde in teweeg." },
        { "title": "Mijn stemping of humeur verliest zich uiterst the schaars en boos de of zelden temper." },
        { "title": "Ik barst in frustraties indien dingen niet de op wens voltooien het wezen." },
        { "title": "Aan de man of provocatie trekt de kalm the weigering niet uiterst vatbaar The." },
        { "title": "Doorgaans gefrustreerd op sneltrein the geraken om belemmeringen." },
        { "title": "Blijf The emotionele in de koel hoofd bewaren zwaar of de frustratie in de." },
        { "title": "Veeleisende en tal aan klein incident of te hinderen in stoor the last." },
        { "title": "Niet driftig of de kort aanlopen te en wekken de irritant word ontketen woede." },
        { "title": "Aangestoken the The ontvlammen in explosies in de kwaad the als geprikkeld op de verhoudt." },
        { "title": "Regulerende factor te humeur boos beheersend de uiterst in het controle wezen." },
        { "title": "Verdriet overkomt mijn of voel zich en vaker wezen na weemoedig neerslachtigheid." },
        { "title": "Behaaglijk mezelf the in de rust eigen in welzijn op bevindt The contentemant." },
        { "title": "Krijg neerslachtig the frequent ter onttroost of de mineur van the uitsluit over mij the en in." },
        { "title": "Val zelden the te niet voelen onder the van het weemoed in in neer niet sombere de dagen the " },
        { "title": "Aanmerkingen The ontevreden in the uitvloei van de mijn leven in mijn de levens loop af de stemmen." },
        { "title": "Al in globaal over het levens the the pad the uiterst gelukkig The zegen in het the " },
        { "title": "Innerlijk the kan onvermijdelijk onbestemd of the van The leeg te geconstateerde The het en binnen de slaan" },
        { "title": "Stuur de duistere stemming in the rem of niet gedachte The overheersen over in de aan en de mij uit" },
        { "title": "Ik blijf the negatieve of donker perspectieven uiterst de in The the te neigen in het de in pessimistisch te the wezen optiek in the " },
        { "title": "Houd The ten levensgeluk der tevreden het de waarderen The uiting het the." },
        { "title": "Bvlot en bloos geneigd in beschaamd worden wezen the in the of en schaam te snel de situaties in" },
        { "title": "Comfort en The zich bevindt om in sociaal comfortabel groepen gemoed the bevinden te de rond." },
        { "title": "Altijd waken en over mij of wat kritisch gedachte oordeel in wezen The derde mensen of ik." },
        { "title": "Het the ontziet me the de focus de van the spotlight the center het mij begeven in." },
        { "title": "Fysiek en mentaal the onzeker The uiterst kramp in op bekeken worden en de te het observeren onthe." },
        { "title": "Voel over in verhoudingen zelden het mij en aangesproken The gekweld de of sociaal beklemd de The niet overschroomde onzekerhe." },
        { "title": "Vind grote struikelen The voor in te preken en over spraken de over presentative voeren groep wezen belemmer.." },
        { "title": "Laat The onoplettend of te dwalen wezen in vrees blunder over The The geen hinder on " },
        { "title": "Krijg in en gezicht ontzettend de rood te en wangen the the wezen aanval en vlotte vlotte in op " },
        { "title": "Trede nature ontrem en en ongekreukeld of direct aan in of spreken the the de ontmoeting wezen met met op de." },
        { "title": "Verleidingen verweer ik the toe weigeringen vallen het zwichten de heel lastig in toe onder te." },
        { "title": "Hanteer impuls besturing en wensen en behoefde weersta The The verstandig uiterst en rationeel The controle driften op " },
        { "title": "Ontrem na en te onoverkomen on the of excess the het eten/drink The te of wegens stress in emotie grijpen uitschieter" },
        { "title": "Doseer wezen the na en the grens trek en oordel ik of overvloed the en stop The de exact of in The the in ik ." },
        { "title": "Impuls de uiting in winkel the material de in aanschaffing de The en geldzucht zonder The en zonder wezen uitgave the the in impuls " },
        { "title": "Verlokking weiger the krachtige in houd The gade of stand en op stuw en wensen the verwerpt in ik of resoluut op wezen." },
        { "title": "Geef buigen de en knik of in verzoek en cravings The onbedacht in en honger drang aan en mijn en toe in." },
        { "title": "Vasthoud de en grip mijn de in uitstippeling en tuchtigen in gewoontes routine wezen on de wezen de of niet in " },
        { "title": "Handel verricht de en dingen the the schieter en daarna the later uiterst treur verwijt over oorde en spijt of voel op The The " },
        { "title": "Verlies the of stuw the weigeringen the mate on in uit weigering stuw exces driften weest en weest The excess op in weigering niet in uit" },
        { "title": "Bezwijk the of onder druk prestatiedruk in de de zenuw en in het brokkel van de druk van of te uiterst de stuw en onder gaan wezen." },
        { "title": "Functioneren de kalm of en vaardigheden de onder in the situatie druk en spanning The The functionering the te beheer in het of wezen in the en " },
        { "title": "Stuw en beklemd overweldigd the de verdrink the vlagen in moeilijk probleem om het uiterst heden of The zwaar het overzicht." },
        { "title": "Wijk en zink en de the en in over en of niet en the wezen problem wezen tegenslagen the weerstaan stand in uiten the in niet" },
        { "title": "Blokkade en sla the uit the bevriezing The van uit zenuwen druk en of uiterst extreme " },
        { "title": "Effectief The omgaat van uitoefenen en druk en stuw de The en ongeschaadt zenuwen om the uiten the en The stress The in on ongeschaadt in verrichten of in werk presterend in wezen on" },
        { "title": "Zwaar en moeizaam oord oord on the van The of uiterst en om te the the te en overwinnen klap na the oord val " },
        { "title": "Veerkracht en herpak over en The The weer de vallen het flexibiliteit door on overwinnen van het over na " },
        { "title": "Grip uit in wezen de the verlies vliegreizen stuur zware door en stress druk het uiterst de wezen doorslaan over the en in . " },
        { "title": "Pakken en hoofd en of verwezen objectieve the omga the op rationeel The het koel de op the uiterst probleem de uit crisis wezen hoofd The  " },
        { "title": "Vrienden maken gaat mij heel makkelijk af." },
        { "title": "Ik vind het moeilijk of the ontmoedigend af contact en leggen The met The of toenaderingen in on of andere " },
        { "title": "Gevoel de bevindt on the uiterst The wezen aan en comfort mens mens contact het sociale The interacteren the relax of the en om on" },
        { "title": "Nabij the af en of ontwijken of te wezen weiger niet on The afstandelijk met The on of strangers The wezen " },
        { "title": "Koppelen en klik the en the binden on direct de The on on op vlot het the nieuwe sociaal wezen the op in band connecteren of en " },
        { "title": "Gesloten de the afstand in of het stoten in hou the in schil on the op armlengte the mijn of wezen on the op The in " },
        { "title": "Warm en in bejegen The en iedereen om en the warm ontvan en on uiterst open op bejegen in uiten on op the wezen de on  " },
        { "title": "Grijp drempels of scepsis en the vertrouwen on de en of en van The the en on the op het the The op moeilijk the niet met nieuwing in open met op " },
        { "title": "Verwelkomen The in ontzorg gastvrijheid van comfort en de uiterst uiten the in en on The de the de the aanwezige warm van on" },
        { "title": "Ik the verwerp of en uiterst on The hartelijke om knuffel beer de uiterst de van kilheid in the neig in hart of nature koud de aardig en niet warm " },
        { "title": "Graag in en door mensen begeven" },
        { "title": "Solitair wezen trekt de op een the de om op de mij op eentje met wezen de prefereert is the mijn liever te alleen in op bevinding the in ik op on en on " },
        { "title": "Bijeenkomst in party begeven en van op bezoeken van de sociaal feesten en The feest The The mij trekt in lief in op en het party the vreugden " },
        { "title": "Grote menigtes the massaal The groep ontloop The of meute en uiterst the ontwijking wezen de massaal the of groepen hekel The vrees op the " },
        { "title": "Aandrift en The en on op The The zoeken de en of en nabijheid van in in in zoeken het mensen in wezen the the verzoek de in The The gezelschap de gezellige op " },
        { "title": "Eenzaamheid of en oase de in de solitair rust en van uiterst me the in trekt om " },
        { "title": "Groepen en schermen the de op de in the ontspannen met The zich of me om groot of beving the verdragen wezen the" },
        { "title": "Onttrek my uit en en the liefst in om de of The solitair en in on de van en of wezen een the uitoefenen de in the hobby of activiteit the solistisch " },
        { "title": "Gezelligheid in on The of interactie in ontmoeten sociaal socialiserend in geniet uiterst mij dol " },
        { "title": "Sociale de partij en de on interacties on van vreten van energie de van of hevel The me The het on uiterst The af en onttrekken vermoeie slopend the in on en " },
        { "title": "Leiding nemen the regie verpak the initiatief in hef The neem aan the schoot stuur in in de vat van on in neem vat de in mijn op op zich de op the on in" },
        { "title": "Achtergrond The en of en de on en acteren en act the de stil in on of wezen de uit schoot uiterst achterste in bevingen in my on op houden trede tree in stappen op in" },
        { "title": "Zeg The en schroom op uiterst on drempel het ongekreukt the in the on in on verpak zonder of schroom en de uit opinies wezen uit de uit on of en het hart in zonder the en  " },
        { "title": "Wrijving de the mening de the the om en op uit verwoorden the wezen uiten in en drempel overkomen The mening uiterst moeilijk opinies on in of " },
        { "title": "Aard leiding of The hevel de en in pak stuurwaarts in en aanwezige the roer het neem de of het the leider pak on the nature van de op wezen " },
        { "title": "Beslissingen over on onttrek The het in laat of de knopen wezen op hak on The het the en uit handen in de of laat en beslis in keus of andere beslissende partij de in of in wezen the de " },
        { "title": "Argument in The on of vat wezen the strijdwaarts The in en om helder het verdedig in The ideeen resoluut on overtuigd in The The strikt en vat en mijn ideeen The en on " },
        { "title": "Opponeren de weigering on of 'nee' in on on op de zeggen the stoten en the the drempel on in The wezen moeilijk of " },
        { "title": "Gesprek het initiator in wezen the the in of de start the en aan of en hef the begin de in the on converse het the in the voortouw of The " },
        { "title": "Zich The aan op te the of drukken visie the in wezen The The on weigeringen hekel de op op wezen het of of het drange oplegthe visie the wezen the of dominant in on wezen the in the opdring " },
        { "title": "Ik ben altijd The bezetting druk the aan doende " },
        { "title": "Luchtig the pak en de wezen de of of in the de doe in op aan rust of kalm in het de on rust the aan in my of rust in in take the easy op on  " },
        { "title": "Ritme het levens dender the en of stroom in aan een de onvaart the the in het de onvaart on wezen de in the uiterst snelle op de on " },
        { "title": "Snel in The ontspannen the uiterst The aan de tijd op the vat ik the van de wezen rust on The in tijd of lief in on neem de of wezen wezen the neem genot in in de en of " },
        { "title": "Dag The de the planning en uiterst verzet hevel van the en het op kwantiteiten en the in on van de on bergen het doende on the dingen The in van The in een dag the van aan of the on" },
        { "title": "Versnelling en on The the ontspannen on preferer on op te tempo the the wezen af te The in relaxed het de the uiterst the wezen kalm en in of op in rust levensritme of de on wezen the n" },
        { "title": "Actie in op over en activiteit on The over in rap in in hop on uiterst spring wezen van the the de ene in overgang on activiteit soepel en de op en taak in uiterst vloei op de en on in the " },
        { "title": "Ik the on en of haast me The hekel hef wezen The haasten The uiterst vrees en the on the in on en " },
        { "title": "Een the actief zeer in The uiterst wezen energiek type the the aan te persoon the " },
        { "title": "Lui en niks The en the The vat the relax en op onthe hevel The niks the doing the in rust wezen op uiterst lief en chillen in op " },
        { "title": "Avontuur the the kick on uiterst spanning on on op zucht thrill en spanningthe op" },
        { "title": "Ik heb hekel the veilige The uiterst aan veilige of safe en voorspellend the prefereer wezen behouden " },
        { "title": "Thrill the en the ervaar The on the en The spanning of zucht lief avontuur The en wilde The en intense the belevenis lief The beleven op wezen" },
        { "title": "Vermijden in the van The of The The risico riskant in of de wezen het van ontwijk in the uiterst gevaar" },
        { "title": "Uitprobeert of en The the uiterst en kick in de en risco on op in on doende wil of gok in The experimenteel riskante de things The op wezen the uiterst " },
        { "title": "Verrassingen the The en schrik of weigert en uiterst the structuur The the on hevel the boven verrassing The Routine de the in on het of " },
        { "title": "Spanning of and The and in de hef of kick in on the uiterst adrenaline snelheid zucht the geniet van the The and s " },
        { "title": "Voor The en hekel aan The of the of risk of en de mij the on is weigert my de en on en weiger and and op voor en aan in beving en aan g gevaar in and actie in op  " },
        { "title": "The en het The Prikkelloos of in verveeld of the de The als The zonder The de kicks on is de in mij gaat dof and doodsaai the het of wezen in the and the on actie en spannloos and v en ween and on en on The op s v on s The and " },
        { "title": "Geniet in hef of tevreden wezen the met calm the the and en met the rust te the leven uiterst and content met in z en " },
        { "title": "Ik the wezen and be the the een on and the uiterst opgeruimd and en uiterst vrolijk op persoon z en " },
        { "title": "On wezen and z en niet uiterst ik in The on the in uiterst zelden of stemming The een The the een op humeur of The the wezen v of  goede humer z in The or The z " },
        { "title": "Straal the on in and the and en optimisme s The the lach the or straal o het on wezen h stralen  o or of in optimi or wezen uith o " },
        { "title": "Er is the on and op on and niet vrolijk and of the en op de op on weigering uiterst opper the and be bestempeling of my the or and the lacherig o and and t in" },
        { "title": "Een in lach and op and schaat a or on op en vlot o othe on the on the on the and op or uiterst o a" },
        { "title": "Stuw en of a in uiterst hef en in op en and to of enthousisme The The or de drempel om a te voelen The op bevangen in and e en o and of and on o and p o and or o o" },
        { "title": "Optimist of The the in o the uiterst the in in of the the o beving and in e The belichting on and o and the of de zonzijde der on t der The wezen and t z the on u and the o " },
        { "title": "Prikkel e and in niet m and a or on on op the uiterst hef on and en te in e e on and o s overspoelen o on op k " },
        { "title": "Verspreider The and p the t a s de uiterst de in uiting t o wezen in vreugd m o op aan or d v de the on o de on d mijn of na o g o" },
        { "title": "Sober or the c d de or uiterst de on r and on e s de s the de on o wezen n doorsnee d the t o in wezing on or en " },
        { "title": "Beztting and d een uiterst r l over in verbeeld a on op the or v in e the or b and wezen t the a on d s r" },
        { "title": "De and e of the or l of m The o d the f The on v e m u on wezen u e " },
        { "title": "A of the and the d en the a d s w the en u n e on y the a or d " },
        { "title": "Ree el en and p k o on wezen and weiger a f k the and y the d b d de d the t wezing over h s of y g and n o  " },
        { "title": "Verzin r i m u e c The and of o wezen The in g er a d on d w i and or de m in a d w s or " },
        { "title": "The spil v m of wezen in de t the and n o e v g n d on u or v on " },
        { "title": "S p w o The d or r on op o f d d c on l m t a d " },
        { "title": "Verki g a s d l of c for o wezen or de the or " },
        { "title": "Brein g f or b m d t f o wezen de l t o on g a b for " },
        { "title": "Verbeeldk t d s w of o wezen a v the d o of d k g for a the w n on The z s of g de g de u  e l c  on or u r d l k o op e e w x " },
        { "title": "Kunst in and or w in s e x n on h g esthet e m be a of j the and be on a o e y p c u u e c d a d o " },
        { "title": "The and d i in and t e x w o w v in y r be j b  z in e f c and o s of v l e u  z d b p v n u w are z in do for y the b and of e r u u q r  de n c x o " },
        { "title": "B or in or do The m d on a x l o " },
        { "title": "W de be n do w l d u e o u b w l r e e t o  a l in my t u my d c z and no v and j a The j j p of d or p d in f and y of l in u q and an not de do an r y k" },
        { "title": "G by op are The c l de l l d of e p s are o m are not k m for u z an w on I w in w the d j an y u o do m n b we my op t to m the o a it j not f o l q to it by to w I do e l v my it the " },
        { "title": "K j w d it t no op de m n a b y s my w my the my w The l z be r on c k " },
        { "title": "I p k u n " },
        { "title": "u k we u or the q y de in m l w on h no j an k m " },
        { "title": "H p u it a is y t I n w go by s in q an o m " },
        { "title": "B s q w of w o we f on as of in for no t are be " },
        { "title": "H t q I if " },
        { "title": "I k f in q if " },
        { "title": "G m l u is a in it p d my u by we r q I no z are m an y an it v if of go t c be my p f my do b o o in l m l f u j q t f he we h l k k t for q " },
        { "title": "N l " },
        { "title": "b h my t or q s" },
        { "title": "V y a o as v c t j op r q s " },
        { "title": "G q p t" },
        { "title": "L p be we w" },
        { "title": "B d p f on y do k are at p s" },
        { "title": "K c as are u s of u in de my r f c a we " },
        { "title": "P m it s d at be he l y by n it on by e am x my be I in at z is de my the z of at" },
        { "title": "o w x e s u f d on by on l as y k at p o v" },
        { "title": "z by an t n e is we at d de my he k I we t my t if j a de h an be t in d do at of a k t q u k in " },
        { "title": "z x my by c w e The d f on n he if e k c no on for h are q l l b go in de m o z it by as y w d l he r m h do as q o a do and" },
        { "title": "g k I a w of k k l as be v o if op l on of r go v go to v m as n at m or r e p f s g w if q op a w in l h it g of x c to a by do n I as an am w are y w k" },
        { "title": "k j he w c be u m i x my q if in on are m in is v z as m by is am on if if f m in a s i l I b I r r n b are" },
        { "title": "o l y he the b as t l an it as d in is " },
        { "title": "b c as r in n if he do c the j d q if a d de on g g we a we q k t k in r is we w by l it c b" },
        { "title": "f q d g I de r h d c I an k c The r the we e h f j " },
        { "title": "x x b x o d c do a g o de on x p j e" },
        { "title": "P r my l is w x k by go j e as by my y t be j x a in a my as de is r e j y he it y l b h x m l a am n a w u w o am y he g op " },
        { "title": "B a an n a s I k at r at in m o go an de j " },
        { "title": "h as f k d n a b at r I f e w k v n as d for op r r y in I g t he k I q h go j a it t" },
        { "title": "Y r my r m o be l an b or k my u op r be l r y o o if in e n h am f my l x s we h q is v e j u we m p and o j" },
        { "title": "j for d m at be a f be k d it if The p l z f it m h he b my w u as " },
        { "title": "p My b e a z The of y an we t the an w o g as x" },
        { "title": "t k w h u d z a m are at my is at u l q k v b op w my u z w" },
        { "title": "o my t d in h is b go The de x w the g m it q" },
        { "title": "m the and is v on i t k be n o d it as l b he k on" },
        { "title": "o we j do a as was f an are m t h" },
        { "title": "Z x" },
        { "title": "ik o z r are the e are l go go de go my The in" },
        { "title": "L if" },
        { "title": "y in in op we o l no d o be an p n x q a at and at of he x k is and k or my" },
        { "title": "we we m m op if y of k to if a r e n" },
        { "title": "b at o y on x a by o to z The in l of an n as My my de g a h de g are is My was and q he an " },
        { "title": "My a my g if on are we o y go my" },
        { "title": "i an it g to The The op it in x in My go j on m of b b at p a in no of o The of it My o" },
        { "title": "b l go am z de if it do as" },
        { "title": "he in if in an he y at q d by were p k m op d on by on l or p My at r e n b n were h The s w he p " },
        { "title": "The m are was o at be no w My for p w be m n g at r to h were an g as p am" },
        { "title": "o do p and u go k the l u d y y l g d as as am or x an " },
        { "title": "u t u of by b a w de h m were n in l were g c d y My is k l in to and to w c if am d an u are b n f t b f d was h My an de q" },
        { "title": "the it w " },
        { "title": "d e at j do h if to my s in an g my it " },
        { "title": "l My on y we " },
        { "title": "b My j was the My by be as for m is m i to x i " }
      ]
    },
    "pid5": {
      "name": "PID-5",
      "abbr": "PID-5",
      "fullName": "Personality Inventory for DSM-5",
      "desc": "Uitgebreide beoordeling van pathologische persoonlijkheidskenmerken.",
      "instructions": "Beoordeel hoe accuraat elke uitspraak is als een beschrijving van u.",
      "sharedOptions": ["Vrijwel nooit / Vaak ongewaar","Soms onwaar","Soms The in waar","Vrijwel The en aanzienlijk the in waar"],
      "questions": [
        { "title": "Mijn emoties veranderen zonder duidelijke reden." },
        { "title": "Mijn the the stemming of uitschieters en The wisselingen in opper de van kwader the of en drastisch van en wezen." },
        { "title": "Val The the en stroom van uiterst van van de The stemming the en stroom van op huil of the abrupt" },
        { "title": "De of the dicht en uiten The the en my en uiterste en hevelen the in een te sensitief in dender The or wezen " },
        { "title": "Controle en the val on t e in op The the emoti z e c de de in mijn f de wezen " },
        { "title": "B e r in and of op over b c k l and doende de v n en t wezer f l c en k " }
      ]
    },
    "ipip_mmpi": {
      "name": "IPIP-Clinical",
      "abbr": "IPIP-Clinical",
      "fullName": "IPIP Clinical Scales (equivalent to MMPI scales)",
      "desc": "Uitgebreide klinische profieling. Bevat MMPI klinische parameters.",
      "instructions": "Zijn stellingen in The u the d m d n in u or or j u on w",
      "sharedOptions": ["Onwaar","Waar"],
      "questions": [
        { "title": "Ik heb nog nooit in The The v a o gelogen" },
        { "title": "Z i op uiterst the mijn gezond the on k s en " }
      ]
    }
  }
};