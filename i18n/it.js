const LANG_IT = {
  ui: {
    appTitle: "Valutazioni della Salute Mentale",
    appSubtitle: "Strumenti di autovalutazione psicologica",
    tabTests: "Test",
    tabHistory: "Storico",
    welcome: "Benvenuto/a. Seleziona una valutazione per iniziare.",
    startTest: "Inizia il test",
    nextQuestion: "Successivo",
    prevQuestion: "Precedente",
    viewResults: "Vedi risultati",
    question: "Domanda",
    of: "di",
    items: "item",
    backToTests: "Torna ai test",
    repeatTest: "Ripeti il test",
    viewHistory: "Vedi storico",
    otherTests: "Altri test",
    detailByItem: "Dettaglio per item",
    helpResources: "Risorse di aiuto",
    helpText: "Se stai attraversando una crisi emotiva, cerca aiuto professionale. Telefono Amico: 02 2327 2327 (Italia) o contatta un professionista della salute mentale.",
    noRecords: "Nessun registro salvato.",
    completeFirst: "Completa almeno un test per vedere lo storico.",
    goToTests: "Vai ai test",
    trend: "Tendenza",
    all: "Tutti",
    clearHistory: "Cancella storico",
    clearConfirm: "Sei sicuro/a di voler cancellare tutto lo storico? Questa azione non può essere annullata.",
    score: "Punteggio",
    outOf: "di",
    disclaimer: "Questo strumento è solo indicativo e non sostituisce una valutazione professionale. Consulta uno specialista della salute mentale per una diagnosi adeguata.",
    resumePrompt: "Hai un test in corso",
    continueTest: "Continua il test",
    questionsAnswered: "domande risposte",
    inProgress: "In corso",
    testBy: "Test",
  },

  scales: {
    agreement5: [
      "Molto in disaccordo",
      "In disaccordo",
      "Né d'accordo né in disaccordo",
      "D'accordo",
      "Molto d'accordo"
    ],
    frequency4: [
      "Mai",
      "Diversi giorni",
      "Più della metà dei giorni",
      "Quasi tutti i giorni"
    ],
    frequency5: [
      "Mai",
      "Quasi mai",
      "A volte",
      "Abbastanza spesso",
      "Molto spesso"
    ],
    severity4: [
      "Per niente",
      "Lievemente",
      "Moderatamente",
      "Gravemente"
    ],
    severity5: [
      "Per niente",
      "Un po'",
      "Moderatamente",
      "Parecchio",
      "Estremamente"
    ],
    yesNo: ["No", "Sì"],
  },

  tests: {
    bdi: {
      name: "BDI-II",
      fullName: "Inventario della Depressione di Beck-II",
      desc: "Valuta la presenza e la gravità dei sintomi depressivi nelle ultime due settimane.",
      instructions: "Leggi ogni gruppo di affermazioni attentamente e seleziona quella che meglio descrive come ti sei sentito/a nelle ultime due settimane, incluso oggi.",
      questions: [
        {
          title: "Tristezza",
          options: [
            "Non mi sento triste.",
            "Mi sento triste per gran parte del tempo.",
            "Mi sento triste tutto il tempo.",
            "Mi sento così triste o infelice che non riesco a sopportarlo."
          ]
        },
        {
          title: "Pessimismo",
          options: [
            "Non sono scoraggiato/a riguardo al mio futuro.",
            "Mi sento più scoraggiato/a riguardo al mio futuro rispetto a prima.",
            "Non mi aspetto che le cose vadano bene per me.",
            "Sento che il mio futuro è senza speranza e che le cose potranno solo peggiorare."
          ]
        },
        {
          title: "Fallimento",
          options: [
            "Non mi sento un/a fallito/a.",
            "Ho fallito più di quanto avrei dovuto.",
            "Guardando indietro, vedo molti fallimenti.",
            "Sento di essere un completo fallimento come persona."
          ]
        },
        {
          title: "Perdita di piacere",
          options: [
            "Traggo lo stesso piacere di sempre dalle cose che mi piacciono.",
            "Non mi godo le cose come prima.",
            "Traggo molto poco piacere dalle cose che ero solito/a apprezzare.",
            "Non riesco a trarre alcun piacere dalle cose che ero solito/a apprezzare."
          ]
        },
        {
          title: "Sensi di colpa",
          options: [
            "Non mi sento particolarmente in colpa.",
            "Mi sento in colpa per molte cose che ho fatto o avrei dovuto fare.",
            "Mi sento abbastanza in colpa la maggior parte del tempo.",
            "Mi sento in colpa tutto il tempo."
          ]
        },
        {
          title: "Sentimenti di punizione",
          options: [
            "Non sento di essere punito/a.",
            "Sento che potrei essere punito/a.",
            "Mi aspetto di essere punito/a.",
            "Sento di essere punito/a."
          ]
        },
        {
          title: "Insoddisfazione verso se stessi",
          options: [
            "I miei sentimenti verso me stesso/a non sono cambiati.",
            "Ho perso la fiducia in me stesso/a.",
            "Sono deluso/a di me stesso/a.",
            "Non mi piaccio."
          ]
        },
        {
          title: "Autocritica",
          options: [
            "Non mi critico o mi biasimo più del solito.",
            "Sono più critico/a verso me stesso/a di quanto fossi prima.",
            "Mi critico per tutte le mie colpe.",
            "Mi biasimo per tutto ciò che va male."
          ]
        },
        {
          title: "Pensieri o desideri suicidari",
          options: [
            "Non ho alcun pensiero di uccidermi.",
            "Ho pensieri di uccidermi, ma non li metterei in pratica.",
            "Vorrei uccidermi.",
            "Mi ucciderei se ne avessi l'opportunità."
          ]
        },
        {
          title: "Pianto",
          options: [
            "Non piango più del solito.",
            "Piango più del solito.",
            "Piango per ogni piccola cosa.",
            "Ho voglia di piangere ma non ci riesco."
          ]
        },
        {
          title: "Agitazione",
          options: [
            "Non sono più irrequieto/a o teso/a del solito.",
            "Mi sento più irrequieto/a o teso/a del solito.",
            "Sono così irrequieto/a o agitato/a che mi è difficile stare fermo/a.",
            "Sono così irrequieto/a o agitato/a che devo muovermi o fare qualcosa continuamente."
          ]
        },
        {
          title: "Perdita di interesse",
          options: [
            "Non ho perso interesse per le altre attività o persone.",
            "Sono meno interessato/a alle altre persone o cose rispetto a prima.",
            "Ho perso quasi tutto l'interesse per le altre persone o cose.",
            "Mi è difficile interessarmi a qualsiasi cosa."
          ]
        },
        {
          title: "Indecisione",
          options: [
            "Prendo decisioni bene come sempre.",
            "Trovo più difficile prendere decisioni rispetto al solito.",
            "Ho molte più difficoltà a prendere decisioni rispetto a prima.",
            "Ho problemi a prendere qualsiasi decisione."
          ]
        },
        {
          title: "Svalutazione",
          options: [
            "Non mi sento privo/a di valore.",
            "Non mi considero prezioso/a e utile come prima.",
            "Mi sento meno prezioso/a quando mi confronto con gli altri.",
            "Sento di non valere nulla."
          ]
        },
        {
          title: "Perdita di energia",
          options: [
            "Ho tanta energia come sempre.",
            "Ho meno energia di quanta ne avessi prima.",
            "Non ho abbastanza energia per fare molto.",
            "Non ho abbastanza energia per fare nulla."
          ]
        },
        {
          title: "Cambiamenti nelle abitudini del sonno",
          options: [
            "Non ho notato alcun cambiamento nelle mie abitudini del sonno.",
            "Dormo un po' di più o un po' di meno del solito.",
            "Dormo molto di più o molto di meno del solito.",
            "Dormo per la maggior parte della giornata o mi sveglio 1-2 ore prima e non riesco a riaddormentarmi."
          ]
        },
        {
          title: "Irritabilità",
          options: [
            "Non sono più irritabile del solito.",
            "Sono più irritabile del solito.",
            "Sono molto più irritabile del solito.",
            "Sono irritabile tutto il tempo."
          ]
        },
        {
          title: "Cambiamenti nell'appetito",
          options: [
            "Non ho notato alcun cambiamento nel mio appetito.",
            "Il mio appetito è un po' minore o un po' maggiore del solito.",
            "Il mio appetito è molto minore o molto maggiore del solito.",
            "Non ho appetito per niente o ho voglia di mangiare continuamente."
          ]
        },
        {
          title: "Difficoltà di concentrazione",
          options: [
            "Riesco a concentrarmi bene come sempre.",
            "Non riesco a concentrarmi bene come al solito.",
            "Mi è difficile mantenere la mente su qualcosa per molto tempo.",
            "Non riesco a concentrarmi su nulla."
          ]
        },
        {
          title: "Stanchezza o affaticamento",
          options: [
            "Non sono più stanco/a o affaticato/a del solito.",
            "Mi stanco o mi affatico più facilmente del solito.",
            "Sono troppo stanco/a o affaticato/a per fare molte delle cose che facevo prima.",
            "Sono troppo stanco/a o affaticato/a per fare la maggior parte delle cose che facevo prima."
          ]
        },
        {
          title: "Perdita di interesse per il sesso",
          options: [
            "Non ho notato alcun cambiamento recente nel mio interesse per il sesso.",
            "Sono meno interessato/a al sesso rispetto a prima.",
            "Sono molto meno interessato/a al sesso ora.",
            "Ho completamente perso l'interesse per il sesso."
          ]
        }
      ],
      results: {
        minimal: {
          label: "Minima",
          desc: "Il tuo punteggio suggerisce un livello minimo di depressione. È normale sperimentare alti e bassi emotivi."
        },
        mild: {
          label: "Lieve",
          desc: "Il tuo punteggio suggerisce sintomi depressivi lievi. Considera di parlare con un professionista se persistono."
        },
        moderate: {
          label: "Moderata",
          desc: "Il tuo punteggio suggerisce sintomi depressivi moderati. Si raccomanda di consultare un professionista della salute mentale."
        },
        severe: {
          label: "Grave",
          desc: "Il tuo punteggio suggerisce sintomi depressivi gravi. È importante cercare aiuto professionale il prima possibile."
        }
      }
    },

    bai: {
      name: "BAI",
      fullName: "Inventario d'Ansia di Beck",
      desc: "Valuta la gravità dei sintomi d'ansia durante l'ultima settimana.",
      instructions: "Indica quanto ti ha disturbato ciascun sintomo durante l'ultima settimana, incluso oggi.",
      questions: [
        { title: "Intorpidimento o formicolio" },
        { title: "Vampate di calore" },
        { title: "Tremori alle gambe" },
        { title: "Incapacità di rilassarsi" },
        { title: "Timore che accada il peggio" },
        { title: "Capogiri o stordimento" },
        { title: "Battito cardiaco forte e accelerato" },
        { title: "Instabilità" },
        { title: "Terrore o spavento" },
        { title: "Nervosismo" },
        { title: "Sensazione di blocco" },
        { title: "Tremori alle mani" },
        { title: "Irrequietezza, insicurezza" },
        { title: "Paura di perdere il controllo" },
        { title: "Sensazione di soffocamento" },
        { title: "Paura di morire" },
        { title: "Paura" },
        { title: "Problemi digestivi" },
        { title: "Svenimenti" },
        { title: "Rossore al viso" },
        { title: "Sudorazione, fredda o calda" }
      ],
      results: {
        minimal: {
          label: "Minima",
          desc: "Il tuo punteggio suggerisce un livello minimo di ansia."
        },
        mild: {
          label: "Lieve",
          desc: "Il tuo punteggio suggerisce ansia lieve. Monitora i tuoi sintomi."
        },
        moderate: {
          label: "Moderata",
          desc: "Il tuo punteggio suggerisce ansia moderata. Considera di consultare un professionista."
        },
        severe: {
          label: "Grave",
          desc: "Il tuo punteggio suggerisce ansia grave. Si raccomanda di cercare aiuto professionale."
        }
      }
    },

    gad7: {
      name: "GAD-7",
      fullName: "Scala del Disturbo d'Ansia Generalizzata-7",
      desc: "Valuta la gravità dell'ansia generalizzata nelle ultime due settimane.",
      instructions: "Nelle ultime 2 settimane, con quale frequenza sei stato/a disturbato/a dai seguenti problemi?",
      questions: [
        { title: "Sentirsi nervoso/a, ansioso/a o teso/a" },
        { title: "Non essere in grado di smettere o controllare le preoccupazioni" },
        { title: "Preoccuparsi troppo per cose diverse" },
        { title: "Difficoltà a rilassarsi" },
        { title: "Essere così irrequieto/a che è difficile stare seduto/a" },
        { title: "Irritarsi o infastidirsi facilmente" },
        { title: "Avere paura come se potesse accadere qualcosa di terribile" }
      ],
      results: {
        minimal: {
          label: "Minima",
          desc: "Il tuo punteggio suggerisce un livello minimo di ansia."
        },
        mild: {
          label: "Lieve",
          desc: "Il tuo punteggio suggerisce ansia lieve."
        },
        moderate: {
          label: "Moderata",
          desc: "Il tuo punteggio suggerisce ansia moderata. Considera di consultare un professionista."
        },
        severe: {
          label: "Grave",
          desc: "Il tuo punteggio suggerisce ansia grave. Si raccomanda di cercare aiuto professionale."
        }
      }
    },

    msibpd: {
      name: "MSI-BPD",
      fullName: "Inventario di Screening McLean per il Disturbo Borderline di Personalità",
      desc: "Strumento di screening dei tratti associati al disturbo borderline di personalità.",
      instructions: "Rispondi sì o no a ciascuna delle seguenti domande.",
      questions: [
        { title: "Ti sei mai tagliato/a, bruciato/a o fatto del male intenzionalmente?" },
        { title: "Hai mai tentato il suicidio?" },
        { title: "Hai avuto almeno due relazioni (o tentativi di relazione) molto intense ma instabili?" },
        { title: "Il tuo senso di chi sei cambia spesso in modo drammatico?" },
        { title: "Il tuo umore cambia spesso in modo improvviso?" },
        { title: "Provi spesso una rabbia intensa che fai fatica a controllare?" },
        { title: "Diffidi spesso delle altre persone?" },
        { title: "Ti senti spesso irreale o come se le cose intorno a te fossero irreali?" },
        { title: "Ti senti spesso vuoto/a?" },
        { title: "Fai spesso sforzi disperati per evitare che qualcuno ti abbandoni?" }
      ],
      results: {
        minimal: {
          label: "Minima",
          desc: "Il tuo punteggio suggerisce una bassa presenza di tratti associati al disturbo borderline."
        },
        moderate: {
          label: "Moderata",
          desc: "Il tuo punteggio suggerisce alcuni tratti associati al disturbo borderline. Considera di consultare un professionista."
        },
        severe: {
          label: "Significativa",
          desc: "Il tuo punteggio suggerisce una presenza significativa di tratti borderline. Si raccomanda una valutazione professionale completa."
        }
      }
    },

    pss: {
      name: "PSS-10",
      fullName: "Scala dello Stress Percepito-10",
      desc: "Valuta il grado in cui le situazioni della vita sono percepite come stressanti nell'ultimo mese.",
      instructions: "Le seguenti domande si riferiscono ai tuoi sentimenti e pensieri nell'ultimo mese. Indica con quale frequenza ti sei sentito/a o hai pensato in un certo modo.",
      questions: [
        { title: "Con quale frequenza sei stato/a turbato/a da qualcosa che è accaduto inaspettatamente?" },
        { title: "Con quale frequenza hai avuto la sensazione di non riuscire a controllare le cose importanti nella tua vita?" },
        { title: "Con quale frequenza ti sei sentito/a nervoso/a o stressato/a?" },
        { title: "Con quale frequenza hai gestito con successo i piccoli problemi irritanti della vita?" },
        { title: "Con quale frequenza hai sentito di aver affrontato efficacemente i cambiamenti importanti che stavano avvenendo nella tua vita?" },
        { title: "Con quale frequenza sei stato/a sicuro/a della tua capacità di gestire i tuoi problemi personali?" },
        { title: "Con quale frequenza hai sentito che le cose andavano bene per te?" },
        { title: "Con quale frequenza hai sentito di non riuscire ad affrontare tutte le cose che dovevi fare?" },
        { title: "Con quale frequenza sei riuscito/a a controllare le difficoltà della tua vita?" },
        { title: "Con quale frequenza hai sentito di avere tutto sotto controllo?" }
      ],
      results: {
        minimal: {
          label: "Basso",
          desc: "Il tuo livello di stress percepito è basso. Continua con le tue attuali strategie di coping."
        },
        moderate: {
          label: "Moderato",
          desc: "Il tuo livello di stress percepito è moderato. Considera di integrare tecniche di gestione dello stress."
        },
        severe: {
          label: "Alto",
          desc: "Il tuo livello di stress percepito è alto. Si raccomanda di cercare supporto professionale e tecniche di riduzione dello stress."
        }
      }
    },

    asrs: {
      name: "ASRS v1.1",
      fullName: "Scala di Autovalutazione dell'ADHD nell'Adulto v1.1",
      desc: "Strumento di screening dei sintomi del disturbo da deficit di attenzione e iperattività negli adulti.",
      instructions: "Rispondi alle seguenti domande pensando a come ti sei sentito/a e comportato/a negli ultimi 6 mesi.",
      questions: [
        { title: "Con quale frequenza hai difficoltà a finalizzare gli ultimi dettagli di un progetto, una volta che le parti difficili sono già state fatte?" },
        { title: "Con quale frequenza hai difficoltà a mettere le cose in ordine quando devi svolgere un compito che richiede organizzazione?" },
        { title: "Con quale frequenza hai problemi a ricordare appuntamenti o impegni?" },
        { title: "Quando hai un compito che richiede molta concentrazione, con quale frequenza eviti o ritardi l'inizio?" },
        { title: "Con quale frequenza muovi o contorci le mani o i piedi quando devi stare seduto/a a lungo?" },
        { title: "Con quale frequenza ti senti eccessivamente attivo/a o spinto/a a fare le cose, come se fossi mosso/a da un motore?" }
      ],
      results: {
        minimal: {
          label: "Improbabile",
          desc: "Il tuo punteggio suggerisce una bassa probabilità di ADHD."
        },
        moderate: {
          label: "Possibile",
          desc: "Il tuo punteggio suggerisce alcuni sintomi compatibili con l'ADHD. Considera una valutazione professionale."
        },
        severe: {
          label: "Probabile",
          desc: "Il tuo punteggio suggerisce un'alta probabilità di sintomi di ADHD. Si raccomanda una valutazione professionale completa."
        }
      }
    },

    ocir: {
      name: "OCI-R",
      fullName: "Inventario Ossessivo-Compulsivo Rivisto",
      desc: "Valuta i sintomi del disturbo ossessivo-compulsivo.",
      instructions: "Le seguenti affermazioni si riferiscono a esperienze che molte persone hanno nella vita quotidiana. Indica in che misura ti hanno disturbato nell'ultimo mese.",
      questions: [
        { title: "Ho accumulato talmente tante cose che mi intralciano" },
        { title: "Controllo le cose più del necessario" },
        { title: "Mi dà fastidio quando gli oggetti non sono ben ordinati" },
        { title: "Sento il bisogno di contare mentre faccio cose" },
        { title: "Mi risulta difficile toccare un oggetto quando so che è stato toccato da estranei o da certe persone" },
        { title: "Mi risulta difficile controllare i miei pensieri" },
        { title: "Accumulo cose di cui non ho bisogno" },
        { title: "Controllo ripetutamente porte, finestre, cassetti, ecc." },
        { title: "Mi dà fastidio se gli altri cambiano l'ordine in cui ho messo le cose" },
        { title: "Sento di dover ripetere certi numeri" },
        { title: "A volte devo lavarmi o pulirmi semplicemente perché mi sento contaminato/a" },
        { title: "Mi disturbano pensieri sgradevoli che mi vengono in mente contro la mia volontà" },
        { title: "Evito di buttare le cose perché ho paura di averne bisogno dopo" },
        { title: "Controllo ripetutamente il gas, l'acqua e la luce dopo averli spenti" },
        { title: "Ho bisogno che le cose siano ordinate in un modo determinato" },
        { title: "Sento che ci sono numeri buoni e cattivi" },
        { title: "Mi lavo le mani più del necessario" },
        { title: "Ho spesso pensieri orribili e faccio fatica a liberarmene" }
      ],
      results: {
        minimal: {
          label: "Minima",
          desc: "Il tuo punteggio suggerisce un livello minimo di sintomi ossessivo-compulsivi."
        },
        moderate: {
          label: "Moderata",
          desc: "Il tuo punteggio suggerisce sintomi ossessivo-compulsivi moderati. Considera di consultare un professionista."
        },
        severe: {
          label: "Significativa",
          desc: "Il tuo punteggio suggerisce sintomi ossessivo-compulsivi significativi. Si raccomanda una valutazione professionale."
        }
      }
    },

    pcl5: {
      name: "PCL-5",
      fullName: "Checklist del Disturbo da Stress Post-Traumatico per il DSM-5",
      desc: "Valuta i sintomi dello stress post-traumatico nell'ultimo mese.",
      instructions: "Di seguito c'è una lista di problemi che le persone a volte hanno in risposta a un'esperienza molto stressante. Indica in che misura questo problema ti ha disturbato nell'ultimo mese.",
      questions: [
        { title: "Ricordi ripetuti, disturbanti e involontari dell'esperienza stressante" },
        { title: "Sogni ripetuti e disturbanti riguardo all'esperienza stressante" },
        { title: "Sentirsi o agire improvvisamente come se l'esperienza stressante stesse accadendo di nuovo" },
        { title: "Sentirsi molto male quando qualcosa ti ricorda l'esperienza stressante" },
        { title: "Avere forti reazioni fisiche quando qualcosa ti ricorda l'esperienza stressante (ad esempio, cuore accelerato, difficoltà a respirare, sudorazione)" },
        { title: "Evitare ricordi, pensieri o sentimenti legati all'esperienza stressante" },
        { title: "Evitare cose esterne che ricordano l'esperienza stressante (ad esempio, persone, luoghi, conversazioni, attività, oggetti o situazioni)" },
        { title: "Difficoltà a ricordare parti importanti dell'esperienza stressante" },
        { title: "Avere forti convinzioni negative su se stessi, gli altri o il mondo" },
        { title: "Incolpare se stessi o qualcun altro per l'esperienza stressante o per ciò che è successo dopo" },
        { title: "Avere forti sentimenti negativi come paura, orrore, rabbia, colpa o vergogna" },
        { title: "Perdita di interesse per le attività che prima piacevano" },
        { title: "Sentirsi distante o lontano/a dalle altre persone" },
        { title: "Difficoltà a provare sentimenti positivi" },
        { title: "Comportamento irritabile, scoppi di rabbia o comportamento aggressivo" },
        { title: "Correre troppi rischi o fare cose che potrebbero causare danno" },
        { title: "Essere in stato di super-allerta, vigile o in guardia" },
        { title: "Sentirsi sobbalzare o spaventarsi facilmente" },
        { title: "Avere difficoltà di concentrazione" },
        { title: "Problemi ad addormentarsi o a mantenere il sonno" }
      ],
      results: {
        minimal: {
          label: "Minima",
          desc: "Il tuo punteggio suggerisce un basso livello di sintomi da stress post-traumatico."
        },
        moderate: {
          label: "Moderata",
          desc: "Il tuo punteggio suggerisce sintomi moderati da stress post-traumatico. Considera di consultare un professionista."
        },
        severe: {
          label: "Significativa",
          desc: "Il tuo punteggio suggerisce sintomi significativi da stress post-traumatico. Si raccomanda di cercare aiuto professionale."
        }
      }
    },

    bfi44: {
      name: "BFI-44",
      fullName: "Inventario dei Cinque Grandi Fattori di Personalità",
      desc: "Valuta cinque dimensioni principali della personalità: Estroversione, Amabilità, Coscienziosità, Nevroticismo e Apertura all'esperienza.",
      instructions: "Mi vedo come una persona che... Indica in che misura sei d'accordo o in disaccordo con ciascuna affermazione.",
      questions: [
        { title: "È loquace" },
        { title: "Tende a essere critico/a" },
        { title: "È scrupoloso/a nel lavoro" },
        { title: "È depresso/a, malinconico/a" },
        { title: "È originale, ha idee nuove" },
        { title: "È riservato/a" },
        { title: "È generoso/a e aiuta gli altri" },
        { title: "Può essere un po' negligente" },
        { title: "È tranquillo/a, gestisce bene lo stress" },
        { title: "È curioso/a di molte cose diverse" },
        { title: "È pieno/a di energia" },
        { title: "Inizia dispute con gli altri" },
        { title: "È un/a lavoratore/trice affidabile" },
        { title: "Può essere teso/a" },
        { title: "È ingegnoso/a, un/a pensatore/trice profondo/a" },
        { title: "Genera molto entusiasmo" },
        { title: "Ha tendenza a perdonare" },
        { title: "Tende a essere disorganizzato/a" },
        { title: "Si preoccupa molto" },
        { title: "Ha un'immaginazione attiva" },
        { title: "Tende a essere silenzioso/a" },
        { title: "È generalmente affidabile" },
        { title: "Tende a essere pigro/a" },
        { title: "È emotivamente stabile, non si turba facilmente" },
        { title: "È inventivo/a" },
        { title: "Ha una personalità assertiva" },
        { title: "Può essere freddo/a e distante" },
        { title: "Persevera fino a completare il compito" },
        { title: "Può essere lunatico/a" },
        { title: "Apprezza le esperienze artistiche ed estetiche" },
        { title: "A volte è timido/a, inibito/a" },
        { title: "È premuroso/a e gentile con quasi tutti" },
        { title: "Fa le cose in modo efficiente" },
        { title: "Rimane calmo/a nelle situazioni tese" },
        { title: "Preferisce un lavoro di routine" },
        { title: "È socievole, estroverso/a" },
        { title: "A volte è scortese con gli altri" },
        { title: "Fa piani e li porta avanti" },
        { title: "Si innervosisce facilmente" },
        { title: "Gli/Le piace riflettere, giocare con le idee" },
        { title: "Ha pochi interessi artistici" },
        { title: "Gli/Le piace cooperare con gli altri" },
        { title: "Si distrae facilmente" },
        { title: "È sofisticato/a in arte, musica o letteratura" }
      ],
      dimensionNames: {
        E: "Estroversione",
        A: "Amabilità",
        C: "Coscienziosità",
        N: "Nevroticismo",
        O: "Apertura all'esperienza"
      },
      dimensionDescs: {
        E: {
          low: "Tendi a essere riservato/a, tranquillo/a e a preferire attività in solitaria.",
          mid: "Mostri un equilibrio tra socievolezza e bisogno di tempo da solo/a.",
          high: "Tendi a essere socievole, energico/a e a goderti l'interazione con gli altri."
        },
        A: {
          low: "Tendi a essere più competitivo/a e diretto/a nelle tue interazioni.",
          mid: "Mostri un equilibrio tra cooperazione e assertività.",
          high: "Tendi a essere cooperativo/a, compassionevole e premuroso/a con gli altri."
        },
        C: {
          low: "Tendi a essere più flessibile e spontaneo/a nel tuo approccio.",
          mid: "Mostri un equilibrio tra struttura e flessibilità.",
          high: "Tendi a essere organizzato/a, disciplinato/a e orientato/a agli obiettivi."
        },
        N: {
          low: "Tendi a essere emotivamente stabile e calmo/a di fronte a situazioni stressanti.",
          mid: "Sperimenti una gamma normale di emozioni positive e negative.",
          high: "Tendi a sperimentare più emozioni negative e maggiore sensibilità allo stress."
        },
        O: {
          low: "Tendi a preferire il convenzionale e il pratico.",
          mid: "Mostri un equilibrio tra curiosità e interessi pratici.",
          high: "Tendi a essere creativo/a, curioso/a e aperto/a a nuove esperienze."
        }
      }
    },

    mbti: {
      name: "MBTI",
      fullName: "Indicatore di Tipo di Personalità Myers-Briggs",
      desc: "Identifica le preferenze di personalità in quattro dimensioni: Energia, Percezione, Processo decisionale e Stile di vita.",
      instructions: "Seleziona l'opzione che meglio ti descrive nella maggior parte delle situazioni. Non ci sono risposte giuste o sbagliate.",
      questions: [
        { title: "Nelle riunioni sociali, preferisci interagire con molte persone, compresi sconosciuti" },
        { title: "Tendi a essere più realista che fantasioso/a" },
        { title: "È peggio essere ingiusti che spietati" },
        { title: "Normalmente preferisci fare le cose secondo un piano stabilito" },
        { title: "Dopo aver trascorso del tempo con un gruppo, ti senti pieno/a di energia" },
        { title: "Preferisci concentrarti sui dettagli specifici piuttosto che sul quadro generale" },
        { title: "Quando prendi decisioni, consideri prima i sentimenti delle persone" },
        { title: "Ti piace che le cose siano decise e risolte" },
        { title: "Preferisci iniziare conversazioni con persone nuove" },
        { title: "Ti fidi più della tua esperienza che della tua intuizione" },
        { title: "Dai più valore alla compassione che alla verità oggettiva" },
        { title: "Preferisci seguire un programma rigido" },
        { title: "Ti risulta facile parlare con sconosciuti" },
        { title: "Presti più attenzione a ciò che è reale e attuale che a ciò che potrebbe essere" },
        { title: "Ti importa più dell'armonia del gruppo che dei risultati oggettivi" },
        { title: "Preferisci terminare un progetto prima di iniziarne un altro" },
        { title: "Hai bisogno di tempo da solo/a per ricaricare le energie" },
        { title: "Ti piace pensare a concetti astratti e teorie" },
        { title: "Nel risolvere problemi, dai priorità alla logica rispetto ai sentimenti" },
        { title: "Preferisci mantenere le opzioni aperte piuttosto che impegnarti" },
        { title: "Nel tempo libero, preferisci stare con gli amici" },
        { title: "Ti interessano più le possibilità future che i fatti presenti" },
        { title: "Preferisci prendere decisioni basate su principi logici" },
        { title: "Ti senti più a tuo agio con struttura e routine" },
        { title: "Sei l'anima delle feste" },
        { title: "Ti attraggono più i significati simbolici che i fatti letterali" },
        { title: "In un conflitto, cerchi la soluzione più giusta anche se qualcuno si offende" },
        { title: "Ti piace pianificare le vacanze in anticipo e nei dettagli" },
        { title: "Ti senti a tuo agio quando sei al centro dell'attenzione" },
        { title: "Ti piace di più esplorare nuove idee che applicare metodi collaudati" },
        { title: "Tendi a decidere con la testa piuttosto che con il cuore" },
        { title: "Preferisci la spontaneità alla pianificazione" },
        { title: "Ti stanca molto trascorrere tempo da solo/a" },
        { title: "Preferisci imparare concetti teorici prima di vedere esempi pratici" },
        { title: "Consideri che la diplomazia sia più importante della franchezza" },
        { title: "Ti senti a disagio quando i piani cambiano all'improvviso" },
        { title: "Parli più di quanto ascolti nelle conversazioni" },
        { title: "Ti fidi delle tue sensazioni e intuizioni" },
        { title: "Dai più valore all'efficienza che alla cooperazione" },
        { title: "Ti piace l'improvvisazione e l'adattamento al momento" }
      ],
      typeDescriptions: {
        ISTJ: "Responsabile e affidabile. Dai valore alla tradizione, alla lealtà e all'ordine. Sei meticoloso/a e lavori con costanza per adempiere ai tuoi doveri.",
        ISFJ: "Protettore/trice e dedicato/a. Sei gentile, responsabile e attento/a ai bisogni degli altri. Dai valore all'armonia e alla stabilità.",
        INFJ: "Idealista e visionario/a. Hai una profonda comprensione delle persone e un forte desiderio di aiutare gli altri a raggiungere il loro potenziale.",
        INTJ: "Stratega e indipendente. Hai una mente analitica e una visione chiara di come migliorare le cose. Dai valore alla competenza e alla conoscenza.",
        ISTP: "Pratico/a e osservatore/trice. Ti piace capire come funzionano le cose e risolvere problemi in modo efficiente.",
        ISFP: "Artista e sensibile. Dai valore all'autenticità e all'armonia. Ti piace la bellezza e hai un forte senso estetico.",
        INFP: "Idealista ed empatico/a. Hai forti valori personali e il desiderio di rendere il mondo un posto migliore.",
        INTP: "Logico/a e creativo/a. Ti piace analizzare sistemi complessi e generare idee innovative.",
        ESTP: "Energico/a e pragmatico/a. Ti piace l'azione e vivi nel momento presente. Sei abile nel risolvere problemi pratici.",
        ESFP: "Spontaneo/a ed entusiasta. Ti godi la vita e contagi gli altri con la tua allegria. Sei generoso/a e ottimista.",
        ENFP: "Entusiasta e creativo/a. Vedi possibilità ovunque e hai un'energia contagiosa per ispirare gli altri.",
        ENTP: "Innovatore/trice e provocatore/trice. Ti piace il dibattito intellettuale e cerchi costantemente nuove idee e possibilità.",
        ESTJ: "Organizzatore/trice e deciso/a. Dai valore all'efficienza e all'ordine. Sei naturalmente portato/a a dirigere e amministrare.",
        ESFJ: "Socievole e disponibile. Ti preoccupi profondamente degli altri e lavori per creare armonia nel tuo ambiente.",
        ENFJ: "Carismatico/a ed empatico/a. Ispiri gli altri e hai un talento naturale per guidare con compassione.",
        ENTJ: "Leader nato/a e strategico/a. Sei deciso/a, efficiente e ti piacciono le sfide organizzative e di leadership."
      }
    }
  }
};
