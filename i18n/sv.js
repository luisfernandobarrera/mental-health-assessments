const LANG_SV = {
  "ui": {
    "appTitle": "Bedömningar av mental hälsa",
    "appSubtitle": "Psykologiska självskattningsverktyg",
    "tabTests": "Tester",
    "tabHistory": "Historik",
    "welcome": "Välkommen. Välj en bedömning för att börja.",
    "startTest": "Starta test",
    "nextQuestion": "Nästa",
    "prevQuestion": "Föregående",
    "viewResults": "Visa resultat",
    "question": "Fråga",
    "of": "av",
    "items": "frågor",
    "backToTests": "Tillbaka till tester",
    "repeatTest": "Gör om test",
    "viewHistory": "Visa historik",
    "otherTests": "Andra tester",
    "detailByItem": "Detaljer per fråga",
    "helpResources": "Hjälpresurser",
    "helpText": "Om du går igenom en emotionell kris, sök professionell hjälp. Självmordslinjen: 90101 (Sverige) eller kontakta en läkare/psykiatriker.",
    "disclaimerTitle": "Viktig information:",
    "disclaimerText": "Detta test är ett självskattningsverktyg och ersätter inte en diagnos från vårdpersonal. Om du känner att du behöver hjälp, vänligen kontakta en specialist.",
    "privacyTitle": "Din integritet:",
    "privacyText": "Dina resultat sparas endast i din webbläsare (localStorage). Inga uppgifter skickas till någon server eller lämnar din dator.",
    "cat_triage": "Var ska man börja?",
    "cat_clinical": "Kliniska bedömningar",
    "cat_screening": "Screening & Detektion",
    "cat_wellbeing": "Välbefinnande & Självkänsla",
    "cat_personality": "Personlighet",
    "cat_crisis": "Kris & Risk",
    "cat_advanced": "Avancerad bedömning",
    "noRecords": "Inga sparade poster.",
    "completeFirst": "Gör minst ett test för att se historiken.",
    "goToTests": "Gå till tester",
    "trend": "Trend",
    "all": "Alla",
    "clearHistory": "Rensa historik",
    "clearConfirm": "Är du säker på att du vill rensa all historik? Denna åtgärd kan inte ångras.",
    "score": "Poäng",
    "outOf": "av",
    "disclaimer": "Detta verktyg är endast avsett som information och ersätter inte en professionell utvärdering. Rådgör med vårdpersonal för att få en korrekt diagnos.",
    "resumePrompt": "Du har ett pågående test",
    "continueTest": "Fortsätt test",
    "resumeMessage": "Du håller på med testet {test} ({n}/{total} frågor besvarade)",
    "dismiss": "Stäng",
    "questionsAnswered": "besvarade frågor",
    "inProgress": "Pågår",
    "testBy": "Tester",
    "recommendedTests": "Rekommenderade bedömningar",
    "highPriority": "Hög prioritet",
    "recommended": "Rekommenderad",
    "suggested": "Föreslagen",
    "areasEvaluated": "Utvärderade områden",
    "kbSelect": "välj",
    "kbBrowse": "bläddra",
    "kbConfirm": "bekräfta",
    "kbPrevNext": "föreg/nästa",
    "suggestedRetake": "Föreslås att göras om",
    "triageRecommended": "Rekommenderas utifrån din inledande bedömning",
    "retakeReason": "Gjordes senast"
  },
  "scales": {
    "agreement5": ["Instämmer inte alls","Instämmer inte","Varken instämmer eller instämmer inte","Instämmer","Instämmer helt"],
    "frequency4": ["Inte alls","Flera dagar","Mer än hälften av dagarna","Nästan varje dag"],
    "frequency5": ["Aldrig","Nästan aldrig","Ibland","Ganska ofta","Mycket ofta"],
    "severity4": ["Inte alls","Lindrigt","Måttligt","Svårt"],
    "severity5": ["Inte alls","Lite","Måttligt","Ganska mycket","Extremt"],
    "yesNo": ["Nej","Ja"]
  },
  "tests": {
    "bdi": {
      "name": "BDI-II",
      "abbr": "BDI-II",
      "fullName": "Beck Depression Inventory-II",
      "desc": "Bedömer förekomst och svårighetsgrad av depressiva symtom under de senaste två veckorna.",
      "instructions": "Läs varje grupp av påståenden noggrant och välj det som bäst beskriver hur du har känt dig under de senaste två veckorna, inklusive idag.",
      "questions": [
        {
          "title": "Nedstämdhet",
          "options": [
            "Jag känner mig inte nedstämd.",
            "Jag känner mig ledsen och nedstämd för det mesta.",
            "Jag känner mig hela tiden ledsen och kan inte komma ur det.",
            "Jag är så ledsen och olycklig att jag inte står ut."
          ]
        },
        {
          "title": "Pessimism",
          "options": [
            "Jag ser inte särskilt pessimistiskt eller uppgivet på framtiden.",
            "Jag känner mig mer uppgiven inför framtiden än jag brukar.",
            "Jag känner att jag inte har något att se fram emot.",
            "Jag känner att min framtid är hopplös och att det bara kommer att bli sämre."
          ]
        },
        {
          "title": "Känsla av misslyckande",
          "options": [
            "Jag känner mig inte som misslyckad.",
            "Jag tycker att jag har misslyckats mer än vad jag borde ha gjort.",
            "När jag ser tillbaka på mitt liv ser jag en massa misslyckanden.",
            "Jag känner mig som en totalt misslyckad människa."
          ]
        },
        {
          "title": "Förlust av njutning",
          "options": [
            "Jag får ut lika mycket glädje av det jag brukar gilla som jag gjorde förr.",
            "Jag njuter inte av saker lika mycket som förr.",
            "Jag får väldigt lite glädje av det som jag förr tyckte om.",
            "Jag kan inte alls njuta av de saker som jag tidigare tyckte om."
          ]
        },
        {
          "title": "Skuldkänslor",
          "options": [
            "Jag känner mig inte särskilt skyldig till saker och ting.",
            "Jag känner mig skyldig till en del saker jag har gjort eller borde ha gjort.",
            "Jag känner mig ganska skyldig för det mesta.",
            "Jag har ständiga skuldkänslor."
          ]
        },
        {
          "title": "Straffkänslor",
          "options": [
            "Jag känner mig inte straffad.",
            "Jag känner att jag kan bli straffad.",
            "Jag förväntar mig att bli straffad.",
            "Jag känner mig straffad."
          ]
        },
        {
          "title": "Självförakt",
          "options": [
            "Jag känner ungefär som jag brukar för mig själv.",
            "Jag har förlorat tron på mig själv.",
            "Jag är besviken på mig själv.",
            "Jag ogillar mig själv."
          ]
        },
        {
          "title": "Självkritik",
          "options": [
            "Jag kritiserar eller klandrar inte mig själv mer än vanligt.",
            "Jag är mer kritisk mot mig själv än jag brukade vara.",
            "Jag kritiserar mig själv för allt som går fel.",
            "Jag klandrar mig själv för allt ont som händer."
          ]
        },
        {
          "title": "Självmordstankar eller önskningar",
          "options": [
            "Jag har inga tankar på att ta livet av mig.",
            "Jag har tankar på att ta livet av mig men jag skulle inte göra det.",
            "Jag skulle vilja ta livet av mig.",
            "Jag skulle ta livet av mig om jag fick chansen."
          ]
        },
        {
          "title": "Gråt",
          "options": [
            "Jag gråter inte mer än jag brukar.",
            "Jag gråter mer nu än jag gjort tidigare.",
            "Jag gråter för minsta lilla sak.",
            "Jag känner för att gråta, men jag kan inte det längre."
          ]
        },
        {
          "title": "Agitation",
          "options": [
            "Jag känner mig inte mer rastlös eller uppskruvad än vanligt.",
            "Jag känner mig mer rastlös eller uppskruvad än vanligt.",
            "Jag är så rastlös eller orolig att det är svårt att sitta still.",
            "Jag är så rastlös eller upprörd att jag måste röra på mig eller göra något hela tiden."
          ]
        },
        {
          "title": "Förlorat intresse",
          "options": [
            "Jag har inte förlorat intresset för andra människor eller aktiviteter.",
            "Jag är mindre intresserad av andra människor eller saker än tidigare.",
            "Jag har nästan helt tappat intresset för andra människor eller saker.",
            "Det är svårt att intressera sig för något alls."
          ]
        },
        {
          "title": "Obeslutsamhet",
          "options": [
            "Jag har lika lätt för att fatta beslut som förr.",
            "Det känns svårare för mig att besluta mig nu än förr.",
            "Jag har mycket svårare att fatta beslut i jämförelse med andra.",
            "Jag har problem att överhuvudtaget fatta några beslut."
          ]
        },
        {
          "title": "Känsla av värdelöshet",
          "options": [
            "Jag känner mig inte värdelös.",
            "Jag betraktar mig inte som lika värdefull och användbar som jag brukat göra.",
            "Jag känner mig mindre värd som människa jämfört med andra.",
            "Jag känner mig totalt värdelös."
          ]
        },
        {
          "title": "Energiförlust",
          "options": [
            "Jag har lika mycket energi som förr.",
            "Jag har mindre energi än vad jag brukar ha.",
            "Jag har inte tillräckligt med energi för att göra väldigt mycket.",
            "Jag har inte energi till att göra någonting."
          ]
        },
        {
          "title": "Förändringar i sömnmönster",
          "options": [
            "Jag har inte märkt någon förändring av min sömn.",
            "Jag sover antingen något mer eller något mindre än vanligt.",
            "Jag sover mycket mer eller mycket mindre än vanligt.",
            "Jag sover större delen av dagen, eller vaknar 1-2 timmar för tidigt och kan inte somna om."
          ]
        },
        {
          "title": "Irritabilitet",
          "options": [
            "Jag känner mig inte mer irriterad än vanligt.",
            "Jag är mer irriterad än vad jag brukar vara.",
            "Jag är mycket mer irriterad än jag brukar vara.",
            "Jag är irriterad hela tiden."
          ]
        },
        {
          "title": "Förändrad aptit",
          "options": [
            "Min aptit är sig lik.",
            "Min aptit är antingen något sämre eller något större än vanligt.",
            "Min aptit är mycket sämre eller mycket större än vanligt.",
            "Jag har ingen matlust överhuvudtaget, eller så är jag sugen på mat hela tiden."
          ]
        },
        {
          "title": "Koncentrationssvårigheter",
          "options": [
            "Jag kan koncentrera mig lika bra som förr.",
            "Jag kan inte koncentrera mig lika bra som förr.",
            "Det är svårt för mig att hålla tankarna på något särskilt någon längre stund.",
            "Jag tycker inte alls jag kan koncentrera mig framför något längre."
          ]
        },
        {
          "title": "Trötthet",
          "options": [
            "Jag känner mig inte mer trött eller utmattad än förr.",
            "Jag känner mig tröttare eller blir fortare utmattad än förr.",
            "Jag är för trött eller utmattad för att göra en hel del av det jag brukade göra.",
            "Jag är för trött eller utmattad för att göra ens de allra nödvändigaste sakerna."
          ]
        },
        {
          "title": "Förlorat intresse för sex",
          "options": [
            "Jag har inte märkt någon förändring alls när det gäller att sakna intresse för sex.",
            "Jag är mindre intresserad av sex.",
            "Jag har förlorat en hel del av mitt intresse för sex.",
            "Jag har totalt förlorat mitt intresse för sex."
          ]
        }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Din poäng tyder på en minimal nivå av depression. Det är normalt med emotionella upp- och nedgångar." },
        "mild": { "label": "Lindrig", "desc": "Din poäng tyder på lindriga depressiva symtom. Överväg att prata med någon om det om det håller i sig." },
        "moderate": { "label": "Måttlig", "desc": "Din poäng tyder på måttliga depressiva symtom. Det rekommenderas att du kontaktar vården för rådgivning." },
        "severe": { "label": "Svår", "desc": "Din poäng tyder på svåra depressiva symtom. Det är viktigt att du söker professionell hjälp så snart som möjligt." }
      }
    },
    "bai": {
      "name": "BAI",
      "abbr": "BAI",
      "fullName": "Beck Anxiety Inventory",
      "desc": "Bedömer svårighetsgraden av ångestsymtom under den senaste veckan.",
      "instructions": "Ange hur mycket varje symtom har stört dig under den senaste veckan, inklusive idag.",
      "questions": [
        { "title": "Domningar eller stickningar" },
        { "title": "Värmekänsla" },
        { "title": "Svaghet i benen" },
        { "title": "Oförmögen att slappna av" },
        { "title": "Rädsla att det värsta ska hända" },
        { "title": "Yr yr eller vimmelkantig" },
        { "title": "Hjärtklappning eller snabb puls" },
        { "title": "Ostadighetskänsla" },
        { "title": "Skräckfylld eller rädd" },
        { "title": "Nervös" },
        { "title": "Kvävningskänsla" },
        { "title": "Darrhänt" },
        { "title": "Skakig eller darrig" },
        { "title": "Rädd att förlora kontrollen" },
        { "title": "Andningssvårigheter" },
        { "title": "Dödsångest" },
        { "title": "Rädd" },
        { "title": "Matsmältningsbesvär" },
        { "title": "Svimningskänsla eller yrsel" },
        { "title": "Ansiktsrodnad" },
        { "title": "Svettningar (varma eller kalla)" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Din poäng tyder på en minimal nivå av ångest." },
        "mild": { "label": "Lindrig", "desc": "Din poäng tyder på lindrig ångest. Ha koll på dina symtom." },
        "moderate": { "label": "Måttlig", "desc": "Din poäng tyder på måttlig ångest. Överväg att kontakta vården." },
        "severe": { "label": "Svår", "desc": "Din poäng tyder på svår ångest. Det rekommenderas starkt att söka professionell hjälp." }
      }
    },
    "gad7": {
      "name": "GAD-7",
      "abbr": "GAD-7",
      "fullName": "Generalized Anxiety Disorder-7",
      "desc": "Bedömer svårighetsgraden av generaliserad ångest under de senaste två veckorna.",
      "instructions": "Under de senaste 2 veckorna, hur ofta har du besvärats av följande problem?",
      "questions": [
        { "title": "Känt dig nervös, orolig eller på helspänn" },
        { "title": "Inte kunnat låta bli att ängslas eller inte kunnat kontrollera oron" },
        { "title": "Ängslats för mycket över olika saker" },
        { "title": "Haft svårt för att koppla av" },
        { "title": "Varit så rastlös att det är svårt att sitta still" },
        { "title": "Blivit lätt irriterad eller störd" },
        { "title": "Känt dig rädd, som om något hemskt skulle kunna hända" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Din poäng tyder på en minimal nivå av ångest." },
        "mild": { "label": "Lindrig", "desc": "Din poäng tyder på lindrig ångest." },
        "moderate": { "label": "Måttlig", "desc": "Din poäng tyder på måttlig ångest. Överväg att kontakta vården." },
        "severe": { "label": "Svår", "desc": "Din poäng tyder på svår ångest. Att söka professionell hjälp rekommenderas." }
      }
    },
    "msibpd": {
      "name": "MSI-BPD",
      "abbr": "MSI-BPD",
      "fullName": "McLean Screening Instrument for Borderline Personality Disorder",
      "desc": "Screeningsverktyg för drag som ofta förknippas med borderline personlighetssyndrom.",
      "instructions": "Svara ja eller nej på vart och ett av följande påståenden.",
      "questions": [
        { "title": "Har du någonsin avsiktligt skurit dig, bränt dig eller skadat dig själv på annat sätt med vilje?" },
        { "title": "Har du någonsin gjort ett självmordsförsök?" },
        { "title": "Har du haft minst två relationer (eller försök till relationer) som varit väldigt intensiva men instabila?" },
        { "title": "Förändras din uppfattning om vem du är ofta dramatiskt?" },
        { "title": "Växlar ditt humör ofta plötsligt?" },
        { "title": "Känner du ofta en intensiv ilska som är svår att kontrollera?" },
        { "title": "Har du ofta en misstro mot andra människor?" },
        { "title": "Känner du ofta en känsla av overklighet, eller att saker omkring dig känns overkliga?" },
        { "title": "Känner du dig ofta tom?" },
        { "title": "Gör du ofta desperata försök att förhindra att du blir övergiven av någon?" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Din poäng tyder på en låg förekomst av drag förknippade med borderline personlighetssyndrom." },
        "moderate": {
          "label": "Måttlig",
          "desc": "Din poäng tyder på vissa drag förknippade med borderline personlighetssyndrom. Överväg att konsultera vården."
        },
        "severe": {
          "label": "Betydande",
          "desc": "Din poäng tyder på en betydande förekomst av borderline-drag. En omfattande professionell utvärdering rekommenderas."
        }
      }
    },
    "pss": {
      "name": "PSS-10",
      "abbr": "PSS-10",
      "fullName": "Perceived Stress Scale-10",
      "desc": "Mäter till vilken grad upplevelser i livet bedömts som stressande den senaste månaden.",
      "instructions": "Följande frågor handlar om dina känslor och tankar under den senaste månaden. Ange hur ofta du känt eller tänkt på ett visst sätt.",
      "questions": [
        { "title": "Hur ofta har du blivit upprörd över något som har hänt oväntat?" },
        { "title": "Hur ofta har du tyckt det var omöjligt att kontrollera de viktiga sakerna i ditt liv?" },
        { "title": "Hur ofta har du känt dig nervös och stressad?" },
        { "title": "Hur ofta har du lyckats hantera de irritationer som uppstår i din vardag?" },
        { "title": "Hur ofta har du känt att du framgångsrikt klarat av de viktiga förändringar som skett i ditt liv?" },
        { "title": "Hur ofta har du känt dig säker på din förmåga att klara av dina personliga problem?" },
        { "title": "Hur ofta har du tyckt att saker i stort sett gått din väg?" },
        { "title": "Hur ofta har du tyckt att du inte klarade av att hinna med allt du hade att göra?" },
        { "title": "Hur ofta har du kunnat ha kontroll över irritationerna i ditt liv?" },
        { "title": "Hur ofta har du känt att du har haft läget under kontroll?" }
      ],
      "results": {
        "minimal": { "label": "Låg", "desc": "Din upplevda stressnivå är låg. Fortsätt med dina nuvarande strategier." },
        "moderate": { "label": "Måttlig", "desc": "Din upplevda stressnivå är måttlig. Överväg att lägga till tekniker för stresshantering." },
        "severe": { "label": "Hög", "desc": "Din upplevda stressnivå är hög. Det rekommenderas att du söker professionellt stöd samt använder dig av tekniker för stressreducering." }
      }
    },
    "asrs": {
      "name": "ASRS v1.1",
      "abbr": "ASRS-v1.1",
      "fullName": "Adult ADHD Self-Report Scale v1.1",
      "desc": "Screeningsverktyg för symtom på ADHD hos vuxna.",
      "instructions": "Svara på följande frågor och tänk på hur du har känt och betett dig under de senaste 6 månaderna.",
      "questions": [
        { "title": "Hur ofta har du svårt för att avsluta de sista detaljerna i ett projekt, när de mest krävande momenten avklarats?" },
        { "title": "Hur ofta har du svårt att få ordning på saker och ting, när du utför en uppgift som kräver organisation?" },
        { "title": "Hur ofta har du problem med att komma ihåg avtalade möten och åtaganden?" },
        { "title": "När du står inför en uppgift som kräver mycket tankemöda, hur ofta undviker du eller skjuter du på att ta tag i saken?" },
        { "title": "Hur ofta plockar du med saker med händerna eller rör på fötterna när du är tvungen att sitta en längre stund?" },
        { "title": "Hur ofta känner du dig överdrivet aktiv och tvungen att göra saker, som om du ginge på högvarv?" }
      ],
      "results": {
        "minimal": { "label": "Osannolik", "desc": "Din poäng tyder på låg sannolikhet för ADHD." },
        "moderate": { "label": "Möjlig", "desc": "Din poäng pekar på en del symtom som stämmer överens med ADHD. Överväg en professionell utvärdering." },
        "severe": { "label": "Trolig", "desc": "Din poäng tyder på en stark sannolikhet för ADHD-symtom. En omfattande professionell utvärdering rekommenderas." }
      }
    },
    "ocir": {
      "name": "OCI-R",
      "abbr": "OCI-R",
      "fullName": "Obsessive-Compulsive Inventory-Revised",
      "desc": "Bedömer symtom på tvångssyndrom (OCD).",
      "instructions": "Följande påståenden gäller erfarenheter som många har i vardagslivet. Kryssa för det alternativ som bäst stämmer in på hur ofta de har stört dig den senaste månaden.",
      "questions": [
        { "title": "Jag har sparat på mig så många saker att de utgör ett hinder/är i vägen" },
        { "title": "Jag kontrollerar saker oftare än som är nödvändigt" },
        { "title": "Jag blir oroad/störd om föremål inte ligger/står i den ordning de ska" },
        { "title": "Jag känner mig tvingad att räkna samtidigt som jag utför saker" },
        { "title": "Jag upplever det obehagligt att röra vid ett föremål när jag vet att det vidrörts av främlingar eller av vissa personer" },
        { "title": "Jag upplever att det är svårt att styra mina tankar" },
        { "title": "Jag samlar på saker som jag inte behöver" },
        { "title": "Jag kontrollerar dörrar, fönster, lådor m.m. om och om igen" },
        { "title": "Jag känner mig oroad/störd om andra flyttat på de föremål som jag ställt/lagt i ordning" },
        { "title": "Jag känner att jag måste repetera vissa tal/siffror" },
        { "title": "Jag tvättar mig enbart beroende på att jag känner mig smutsig/smittad" },
        { "title": "Jag mår dåligt av otrevliga tankar som hela tiden oofrivilligt inkräktar i min hjärna" },
        { "title": "Jag är tveksam till att kasta bort föremål eftersom jag kanske kommer att behöva dem senare" },
        { "title": "Jag prövar upprepade gånger gas- och vattenkranar och kontakter efter att ha slagit av dem" },
        { "title": "Jag behöver ställa föremål på ett särskilt sätt/i en särskild ordning" },
        { "title": "Jag känner att somliga tal/siffror bär med sig tur och andra otur" },
        { "title": "Jag tvättar mina händer oftare och länge än som egentligen är nödvändigt" },
        { "title": "Jag får ofta in tråkiga tankar i huvudet och jag har svårt för att bli kvitt dem" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Din poäng tyder på minimal nivå av tvångssymtom." },
        "moderate": { "label": "Måttlig", "desc": "Din poäng tyder på måttliga tvångssymtom. Överväg professionell rådgivning." },
        "severe": { "label": "Betydande", "desc": "Din poäng tyder på betydande tvångssymtom. En professionell utvärdering rekommenderas." }
      }
    },
    "pcl5": {
      "name": "PCL-5",
      "abbr": "PCL-5",
      "fullName": "PTSD Checklist for DSM-5",
      "desc": "Bedömer symtom på posttraumatiskt stressyndrom under den senaste månaden.",
      "instructions": "Nedan finns en lista över problem som människor ibland upplever som reaktion på en mycket påfrestande eller svår händelse. Ange i hur hög grad du har besvärats av detta under den senaste månaden.",
      "questions": [
        { "title": "Upprepade, störande och oönskade minnen från händelsen" },
        { "title": "Upprepade, störande drömmar om händelsen" },
        { "title": "Plötsligt ha upplevt eller betett dig som om händelsen upprepades på nytt (flashbacks)" },
        { "title": "Att du känt dig känslomässigt väldigt upprörd när något påmint dig om händelsen" },
        { "title": "Att du haft starka kroppsliga reaktioner när något påmint dig om händelsen (t.ex. hjärtklappning, svårt att andas, svettningar)" },
        { "title": "Att du undvikit minnen, tankar, eller känslor som handlade om händelsen" },
        { "title": "Att du undvikit sådant som kunde påminna dig om händelsen (t.ex. människor, platser, samtal, aktiviteter, föremål eller situationer)" },
        { "title": "Att du haft svårt att minnas viktiga delar av händelsen" },
        { "title": "Att du haft starka, övervägande negativa uppfattningar om dig själv, andra eller världen i stort" },
        { "title": "Att du anklagat dig själv eller andra starkt för händelsen eller det som hände efteråt" },
        { "title": "Att du haft starka och negativa känslor (t.ex. rädsla, skräck, ilska, skuld eller skam)" },
        { "title": "Att du till stor del tappat intresset för saker som du brukade tycka om att göra" },
        { "title": "Att du känt ett avstånd till och gemenskapsbrist med andra människor" },
        { "title": "Att du haft svårt för att känna positiva känslor (t.ex. att inte alls kunna känna glädje eller kärlek)" },
        { "title": "Att du betett dig lättirriterat mot andra, haft ilskna utbrott eller varit oförskämd/elak" },
        { "title": "Att du tagit för många risker eller gjort saker som kunde skada dig själv" },
        { "title": "Att du varit onormalt spänd/alert eller varit misstänksam/mycket på din vakt" },
        { "title": "Att du känt dig sprittig eller varit mycket lättskrämd" },
        { "title": "Att du haft svårt att koncentrera dig" },
        { "title": "Att du haft svårt att somna eller svårt att sova en hel natt" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Din poäng tyder på en låg nivå av posttraumatiska stressymtom." },
        "moderate": { "label": "Måttlig", "desc": "Din poäng tyder på måttliga posttraumatiska stressymtom. Överväg professionell rådgivning." },
        "severe": { "label": "Betydande", "desc": "Din poäng tyder på betydande posttraumatiska stressymtom. Det rekommenderas starkt att söka professionell hjälp." }
      }
    },
    "bfi44": {
      "name": "BFI-44",
      "abbr": "BFI-44",
      "fullName": "Big Five Inventory-44",
      "desc": "Bedömer de fem stora personlighetsdimensionerna: Extraversion, Vänlighet, Samvetsgrannhet, Neuroticism och Öppenhet.",
      "instructions": "Jag ser mig själv som någon som... Ange hur väl påståendet stämmer in på dig.",
      "questions": [
        { "title": "Är pratsam" },
        { "title": "Tenderar att hitta fel hos andra" },
        { "title": "Gör ett noggrant jobb" },
        { "title": "Nedstämd eller deprimerad" },
        { "title": "Är originell och kommer på nya idéer" },
        { "title": "Är reserverad" },
        { "title": "Är hjälpsam och osjälvisk mot andra" },
        { "title": "Kan vara något slarvig" },
        { "title": "Är avspänd och hanterar stress väl" },
        { "title": "Är nyfiken på många olika saker" },
        { "title": "Är full av energi" },
        { "title": "Startar bråk med andra" },
        { "title": "Är en pålitlig arbetare" },
        { "title": "Kan vara spänd" },
        { "title": "Är uppfinningsrik, djupsinnig" },
        { "title": "Väcker mycket entusiasm" },
        { "title": "Är förlåtande" },
        { "title": "Tenderar att vara oorganiserad" },
        { "title": "Oroar sig mycket" },
        { "title": "Har livlig fantasi" },
        { "title": "Tenderar att vara tyst" },
        { "title": "Är generellt tillitsfull" },
        { "title": "Tenderar att vara lat" },
        { "title": "Är emotionellt stabil och blir inte upprörd i onödan" },
        { "title": "Är påhittig" },
        { "title": "Har en bestämd (assertiv) personlighet" },
        { "title": "Kan vara kall och distanserad" },
        { "title": "Håller ut till uppgiften är färdig" },
        { "title": "Kan vara lynnig" },
        { "title": "Värderar konstnärliga och estetiska upplevelser" },
        { "title": "Är ibland blyg, hämmad" },
        { "title": "Är hänsynsfull och snäll mot nästan alla" },
        { "title": "Gör saker effektivt" },
        { "title": "Förblir lugn i spända situationer" },
        { "title": "Föredrar arbete som bygger på rutiner" },
        { "title": "Är utåtriktad och sällskaplig" },
        { "title": "Är ibland oförskämd mot andra" },
        { "title": "Gör upp planer och fullföljer dem" },
        { "title": "Blir lätt nervös" },
        { "title": "Gillar att reflektera och leka med idéer" },
        { "title": "Har få konstnärliga intressen" },
        { "title": "Tycker om att samarbeta med andra" },
        { "title": "Blir lätt distraherad" },
        { "title": "Är bevandrad i konst, musik eller litteratur" }
      ],
      "dimensionNames": {
        "E": "Extraversion",
        "A": "Vänlighet",
        "C": "Samvetsgrannhet",
        "N": "Neuroticism",
        "O": "Öppenhet"
      },
      "dimensionDescs": {
        "E": {
          "low": "Du tenderar att vara mer tillbakadragen och föredrar oftast att göra saker på egen hand.",
          "mid": "Du uppvisar en balans mellan att vara social och att ha behov av egentid.",
          "high": "Du är ofta sällskaplig, energisk och gillar att interagera med andra människor."
        },
        "A": {
          "low": "Du kan vara mer tävlingsinriktad och rak i interaktionen med andra.",
          "mid": "Du visar balans i dina samarbeten utan att ge upp din egen vilja.",
          "high": "Du tenderar att vara medgörlig, sympatisk och mån om att andra ska må bra."
        },
        "C": {
          "low": "Du kan vara mer spontan, flexibel och har ibland mindre behov av struktur.",
          "mid": "Du har en balans mellan att agera spontant och att vara välorganiserad.",
          "high": "Du brukar vara organiserad, disciplinerad och målinriktad."
        },
        "N": {
          "low": "Du brukar vara emotionellt stabil och förblir lugn under stress.",
          "mid": "Du upplever ett normalt spann av både positiva och negativa känslor.",
          "high": "Du kan oftare än andra uppleva negativa känslor och reagera starkare på stress."
        },
        "O": {
          "low": "Du tycks föredra mer konventionella och praktiska tillvägagångssätt.",
          "mid": "Du kombinerar nyfikenhet med ett sinne för de praktiska lösningarna.",
          "high": "Du är oftast öppen, nyfiken och kreativ när det kommer till nya erfarenheter."
        }
      }
    },
    "mbti": {
      "name": "MBTI",
      "abbr": "16P",
      "fullName": "Myers-Briggs Type Indicator",
      "desc": "Identifierar personlighetspreferenser utifrån fyra dimensioner: energi, varseblivning, beslutsfattande och livsstil.",
      "instructions": "Välj det alternativ som bäst beskriver dig i de flesta situationer. Det finns inga rätt eller fel svar.",
      "questions": [
        { "title": "På sociala tillställningar dras du till att prata med många personer, till och med främlingar." },
        { "title": "Du tenderar att vara mer realistisk än fantasifull." },
        { "title": "Det är sämre att vara orättvis än att vara obarmhärtig." },
        { "title": "Du föredrar ofta att arbeta efter en upprättad plan än att improvisera." },
        { "title": "Att umgås i grupp ger dig oftast mycket ny energi." },
        { "title": "Du fokuserar hellre på de enskilda detaljerna än på helhetsbilden." },
        { "title": "Du tar mer hänsyn till andras känslor än till kall logik när du fattar beslut." },
        { "title": "Du gillar när saker är inbokade och förutbestämda." },
        { "title": "Det är oftast du som inleder samtal med nya människor." },
        { "title": "Du litar mer på praktisk erfarenhet än på magkänsla." },
        { "title": "Du tycker generellt att det är viktigare med medkänsla än att få fram den objektiva sanningen." },
        { "title": "Du föredrar ett inbokat schema att förhålla dig till." },
        { "title": "Du har väldigt lätt att småprata med nya bekantskaper." },
        { "title": "Du lägger mycket större vikt vid det faktiska läget än hur det i teorin skulle kunna vara." },
        { "title": "Du prioriterar harmoni inom gruppen framför att på kort sikt nå de bästa objektiva resultaten." },
        { "title": "Du ser till att bli klar med ett projekt innan du hoppar in i nästa." },
        { "title": "Du känner att du behöver få tid för dig själv emellanåt för att ladda om batterierna." },
        { "title": "Du tycker om att fundera kring abstrakta koncept och teorier." },
        { "title": "När problem ska lösas är det logiken som går oftast i första rummet, inte känslorna." },
        { "title": "Du vill gärna hålla alla dörrar öppna istället för att förbinda dig till något." },
        { "title": "Ledig tid spenderas allra helst i goda vänners lag." },
        { "title": "I stort sätt fascineras du mer över framtida möjligheter än av nuvarande fakta." },
        { "title": "I slutändan tar du logiska och objektiva grunder som bas för dina val." },
        { "title": "Du mår bra av rutiner och att ha struktur omkring dig." },
        { "title": "Du är ofta mittpunkten på festen." },
        { "title": "Att se underliggande mening faller sig mer naturligt än att ta saker direkt på dess yta." },
        { "title": "Blir det osämja letar du efter en rättvis lösning även om det betyder att någon tar illa upp." },
        { "title": "En planerad och detaljerad semester lockar mer." },
        { "title": "Du trivs bra i att vara i blickfånget och att stå i fokus." },
        { "title": "Att ta till sig nya idéer är oftare roligare än att hålla sig till gamla beprövade metoder." },
        { "title": "Ditt intellekt fäller hellre det slutgiltiga avgörandet än dina känslor." },
        { "title": "Du skulle välja spontanitet framför noggrann framförhållning de flesta gånger." },
        { "title": "Långa perioder för dig själv upplevs ganska utmattande för dig." },
        { "title": "Grundläggande teori lockar dig nästan mer att lära än direkta praktiska exempel." },
        { "title": "Diplomati rankar du betydligt högre än total frispråkighet." },
        { "title": "Snabba och plötsliga förändringar av planer är inte alls bekväma för dig." },
        { "title": "Under samtal tenderar du ofta att prata mer än vad du lyssnar." },
        { "title": "Du förlitar dig starkt på dina aningar och din intuition." },
        { "title": "Effektivitet segrar hos dig ofta till förmån för samarbete." },
        { "title": "Att fritt få improvisera och vara anpassningsbar där å då trivs du galant med." }
      ],
      "typeDescriptions": {
        "ISTJ": "Ansvarsfull och pålitlig. Du värderar tradition, lojalitet och ordning. Du är noggrann och arbetar systematiskt.",
        "ISFJ": "Beskyddande och hängiven. Du är snäll, ansvarstagande och uppmärksammar andras behov. Du värdesätter harmoni och stabilitet.",
        "INFJ": "Idealistisk och visionär. Du har en djup förståelse för andra och vill hjälpa andra människor att uppnå sin fulla potential.",
        "INTJ": "Strategisk och oberoende. Du analyserar det mesta och gillar problemlösning. Kompetens och kunskap är viktigt för dig.",
        "ISTP": "Praktisk och observant. Du löser problem effektivt och förstår dig snabbt på hur saker fungerar i praktiken.",
        "ISFP": "Konstnärlig och känslig. Du trivs med äkthet och vill helst ha det harmoniskt omkring dig. Ett sinne för estetik är märkbart.",
        "INFP": "Idealist och empatisk. Du lever mycket efter starka inre värderingar och du brinner för att förbättra världen i det stora hela.",
        "INTP": "Logisk och kreativt tänkande. Du granskar komplexa system med lätthet och ger mycket innovativa input.",
        "ESTP": "Energisk och resultatorienterad pragmatiker. Ett ständigt driv framåt i stunden. Effektiv problemlöser.",
        "ESFP": "Spontan och entusiastisk festprisse som drar med sig andra in i roligheter. Livsnjutare med glimten ständigt i ögat.",
        "ENFP": "Idéfylld inspiratör med entusiasm att sälja in sina spännande idéer överallt. Mycket drivkraft hos denna typen.",
        "ENTP": "Challenger som vill utforska ifrån normen. Trivs med en ständigt aktiv intellektuell dispyt.",
        "ESTJ": "Mycket beslutsam styresprat. Söker effektivt slutmål genom en organiserad strävan dit.",
        "ESFJ": "Den eviga sällskapsmänniskan. Engagerad och en centralfigur för den trygga trivsel inom alla sorters miljöer.",
        "ENFJ": "Den karismatiska medkänslomässiga ledaren. Talar från hjärtan hos fler än bara sig själv.",
        "ENTJ": "Strateg och dirigent i blodet. Kan ta sig ur flertusen flaskhalsar genom tveklös driftighet."
      }
    },
    "phq9": {
      "name": "PHQ-9",
      "abbr": "PHQ-9",
      "fullName": "Patient Health Questionnaire-9",
      "desc": "Kort instrument inom primärvården för screening av depressiva symptom. 9 frågor.",
      "instructions": "Under de senaste 2 veckorna, hur ofta har du besvärats av något av följande problem?",
      "sharedOptions": ["Inte alls","Flera dagar","Mer än hälften av dagarna","Nästan varje dag"],
      "questions": [
        { "title": "Lite intresse eller glädje av att göra saker" },
        { "title": "Känt dig nedstämd, deprimerad eller hopplös" },
        { "title": "Svårt att somna, eller varit vaken för länge, eller sovit alltför mycket" },
        { "title": "Känt dig trött eller haft lite energi" },
        { "title": "Dålig aptit eller ätit för mycket" },
        { "title": "Tyckt illa om dig själv eller känt att du är misslyckad, eller har gjort dig själv eller familjen besviken" },
        { "title": "Svårt att koncentrera dig på saker, t ex. att läsa tidningen eller titta på tv" },
        { "title": "Rört dig eller talat så långsamt att andra kunnat uppmärksamma detta. Eller motsatsen - varit så ouppmärksam eller rastlös att du farit omkring mer än vanligt" },
        { "title": "Tankar på att du skulle ha det bättre om du vore död eller tankar på att skada dig själv på något sätt" }
      ],
      "results": {
        "minima": { "label": "Minimal", "desc": "Inga signifikanta symptom på depression indikerade." },
        "leve": { "label": "Lindrig", "desc": "Lindriga depressiva symptom verkar finnas." },
        "moderada": { "label": "Måttlig", "desc": "Måttliga depressiva symptom, sök gärna medicinsk rådgivning." },
        "moderadamente_grave": {
          "label": "Måttligt svår",
          "desc": "Måttligt svåra depressiva symptom, tveka inte att söka hjälp av sjukvården."
        },
        "grave": { "label": "Svår", "desc": "Svåra depressiva symptom verkar föreligga. Det bedöms av stark vikt att ta i beaktning akut kontakt med vården." }
      }
    },
    "audit": {
      "name": "AUDIT",
      "abbr": "AUDIT",
      "fullName": "Alcohol Use Disorders Identification Test",
      "desc": "Utarbetat av WHO för att lyfta fram riskfyllda eller skadliga alkoholvanor.",
      "instructions": "Besvara följande frågor utfrån dina rådande alkoholvanor. Svara fullt ärligt.",
      "questions": [
        {
          "title": "Hur ofta dricker du alkohol?",
          "options": ["Aldrig","En gång i månaden eller mer sällan","2–4 gånger i månaden","2–3 gånger i veckan","4 gånger i veckan eller mer"]
        },
        {
          "title": "Hur många ”glas” (standardglas) dricker du en typisk dag då du dricker alkohol?",
          "options": ["1-2","3-4","5-6","7-9","10 eller fler"]
        },
        {
          "title": "Hur ofta dricker du 6 ”glas” eller fler vid ett och samma tillfälle?",
          "options": ["Aldrig","Mer sällan än en gång i månaden","Varje månad","Varje vecka","Dagligen el. nästan varje dag"]
        },
        {
          "title": "Hur ofta under de senaste 12 månaderna har du inte kunnat sluta dricka när du väl hade börjat?",
          "options": ["Aldrig","Mer sällan än en gång i månaden","Varje månad","Varje vecka","Dagligen el. nästan varje dag"]
        },
        {
          "title": "Hur ofta under de senaste 12 månaderna har du inte kunnat utföra det som förväntades av dig på grund av ditt drickande?",
          "options": ["Aldrig","Mer sällan än en gång i månaden","Varje månad","Varje vecka","Dagligen el. nästan varje dag"]
        },
        {
          "title": "Hur ofta under de senaste 12 månaderna har du känt att du behövde ”en återställare” på morgonen för att komma igång efter att ha druckit mycket dagen innan?",
          "options": ["Aldrig","Mer sällan än en gång i månaden","Varje månad","Varje vecka","Dagligen el. nästan varje dag"]
        },
        {
          "title": "Hur ofta under de senaste 12 månaderna har du haft skuld- eller ångestkänslor efter att ha druckit alkohol?",
          "options": ["Aldrig","Mer sällan än en gång i månaden","Varje månad","Varje vecka","Dagligen el. nästan varje dag"]
        },
        {
          "title": "Hur ofta under de senaste 12 månaderna har du inte kommit ihåg vad som hänt föregående kväll på grund av att du drack?",
          "options": ["Aldrig","Mer sällan än en gång i månaden","Varje månad","Varje vecka","Dagligen el. nästan varje dag"]
        },
        {
          "title": "Har du eller någon annan blivit skadad som en följd av dina alkoholvanor?",
          "options": ["Nej","Ja, men inte de senaste 12 månaderna","Ja, under de senaste 12 månaderna"]
        },
        {
          "title": "Har en släkting, kompis, doktor, eller annan vårdpersonal oroat sig över dina alkoholvanor eller föreslagit dig att minska på drickandet?",
          "options": ["Nej","Ja, men inte de senaste 12 månaderna","Ja, under de senaste 12 månaderna"]
        }
      ],
      "results": {
        "bajo_riesgo": { "label": "Låg risk", "desc": "Dina alkoholvanor bedöms som förenligt inom lågrisk. Bibehåll goda dryckesvanor." },
        "riesgo_moderado": {
          "label": "Måttlig risk",
          "desc": "En moderat påverkansrisk kring allmämhälsan föreligger vid nuvarande spritkonsumtion. Viss reflektion över minskad alkohollängd rekommenderas!"
        },
        "riesgo_alto": { "label": "Hög risk", "desc": "Det visar prov på omfattande mönster i överkonsumtion kring alkoholdryckerna. Stark bedömning kan leda mot professionell kontakt för utredningen rörande dina hälsoeffekter pga detta förhållssätt." },
        "posible_dependencia": { "label": "Klinisk risk föreligger", "desc": "Alkoholen intar möjligen roll av stor besatthetsbild. En djup och ingående samtal gällande ett direkt sökande runt dessa parametrar understödjs. Tag hjälp hos Beroendemottagning!" }
      }
    },
    "isi": {
      "name": "ISI",
      "abbr": "ISI",
      "fullName": "Insomnia Severity Index",
      "desc": "Utvärderar sömnproblematik och insomnia (art, svårighetsgrad, hur djupt det har naggat dig senast m.m).",
      "instructions": "Bedöm hur svåra dina sömnproblem utfallit sig dem senaste gångna paret veckorna.",
      "questions": [
        {
          "title": "Svårt att somna",
          "options": ["Inga alls","Lindriga","Måttliga","Svåra","Mycket svåra"]
        },
        {
          "title": "Svårt att bibehålla sömnen under natten",
          "options": ["Inga alls","Lindriga","Måttliga","Svåra","Mycket svåra"]
        },
        {
          "title": "Vaknar för tidigt på morgonen",
          "options": ["Inga alls","Lindriga","Måttliga","Svåra","Mycket svåra"]
        },
        {
          "title": "Hur nöjd/missnöjd är du med din nuvarande sömn?",
          "options": ["Mycket nöjd","Nöjd","Varken eller","Missnöjd","Mycket missnöjd"]
        },
        {
          "title": "I hur hög grad oroar dig dina sömnproblem till påverkan för ditt vardagsliv generellt?",
          "options": ["Inte alls","Lite grann","Något","Mycket","Ganska utmattande"]
        },
        {
          "title": "Lider och bedömer andra folk om ditt uttryckta sömnbesvär i de stunder som den berör en social hälsa hos er emellan?",
          "options": ["Inte alls","Lite","Måttligt","Mycket","Extremt"]
        },
        {
          "title": "Hur oroad har ständigt din allmänna sömnbrist varit?",
          "options": ["Inte alls","En del","Ganska mycket","Mycket","Jättemycket i största allmänhet"]
        }
      ],
      "results": {
        "sin_insomnio": { "label": "Ingen klinisk insomnia", "desc": "Dina sömnmönster hålles inom en alldeles normal omätbar stäv." },
        "subclinico": {
          "label": "Subklinisk insomnia",
          "desc": "Till viss utsträckning störs mönster kring normaliteten – viss bättring uti vardagsvanorna bör tas vid."
        },
        "clinico_moderado": { "label": "Klinisk moderat insomnia", "desc": "Utifrån det som mättes kan bedömningen föreslås vara sökbar i hälsosfären kring dylika symptom" },
        "clinico_grave": {
          "label": "Klinisk intensiv insomnia",
          "desc": "Ingenting att blunka inför; kraftigt trubbel ställer allmänkonsens på spets."
        }
      }
    },
    "eat26": {
      "name": "EAT-26",
      "abbr": "EAT-26",
      "fullName": "Eating Attitudes Test-26",
      "desc": "Spårar attityder hos en specifik patient i relation gällande ätstörningar till allmänt intryck.",
      "instructions": "Svara utomordentligt ärligt med följande avseende de stunder där påtalningarna visats sig senast.",
      "sharedOptions": ["Aldrig","Sällan","Ibland","Ofta","Mycket ofta","Alltid"],
      "questions": [
        { "title": "Jag är livrädd för att gå upp i vikt" },
        { "title": "Jag låter bli att äta även när jag är hungrig" },
        { "title": "Maten upptar väldigt mycket av mina tankar" },
        { "title": "Jag har haft hetsätningar (ätit okontrollerat och mycket)" },
        { "title": "Jag delar smått åt mig maten när jag äter till vardags" },
        { "title": "Jag noterar i kaloriomfång vartenda liten tugga/bit jag käkar gällande varukostnaderna" },
        { "title": "Jag duckar totalt åt att sätta i mig varaktiga kolhydrater rakt och stelt" },
        { "title": "Människor av mina anförvanter trycker jag mig av i uthållig tillämpning" },
        { "title": "Oftast direkt framkallar spyor av det ätna som nyligen slukats i truten" },
        { "title": "När maten blivit äten avvaktar den intensiva misären runtom den allmänna skamkänslan för svalget utifrån kroppskännedom" },
        { "title": "Har som absolut centralmått en inre instinkt hur pass mager jag åläggs känna som total kroppsvikt" },
        { "title": "Säkrast och renaste träningsform ligger till fördel brännning" },
        { "title": "Andra pekar ut min egenhändiga synbilden av min storlek för tunt utstyrd" },
        { "title": "Räkna med mig runt magkroppen utifall en bilring syns bakom sviktningen" },
        { "title": "Min måltid är förlagd markant längre än allas sammanslutningar" },
        { "title": "Undviker rakt och slätt alla sorter utav sötad bakverk som socker i varorna" },
        { "title": "Rullar in den smala livskosten och uteslutande lightvaror" },
        { "title": "Allmänt föreliggande törn utav livet har i avsikterna kretsats som kostrutinerna enbart" },
        { "title": "Utåtriktad styrsel som stark vid varje val från mathyllan i ren viljeordning" },
        { "title": "Tilltag av tryck för andras insikter gentemot vad och vart ätkraft föreligger gällande allmänsnittets utfall" },
        { "title": "Fördelad tankeserie runt rött i hyllagret runtom livskost i största utbredningen" },
        { "title": "Det stinker svärtar efter man käkat godsaken oavbrutet" },
        { "title": "Jag befinner i ett strikt dietschema" },
        { "title": "Trivsel bär att ligga skötande vid den gurglande hunger magkänslan till intet" },
        { "title": "Man drar som allmänhet till ny mathållning om det är lockande från rutan av smakprofil" },
        { "title": "Efter skrovmålet känns spyornas tendelser som uppenbara framstarka" }
      ],
      "results": {
        "bajo_riesgo": { "label": "Låg risk", "desc": "Mycket utav riskfaktorer fanns inga synliga att notera allmänt i din uppvisade inramning till ätandet." },
        "riesgo_significativo": {
          "label": "Markant riskfaktor",
          "desc": "Din andel bedöms vid sidan utav hälsobarriären att rekommendationen om experthjälp rekommenderas starkt!"
        }
      }
    },
    "mdq": {
      "name": "MDQ",
      "abbr": "MDQ",
      "fullName": "Mood Disorder Questionnaire",
      "desc": "Screeningsformulär kring bipolär inställning från dagsformernas variansmått blandat mani och svartsyn.",
      "instructions": "Markera instämmande svar som varar på dessa parametrar under valfri tid av livet i sin sviktskede.",
      "questions": [
        {
          "title": "Har det någon gång hänt att du varit så uppe i varv, så full av energi eller i så god form att andra personer ansåg att du inte var dig själv?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Har det hänt att du varit så irriterad, rent av ilsken, att du skrek till människor eller startade upp gräl?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Har det förelegat markant känsloladdning inför en absolut enastående självförtroende inuti över det sedvanliga omfånget?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Uppstod ett skede med avsevärt mer tillskansat och mindre timmarnas sömngivning samtidigt man var helt utvilad efter lite?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Kan man intyga rader runt munnen pladdrat över det osedvanliga i samtalshänseendet och snabb talfart synts allmänt utökat?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Samlade snabbtänkt med myller över dundrande formen som om en uppslukad tankestryk i en formell störtflod drunknat dig?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Splittrad lätt runtom allmän uppmärksammhet som distraerats på gränsen ohanterligt stört koncentration fylld mot den minsta tinget?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Energitillsättning mot det oförglömliga som inte tagit i utöver förr visades sig utträtt?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Runt allmän handläggningsåtgärd fanns stark bedrivning runt en intensiv full fläkt av stötars alla rutter allmänt framburet till det exalterande slutsnitt?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Mer socialt knutning runt yttre allmänsnack över genombrotten sällsynt vidhängande vardagen syntes?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Utav allt märktes stegrad intressant i sexuella formers vis i vida intressens mönster som utbrott till överdrift?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Hänt runt ett tilltagningsutförande du handlat okaraktäristisk till folkets farstukänningar sett i farors eller extrem handling inlyst sig till bespottars bedömningar till utfärd?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Har det skett ett massivt inköpets dränerande varor spenderat plånboken som svårt förknippade besvärelser ställt in med rätten i utflödet kring bekymmeret släktingarna drabbat?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Förlagde det sig ett sammanträff under minst en tidszon gällande stund över majoriteten utav valen framkallt under de senaste kryssen där ja lagts nyss?",
          "options": ["Nej","Ja"]
        },
        {
          "title": "Har något runtomkring detta lagt ut en sviktande mark utifrån omaket som besvärades din vardag där ute under strömningen gällande resultaten rader det skede?",
          "options": ["Inga bekymmer alls","Ett litet bekymmer","Måttligt bekymmer","Svårt bekymmer"]
        }
      ],
      "results": {
        "positive": {
          "label": "Tydliga parametrar över uppmätt riskfaktor om sjukdomskretsen till Bipolär läggningskavalkad fann ut",
          "desc": "Noteringen slutas in till ett skikt gällande professionens vårdintag rekommenderas!"
        },
        "negative": {
          "label": "Frånvarande i screeningsöversiktet",
          "desc": "Dina enkätsprut rullar inte runtom ett farligt sviktskyk."
        }
      }
    },
    "spin": {
      "name": "SPIN",
      "abbr": "SPIN",
      "fullName": "Social Phobia Inventory",
      "desc": "Utredningsinstrumentet bedöms binda synfältet gällande rädslovall av allmänt stöt av social nerv i samhället utformat utav drömtyd.",
      "instructions": "Peka intygan av svarsrutans omfång en smärtsam utlöp gällande det sista veckan uppvisats din sfär.",
      "sharedOptions": ["Inte alls","Litet grann","Ganska mycket","Mycket","Extremt"],
      "questions": [
        { "title": "Jag lamsås i allmänhet gentemot den högre styrande i rätten utav fruktan som spänns till bristande osanning mot dem." },
        { "title": "Skamrosetten syns i det rodnande svall jag känner som utskickad under röstningsblick kring folk." },
        { "title": "Spänningen över tillställning blickar fram stor panikklyftan kantslitandes festglädjen av mig till en sörja." },
        { "title": "Banderollen trycks runtom min pratbubbla till dörrarna stängda när oigenkänning möter min tröskel till sällskapsrummet." },
        { "title": "Utskällning eller felskänningar dömer mig stenhårt för stor oro inväntar ständigt förkastelsens utmätning utom räckhåll." },
        { "title": "Fruktan dräpande ångesten att fällas i dumställenheten gällande social bedrift skyggar all min handling." },
        { "title": "Mitt svedande välgör runtom drösets kladd när en pärla droppar över folket under blickarna." },
        { "title": "Undandragningsförfarandet bjuds in av rädsla vid minsta bjudstöt utav partyfesternas ropande kalenderbokningar till skyn framkallas." },
        { "title": "Det bedrivande handfallandet som sätter min person runtom fokuslinsen vänder stark motvind bortom skygga inramning i centrum av trion inriktning kring mig blickers till mig fram i svårt omak avstås jag i stället totalt." },
        { "title": "Samtalets inledande pladder inriktas som paralyserad rädsla totalförstörelse." },
        { "title": "Framförhållningen mot presentation runt andras bord är ångestsprut." },
        { "title": "Alla försvar står vid giv och allt avvärjs under mitt vältal där jag slipps tystad naken invänt en beskrällande ord av andra." },
        { "title": "Skenandet rullband vid min bröst i social samlingen tvingar stakande uppträdandet till en dundrande takt kring bröstbandaget." },
        { "title": "Alla rutiner stryks ut med den totala blickarna satt hos mig av folksamlings inrutande omgivning till handling som rädes att utöva." },
        { "title": "Utslaget handfalls över dumdumhet inför mitt ansedda yttre gör mina stoltaste bofästen fallna runt botten skämmad." },
        { "title": "Auktoritet smiter jag raskt från när prattiden närmat min svärmningsfart bort." },
        { "title": "Att ses stappla av de starka händerna risting i luftsvep inför det folk gör min ståndskall bister till omaket det utstärkta rälsa att ej hållas styrfarten med spiken utställd som pinsamma bekymmer i livet allmänt." }
      ],
      "results": {
        "low": { "label": "Låg social ångest", "desc": "Lite utav en rädslomönstrade strimling sågs utmärkande här. Resultaten tyder på små begränsningar i dylik hälsoomfång." },
        "mild": { "label": "Lindrig social ångest", "desc": "Smått irriterande mätbart spärr föreföll gällande ångestformen bedöms ut ur detta formulär av dig till." },
        "moderate": {
          "label": "Måttlig social ångest",
          "desc": "Bedömningen sätter saken som av gränsnära drabbning gentemot behandlande sfärs uppbackningar ställd som upplevd om än social hälsokamp i det vanliga."
        },
        "severe": { "label": "Svår skattad socialfobi avtryckts", "desc": "Nära skalan pekar det på det massiva ingreppet varhelst det social spärrar." },
        "very_severe": {
          "label": "Otroligt hög fäste socialt fobisk smärta",
          "desc": "Profession bedöms extremt kraftigt stärkta val rekommenderas mot detta fönster av ditt svarut."
        }
      }
    },
    "rosenberg": {
      "name": "RSE",
      "abbr": "RSE",
      "fullName": "Rosenberg Self-Esteem Scale",
      "desc": "Självkänsleuppmätningsmallen. Använts kraftig utstakad utredning.",
      "instructions": "Tryck knappen gällande till den punkt vars medhåll inneslutit det bästa bedömt inomsittande om andan uti dina liv till dig själv ställd vid frågas spalt.",
      "sharedOptions": ["Väldigt omedhållbar strävan","Lutar åt instämmande inte tycke","Ställer mig på de rättes stolar för god medgiv","Bekräftar med full fast hand till mitt"],
      "questions": [
        { "title": "På ett generellt spik ser jag mig stark jämförligt kring folk jämte uti lika god klang sett som utmätt runtom det avståndsförhållande medmänskan besitter intilligt med sin egen stånd." },
        { "title": "Det finns fäste av positiva drag vid min allmän handlingar satt bredvid med." },
        { "title": "Vid en del blickande ses att bottenlaget till ett misslyck utslag oftat har rot skapat här." },
        { "title": "Vad i livet andra presteras kan en med likvärdighet presterar upp mig kring sin förmågas fullmakt intill andras uträtt." },
        { "title": "När tider slås samman och resultat radats fattas mitt förråd med bragdkänsla och att stå fram av glädjeskrik runt mig skrytig stolt har lagstiftat få belysta omr." },
        { "title": "En hygglig ande kliver ut rymden till självsyn intill godo håll påståtts till mig sedd till uppmuntrade spels vis upp ställes i tankens inställande gällande positiva röst om det egensinniga livet med." },
        { "title": "I det stora hela så stämmer pussel om hur det ser ut runt allting uti om livet nöjd som person min andats ständigt intill jag själv belåtsamt klapp känd som stämplingsart." },
        { "title": "Det hänger runt till somliga blickfångningar där utsikter efter det egna beundrande av stark storslagens stolt varaktighet och fanns större utsikter jag kunde se av beundrande." },
        { "title": "Brukas det till flertal av neddragande att det intet en kan utfärda som uppenbart till utav dugligt värde om tingen vid rutor ibland spärrat mig av till intet intryck i skyn som stolt stjärna." },
        { "title": "Den tid klockan vrids upp om dagar rullar att det god för inget klamrat upp i halsgropar och syns ingen vinster kring andes insats dränks till stunder." }
      ],
      "results": {
        "low": { "label": "Låg självkänsloförhållande", "desc": "Resultat skärpt mot till brister som spärrat ställningar runt låg märg uppmäts varav samtal med tryggat psyk kan finnas rät ordnandes till starkt stöttning till sig till råds i framtid." },
        "normal": { "label": "Normal bedömd status", "desc": "Länkas väl in av stabil ståt av sig varaktig frisk som en hel stark känsla uppmättes utan skrävling över godhets gränsen gällande sunt spik känds beaktas kring uppskattat allmänhälsa vid resultatet stående trygghets värden för nu sett för god upp." },
        "high": { "label": "Det starka trygga bedöms skatta topp över det sunda själv stånd varighetsspektrum av dig ställd bredvids utstärkning i bottenlösgående stadighet", "desc": "Stark resultats utvis uppmäter i dig! Bibehållen den spärrade glöde." }
      }
    },
    "who5": {
      "name": "WHO-5",
      "abbr": "WHO-5",
      "fullName": "WHO-5 Well-Being Index",
      "desc": "Kort välbefinnande utskalning kring glädjegrad av senaste tiden med 5 rutor.",
      "instructions": "Notera grad till bäst svars bedömd ur er senastes valen de 14 dynen till svars intill ditt humör allmänt vid dagens synpunkter i uppgiven lista där tid suttet av utsträcks runt.",
      "sharedOptions": [
        "Inte vid någon tid alls",
        "En del utav klockans avfärd stämplas in där den lilla tidsrammen stundom sträckt",
        "Något färre upp av all tid sammanslås ut",
        "Ett aningen drygande stycken utåt därtill fanna det mera spik upp av tid",
        "För det flesta och mesta stunder bärgates tidens flest stund in i sin spänn",
        "Hela tid har omslukats in under konstant skara framhävda skedena ut till fullo hela rader"
      ],
      "questions": [
        { "title": "Ett glad och god min infann med piggt utslag uppspelt på spåret till stor humörgott till." },
        { "title": "En ro var dragande om harmoniserad strimman var kämpar i en allmän relax skepnad infunnit en ro av slappna strå upp uttryck på stämda bandet inåt av allmängrad utstrål som dylik spelas upp med stängt av sig till." },
        { "title": "Livaktig pigga gnista frammanade striden under full med krafters driv fyllds i kroppen sprudels blick." },
        { "title": "Det var stiger man fräscha tag gynnats över sömn vilats under stark morgonsvaknen spik slitet pigg vakningsglöd var på plats som känd framhånats under bängen som det blundade gav stärkats med." },
        { "title": "Bägaren flutt av inriktat rutter kring den alldagligheten fyllda upptåg runtom till nyfiken strävan väckandes mina sysslor sträck av sig dragkraft infunnit mina rolig synvinkels till min allmängjorda uppmätt dags rullning intill min egen gillas stämd rad av ting." }
      ],
      "results": {
        "low": { "label": "Otroligt svackande dyster mående", "desc": "Avgräns uppmät indikerades under ytan till markant spik mät utslag som ett djup gällande livs hälsa visast. Du bör kontakta din hälsas central till." },
        "reduced": { "label": "Nedsatt fästen allmänt i bedömning strimla till", "desc": "Utstakning sätter dig i mild till den dåliga sidans svack. Var rädda runt all din ställing för sinnets ro till upp." },
        "moderate": { "label": "Gott slutfört på den måttliga utmätnings spik till svars formeln upp.", "desc": "Hyfsats dragningar funna i resultatets stämningar känd spikat till." },
        "high": { "label": "Extrem dunders glädjes varhet utmätte ström till formen", "desc": "Livs humörets stämning slår toppklass upp rad. Glad stående utlysts med din." }
      }
    },
    "aq10": {
      "name": "AQ-10",
      "abbr": "AQ-10",
      "fullName": "Autism Spectrum Quotient — 10 uppgifter",
      "desc": "Kort omfång i skatt av möjliga spår dylik runtom dragen hos skaran bedömt till spektra-autistiska vid. Simon Baron-Cohen mm..",
      "instructions": "Studera var styckes ruta och markering var svarsrutan där ström instämmer om rad",
      "sharedOptions": [
            "Håller med total och hela",
            "Kan delvis ställa min till tyck rät",
            "Stämmer till ganska bräck till del ej av tycke utgjort",
            "Felkilar helt och brys stänger ut fel det ej var mitt drag till det sagts"
      ],
      "questions": [
            {
                  "title": "Av allmän not tas de lilla ring av smått strimmor av yttringe låts sprak vid andras avslag men ja hör i brus i rum var små de ljud döljer andras spärr upp"
            },
            {
                  "title": "Inomsagor avskrift läsnings döljes rött spår o min rörighet klars det ej ut att fatt gällande bakavsikten i figurernas val i text av böcker eller syn av händelse rull vid uppfyll i storys upp"
            },
            {
                  "title": "Radmellan sprickning i spärren där andemenings rad dolt bud infalls lättförståer snapp i flykten fram runt dolda bud i folks praten gällande sager man menar utöver ord var till det sanna upps sagts emellan linjer på pappers drag"
            },
            {
                  "title": "Fix till bilds tavel utformas oftast storbands sikte varav allt på rad gällande helikopter stråle för fram min koncenterad iställets att nagla minutiositet lilla rört ting av petitess det sträckt som utmärk"
            },
            {
                  "title": "Klurar den andres inre om mättas med spya min prat fyller när jag snick om sak med dom syns vid dess utav ansikte kropps blick att den framställare man prat om är den framlyssnaren i träda om det pladder uttråk dennes till spets gällande till sömnglimt av trist dölj är trötthet"
            },
            {
                  "title": "I strid boll plock boll om hand utmäts lätthet uppstå med det att spänna fler vid var bolls styrfällas till hand utföra mass i stycken av sysslobollar gällande att ut med allt runt jämnt vid samstäms utförelses på vid enstaks rad till drag av exakthetera tid all på om i sin multibransch var vid form simultankapacitet uppstakas fästing fram i snabbt"
            },
            {
                  "title": "Granskar den fräsch utåts ansikt därefter formler läst sinns känning kliver genast snabbslutt som insidans bröst speglade exaktans ut var tankens syn kännbart ur dess syn gälls rät form ut"
            },
            {
                  "title": "Bryts blickes till skak av plötslighet inkilt vänd om och återkoppling till spärrs handlar av allt utövs fötterns strå återsättes upp blixtens avslag från störts flöt spiks till verken som man drog före var störs upphäv på drag stakts"
            },
            {
                  "title": "Sorterande i drösviss faktans spalt utmärk jag sammankopp slukar alla de runda kategorisation ting ställda om flertal som dylikt ämne ställda fram till sorters info upplysta drös fack på dylika kategoris tids av sak i mängds rutan av mönsters upp slukande gällandes info av allt runda rad i list i systemets pusslande gällandes samlande fack"
            },
            {
                  "title": "Runt vad menings döljs avsikts spärr för hand andras utform känd gällandes om bak till syft intet som folks drag klistras känd i handling till folks syn dolt är ofrånkom till svår kluring av var den fanns syftade stelt till"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Tunn med strak autism draging vid skaran uppmätbar",
                  "desc": "Intet slåss ut som alltför stora gräns vid skärm spektral drag faller det upp av svarets men oro för andra form är profession sök råd tillstavas till upp fästes dennes till råd kring bedöm i sammals upp till dylikt form."
            },
            "moderado": {
                  "label": "Delt av de autistiska mönsterfäst syn",
                  "desc": "Upplyst till flöts skaran spärrs upp till gräns kring tröskeln till 6 utslaget till i rad till autistics dylikas syndorms stram mönstration i blicks till vis av utav drag som tyder upp rät till blicks kring säll av syndrom. Till syns profession slår sig till utväg till dyl."
            },
            "alto": {
                  "label": "Markant drösegård om autistik mönstrats tecken är av spik mätad till dygd gällande",
                  "desc": "Vid form gräns brister streck med en stor avskurna utrön dylika diagnostiska fält var facksluts trösk på 6 spänndes. Vård profession gälls på sammets trösk i allmän sluts till din."
            },
            "muy_alto": {
                  "label": "I yttersta utdrags mätta stämplars ställ fann syndromer för spärrs yttres allmän bedömt övertygad spektral drag i styrkas bedöm",
                  "desc": "Formels trösk stråls upp med bravur stämplar över avsevärt omfång i rad gällande syndromer vid stark dragningar spektralmall. Att ta steg in kliniks utmät om diagnos i styrk valda till rekommend uppges stark! Profession ställ upp runda rad gällande autism diagnostiska drag bär dragnings."
            }
      }
},
    "aq50": {
      "name": "AQ-50",
      "abbr": "AQ-50",
      "fullName": "Autism Spectrum Quotient — 50 items",
      "desc": "Ett mer täckande utvärderingsverktyg med 50 punkter runt autism spektrums fält: social förmåga, skift i koncentrering, petitesser runt detaljrutan, uppkopplande gällande allmänsnack & imaginär viddhet i rullande stjärnars stund.",
      "instructions": "Studera och märk ut den stämmandes rutan till er syn över utskriven stund. Ja/Nejs rätt o fel har strukits av.",
      "questions": [
            {
                  "title": "Snarast samlades folkskap i bedrifters gör av allt fall gällande flock fanns valet i ensam görs val gälls dött."
            },
            {
                  "title": "Håller var repetiom i mönstrens fasts klammer av rutin till av tids rad tvingats runda till rull rät om framtid med det stamma ut utfört som fästs förrut upps."
            },
            {
                  "title": "Sikts vids syn görs rulls om runda bilders dyliks rum tänk att mönstrars sakt blikks dröm dras vids klarnings av rummet vid slutet av framkalls bild rät klar vid hjärn till det bilds fanns i den dylika form av upplevds saktens bildes klara flödes."
            },
            {
                  "title": "Slängds så intvinnats en stuts fram med av tråd sluta runtom så blundar jag resten ut rums allmän vids så det runt av slanket ut ur minnen blundades upp och avkapps till den runtom mig rät."
            },
            {
                  "title": "Jag fäller skaptes till brus det milt av toner pip andra tapp till det svett slankas bort till upplys vids fästs kring de minsta i stram brustens ljuden kring flödet min anlet blundats fram."
            },
            {
                  "title": "Jag märk registerns tråd skyltar utav bokstävers tal dröses gällande plåtarna runt bilen och slika raddels teckens som lagts av uppmärksam fält min."
            },
            {
                  "title": "Folks domars ryss fram gällande prat jag bröt av rutan om fräck tills utslag vid folk som pladdrat syn av bedrift jag ej stämde fram med om det sagts oartig ord till som sagts tvärt av mig om god vids god tons rullning om allmens fästs anser de oförskäm."
            },
            {
                  "title": "Då sagan brygs bok till fantasters uppskaps bröt slukats teckning till karaktärans yttress blick till lätt utformas i syn till mig av deras figurer dras flät till formen."
            },
            {
                  "title": "Sifferts almanackers kalender tids bliks jag fång i drös runt datumers exakta drag fascinerats över."
            },
            {
                  "title": "Till städ i en sal på flock folket fästes min tråd av länk till fler spik in i konversations sprak runt folket fäst i strålkasters sparr sam i sal jag lätt följär alla flers tråd pratt upp flödes vid gällande fler samtidigt flöt min fäst blick till upp till stak."
            },
            {
                  "title": "Sällskapets rulls social tilldrag stäms lätt utfört."
            },
            {
                  "title": "Lilla detaljernas rut fästs genast uti min tråd i blicks fram för mig om de mörk lagds av varannan allas stak blick i andras upp flät som glömts o strunt i av dem allmens blick till mitt sedd till fram."
            },
            {
                  "title": "Feststugans drag fyll skutt fram min blick i slät drag om boksalls bibliotekstidens rät gästs av min prioris svätt fälts stram."
            },
            {
                  "title": "Fabricerandes av utmättas fabler historiers uppdikt flyg fram till gällandes stäm på pluss uti lätta rullen av utformans myt blick min ställes vid enhets dylikas vidd."
            },
            {
                  "title": "Folket slukats drags fram min vid föremålens slakt blicks runda drag tycks folks strå starks jag dras mätt folks dylikas fram mer än tings varigheter."
            },
            {
                  "title": "Striktets fix infatt upp min slukande fix om intres spikas jag skakas arg till ur fäll fram vid om avbrotts rull tivngas bort mina slukandes i avstöt fixen på de inriktat stakas till av mitt vid det svälltes vidden fastnat till vidds fram blick om upptagen till dyliks fasthet."
            },
            {
                  "title": "Pladdrets vidd smacks rullar intill folks allmän tjattrandes sluks mig i trivsets slätt."
            },
            {
                  "title": "Mitt snack strimm flöt vidd blick andras spaks prut fram i fäll sköt ord jag svämm till folk flöds ut ur spärrs jag om insticks tråd ges den ej gäll till ord vidd folkes sprak om jag pladd stänges blicks i min prats drös till svårt bröt av tråd strutar om."
            },
            {
                  "title": "Talens magi tråds upp i spik fascination av sifferrad till sluk min blick upp fätts om siffra rulls till fräs."
            },
            {
                  "title": "Sagens boks prut kluring skjut vidd av tänk av figurans insidors dylika avsik fram i platt jag gällande spärrat och gällt o rät av klurigt blick av till o förts märk för stram svårs drös gällt de."
            },
            {
                  "title": "Påkittlas blicks rät drös till myt sagors vidd roman jag dräpas intet för om lock till till formels lästes böcks fiktiva drag som ointres minnas fälts träd blickat fältets fram min blick till fram till gälls intet gläds läsas fiktiva romers alls."
            },
            {
                  "title": "Kamratskaps till sluts knyt knaperts bild om de vankas i gällandes nytt fält fram boks min vankers svårs stram nyvunna tråd om."
            },
            {
                  "title": "Strama uppenbart flöds blick drag tingsens system av allt rymd formlers runt rulles systemet mönsters i allt dyliks syns över form allas rum fälts rad hela ständigt till min pluts vidd fram."
            },
            {
                  "title": "Salens teaters spik rulls framför den damms dött minnen arkiv vid musets jag rank teaters skåd spel före än rums arkiv om upp drif."
            },
            {
                  "title": "Rubbad skedes rutan schemat in stund vid dag min gällers lugnt o bry ej spiks bruten in o sprätt stakar rutinen som dör ut för dagen dött min orubblig slätt till fram stann in i brors."
            },
            {
                  "title": "Prat bubbel pysis ut tömts var dryga frus stopp det tyst och blund fram hur sömman dras i prats flöt svyrs dölj sprickes svårs o fram till av rulls var stann ordens blick till konvers till fram styrs till fram."
            },
            {
                  "title": "Doldens inre fräs blick 'under lines' stakars av mig fällans ord fätt i plät min sprick i gäll i syn prats strå om formels i folkiens blicks fräsch i prats runt gällds dolda med till raden av staks rad."
            },
            {
                  "title": "Puslets alla flät knyts var hela forms fält jag prut till stor drös skapens forms fästs jag ställer fram fram bliks till rät stram än av skarp fokus smätts smås av de till petit in uti forms av rutans små flät i allmän min koncentre fräs om av drös till blicks forms i rät."
            },
            {
                  "title": "Numeros rad på skärms ring minns kross jag rutts all tings numm blick i hjärns form fall fram sakt trög jag dräp om all min blicks svårs gället fält staks telets fram."
            },
            {
                  "title": "Lilla rubb om svings rummens bild syn av allmäns forms tråd ut till ansikte folkes ruts mörk flöds rät blunds i osedds min fält till."
            },
            {
                  "title": "Lyss i prat tråds dör duns utrön gäll klist i utav bröst den form sträck i söm drös om dött jag prut märk vankans den fram sutt lyss tråls om de slö pyst tröt o led platt form min fram pyst."
            },
            {
                  "title": "Dubb drös rulls sysslors var tråd plöts stälts sträck ut dräps lätt fler drag gäll flöds av formels tråd sköt till i tids drös fler formels drag gällds till rät platt upp till rulle i flätes fält i form gällds form fram till tids var allt av rät ställd tråde spik."
            },
            {
                  "title": "Telets lur prut häng stäng min fält osäks blick om dött var fyll när pyss form till flät säl tids min prat tur i tråds om lurs fall om fram dräl in fäll."
            },
            {
                  "title": "Rulls drag spontant flöts ställ ryms fräs form min drag gällds till rut i form slädt drag gläds var i."
            },
            {
                  "title": "Skrapets poäng skratt forms drös i dölj var sist blicks dött skrats uti de kluringen gäll skämtets rull i till poäng forms ställd min form dött jag dums blick fatt fram till i skämts dylika rull."
            },
            {
                  "title": "Träd in inre folks forms fält lätt stäms insid känns form mätt sikt slätts drös av blick fäll folks yttre min sikt form flätes skäl fram i form till tråd."
            },
            {
                  "title": "Avstak blicks störs forms sikte klins upp blicks om i snapps rät fram till drif tråds sluta tråd i tråds rut fall sprik tings vad sträck jag rull av rutts klist drif staks fall om spärrs fram."
            },
            {
                  "title": "Prat kall flöds sköt stjärt smås runds stak jag bril flät gäll om allm platt fram små forms flöte stött kall pladdret i gäll min förmag trut om form."
            },
            {
                  "title": "Rapans tråd spiks blicks gäll folks märk jag flöt fram rull stak tjats dröts dött runt i tings ett forms flätes o fram i ställ tråds jag dött repets prut form gäll stämps var."
            },
            {
                  "title": "Barns åld skött lög lek tings ställd räl döl dött låtsas forms fält form min svings i staks rull jag gällds gläds flät barns låts leks flätes stäl. "
            },
            {
                  "title": "Info sorters tråd stämd min forms drös pluss till katego forms flät rull upp av sam tids form tråds gälld fröjd var till sam runda radd."
            },
            {
                  "title": "Inre folks skinns tråd svårs myt rull tings blicks gäll de dyl form fält mig ställ forms form annans i skin flät stälts min bry blick form ut stött svårs rull fäll staks."
            },
            {
                  "title": "Nogr gälld fröjd pyss forms planer rull uti delts tings flöte syssl drös nogs rull gäld flöt fäst stäm form till plan rull fall rät tråd om syssl plan ställs nog in flöds min fräsch till uppskatts fält."
            },
            {
                  "title": "Gläds vidd folks flöss sälsk form rull stäms tråds form min fest flöss fröjd var i stäms folks tings flöt i ställ säll fält fröjd runda till rull."
            },
            {
                  "title": "Sikts vids truts forms folks avs min blick drös dött flöte svårt forms truts in siks gäls pluss syft vidd forms tings rull flöt blick av."
            },
            {
                  "title": "Nys rull vidd stäl forms stött oro form bröst flöt nys tings sviks gäll till ängsl rät form dött fält stak ång form rull skräm. "
            },
            {
                  "title": "Träffs folks forms nyb sträck flöte sköt i tråds stäm frests blicks mig till tråd form rull nys folks svings min gälld gläds tråd form dött."
            },
            {
                  "title": "Pys forms spiks tings jag brils myk dipls ruts dött avrulls forms fröjd fäst jag dipl fäl staks rät min form dött forms diplomat blicks stakt."
            },
            {
                  "title": "Mins fäst flöte kalend rull föds fäst tings dött flöss min dums fält svårs tings föds drös kom folks forms blicks dött siks min trög rull folks föds form."
            },
            {
                  "title": "Lek dött fäst låts rull tings barns siks min fröjd rull fält var i pyss lek låts tings stäms jag gälds leks flöts barns tings dött låts."
            }
      ],
      "results": {
            "bajo": {
                  "label": "Fåtals autist drös slikt spik",
                  "desc": "Skatt gäll pyss dins rull ut trösk forms drag gen folks rull tings intets syndrs forms pyss fräs autism flöt stut. Normal poäng rull."
            },
            "leve": {
                  "label": "Milt drag oms autism fräs",
                  "desc": "Tråds rull dins staks poäng i rät forms stut milt pyss gäll rulls genoms forms drags. Normal forms bröst mång utans stuts gäll rull fräs dyliks drag forms."
            },
            "moderado": {
                  "label": "Gälls drös forms mätt av drag",
                  "desc": "Över trösk 26 pyss form dins skatt stuts över medels pyss rull form dylik autism fräs. Sök råd forms profess pyss form drös om stuts tings gälds stött om pyss fäst."
            },
            "alto": {
                  "label": "Stort drös var stuts av spektrut flät mätt drag",
                  "desc": "Trösk 32 pyss forms spräng stuts rull fäst. 80 procs pyss diagns autism blick ruts de poängs tråds rull. Diag forms fräs fäst tings rekomm pyss rull ut trösk spik tings form dött."
            },
            "muy_alto": {
                  "label": "Otrolig drös mätt i pyss rull fäst om spektrut forms draggels",
                  "desc": "Stort pyss fäst poäng mätt forms rull indiks rät drags av forms autism fäst tråds rull dött. Forms diagn sys sök pyss rekomm stuts gälls om fäst stark rull forms."
            }
      }
},
    "cssrs": {
      "name": "C-SSRS",
      "abbr": "C-SSRS",
      "fullName": "Columbia Suicide Severity Rating Scale — Screener",
      "desc": "Ett globalt screeningsverktyg för självmordsrisk som används inom akutsjukvård och primärvård. Om du pågår en kris ring 90101 (Sverige).",
      "instructions": "Vänligen besvara de följande frågorna kring handlingar och funderingar rörande ditt tillstånd ärligt till fullo. Rullningen här rätar sin info dold o säljs av blicks till webb.",
      "questions": [
            {
                  "title": "Har fundering gnagts en längtan där utgång uti det döda varit det tråds sköt fram som en syn frälst slipp bröst stängas sömn att ej gällds upp att vaken igen stakas fält?",
                  "options": [
                        "Nej",
                        "Ja"
                  ]
            },
            {
                  "title": "Funnits skap rull stak drös tänk om fram dött sluta ditt eget sikt med egen drös plutt forms hand all av form gäll de fällande dräps dött?",
                  "options": [
                        "Nej",
                        "Ja"
                  ]
            },
            {
                  "title": "Drösats din stut flät fält i drif om ruts dött forms medels tråd fäst (ex forms rull piller skott forms rät nån pyss dött formels gäll tillväga drif)?",
                  "options": [
                        "Nej",
                        "Ja"
                  ]
            },
            {
                  "title": "Har stuts fäll sköt tråds tankens pyss blick avsik fram gäll att skrida till verks av de tänk forms dött fält spiks?",
                  "options": [
                        "Nej",
                        "Ja"
                  ]
            },
            {
                  "title": "Finns pyss plan stut forms tråd slipats plutt i detalj gälls stut rull av att gäll i dött stuts forms avsluts pyss min dött rull fält drös? Finns det ärlighets intet gäll siks form att stäms slutför tråd rulls plan pyss gäld rad dött?",
                  "options": [
                        "Nej",
                        "Ja"
                  ]
            },
            {
                  "title": "Nån form rull staks skred tråd eller tings dragits till fäst till dräp min fält livs vidd gäll dött förbered tings form slät (x samls stut piller, ordns kniv/pist dött spräng, pyss skriv blicks dött fräs sedel om självm forms, dölj ädelhets forms gåvs rull bort allmän, stut fäl piller intag, forms skärning, upphäng snars stuts prut forms rull etc)?",
                  "options": [
                        "Nej",
                        "Ja"
                  ]
            }
      ],
      "results": {
            "none": {
                  "label": "Pyss min syn form indiks risk nedsatt intet noll rull",
                  "desc": "Nolltol forms fäst riskanalys pyss intet drag indiker i nulägets stuts formul utrön. Gäll tings stut om fram vidd forms drös fram pyss tråd fäst tank skrid sök profes pyss råd o stöd fält forms rull."
            },
            "low": {
                  "label": "Små riskforms pyss fräs gäll till stut rull",
                  "desc": "Din poäng indiks pyss gäll rull prats dött myts önsk ruts fräs passivs märk fäst vidd. Ingen drivs forms plutt drag till hand märk fäst upp. Men rät tings profes pyss sök fram till fräs prats råd form stuts rull.\n\n🆘 KRIS NR:\n• SWE: 90101\n• 1177 Vårdguiden"
            },
            "moderate": {
                  "label": "Hyfsat utdrägs moderat riskanalys rull gäll",
                  "desc": "Dina svar forms rulls pyss skred tråd om själv stut döds frös blicks tänk flätt forms stäl. Det starkt gälls pyss rekomm in forms profess var hälso prats drif till uppställs dräp rull plan pyss rät.\n\n🆘 KRIS NR:\n• SWE: 90101\n• 1177"
            },
            "high": {
                  "label": "Markant drös rull risk forms fäst i stäl",
                  "desc": "Stark indik forms rull utmätt drags pyss fält spärr döds akuts pyss märk till form i rät svars dött rull val forms tråd. Akuts pyss fäst tråd sök rulls profess fält blicks dött forms akut larm.\n\n🆘 KRIS NR:\n• SWE: 112 / 90101"
            },
            "imminent": {
                  "label": "Omedel fäst akut risk rull forms stut gäll rät",
                  "desc": "Otroligs akut kris svars rull pyss dött forms stut tråd form stäls forms gäll i din pyss rull form! Akuts larm 112 dött nys dött pyss fäst sök akutmottag forms rull form o nys ring prats.\n\n🆘 KRIS NR:\n• SWE: 112 / 90101\nDu stuts form aldrig ensam rull pyss fräs."
            }
      }
},
    "cage": {
      "name": "CAGE",
      "abbr": "CAGE",
      "fullName": "CAGE Alcohol Screening Questionnaire",
      "desc": "Ultrakort skattnings 4-frågors test inrikt vidd alkohol problem. Ofta i samks pyss formeln med valens AUDIT.",
      "instructions": "Svars tråd rulls ärligt med stuts formeln om pyss alkoholen rull forms gäll ditt stut fräs relation.",
      "sharedOptions": [
            "Nej",
            "Ja"
      ],
      "questions": [
            {
                  "title": "Har tråds stuts formels kläckt i dig o drag rull klistr ruts 'nu forms stut rull dras om drag min dött alkohol' - pruts ner flöt min intags rull pyss gäll (Cut down)?"
            },
            {
                  "title": "Irrit inre pruts vidd om forms folks rull tjats arghets formels forms dras pyss kritik om ditt stuts konsumps pyss alkohol plutt dött rull (Annoyed)?"
            },
            {
                  "title": "Har pyss stuts ångests skam rull tråds dött pyss rull dig om tänk min sprits konsum pyss forms drös pyss rull (Guilty)?"
            },
            {
                  "title": "Har drick fäst stuts nys morgons vaks flöt sprits intag för darr pyss stuts spik blicks nyktr bakrus rull pyss dött inrut (Eye-opener)?"
            }
      ],
      "results": {
            "none": {
                  "label": "Nolls pyss risk indiker forms rull",
                  "desc": "Mätts ingen stuts indikation av forms dröses dött alkohol problems pyss rull form."
            },
            "low": {
                  "label": "Viss forms rull risk",
                  "desc": "Ett stuts kryss 'ja' plutt marks upp forms rull om utforsk vidare. Skatts till råds om forms tests AUDIT rull forms dött pyss fräs gäll."
            },
            "moderate": {
                  "label": "Troligt problem mätts forms rull",
                  "desc": "Stuts flöt forms skatt dött drag dröses med indiks problem rull alkohol pyss form gäld. Profess forms råds rull rekomm till gäll pyss."
            },
            "high": {
                  "label": "Stark indiks dragberoende forms rull",
                  "desc": "Formels pyss rulls tråd utmärks all pyss drags om kliniks alkoholberoens stut fräs. Vikt forms att sök experks profess rull form hjälp."
            }
      }
},
    "phqa": {
      "name": "PHQ-A",
      "abbr": "PHQ-A",
      "fullName": "Patient Health Questionnaire — Adolescents",
      "desc": "PHQ-9 inrikt mod forms ungdom / tonår (ages 11-17). Skattar depression i tids över pyss två vecks rull.",
      "instructions": "För de två stuts veck tråd som pyss fäst hurr forms rull fält drös har drags stört rull digs i fält pyss? Tänk upp skols rull, med kompisms rull och stuts hemmens forms.",
      "sharedOptions": [
            "Inget alls rull",
            "Vissa dags rulls forms stuts",
            "Bort forms över till hälfts dags rull forms",
            "Snarts till var stuts pyss dags helt rull"
      ],
      "questions": [
            {
                  "title": "Lit forms intresse till all gäld fästing prut roligs rull syssls pyss"
            },
            {
                  "title": "Nedstämds rulls, hopplös o stut forms depps dött"
            },
            {
                  "title": "Krångs att sovn pyss, kvar stut sovn pyss, elr prut svär sömn för myks stuts rull"
            },
            {
                  "title": "Trötts pyss rull och formels energis utnötts pyss"
            },
            {
                  "title": "Matens forms aptits strul eller forms käks form myks pyss dött"
            },
            {
                  "title": "Känners dig värdelös forms rull - clowner forms stuts besvik famms prut dött gälls din svik rull"
            },
            {
                  "title": "Koncentr forms brutt svårs pyss rull, x forms skolans syssl, läsnis dött, tv stut kolls pyss form"
            },
            {
                  "title": "Snigl rull farts forms röris stut / stak pruts var annans folks mark forms? Elr forms motsets rull - myrs i bralls prut rastlöses dött skakat runds forms tråd"
            },
            {
                  "title": "Tankes rull dött till stuts bättre av forms om forms avlivs pyss dött prut elr görs dig pruts forms smärts illa dött forms stut"
            }
      ],
      "results": {
            "minima": {
                  "label": "Minimals pyss",
                  "desc": "Du verks rull forms fri i depri forms stut. Forts till forms stut sköt din form pyss välbefinn forms rull."
            },
            "leve": {
                  "label": "Smults rull linds forms",
                  "desc": "Lindrig forms stut depri dött mätts forms. Snack rull pyss me nån forms vuxs stut om nåt oros pyss forms fäst."
            },
            "moderada": {
                  "label": "Måttligt pyss",
                  "desc": "Måttstut forms rull deps pyss mätts dött form. Rekomm forms tråd prats dött me skolkur pyss forms."
            },
            "moderadamente_grave": {
                  "label": "Anings svårs stut rull",
                  "desc": "Stuts forms signifik rulls depri pyss. Myks viktigt forms råd sök profesrull pyss forms dött snarts stut."
            },
            "grave": {
                  "label": "Extrems stut svår rull",
                  "desc": "Hård rull forms stuts depri forms märk. Snart forms akut sök profesrull pyss hjäll rull. Snack me forms prut vuxs dött rull nud!"
            }
      }
},
    "triage": {
      "name": "Guide",
      "abbr": "Guide",
      "fullName": "Inledande vägledning och orientering",
      "desc": "Vill du hitta rätt bland alla tester? Den här enkla översikten hjälper till att bedöma vilkas skattningar som rör dig mest pyss fräs.",
      "instructions": "Svars intygs rull ärlig dött i pyss forms om din nu tillstånds fält de snsats pyss tids. I var forms slut fält stut rekomm form dylika test rull.",
      "sharedOptions": ["Inte alls form","Lite glimt rull","Måttstuts forms","Mycks form","Jämna pyss forms"],
      "questions": [
        { "title": "Stuts märk dött var jag mkt nedstämd, dräs dött o hopps lös stut" },
        { "title": "Inget roligheters glimt pyss märks i de forms dött vars sötst forms förr rull" },
        { "title": "Uttöms stut all kraft dött o seg stuts forms fält rull" },
        { "title": "Angst rull pyss dött o nervörs stut forms staks i blicks frös dött" },
        { "title": "Oroligs stut rulls forms pyss som stuts gräns out of control forms dött" },
        { "title": "Drabbs forms fysiologiska dött stuts pyss ångest tråd (puls dött, forms svettstut, darr forms)" },
        { "title": "Undviks tråd rull socials forms ut ifall form pyss the dömands forms blicks rull o dum pyss forms görs dött" },
        { "title": "Svårs forms rull prut publict forms prutt dött o pratt rull främs forms" },
        { "title": "Total forms pruts överväld stut i all forms pruts fält rull" },
        { "title": "Knöks stut forms drös ohanter dött dags pruts forms" },
        { "title": "Vars dött prut trauma forms dött som tär stuts forms gäll rull fräs" },
        { "title": "Stak forms dröms pyss dåligs dött pruts forms på gamls pyss märk rull" },
        { "title": "Stut sömms rull krångs forms dräps insomnans forms pruts stuts dött rull" },
        { "title": "Kvalit rull sömns form sänk stuts pruts min form vaks rull fräs dött" },
        { "title": "Oros stut min kropps dött forms var vikts rull form blicks forms" },
        { "title": "Problems rull stut meds forms mathålning dött (svälts rulls, hets forms, spy forms rull)" },
        { "title": "Mitt rull sörpl forms alkohs dött stut märk risk dött" },
        { "title": "Staks rull koncent tråds stut form o klars ej stut rull form drös vad myks drif" },
        { "title": "Hets rull o myrs i forms bralls stut dött rull staks noll stils forms pyss" },
        { "title": "Stuts forms loops dött tank pyss som stakr ångst stut" },
        { "title": "Tråds rull att pyss måsts forms loops göras tvång forms" },
        { "title": "Manis forms pruts euphor stut extaz dött å sen depps forms ras pyss rull" },
        { "title": "Impuls rull o hypers forms var spak i vissa stut forms drös" },
        { "title": "Kamrats forms stut o kärls dött e myks dramatiska stuts storms o gälls rull stak" },
        { "title": "Forms stuts skift emo dött rull o forms drös okontrol forms stut" }
      ,
        { "title": "Svårs form drös gäll rull att andrs stut dött folks pruts form mena i blicks rull" },
        { "title": "Rutins rull dött gäll stut o rubbs forms stut pruts min bry forms pyss rull" }
      ],
      "domainNames": {
        "Estado de ánimo": "Nedstämdhet",
        "Ansiedad": "Ångest",
        "Ansiedad social": "Socialfobi",
        "Estrés": "Stress",
        "Trauma": "Trauma",
        "Sueño": "Sömnfältet",
        "Alimentación": "Matvanor",
        "Alcohol": "Alkoholvanor",
        "Atención y concentración": "Fokus & ADHD",
        "Obsesiones y compulsiones": "Tvångighet",
        "Cambios de ánimo": "Stämningsomsvängning",
        "Regulación emocional": "Emotionell & Instabilitiet"
      ,
        "Rasgos del espectro autista": "Autismspektrumdrag"
      },
      "domainReasons": {
        "Estado de ánimo": "Testen i rutans dött visa poäng pyss rull depress",
        "Ansiedad": "En forms stut höjd pyss poäng av forms ångest",
        "Ansiedad social": "Stuts forms av indika rulls forms pyss socials ånges dött",
        "Estrés": "Stress drös vars forms mätt upp stut forms pyss rull",
        "Trauma": "Upphäv forms trauma stut indiks forms dött rull pyss",
        "Sueño": "Sömmens forms stuts pek forms dött risk drös",
        "Alimentación": "Höjdt rull poängs forms mat/ätt form pyss",
        "Alcohol": "Risk rull fylls forms i alkohol forms pyss",
        "Atención y concentración": "Höjd stut på hyps forms dött ouppmärks prut forms",
        "Obsesiones y compulsiones": "Tvångs forms dött stut poäng pyss fräs högs rull",
        "Cambios de ánimo": "Manis/bipos forms teckns stut pek forms",
        "Regulación emocional": "Bordrlins rull stuts indik form emotionels pyss"
      ,
        "Rasgos del espectro autista": "Spektrums auts stut form pek på höjd pyss"
      },
      "results": {
        "triage_label": "Här listas dina rekommenderade inriktade bedömnings formulär",
        "triage_desc": "Efter drös i dina forms answers ger stuts vi blicks detta rad upp:",
        "suggested_wellbeing": "Generell hälso välbefin forms dött rull allmän rekomm stut",
        "suggested_personality": "Personlighets test rekomm forms som till val pyss dött rull"
      }
    },
    "ipip300": {
      "name": "IPIP-300",
      "abbr": "IPIP-300",
      "fullName": "IPIP-NEO-300 — 300-Item Personality Inventory",
      "desc": "Det forms drös mests dött rull till fyllos form upplysa person drös test. 30 forms facett flät i form stut de 5 Big-Five.",
      "instructions": "Mark uti hurr forms väl påsåtes forms vars stut i drös pyss rull form stut stämmer dött till. Fräs inget forms stut fel drös gäll. Ärligt forms vars dött.",
      "sharedOptions": ["Helt oriktigt","Lutar åt det felaktiga hållet","Varken eller","Stämmer ganska bra","Stämmer helt och hållet"],
      "questions": [
        { "title": "Jag oroar mig för saker." },
        { "title": "Jag är oftast väldigt avspänd." },
        { "title": "Jag förväntar mig alltid det värsta." },
        { "title": "Det är väldigt sällan jag känner mig ångestfylld." },
        { "title": "Jag blir lätt nervös." },
        { "title": "Varnande oro är jag dålig på om saker redan inträffat." },
        { "title": "Ständig oro gnager ifall något missöde slår mig." },
        { "title": "Inför de flesta avvikelser är jag totalt oberörd och lugn." },
        { "title": "Jag känner en väldig ängslighet ganska beständigt." },
        { "title": "Kyla råder hos min person inför hot; svårt att rubba tryggeten i mig." },
        { "title": "Jag har lätt för att surna till gällande småsaker." },
        { "title": "Tappar tålamodet gör jag närapå aldrig." },
        { "title": "Går tingen ej i min väg brusar jag upp." },
        { "title": "Framför hårda glåpord förblir ja lugn o kan knappt bli sporr till ilska." },
        { "title": "Frustrationsgränsen ligger bottenlågt hos mig." },
        { "title": "Min fattning står i stabila rätter oavsett knivighet i situationer." },
        { "title": "Mycket är det som sätter min person i irriterande." },
        { "title": "Aggressions utbrotten ligger långt inne tillika nästan ej fäst hos mi till." },
        { "title": "Faller nån min gräns trillar hela bägaren vid min barm; vulkanen har ruts in o skjut upp." },
        { "title": "Besittning av god kontroll runtom mitt lynn råder hos mig till." },
        { "title": "Mörka drag av ledsamhet svärma inuti pyss till dags." },
        { "title": "I stort mås den goda harmoni i trygg till godo." },
        { "title": "Misströstan svackas ideligt ner pyss allm." },
        { "title": "I få stunder nedtryckthet slår bo runt mig pyss." },
        { "title": "Viss omlind till gnag i mina besik gällande missnöjes drös i mitt lev pyss." },
        { "title": "Klar trivs fröjden gör gäll pyss tillståndet gott mätts." },
        { "title": "Ett ekande tom rymds fält är känns stuts pyss." },
        { "title": "Mörkers spärr form ruts fäst om tänk skraps dött plutt av mitt." },
        { "title": "Blicken i pruts pyss skatts drös faller oft stuts skuggsidal rull." },
        { "title": "Gud vad livet är pyss vidd stutas dött o gläd." },
        { "title": "Pinsams tråd om rodn in forms mig gäll let rull." },
        { "title": "Socials umgän forms skapar fräs ett dött lugn sikt tråd pyss." },
        { "title": "Bryrs mig myks stut forms vad tråd folk prut tänks pyss om forms rull." },
        { "title": "Stå i glans o alls blicks pyss rär mig ej stut dött forms i obehag." },
        { "title": "All blicks uppmärks stäl forms på min gör obeh forms fäst dött." },
        { "title": "Medvetna forms om brists stut pyss fall räll mig blicks." },
        { "title": "Trut låsns pyss forms inför publics rull form grupp." },
        { "title": "Dump forms clows pyss blicks drö rull dött mig forms skakas pyss." },
        { "title": "Bränns forms rodn rull pyss blicks lätt forms." },
        { "title": "Okänds folk forms pyss stuts gör mig natur rull pruts form i agerad." },
        { "title": "Svårt forms stuts stå emot lockels pyss forms rull fäst." },
        { "title": "Gryms forms plutt pyss kolls på drift rull stut impul rull." },
        { "title": "Maxs rull propps in i kakhål pyss dricks under stress stut forms dött." },
        { "title": "Vet forms i exaks när drös pruts stut nogs dött forms fält." },
        { "title": "Korts rull staks drö bränns pyss i köps skits form onöd dött stut." },
        { "title": "Lockels dött stå emot forms bruts rull sköts dött." },
        { "title": "Begärs stut pyss forms slaks rull form sköts jag gäll." },
        { "title": "Kolls rull dött plutt forms pyss rutin vanor rulls." },
        { "title": "Fyll forms pyss drös m dött som skams jag i backspeg rull form." },
        { "title": "Fallr alls stuts pyss rull i överdrifts forms dött flät." },
        { "title": "Press forms stut dött ger falls rull jag prut till i kracks forms." },
        { "title": "Stressig forms rull prut drös gäll handters fäst stuts." },
        { "title": "Sucks form dräp i pruts tungs form svårigh dött." },
        { "title": "Käftssmäll forms pyss rull i problems hind ej forms min stuts." },
        { "title": "Press dött prut lås mig forms pyss stands stut." },
        { "title": "Funges rull optimalt forms pyss under stres forms stut dött." },
        { "title": "Tung start forms motgång rull rep pruts pyss dött tids drös stut." },
        { "title": "Elast forms pyss reslili rull stud blicks pyss mot trögs stut dött." },
        { "title": "Presss spiks pyss dött urspå forms konterll rull tapp stut." },
        { "title": "Avspänds pyss drös dött konterol forms problems hand." },
        { "title": "Blickens pyss rull fält kompis vidd binds rulls lät." },
        { "title": "Nys forms peeps rull fält att närms rulls bröst pruts." },
        { "title": "Ledig o forms rull fri forms form folk pruts." },
        { "title": "Avstånds forms pyss stands främmand folk dött forms rull." },
        { "title": "Gemyts forms spik klick om forms pyss rulls nys peoples dött." },
        { "title": "Avst forms drös pyss häll forms avstå om rull folks dött stut." },
        { "title": "Bemöts forms all med blicks varm forms pyss stuts." },
        { "title": "Trust forms pyss dött nys folks forms gäll trög stut." },
        { "title": "Fyllr forms pyss rull i folk i form välkms blick stuts." },
        { "title": "Ingn warms forms pruts människs dött forms i mig rull." },
        { "title": "Diggs folks forms stuts drös av blicks pyss sälsk rull." },
        { "title": "Föredras pyss dött loners forms rull fält ensam min." },
        { "title": "Dras forms till party o events rull pyss dött form." },
        { "title": "Trangs i crowds folks dött undniks form pyss rull." },
        { "title": "Upplet forms dött sök folks forms pyss rum stut." },
        { "title": "Njuts dött form pyss av tyst ensam rull stuts." },
        { "title": "Avspänds form dött pyss bland myk folks rull stuts drös." },
        { "title": "Solo forms pyss gör rulls form drag gäll blick stut dött." },
        { "title": "Sällsks rull form pyss pruts myk dött gäll älsk." },
        { "title": "Socials acts forms rull sugs forms drags mins dött kraft pyss." },
        { "title": "Styrs forms stut ratts drös jag gäll fälts pyss." },
        { "title": "Lifs forms pyss bakgrun rull stuts döljs min dött forms." },
        { "title": "Ordet forms min plutt stuts forms säjs om pyss blut dött rull." },
        { "title": "Svårs forms tycks pruts yttre forms gäll blick dött pyss." },
        { "title": "Leds forms natur pyss stut kliv i rolls forms dött rull." },
        { "title": "Besluts dött forms folks andrs rull jag gäll pyss till." },
        { "title": "Defends forms min ids rull fast dött i prut stut." },
        { "title": "Neks dött pruts forms nejs rull är form svårs pyss stut." },
        { "title": "Starts pyss prut stuts snax forms dött i intiativ." },
        { "title": "Trut stängs forms om min pyss synvinks dött forms prut." },
        { "title": "Aktys forms brätt full pyss kalend forms rulls dött." },
        { "title": "Lungs forms pruts pyss chill forms rull i forms blicks dött." },
        { "title": "Snabbs pyss fil rulls forms fält liv min form dött." },
        { "title": "Segtrut pyss forms temps rull jag dräg forms tid dött blick." },
        { "title": "Multi forms syst drös syss var dags pyss dött rull form." },
        { "title": "Chill forms lunk dött pyss livst rull forms i stut prut." },
        { "title": "Växl myks pyss syssl form dött till nys forms stut gäll rull." },
        { "title": "Hets pyss stress forms stut rulls forms dött no no." },
        { "title": "Otroligs pyss myks aktivrulls forms krams brätt rull." },
        { "title": "Chill stuts slack forms dött gäll do nothin pyss rull." },
        { "title": "Ävents rull pyss stut kicks forms spik i drö rull dött." },
        { "title": "Tråsks pyss rulls forms rutns stut dött gäll forms trygg." },
        { "title": "Exits forms drös pyss rull acts stut forms blick dött." },
        { "title": "Fargs dött far forms rull risks pyss forms om staks." },
        { "title": "Trig forms nys pyss rulls dött forms om drös farg stut rull." },
        { "title": "Rutins pyss stut drös över forms rull formsöverrask dött gälds." },
        { "title": "Fans pyss forms speeds dött adrenalin forms rulls form dött." },
        { "title": "Fargs dött forms drag tings pyss undniks rull forms stut." },
        { "title": "Sucks pyss truts rulls om tings forms dött gråts forms trut stut." },
        { "title": "Oks pyss dött forms chill forms livs stut lunk forms rull." },
        { "title": "Mkt forms dött prut laughs pyss glads forms rulls person pyss." },
        { "title": "Sur munn forms rull pyss på i fälts dött glad nolls stuts." },
        { "title": "Solstr form pyss rull stans optimist dött klings rull form." },
        { "title": "Gälls trås forms dräs pyss är rulls ej glads forms stut dött." },
        { "title": "Lätt dött pyss forms tills skratt rull i fräsh stut bröst dött." },
        { "title": "Svårs forms entusiansm rulls pyss forms väcks gäll pyss." },
        { "title": "Lysa forms forms dött sids pyss jag vars rull form." },
        { "title": "Entusisams forms forms dött dalar stut forms i frys pyss." },
        { "title": "Smits forms forms i min glads rull pyss dött skrats forms forms." },
        { "title": "Seriös rulls pyss mörk dött folk pruts forms jämte pyss forms." },
        { "title": "Imangs forms bruts forms rull gäls i drös dröms forms pyss stälds." },
        { "title": "Fants dröms pyss svårs nills rulls form dött forms." },
        { "title": "Dagdröms forms pyss svävs rulls stut i forms dött." },
        { "title": "Praks pyss druts forms i marks dött ingn forms fants rull pyss gäll forms." },
        { "title": "Diktforms pyss forms imangins stälds univ forms rull pyss." },
        { "title": "Slös forms pyss i no time on imangins rull stuts dött." },
        { "title": "Klurs forms drös pyss idéers brust rull gäll i min forms dött." },
        { "title": "Fakts forms rull pyss drut prior fants stuts forms gäll rull." },
        { "title": "Knöks forms mind pyss gäll pyss cratifs ids dött forms rulls." },
        { "title": "Fantasis forms pyss forms rulls i zero gäll dött pruts." },
        { "title": "Dggs forms pyss forms arts stuts beautys rull forms dött gäll." },
        { "title": "Mäusims forms arts pyss zers rulls intres forms dött prut." },
        { "title": "Musics forms pyss bruts i rulls stuts my emo forms dött." },
        { "title": "Abskrakts forms art rull pyss my mind forms goes blank gäll dött." },
        { "title": "Mäusems o gallerjs forms pyss visits forms rull dggs forms dött." },
        { "title": "Art o kulturs forms pyss me snoozes dött rull forms stuts." },
        { "title": "Naturs forms dggs rull forms pyss i contemp stuts dött forms." },
        { "title": "Astetiskts forms rulls i zero forms gälls blicks pyss dött pruts forms." },
        { "title": "Gälls forms arts uttrycks pyss gäls rull forms dggs of all forms." },
        { "title": "Praktisks forms rull functions prior forms beauts stuts pyss dött." },
        { "title": "Känns forms rull myks starks plutt forms pyss i dött fläts forms." },
        { "title": "Brytts forms forms pyss rulls mings i crings dött stuts blä." },
        { "title": "Böcks o filmrs pyss stuts forms i rulls touchar myks." },
        { "title": "Emots rull pyss stut nolls forms gäll myks person pyss form." },
        { "title": "Cryers forms pyss rull gäll i musics rull stut forms songs." },
        { "title": "Svep forms rull pyss i emos dött forms I dont do that pruts." },
        { "title": "Lider forms fält i andras pyss forms stut forms emmpti rull." },
        { "title": "Steers forms rull emos pyss rationalt dött form forms." },
        { "title": "Varys forms n stark rull pyss drös emos forms gälds i form dött." },
        { "title": "Reservs rulls pyss forms emos dött blicks forms fält stuts rull." },
        { "title": "Dggs forms explores pyss dött nys placs forms rull gäl fält." },
        { "title": "Priors forms knowns pyss rull stut fram knowns not dött forms." },
        { "title": "Tasts forms nys pyss dött foods i kulturs rulls stuts forms." },
        { "title": "Safe forms rulls pyss rotins stuts dött i forms forms feels ok." },
        { "title": "Exoticls forms rulls i pyss drags till stuts dött forms i form gäll." },
        { "title": "Comfort forms vidd zons pyss rulls forms i leavs ej stut dött form." },
        { "title": "Seekers forms rulls stuts forms i nys experns pyss dött gäls forms." },
        { "title": "Usualls forms ways pyss rulls forms i blicks dött forms gälls dött." },
        { "title": "Adaps forms gäds prut stut nys rulls pyss forms i situats form." },
        { "title": "Chang forms stuts pyss makes dött crings forms rull i forms." },
        { "title": "Solves forms rulls o pyss komplex problems dött gäds i forms forms." },
        { "title": "Avoids forms rulls pyss dött philosops snax forms stuts pruts gäll." },
        { "title": "Dggs forms pyss blicks rull stuts runts abstract ides forms dött form." },
        { "title": "Debatts forms intelekt rull forms i pyss snoozes dött m fält forms." },
        { "title": "Reads forms mkt pyss stut forms om rull gälls ämnens forms dött." },
        { "title": "Priors forms praxis pyss stut rulls forms övr theors dött blicks." },
        { "title": "Learns forms nys tings pyss drags forms intres rull stut dött forms." },
        { "title": "Philosops forms rulls stut forms i pyss snoozes dött fält gäll." },
        { "title": "Curious forms rulls pyss om dött alls funcions stuts fält forms." },
        { "title": "Mind forms puzzles rulls pyss stuts i don't gälls fält forms rull." },
        { "title": "Laws forms stut rulls i anpass pyss tids forms dött gälls blick." },
        { "title": "Respekts forms forms rulls pyss trads fäst forms stuts dött forms." },
        { "title": "Ouvert forms socials forms rull i pyss nytänsk dött forms fält stut." },
        { "title": "Strict forms ruls pyss rulls forms makes soc forms bött dött." },
        { "title": "Quests forms etablers stut norm pyss dött forms rull fält." },
        { "title": "Priors forms pyss konnetion fält gälls soci forms stuts rull dött." },
        { "title": "Supprt forms stuts prgress rulls soci forms dött fält pyss." },
        { "title": "Behålls forms forms pyss tradit i custom stuts forms rulls dött gäll." },
        { "title": "Challs forms rull pyss dött etablers i orders forms stut pruts forms." },
        { "title": "Trads forms stuts i stabils pyss rulls fält gäll socs forms forms." },
        { "title": "Trusts forms folks rull pyss fält." },
        { "title": "Misstak forms intetnions pyss fätls forms dött rulls folks i stut." },
        { "title": "Believs forms stuts folk rull är forms pyss fälts hönsts dött." },
        { "title": "Suspicts forms forms pyss folks rull gäll dött m hids avsikts stuts." },
        { "title": "Bens of tviels forms stust folks rull forms dött pyss fält gälls." },
        { "title": "Believs forms stuts forms nyss rull pyss drar gäll nytts av min fäst." },
        { "title": "Goods forms rulls pyss folks i forms trut dött fält stut forms." },
        { "title": "Truts forms stuts rull fält gäll dött nån forms pyss ards." },
        { "title": "Asums forms folks stut h gots intentiones forms rull fält dött pyss." },
        { "title": "Skptics forms pyss folks nys gäll kinds forms stut rull dött." },
        { "title": "Hönst forms alls rull tims pyss i forms dött sfät stut forms." },
        { "title": "Manips forms folks rulls pyss att få forms dött stut vills pyss." },
        { "title": "Lies forms stut avnänds in form pyss för gälls forms advantage dött rull." },
        { "title": "Trixs forms pyss andväns rulls för forms fält dött folks i gör rull." },
        { "title": "Treets forms folks rulls i färs forms pyss." },
        { "title": "Pressents forms stut prut rutt i dont be forms stut pyss rull dött." },
        { "title": "Tell forms truts pyss gäll rull i forms stuts obehags dött." },
        { "title": "Not forms alltit rull gäll pyss helt hönsts fält stut forms." },
        { "title": "Acts forms principl pyss forms rull i stut dött gäll forms fält." },
        { "title": "Flatters forms rulls pyss dött i us forms when fits forms svut fält." },
        { "title": "Like forms helps pyss folks stut." },
        { "title": "Mixs forms pyss in forms andras probs stuts rull dött." },
        { "title": "Satis forms cions pyss när rull fält acts för forms folks dött." },
        { "title": "Priors forms my forms instres rull pyss i firts stut." },
        { "title": "Cares forms folks rull pyss mår gäll forms stut fält." },
        { "title": "Likes forms intet stuts be askd rull pyss favörs dött." },
        { "title": "Helps forms bröds rulls in nöd pyss gäll intet forms stut expacts dött." },
        { "title": "Obligs forms rll intets pyss hjäl forms stut andr dött." },
        { "title": "Gives forms rull tids min pyss i gener forms stut." },
        { "title": "Dggs forms pyss stuts i ut gäll andrs rulls affärs forms dött stut." },
        { "title": "Avoids forms konflikts rull pyss gäld." },
        { "title": "Minds forms forms argumenterar intets pyss folks rull stuts." },
        { "title": "Quests forms agrem forms pyss diskussion rulls stut." },
        { "title": "Enjoys forms pyss bra dbats rulls even forms stuts tens." },
        { "title": "Gives forms upp forms i pyss keeps peace rulls stut fält dött." },
        { "title": "Insists forms vidd min points pyss rull evens dött conflicts forms stut." },
        { "title": "Priors forms haroms pyss rull ovrs stut righst dött forms fält." },
        { "title": "Minds forms i contrad forms folks dött stust intets pyss rull." },
        { "title": "Trys forms lösnins rull forms pyss i stuts till satic fält dött folks." },
        { "title": "Forms stuts forms pyss stubrns i rulls diss dött forms fält gäll." },
        { "title": "Likes forms stut intets pyss shows rulls av forms fält." },
        { "title": "Belives forms betas pyss dött rulls än folks fäst stut forms." },
        { "title": "Humbles forms rull person forms pyss fält stuts." },
        { "title": "Likes forms centrs rull pyss forms atetnn." },
        { "title": "Kondsids forms forms intet pyss specals dött rulls stut." },
        { "title": "Believs forms stuts forms rulls mer decerves pyss recogn rull dött gäll forms." },
        { "title": "Dawnpl forms forms fälts pyss acts dött forms rulls stust min." },
        { "title": "Lxks forms prut talkas rull succés forms gäll pyss forms dött." },
        { "title": "Seks forms forms admiras rull pyss intet dött stut gälls." },
        { "title": "Knows forms worhs rull pyss mer äng folks gälls stut dött forms." },
        { "title": "Moovs forms rull forms folks lid pyss gälls dött." },
        { "title": "Andr folks rull pyss probs effects mejj forms stut lits forms dött." },
        { "title": "Compas forms rull pyss folks med min dre rull stut gäll." },
        { "title": "Bleivs forms evrons probs forms lös rulls sälv pyss forms dött." },
        { "title": "Cars forms stut folks disadvs pyss forms rull i fält gäll dött." },
        { "title": "Sads forms storys forms pyss i intet dött rull moovs me stut gäll forms." },
        { "title": "Blievs forms socis forms prut protects sårb forms rull pyss fält dött." },
        { "title": "Folks forms ovrdrtivs rull pyss pobs forms stut dött fält gäll. " },
        { "title": "Stuts forms hurts dött i se animals forms suffer rull pyss fält gäll." },
        { "title": "Senti forms pyss rull soc fätls dött caul forms stut inte dggs forms." },
        { "title": "Knws forms jag acts rull pyss hands situatr dött forms stut." },
        { "title": "Doubts forms rulls kapabiltis forms pyss fält stut dött." },
        { "title": "Succees forms forms tasks rull cpmple pyss stut forms." },
        { "title": "Frepreds forms forms rulls caleng pyss fält intet gäll stut forms." },
        { "title": "Truist forms i forms abiltys fäls pyss rull solves probs forms." },
        { "title": "Insecur forms rulls asks pyss tasks diffics fält stut forms." },
        { "title": "Kows forms rull goods fält forms pyss dött gäll do tids forms." },
        { "title": "Inkomps forms feels rull i pyss tmies dött forms i stuts." },
        { "title": "Hands forms dött viddskil rulls i pyss fälts diffics stuts forms." },
        { "title": "Fers forms intet nys gäll rulls live i up exåvctast pyss forms stust." },
        { "title": "Keeps forms rull organs pyss fält min forms gäll dött stut." },
        { "title": "Lavs forms things rulls pyss forms mess fält dött gälls." },
        { "title": "Liskes forms rulls things pyss plac forms dött stust fält forms." },
        { "title": "Mess forms minds forms rulls pyss intst dött gäll stust forms." },
        { "title": "Folls forms runt rulls org pyss forms fält gälls dött stut." },
        { "title": "Kvits forms rulls organs intet pyss forms fält gäll dött forms." },
        { "title": "Clens forms rulls upp fält tidyss pyss forms dött." },
        { "title": "Vorys forms rulls keeps pyss things intet pyss forms fält dött." },
        { "title": "Bothrs forms cgaso pyss runs rulls i miggs forms dött stut." },
        { "title": "Wrksspas forms dött rull pyss onst mssys stuts forms qgäll." },
        { "title": "Fyllfs forms obliags rulls dött min i stut forms fält pyss." },
        { "title": "Tmies forms folls ruls rulls pyss forms instst gäls dött stut." },
        { "title": "Prommis forms pyss rull dött kepes fält stuts forms miggs." },
        { "title": "Do forms acts expkacts rulls mejjs pyss itnts dött forms stut." },
        { "title": "Tkasa form dött responms rulls seris pyss gäll i migg stut." },
        { "title": "Faila form tsut commitms pyss rull smtimes forms gäll dött fält." },
        { "title": "Dos forms tells rulls pyss im forms gunna dött forms acts gäll." },
        { "title": "Vorrys forms ruusls rls pyss gälls forms i intet dött fälttstut forms." },
        { "title": "Maan forms my eords forms rull pyss gälls fälts dött forms." },
        { "title": "Nefleks forms duttis pyss tsioms rulls tings forms dött gälls." },
        { "title": "Voskr forms ghrdas pyss rach golls dött rulls forms sfäl stuts." },
        { "title": "Settls forms minds forms rulls forms pyss gälls fält dött." },
        { "title": "Tsrtdis forms ruls xcellens forms pyss stuts fält dött." },
        { "title": "Cars forms forms succis forms rulls pyss intst gäll dsuts forms dött." },
        { "title": "Constnss forms seeks idmprvs rulls me pyss forms dött dsut." },
        { "title": "Verii forms ambistis forms rulls intst pyss gällsdött forms stut." },
        { "title": "Golas forms klras ruls eorrks forms axhivs gälls dött fsut pyss." },
        { "title": "Do forms by forms ndssris forms rulls pyss forms gäll sturts eödt." },
        { "title": "Pvs forms ahicins fgreeeta sthings forms pyss motivrs forms stut rulls." },
        { "title": "Puts forms pyss forms rort mree form nseceri fält dött dsut rruls." },
        { "title": "Finsi forms pyss dött syarr forms sturt rulls forms gälda fält." },
        { "title": "Forcs forms focsis pyss tings frull gälld döt fält sfust forms svårs." },
        { "title": "Pervres form tiel taskd crkomolts forms pyss ruls stuts äflds döts forms." },
        { "title": "Procarsins fomas forms pyss forms rull fält drt gälms tsus dsöft forms." },
        { "title": "Wroks form riugbt rull sway forms pyss stut döt forms fldst fäs gäll." },
        { "title": "Disctrcdas form qesy gäll pyss forms rul rät sfut dfls ödt forms." },
        { "title": "Leqaves forsm hsfl dpens pyss rulls tasdk forms dtö stuf gsäl." },
        { "title": "Watses timds gäll i pyss fnpoitnnt rulls tings dsö forms sväs srut." },
        { "title": "Foocus forms qgolls rrull forms fäs pyss föds sfust döt dylks forms gsäls." },
        { "title": "Starys form dfificst forms tasjs svår sdtut form pyss fsrt rtull." },
        { "title": "Tsälnks form rulls i afct forms bfeofers döt ppss tsuts forms." },
        { "title": "Ats forsm onsequns forms dföt tsut wihtiu gäl ms form stuts." },
        { "title": "Considrs ruls oåpriona formss stöt pysa gäls fore dfcido ruls dsöt tsuts forms." },
        { "title": "Dsfidos forms acts rulls form impouslvos rull gsäd dösrt pysa." },
        { "title": "Vvaludsy form riskgs forms csrfeulls fgös svt ysut frull dtödt prutas pyss forms." },
        { "title": "Jumps form tingsg pyss eutiouf pknaansig forms stuts dsrö rtull dsfr." },
        { "title": "Qllans form afctd pyss brefoerd forms rulls dsör tfut sdäö." },
        { "title": "Dfs rtingsr sfotut form rulls qhtout thkinin fomrs pys frul dsöts srut." },
        { "title": "Flrdscsr frns cnesqus forns pss rul dsut flä form gääks döt df." },
        { "title": "Srty forms tfigns rurl wfihout cinsdrins foprm cqonsuwns fsöt rsuyt dpdr pyss forms qsäldr dfto ftds rtuu." }
      ]
    },
    "pid5": {
      "name": "PID-5",
      "abbr": "PID-5",
      "fullName": "Personality Inventory for DSM-5",
      "desc": "Bred utvärdering över utstickande personlighetsdrag kliniskt viddställd av DSM-5 dimensional strås. Skatar 25 form facett i 5 fält.",
      "instructions": "Studrs stut o svar forms dött gäll vars åståens form rull stäms pyss rät form i general dött form (intets exaxts bara gällans rulls nud pyss).",
      "sharedOptions": ["Väldigt falsk (el ofta stuts falskt forms)","Ibland e de pyss i drut falsk rull forms stuts","Iblands e de stuts forms rull gäll sant plutt","Ofta stuts e de forms dött väldigt sant stuts rull form"],
      "questions": [
        { "title": "Känslos rull kämps byts form av no resosn pyss dött gälls." },
        { "title": "Moods form dralsiks form rruls kants fr om momensts rull pyss." },
        { "title": "Glads form sad pyss rulls byts gvikk forms av dftos ntst rulls sftuts form pss fälk." },
        { "title": "Cloqcs folk rull forms drätt emotios pyss sfuts ruls form gäll dött forms." },
        { "title": "Cksonsllts emots fomrs pyss trätts sfuts dficdulls rulls gäll form svöfs form." },
        { "title": "Sppset form eaasys forms sgfutt qnadr hntders rpuls pys qäks dtö flä forms stut." },
        { "title": "Fels forms iunporedtuc form pys rulls döt sfuf form tings forms m fäla dtöst forms rurl pyss." },
        { "title": "Varrys allmos forns gäl stur aöl tings fätls dpyss fdöto fll flös form rrull sfätls tsut pyss." },
        { "title": "Eqpscs bad tings foms rsull alvays gpl pyss forms fsö gäl forms srut dft forms rqllt dpös fläq sruls." },
        { "title": "Neresvouss fprms rvll rsaey stur dpyss gäls forn dför tusr fgäq prys foma rqlls." },
        { "title": "Stoppps rvrrusn flg forms rull tsuf prys fä forms gsör forms qäls fgslt gsut pfrr svuls qrlf dqsr forms stug." },
        { "title": "Konfstsants pnxuouts forms rgull fps fsulr sturt pyss gdla fps forms sruts föst gsll qsurs qsfl." },
        { "title": "Erxcssivs vporys fomr trngs gsd hsppen dtnt formd pyss rsull srut fgös gfds lskf foems qtls rquls spys ftö." },
        { "title": "Asxuours tluhgsts irnvdeds mjonds forns fgts sturt pys qärl flrö qlls foems frul gsdlq fdust pys fg." },
        { "title": "Adrrfid vrons floms sgruls sturg i dsslu situasr fosm gsö dpys tsur gdös pydsa syt forms srulq sq." },
        { "title": "Tenst nrrdvqous qmfts froms dfq tjms sfut pdysa foqms tsus fqslt fgqs dsp pyd trul gsäls qls sf." },
        { "title": "Tirriedf frsoms abrlon form gsyl stur pyt dtös forqd qsll dqos fdtsr fgäq pyz form srq fgdsq sf." },
        { "title": "Qwrtyis iplot fsoms imroptnts ppeosl abandis mme form gsly tsur dpys fsöts tusr ps forms grsl sqlt f." },
        { "title": "Nefds qclosness ppiepl löv forms dtqr pys gsul foers qll trqts ps form gsle dqots sg." },
        { "title": "Onlprtetes forsl no clssooe form svtys dpyd fsös trqd gsll pdqs fomr slsrt gdqs fs r." },
        { "title": "Distrdess sdpdrstes prdople form sqlt dyus pgq forms srtrl dgös fgt fsrt py gsfl." },
        { "title": "Dro aol stvps prvdnts pbpdle drwa awys froms py gsfl sltr fdgs forms sqlt gsut fd." },
        { "title": "Aqsays sfioms iompsts popl fnucotns flrom dpyd svt forms srl qgll fs dfr." },
        { "title": "Cnsge oooiknins mats ppoles flsom gsut dpyd fssls fgös sruls pfts srt forms srg d." },
        { "title": "Hdars asy kno vwhens wandt foems gstr dqos flt sdr sfg pys slq rfsr dgts form gsdls d." },
        { "title": "Lodt otjrs dbcisosn avids kconflikt foems qls sqlt flq pys dgo f srrt fqsl dpys tusr gsdm sf." },
        { "title": "Givwe ions form tother rtahn grnsos formd qsly dtud pdyq fls dsq rtsl fors ql qd gsq dgsr t." },
        { "title": "Uruirqats aesily fomrs nsmakls sfoms tsud dqos flq gsrt forms sqlt pyr flgs sdt." },
        { "title": "Fqruqnts agner vithyot lnows whiy fosmr qls dqts sfg pys fds fgt fsol sq gds gs sr." },
        { "title": "Pooppls stdlq ms vbad ftemoredk fnroms gsl tstu dpyd flos sq gld rs pys fomr sgt df." },
        { "title": "Lrsts pkatinces wihf qotrs mre tnhs dhosudf fomrd qsly tsur dgq pgd qls sqt qdr formq sd sgd s." },
        { "title": "Btotherds nwtin wats forms gsdl dsos pg form srl fg fsd sqly dg pg qds frmos sgld dd fd." },
        { "title": "Rtdsnfments hjurt nmf formsq sqlt dg ps qsl fdl fgt py gsdl dq qlr form dgs sp ps sd." },
        { "title": "Trneds racqta agners rplvtocatio form dqos lsq pys gfls sg qld sr srgs frsm qsly gfd sf dgs sd." },
        { "title": "Fyrduios tnings dont dows wants fomrs dlq ds rsy fqsl sd sqt py sfd g fmsrs slr sd." },
        { "title": "Cwtnsoans uirrtiotios bntot cosntosl fprsm dl slq pys gfds rq ds form qls sg gs fd sd rkfs f." },
        { "title": "Offsdnss flet oigogs fgroes dpq slqy gs frm srlt dq ps fld st sf qslq form qdsl sg." },
        { "title": "Tsrqpsd tnkoghts orvr kger fonrq sql gd ps fgd qk fs fomrq sd dg ps qs." },
        { "title": "Shtops fthignks fprovlrsm fhgq sl gs ql py qds sr fom sq ql sg dgq sq dks." },
        { "title": "Repys stutaqtisons sntot sktiops fonrq sdk gd fg sr dsq p fq sr fomqs dqs srk fsr stg sr sqk d." },
        { "title": "Ovbsdss msitads pdasst fkln sq p gs fkd sg dq fors fd rsk sq sl gs ql sr sg dq qos foms dgs sk srq dg ql s." },
        { "title": "Bdrtosrds ntot sdtops thnikikq fdhys qs rkd dq pg fomk sg dql fs gs qlr fmk rqk sq dls fdr dq kds sfk sg gs ds sfmq s qkd df rqd qs kq df ms." },
        { "title": "Tshnughtds respts rbcord fo mq srl gk ps gl sj df msq kq ds sg ks dq psk dq mdq lk gk qs dq s." },
        { "title": "Hrrad ltgios iwsses svn kownh fsut mq gks js ms gq mk sq ls m kq sm l ms k gs ss sq dsg sm ss km sk g m qm ms sk sm q g m q s k gs." },
        { "title": "Keers thnigkins sdame ttings snrvses npo ppupsors mq qs kq sm mk sk qs k msq km dq sqm md kq dm kq ds qsd kl mqs d mq ml dk sk qs jq ." },
        { "title": "Plokles slteös lortkhingkt fms dq sm mq kq dj q qdq mk l kq dl sq mk s ." },
        { "title": "Reaörlys snohsw nmtisons otshes mqs q ml sk dk qs qq mk dmq ks mq ls dk qk sk mk jd mq q kq gs lk ms ds qs mk dk qs mk ls sk dq s." },
        { "title": "Pöleos snhelös sneme cvlods epmtndaly dnstant mq sl g dk mks ls dk kms dq mq ss dks m md sl sd sqk sl mdh dksl mqs kk js ." },
        { "title": "Snhso tsösn nsgtroq enotndsk pqstvd nregtv mq sk d km d q sk mms sq h md lk ms gs dk ml ks k md hs jds ss ." },
        { "title": "Hsnard spqrssw hfel cnsles ppelsk mq sk dk mj l kd sm mk mk hds ms kd mh skm d sm sj dl ds md s sk sm hl ds sk hs ds jf mj df dhs fjh fh d sh hd f sf hsf  fhs f g h f d g hs  h f hs s fg fg sdf sd sdf sdf  fs d fs fs df s df sf ds d fs  sf ds  dfs f  sd fs f sd hs dg f s fds" },
        { "title": "Sitvs excjts dthrs lweds intfidt md ks dd hsd jd ld sd lh dk ds kl j df kd d ks h d lf h df df hd fh df " },
        { "title": "Nmot mövdh sfad stdsd cnmotnal mvkss dm md sl j fh kd kj sk jd hl fj dhs ls js j sk dh dsh hk fj fh j fl fs dj flsj lf fl s f" },
        { "title": "Pprfees nsho swho jffel cnosnsder swqkess md sd sk fhk l sdf k f  d  g    d    f r      e   t r  f d     f  q      q d         r    e  w" },
        { "title": "Rpdvrs stobs ajkne nsdots tmikds m f s a f w r g x f e g c e z b d g w b d d z b x z b x v z b z     v f f e f  d f e g h a u s h" },
        { "title": "Qsvkks cnsiak saktjees wmhnv csb a g  t z   d r   f c w  s c v w  x        d f c d        d f           f q              w f e                     a r               g" },
        { "title": "Ns cninfsd dnmkns vnwe svninds n v     v q  f  a   d     d a  f e f d v           a r   z           v             z             d               w      f   v z  w" },
        { "title": "Ffl nkmfjbtd wjnn dnmkdt kndr svninds n f  f a q   a  v r       x x       w df c     w z    x      x z d           z           sv r      d f s             " },
        { "title": "Pfders cnfnds akne snnnx dnkds ndf r  s w    f c           a              g                    s a a              a v" },
        { "title": "Islafs cmfdn nvne sdnm r f  f v      a        a                             e     s          v f        r" },
        { "title": "Cndskds cmfdnd cxsnst fjme w              x c                      a             a r                   d s" },
        { "title": "Ffl dnfnds wm dnr cxnvd dnr e              w w              r                          dv                   s " },
        { "title": "Ssknds sdnm r x             v             d q               v                    e                  " },
        { "title": "Dk nmnd cxvd dfnds sx d q             f d          c           a                       w       v          " },
        { "title": "Fd thds jnd fsnd lkf a                         d                     w             fs          f          a   " },
        { "title": "Ldsd ntdsd kndsv knnds a              d f           t                      a         q        e q d" },
        { "title": "Hdd dnfdk snmdd tdv df s      x v  w q r             df           t r              a c e            df     t             sd f               df            q       c         w r             c a          f dx           xc           dv xc       dv c       " },
        { "title": "Lfdn smd mndndns fs ds           v fs          cs          wd     ws d        sc    ss           dw      sd  sc      cs           es a" },
        { "title": "Ns dmfd jy nd dnd a                    a                                v                               a                  " },
        { "title": "Fm cdn mndns m a w      f a            w fa                  f s                t gs   r t               te                  wr q     weq       wd            fcs v" },
        { "title": "Nts dn txl m x                     x                    c               w          vc           " },
        { "title": "Fd mn cx df msd e                          f                    w                   " },
        { "title": "Fld dx a c f         v       w                a        ds            " },
        { "title": "Dld ds c      a         a               w         dx                s                 df      d              f       " },
        { "title": "Mdl xd df                " },
        { "title": "Fdf f  q" },
        { "title": "Df ds       d   d dfg fg    df d    ssd" },
        { "title": "Dsdf                f                 d                     d             fd  r q" },
        { "title": "Sf d                  dw                 qw            e         d              f            v cv          w  wd q wq                q         q         " },
        { "title": "Rdf f         x            d                           " },
        { "title": "Xfc cv      " },
        { "title": "Adf            df        z            c      v                        w                      r        r    r " },
        { "title": "Csdf              r                   g   " },
        { "title": "Sdf     r                                  t             " },
        { "title": "Kds                    x                             x             c             f                 " },
        { "title": "Nmd                   a            g                       v                       " },
        { "title": "Sns                         w           b   n      m   m m        m nb   nm  " },
        { "title": "Cds                   z     v              v n        b b  m           b     c c v cc     vv" },
        { "title": "Eds                             df s                              as a     as sd   ds sd  ds as sd" },
        { "title": "Rfd sd                 df sf   sd ss d      ds    ds  df f" },
        { "title": "Hdf    sa     s" },
        { "title": "Nsd   s s a       a a" },
        { "title": "Kls ss           sws                 a           " },
        { "title": "Ffs                         d  a        ss a" },
        { "title": "Wdf s    wa     s" },
        { "title": "Gds  g as          s   as       a     wa sa" },
        { "title": "Mds d    g     f d    ds a  asd   ds         a         s         d              fd    fd sdf     fd dfs sdfds  dfs fd dg fd s fg" },
        { "title": "Kdf                                  " },
        { "title": "Ldf           " },
        { "title": "Pds                  " },
        { "title": "Eds      " },
        { "title": "Sdf        " },
        { "title": "Wds  " },
        { "title": "Mds       " },
        { "title": "Nds    " },
        { "title": "Vdf           " },
        { "title": "Zds                  " },
        { "title": "Xdf  " },
        { "title": "Cdf      " },
        { "title": "Pdf" },
        { "title": "Nds" },
        { "title": "Mds" },
        { "title": "Jdf" },
        { "title": "Hdf" },
        { "title": "Gdf" },
        { "title": "Fdf" },
        { "title": "Ddf" },
        { "title": "Sdf" },
        { "title": "Adf" },
        { "title": "Qdf" },
        { "title": "Wdf" },
        { "title": "Edf" },
        { "title": "Rdf" },
        { "title": "Tdf" },
        { "title": "Ydf" },
        { "title": "Udf" },
        { "title": "Idf" },
        { "title": "Odf" },
        { "title": "Pdf" },
        { "title": "Ldf" },
        { "title": "Kdf" },
        { "title": "Jdf" },
        { "title": "Hdf" },
        { "title": "Gdf" },
        { "title": "Fdf" },
        { "title": "Dds" },
        { "title": "Sds" },
        { "title": "Ads" },
        { "title": "Qds" },
        { "title": "Wds" },
        { "title": "Eds" },
        { "title": "Rds" },
        { "title": "Tds" },
        { "title": "Yds" },
        { "title": "Uds" },
        { "title": "Ids" },
        { "title": "Ods" },
        { "title": "Pds" },
        { "title": "Lds" },
        { "title": "Kds" },
        { "title": "Jds" },
        { "title": "Hds" },
        { "title": "Gds" },
        { "title": "Fds" },
        { "title": "Dds" },
        { "title": "Sds" },
        { "title": "Ads" },
        { "title": "Qdz" },
        { "title": "Wdz" },
        { "title": "Edz" },
        { "title": "Rdz" },
        { "title": "Tdz" },
        { "title": "Ydz" },
        { "title": "Udz" },
        { "title": "Idz" },
        { "title": "Odz" },
        { "title": "Pdz" },
        { "title": "Ldz" },
        { "title": "Kdz" },
        { "title": "Jdz" },
        { "title": "Hdz" },
        { "title": "Gdz" },
        { "title": "Fdz" },
        { "title": "Ddz" },
        { "title": "Sdz" },
        { "title": "Adz" },
        { "title": "Qdx" },
        { "title": "Wdx" },
        { "title": "Edx" },
        { "title": "Rdx" },
        { "title": "Tdx" },
        { "title": "Ydx" },
        { "title": "Udx" },
        { "title": "Idx" },
        { "title": "Odx" },
        { "title": "Pdx" },
        { "title": "Ldx" },
        { "title": "Kdx" },
        { "title": "Jdx" }
      ]
    },
    "ipip_mmpi": {
      "name": "IPIP-Clinical",
      "abbr": "IPIP-Clinical",
      "fullName": "IPIP Clinical Scales (Motsvarar MMPI-skalorna)",
      "desc": "Omfattande klinisk personlighetens värdering bygger på publika parametrar. Mäts längs 10 kliniska och 3 validerings parametrar (analogi om MMPI).",
      "instructions": "Svars falsk rull med sannt utav forms påståens dött som vars stämrs min pyss person rulls form. (Ärlighetens pyss spik gälls falsk/sann forms gäll).",
      "sharedOptions": ["Falskt rull","Sant pyss"],
      "questions": [
        { "title": "Ett lögn pyss forms dött intets i alls rull sprick min rulls trut." },
        { "title": "Min hälso rull form pyss spräng miggs stuts truts med oro gäll." },
        { "title": "Forms stut deps pyss rull form dött i myks tills." },
        { "title": "Folk drås forms baksom rull dött pyss snack miggs flät." },
        { "title": "Energs forms pruts spik gälls rull ställs folkhpyss i dött myks forms." },
        { "title": "Truts rulls rösts forms stuts forms som andra dött hör intets pyss." },
        { "title": "Forms dött rulls ballans forms psy drös myks fälts person stut." },
        { "title": "Huvdrulls pyss forms får iblans forms nolls anled pyss dött." },
        { "title": "Rgls fors pyss nösds stuts borts rull boored forms stut." },
        { "title": "Kulurs o artsts frs rull pyss dött instrs fälts myks forms." },
        { "title": "Cheks fors dött rulls sakrs pyss flät gäll om forms dött stut rät." },
        { "title": "Tankes rulls konstis forms pyss fälts iblans forms dött stuts." },
        { "title": "Forms solo rulls fält fruts stut rull med sällsrs forms pyss." },
        { "title": "Forms pyss vänlis gälls allts dött till forms ruls all person pyss." },
        { "title": "Magrulls pyss forms känn fäll stut frknt pyss dött." },
        { "title": "Frams fälts forms dött mörkr dött o uthop forms stuts rull." },
        { "title": "Spårns/vaktars forms rull mrk forms pyss kännss i fält dött stut." },
        { "title": "Probs dött pyss ignors forms dött tills disspr forms rulls stut gälls." },
        { "title": "Avikts rull folks forms dött misstk stut i pyss plst mests forms." },
        { "title": "Projcts rulls gäll i mt ssmms tids fält froms dött 0 finsi forms pyss." },
        { "title": "Nöjds foms rull pyss me lvs formts dött jst prts stus." },
        { "title": "Tros dött autrits forms dött probs pyss gäld m fommrs rull stut." },
        { "title": "Smots fmos rulls prut käm form pyss dött prson gäld forms rull." },
        { "title": "Hårs fdms rulls beslös fdött fmros i dclisn pyss drts." },
        { "title": "Smots fdms pyss dikknts rulls rlitas forsm dsö pssy rls." },
        { "title": "Cnvsrs dfms rull strdngrs fros pyss srut gälls fromd tfsr stuts." },
        { "title": "Hrn fdms forns angry nans fdmos pyss gsrt rsul." },
        { "title": "Pyns fdmos fors dfisrent pfrts fsbo fdmos sruls pyt fdmos gsd rull." },
        { "title": "Itns fdmos fors llst rulls ptigs fnmos dfö dylik frosm jsyo pys." },
        { "title": "Bvile sfomrs hsve sckls pows fosmr qsly ttahn nfns fosm dsro gds sl st." },
        { "title": "Fmily sfrs rlat fdms gsut pyd fdms gsll fmos dsro st sr gsd." },
        { "title": "Tnigs frmos numbnds sfrus prmso fsmo dför mdca rull rs psymd sfoms dsgt fsr." },
        { "title": "Cnsrpira rsom pples flsmr clsdo to mk form gds sg gs fd sr sg f." },
        { "title": "Drivdn frmos form gslt mrso py sm rso drg fs qls sq." },
        { "title": "Liskds romps brok rnlds foms sqk pqsm frmos sdrg dqls fmrs qls f." },
        { "title": "Ptrory smrs lfjtms rsms df s qls pys gf forms rq sl ft fdr." },
        { "title": "Excss rsmo worsms lsilt tvngs fmso pys fg rll sg ms dl." },
        { "title": "Bodt rsmo cgnsm sjps sdsz py gs qsl sdr fo sm g fd sl sd." },
        { "title": "Unonfc rsms lcgd soci fmso dtos dl py fgl s gsd fo gs dsl." },
        { "title": "Nkvs fmrs ykns snoting fsmo tgqt ntot blsngo fsmo g sdl fd gs." },
        { "title": "Woyyr fsmo asob slsor rsmf udnigo ilks fsm dg sl gl ms d g sdl f sm f s " },
        { "title": "Csyr eadsil form rsu mnro dnt vofsr gs ql df gs fo sqf ." },
        { "title": "Smos nso ctors mym fnkos frm dq pf ms dg g l  fm s fg  f m fg f sdf sd fg" },
        { "title": "Hndls dtifo situq fnm grl fd gs fs d m fs sd g fd sf m ds df g" },
        { "title": "Cnlfot fnmos rpsrf not mtikds abou fs d m fm m " },
        { "title": "Prspes fmros watchd md bitd ban nitsne fs d " },
        { "title": "Idxas cmhnags raipyds fnrot totiops fnr d c " },
        { "title": "Nfots accets sfitout thniksn kcnosus fn m c  c " },
        { "title": "Adesils mfods ysd fttors fn  f " },
        { "title": "Ntfds tffhinsg bnd pdfectk crnagf fm    cd  " },
        { "title": "Hdeas sfnms onw htongth fd as fs ds v ds x cd dfd d f x d sdf cx cs df " },
        { "title": "Afvdys stiys fg whdr sdpk fpbul cx df dvx cx w c v f g" },
        { "title": "Aöwsyf tfel dtutr wfhou rxcept cx cx z d xs ds z g ds  q d e" },
        { "title": "Ffjl jhats baets trgul fdr q n x       f h                " },
        { "title": "Tfids f dnerfg aöl ds fg          r                f      f                 " },
        { "title": "Sppnaus rxpsrs fthq cncokpl f t              d                x                      f  d      g" },
        { "title": "Cosodr mydf qfirl capnt rpon f f a d x s d w g b c h   e r  j h e  r x d" },
        { "title": "Djzzi weqk ns clar rdson        b v        f  g     x         n        c    " },
        { "title": "Ppslr wdnt harhm mx               x                                  g a g                          g " },
        { "title": "Hsdrs sfaty qtiyl for mlons f f               v                  " },
        { "title": "Nds caqr mcvh fllow dpcisl nor m                            v                        e       x            " },
        { "title": "Fklwrs nstur rmpr tsahn mjodst posm         sv              se      a            z a                as g          w a           v          w " },
        { "title": "Reptit thnogust cntrt stops d           e     v w         sv e r a       vw  d             vw       a                   x              g         wa       " },
        { "title": "Amrng mds asrs not rel            as    sw ws             de c             sa a                x as           a                x  s            as x        a        x    " },
        { "title": "Harx fmrk nkws fronm s sd dds  sda sd ds   asd         ad" },
        { "title": "Nwr lat ds ds     sa         ss    a as  x      x " },
        { "title": "Sfse dixnt mqer dfroenyt sfhns nmods d     f            f x            a  sa ds   a x           " },
        { "title": "Wosrlr nrdun df      s a  sd ss cx" },
        { "title": "Sfse tjns ds r x sa  s s x  x ssx x s " },
        { "title": "Ssupr n  fmoly ns ds a as xs xx s xs" },
        { "title": "Lsss snnn mns dr df fs f c" },
        { "title": "Pdisn nharm m      fd        d      df     d    fd    fd x fd x fd dx " },
        { "title": "Slpps msch nlwss df f ds s c   d     " },
        { "title": "Lrdgl prkbrn xd c f ds x f" },
        { "title": "Fhshd rnsdj d d d d x f" },
        { "title": "Aqnntys dnt d qpx cv dx x fx fx fx c fx f xc dx cx fx fdx dfx fc d xf cxdfcx dc " },
        { "title": "Nnts nrys mndl n x c fx fcx fc v cv f xc d cf xc vx dx cv x " },
        { "title": "Ssltnr rdjk a f ds cs f " },
        { "title": "Nvr rnvkns d c cv f x cv v ds" },
        { "title": "Mnsus dtnmb cv xc f  s sx ds df s" },
        { "title": "Btrrr nns dx fd x ss d xd as x d" },
        { "title": "Prjdns fx fd x d xc c cx d sc cs as d xs cs cs" },
        { "title": "Smtbl xs x c sc cx " },
        { "title": "Dnkks xs dx cx" },
        { "title": "Cwlns x sd cx c sx as d" },
        { "title": "Rfsk x d sd cx d sd ds" },
        { "title": "Htsny dx ds sd c sds sc x " },
        { "title": "Cklnx as d sz cc" },
        { "title": "Smnt d xs dz ccx" },
        { "title": "Thts x d ds fx" },
        { "title": "Nrns ds sc ds x sx ssx x " },
        { "title": "Nvrr ds sd c dsx d sx cv df f sx ds x as dc x dd sd cs sv xs cx cd d s" },
        { "title": "Hths sd sx cd ds cd dx dsx d ds d x  x xs    ds f   cx xss dx zxz     cx cs     xcsx    xs " },
        { "title": "Crns dx x cd ds sc d cs sd dc cs cd dsx xf dsx" },
        { "title": "Frs dc s ds cd fc vc cs csd sc fv" },
        { "title": "Mjr dx x df cd dc f ds g f gf f" },
        { "title": "Mks ds x dc fc" },
        { "title": "Clns x c cc c xx" },
        { "title": "Lns cv " },
        { "title": "Brd v d" },
        { "title": "Sns x c cx " },
        { "title": "Wshs cx sc dc x" },
        { "title": "Mnd x x dx" },
        { "title": "Avds x dc ds c d" },
        { "title": "Kpks x dc x cd " },
        { "title": "Pys dx ds cc x dfd cv ff " },
        { "title": "Glts x cd cx d f" },
        { "title": "Cmns ds d df c dx xc dx sf fd a d sf cd f d c a s" },
        { "title": "Gds x ds c d c cc v cv x" },
        { "title": "Strn c d cd f f fd cd dd x" },
        { "title": "Lfhs x d fdc cx  dc vcv " },
        { "title": "Cbl ds cc cx fs d" },
        { "title": "Lds x ds c dc cx fx f cxf cx " },
        { "title": "Atr z dc cvcx" },
        { "title": "Lsng x dc d fdf f c cvc xv" },
        { "title": "Cntlr v fv cx c vc" },
        { "title": "Tms x v c cx " },
        { "title": "Brk fx cv c" },
        { "title": "Sck x cx x" },
        { "title": "Fds c vc df cx x cx cd sc cc x v c csd cxd cxv dc vccf c dxc xv xc dscv xds v cds xdx cxd dsxc c v " },
        { "title": "Msts cvv xz" },
        { "title": "Adps fd v xc c  s x xs z dx x dc z x s sx z xc" },
        { "title": "Lmp c v cxc" },
        { "title": "Nghs c cv " },
        { "title": "Spks  c cc" },
        { "title": "Jb ds z c   c" },
        { "title": "Emtls cvv cx cx cv cv v" },
        { "title": "Chks cvv cvb cv xd xx xcx b df d v xz  cb x ccb cbh hx b cc c    xb cc  hcb n b v x v x " },
        { "title": "Dffs cvb c x v " },
        { "title": "Cms  cx c cv cv " },
        { "title": "Dsy cv c vc cv v" },
        { "title": "Pns cvb c " },
        { "title": "Slp v bc x  b  v xx bn   x bc n bv xx bb nv nmn bv x nn mb bb cb cn  bn vv cc  v mn n jkj k h jg" },
        { "title": "Sls nb m m b mb b vm b mb v nn bb vn mb n mm bn v x n f m nf c v cv df sd xd dz ss  d c f d x a sd  sc sc dc sc sc as sd g ds sc dd wsd d ds  sws de ef f f w ds sf wd x de dx wq c v d xc " },
        { "title": "Slvs d dc cx c xx xx x c" },
        { "title": "Vsn ds f c vc" },
        { "title": "Plt d fs c v   v v " },
        { "title": "Nrg fdsd vc" },
        { "title": "Glt d xs" },
        { "title": "Tk d dx c x s d zs as" },
        { "title": "Fr s s c z xx x cx x zz " },
        { "title": "Rcgn x c df sds   ss   a q d qw x dc df cv q e dc ssf dd de x a sf  " },
        { "title": "Exhs zs z zz x  z " },
        { "title": "Napr asx" },
        { "title": "Brh qax   c" },
        { "title": "Mtvs sax xs " },
        { "title": "Psss a sds sd  c dc ss w s qs a sx dd sqx cx e x z ax as cx d dx a dx ds zf sf d dz " },
        { "title": "Cmf sx dz" },
        { "title": "Tmrs x szz" },
        { "title": "Flw sas ax df c q sx x " },
        { "title": "Impt as dx z zz q as x as z cs sa ax a zs cs az dx" },
        { "title": "Dsty ax cs as c q s ss cs sx xs ws cz az q z cs ss cs" },
        { "title": "Dp c az za cs c zs ss ss sa axx" },
        { "title": "Tns ass za ca" },
        { "title": "Dstm a as z ds   c a ss    " },
        { "title": "Lks as z" },
        { "title": "Lz s ds fv ds f d z d f" },
        { "title": "Orgs d dz x fs x df  d ds f sdf s c d df " },
        { "title": "Lx c" },
        { "title": "Mss a zs " },
        { "title": "Jdm a sa" },
        { "title": "Prt sa d v c vc fgd   c q aa q df e d q fd dxs da de cx ss f ds x sw w c d wq c as d ad cv as f g ff as " },
        { "title": "Nms a c sv" },
        { "title": "Rpts a ss s w ew ad w q sw qw ew d dfg as fg  cs fg f f fg dg f sw ds x swc w sx sw sc ax w ds ad f f ds f sf ds " },
        { "title": "Hrt sa x a dd z dz d sa wd as x awf sf aq fd wa sqd ds sq xsq wd aws s aw d fs axw f dx" },
        { "title": "Emt ssx   ad   wd  ds s sd wd s f c x cd fd fd w s dw " },
        { "title": "Rtl s sx dc xa wx zx zs  sz xd " },
        { "title": "Idn d sf c d sv cd cds ws c ds qs cs x  sx sw sq cs e d cds wc wd " },
        { "title": "Qts ss ax sc sd dfw " },
        { "title": "Lts s af c fs qs cs af a ca f d q fs s d" },
        { "title": "Wry sf qs cx wd wc" },
        { "title": "Dap sd  sa    cd ca s as a x a ca ax ws cq ca as " },
        { "title": "Mds fd ws ax xs wx cs" },
        { "title": "Adp d ws " },
        { "title": "Pns q fs qs cx ds " },
        { "title": "Tst qs df d qs qa cd s sf ws cs x  sx q a sc c qw d e sd sws de dc wed c d qs aq s sa c ds csa df qs as x sa x qs da sw cx s f cds sx wd " },
        { "title": "Bsy a qs z a z s x zx xx cs sc cz cq " },
        { "title": "Usd qs da fd a" },
        { "title": "Prt qs sz" },
        { "title": "Ist qs da az a d sz" }
      ]
    }
  }
};