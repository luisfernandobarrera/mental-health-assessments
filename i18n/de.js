const LANG_DE = {
  ui: {
    appTitle: "Psychische Gesundheitsbewertungen",
    appSubtitle: "Werkzeuge zur psychologischen Selbsteinschätzung",
    tabTests: "Tests",
    tabHistory: "Verlauf",
    welcome: "Willkommen. Wählen Sie eine Bewertung aus, um zu beginnen.",
    startTest: "Test starten",
    nextQuestion: "Weiter",
    prevQuestion: "Zurück",
    viewResults: "Ergebnisse anzeigen",
    question: "Frage",
    of: "von",
    items: "Items",
    backToTests: "Zurück zu den Tests",
    repeatTest: "Test wiederholen",
    viewHistory: "Verlauf anzeigen",
    otherTests: "Andere Tests",
    detailByItem: "Detail pro Item",
    helpResources: "Hilfsangebote",
    helpText: "Wenn Sie sich in einer emotionalen Krise befinden, suchen Sie professionelle Hilfe. Krisentelefon: 0800 111 0 111 (Deutschland) oder kontaktieren Sie einen Fachmann für psychische Gesundheit.",
    disclaimerTitle: 'Wichtiger Hinweis:',
    disclaimerText: 'Dieser Test ist ein Selbstbewertungsinstrument und ersetzt nicht die Diagnose eines Fachmanns für psychische Gesundheit. Wenn Sie das Gefühl haben, Hilfe zu benötigen, wenden Sie sich bitte an einen Spezialisten.',
    privacyTitle: 'Ihre Privatsphäre:',
    privacyText: 'Ihre Ergebnisse werden ausschließlich in Ihrem Browser gespeichert (localStorage). Es werden keine Daten an einen Server gesendet oder verlassen Ihren Computer.',
    cat_triage: 'Wo anfangen?',
    cat_clinical: 'Klinische Bewertungen',
    cat_screening: 'Screening und Erkennung',
    cat_wellbeing: 'Wohlbefinden und Selbstwertgefühl',
    cat_personality: 'Persönlichkeit',
    cat_advanced: 'Erweiterte Bewertung',
    noRecords: "Keine gespeicherten Einträge vorhanden.",
    completeFirst: "Schließen Sie mindestens einen Test ab, um den Verlauf zu sehen.",
    goToTests: "Zu den Tests",
    trend: "Tendenz",
    all: "Alle",
    clearHistory: "Verlauf löschen",
    clearConfirm: "Sind Sie sicher, dass Sie den gesamten Verlauf löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.",
    score: "Punktzahl",
    outOf: "von",
    disclaimer: "Dieses Werkzeug dient nur zur Orientierung und ersetzt keine professionelle Beurteilung. Konsultieren Sie einen Facharzt für psychische Gesundheit für eine angemessene Diagnose.",
    resumePrompt: "Sie haben einen laufenden Test",
    continueTest: "Test fortsetzen",
    resumeMessage: "Sie haben einen {test}-Test in Bearbeitung ({n}/{total} Fragen)",
    dismiss: "Schließen",
    questionsAnswered: "Fragen beantwortet",
    inProgress: "In Bearbeitung",
    testBy: "Tests",
  },

  scales: {
    agreement5: [
      "Stimme überhaupt nicht zu",
      "Stimme nicht zu",
      "Weder Zustimmung noch Ablehnung",
      "Stimme zu",
      "Stimme voll und ganz zu"
    ],
    frequency4: [
      "Überhaupt nicht",
      "An einzelnen Tagen",
      "An mehr als der Hälfte der Tage",
      "Beinahe jeden Tag"
    ],
    frequency5: [
      "Nie",
      "Fast nie",
      "Manchmal",
      "Ziemlich oft",
      "Sehr oft"
    ],
    severity4: [
      "Überhaupt nicht",
      "Leicht",
      "Mäßig",
      "Stark"
    ],
    severity5: [
      "Überhaupt nicht",
      "Ein wenig",
      "Mäßig",
      "Ziemlich",
      "Äußerst"
    ],
    yesNo: ["Nein", "Ja"],
  },

  tests: {
    bdi: {
      name: "BDI-II",
      fullName: "Beck-Depressions-Inventar II",
      desc: "Bewertet das Vorhandensein und den Schweregrad depressiver Symptome in den letzten zwei Wochen.",
      instructions: "Lesen Sie jede Gruppe von Aussagen sorgfältig durch und wählen Sie diejenige aus, die am besten beschreibt, wie Sie sich in den letzten zwei Wochen, einschließlich heute, gefühlt haben.",
      questions: [
        {
          title: "Traurigkeit",
          options: [
            "Ich bin nicht traurig.",
            "Ich bin die meiste Zeit traurig.",
            "Ich bin die ganze Zeit traurig.",
            "Ich bin so traurig oder unglücklich, dass ich es nicht aushalten kann."
          ]
        },
        {
          title: "Pessimismus",
          options: [
            "Ich bin nicht entmutigt, was meine Zukunft betrifft.",
            "Ich bin entmutigter als früher, was meine Zukunft betrifft.",
            "Ich erwarte nicht, dass die Dinge für mich gut laufen.",
            "Ich habe das Gefühl, dass meine Zukunft hoffnungslos ist und alles nur schlimmer wird."
          ]
        },
        {
          title: "Versagen",
          options: [
            "Ich fühle mich nicht als Versager(in).",
            "Ich habe öfter versagt, als ich hätte sollen.",
            "Wenn ich zurückblicke, sehe ich viele Misserfolge.",
            "Ich habe das Gefühl, als Mensch ein völliger Versager zu sein."
          ]
        },
        {
          title: "Verlust von Freude",
          options: [
            "Ich habe genauso viel Freude wie immer an den Dingen, die mir gefallen.",
            "Ich genieße die Dinge nicht so sehr wie früher.",
            "Ich habe nur noch wenig Freude an den Dingen, die mir früher Spaß gemacht haben.",
            "Ich kann keinerlei Freude mehr an den Dingen empfinden, die mir früher Spaß gemacht haben."
          ]
        },
        {
          title: "Schuldgefühle",
          options: [
            "Ich fühle mich nicht besonders schuldig.",
            "Ich fühle mich schuldig wegen vieler Dinge, die ich getan habe oder hätte tun sollen.",
            "Ich fühle mich die meiste Zeit ziemlich schuldig.",
            "Ich fühle mich die ganze Zeit schuldig."
          ]
        },
        {
          title: "Bestrafungsgefühle",
          options: [
            "Ich habe nicht das Gefühl, bestraft zu werden.",
            "Ich habe das Gefühl, dass ich vielleicht bestraft werde.",
            "Ich erwarte, bestraft zu werden.",
            "Ich habe das Gefühl, bestraft zu werden."
          ]
        },
        {
          title: "Selbstablehnung",
          options: [
            "Ich fühle mich mir gegenüber genauso wie immer.",
            "Ich habe das Vertrauen in mich selbst verloren.",
            "Ich bin von mir selbst enttäuscht.",
            "Ich mag mich selbst nicht."
          ]
        },
        {
          title: "Selbstkritik",
          options: [
            "Ich kritisiere oder beschuldige mich nicht mehr als sonst.",
            "Ich bin kritischer mit mir als früher.",
            "Ich kritisiere mich für all meine Fehler.",
            "Ich gebe mir die Schuld an allem Schlechten, was passiert."
          ]
        },
        {
          title: "Suizidgedanken oder -wünsche",
          options: [
            "Ich habe keinerlei Gedanken daran, mich umzubringen.",
            "Ich habe Gedanken daran, mich umzubringen, aber ich würde sie nicht ausführen.",
            "Ich möchte mich umbringen.",
            "Ich würde mich umbringen, wenn ich die Gelegenheit dazu hätte."
          ]
        },
        {
          title: "Weinen",
          options: [
            "Ich weine nicht mehr als sonst.",
            "Ich weine mehr als sonst.",
            "Ich weine wegen jeder Kleinigkeit.",
            "Ich möchte weinen, aber ich kann nicht."
          ]
        },
        {
          title: "Unruhe",
          options: [
            "Ich bin nicht unruhiger oder angespannter als sonst.",
            "Ich fühle mich unruhiger oder angespannter als sonst.",
            "Ich bin so unruhig oder aufgeregt, dass es mir schwerfällt, still zu sitzen.",
            "Ich bin so unruhig oder aufgeregt, dass ich ständig in Bewegung sein oder etwas tun muss."
          ]
        },
        {
          title: "Interessenverlust",
          options: [
            "Ich habe das Interesse an anderen Aktivitäten oder Menschen nicht verloren.",
            "Ich interessiere mich weniger für andere Menschen oder Dinge als früher.",
            "Ich habe fast das gesamte Interesse an anderen Menschen oder Dingen verloren.",
            "Es fällt mir schwer, mich für irgendetwas zu interessieren."
          ]
        },
        {
          title: "Entschlusslosigkeit",
          options: [
            "Ich treffe Entscheidungen genauso gut wie immer.",
            "Es fällt mir schwerer als gewöhnlich, Entscheidungen zu treffen.",
            "Ich habe viel größere Schwierigkeiten, Entscheidungen zu treffen, als früher.",
            "Ich habe Probleme, irgendeine Entscheidung zu treffen."
          ]
        },
        {
          title: "Wertlosigkeit",
          options: [
            "Ich fühle mich nicht wertlos.",
            "Ich halte mich nicht für so wertvoll und nützlich wie früher.",
            "Ich fühle mich weniger wert als andere.",
            "Ich fühle mich völlig wertlos."
          ]
        },
        {
          title: "Energieverlust",
          options: [
            "Ich habe so viel Energie wie immer.",
            "Ich habe weniger Energie als früher.",
            "Ich habe nicht genug Energie, um viel zu tun.",
            "Ich habe nicht genug Energie, um irgendetwas zu tun."
          ]
        },
        {
          title: "Veränderungen der Schlafgewohnheiten",
          options: [
            "Ich habe keine Veränderung meiner Schlafgewohnheiten bemerkt.",
            "Ich schlafe etwas mehr oder etwas weniger als gewöhnlich.",
            "Ich schlafe viel mehr oder viel weniger als gewöhnlich.",
            "Ich schlafe fast den ganzen Tag oder wache 1-2 Stunden zu früh auf und kann nicht wieder einschlafen."
          ]
        },
        {
          title: "Reizbarkeit",
          options: [
            "Ich bin nicht reizbarer als gewöhnlich.",
            "Ich bin reizbarer als gewöhnlich.",
            "Ich bin viel reizbarer als gewöhnlich.",
            "Ich bin die ganze Zeit reizbar."
          ]
        },
        {
          title: "Appetitveränderungen",
          options: [
            "Ich habe keine Veränderung meines Appetits bemerkt.",
            "Mein Appetit ist etwas geringer oder etwas größer als gewöhnlich.",
            "Mein Appetit ist viel geringer oder viel größer als gewöhnlich.",
            "Ich habe überhaupt keinen Appetit oder ich habe ständig Heißhunger."
          ]
        },
        {
          title: "Konzentrationsschwierigkeiten",
          options: [
            "Ich kann mich so gut konzentrieren wie immer.",
            "Ich kann mich nicht so gut konzentrieren wie gewöhnlich.",
            "Es fällt mir schwer, mich längere Zeit auf etwas zu konzentrieren.",
            "Ich kann mich auf gar nichts konzentrieren."
          ]
        },
        {
          title: "Müdigkeit oder Erschöpfung",
          options: [
            "Ich bin nicht müder oder erschöpfter als gewöhnlich.",
            "Ich ermüde leichter als gewöhnlich.",
            "Ich bin zu müde oder erschöpft für vieles, was ich früher getan habe.",
            "Ich bin zu müde oder erschöpft für das meiste, was ich früher getan habe."
          ]
        },
        {
          title: "Verlust des Interesses am Sex",
          options: [
            "Ich habe keine Veränderung meines Interesses am Sex bemerkt.",
            "Ich bin weniger am Sex interessiert als früher.",
            "Ich bin jetzt viel weniger am Sex interessiert.",
            "Ich habe das Interesse am Sex völlig verloren."
          ]
        }
      ],
      results: {
        minimal: {
          label: "Minimal",
          desc: "Ihr Ergebnis deutet auf ein minimales Maß an Depression hin. Es ist normal, emotionale Höhen und Tiefen zu erleben."
        },
        mild: {
          label: "Leicht",
          desc: "Ihr Ergebnis deutet auf leichte depressive Symptome hin. Erwägen Sie, mit einem Fachmann zu sprechen, wenn die Symptome anhalten."
        },
        moderate: {
          label: "Mäßig",
          desc: "Ihr Ergebnis deutet auf mäßige depressive Symptome hin. Es wird empfohlen, einen Fachmann für psychische Gesundheit aufzusuchen."
        },
        severe: {
          label: "Schwer",
          desc: "Ihr Ergebnis deutet auf schwere depressive Symptome hin. Es ist wichtig, so schnell wie möglich professionelle Hilfe zu suchen."
        }
      }
    },

    bai: {
      name: "BAI",
      fullName: "Beck-Angst-Inventar",
      desc: "Bewertet den Schweregrad der Angstsymptome während der letzten Woche.",
      instructions: "Geben Sie an, wie sehr Sie jedes Symptom in der letzten Woche, einschließlich heute, belastet hat.",
      questions: [
        { title: "Taubheit oder Kribbeln" },
        { title: "Hitzegefühle" },
        { title: "Zittern in den Beinen" },
        { title: "Unfähigkeit, sich zu entspannen" },
        { title: "Befürchtung, dass das Schlimmste eintritt" },
        { title: "Schwindel oder Benommenheit" },
        { title: "Starkes und schnelles Herzklopfen" },
        { title: "Unsicherheit" },
        { title: "Angst oder Schrecken" },
        { title: "Nervosität" },
        { title: "Gefühl der Blockierung" },
        { title: "Zittern der Hände" },
        { title: "Unruhe, Unsicherheit" },
        { title: "Angst, die Kontrolle zu verlieren" },
        { title: "Erstickungsgefühl" },
        { title: "Angst zu sterben" },
        { title: "Furcht" },
        { title: "Verdauungsprobleme" },
        { title: "Ohnmachtsgefühle" },
        { title: "Gesichtsröte" },
        { title: "Schwitzen, kalt oder heiß" }
      ],
      results: {
        minimal: {
          label: "Minimal",
          desc: "Ihr Ergebnis deutet auf ein minimales Maß an Angst hin."
        },
        mild: {
          label: "Leicht",
          desc: "Ihr Ergebnis deutet auf leichte Angst hin. Beobachten Sie Ihre Symptome."
        },
        moderate: {
          label: "Mäßig",
          desc: "Ihr Ergebnis deutet auf mäßige Angst hin. Erwägen Sie, einen Fachmann aufzusuchen."
        },
        severe: {
          label: "Schwer",
          desc: "Ihr Ergebnis deutet auf schwere Angst hin. Es wird empfohlen, professionelle Hilfe zu suchen."
        }
      }
    },

    gad7: {
      name: "GAD-7",
      fullName: "Skala zur Generalisierten Angststörung-7",
      desc: "Bewertet den Schweregrad der generalisierten Angst in den letzten zwei Wochen.",
      instructions: "Wie oft haben Sie in den letzten 2 Wochen die folgenden Probleme gehabt?",
      questions: [
        { title: "Sich nervös, ängstlich oder angespannt fühlen" },
        { title: "Nicht in der Lage sein, Sorgen zu stoppen oder zu kontrollieren" },
        { title: "Sich übermäßig Sorgen über verschiedene Dinge machen" },
        { title: "Schwierigkeiten, sich zu entspannen" },
        { title: "So unruhig sein, dass es schwerfällt, still zu sitzen" },
        { title: "Leicht verärgert oder gereizt werden" },
        { title: "Angst haben, als ob etwas Schreckliches passieren könnte" }
      ],
      results: {
        minimal: {
          label: "Minimal",
          desc: "Ihr Ergebnis deutet auf ein minimales Maß an Angst hin."
        },
        mild: {
          label: "Leicht",
          desc: "Ihr Ergebnis deutet auf leichte Angst hin."
        },
        moderate: {
          label: "Mäßig",
          desc: "Ihr Ergebnis deutet auf mäßige Angst hin. Erwägen Sie, einen Fachmann aufzusuchen."
        },
        severe: {
          label: "Schwer",
          desc: "Ihr Ergebnis deutet auf schwere Angst hin. Es wird empfohlen, professionelle Hilfe zu suchen."
        }
      }
    },

    msibpd: {
      name: "MSI-BPD",
      fullName: "McLean-Screening-Inventar für Borderline-Persönlichkeitsstörung",
      desc: "Screening-Instrument zur Erkennung von Merkmalen der Borderline-Persönlichkeitsstörung.",
      instructions: "Beantworten Sie jede der folgenden Fragen mit Ja oder Nein.",
      questions: [
        { title: "Haben Sie sich jemals absichtlich geschnitten, verbrannt oder verletzt?" },
        { title: "Haben Sie jemals einen Suizidversuch unternommen?" },
        { title: "Hatten Sie mindestens zwei Beziehungen (oder Beziehungsversuche), die sehr intensiv, aber instabil waren?" },
        { title: "Verändert sich Ihr Selbstbild häufig auf dramatische Weise?" },
        { title: "Wechselt Ihre Stimmung häufig plötzlich?" },
        { title: "Empfinden Sie häufig eine intensive Wut, die Sie nur schwer kontrollieren können?" },
        { title: "Misstrauen Sie häufig anderen Menschen?" },
        { title: "Fühlen Sie sich häufig unwirklich oder als ob die Dinge um Sie herum unwirklich wären?" },
        { title: "Fühlen Sie sich häufig leer?" },
        { title: "Unternehmen Sie häufig verzweifelte Anstrengungen, um zu verhindern, dass jemand Sie verlässt?" }
      ],
      results: {
        minimal: {
          label: "Minimal",
          desc: "Ihr Ergebnis deutet auf ein geringes Vorhandensein von Borderline-Merkmalen hin."
        },
        moderate: {
          label: "Mäßig",
          desc: "Ihr Ergebnis deutet auf einige Borderline-Merkmale hin. Erwägen Sie, einen Fachmann aufzusuchen."
        },
        severe: {
          label: "Bedeutsam",
          desc: "Ihr Ergebnis deutet auf ein bedeutsames Vorhandensein von Borderline-Merkmalen hin. Eine umfassende professionelle Beurteilung wird empfohlen."
        }
      }
    },

    pss: {
      name: "PSS-10",
      fullName: "Skala zum Wahrgenommenen Stress-10",
      desc: "Bewertet das Ausmaß, in dem Lebenssituationen im letzten Monat als stressig wahrgenommen werden.",
      instructions: "Die folgenden Fragen beziehen sich auf Ihre Gefühle und Gedanken im letzten Monat. Geben Sie an, wie häufig Sie sich so gefühlt oder gedacht haben.",
      questions: [
        { title: "Wie oft waren Sie im letzten Monat aufgewühlt, weil etwas Unerwartetes passiert ist?" },
        { title: "Wie oft hatten Sie im letzten Monat das Gefühl, die wichtigen Dinge in Ihrem Leben nicht kontrollieren zu können?" },
        { title: "Wie oft haben Sie sich im letzten Monat nervös oder gestresst gefühlt?" },
        { title: "Wie oft haben Sie im letzten Monat die kleinen, ärgerlichen Probleme des Alltags erfolgreich bewältigt?" },
        { title: "Wie oft hatten Sie im letzten Monat das Gefühl, wichtige Veränderungen in Ihrem Leben wirksam bewältigt zu haben?" },
        { title: "Wie oft waren Sie im letzten Monat von Ihrer Fähigkeit überzeugt, Ihre persönlichen Probleme zu bewältigen?" },
        { title: "Wie oft hatten Sie im letzten Monat das Gefühl, dass die Dinge gut für Sie laufen?" },
        { title: "Wie oft hatten Sie im letzten Monat das Gefühl, dass Sie nicht alles bewältigen konnten, was Sie tun mussten?" },
        { title: "Wie oft konnten Sie im letzten Monat die Schwierigkeiten in Ihrem Leben kontrollieren?" },
        { title: "Wie oft hatten Sie im letzten Monat das Gefühl, alles unter Kontrolle zu haben?" }
      ],
      results: {
        minimal: {
          label: "Niedrig",
          desc: "Ihr wahrgenommenes Stressniveau ist niedrig. Setzen Sie Ihre aktuellen Bewältigungsstrategien fort."
        },
        moderate: {
          label: "Mäßig",
          desc: "Ihr wahrgenommenes Stressniveau ist mäßig. Erwägen Sie, Techniken zur Stressbewältigung einzubeziehen."
        },
        severe: {
          label: "Hoch",
          desc: "Ihr wahrgenommenes Stressniveau ist hoch. Es wird empfohlen, professionelle Unterstützung und Techniken zur Stressreduktion zu suchen."
        }
      }
    },

    asrs: {
      name: "ASRS v1.1",
      fullName: "ADHS-Selbstbeurteilungsskala für Erwachsene v1.1",
      desc: "Screening-Instrument für Symptome der Aufmerksamkeitsdefizit-Hyperaktivitätsstörung bei Erwachsenen.",
      instructions: "Beantworten Sie die folgenden Fragen, indem Sie darüber nachdenken, wie Sie sich in den letzten 6 Monaten gefühlt und verhalten haben.",
      questions: [
        { title: "Wie oft haben Sie Schwierigkeiten, die letzten Details eines Projekts abzuschließen, wenn die schwierigen Teile bereits erledigt sind?" },
        { title: "Wie oft haben Sie Schwierigkeiten, Dinge zu ordnen, wenn Sie eine Aufgabe erledigen müssen, die Organisation erfordert?" },
        { title: "Wie oft haben Sie Probleme, sich an Termine oder Verpflichtungen zu erinnern?" },
        { title: "Wenn Sie eine Aufgabe haben, die viel Konzentration erfordert, wie oft vermeiden oder verzögern Sie es, damit anzufangen?" },
        { title: "Wie oft bewegen oder verdrehen Sie Ihre Hände oder Füße, wenn Sie längere Zeit sitzen müssen?" },
        { title: "Wie oft fühlen Sie sich übermäßig aktiv oder angetrieben, Dinge zu tun, als würde Sie ein Motor antreiben?" }
      ],
      results: {
        minimal: {
          label: "Unwahrscheinlich",
          desc: "Ihr Ergebnis deutet auf eine geringe Wahrscheinlichkeit von ADHS hin."
        },
        moderate: {
          label: "Möglich",
          desc: "Ihr Ergebnis deutet auf einige mit ADHS kompatible Symptome hin. Erwägen Sie eine professionelle Beurteilung."
        },
        severe: {
          label: "Wahrscheinlich",
          desc: "Ihr Ergebnis deutet auf eine hohe Wahrscheinlichkeit von ADHS-Symptomen hin. Eine umfassende professionelle Beurteilung wird empfohlen."
        }
      }
    },

    ocir: {
      name: "OCI-R",
      fullName: "Obsessiv-Kompulsives Inventar – Revidiert",
      desc: "Bewertet Symptome der Zwangsstörung.",
      instructions: "Die folgenden Aussagen beziehen sich auf Erfahrungen, die viele Menschen im Alltag machen. Geben Sie an, wie sehr sie Sie im letzten Monat belastet haben.",
      questions: [
        { title: "Ich habe so viele Dinge angesammelt, dass sie mich behindern" },
        { title: "Ich überprüfe Dinge häufiger als nötig" },
        { title: "Es stört mich, wenn Gegenstände nicht ordentlich aufgeräumt sind" },
        { title: "Ich verspüre den Drang, beim Tun bestimmter Dinge zu zählen" },
        { title: "Es fällt mir schwer, einen Gegenstand anzufassen, von dem ich weiß, dass er von Fremden oder bestimmten Personen berührt wurde" },
        { title: "Es fällt mir schwer, meine eigenen Gedanken zu kontrollieren" },
        { title: "Ich sammle Dinge, die ich nicht brauche" },
        { title: "Ich überprüfe wiederholt Türen, Fenster, Schubladen usw." },
        { title: "Es stört mich, wenn andere die Ordnung ändern, in der ich Dinge angeordnet habe" },
        { title: "Ich habe das Gefühl, bestimmte Zahlen wiederholen zu müssen" },
        { title: "Manchmal muss ich mich waschen oder reinigen, einfach weil ich mich kontaminiert fühle" },
        { title: "Mich beunruhigen unangenehme Gedanken, die gegen meinen Willen in meinen Kopf kommen" },
        { title: "Ich vermeide es, Dinge wegzuwerfen, weil ich Angst habe, sie später zu brauchen" },
        { title: "Ich überprüfe wiederholt Gas, Wasser und Licht, nachdem ich sie abgestellt habe" },
        { title: "Ich brauche es, dass Dinge auf eine bestimmte Weise angeordnet sind" },
        { title: "Ich habe das Gefühl, dass es gute und schlechte Zahlen gibt" },
        { title: "Ich wasche mir die Hände häufiger als nötig" },
        { title: "Ich habe häufig schreckliche Gedanken und es fällt mir schwer, sie loszuwerden" }
      ],
      results: {
        minimal: {
          label: "Minimal",
          desc: "Ihr Ergebnis deutet auf ein minimales Maß an zwanghaften Symptomen hin."
        },
        moderate: {
          label: "Mäßig",
          desc: "Ihr Ergebnis deutet auf mäßige zwanghafte Symptome hin. Erwägen Sie, einen Fachmann aufzusuchen."
        },
        severe: {
          label: "Bedeutsam",
          desc: "Ihr Ergebnis deutet auf bedeutsame zwanghafte Symptome hin. Eine professionelle Beurteilung wird empfohlen."
        }
      }
    },

    pcl5: {
      name: "PCL-5",
      fullName: "Checkliste für Posttraumatische Belastungsstörung nach DSM-5",
      desc: "Bewertet die Symptome einer posttraumatischen Belastungsstörung im letzten Monat.",
      instructions: "Im Folgenden finden Sie eine Liste von Problemen, die Menschen manchmal als Reaktion auf eine sehr belastende Erfahrung haben. Geben Sie an, wie sehr dieses Problem Sie im letzten Monat belastet hat.",
      questions: [
        { title: "Wiederholte, belastende und ungewollte Erinnerungen an die belastende Erfahrung" },
        { title: "Wiederholte und belastende Träume über die belastende Erfahrung" },
        { title: "Plötzlich so fühlen oder handeln, als ob die belastende Erfahrung erneut stattfinden würde" },
        { title: "Sich sehr schlecht fühlen, wenn etwas an die belastende Erfahrung erinnert" },
        { title: "Starke körperliche Reaktionen, wenn etwas an die belastende Erfahrung erinnert (z. B. Herzrasen, Atemnot, Schwitzen)" },
        { title: "Vermeidung von Erinnerungen, Gedanken oder Gefühlen im Zusammenhang mit der belastenden Erfahrung" },
        { title: "Vermeidung äußerer Dinge, die an die belastende Erfahrung erinnern (z. B. Personen, Orte, Gespräche, Aktivitäten, Gegenstände oder Situationen)" },
        { title: "Schwierigkeiten, sich an wichtige Teile der belastenden Erfahrung zu erinnern" },
        { title: "Starke negative Überzeugungen über sich selbst, andere oder die Welt" },
        { title: "Sich selbst oder jemand anderen für die belastende Erfahrung oder deren Folgen verantwortlich machen" },
        { title: "Starke negative Gefühle wie Angst, Entsetzen, Wut, Schuld oder Scham" },
        { title: "Verlust des Interesses an Aktivitäten, die einem früher Freude bereitet haben" },
        { title: "Sich distanziert oder entfremdet von anderen fühlen" },
        { title: "Schwierigkeiten, positive Gefühle zu empfinden" },
        { title: "Reizbares Verhalten, Wutausbrüche oder aggressives Verhalten" },
        { title: "Zu viele Risiken eingehen oder Dinge tun, die einem schaden könnten" },
        { title: "Übermäßig wachsam, aufmerksam oder auf der Hut sein" },
        { title: "Sich schreckhaft fühlen oder leicht erschrecken" },
        { title: "Konzentrationsschwierigkeiten" },
        { title: "Probleme beim Ein- oder Durchschlafen" }
      ],
      results: {
        minimal: {
          label: "Minimal",
          desc: "Ihr Ergebnis deutet auf ein geringes Maß an posttraumatischen Belastungssymptomen hin."
        },
        moderate: {
          label: "Mäßig",
          desc: "Ihr Ergebnis deutet auf mäßige posttraumatische Belastungssymptome hin. Erwägen Sie, einen Fachmann aufzusuchen."
        },
        severe: {
          label: "Bedeutsam",
          desc: "Ihr Ergebnis deutet auf bedeutsame posttraumatische Belastungssymptome hin. Es wird empfohlen, professionelle Hilfe zu suchen."
        }
      }
    },

    bfi44: {
      name: "BFI-44",
      fullName: "Big-Five-Persönlichkeitsinventar",
      desc: "Bewertet fünf Hauptdimensionen der Persönlichkeit: Extraversion, Verträglichkeit, Gewissenhaftigkeit, Neurotizismus und Offenheit für Erfahrungen.",
      instructions: "Ich sehe mich selbst als jemand, der... Geben Sie an, inwieweit Sie jeder Aussage zustimmen oder nicht zustimmen.",
      questions: [
        { title: "Gesprächig ist" },
        { title: "Dazu neigt, andere zu kritisieren" },
        { title: "Gründlich arbeitet" },
        { title: "Deprimiert, schwermütig ist" },
        { title: "Originell ist, neue Ideen entwickelt" },
        { title: "Zurückhaltend ist" },
        { title: "Großzügig ist und anderen hilft" },
        { title: "Etwas nachlässig sein kann" },
        { title: "Gelassen ist, gut mit Stress umgeht" },
        { title: "Vielseitig interessiert ist" },
        { title: "Voller Energie ist" },
        { title: "Streit mit anderen anfängt" },
        { title: "Ein(e) zuverlässige(r) Arbeiter(in) ist" },
        { title: "Angespannt sein kann" },
        { title: "Einfallsreich ist, ein(e) tiefe(r) Denker(in)" },
        { title: "Viel Begeisterung erzeugt" },
        { title: "Dazu neigt, zu verzeihen" },
        { title: "Dazu neigt, unordentlich zu sein" },
        { title: "Sich viele Sorgen macht" },
        { title: "Eine lebhafte Vorstellungskraft hat" },
        { title: "Dazu neigt, still zu sein" },
        { title: "Im Allgemeinen vertrauenswürdig ist" },
        { title: "Dazu neigt, faul zu sein" },
        { title: "Emotional stabil ist, sich nicht leicht aufregt" },
        { title: "Erfinderisch ist" },
        { title: "Eine durchsetzungsfähige Persönlichkeit hat" },
        { title: "Kalt und distanziert sein kann" },
        { title: "Durchhält, bis die Aufgabe erledigt ist" },
        { title: "Launisch sein kann" },
        { title: "Künstlerische und ästhetische Erfahrungen schätzt" },
        { title: "Manchmal schüchtern und gehemmt ist" },
        { title: "Rücksichtsvoll und freundlich zu fast allen ist" },
        { title: "Dinge effizient erledigt" },
        { title: "In angespannten Situationen ruhig bleibt" },
        { title: "Routinearbeit bevorzugt" },
        { title: "Gesellig, extrovertiert ist" },
        { title: "Manchmal unhöflich zu anderen ist" },
        { title: "Pläne macht und diese durchführt" },
        { title: "Leicht nervös wird" },
        { title: "Gerne nachdenkt, mit Ideen spielt" },
        { title: "Wenig künstlerische Interessen hat" },
        { title: "Gerne mit anderen zusammenarbeitet" },
        { title: "Leicht abgelenkt wird" },
        { title: "Sich in Kunst, Musik oder Literatur auskennt" }
      ],
      dimensionNames: {
        E: "Extraversion",
        A: "Verträglichkeit",
        C: "Gewissenhaftigkeit",
        N: "Neurotizismus",
        O: "Offenheit für Erfahrungen"
      },
      dimensionDescs: {
        E: {
          low: "Sie neigen dazu, zurückhaltend und ruhig zu sein und Einzelaktivitäten zu bevorzugen.",
          mid: "Sie zeigen ein Gleichgewicht zwischen Geselligkeit und dem Bedürfnis nach Zeit für sich.",
          high: "Sie neigen dazu, gesellig und energisch zu sein und die Interaktion mit anderen zu genießen."
        },
        A: {
          low: "Sie neigen dazu, in Ihren Interaktionen wettbewerbsorientierter und direkter zu sein.",
          mid: "Sie zeigen ein Gleichgewicht zwischen Kooperation und Durchsetzungsvermögen.",
          high: "Sie neigen dazu, kooperativ, mitfühlend und rücksichtsvoll gegenüber anderen zu sein."
        },
        C: {
          low: "Sie neigen dazu, in Ihrem Ansatz flexibler und spontaner zu sein.",
          mid: "Sie zeigen ein Gleichgewicht zwischen Struktur und Flexibilität.",
          high: "Sie neigen dazu, organisiert, diszipliniert und zielorientiert zu sein."
        },
        N: {
          low: "Sie neigen dazu, emotional stabil und gelassen in stressigen Situationen zu sein.",
          mid: "Sie erleben eine normale Bandbreite positiver und negativer Emotionen.",
          high: "Sie neigen dazu, mehr negative Emotionen und eine größere Stressempfindlichkeit zu erleben."
        },
        O: {
          low: "Sie neigen dazu, das Konventionelle und Praktische zu bevorzugen.",
          mid: "Sie zeigen ein Gleichgewicht zwischen Neugier und praktischen Interessen.",
          high: "Sie neigen dazu, kreativ, neugierig und offen für neue Erfahrungen zu sein."
        }
      }
    },

    mbti: {
      name: "MBTI",
      fullName: "Myers-Briggs-Typenindikator",
      desc: "Identifiziert Persönlichkeitspräferenzen in vier Dimensionen: Energie, Wahrnehmung, Entscheidungsfindung und Lebensstil.",
      instructions: "Wählen Sie die Option, die Sie in den meisten Situationen am besten beschreibt. Es gibt keine richtigen oder falschen Antworten.",
      questions: [
        { title: "Bei gesellschaftlichen Zusammenkünften bevorzugen Sie es, mit vielen Menschen zu interagieren, auch mit Unbekannten" },
        { title: "Sie neigen dazu, eher realistisch als fantasievoll zu sein" },
        { title: "Es ist schlimmer, ungerecht als unbarmherzig zu sein" },
        { title: "Normalerweise bevorzugen Sie es, Dinge nach einem festgelegten Plan zu erledigen" },
        { title: "Nach der Zeit mit einer Gruppe fühlen Sie sich voller Energie" },
        { title: "Sie konzentrieren sich lieber auf spezifische Details als auf das Gesamtbild" },
        { title: "Bei Entscheidungen berücksichtigen Sie zuerst die Gefühle der Menschen" },
        { title: "Sie mögen es, wenn Dinge entschieden und erledigt sind" },
        { title: "Sie beginnen lieber Gespräche mit neuen Menschen" },
        { title: "Sie vertrauen mehr auf Ihre Erfahrung als auf Ihre Intuition" },
        { title: "Sie schätzen Mitgefühl mehr als objektive Wahrheit" },
        { title: "Sie bevorzugen einen strengen Zeitplan" },
        { title: "Es fällt Ihnen leicht, mit Unbekannten zu sprechen" },
        { title: "Sie achten mehr auf das, was real und aktuell ist, als auf das, was sein könnte" },
        { title: "Die Harmonie der Gruppe ist Ihnen wichtiger als objektive Ergebnisse" },
        { title: "Sie bevorzugen es, ein Projekt abzuschließen, bevor Sie ein neues beginnen" },
        { title: "Sie brauchen Zeit für sich, um Ihre Batterien aufzuladen" },
        { title: "Sie denken gerne über abstrakte Konzepte und Theorien nach" },
        { title: "Beim Lösen von Problemen priorisieren Sie Logik vor Gefühlen" },
        { title: "Sie halten sich lieber alle Optionen offen, anstatt sich festzulegen" },
        { title: "In Ihrer Freizeit sind Sie lieber mit Freunden zusammen" },
        { title: "Sie interessieren sich mehr für zukünftige Möglichkeiten als für gegenwärtige Fakten" },
        { title: "Sie bevorzugen Entscheidungen auf der Grundlage logischer Prinzipien" },
        { title: "Sie fühlen sich wohler mit Struktur und Routinen" },
        { title: "Sie sind die Seele jeder Party" },
        { title: "Sie fühlen sich mehr von symbolischen Bedeutungen angezogen als von wörtlichen Fakten" },
        { title: "In einem Konflikt suchen Sie die gerechteste Lösung, auch wenn jemand verärgert wird" },
        { title: "Sie planen Ihren Urlaub gerne im Voraus und im Detail" },
        { title: "Sie fühlen sich wohl, wenn Sie im Mittelpunkt stehen" },
        { title: "Sie erkunden lieber neue Ideen, als bewährte Methoden anzuwenden" },
        { title: "Sie neigen dazu, mit dem Kopf statt mit dem Herzen zu entscheiden" },
        { title: "Sie bevorzugen Spontaneität gegenüber Planung" },
        { title: "Es erschöpft Sie, viel Zeit allein zu verbringen" },
        { title: "Sie lernen lieber theoretische Konzepte, bevor Sie praktische Beispiele sehen" },
        { title: "Sie finden, dass Diplomatie wichtiger ist als Offenheit" },
        { title: "Sie fühlen sich unwohl, wenn Pläne sich plötzlich ändern" },
        { title: "Sie reden in Gesprächen mehr, als Sie zuhören" },
        { title: "Sie vertrauen auf Ihre Ahnungen und Intuitionen" },
        { title: "Sie schätzen Effizienz mehr als Zusammenarbeit" },
        { title: "Sie genießen Improvisation und Anpassung im laufenden Prozess" }
      ],
      typeDescriptions: {
        ISTJ: "Verantwortungsbewusst und zuverlässig. Sie schätzen Tradition, Loyalität und Ordnung. Sie sind gewissenhaft und arbeiten stetig, um Ihre Pflichten zu erfüllen.",
        ISFJ: "Beschützend und hingebungsvoll. Sie sind freundlich, verantwortungsbewusst und aufmerksam gegenüber den Bedürfnissen anderer. Sie schätzen Harmonie und Stabilität.",
        INFJ: "Idealistisch und visionär. Sie haben ein tiefes Verständnis für Menschen und einen starken Wunsch, anderen zu helfen, ihr Potenzial zu entfalten.",
        INTJ: "Strategisch und unabhängig. Sie haben einen analytischen Verstand und eine klare Vorstellung davon, wie man Dinge verbessern kann. Sie schätzen Kompetenz und Wissen.",
        ISTP: "Praktisch und beobachtend. Sie verstehen gerne, wie Dinge funktionieren, und lösen Probleme effizient.",
        ISFP: "Künstlerisch und sensibel. Sie schätzen Authentizität und Harmonie. Sie genießen Schönheit und haben einen starken ästhetischen Sinn.",
        INFP: "Idealistisch und einfühlsam. Sie haben starke persönliche Werte und den Wunsch, die Welt zu einem besseren Ort zu machen.",
        INTP: "Logisch und kreativ. Sie analysieren gerne komplexe Systeme und entwickeln innovative Ideen.",
        ESTP: "Energisch und pragmatisch. Sie genießen die Action und leben im Augenblick. Sie sind geschickt im Lösen praktischer Probleme.",
        ESFP: "Spontan und enthusiastisch. Sie genießen das Leben und stecken andere mit Ihrer Freude an. Sie sind großzügig und optimistisch.",
        ENFP: "Begeisterungsfähig und kreativ. Sie sehen überall Möglichkeiten und haben eine ansteckende Energie, um andere zu inspirieren.",
        ENTP: "Innovativ und herausfordernd. Sie genießen intellektuelle Debatten und suchen ständig nach neuen Ideen und Möglichkeiten.",
        ESTJ: "Organisiert und entschlossen. Sie schätzen Effizienz und Ordnung. Sie sind von Natur aus zum Führen und Verwalten geschaffen.",
        ESFJ: "Gesellig und hilfsbereit. Sie kümmern sich zutiefst um andere und arbeiten daran, Harmonie in Ihrem Umfeld zu schaffen.",
        ENFJ: "Charismatisch und einfühlsam. Sie inspirieren andere und haben ein natürliches Talent, mit Mitgefühl zu führen.",
        ENTJ: "Geborene(r) Anführer(in) und strategisch denkend. Sie sind entschlossen, effizient und genießen organisatorische Herausforderungen und Führungsaufgaben."
      }
    }
  }
};
