const LANG_DE = {
  "ui": {
    "appTitle": "Psychische Gesundheitsbewertungen",
    "appSubtitle": "Werkzeuge zur psychologischen Selbsteinschätzung",
    "tabTests": "Tests",
    "tabHistory": "Verlauf",
    "welcome": "Willkommen. Wählen Sie eine Bewertung aus, um zu beginnen.",
    "startTest": "Test starten",
    "nextQuestion": "Weiter",
    "prevQuestion": "Zurück",
    "viewResults": "Ergebnisse anzeigen",
    "question": "Frage",
    "of": "von",
    "items": "Items",
    "backToTests": "Zurück zu den Tests",
    "repeatTest": "Test wiederholen",
    "viewHistory": "Verlauf anzeigen",
    "otherTests": "Andere Tests",
    "detailByItem": "Detail pro Item",
    "helpResources": "Hilfsangebote",
    "helpText": "Wenn Sie sich in einer emotionalen Krise befinden, suchen Sie professionelle Hilfe. Krisentelefon: 0800 111 0 111 (Deutschland) oder kontaktieren Sie einen Fachmann für psychische Gesundheit.",
    "disclaimerTitle": "Wichtiger Hinweis:",
    "disclaimerText": "Dieser Test ist ein Selbstbewertungsinstrument und ersetzt nicht die Diagnose eines Fachmanns für psychische Gesundheit. Wenn Sie das Gefühl haben, Hilfe zu benötigen, wenden Sie sich bitte an einen Spezialisten.",
    "privacyTitle": "Ihre Privatsphäre:",
    "privacyText": "Ihre Ergebnisse werden ausschließlich in Ihrem Browser gespeichert (localStorage). Es werden keine Daten an einen Server gesendet oder verlassen Ihren Computer.",
    "cat_triage": "Wo anfangen?",
    "cat_clinical": "Klinische Bewertungen",
    "cat_screening": "Screening und Erkennung",
    "cat_wellbeing": "Wohlbefinden und Selbstwertgefühl",
    "cat_personality": "Persönlichkeit",
    "cat_advanced": "Erweiterte Bewertung",
    "noRecords": "Keine gespeicherten Einträge vorhanden.",
    "completeFirst": "Schließen Sie mindestens einen Test ab, um den Verlauf zu sehen.",
    "goToTests": "Zu den Tests",
    "trend": "Tendenz",
    "all": "Alle",
    "clearHistory": "Verlauf löschen",
    "clearConfirm": "Sind Sie sicher, dass Sie den gesamten Verlauf löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.",
    "score": "Punktzahl",
    "outOf": "von",
    "disclaimer": "Dieses Werkzeug dient nur zur Orientierung und ersetzt keine professionelle Beurteilung. Konsultieren Sie einen Facharzt für psychische Gesundheit für eine angemessene Diagnose.",
    "resumePrompt": "Sie haben einen laufenden Test",
    "continueTest": "Test fortsetzen",
    "resumeMessage": "Sie haben einen {test}-Test in Bearbeitung ({n}/{total} Fragen)",
    "dismiss": "Schließen",
    "questionsAnswered": "Fragen beantwortet",
    "inProgress": "In Bearbeitung",
    "testBy": "Tests",
    "recommendedTests": "Empfohlene Bewertungen",
    "highPriority": "Hohe Priorität",
    "recommended": "Empfohlen",
    "suggested": "Vorgeschlagen",
    "areasEvaluated": "Bewertete Bereiche"
  },
  "scales": {
    "agreement5": ["Stimme überhaupt nicht zu","Stimme nicht zu","Weder Zustimmung noch Ablehnung","Stimme zu","Stimme voll und ganz zu"],
    "frequency4": ["Überhaupt nicht","An einzelnen Tagen","An mehr als der Hälfte der Tage","Beinahe jeden Tag"],
    "frequency5": ["Nie","Fast nie","Manchmal","Ziemlich oft","Sehr oft"],
    "severity4": ["Überhaupt nicht","Leicht","Mäßig","Stark"],
    "severity5": ["Überhaupt nicht","Ein wenig","Mäßig","Ziemlich","Äußerst"],
    "yesNo": ["Nein","Ja"]
  },
  "tests": {
    "bdi": {
      "name": "BDI-II",
      "abbr": "BDI-II",
      "fullName": "Beck-Depressions-Inventar II",
      "desc": "Bewertet das Vorhandensein und den Schweregrad depressiver Symptome in den letzten zwei Wochen.",
      "instructions": "Lesen Sie jede Gruppe von Aussagen sorgfältig durch und wählen Sie diejenige aus, die am besten beschreibt, wie Sie sich in den letzten zwei Wochen, einschließlich heute, gefühlt haben.",
      "questions": [
        {
          "title": "Traurigkeit",
          "options": [
            "Ich bin nicht traurig.",
            "Ich bin die meiste Zeit traurig.",
            "Ich bin die ganze Zeit traurig.",
            "Ich bin so traurig oder unglücklich, dass ich es nicht aushalten kann."
          ]
        },
        {
          "title": "Pessimismus",
          "options": [
            "Ich bin nicht entmutigt, was meine Zukunft betrifft.",
            "Ich bin entmutigter als früher, was meine Zukunft betrifft.",
            "Ich erwarte nicht, dass die Dinge für mich gut laufen.",
            "Ich habe das Gefühl, dass meine Zukunft hoffnungslos ist und alles nur schlimmer wird."
          ]
        },
        {
          "title": "Versagen",
          "options": [
            "Ich fühle mich nicht als Versager(in).",
            "Ich habe öfter versagt, als ich hätte sollen.",
            "Wenn ich zurückblicke, sehe ich viele Misserfolge.",
            "Ich habe das Gefühl, als Mensch ein völliger Versager zu sein."
          ]
        },
        {
          "title": "Verlust von Freude",
          "options": [
            "Ich habe genauso viel Freude wie immer an den Dingen, die mir gefallen.",
            "Ich genieße die Dinge nicht so sehr wie früher.",
            "Ich habe nur noch wenig Freude an den Dingen, die mir früher Spaß gemacht haben.",
            "Ich kann keinerlei Freude mehr an den Dingen empfinden, die mir früher Spaß gemacht haben."
          ]
        },
        {
          "title": "Schuldgefühle",
          "options": [
            "Ich fühle mich nicht besonders schuldig.",
            "Ich fühle mich schuldig wegen vieler Dinge, die ich getan habe oder hätte tun sollen.",
            "Ich fühle mich die meiste Zeit ziemlich schuldig.",
            "Ich fühle mich die ganze Zeit schuldig."
          ]
        },
        {
          "title": "Bestrafungsgefühle",
          "options": [
            "Ich habe nicht das Gefühl, bestraft zu werden.",
            "Ich habe das Gefühl, dass ich vielleicht bestraft werde.",
            "Ich erwarte, bestraft zu werden.",
            "Ich habe das Gefühl, bestraft zu werden."
          ]
        },
        {
          "title": "Selbstablehnung",
          "options": [
            "Ich fühle mich mir gegenüber genauso wie immer.",
            "Ich habe das Vertrauen in mich selbst verloren.",
            "Ich bin von mir selbst enttäuscht.",
            "Ich mag mich selbst nicht."
          ]
        },
        {
          "title": "Selbstkritik",
          "options": [
            "Ich kritisiere oder beschuldige mich nicht mehr als sonst.",
            "Ich bin kritischer mit mir als früher.",
            "Ich kritisiere mich für all meine Fehler.",
            "Ich gebe mir die Schuld an allem Schlechten, was passiert."
          ]
        },
        {
          "title": "Suizidgedanken oder -wünsche",
          "options": [
            "Ich habe keinerlei Gedanken daran, mich umzubringen.",
            "Ich habe Gedanken daran, mich umzubringen, aber ich würde sie nicht ausführen.",
            "Ich möchte mich umbringen.",
            "Ich würde mich umbringen, wenn ich die Gelegenheit dazu hätte."
          ]
        },
        {
          "title": "Weinen",
          "options": [
            "Ich weine nicht mehr als sonst.",
            "Ich weine mehr als sonst.",
            "Ich weine wegen jeder Kleinigkeit.",
            "Ich möchte weinen, aber ich kann nicht."
          ]
        },
        {
          "title": "Unruhe",
          "options": [
            "Ich bin nicht unruhiger oder angespannter als sonst.",
            "Ich fühle mich unruhiger oder angespannter als sonst.",
            "Ich bin so unruhig oder aufgeregt, dass es mir schwerfällt, still zu sitzen.",
            "Ich bin so unruhig oder aufgeregt, dass ich ständig in Bewegung sein oder etwas tun muss."
          ]
        },
        {
          "title": "Interessenverlust",
          "options": [
            "Ich habe das Interesse an anderen Aktivitäten oder Menschen nicht verloren.",
            "Ich interessiere mich weniger für andere Menschen oder Dinge als früher.",
            "Ich habe fast das gesamte Interesse an anderen Menschen oder Dingen verloren.",
            "Es fällt mir schwer, mich für irgendetwas zu interessieren."
          ]
        },
        {
          "title": "Entschlusslosigkeit",
          "options": [
            "Ich treffe Entscheidungen genauso gut wie immer.",
            "Es fällt mir schwerer als gewöhnlich, Entscheidungen zu treffen.",
            "Ich habe viel größere Schwierigkeiten, Entscheidungen zu treffen, als früher.",
            "Ich habe Probleme, irgendeine Entscheidung zu treffen."
          ]
        },
        {
          "title": "Wertlosigkeit",
          "options": [
            "Ich fühle mich nicht wertlos.",
            "Ich halte mich nicht für so wertvoll und nützlich wie früher.",
            "Ich fühle mich weniger wert als andere.",
            "Ich fühle mich völlig wertlos."
          ]
        },
        {
          "title": "Energieverlust",
          "options": [
            "Ich habe so viel Energie wie immer.",
            "Ich habe weniger Energie als früher.",
            "Ich habe nicht genug Energie, um viel zu tun.",
            "Ich habe nicht genug Energie, um irgendetwas zu tun."
          ]
        },
        {
          "title": "Veränderungen der Schlafgewohnheiten",
          "options": [
            "Ich habe keine Veränderung meiner Schlafgewohnheiten bemerkt.",
            "Ich schlafe etwas mehr oder etwas weniger als gewöhnlich.",
            "Ich schlafe viel mehr oder viel weniger als gewöhnlich.",
            "Ich schlafe fast den ganzen Tag oder wache 1-2 Stunden zu früh auf und kann nicht wieder einschlafen."
          ]
        },
        {
          "title": "Reizbarkeit",
          "options": [
            "Ich bin nicht reizbarer als gewöhnlich.",
            "Ich bin reizbarer als gewöhnlich.",
            "Ich bin viel reizbarer als gewöhnlich.",
            "Ich bin die ganze Zeit reizbar."
          ]
        },
        {
          "title": "Appetitveränderungen",
          "options": [
            "Ich habe keine Veränderung meines Appetits bemerkt.",
            "Mein Appetit ist etwas geringer oder etwas größer als gewöhnlich.",
            "Mein Appetit ist viel geringer oder viel größer als gewöhnlich.",
            "Ich habe überhaupt keinen Appetit oder ich habe ständig Heißhunger."
          ]
        },
        {
          "title": "Konzentrationsschwierigkeiten",
          "options": [
            "Ich kann mich so gut konzentrieren wie immer.",
            "Ich kann mich nicht so gut konzentrieren wie gewöhnlich.",
            "Es fällt mir schwer, mich längere Zeit auf etwas zu konzentrieren.",
            "Ich kann mich auf gar nichts konzentrieren."
          ]
        },
        {
          "title": "Müdigkeit oder Erschöpfung",
          "options": [
            "Ich bin nicht müder oder erschöpfter als gewöhnlich.",
            "Ich ermüde leichter als gewöhnlich.",
            "Ich bin zu müde oder erschöpft für vieles, was ich früher getan habe.",
            "Ich bin zu müde oder erschöpft für das meiste, was ich früher getan habe."
          ]
        },
        {
          "title": "Verlust des Interesses am Sex",
          "options": [
            "Ich habe keine Veränderung meines Interesses am Sex bemerkt.",
            "Ich bin weniger am Sex interessiert als früher.",
            "Ich bin jetzt viel weniger am Sex interessiert.",
            "Ich habe das Interesse am Sex völlig verloren."
          ]
        }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Ihr Ergebnis deutet auf ein minimales Maß an Depression hin. Es ist normal, emotionale Höhen und Tiefen zu erleben." },
        "mild": {
          "label": "Leicht",
          "desc": "Ihr Ergebnis deutet auf leichte depressive Symptome hin. Erwägen Sie, mit einem Fachmann zu sprechen, wenn die Symptome anhalten."
        },
        "moderate": {
          "label": "Mäßig",
          "desc": "Ihr Ergebnis deutet auf mäßige depressive Symptome hin. Es wird empfohlen, einen Fachmann für psychische Gesundheit aufzusuchen."
        },
        "severe": {
          "label": "Schwer",
          "desc": "Ihr Ergebnis deutet auf schwere depressive Symptome hin. Es ist wichtig, so schnell wie möglich professionelle Hilfe zu suchen."
        }
      }
    },
    "bai": {
      "name": "BAI",
      "abbr": "BAI",
      "fullName": "Beck-Angst-Inventar",
      "desc": "Bewertet den Schweregrad der Angstsymptome während der letzten Woche.",
      "instructions": "Geben Sie an, wie sehr Sie jedes Symptom in der letzten Woche, einschließlich heute, belastet hat.",
      "questions": [
        { "title": "Taubheit oder Kribbeln" },
        { "title": "Hitzegefühle" },
        { "title": "Zittern in den Beinen" },
        { "title": "Unfähigkeit, sich zu entspannen" },
        { "title": "Befürchtung, dass das Schlimmste eintritt" },
        { "title": "Schwindel oder Benommenheit" },
        { "title": "Starkes und schnelles Herzklopfen" },
        { "title": "Unsicherheit" },
        { "title": "Angst oder Schrecken" },
        { "title": "Nervosität" },
        { "title": "Gefühl der Blockierung" },
        { "title": "Zittern der Hände" },
        { "title": "Unruhe, Unsicherheit" },
        { "title": "Angst, die Kontrolle zu verlieren" },
        { "title": "Erstickungsgefühl" },
        { "title": "Angst zu sterben" },
        { "title": "Furcht" },
        { "title": "Verdauungsprobleme" },
        { "title": "Ohnmachtsgefühle" },
        { "title": "Gesichtsröte" },
        { "title": "Schwitzen, kalt oder heiß" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Ihr Ergebnis deutet auf ein minimales Maß an Angst hin." },
        "mild": { "label": "Leicht", "desc": "Ihr Ergebnis deutet auf leichte Angst hin. Beobachten Sie Ihre Symptome." },
        "moderate": { "label": "Mäßig", "desc": "Ihr Ergebnis deutet auf mäßige Angst hin. Erwägen Sie, einen Fachmann aufzusuchen." },
        "severe": { "label": "Schwer", "desc": "Ihr Ergebnis deutet auf schwere Angst hin. Es wird empfohlen, professionelle Hilfe zu suchen." }
      }
    },
    "gad7": {
      "name": "GAD-7",
      "abbr": "GAD-7",
      "fullName": "Skala zur Generalisierten Angststörung-7",
      "desc": "Bewertet den Schweregrad der generalisierten Angst in den letzten zwei Wochen.",
      "instructions": "Wie oft haben Sie in den letzten 2 Wochen die folgenden Probleme gehabt?",
      "questions": [
        { "title": "Sich nervös, ängstlich oder angespannt fühlen" },
        { "title": "Nicht in der Lage sein, Sorgen zu stoppen oder zu kontrollieren" },
        { "title": "Sich übermäßig Sorgen über verschiedene Dinge machen" },
        { "title": "Schwierigkeiten, sich zu entspannen" },
        { "title": "So unruhig sein, dass es schwerfällt, still zu sitzen" },
        { "title": "Leicht verärgert oder gereizt werden" },
        { "title": "Angst haben, als ob etwas Schreckliches passieren könnte" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Ihr Ergebnis deutet auf ein minimales Maß an Angst hin." },
        "mild": { "label": "Leicht", "desc": "Ihr Ergebnis deutet auf leichte Angst hin." },
        "moderate": { "label": "Mäßig", "desc": "Ihr Ergebnis deutet auf mäßige Angst hin. Erwägen Sie, einen Fachmann aufzusuchen." },
        "severe": { "label": "Schwer", "desc": "Ihr Ergebnis deutet auf schwere Angst hin. Es wird empfohlen, professionelle Hilfe zu suchen." }
      }
    },
    "msibpd": {
      "name": "MSI-BPD",
      "abbr": "MSI-BPD",
      "fullName": "McLean-Screening-Inventar für Borderline-Persönlichkeitsstörung",
      "desc": "Screening-Instrument zur Erkennung von Merkmalen der Borderline-Persönlichkeitsstörung.",
      "instructions": "Beantworten Sie jede der folgenden Fragen mit Ja oder Nein.",
      "questions": [
        { "title": "Haben Sie sich jemals absichtlich geschnitten, verbrannt oder verletzt?" },
        { "title": "Haben Sie jemals einen Suizidversuch unternommen?" },
        { "title": "Hatten Sie mindestens zwei Beziehungen (oder Beziehungsversuche), die sehr intensiv, aber instabil waren?" },
        { "title": "Verändert sich Ihr Selbstbild häufig auf dramatische Weise?" },
        { "title": "Wechselt Ihre Stimmung häufig plötzlich?" },
        { "title": "Empfinden Sie häufig eine intensive Wut, die Sie nur schwer kontrollieren können?" },
        { "title": "Misstrauen Sie häufig anderen Menschen?" },
        { "title": "Fühlen Sie sich häufig unwirklich oder als ob die Dinge um Sie herum unwirklich wären?" },
        { "title": "Fühlen Sie sich häufig leer?" },
        { "title": "Unternehmen Sie häufig verzweifelte Anstrengungen, um zu verhindern, dass jemand Sie verlässt?" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Ihr Ergebnis deutet auf ein geringes Vorhandensein von Borderline-Merkmalen hin." },
        "moderate": { "label": "Mäßig", "desc": "Ihr Ergebnis deutet auf einige Borderline-Merkmale hin. Erwägen Sie, einen Fachmann aufzusuchen." },
        "severe": {
          "label": "Bedeutsam",
          "desc": "Ihr Ergebnis deutet auf ein bedeutsames Vorhandensein von Borderline-Merkmalen hin. Eine umfassende professionelle Beurteilung wird empfohlen."
        }
      }
    },
    "pss": {
      "name": "PSS-10",
      "abbr": "PSS-10",
      "fullName": "Skala zum Wahrgenommenen Stress-10",
      "desc": "Bewertet das Ausmaß, in dem Lebenssituationen im letzten Monat als stressig wahrgenommen werden.",
      "instructions": "Die folgenden Fragen beziehen sich auf Ihre Gefühle und Gedanken im letzten Monat. Geben Sie an, wie häufig Sie sich so gefühlt oder gedacht haben.",
      "questions": [
        { "title": "Wie oft waren Sie im letzten Monat aufgewühlt, weil etwas Unerwartetes passiert ist?" },
        { "title": "Wie oft hatten Sie im letzten Monat das Gefühl, die wichtigen Dinge in Ihrem Leben nicht kontrollieren zu können?" },
        { "title": "Wie oft haben Sie sich im letzten Monat nervös oder gestresst gefühlt?" },
        { "title": "Wie oft haben Sie im letzten Monat die kleinen, ärgerlichen Probleme des Alltags erfolgreich bewältigt?" },
        { "title": "Wie oft hatten Sie im letzten Monat das Gefühl, wichtige Veränderungen in Ihrem Leben wirksam bewältigt zu haben?" },
        { "title": "Wie oft waren Sie im letzten Monat von Ihrer Fähigkeit überzeugt, Ihre persönlichen Probleme zu bewältigen?" },
        { "title": "Wie oft hatten Sie im letzten Monat das Gefühl, dass die Dinge gut für Sie laufen?" },
        { "title": "Wie oft hatten Sie im letzten Monat das Gefühl, dass Sie nicht alles bewältigen konnten, was Sie tun mussten?" },
        { "title": "Wie oft konnten Sie im letzten Monat die Schwierigkeiten in Ihrem Leben kontrollieren?" },
        { "title": "Wie oft hatten Sie im letzten Monat das Gefühl, alles unter Kontrolle zu haben?" }
      ],
      "results": {
        "minimal": { "label": "Niedrig", "desc": "Ihr wahrgenommenes Stressniveau ist niedrig. Setzen Sie Ihre aktuellen Bewältigungsstrategien fort." },
        "moderate": { "label": "Mäßig", "desc": "Ihr wahrgenommenes Stressniveau ist mäßig. Erwägen Sie, Techniken zur Stressbewältigung einzubeziehen." },
        "severe": {
          "label": "Hoch",
          "desc": "Ihr wahrgenommenes Stressniveau ist hoch. Es wird empfohlen, professionelle Unterstützung und Techniken zur Stressreduktion zu suchen."
        }
      }
    },
    "asrs": {
      "name": "ASRS v1.1",
      "abbr": "ASRS-v1.1",
      "fullName": "ADHS-Selbstbeurteilungsskala für Erwachsene v1.1",
      "desc": "Screening-Instrument für Symptome der Aufmerksamkeitsdefizit-Hyperaktivitätsstörung bei Erwachsenen.",
      "instructions": "Beantworten Sie die folgenden Fragen, indem Sie darüber nachdenken, wie Sie sich in den letzten 6 Monaten gefühlt und verhalten haben.",
      "questions": [
        { "title": "Wie oft haben Sie Schwierigkeiten, die letzten Details eines Projekts abzuschließen, wenn die schwierigen Teile bereits erledigt sind?" },
        { "title": "Wie oft haben Sie Schwierigkeiten, Dinge zu ordnen, wenn Sie eine Aufgabe erledigen müssen, die Organisation erfordert?" },
        { "title": "Wie oft haben Sie Probleme, sich an Termine oder Verpflichtungen zu erinnern?" },
        { "title": "Wenn Sie eine Aufgabe haben, die viel Konzentration erfordert, wie oft vermeiden oder verzögern Sie es, damit anzufangen?" },
        { "title": "Wie oft bewegen oder verdrehen Sie Ihre Hände oder Füße, wenn Sie längere Zeit sitzen müssen?" },
        { "title": "Wie oft fühlen Sie sich übermäßig aktiv oder angetrieben, Dinge zu tun, als würde Sie ein Motor antreiben?" }
      ],
      "results": {
        "minimal": { "label": "Unwahrscheinlich", "desc": "Ihr Ergebnis deutet auf eine geringe Wahrscheinlichkeit von ADHS hin." },
        "moderate": { "label": "Möglich", "desc": "Ihr Ergebnis deutet auf einige mit ADHS kompatible Symptome hin. Erwägen Sie eine professionelle Beurteilung." },
        "severe": {
          "label": "Wahrscheinlich",
          "desc": "Ihr Ergebnis deutet auf eine hohe Wahrscheinlichkeit von ADHS-Symptomen hin. Eine umfassende professionelle Beurteilung wird empfohlen."
        }
      }
    },
    "ocir": {
      "name": "OCI-R",
      "abbr": "OCI-R",
      "fullName": "Obsessiv-Kompulsives Inventar – Revidiert",
      "desc": "Bewertet Symptome der Zwangsstörung.",
      "instructions": "Die folgenden Aussagen beziehen sich auf Erfahrungen, die viele Menschen im Alltag machen. Geben Sie an, wie sehr sie Sie im letzten Monat belastet haben.",
      "questions": [
        { "title": "Ich habe so viele Dinge angesammelt, dass sie mich behindern" },
        { "title": "Ich überprüfe Dinge häufiger als nötig" },
        { "title": "Es stört mich, wenn Gegenstände nicht ordentlich aufgeräumt sind" },
        { "title": "Ich verspüre den Drang, beim Tun bestimmter Dinge zu zählen" },
        { "title": "Es fällt mir schwer, einen Gegenstand anzufassen, von dem ich weiß, dass er von Fremden oder bestimmten Personen berührt wurde" },
        { "title": "Es fällt mir schwer, meine eigenen Gedanken zu kontrollieren" },
        { "title": "Ich sammle Dinge, die ich nicht brauche" },
        { "title": "Ich überprüfe wiederholt Türen, Fenster, Schubladen usw." },
        { "title": "Es stört mich, wenn andere die Ordnung ändern, in der ich Dinge angeordnet habe" },
        { "title": "Ich habe das Gefühl, bestimmte Zahlen wiederholen zu müssen" },
        { "title": "Manchmal muss ich mich waschen oder reinigen, einfach weil ich mich kontaminiert fühle" },
        { "title": "Mich beunruhigen unangenehme Gedanken, die gegen meinen Willen in meinen Kopf kommen" },
        { "title": "Ich vermeide es, Dinge wegzuwerfen, weil ich Angst habe, sie später zu brauchen" },
        { "title": "Ich überprüfe wiederholt Gas, Wasser und Licht, nachdem ich sie abgestellt habe" },
        { "title": "Ich brauche es, dass Dinge auf eine bestimmte Weise angeordnet sind" },
        { "title": "Ich habe das Gefühl, dass es gute und schlechte Zahlen gibt" },
        { "title": "Ich wasche mir die Hände häufiger als nötig" },
        { "title": "Ich habe häufig schreckliche Gedanken und es fällt mir schwer, sie loszuwerden" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Ihr Ergebnis deutet auf ein minimales Maß an zwanghaften Symptomen hin." },
        "moderate": { "label": "Mäßig", "desc": "Ihr Ergebnis deutet auf mäßige zwanghafte Symptome hin. Erwägen Sie, einen Fachmann aufzusuchen." },
        "severe": { "label": "Bedeutsam", "desc": "Ihr Ergebnis deutet auf bedeutsame zwanghafte Symptome hin. Eine professionelle Beurteilung wird empfohlen." }
      }
    },
    "pcl5": {
      "name": "PCL-5",
      "abbr": "PCL-5",
      "fullName": "Checkliste für Posttraumatische Belastungsstörung nach DSM-5",
      "desc": "Bewertet die Symptome einer posttraumatischen Belastungsstörung im letzten Monat.",
      "instructions": "Im Folgenden finden Sie eine Liste von Problemen, die Menschen manchmal als Reaktion auf eine sehr belastende Erfahrung haben. Geben Sie an, wie sehr dieses Problem Sie im letzten Monat belastet hat.",
      "questions": [
        { "title": "Wiederholte, belastende und ungewollte Erinnerungen an die belastende Erfahrung" },
        { "title": "Wiederholte und belastende Träume über die belastende Erfahrung" },
        { "title": "Plötzlich so fühlen oder handeln, als ob die belastende Erfahrung erneut stattfinden würde" },
        { "title": "Sich sehr schlecht fühlen, wenn etwas an die belastende Erfahrung erinnert" },
        { "title": "Starke körperliche Reaktionen, wenn etwas an die belastende Erfahrung erinnert (z. B. Herzrasen, Atemnot, Schwitzen)" },
        { "title": "Vermeidung von Erinnerungen, Gedanken oder Gefühlen im Zusammenhang mit der belastenden Erfahrung" },
        { "title": "Vermeidung äußerer Dinge, die an die belastende Erfahrung erinnern (z. B. Personen, Orte, Gespräche, Aktivitäten, Gegenstände oder Situationen)" },
        { "title": "Schwierigkeiten, sich an wichtige Teile der belastenden Erfahrung zu erinnern" },
        { "title": "Starke negative Überzeugungen über sich selbst, andere oder die Welt" },
        { "title": "Sich selbst oder jemand anderen für die belastende Erfahrung oder deren Folgen verantwortlich machen" },
        { "title": "Starke negative Gefühle wie Angst, Entsetzen, Wut, Schuld oder Scham" },
        { "title": "Verlust des Interesses an Aktivitäten, die einem früher Freude bereitet haben" },
        { "title": "Sich distanziert oder entfremdet von anderen fühlen" },
        { "title": "Schwierigkeiten, positive Gefühle zu empfinden" },
        { "title": "Reizbares Verhalten, Wutausbrüche oder aggressives Verhalten" },
        { "title": "Zu viele Risiken eingehen oder Dinge tun, die einem schaden könnten" },
        { "title": "Übermäßig wachsam, aufmerksam oder auf der Hut sein" },
        { "title": "Sich schreckhaft fühlen oder leicht erschrecken" },
        { "title": "Konzentrationsschwierigkeiten" },
        { "title": "Probleme beim Ein- oder Durchschlafen" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Ihr Ergebnis deutet auf ein geringes Maß an posttraumatischen Belastungssymptomen hin." },
        "moderate": { "label": "Mäßig", "desc": "Ihr Ergebnis deutet auf mäßige posttraumatische Belastungssymptome hin. Erwägen Sie, einen Fachmann aufzusuchen." },
        "severe": {
          "label": "Bedeutsam",
          "desc": "Ihr Ergebnis deutet auf bedeutsame posttraumatische Belastungssymptome hin. Es wird empfohlen, professionelle Hilfe zu suchen."
        }
      }
    },
    "bfi44": {
      "name": "BFI-44",
      "abbr": "BFI-44",
      "fullName": "Big-Five-Persönlichkeitsinventar",
      "desc": "Bewertet fünf Hauptdimensionen der Persönlichkeit: Extraversion, Verträglichkeit, Gewissenhaftigkeit, Neurotizismus und Offenheit für Erfahrungen.",
      "instructions": "Ich sehe mich selbst als jemand, der... Geben Sie an, inwieweit Sie jeder Aussage zustimmen oder nicht zustimmen.",
      "questions": [
        { "title": "Gesprächig ist" },
        { "title": "Dazu neigt, andere zu kritisieren" },
        { "title": "Gründlich arbeitet" },
        { "title": "Deprimiert, schwermütig ist" },
        { "title": "Originell ist, neue Ideen entwickelt" },
        { "title": "Zurückhaltend ist" },
        { "title": "Großzügig ist und anderen hilft" },
        { "title": "Etwas nachlässig sein kann" },
        { "title": "Gelassen ist, gut mit Stress umgeht" },
        { "title": "Vielseitig interessiert ist" },
        { "title": "Voller Energie ist" },
        { "title": "Streit mit anderen anfängt" },
        { "title": "Ein(e) zuverlässige(r) Arbeiter(in) ist" },
        { "title": "Angespannt sein kann" },
        { "title": "Einfallsreich ist, ein(e) tiefe(r) Denker(in)" },
        { "title": "Viel Begeisterung erzeugt" },
        { "title": "Dazu neigt, zu verzeihen" },
        { "title": "Dazu neigt, unordentlich zu sein" },
        { "title": "Sich viele Sorgen macht" },
        { "title": "Eine lebhafte Vorstellungskraft hat" },
        { "title": "Dazu neigt, still zu sein" },
        { "title": "Im Allgemeinen vertrauenswürdig ist" },
        { "title": "Dazu neigt, faul zu sein" },
        { "title": "Emotional stabil ist, sich nicht leicht aufregt" },
        { "title": "Erfinderisch ist" },
        { "title": "Eine durchsetzungsfähige Persönlichkeit hat" },
        { "title": "Kalt und distanziert sein kann" },
        { "title": "Durchhält, bis die Aufgabe erledigt ist" },
        { "title": "Launisch sein kann" },
        { "title": "Künstlerische und ästhetische Erfahrungen schätzt" },
        { "title": "Manchmal schüchtern und gehemmt ist" },
        { "title": "Rücksichtsvoll und freundlich zu fast allen ist" },
        { "title": "Dinge effizient erledigt" },
        { "title": "In angespannten Situationen ruhig bleibt" },
        { "title": "Routinearbeit bevorzugt" },
        { "title": "Gesellig, extrovertiert ist" },
        { "title": "Manchmal unhöflich zu anderen ist" },
        { "title": "Pläne macht und diese durchführt" },
        { "title": "Leicht nervös wird" },
        { "title": "Gerne nachdenkt, mit Ideen spielt" },
        { "title": "Wenig künstlerische Interessen hat" },
        { "title": "Gerne mit anderen zusammenarbeitet" },
        { "title": "Leicht abgelenkt wird" },
        { "title": "Sich in Kunst, Musik oder Literatur auskennt" }
      ],
      "dimensionNames": {
        "E": "Extraversion",
        "A": "Verträglichkeit",
        "C": "Gewissenhaftigkeit",
        "N": "Neurotizismus",
        "O": "Offenheit für Erfahrungen"
      },
      "dimensionDescs": {
        "E": {
          "low": "Sie neigen dazu, zurückhaltend und ruhig zu sein und Einzelaktivitäten zu bevorzugen.",
          "mid": "Sie zeigen ein Gleichgewicht zwischen Geselligkeit und dem Bedürfnis nach Zeit für sich.",
          "high": "Sie neigen dazu, gesellig und energisch zu sein und die Interaktion mit anderen zu genießen."
        },
        "A": {
          "low": "Sie neigen dazu, in Ihren Interaktionen wettbewerbsorientierter und direkter zu sein.",
          "mid": "Sie zeigen ein Gleichgewicht zwischen Kooperation und Durchsetzungsvermögen.",
          "high": "Sie neigen dazu, kooperativ, mitfühlend und rücksichtsvoll gegenüber anderen zu sein."
        },
        "C": {
          "low": "Sie neigen dazu, in Ihrem Ansatz flexibler und spontaner zu sein.",
          "mid": "Sie zeigen ein Gleichgewicht zwischen Struktur und Flexibilität.",
          "high": "Sie neigen dazu, organisiert, diszipliniert und zielorientiert zu sein."
        },
        "N": {
          "low": "Sie neigen dazu, emotional stabil und gelassen in stressigen Situationen zu sein.",
          "mid": "Sie erleben eine normale Bandbreite positiver und negativer Emotionen.",
          "high": "Sie neigen dazu, mehr negative Emotionen und eine größere Stressempfindlichkeit zu erleben."
        },
        "O": {
          "low": "Sie neigen dazu, das Konventionelle und Praktische zu bevorzugen.",
          "mid": "Sie zeigen ein Gleichgewicht zwischen Neugier und praktischen Interessen.",
          "high": "Sie neigen dazu, kreativ, neugierig und offen für neue Erfahrungen zu sein."
        }
      }
    },
    "mbti": {
      "name": "MBTI",
      "abbr": "16P",
      "fullName": "Myers-Briggs-Typenindikator",
      "desc": "Identifiziert Persönlichkeitspräferenzen in vier Dimensionen: Energie, Wahrnehmung, Entscheidungsfindung und Lebensstil.",
      "instructions": "Wählen Sie die Option, die Sie in den meisten Situationen am besten beschreibt. Es gibt keine richtigen oder falschen Antworten.",
      "questions": [
        { "title": "Bei gesellschaftlichen Zusammenkünften bevorzugen Sie es, mit vielen Menschen zu interagieren, auch mit Unbekannten" },
        { "title": "Sie neigen dazu, eher realistisch als fantasievoll zu sein" },
        { "title": "Es ist schlimmer, ungerecht als unbarmherzig zu sein" },
        { "title": "Normalerweise bevorzugen Sie es, Dinge nach einem festgelegten Plan zu erledigen" },
        { "title": "Nach der Zeit mit einer Gruppe fühlen Sie sich voller Energie" },
        { "title": "Sie konzentrieren sich lieber auf spezifische Details als auf das Gesamtbild" },
        { "title": "Bei Entscheidungen berücksichtigen Sie zuerst die Gefühle der Menschen" },
        { "title": "Sie mögen es, wenn Dinge entschieden und erledigt sind" },
        { "title": "Sie beginnen lieber Gespräche mit neuen Menschen" },
        { "title": "Sie vertrauen mehr auf Ihre Erfahrung als auf Ihre Intuition" },
        { "title": "Sie schätzen Mitgefühl mehr als objektive Wahrheit" },
        { "title": "Sie bevorzugen einen strengen Zeitplan" },
        { "title": "Es fällt Ihnen leicht, mit Unbekannten zu sprechen" },
        { "title": "Sie achten mehr auf das, was real und aktuell ist, als auf das, was sein könnte" },
        { "title": "Die Harmonie der Gruppe ist Ihnen wichtiger als objektive Ergebnisse" },
        { "title": "Sie bevorzugen es, ein Projekt abzuschließen, bevor Sie ein neues beginnen" },
        { "title": "Sie brauchen Zeit für sich, um Ihre Batterien aufzuladen" },
        { "title": "Sie denken gerne über abstrakte Konzepte und Theorien nach" },
        { "title": "Beim Lösen von Problemen priorisieren Sie Logik vor Gefühlen" },
        { "title": "Sie halten sich lieber alle Optionen offen, anstatt sich festzulegen" },
        { "title": "In Ihrer Freizeit sind Sie lieber mit Freunden zusammen" },
        { "title": "Sie interessieren sich mehr für zukünftige Möglichkeiten als für gegenwärtige Fakten" },
        { "title": "Sie bevorzugen Entscheidungen auf der Grundlage logischer Prinzipien" },
        { "title": "Sie fühlen sich wohler mit Struktur und Routinen" },
        { "title": "Sie sind die Seele jeder Party" },
        { "title": "Sie fühlen sich mehr von symbolischen Bedeutungen angezogen als von wörtlichen Fakten" },
        { "title": "In einem Konflikt suchen Sie die gerechteste Lösung, auch wenn jemand verärgert wird" },
        { "title": "Sie planen Ihren Urlaub gerne im Voraus und im Detail" },
        { "title": "Sie fühlen sich wohl, wenn Sie im Mittelpunkt stehen" },
        { "title": "Sie erkunden lieber neue Ideen, als bewährte Methoden anzuwenden" },
        { "title": "Sie neigen dazu, mit dem Kopf statt mit dem Herzen zu entscheiden" },
        { "title": "Sie bevorzugen Spontaneität gegenüber Planung" },
        { "title": "Es erschöpft Sie, viel Zeit allein zu verbringen" },
        { "title": "Sie lernen lieber theoretische Konzepte, bevor Sie praktische Beispiele sehen" },
        { "title": "Sie finden, dass Diplomatie wichtiger ist als Offenheit" },
        { "title": "Sie fühlen sich unwohl, wenn Pläne sich plötzlich ändern" },
        { "title": "Sie reden in Gesprächen mehr, als Sie zuhören" },
        { "title": "Sie vertrauen auf Ihre Ahnungen und Intuitionen" },
        { "title": "Sie schätzen Effizienz mehr als Zusammenarbeit" },
        { "title": "Sie genießen Improvisation und Anpassung im laufenden Prozess" }
      ],
      "typeDescriptions": {
        "ISTJ": "Verantwortungsbewusst und zuverlässig. Sie schätzen Tradition, Loyalität und Ordnung. Sie sind gewissenhaft und arbeiten stetig, um Ihre Pflichten zu erfüllen.",
        "ISFJ": "Beschützend und hingebungsvoll. Sie sind freundlich, verantwortungsbewusst und aufmerksam gegenüber den Bedürfnissen anderer. Sie schätzen Harmonie und Stabilität.",
        "INFJ": "Idealistisch und visionär. Sie haben ein tiefes Verständnis für Menschen und einen starken Wunsch, anderen zu helfen, ihr Potenzial zu entfalten.",
        "INTJ": "Strategisch und unabhängig. Sie haben einen analytischen Verstand und eine klare Vorstellung davon, wie man Dinge verbessern kann. Sie schätzen Kompetenz und Wissen.",
        "ISTP": "Praktisch und beobachtend. Sie verstehen gerne, wie Dinge funktionieren, und lösen Probleme effizient.",
        "ISFP": "Künstlerisch und sensibel. Sie schätzen Authentizität und Harmonie. Sie genießen Schönheit und haben einen starken ästhetischen Sinn.",
        "INFP": "Idealistisch und einfühlsam. Sie haben starke persönliche Werte und den Wunsch, die Welt zu einem besseren Ort zu machen.",
        "INTP": "Logisch und kreativ. Sie analysieren gerne komplexe Systeme und entwickeln innovative Ideen.",
        "ESTP": "Energisch und pragmatisch. Sie genießen die Action und leben im Augenblick. Sie sind geschickt im Lösen praktischer Probleme.",
        "ESFP": "Spontan und enthusiastisch. Sie genießen das Leben und stecken andere mit Ihrer Freude an. Sie sind großzügig und optimistisch.",
        "ENFP": "Begeisterungsfähig und kreativ. Sie sehen überall Möglichkeiten und haben eine ansteckende Energie, um andere zu inspirieren.",
        "ENTP": "Innovativ und herausfordernd. Sie genießen intellektuelle Debatten und suchen ständig nach neuen Ideen und Möglichkeiten.",
        "ESTJ": "Organisiert und entschlossen. Sie schätzen Effizienz und Ordnung. Sie sind von Natur aus zum Führen und Verwalten geschaffen.",
        "ESFJ": "Gesellig und hilfsbereit. Sie kümmern sich zutiefst um andere und arbeiten daran, Harmonie in Ihrem Umfeld zu schaffen.",
        "ENFJ": "Charismatisch und einfühlsam. Sie inspirieren andere und haben ein natürliches Talent, mit Mitgefühl zu führen.",
        "ENTJ": "Geborene(r) Anführer(in) und strategisch denkend. Sie sind entschlossen, effizient und genießen organisatorische Herausforderungen und Führungsaufgaben."
      }
    },
    "phq9": {
      "name": "PHQ-9",
      "abbr": "PHQ-9",
      "fullName": "Patient Health Questionnaire-9",
      "desc": "Schnelles Screening auf Depressionen, weit verbreitet in der Primärversorgung. 9 Fragen.",
      "instructions": "Wie oft sind Ihnen in den letzten 2 Wochen folgende Probleme aufgefallen?",
      "sharedOptions": ["Nie","Mehrere Tage","Mehr als die Hälfte der Tage","Fast jeden Tag"],
      "questions": [
        { "title": "Wenig Interesse oder Freude an Dingen" },
        { "title": "Sich niedergeschlagen, deprimiert oder hoffnungslos fühlen" },
        { "title": "Schwierigkeiten beim Ein- oder Durchschlafen oder zu viel schlafen" },
        { "title": "Sich müde oder energielos fühlen" },
        { "title": "Wenig Appetit oder übermäßiges Essen" },
        { "title": "Sich schlecht über sich selbst fühlen" },
        { "title": "Schwierigkeiten, sich zu konzentrieren" },
        { "title": "Sich so langsam bewegen oder sprechen, dass andere es bemerken, oder umgekehrt" },
        { "title": "Gedanken daran, sich selbst Schaden zuzufügen oder dass man besser tot wäre" }
      ],
      "results": {
        "minima": { "label": "Minimal", "desc": "Keine signifikanten Depressionssymptome festgestellt. Achten Sie weiterhin auf Ihr emotionales Wohlbefinden." },
        "leve": {
          "label": "Leicht",
          "desc": "Leichte Depressionssymptome festgestellt. Erwägen Sie, Ihre Stimmung zu beobachten und gesunde Gewohnheiten zu entwickeln."
        },
        "moderada": { "label": "Mäßig", "desc": "Mäßige Depressionssymptome festgestellt. Eine Konsultation mit einem psychischen Gesundheitsdienstleister wird empfohlen." },
        "moderadamente_grave": {
          "label": "Mäßig schwer",
          "desc": "Mäßig schwere Depressionssymptome festgestellt. Es ist wichtig, so schnell wie möglich professionelle Hilfe zu suchen."
        },
        "grave": { "label": "Schwer", "desc": "Schwere Depressionssymptome festgestellt. Dringend professionelle Hilfe in Anspruch zu nehmen, wird empfohlen." }
      }
    },
    "audit": {
      "name": "AUDIT",
      "abbr": "AUDIT",
      "fullName": "Screening-Test zur Identifizierung von Alkoholabhängigkeit",
      "desc": "Entwickelt von der WHO zur Erkennung von problematischem Alkoholkonsum.",
      "instructions": "Beantworten Sie die folgenden Fragen zu Ihrem Alkoholkonsum. Seien Sie so ehrlich wie möglich.",
      "questions": [
        {
          "title": "Wie oft konsumieren Sie alkoholische Getränke?",
          "options": ["Nie","Einmal im Monat oder seltener","2 bis 4 Mal im Monat","2 bis 3 Mal pro Woche","4 oder mehr Mal pro Woche"]
        },
        {
          "title": "Wie viele Standardgetränke mit Alkohol konsumieren Sie normalerweise an einem typischen Tag?",
          "options": ["1 oder 2","3 oder 4","5 oder 6","7 bis 9","10 oder mehr"]
        },
        {
          "title": "Wie oft trinken Sie 6 oder mehr Standardgetränke mit Alkohol bei einer Gelegenheit?",
          "options": ["Nie","Weniger als einmal im Monat","Einmal im Monat","Einmal pro Woche","Täglich oder fast täglich"]
        },
        {
          "title": "Wie oft waren Sie im letzten Jahr unfähig aufzuhören zu trinken, nachdem Sie angefangen hatten?",
          "options": ["Nie","Weniger als einmal im Monat","Einmal im Monat","Einmal pro Woche","Täglich oder fast täglich"]
        },
        {
          "title": "Wie oft konnten Sie im letzten Jahr Ihren Verpflichtungen nicht nachkommen, weil Sie getrunken hatten?",
          "options": ["Nie","Weniger als einmal im Monat","Einmal im Monat","Einmal pro Woche","Täglich oder fast täglich"]
        },
        {
          "title": "Wie oft mussten Sie im letzten Jahr nüchtern trinken, um sich nach starkem Alkoholkonsum am Vortag zu erholen?",
          "options": ["Nie","Weniger als einmal im Monat","Einmal im Monat","Einmal pro Woche","Täglich oder fast täglich"]
        },
        {
          "title": "Wie oft hatten Sie im letzten Jahr Reue oder Schuldgefühle nach dem Trinken?",
          "options": ["Nie","Weniger als einmal im Monat","Einmal im Monat","Einmal pro Woche","Täglich oder fast täglich"]
        },
        {
          "title": "Wie oft konnten Sie sich im letzten Jahr nicht erinnern, was in der Nacht zuvor passiert war, weil Sie getrunken hatten?",
          "options": ["Nie","Weniger als einmal im Monat","Einmal im Monat","Einmal pro Woche","Täglich oder fast täglich"]
        },
        {
          "title": "Wurden Sie oder jemand anderes verletzt, weil Sie getrunken hatten?",
          "options": ["Nein","Ja, aber nicht im letzten Jahr","Ja, im letzten Jahr"]
        },
        {
          "title": "Haben ein Familienmitglied, Freund, Arzt oder medizinisches Fachpersonal Bedenken hinsichtlich Ihres Alkoholkonsums geäußert oder Ihnen empfohlen, mit dem Trinken aufzuhören?",
          "options": ["Nein","Ja, aber nicht im letzten Jahr","Ja, im letzten Jahr"]
        }
      ],
      "results": {
        "bajo_riesgo": { "label": "Geringes Risiko", "desc": "Ihr Alkoholkonsum liegt im Bereich des geringen Risikos. Behalten Sie gesunde Gewohnheiten bei." },
        "riesgo_moderado": {
          "label": "Moderates Risiko",
          "desc": "Ihr Alkoholkonsum stellt ein moderates Risiko dar. Erwägen Sie, Ihren Konsum zu reduzieren und einen Fachmann zu konsultieren."
        },
        "riesgo_alto": {
          "label": "Hohes Risiko",
          "desc": "Ihr Alkoholkonsum stellt ein hohes Risiko dar. Es wird empfohlen, professionelle Beratung zur Reduzierung des Konsums in Anspruch zu nehmen."
        },
        "posible_dependencia": {
          "label": "Mögliche Abhängigkeit",
          "desc": "Die Ergebnisse deuten auf eine mögliche Alkoholabhängigkeit hin. Es ist wichtig, spezialisierte professionelle Hilfe zu suchen."
        }
      }
    },
    "isi": {
      "name": "ISI",
      "abbr": "ISI",
      "fullName": "Insomnie-Schweregrad-Index",
      "desc": "Bewertet die Art, Schwere und Auswirkungen von Schlafstörungen in den letzten zwei Wochen.",
      "instructions": "Bewerten Sie den Schweregrad Ihrer Schlafprobleme in den letzten 2 Wochen.",
      "questions": [
        {
          "title": "Schwierigkeiten beim Einschlafen",
          "options": ["Gar nicht","Leicht","Mäßig","Schwer","Sehr schwer"]
        },
        {
          "title": "Schwierigkeiten beim Durchschlafen",
          "options": ["Gar nicht","Leicht","Mäßig","Schwer","Sehr schwer"]
        },
        {
          "title": "Sehr frühes Aufwachen am Morgen",
          "options": ["Gar nicht","Leicht","Mäßig","Schwer","Sehr schwer"]
        },
        {
          "title": "Wie zufrieden sind Sie mit Ihrem aktuellen Schlafmuster?",
          "options": ["Sehr zufrieden","Zufrieden","Mäßig zufrieden","Unzufrieden","Sehr unzufrieden"]
        },
        {
          "title": "Inwieweit beeinträchtigt Ihr Schlafproblem Ihren täglichen Funktionsablauf?",
          "options": ["Gar nicht","Ein wenig","Etwas","Stark","Sehr stark"]
        },
        {
          "title": "Inwieweit glauben Sie, dass andere Personen Ihr Schlafproblem in Bezug auf Ihre Lebensqualität bemerken?",
          "options": ["Gar nicht","Ein wenig","Etwas","Stark","Sehr stark"]
        },
        {
          "title": "Wie besorgt sind Sie über Ihr aktuelles Schlafproblem?",
          "options": ["Gar nicht","Ein wenig","Etwas","Stark","Sehr stark"]
        }
      ],
      "results": {
        "sin_insomnio": {
          "label": "Keine klinische Insomnie",
          "desc": "Es werden keine klinischen Schlafstörungsprobleme festgestellt. Ihr Schlaf scheint im normalen Bereich zu liegen."
        },
        "subclinico": {
          "label": "Subklinische Insomnie",
          "desc": "Es werden einige Symptome von Schlafstörungen festgestellt, die jedoch keine klinischen Grade erreichen. Erwägen Sie, Ihre Schlafhygiene zu verbessern."
        },
        "clinico_moderado": {
          "label": "Mäßige klinische Insomnie",
          "desc": "Es wird eine klinische Insomnie von mäßiger Schwere festgestellt. Es wird empfohlen, einen Gesundheitsexperten zu konsultieren."
        },
        "clinico_grave": {
          "label": "Schwere klinische Insomnie",
          "desc": "Es wird eine schwere klinische Insomnie festgestellt. Es ist wichtig, professionelle Hilfe in Anspruch zu nehmen, um die Schlafprobleme zu behandeln."
        }
      }
    },
    "eat26": {
      "name": "EAT-26",
      "abbr": "EAT-26",
      "fullName": "Essverhaltenstest-26",
      "desc": "Erkennt Haltungen und Verhaltensweisen, die für Essstörungen charakteristisch sind.",
      "instructions": "Geben Sie an, wie oft Sie jede der folgenden Haltungen oder Verhaltensweisen zeigen. Antworten Sie ehrlich.",
      "sharedOptions": ["Nie","Selten","Manchmal","Oft","Sehr oft","Immer"],
      "questions": [
        { "title": "Die Vorstellung, übergewichtig zu sein, macht mir Angst" },
        { "title": "Ich vermeide Essen, wenn ich hungrig bin" },
        { "title": "Ich mache mir Gedanken über Essen" },
        { "title": "Ich hatte Fressattacken, bei denen ich das Gefühl hatte, nicht aufhören zu können" },
        { "title": "Ich schneide mein Essen in kleine Stücke" },
        { "title": "Ich kenne die Kalorien der Lebensmittel, die ich esse" },
        { "title": "Ich vermeide besonders kohlenhydratreiche Lebensmittel" },
        { "title": "Ich habe das Gefühl, dass andere es bevorzugen würden, wenn ich mehr essen würde" },
        { "title": "Ich erbreche nach dem Essen" },
        { "title": "Ich fühle mich nach dem Essen sehr schuldig" },
        { "title": "Ich mache mir Sorgen über den Wunsch, dünner zu sein" },
        { "title": "Ich denke darüber nach, Kalorien zu verbrennen, wenn ich Sport treibe" },
        { "title": "Andere denken, dass ich zu dünn bin" },
        { "title": "Ich mache mir Sorgen über die Vorstellung, Körperfett zu haben" },
        { "title": "Ich brauche länger als andere, um zu essen" },
        { "title": "Ich vermeide zuckerhaltige Lebensmittel" },
        { "title": "Ich esse Diätkost" },
        { "title": "Ich habe das Gefühl, dass Essen mein Leben kontrolliert" },
        { "title": "Ich zeige Selbstkontrolle in Bezug auf Essen" },
        { "title": "Ich habe das Gefühl, dass andere mich zum Essen drängen" },
        { "title": "Ich widme Essen zu viel Zeit und Gedanken" },
        { "title": "Ich fühle mich nach dem Verzehr von Süßigkeiten unwohl" },
        { "title": "Ich mache eine Diät" },
        { "title": "Ich mag es, einen leeren Magen zu haben" },
        { "title": "Ich genieße es, neue und leckere Speisen zu probieren" },
        { "title": "Ich habe den Drang zu erbrechen nach den Mahlzeiten" }
      ],
      "results": {
        "bajo_riesgo": {
          "label": "Geringes Risiko",
          "desc": "Es werden keine signifikanten Risikohaltungen im Essverhalten festgestellt. Pflegen Sie eine gesunde Beziehung zum Essen."
        },
        "riesgo_significativo": {
          "label": "Signifikantes Risiko",
          "desc": "Es werden Essverhaltensweisen festgestellt, die auf eine Essstörung hindeuten könnten. Es wird empfohlen, sich an einen spezialisierten Gesundheitsdienstleister zu wenden."
        }
      }
    },
    "mdq": {
      "name": "MDQ",
      "abbr": "MDQ",
      "fullName": "Stimmungsstörungs-Fragebogen",
      "desc": "Schnelles Screening-Instrument für bipolare Störung und das bipolare Spektrum.",
      "instructions": "Beantworten Sie die folgenden Fragen zu Erfahrungen, die Sie zu irgendeinem Zeitpunkt in Ihrem Leben gemacht haben.",
      "questions": [
        {
          "title": "Hatten Sie jemals eine Zeit, in der Sie sich so gut oder so hyperaktiv gefühlt haben, dass andere Leute dachten, Sie wären nicht Sie selbst?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Hatten Sie jemals eine Zeit, in der Sie sich so gereizt gefühlt haben, dass Sie Leute angeschrien oder Streit angefangen haben?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Hatten Sie jemals eine Zeit, in der Sie sich viel selbstbewusster als sonst gefühlt haben?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Hatten Sie jemals eine Zeit, in der Sie viel weniger geschlafen haben als sonst und es nicht vermisst haben?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Hatten Sie jemals eine Zeit, in der Sie viel gesprächiger oder schneller als sonst gesprochen haben?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Hatten Sie jemals eine Zeit, in der Gedanken schnell durch Ihren Kopf rasten?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Hatten Sie jemals eine Zeit, in der Sie so leicht abgelenkt waren, dass Sie Schwierigkeiten hatten, sich zu konzentrieren?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Hatten Sie jemals eine Zeit, in der Sie viel mehr Energie als sonst hatten?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Hatten Sie jemals eine Zeit, in der Sie viel aktiver waren oder viel mehr Dinge als sonst getan haben?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Hatten Sie jemals eine Zeit, in der Sie viel sozialer oder kontaktfreudiger als sonst waren?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Hatten Sie jemals eine Zeit, in der Sie sich viel mehr für Sex interessiert haben als sonst?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Hatten Sie jemals eine Zeit, in der Sie ungewöhnliche Dinge für Sie getan haben oder Dinge, die andere als übertrieben oder riskant betrachteten?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Hatten Sie jemals eine Zeit, in der Sie Geld auf eine Weise ausgegeben haben, die Ihnen oder Ihrer Familie Probleme bereitet hat?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Sind mehrere dieser Erfahrungen in demselben Zeitraum aufgetreten?",
          "options": ["Nein","Ja"]
        },
        {
          "title": "Wenn Sie auf eine der vorherigen Fragen mit JA geantwortet haben, welche Probleme haben sie Ihnen verursacht?",
          "options": ["Keine Probleme","Kleinere Probleme","Moderate Probleme","Schwere Probleme"]
        }
      ],
      "results": {
        "positive": {
          "label": "Positives Screening auf bipolare Störung",
          "desc": "Ihre Antworten deuten auf die Möglichkeit einer Störung des bipolaren Spektrums hin. Dieses Ergebnis ist KEINE Diagnose. Eine umfassende professionelle Beurteilung durch einen Psychiater wird dringend empfohlen."
        },
        "negative": {
          "label": "Negatives Screening",
          "desc": "Ihre Antworten deuten gemäß diesem Screening-Instrument nicht auf das Vorhandensein einer Störung des bipolaren Spektrums hin. Denken Sie daran, dass dieser Fragebogen nur ein Screening-Werkzeug ist und keine professionelle Beurteilung ersetzt."
        }
      }
    },
    "spin": {
      "name": "SPIN",
      "abbr": "SPIN",
      "fullName": "Soziale Phobie Inventar",
      "desc": "Bewertet das Vorhandensein und den Schweregrad von Symptomen sozialer Angst.",
      "instructions": "Geben Sie an, wie sehr Sie die folgenden Probleme in der letzten Woche beunruhigt haben.",
      "sharedOptions": ["Überhaupt nicht","Ein wenig","Etwas","Sehr","Extrem"],
      "questions": [
        { "title": "Ich habe Angst vor Autoritätspersonen." },
        { "title": "Es beunruhigt mich, wenn ich vor anderen erröte." },
        { "title": "Partys und gesellschaftliche Anlässe machen mir Angst." },
        { "title": "Ich vermeide es, mit Leuten zu sprechen, die ich nicht kenne." },
        { "title": "Ich habe große Angst, kritisiert zu werden." },
        { "title": "Die Angst, mich zu schämen, lässt mich Dinge vermeiden oder mit Leuten reden." },
        { "title": "Schwitzen vor anderen Menschen bereitet mir Kummer." },
        { "title": "Ich meide Partys." },
        { "title": "Ich vermeide Aktivitäten, bei denen ich im Mittelpunkt stehe." },
        { "title": "Mit Fremden zu sprechen macht mir Angst." },
        { "title": "Ich habe Angst, öffentlich sprechen zu müssen." },
        { "title": "Ich würde alles tun, um Kritik zu vermeiden." },
        { "title": "Herzklopfen beunruhigt mich, wenn ich mit Menschen zusammen bin." },
        { "title": "Ich habe Angst, Dinge zu tun, wenn Leute mich beobachten könnten." },
        { "title": "Meine größten Ängste sind, mich zu schämen oder mich lächerlich zu machen." },
        { "title": "Ich vermeide es, mit irgendeiner Autoritätsperson zu sprechen." },
        { "title": "Zittern oder Schütteln vor anderen bereitet mir Kummer." }
      ],
      "results": {
        "low": { "label": "Niedrige soziale Angst", "desc": "Ihre Punktzahl deutet auf ein geringes Maß an sozialer Angst hin." },
        "mild": { "label": "Leichte soziale Angst", "desc": "Ihre Punktzahl deutet auf ein leichtes Maß an sozialer Angst hin." },
        "moderate": {
          "label": "Moderate soziale Angst",
          "desc": "Ihre Punktzahl deutet auf ein moderates Maß an sozialer Angst hin. Es könnte von Vorteil sein, professionelle Hilfe in Anspruch zu nehmen."
        },
        "severe": {
          "label": "Schwere soziale Angst",
          "desc": "Ihre Punktzahl deutet auf ein schweres Maß an sozialer Angst hin. Es wird empfohlen, professionelle Hilfe zu suchen."
        },
        "very_severe": {
          "label": "Sehr schwere soziale Angst",
          "desc": "Ihre Punktzahl deutet auf ein sehr schweres Maß an sozialer Angst hin. Es wird dringend empfohlen, professionelle Hilfe zu suchen."
        }
      }
    },
    "rosenberg": {
      "name": "RSE",
      "abbr": "RSE",
      "fullName": "Rosenberg-Selbstwertgefühlsskala",
      "desc": "Das am häufigsten verwendete Maß für das globale Selbstwertgefühl. Bewertet Gefühle des persönlichen Wertes.",
      "instructions": "Geben Sie an, inwieweit Sie jeder der folgenden Aussagen zustimmen.",
      "sharedOptions": ["Stimme überhaupt nicht zu","Stimme nicht zu","Stimme zu","Stimme voll und ganz zu"],
      "questions": [
        { "title": "Ich habe das Gefühl, ein wertvoller Mensch zu sein, und zwar mindestens so sehr wie andere." },
        { "title": "Ich habe das Gefühl, positive Eigenschaften zu haben." },
        { "title": "Im Allgemeinen neige ich dazu zu denken, dass ich ein Versager bin." },
        { "title": "Ich kann Dinge genauso gut tun wie die meisten Leute." },
        { "title": "Ich habe das Gefühl, nichts Besonderes zu haben, worauf ich stolz sein könnte." },
        { "title": "Ich habe eine positive Einstellung zu mir selbst." },
        { "title": "Im Allgemeinen bin ich mit mir selbst zufrieden." },
        { "title": "Ich wünschte, ich könnte mehr Respekt vor mir selbst haben." },
        { "title": "Manchmal fühle ich mich wirklich nutzlos." },
        { "title": "Manchmal denke ich, ich kann nichts gut." }
      ],
      "results": {
        "low": { "label": "Niedriges Selbstwertgefühl", "desc": "Ihre Punktzahl deutet auf ein niedriges Selbstwertgefühl hin. Professionelle Hilfe wird empfohlen." },
        "normal": { "label": "Normales Selbstwertgefühl", "desc": "Ihre Punktzahl deutet auf ein normales und gesundes Selbstwertgefühl hin." },
        "high": { "label": "Hohes Selbstwertgefühl", "desc": "Ihre Punktzahl deutet auf ein hohes Selbstwertgefühl hin." }
      }
    },
    "who5": {
      "name": "WHO-5",
      "abbr": "WHO-5",
      "fullName": "WHO-5 Wohlbefinden-Index",
      "desc": "Kurzes Maß für das emotionale Wohlbefinden, entwickelt von der WHO. Nur 5 Fragen.",
      "instructions": "Geben Sie an, wie Sie sich in den letzten zwei Wochen gefühlt haben.",
      "sharedOptions": ["Nie","Gelegentlich","Weniger als die Hälfte der Zeit","Mehr als die Hälfte der Zeit","Die meiste Zeit","Immer"],
      "questions": [
        { "title": "Ich habe mich fröhlich und guter Laune gefühlt." },
        { "title": "Ich habe mich ruhig und entspannt gefühlt." },
        { "title": "Ich habe mich aktiv und energiegeladen gefühlt." },
        { "title": "Ich bin erfrischt und ausgeruht aufgewacht." },
        { "title": "Mein tägliches Leben war voller Dinge, die mich interessieren." }
      ],
      "results": {
        "low": {
          "label": "Niedriges Wohlbefinden",
          "desc": "Zeigt ein niedriges Niveau des emotionalen Wohlbefindens an. Eine professionelle Beurteilung wird empfohlen."
        },
        "reduced": {
          "label": "Reduziertes Wohlbefinden",
          "desc": "Zeigt ein reduziertes emotionales Wohlbefinden an. Erwägen Sie, mit einem Fachmann für psychische Gesundheit zu sprechen."
        },
        "moderate": { "label": "Moderates Wohlbefinden", "desc": "Zeigt ein moderates Niveau des emotionalen Wohlbefindens an." },
        "high": { "label": "Hohes Wohlbefinden", "desc": "Zeigt ein hohes Niveau des emotionalen Wohlbefindens an." }
      }
    },
    "aq10": {
      "name": "AQ-10",
      "abbr": "AQ-10",
      "fullName": "Autismus-Spektrum-Quotient — 10 Items",
      "desc": "Kurzes Screening für Merkmale, die mit dem Autismus-Spektrum in Verbindung stehen. Entwickelt von Baron-Cohen et al.",
      "instructions": "Lesen Sie jede Aussage sorgfältig und geben Sie Ihr Maß an Zustimmung oder Ablehnung an.",
      "sharedOptions": [
            "Stimme voll zu",
            "Stimme eher zu",
            "Stimme eher nicht zu",
            "Stimme gar nicht zu"
      ],
      "questions": [
            {
                  "title": "Ich bemerke häufig kleine Geräusche, die anderen entgehen"
            },
            {
                  "title": "Beim Lesen einer Geschichte fällt es mir schwer, die Absichten der Charaktere zu verstehen"
            },
            {
                  "title": "Es fällt mir leicht, zwischen den Zeilen zu lesen, wenn jemand mit mir spricht"
            },
            {
                  "title": "Ich konzentriere mich meist eher auf das Gesamtbild als auf kleine Details"
            },
            {
                  "title": "Ich weiß, wie ich erkennen kann, ob jemand, der mir zuhört, gelangweilt ist"
            },
            {
                  "title": "Es fällt mir leicht, mehrere Dinge gleichzeitig zu tun"
            },
            {
                  "title": "Es fällt mir leicht, herauszufinden, was jemand denkt oder fühlt, indem ich sein Gesicht betrachte"
            },
            {
                  "title": "Bei einer Unterbrechung kann ich schnell zu dem zurückkehren, was ich gerade tat"
            },
            {
                  "title": "Ich sammle gerne Informationen über Kategorien von Dingen"
            },
            {
                  "title": "Es fällt mir schwer, die Absichten von Menschen zu verstehen"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Geringe autistische Merkmale",
                  "desc": "Ihr Ergebnis deutet nicht auf signifikante Merkmale des Autismus-Spektrums hin. Falls Sie Bedenken haben, konsultieren Sie einen Fachmann."
            },
            "moderado": {
                  "label": "Einige autistische Merkmale",
                  "desc": "Ihr Ergebnis zeigt einige Merkmale des Autismus-Spektrums, liegt aber unter dem klinischen Überweisungsschwellenwert (≥6)."
            },
            "alto": {
                  "label": "Signifikante autistische Merkmale",
                  "desc": "Ihr Ergebnis überschreitet den Überweisungsschwellenwert (≥6). Eine umfassende diagnostische Untersuchung durch einen spezialisierten Fachmann wird empfohlen."
            },
            "muy_alto": {
                  "label": "Sehr signifikante autistische Merkmale",
                  "desc": "Ihr Ergebnis ist hoch. Es wird dringend empfohlen, eine umfassende diagnostische Untersuchung bei einem Spezialisten für Autismus-Spektrum-Störungen durchführen zu lassen."
            }
      }
},
    "aq50": {
      "name": "AQ-50",
      "abbr": "AQ-50",
      "fullName": "Autismus-Spektrum-Quotient — 50 Items",
      "desc": "Umfassende Bewertung von Merkmalen des Autismus-Spektrums in fünf Bereichen: soziale Fähigkeiten, Aufmerksamkeitswechsel, Detailgenauigkeit, Kommunikation und Fantasie.",
      "instructions": "Lesen Sie jede Aussage sorgfältig und geben Sie Ihr Maß an Zustimmung oder Ablehnung an. Es gibt keine richtigen oder falschen Antworten.",
      "questions": [
            {
                  "title": "Ich bevorzuge es, Dinge mit anderen zu tun, anstatt allein"
            },
            {
                  "title": "Ich bevorzuge es, Dinge immer auf die gleiche Weise zu tun"
            },
            {
                  "title": "Wenn ich versuche, mir etwas vorzustellen, fällt es mir sehr leicht, ein Bild im Kopf zu erschaffen"
            },
            {
                  "title": "Ich verliere mich oft so sehr in einer Sache, dass ich andere Dinge aus den Augen verliere"
            },
            {
                  "title": "Ich bemerke häufig kleine Geräusche, die anderen entgehen"
            },
            {
                  "title": "Ich achte normalerweise auf Nummernschilder oder ähnliche Informationen"
            },
            {
                  "title": "Andere sagen mir oft, dass das, was ich sage, unhöflich ist, obwohl ich denke, dass es höflich ist"
            },
            {
                  "title": "Beim Lesen einer Geschichte kann ich mir leicht vorstellen, wie die Charaktere aussehen könnten"
            },
            {
                  "title": "Ich bin fasziniert von Daten"
            },
            {
                  "title": "In einer sozialen Gruppe kann ich leicht mehreren Gesprächen gleichzeitig folgen"
            },
            {
                  "title": "Ich finde soziale Situationen leicht"
            },
            {
                  "title": "Ich neige dazu, Details zu bemerken, die anderen entgehen"
            },
            {
                  "title": "Ich gehe lieber in eine Bibliothek als auf eine Party"
            },
            {
                  "title": "Es fällt mir leicht, Geschichten zu erfinden"
            },
            {
                  "title": "Ich fühle mich stärker zu Menschen hingezogen als zu Dingen"
            },
            {
                  "title": "Ich neige dazu, sehr intensive Interessen zu haben, über die ich mich ärgere, wenn ich sie nicht verfolgen kann"
            },
            {
                  "title": "Ich genieße Smalltalk"
            },
            {
                  "title": "Wenn ich rede, fällt es anderen nicht immer leicht, ein Wort dazwischenzusagen"
            },
            {
                  "title": "Ich bin fasziniert von Zahlen"
            },
            {
                  "title": "Beim Lesen einer Geschichte fällt es mir schwer, die Absichten der Charaktere zu verstehen"
            },
            {
                  "title": "Ich lese nicht besonders gerne Romane"
            },
            {
                  "title": "Es fällt mir schwer, neue Freunde zu finden"
            },
            {
                  "title": "Ich bemerke ständig Muster in Dingen"
            },
            {
                  "title": "Ich gehe lieber ins Theater als in ein Museum"
            },
            {
                  "title": "Es stört mich nicht, wenn mein Tagesablauf gestört wird"
            },
            {
                  "title": "Ich weiß oft nicht, wie ich ein Gespräch am Laufen halten soll"
            },
            {
                  "title": "Es fällt mir leicht, zwischen den Zeilen zu lesen, wenn jemand mit mir spricht"
            },
            {
                  "title": "Ich konzentriere mich meist eher auf das Gesamtbild als auf kleine Details"
            },
            {
                  "title": "Ich bin nicht sehr gut darin, Telefonnummern zu behalten"
            },
            {
                  "title": "Ich bemerke normalerweise keine kleinen Veränderungen in einer Situation oder im Aussehen einer Person"
            },
            {
                  "title": "Ich weiß, wie ich erkennen kann, ob jemand, der mir zuhört, gelangweilt ist"
            },
            {
                  "title": "Es fällt mir leicht, mehrere Dinge gleichzeitig zu tun"
            },
            {
                  "title": "Beim Telefonieren bin ich unsicher, wann ich an der Reihe bin zu sprechen"
            },
            {
                  "title": "Ich genieße es, Dinge spontan zu tun"
            },
            {
                  "title": "Ich verstehe den Punkt eines Witzes oft als Letzter"
            },
            {
                  "title": "Es fällt mir leicht, herauszufinden, was jemand denkt oder fühlt, indem ich sein Gesicht betrachte"
            },
            {
                  "title": "Bei einer Unterbrechung kann ich schnell zu dem zurückkehren, was ich gerade tat"
            },
            {
                  "title": "Ich bin gut im Smalltalk"
            },
            {
                  "title": "Man sagt mir oft, dass ich immer wieder über dasselbe Thema rede"
            },
            {
                  "title": "Als Kind habe ich gerne Rollenspiele mit anderen Kindern gespielt"
            },
            {
                  "title": "Ich sammle gerne Informationen über Kategorien von Dingen"
            },
            {
                  "title": "Es fällt mir schwer, mir vorzustellen, wie es wäre, jemand anderes zu sein"
            },
            {
                  "title": "Ich plane Aktivitäten, an denen ich teilnehme, sorgfältig"
            },
            {
                  "title": "Ich genieße soziale Anlässe"
            },
            {
                  "title": "Es fällt mir schwer, die Absichten von Menschen zu verstehen"
            },
            {
                  "title": "Neue Situationen machen mich ängstlich"
            },
            {
                  "title": "Ich genieße es, neue Leute kennenzulernen"
            },
            {
                  "title": "Ich bin ein guter Diplomat"
            },
            {
                  "title": "Ich bin nicht sehr gut darin, Geburtsdaten von Menschen zu behalten"
            },
            {
                  "title": "Es fällt mir sehr leicht, mit Kindern Rollenspiele zu spielen"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Geringe autistische Merkmale",
                  "desc": "Ihr Ergebnis liegt im typischen Bereich der Allgemeinbevölkerung. Es werden keine signifikanten Merkmale des Autismus-Spektrums angezeigt."
            },
            "leve": {
                  "label": "Leichte autistische Merkmale",
                  "desc": "Ihr Ergebnis zeigt einige Merkmale des Autismus-Spektrums im Durchschnittsbereich. Viele Menschen ohne Diagnose liegen in diesem Bereich."
            },
            "moderado": {
                  "label": "Mäßige autistische Merkmale",
                  "desc": "Ihr Ergebnis überschreitet den Schwellenwert von 26 und deutet auf überdurchschnittliche autistische Merkmale hin. Bei Schwierigkeiten sollten Sie einen Fachmann konsultieren."
            },
            "alto": {
                  "label": "Signifikante autistische Merkmale",
                  "desc": "Ihr Ergebnis überschreitet den klinischen Schwellenwert von 32. 80% der Menschen mit Autismus-Diagnose liegen in diesem Bereich. Eine diagnostische Untersuchung wird empfohlen."
            },
            "muy_alto": {
                  "label": "Sehr signifikante autistische Merkmale",
                  "desc": "Ihr Ergebnis ist sehr hoch und deutet stark auf das Vorliegen von Merkmalen des Autismus-Spektrums hin. Eine umfassende diagnostische Untersuchung wird dringend empfohlen."
            }
      }
},
    "cssrs": {
      "name": "C-SSRS",
      "abbr": "C-SSRS",
      "fullName": "Columbia Suicide Severity Rating Scale – Screening",
      "desc": "Weltweit eingesetztes Screening-Tool für Suizidrisiko, verwendet in Notaufnahmen, der Primärversorgung und Bildung. Wenn Sie eine Krise erleben, rufen Sie 112 oder die Telefonseelsorge unter 0800 111 0 111 oder 0800 111 0 222 an.",
      "instructions": "Beantworten Sie die folgenden Fragen zu Gedanken oder Verhaltensweisen, die Sie möglicherweise hatten, ehrlich. Ihre Antworten sind vertraulich und werden nur auf Ihrem Gerät gespeichert.",
      "questions": [
            {
                  "title": "Haben Sie sich gewünscht, tot zu sein, oder gewünscht, einschlafen und nicht mehr aufwachen zu können?",
                  "options": [
                        "Nein",
                        "Ja"
                  ]
            },
            {
                  "title": "Hatten Sie tatsächlich Gedanken daran, sich das Leben zu nehmen?",
                  "options": [
                        "Nein",
                        "Ja"
                  ]
            },
            {
                  "title": "Haben Sie darüber nachgedacht, wie Sie dies tun könnten? (z.B. über eine Methode wie Tabletten, eine Waffe oder einen anderen Weg nachgedacht)",
                  "options": [
                        "Nein",
                        "Ja"
                  ]
            },
            {
                  "title": "Hatten Sie diese Gedanken und eine gewisse Absicht, danach zu handeln?",
                  "options": [
                        "Nein",
                        "Ja"
                  ]
            },
            {
                  "title": "Haben Sie begonnen, die Details auszuarbeiten oder ausgearbeitet, wie Sie sich das Leben nehmen würden? Beabsichtigen Sie, diesen Plan auszuführen?",
                  "options": [
                        "Nein",
                        "Ja"
                  ]
            },
            {
                  "title": "Haben Sie jemals etwas getan, begonnen etwas zu tun oder Vorbereitungen getroffen, um Ihr Leben zu beenden? (z.B. Tabletten gesammelt, eine Waffe besorgt, Wertgegenstände verschenkt, einen Abschiedsbrief geschrieben, Tabletten eingenommen, sich geschnitten, versucht, sich aufzuhängen, usw.)",
                  "options": [
                        "Nein",
                        "Ja"
                  ]
            }
      ],
      "results": {
            "none": {
                  "label": "Kein Risiko identifiziert",
                  "desc": "Es wurden derzeit keine Anzeichen für ein Suizidrisiko identifiziert. Wenn Sie solche Gedanken jemals haben, zögern Sie nicht, professionelle Hilfe in Anspruch zu nehmen."
            },
            "low": {
                  "label": "Geringes Risiko",
                  "desc": "Sie haben passive Todeswünsche geäußert. Obwohl Sie keine aktiven Pläne angeben, wird empfohlen, mit einem Fachmann zu sprechen.\n\n🆘 KRISENHOTLINES:\n• Deutschland: 0800 111 0 111 oder 0800 111 0 222\n• Österreich: 142\n• Schweiz: 143\n• International: befrienders.org"
            },
            "moderate": {
                  "label": "Mittleres Risiko",
                  "desc": "Ihre Antworten deuten auf Suizidgedanken hin. Es ist sehr wichtig, mit einem psychosozialen Fachpersonal zu sprechen. Ein Sicherheitsplan kann helfen.\n\n🆘 KRISENHOTLINES:\n• Deutschland: 0800 111 0 111 oder 0800 111 0 222\n• Österreich: 142\n• Schweiz: 143\n• International: befrienders.org"
            },
            "high": {
                  "label": "Hohes Risiko",
                  "desc": "Ihre Antworten deuten auf ein hohes Risiko für suizidales Verhalten hin. Sie benötigen dringend eine fachärztliche Einschätzung. Bitte wenden Sie sich sofort an einen psychosozialen Dienst oder rufen Sie eine Krisenhotline an.\n\n🆘 KRISENHOTLINES:\n• Deutschland: 0800 111 0 111 oder 0800 111 0 222\n• Österreich: 142\n• Schweiz: 143\n• International: befrienders.org"
            },
            "imminent": {
                  "label": "Akute Gefahr",
                  "desc": "Ihre Antworten deuten auf ein sehr hohes Risiko hin. Es ist wesentlich, dass Sie JETZT professionelle Hilfe suchen. Gehen Sie in die Notaufnahme oder rufen Sie sofort eine Krisenhotline an. Sie sind nicht allein.\n\n🆘 KRISENHOTLINES:\n• Deutschland: 0800 111 0 111 oder 0800 111 0 222\n• Österreich: 142\n• Schweiz: 143\n• International: befrienders.org"
            }
      }
},
    "cage": {
      "name": "CAGE",
      "abbr": "CAGE",
      "fullName": "CAGE-Fragebogen zur Alkoholerkennung",
      "desc": "Ultrakurzes 4-Fragen-Screening zur Erkennung von Alkoholproblemen. Ergänzt den AUDIT.",
      "instructions": "Beantworten Sie die folgenden Fragen zu Ihrem Verhältnis zu Alkohol ehrlich.",
      "sharedOptions": [
            "Nein",
            "Ja"
      ],
      "questions": [
            {
                  "title": "Hatten Sie schon einmal das Gefühl, Sie sollten Ihren Alkoholkonsum reduzieren (Cut down)?"
            },
            {
                  "title": "Haben sich Leute schon einmal darüber geärgert (Annoyed) und Sie für Ihr Trinken kritisiert?"
            },
            {
                  "title": "Haben Sie sich schon einmal schlecht oder schuldig (Guilty) wegen Ihres Trinkens gefühlt?"
            },
            {
                  "title": "Haben Sie schon einmal morgens als Erstes einen Drink gebraucht, um die Nerven zu beruhigen oder einen Kater loszuwerden (Eye-opener)?"
            }
      ],
      "results": {
            "none": {
                  "label": "Keine Hinweise",
                  "desc": "Es wurden keine Hinweise auf Alkoholprobleme festgestellt."
            },
            "low": {
                  "label": "Mögliches Risiko",
                  "desc": "Eine positive Antwort rechtfertigt eine weitere Abklärung. Erwägen Sie, den AUDIT-Test für eine umfassendere Einschätzung durchzuführen."
            },
            "moderate": {
                  "label": "Wahrscheinliches Problem",
                  "desc": "Ihr Ergebnis legt eine hohe Wahrscheinlichkeit für eine Alkoholgebrauchsstörung nahe. Die Konsultation eines Arztes oder einer Ärztin wird empfohlen."
            },
            "high": {
                  "label": "Hohe Wahrscheinlichkeit",
                  "desc": "Ihr Ergebnis ist praktisch diagnostisch für eine Alkoholabhängigkeit. Es ist sehr wichtig, spezialisierte professionelle Hilfe aufzusuchen."
            }
      }
},
    "phqa": {
      "name": "PHQ-A",
      "abbr": "PHQ-A",
      "fullName": "Patientengesundheitsfragebogen – für Jugendliche",
      "desc": "PHQ-9-Version, die für Jugendliche (11-17 Jahre) validiert ist. Erfasst Depressionen in den letzten zwei Wochen.",
      "instructions": "Wie oft haben Sie sich in den letzten 2 Wochen durch die folgenden Probleme belastet gefühlt? Denken Sie daran, wie Sie sich in der Schule, mit Freunden und zu Hause gefühlt haben.",
      "sharedOptions": [
            "Überhaupt nicht",
            "An einzelnen Tagen",
            "An mehr als der Hälfte der Tage",
            "Beinahe jeden Tag"
      ],
      "questions": [
            {
                  "title": "Wenig Interesse oder Freude an Ihren Tätigkeiten"
            },
            {
                  "title": "Niedergeschlagenheit, Schwermut oder Hoffnungslosigkeit"
            },
            {
                  "title": "Schwierigkeiten ein- oder durchzuschlafen oder übermäßig viel Schlaf"
            },
            {
                  "title": "Müdigkeit oder Energiemangel"
            },
            {
                  "title": "Appetitverlust oder übermäßiges Essen"
            },
            {
                  "title": "Schlechtes Selbstwertgefühl – oder das Gefühl, versagt zu haben oder sich oder Ihre Familie enttäuscht zu haben"
            },
            {
                  "title": "Konzentrationsschwierigkeiten, z.B. bei den Hausaufgaben, beim Lesen oder Fernsehen"
            },
            {
                  "title": "Sich so langsam bewegen oder sprechen, dass es anderen aufgefallen sein könnte? Oder das Gegenteil – so unruhig oder ruhelos sein, dass Sie viel mehr herumgelaufen sind als üblich"
            },
            {
                  "title": "Gedanken, dass Sie besser tot wären oder sich auf irgendeine Weise weh tun sollten"
            }
      ],
      "results": {
            "minima": {
                  "label": "Minimal",
                  "desc": "Keine wesentlichen Depressionssymptome festgestellt. Kümmern Sie sich weiterhin um Ihr emotionales Wohlbefinden."
            },
            "leve": {
                  "label": "Leicht",
                  "desc": "Leichte Symptome festgestellt. Sprechen Sie mit einer vertrauten erwachsenen Person, falls Sie sich Sorgen machen."
            },
            "moderada": {
                  "label": "Mittel",
                  "desc": "Mittelschwere Depressionssymptome festgestellt. Es wird empfohlen, mit einem psychosozialen Fachpersonal zu sprechen."
            },
            "moderadamente_grave": {
                  "label": "Mittel bis schwer",
                  "desc": "Deutliche Depressionssymptome festgestellt. Es ist wichtig, bald professionelle Hilfe zu suchen."
            },
            "grave": {
                  "label": "Schwer",
                  "desc": "Schwere Depressionssymptome festgestellt. Suchen Sie dringend professionelle Hilfe auf. Sprechen Sie jetzt mit einer vertrauten erwachsenen Person."
            }
      }
},
    "triage": {
      "name": "Leitfaden",
      "abbr": "Leitfaden",
      "fullName": "Erster Orientierungsfragebogen",
      "desc": "Wissen Sie nicht, wo Sie anfangen sollen? Dieser kurze Fragebogen empfiehlt Ihnen, welche Bewertungen für Sie am relevantesten sind.",
      "instructions": "Beantworten Sie ehrlich die folgenden Fragen, wie Sie sich in letzter Zeit gefühlt haben. Am Ende erhalten Sie personalisierte Empfehlungen, welche Bewertungen Sie durchführen sollten.",
      "sharedOptions": ["Gar nicht","Ein wenig","Mäßig","Ziemlich","Sehr"],
      "questions": [
        { "title": "Ich habe mich traurig, niedergeschlagen oder hoffnungslos gefühlt" },
        { "title": "Ich habe das Interesse oder die Freude an Dingen verloren, die ich früher genossen habe" },
        { "title": "Ich fühle mich die meiste Zeit energielos oder müde" },
        { "title": "Ich fühle mich nervös, ängstlich oder angespannt" },
        { "title": "Ich habe übermäßige Sorgen, die ich nicht kontrollieren kann" },
        { "title": "Ich erlebe körperliche Symptome von Angst (Herzrasen, Schwitzen, Zittern)" },
        { "title": "Ich vermeide soziale Situationen aus Angst, beurteilt zu werden oder mich lächerlich zu machen" },
        { "title": "Es fällt mir sehr schwer, öffentlich oder mit Fremden zu sprechen" },
        { "title": "Ich habe das Gefühl, dass die Situationen in meinem Leben mich überfordern" },
        { "title": "Ich habe Schwierigkeiten, alltägliche Probleme zu bewältigen" },
        { "title": "Ich habe eine traumatische Erfahrung gemacht, die mich immer noch beeinflusst" },
        { "title": "Ich habe beunruhigende Erinnerungen oder Albträume über vergangene Ereignisse" },
        { "title": "Ich habe Schwierigkeiten einzuschlafen oder durchzuschlafen" },
        { "title": "Meine Schlafqualität beeinträchtigt mein tägliches Funktionieren" },
        { "title": "Ich mache mir übermäßig Sorgen um mein Gewicht oder mein Körperbild" },
        { "title": "Ich habe eine problematische Beziehung zum Essen (Einschränkungen, Fressanfälle, Erbrechen)" },
        { "title": "Mein Alkoholkonsum bereitet mir Sorgen oder hat Probleme verursacht" },
        { "title": "Ich habe Schwierigkeiten, mich zu konzentrieren, Aufgaben zu organisieren oder das zu beenden, was ich anfange" },
        { "title": "Ich bin übermäßig unruhig oder habe Schwierigkeiten, ruhig zu bleiben" },
        { "title": "Ich habe wiederkehrende, aufdringliche Gedanken, die mir Kummer bereiten" },
        { "title": "Ich verspüre den Drang, bestimmte Handlungen oder Rituale zu wiederholen" },
        { "title": "Ich hatte Perioden der Euphorie oder übermäßigen Energie, gefolgt von Perioden der Depression" },
        { "title": "Ich hatte Episoden, in denen ich mich ungewöhnlich hyperaktiv oder impulsiv fühlte" },
        { "title": "Meine zwischenmenschlichen Beziehungen sind intensiv und instabil" },
        { "title": "Meine Emotionen ändern sich schnell und es fällt mir schwer, sie zu regulieren" }
      ,
        { "title": "Es fällt mir schwer, die Absichten oder Gefühle anderer zu verstehen" },
        { "title": "Ich bevorzuge Routinen und fühle mich unwohl, wenn sie gestört werden" }
      ],
      "domainNames": {
        "Estado de ánimo": "Stimmung",
        "Ansiedad": "Angst",
        "Ansiedad social": "Soziale Angst",
        "Estrés": "Stress",
        "Trauma": "Trauma",
        "Sueño": "Schlaf",
        "Alimentación": "Ernährung",
        "Alcohol": "Alkohol",
        "Atención y concentración": "Aufmerksamkeit und Konzentration",
        "Obsesiones y compulsiones": "Zwangsstörungen",
        "Cambios de ánimo": "Stimmungsschwankungen",
        "Regulación emocional": "Emotionsregulation"
      ,
        "Rasgos del espectro autista": "Autismus-Spektrum-Merkmale"
      },
      "domainReasons": {
        "Estado de ánimo": "Hohe Punktzahl bei Indikatoren der Stimmung",
        "Ansiedad": "Hohe Punktzahl bei Indikatoren der Angst",
        "Ansiedad social": "Hohe Punktzahl bei Indikatoren der sozialen Angst",
        "Estrés": "Hohe Punktzahl bei Indikatoren des wahrgenommenen Stresses",
        "Trauma": "Hohe Punktzahl bei Indikatoren von Trauma und posttraumatischer Belastungsstörung",
        "Sueño": "Hohe Punktzahl bei Indikatoren von Schlafproblemen",
        "Alimentación": "Hohe Punktzahl bei Indikatoren von Essverhalten",
        "Alcohol": "Hohe Punktzahl bei Indikatoren des Alkoholkonsums",
        "Atención y concentración": "Hohe Punktzahl bei Indikatoren von Unaufmerksamkeit und Hyperaktivität",
        "Obsesiones y compulsiones": "Hohe Punktzahl bei Indikatoren von Zwangsverhalten",
        "Cambios de ánimo": "Hohe Punktzahl bei Indikatoren von Stimmungsschwankungen",
        "Regulación emocional": "Hohe Punktzahl bei Indikatoren von emotionaler und zwischenmenschlicher Instabilität"
      ,
        "Rasgos del espectro autista": "Hohe Punktzahl bei Indikatoren für Autismus-Spektrum-Merkmale"
      },
      "results": {
        "triage_label": "Ihre empfohlenen Bewertungen",
        "triage_desc": "Basierend auf Ihren Antworten empfehlen wir die folgenden Bewertungen:",
        "suggested_wellbeing": "Allgemeine Wohlbefindensbewertung für alle empfohlen",
        "suggested_personality": "Persönlichkeitsbewertung als Ergänzung empfohlen"
      }
    },
    "ipip300": {
      "name": "IPIP-300",
      "abbr": "IPIP-300",
      "fullName": "IPIP-NEO-300 — Persönlichkeitsinventar mit 300 Items",
      "desc": "Die umfassendste verfügbare Persönlichkeitsbewertung. Misst 30 Facetten, die in den Big Five Persönlichkeitsmerkmalen gruppiert sind, mit hoher Präzision.",
      "instructions": "Geben Sie an, wie genau jede Aussage Sie im Allgemeinen beschreibt. Es gibt keine richtigen oder falschen Antworten. Bitte antworten Sie ehrlich.",
      "sharedOptions": ["Sehr unzutreffend","Unzutreffend","Weder zutreffend noch unzutreffend","Zutreffend","Sehr zutreffend"],
      "questions": [
        { "title": "Ich mache mir Sorgen über Dinge." },
        { "title": "Ich bin die meiste Zeit entspannt." },
        { "title": "Ich befürchte das Schlimmste in jeder Situation." },
        { "title": "Ich fühle mich selten ängstlich." },
        { "title": "Ich werde leicht nervös." },
        { "title": "Ich sorge mich nicht um Dinge, die bereits geschehen sind." },
        { "title": "Ich mache mir Sorgen darüber, was schiefgehen könnte." },
        { "title": "Ich bleibe angesichts von Unsicherheit ruhig." },
        { "title": "Ich fühle häufig Angst." },
        { "title": "Ich erschrecke nicht leicht." },
        { "title": "Ich werde leicht gereizt." },
        { "title": "Ich verliere selten die Beherrschung." },
        { "title": "Ich ärgere mich, wenn die Dinge nicht nach meinem Willen laufen." },
        { "title": "Ich bin schwer zu provozieren." },
        { "title": "Ich bin leicht frustriert." },
        { "title": "Ich bewahre die Fassung in schwierigen Situationen." },
        { "title": "Viele Dinge stören mich." },
        { "title": "Ich werde nicht leicht wütend." },
        { "title": "Ich explodiere, wenn man mich provoziert." },
        { "title": "Ich kontrolliere mein Temperament gut." },
        { "title": "Ich fühle mich oft traurig." },
        { "title": "Ich fühle mich wohl mit mir selbst." },
        { "title": "Ich fühle mich häufig entmutigt." },
        { "title": "Ich fühle mich selten niedergeschlagen." },
        { "title": "Ich bin unzufrieden mit meinem Leben." },
        { "title": "Ich fühle mich im Allgemeinen zufrieden." },
        { "title": "Manchmal fühle ich mich innerlich leer." },
        { "title": "Ich lasse mich nicht von negativen Gedanken überwältigen." },
        { "title": "Ich neige dazu, die dunkle Seite der Dinge zu sehen." },
        { "title": "Ich genieße das Leben, wie es ist." },
        { "title": "Ich werde leicht verlegen." },
        { "title": "Ich fühle mich in sozialen Situationen wohl." },
        { "title": "Ich mache mir Sorgen darüber, was andere von mir denken." },
        { "title": "Es macht mir nichts aus, im Mittelpunkt der Aufmerksamkeit zu stehen." },
        { "title": "Ich fühle mich unwohl, wenn ich beobachtet werde." },
        { "title": "Ich fühle mich selten befangen." },
        { "title": "Es fällt mir schwer, vor einer Gruppe zu sprechen." },
        { "title": "Ich mache mir keine Sorgen, mich lächerlich zu machen." },
        { "title": "Ich werde leicht rot." },
        { "title": "Ich verhalte mich natürlich gegenüber Fremden." },
        { "title": "Es fällt mir schwer, Versuchungen zu widerstehen." },
        { "title": "Ich kontrolliere meine Impulse gut." },
        { "title": "Ich esse oder trinke zu viel, wenn ich gestresst bin." },
        { "title": "Ich weiß, wann ich aufhören muss." },
        { "title": "Ich gebe Geld für Dinge aus, die ich nicht brauche." },
        { "title": "Ich widerstehe Versuchungen gut." },
        { "title": "Ich gebe meinen Gelüsten nach." },
        { "title": "Ich halte meine Gewohnheiten unter Kontrolle." },
        { "title": "Ich tue Dinge, die ich später bereue." },
        { "title": "Ich verfalle nicht leicht in Exzesse." },
        { "title": "Ich breche unter Druck zusammen." },
        { "title": "Ich bewältige stressige Situationen gut." },
        { "title": "Ich fühle mich von Schwierigkeiten überwältigt." },
        { "title": "Ich lasse mich von Problemen nicht unterkriegen." },
        { "title": "Ich erstarre unter starkem Druck." },
        { "title": "Ich funktioniere auch unter Stress gut." },
        { "title": "Es fällt mir schwer, mich von Rückschlägen zu erholen." },
        { "title": "Ich bin widerstandsfähig gegenüber Widrigkeiten." },
        { "title": "Ich verliere die Kontrolle unter starkem Druck." },
        { "title": "Ich gehe Probleme gelassen an." },
        { "title": "Ich schließe leicht Freundschaften." },
        { "title": "Es fällt mir schwer, auf andere zuzugehen." },
        { "title": "Ich fühle mich wohl unter Menschen." },
        { "title": "Ich bin distanziert gegenüber Fremden." },
        { "title": "Ich verbinde mich schnell mit Menschen." },
        { "title": "Ich halte Abstand zu anderen." },
        { "title": "Ich behandle alle herzlich." },
        { "title": "Es fällt mir schwer, neuen Menschen zu vertrauen." },
        { "title": "Ich sorge dafür, dass sich Menschen willkommen fühlen." },
        { "title": "Ich bin keine besonders warmherzige Person." },
        { "title": "Ich bin gerne unter Menschen." },
        { "title": "Ich bin lieber allein." },
        { "title": "Ich gehe gerne auf Partys und Zusammenkünfte." },
        { "title": "Ich meide Menschenmengen." },
        { "title": "Ich suche die Gesellschaft anderer." },
        { "title": "Ich genieße die Einsamkeit." },
        { "title": "Ich fühle mich in großen Gruppen wohl." },
        { "title": "Ich bevorzuge Aktivitäten, die ich allein machen kann." },
        { "title": "Ich liebe es zu gesellig zu sein." },
        { "title": "Gesellschaftliche Zusammenkünfte erschöpfen mich." },
        { "title": "Ich übernehme das Kommando." },
        { "title": "Ich halte mich im Hintergrund." },
        { "title": "Ich sage ohne zu zögern, was ich denke." },
        { "title": "Es fällt mir schwer, meine Meinungen auszudrücken." },
        { "title": "Ich übernehme natürlicherweise die Führungsrolle." },
        { "title": "Ich lasse andere die Entscheidungen treffen." },
        { "title": "Ich verteidige meine Ideen mit Nachdruck." },
        { "title": "Es fällt mir schwer, Nein zu sagen." },
        { "title": "Ich ergreife die Initiative in Gesprächen." },
        { "title": "Ich vermeide es, meinen Standpunkt aufzudrängen." },
        { "title": "Ich bin immer beschäftigt." },
        { "title": "Ich nehme die Dinge gelassen." },
        { "title": "Ich lebe in einem schnellen Tempo." },
        { "title": "Ich lasse mir gerne Zeit." },
        { "title": "Ich erledige viele Dinge am Tag." },
        { "title": "Ich bevorzuge ein ruhiges Lebenstempo." },
        { "title": "Ich wechsle schnell von einer Aktivität zur nächsten." },
        { "title": "Ich mag es nicht, mich zu beeilen." },
        { "title": "Ich bin eine sehr aktive Person." },
        { "title": "Ich entspanne mich gerne und tue nichts." },
        { "title": "Ich suche Abenteuer und starke Reize." },
        { "title": "Ich bevorzuge das Vorhersehbare und Sichere." },
        { "title": "Ich liebe aufregende Erlebnisse." },
        { "title": "Ich vermeide riskante Situationen." },
        { "title": "Ich probiere gerne neue und riskante Dinge aus." },
        { "title": "Ich bevorzuge Routine gegenüber Überraschungen." },
        { "title": "Ich genieße Geschwindigkeit und Adrenalin." },
        { "title": "Ich mag keine gefährlichen Aktivitäten." },
        { "title": "Mir wird langweilig, wenn es keine Aufregung gibt." },
        { "title": "Ich bin mit einem ruhigen Leben zufrieden." },
        { "title": "Ich bin eine fröhliche Person." },
        { "title": "Ich bin selten gut gelaunt." },
        { "title": "Ich strahle Optimismus aus." },
        { "title": "Ich bin keine besonders fröhliche Person." },
        { "title": "Ich lache leicht." },
        { "title": "Es fällt mir schwer, Begeisterung zu empfinden." },
        { "title": "Ich sehe die positive Seite der Dinge." },
        { "title": "Ich begeistere mich nicht leicht." },
        { "title": "Ich übertrage meine Freude auf andere." },
        { "title": "Ich bin ernster als die meisten Menschen." },
        { "title": "Ich habe eine sehr lebhafte Vorstellungskraft." },
        { "title": "Ich fantasiere selten." },
        { "title": "Ich tagträume gerne." },
        { "title": "Ich bin sehr praktisch veranlagt und verliere mich nicht in Fantasien." },
        { "title": "Ich erschaffe Fantasiewelten in meinem Kopf." },
        { "title": "Ich verschwende keine Zeit mit Fantasie." },
        { "title": "Die Welt der Ideen fasziniert mich." },
        { "title": "Ich bevorzuge Fakten gegenüber Fantasien." },
        { "title": "Mein Kopf ist voller kreativer Ideen." },
        { "title": "Ich habe nicht viel Vorstellungskraft." },
        { "title": "Ich schätze Kunst und Schönheit." },
        { "title": "Künstlerische Ausdrucksformen interessieren mich nicht." },
        { "title": "Musik bewegt mich." },
        { "title": "Ich sehe den Sinn abstrakter Kunst nicht." },
        { "title": "Ich besuche gerne Museen und Galerien." },
        { "title": "Kunst langweilt mich." },
        { "title": "Ich betrachte gerne die Natur." },
        { "title": "Ich achte nicht auf ästhetische Details." },
        { "title": "Ich schätze künstlerischen Ausdruck in all seinen Formen." },
        { "title": "Ich bevorzuge das Funktionale gegenüber dem Schönen." },
        { "title": "Ich empfinde Emotionen sehr intensiv." },
        { "title": "Ich bin selten tief bewegt." },
        { "title": "Filme und Bücher berühren mich zutiefst." },
        { "title": "Ich bin keine besonders emotionale Person." },
        { "title": "Ich kann bei einem schönen Lied weinen." },
        { "title": "Ich lasse mich nicht von Emotionen mitreißen." },
        { "title": "Ich empfinde tiefes Mitgefühl für andere." },
        { "title": "Ich kontrolliere meine Gefühle mit Vernunft." },
        { "title": "Meine Emotionen sind sehr vielfältig und intensiv." },
        { "title": "Ich bin eine emotional zurückhaltende Person." },
        { "title": "Ich erkunde gerne neue Orte." },
        { "title": "Ich bevorzuge das Vertraute gegenüber dem Unbekannten." },
        { "title": "Ich probiere gerne Speisen aus anderen Kulturen." },
        { "title": "Ich fühle mich wohl mit meinen Routinen." },
        { "title": "Mich ziehen Reisen an exotische Orte an." },
        { "title": "Ich verlasse ungern meine Komfortzone." },
        { "title": "Ich suche ständig nach neuen Erfahrungen." },
        { "title": "Ich mache Dinge lieber auf die gewohnte Weise." },
        { "title": "Ich passe mich gut an neue Situationen an." },
        { "title": "Veränderungen bereiten mir Unbehagen." },
        { "title": "Ich löse gerne komplexe Probleme." },
        { "title": "Ich meide philosophische Diskussionen." },
        { "title": "Ich denke gerne über abstrakte Ideen nach." },
        { "title": "Intellektuelle Debatten interessieren mich nicht." },
        { "title": "Ich lese viel über verschiedene Themen." },
        { "title": "Ich bevorzuge praktische Aktivitäten gegenüber theoretischen." },
        { "title": "Es fasziniert mich, neue Dinge zu lernen." },
        { "title": "Philosophie interessiert mich nicht." },
        { "title": "Ich bin neugierig zu verstehen, wie alles funktioniert." },
        { "title": "Ich mag keine Rätsel oder Denksportaufgaben." },
        { "title": "Ich glaube, dass Gesetze sich den Zeiten anpassen sollten." },
        { "title": "Ich respektiere etablierte Traditionen." },
        { "title": "Ich bin offen für gesellschaftliches Umdenken." },
        { "title": "Ich glaube, die Gesellschaft funktioniert besser mit strengen Regeln." },
        { "title": "Ich stelle etablierte Normen in Frage." },
        { "title": "Ich halte mich lieber an soziale Konventionen." },
        { "title": "Ich unterstütze progressive gesellschaftliche Veränderungen." },
        { "title": "Ich finde es wichtig, Bräuche zu bewahren." },
        { "title": "Ich glaube, dass die bestehende Ordnung hinterfragt werden sollte." },
        { "title": "Traditionen geben der Gesellschaft Stabilität." },
        { "title": "Ich vertraue anderen." },
        { "title": "Ich misstraue den Absichten der Menschen." },
        { "title": "Ich glaube, dass die meisten Menschen ehrlich sind." },
        { "title": "Ich vermute bei anderen verborgene Motive." },
        { "title": "Ich gebe Menschen den Vertrauensvorschuss." },
        { "title": "Ich glaube, dass Menschen versuchen, mich auszunutzen." },
        { "title": "Ich glaube an die Güte der Menschen." },
        { "title": "Es fällt mir schwer, jemandem zu vertrauen." },
        { "title": "Ich nehme an, dass Menschen gute Absichten haben." },
        { "title": "Ich bin skeptisch gegenüber der Freundlichkeit von Fremden." },
        { "title": "Ich bin jederzeit ehrlich." },
        { "title": "Manchmal manipuliere ich andere, um zu bekommen, was ich will." },
        { "title": "Ich würde nicht lügen, um einen Vorteil zu erlangen." },
        { "title": "Ich benutze Tricks, um Menschen dazu zu bringen, das zu tun, was ich will." },
        { "title": "Ich behandle andere fair." },
        { "title": "Manchmal gebe ich vor, etwas zu sein, was ich nicht bin." },
        { "title": "Ich sage die Wahrheit, auch wenn es unangenehm ist." },
        { "title": "Ich bin nicht immer völlig aufrichtig." },
        { "title": "Ich handle nach meinen Prinzipien." },
        { "title": "Ich greife zu Schmeichelei, wenn es mir nützt." },
        { "title": "Ich helfe gerne anderen." },
        { "title": "Ich mische mich nicht in die Probleme anderer ein." },
        { "title": "Es befriedigt mich, etwas für jemanden zu tun." },
        { "title": "Ich achte zuerst auf meine eigenen Interessen." },
        { "title": "Mir liegt das Wohlbefinden anderer am Herzen." },
        { "title": "Ich mag es nicht, um Gefallen gebeten zu werden." },
        { "title": "Ich helfe Bedürftigen, ohne etwas dafür zu erwarten." },
        { "title": "Ich fühle mich nicht verpflichtet, anderen zu helfen." },
        { "title": "Ich gebe meine Zeit großzügig." },
        { "title": "Ich mische mich lieber nicht in die Angelegenheiten anderer ein." },
        { "title": "Ich vermeide Konflikte." },
        { "title": "Es macht mir nichts aus, mit Menschen zu streiten." },
        { "title": "Ich suche in Diskussionen nach Einigung." },
        { "title": "Ich genieße eine gute Debatte, auch wenn sie angespannt wird." },
        { "title": "Ich gebe nach, um den Frieden zu wahren." },
        { "title": "Ich bestehe auf meinem Standpunkt, auch wenn es zu Konflikten führt." },
        { "title": "Mir ist Harmonie wichtiger als Recht zu haben." },
        { "title": "Es macht mir nichts aus, anderen zu widersprechen." },
        { "title": "Ich versuche, Lösungen zu finden, die alle zufriedenstellen." },
        { "title": "Ich kann in Diskussionen ziemlich stur sein." },
        { "title": "Ich gebe nicht gerne an." },
        { "title": "Ich glaube, ich bin besser als die meisten Menschen." },
        { "title": "Ich bin eine bescheidene Person." },
        { "title": "Ich stehe gerne im Mittelpunkt der Aufmerksamkeit." },
        { "title": "Ich halte mich nicht für etwas Besonderes." },
        { "title": "Ich glaube, ich verdiene mehr Anerkennung, als ich bekomme." },
        { "title": "Ich spiele meine Leistungen herunter." },
        { "title": "Ich rede gerne über meine Erfolge." },
        { "title": "Ich suche keine Bewunderung." },
        { "title": "Ich weiß, dass ich mehr wert bin als die meisten Menschen." },
        { "title": "Ich werde von leidenden Menschen berührt." },
        { "title": "Die Probleme anderer berühren mich nicht sehr." },
        { "title": "Ich empfinde Mitgefühl für die weniger Glücklichen." },
        { "title": "Ich glaube, jeder sollte seine eigenen Probleme lösen." },
        { "title": "Ich sorge mich um Benachteiligte." },
        { "title": "Traurige Geschichten berühren mich nicht leicht." },
        { "title": "Ich glaube, die Gesellschaft sollte die Schwachen schützen." },
        { "title": "Menschen übertreiben ihre Probleme." },
        { "title": "Es schmerzt mich, Tiere leiden zu sehen." },
        { "title": "Ich bin nicht sehr sentimental bei sozialen Anliegen." },
        { "title": "Ich weiß, dass ich jede Situation meistern kann." },
        { "title": "Ich zweifle an meinen Fähigkeiten." },
        { "title": "Ich erledige Aufgaben erfolgreich." },
        { "title": "Ich fühle mich nicht für Herausforderungen gerüstet." },
        { "title": "Ich vertraue auf meine Fähigkeit, Probleme zu lösen." },
        { "title": "Ich fühle mich unsicher bei schwierigen Aufgaben." },
        { "title": "Ich weiß, wie man Dinge gut macht." },
        { "title": "Manchmal fühle ich mich inkompetent." },
        { "title": "Ich bewältige Schwierigkeiten geschickt." },
        { "title": "Ich befürchte, den Erwartungen nicht gerecht zu werden." },
        { "title": "Ich halte meine Sachen ordentlich." },
        { "title": "Ich lasse alles unordentlich." },
        { "title": "Ich mag es, wenn alles an seinem Platz ist." },
        { "title": "Unordnung stört mich nicht." },
        { "title": "Ich folge einer organisierten Routine." },
        { "title": "Ich bin ziemlich unorganisiert." },
        { "title": "Ich räume häufig auf und mache sauber." },
        { "title": "Es kümmert mich nicht, ob alles in Ordnung ist." },
        { "title": "Chaos um mich herum stört mich." },
        { "title": "Mein Arbeitsplatz ist normalerweise unordentlich." },
        { "title": "Ich erfülle meine Pflichten." },
        { "title": "Manchmal halte ich mich nicht an die Regeln." },
        { "title": "Ich halte meine Versprechen." },
        { "title": "Ich mache nicht immer das, was von mir erwartet wird." },
        { "title": "Ich nehme meine Verantwortung ernst." },
        { "title": "Manchmal komme ich meinen Verpflichtungen nicht nach." },
        { "title": "Ich tue, was ich sage." },
        { "title": "Regeln kümmern mich nicht sonderlich." },
        { "title": "Ich bin ein Mensch, der zu seinem Wort steht." },
        { "title": "Manchmal vernachlässige ich meine Pflichten." },
        { "title": "Ich arbeite hart, um meine Ziele zu erreichen." },
        { "title": "Ich gebe mich mit dem Minimum zufrieden." },
        { "title": "Ich strebe nach Exzellenz." },
        { "title": "Erfolg ist mir nicht besonders wichtig." },
        { "title": "Ich versuche ständig, mich zu verbessern." },
        { "title": "Ich bin nicht sehr ehrgeizig." },
        { "title": "Ich habe klare Ziele und arbeite daran, sie zu erreichen." },
        { "title": "Ich tue nur das Nötigste, um durchzukommen." },
        { "title": "Mich motiviert es, Großes zu erreichen." },
        { "title": "Ich strenge mich nicht mehr an als nötig." },
        { "title": "Ich bringe zu Ende, was ich anfange." },
        { "title": "Es fällt mir schwer, konzentriert zu bleiben." },
        { "title": "Ich halte durch, bis die Aufgabe erledigt ist." },
        { "title": "Ich schiebe Dinge häufig auf." },
        { "title": "Ich mache mich sofort an die Arbeit." },
        { "title": "Ich lasse mich leicht ablenken." },
        { "title": "Ich lasse Aufgaben nicht halb fertig liegen." },
        { "title": "Ich vergeude Zeit mit unwichtigen Dingen." },
        { "title": "Ich bleibe auf meine Ziele fokussiert." },
        { "title": "Es fällt mir schwer, schwierige Aufgaben anzufangen." },
        { "title": "Ich denke nach, bevor ich handle." },
        { "title": "Ich handle, ohne an die Konsequenzen zu denken." },
        { "title": "Ich erwäge alle Optionen, bevor ich mich entscheide." },
        { "title": "Ich treffe impulsive Entscheidungen." },
        { "title": "Ich bewerte Risiken sorgfältig." },
        { "title": "Ich stürze mich in Dinge, ohne zu planen." },
        { "title": "Ich plane, bevor ich handle." },
        { "title": "Ich mache Dinge, ohne viel darüber nachzudenken." },
        { "title": "Ich denke über mögliche Konsequenzen nach." },
        { "title": "Ich sage Dinge, ohne die Konsequenzen zu bedenken." }
      ]
    },
    "pid5": {
      "name": "PID-5",
      "abbr": "PID-5",
      "fullName": "Persönlichkeitsinventar für DSM-5",
      "desc": "Umfassende Bewertung pathologischer Persönlichkeitsmerkmale gemäß dem dimensionalen Modell des DSM-5. Misst 25 Facetten in 5 Domänen.",
      "instructions": "Lesen Sie jede Aussage und wählen Sie aus, wie gut sie Sie im Allgemeinen beschreibt, nicht nur wie Sie sich gerade fühlen.",
      "sharedOptions": ["Sehr falsch oder oft falsch","Manchmal oder etwas falsch","Manchmal oder etwas wahr","Sehr wahr oder oft wahr"],
      "questions": [
        { "title": "Meine Emotionen ändern sich ohne erkennbaren Grund." },
        { "title": "Meine Stimmung wechselt drastisch von einem Moment zum nächsten." },
        { "title": "Ich wechsle schnell von Freude zu Traurigkeit ohne klaren Grund." },
        { "title": "Nahestehende Personen sagen mir, ich sei zu emotional." },
        { "title": "Es fällt mir schwer, meine emotionalen Reaktionen zu kontrollieren." },
        { "title": "Ich rege mich leicht über Situationen auf, die andere problemlos bewältigen." },
        { "title": "Meine Gefühle sind unberechenbar, sogar für mich selbst." },
        { "title": "Ich mache mir über fast alles Sorgen." },
        { "title": "Ich erwarte ständig, dass etwas Schlimmes passiert." },
        { "title": "Ich werde sehr leicht nervös." },
        { "title": "Es fällt mir sehr schwer, aufzuhören, mir Sorgen zu machen." },
        { "title": "Ich spüre eine ständige Angst, die ich nicht erklären kann." },
        { "title": "Ich mache mir übermäßig Sorgen über Dinge, die wahrscheinlich nicht passieren werden." },
        { "title": "Ängstliche Gedanken dringen häufig in meinen Geist ein." },
        { "title": "Ich habe Angst, dass in fast jeder Situation etwas schiefgehen könnte." },
        { "title": "Ich fühle mich die meiste Zeit angespannt und nervös." },
        { "title": "Der Gedanke, allein zu sein, versetzt mich in Angst und Schrecken." },
        { "title": "Ich habe große Angst, dass die wichtigen Menschen in meinem Leben mich verlassen." },
        { "title": "Ich brauche ständig die Nähe der Menschen, die ich liebe." },
        { "title": "Ich fühle mich schutzlos, wenn ich nicht in der Nähe von jemandem bin, der mir wichtig ist." },
        { "title": "Es bereitet mir große Qual, von den Menschen getrennt zu sein, an die ich gebunden bin." },
        { "title": "Ich tue alles, um zu verhindern, dass sich Menschen von mir entfernen." },
        { "title": "Wenn ich von jemandem Wichtigem getrennt bin, fällt es mir schwer zu funktionieren." },
        { "title": "Ich ändere meine Meinungen, um mit denen anderer übereinzustimmen." },
        { "title": "Es fällt mir sehr schwer, Nein zu sagen, selbst wenn ich es möchte." },
        { "title": "Ich lasse andere für mich Entscheidungen treffen, um Konflikte zu vermeiden." },
        { "title": "Ich gebe lieber nach, als meinen Standpunkt zu verteidigen." },
        { "title": "Ich werde leicht gereizt wegen Kleinigkeiten." },
        { "title": "Ich fühle mich häufig wütend, ohne genau zu wissen, warum." },
        { "title": "Die Leute sagen mir, ich sei jähzornig." },
        { "title": "Ich verliere öfter die Geduld mit anderen, als ich sollte." },
        { "title": "Es stört mich, wenn die Leute die Dinge nicht auf meine Weise tun." },
        { "title": "Ich hege Groll gegen Menschen, die mir wehgetan haben." },
        { "title": "Ich neige dazu, bei der geringsten Provokation wütend zu reagieren." },
        { "title": "Ich werde wütend, wenn die Dinge nicht so laufen, wie ich es will." },
        { "title": "Ich empfinde eine ständige Gereiztheit, die schwer zu kontrollieren ist." },
        { "title": "Wenn mich jemand beleidigt, fällt es mir sehr schwer, darüber hinwegzukommen." },
        { "title": "Ich bleibe immer wieder in denselben Gedanken gefangen." },
        { "title": "Es fällt mir sehr schwer, aufzuhören, über meine Probleme nachzudenken." },
        { "title": "Ich spiele dieselben Situationen im Kopf durch, ohne damit aufhören zu können." },
        { "title": "Ich bin besessen von Fehlern, die ich in der Vergangenheit gemacht habe." },
        { "title": "Wenn mich etwas stört, kann ich tagelang nicht aufhören, daran zu denken." },
        { "title": "Meine Gedanken wiederholen sich wie eine kaputte Schallplatte." },
        { "title": "Es fällt mir schwer, ein Thema loszulassen, auch wenn ich weiß, dass ich es sollte." },
        { "title": "Ich denke weiter über dieselben Dinge nach, obwohl es keinen Zweck hat." },
        { "title": "Die Leute sagen mir, ich denke zu viel nach." },
        { "title": "Ich zeige anderen selten meine Emotionen." },
        { "title": "Die Leute sagen mir, ich wirke kalt oder emotional distanziert." },
        { "title": "Ich empfinde normalerweise keine starken Emotionen, weder positive noch negative." },
        { "title": "Es fällt mir schwer, auszudrücken, was ich fühle, selbst bei nahestehenden Personen." },
        { "title": "Situationen, die andere begeistern, lassen mich gleichgültig." },
        { "title": "Traurige Geschichten oder emotionale Filme berühren mich nicht." },
        { "title": "Ich zeige lieber nicht, was ich fühle, weil ich es als Schwäche betrachte." },
        { "title": "Ich bin lieber die meiste Zeit allein." },
        { "title": "Ich meide gesellschaftliche Zusammenkünfte, wann immer ich kann." },
        { "title": "Ich habe kein Interesse daran, neue Freunde zu finden." },
        { "title": "Ich fühle mich unwohl, wenn ich mit anderen Menschen interagieren muss." },
        { "title": "Ich mache Dinge lieber allein als in einer Gruppe." },
        { "title": "Ich isoliere mich absichtlich von anderen." },
        { "title": "Gespräche mit anderen Menschen sind für mich erschöpfend." },
        { "title": "Ich fühle mich besser, wenn ich mit niemandem zu tun haben muss." },
        { "title": "Ich meide Situationen, in denen ich Kontakte knüpfen muss." },
        { "title": "Es macht mir nichts aus, lange Zeiträume ohne sozialen Kontakt zu verbringen." },
        { "title": "Wenige Dinge im Leben bereiten mir echte Freude." },
        { "title": "Ich habe das Interesse an Aktivitäten verloren, die mir früher Freude bereitet haben." },
        { "title": "Es fällt mir schwer, etwas zu finden, das mich wirklich motiviert." },
        { "title": "Das Leben erscheint mir die meiste Zeit leer und sinnlos." },
        { "title": "Ich empfinde keine Freude, nicht einmal bei Anlässen, die glücklich sein sollten." },
        { "title": "Ich fühle mich fast die ganze Zeit emotional leer." },
        { "title": "Nichts begeistert mich wirklich." },
        { "title": "Ich habe das Gefühl, dass meine positiven Emotionen erloschen sind." },
        { "title": "Ich fühle mich als Person wertlos." },
        { "title": "Ich glaube, die Welt wäre ohne mich besser dran." },
        { "title": "Ich bin hoffnungslos in Bezug auf die Zukunft." },
        { "title": "Ich kritisiere mich ständig für alles, was ich tue." },
        { "title": "Ich empfinde eine tiefe Traurigkeit, die nicht vergeht." },
        { "title": "Ich halte mich für einen Versager in fast allem, was ich versuche." },
        { "title": "Ich glaube, dass es für mich nie besser werden wird." },
        { "title": "Ich fühle mich schuldig wegen Dingen, die nicht wirklich meine Schuld sind." },
        { "title": "Ich habe ein sehr negatives Selbstbild." },
        { "title": "Ich denke häufig, dass ich es nicht verdiene, glücklich zu sein." },
        { "title": "Ich fühle mich nutzlos und unfähig, etwas richtig zu machen." },
        { "title": "Ich weine häufig oder habe das Bedürfnis zu weinen." },
        { "title": "Ich fühle mich völlig allein, selbst wenn ich von Menschen umgeben bin." },
        { "title": "Ich habe das Gefühl, dass mein Leben keinen Sinn und keine Richtung hat." },
        { "title": "Ich meide romantische Beziehungen, weil sie mich verletzlich machen." },
        { "title": "Ich habe kein Interesse an einer intimen Beziehung mit irgendjemandem." },
        { "title": "Emotionale Nähe zu einer anderen Person macht mich sehr unwohl." },
        { "title": "Ich halte Menschen lieber auf emotionaler Distanz." },
        { "title": "Intime Beziehungen empfinde ich als erstickend." },
        { "title": "Ich brauche niemanden in meinem engen Umfeld." },
        { "title": "Ich misstraue den Absichten der meisten Menschen." },
        { "title": "Ich glaube, dass die meisten Menschen verborgene Motive haben." },
        { "title": "Ich vermute, dass die Leute hinter meinem Rücken schlecht über mich reden." },
        { "title": "Es fällt mir schwer zu glauben, dass jemand mir helfen will, ohne etwas dafür zu erwarten." },
        { "title": "Ich bin immer auf der Hut, weil ich glaube, dass jemand versuchen könnte, mich auszunutzen." },
        { "title": "Ich zweifle an der Aufrichtigkeit von Komplimenten oder Lob, das ich erhalte." },
        { "title": "Ich habe das Gefühl, dass ich niemandem vollständig vertrauen kann." },
        { "title": "Ich bin gut darin, Menschen zu manipulieren, um zu bekommen, was ich will." },
        { "title": "Ich setze Schmeichelei ein, damit die Leute tun, was ich will." },
        { "title": "Es macht mir nichts aus, andere zu benutzen, um meine Ziele zu erreichen." },
        { "title": "Ich weiß genau, was ich sagen muss, um die Entscheidungen anderer zu beeinflussen." },
        { "title": "Ich genieße es, Menschen auf subtile Weise zu kontrollieren." },
        { "title": "Ich lüge häufig, wenn es mir nützt." },
        { "title": "Es fällt mir nicht schwer, Menschen zu täuschen." },
        { "title": "Ich erfinde Geschichten, um meinen Willen durchzusetzen." },
        { "title": "Manchmal gebe ich vor, jemand zu sein, der ich nicht bin, um andere zu beeindrucken." },
        { "title": "Ich übertreibe meine Erfolge, um einen guten Eindruck zu machen." },
        { "title": "Ich verschweige wichtige Informationen, wenn es mir nützt." },
        { "title": "Ich kann überzeugend handeln, selbst wenn ich lüge." },
        { "title": "Unehrlich zu sein stört mich nicht, wenn es mir hilft." },
        { "title": "Ich habe andere betrogen oder getäuscht, um etwas zu bekommen, das ich wollte." },
        { "title": "Ich sage, was die Leute hören wollen, auch wenn es nicht wahr ist." },
        { "title": "Ich verdiene eine Sonderbehandlung, weil ich besser bin als die meisten." },
        { "title": "Ich glaube, dass ich eine außergewöhnliche Person bin und dass andere dies anerkennen sollten." },
        { "title": "Die Leute schätzen nicht, wie wertvoll ich wirklich bin." },
        { "title": "Ich kann nicht verstehen, warum andere nicht sehen, wie besonders ich bin." },
        { "title": "Ich fühle mich über die Regeln erhaben, die für andere gelten." },
        { "title": "Ich vergleiche mich mit anderen und halte mich fast immer für überlegen." },
        { "title": "Ich muss in gesellschaftlichen Situationen im Mittelpunkt stehen." },
        { "title": "Ich tue auffällige Dinge, damit die Leute mich bemerken." },
        { "title": "Es stört mich, wenn die Aufmerksamkeit nicht auf mich gerichtet ist." },
        { "title": "Ich suche ständig nach Anerkennung und Bewunderung von anderen." },
        { "title": "Ich gebe mir große Mühe, Menschen zu beeindrucken." },
        { "title": "Ich mache gern große Gesten, damit andere über mich reden." },
        { "title": "Ich übertreibe meine Emotionen, um eine Reaktion von anderen zu bekommen." },
        { "title": "Ich fühle mich leer, wenn ich keine Aufmerksamkeit von anderen bekomme." },
        { "title": "Es kümmert mich nicht, ob meine Handlungen andere verletzen." },
        { "title": "Die Leute sagen, ich sei unsensibel gegenüber dem Leid anderer." },
        { "title": "Ich empfinde keine Reue, wenn ich etwas tue, das jemanden verletzt." },
        { "title": "Die Tränen anderer rühren mich nicht." },
        { "title": "Ich kann nicht verstehen, warum sich die Leute so leicht beleidigt fühlen." },
        { "title": "Ich kümmere mich nicht um die Gefühle anderer, wenn sie mich nicht direkt betreffen." },
        { "title": "Ich kann grausam sein, wenn die Situation es erfordert." },
        { "title": "Ich bin nicht daran interessiert, jemanden zu trösten, der leidet." },
        { "title": "Ich finde, die Leute sind heutzutage zu empfindlich." },
        { "title": "Ich verliere nicht den Schlaf darüber, jemanden schlecht behandelt zu haben." },
        { "title": "Man hat mir gesagt, ich sei eine harte und unnachgiebige Person." },
        { "title": "Ich betrachte Empathie als eine Schwäche." },
        { "title": "Es berührt mich nicht, wenn andere die Konsequenzen ihrer Fehler tragen müssen." },
        { "title": "Ich stelle immer meine eigenen Bedürfnisse an erste Stelle, ungeachtet der Auswirkungen auf andere." },
        { "title": "Ich komme häufig meinen Verpflichtungen und Pflichten nicht nach." },
        { "title": "Ich bin nachlässig mit meinen finanziellen Verpflichtungen." },
        { "title": "Man kann sich nicht auf mich verlassen, dass ich tue, was ich sage." },
        { "title": "Ich lasse wichtige Aufgaben häufig unvollendet." },
        { "title": "Ich mache mir keine Sorgen um die Einhaltung von Fristen." },
        { "title": "Ich neige dazu, meine Verantwortlichkeiten anderen zu überlassen." },
        { "title": "Es fällt mir schwer, einen Job zu behalten oder einen langfristigen Plan zu verfolgen." },
        { "title": "Ich handle, ohne über die Konsequenzen nachzudenken." },
        { "title": "Ich tue impulsiv Dinge, die ich später bereue." },
        { "title": "Es fällt mir sehr schwer, meinen Impulsen zu widerstehen." },
        { "title": "Ich treffe übereilte Entscheidungen, ohne alle Optionen zu berücksichtigen." },
        { "title": "Ich sage Dinge, ohne nachzudenken, und wünschte danach, ich hätte sie nicht gesagt." },
        { "title": "Ich kann nicht auf Dinge warten; ich brauche sofortige Befriedigung." },
        { "title": "Ich lasse mich sehr leicht ablenken." },
        { "title": "Es fällt mir schwer, mich länger als ein paar Minuten auf eine Aufgabe zu konzentrieren." },
        { "title": "Ich verliere ständig den Faden meiner Gedanken." },
        { "title": "Ich fange viele Dinge an, kann sie aber nur schwer beenden, weil ich mich ablenken lasse." },
        { "title": "Jedes Geräusch oder jeder äußere Reiz lenkt meine Aufmerksamkeit ab." },
        { "title": "Es fällt mir schwer, einem langen Gespräch zu folgen, ohne die Konzentration zu verlieren." },
        { "title": "Meine Gedanken schweifen ab, wenn ich mich auf etwas konzentrieren sollte." },
        { "title": "Ich vergesse häufig, was ich gerade getan habe." },
        { "title": "Ich brauche wiederholte Anweisungen, weil ich sie nicht behalten kann." },
        { "title": "Ich mache gerne gefährliche Dinge." },
        { "title": "Ich suche nach starken Nervenkitzeln, auch wenn sie Risiken bergen." },
        { "title": "Es macht mir nichts aus, mich in riskante Situationen zu begeben." },
        { "title": "Ich langweile mich schnell, wenn kein Adrenalin im Spiel ist." },
        { "title": "Ich habe leichtsinnige Dinge getan, die mir hätten schaden können." },
        { "title": "Gefährliche Aktivitäten sind für mich aufregend." },
        { "title": "Ich fahre schneller als erlaubt, weil mir die Geschwindigkeit gefällt." },
        { "title": "Ich habe Substanzen konsumiert, ohne mir Gedanken über die Folgen zu machen." },
        { "title": "Ich ignoriere Warnsignale und mache weiter mit dem, was ich tue." },
        { "title": "Ich nehme Herausforderungen an, die die meisten als zu riskant betrachten würden." },
        { "title": "Ich brauche intensive Erlebnisse, um mich lebendig zu fühlen." },
        { "title": "Routine langweilt mich, und ich suche nach neuen, unvorhersehbaren Dingen." },
        { "title": "Ich bedenke die Gefahren nicht, bevor ich handle." },
        { "title": "Der Gedanke, etwas Verbotenes zu tun, reizt mich." },
        { "title": "Alles muss perfekt sein, sonst bin ich nicht zufrieden." },
        { "title": "Ich kann es nicht akzeptieren, wenn eine Arbeit nicht makellos ist." },
        { "title": "Ich verbringe zu viel Zeit mit unbedeutenden Details, um sicherzustellen, dass sie stimmen." },
        { "title": "Meine Standards sind so hoch, dass ich sie oft nicht erreiche." },
        { "title": "Ich bestehe darauf, dass Dinge genau so gemacht werden, wie ich es will." },
        { "title": "Es fällt mir schwer, Aufgaben zu delegieren, weil niemand sie so gut macht wie ich." },
        { "title": "Mein Perfektionismus beeinträchtigt meine Fähigkeit, Dinge rechtzeitig fertigzustellen." },
        { "title": "Ich fühle mich sehr schlecht, wenn ich den kleinsten Fehler mache." },
        { "title": "Ich habe sehr strenge Regeln darüber, wie Dinge getan werden sollten." },
        { "title": "Ich dulde keine Mittelmäßigkeit, weder bei mir noch bei anderen." },
        { "title": "Ich glaube, einen sechsten Sinn zu haben, der mir erlaubt, Dinge zu wissen, die andere nicht wissen." },
        { "title": "Ich habe Erlebnisse gehabt, die ich als übernatürlich oder paranormal betrachte." },
        { "title": "Ich glaube, dass ich Ereignisse allein durch meine Gedanken beeinflussen kann." },
        { "title": "Ich habe das Gefühl, dass verborgene Kräfte kontrollieren, was in der Welt geschieht." },
        { "title": "Ich glaube, dass Zufälle Botschaften des Universums an mich sind." },
        { "title": "Ich hatte das Gefühl, besondere Kräfte oder Fähigkeiten zu besitzen, die andere nicht haben." },
        { "title": "Ich glaube, dass meine Gedanken die Realität direkt beeinflussen können." },
        { "title": "Ich spüre eine besondere Verbindung zum Übernatürlichen oder Mystischen." },
        { "title": "Die Leute halten mich für eine seltsame oder exzentrische Person." },
        { "title": "Meine Denkweise unterscheidet sich sehr von der der meisten Menschen." },
        { "title": "Ich habe Ideen, die andere als seltsam oder ungewöhnlich betrachten." },
        { "title": "Mein Verhalten bringt die Leute in Verlegenheit." },
        { "title": "Ich sage Dinge, die andere als merkwürdig oder unsinnig empfinden." },
        { "title": "Ich habe Interessen oder Hobbys, die die meisten Menschen sehr eigenartig finden." },
        { "title": "Ich drücke mich auf eine Weise aus, die andere nicht verstehen." },
        { "title": "Man hat mir gesagt, dass meine Sicht der Welt sehr ungewöhnlich ist." },
        { "title": "Die Leute schauen mich wegen meines Verhaltens seltsam an." },
        { "title": "Meine Reaktionen auf Situationen unterscheiden sich von denen anderer Menschen." },
        { "title": "Ich habe einen persönlichen Stil, den andere als sehr außerhalb der Norm betrachten." },
        { "title": "Ich denke oft über Dinge nach, die sich die meisten Menschen nicht einmal vorstellen würden." },
        { "title": "Ich fühle mich grundlegend anders als alle anderen Menschen." },
        { "title": "Manchmal habe ich das Gefühl, dass die Dinge um mich herum nicht real sind." },
        { "title": "Ich hatte das Gefühl, außerhalb meines Körpers zu sein." },
        { "title": "Manchmal sehe ich Dinge, die andere nicht sehen können." },
        { "title": "Ich habe Stimmen oder Geräusche gehört, die andere nicht gehört haben." },
        { "title": "Manchmal habe ich das Gefühl, dass sich mein Körper in Form oder Größe verändert." },
        { "title": "Ich habe Erlebnisse gehabt, bei denen ich mich von mir selbst getrennt fühlte." },
        { "title": "Manchmal erscheint mir meine Umgebung verzerrt oder unwirklich." },
        { "title": "Ich hatte das Gefühl, dass meine Gedanken nicht mir gehören." },
        { "title": "Manchmal verliere ich das Gefühl dafür, wo ich ende und die Außenwelt beginnt." },
        { "title": "Ich habe seltsame Empfindungen in meinem Körper gehabt, die ich nicht erklären kann." },
        { "title": "Manchmal habe ich das Gefühl, dass die Realität um mich herum zerfällt." },
        { "title": "Ich habe Momente erlebt, in denen ich mein eigenes Spiegelbild nicht erkannt habe." }
      ]
    },
    "ipip_mmpi": {
      "name": "IPIP-Klinisch",
      "abbr": "IPIP-Klinisch",
      "fullName": "IPIP Klinische Skalen (äquivalent zu MMPI-Skalen)",
      "desc": "Umfassende klinische Persönlichkeitsbewertung mit gemeinfreien Items. Misst 10 klinische Skalen und 3 Validitätsskalen, die den MMPI-Skalen entsprechen.",
      "instructions": "Antworten Sie auf jede Aussage mit wahr oder falsch, je nachdem, ob sie im Allgemeinen auf Sie zutrifft. Seien Sie ehrlich; es gibt keine richtigen oder falschen Antworten.",
      "sharedOptions": ["Falsch","Wahr"],
      "questions": [
        { "title": "Ich habe noch nie gelogen." },
        { "title": "Ich mache mir große Sorgen um meine Gesundheit." },
        { "title": "Ich fühle mich die meiste Zeit traurig." },
        { "title": "Ich glaube, dass die Leute hinter meinem Rücken über mich reden." },
        { "title": "Ich habe mehr Energie als die meisten Menschen." },
        { "title": "Ich höre Stimmen, die andere nicht hören können." },
        { "title": "Ich halte mich für eine sehr ausgeglichene Person." },
        { "title": "Manchmal habe ich Kopfschmerzen ohne erkennbaren Grund." },
        { "title": "Regeln erscheinen mir langweilig und unnötig." },
        { "title": "Ich interessiere mich sehr für künstlerische und kulturelle Aktivitäten." },
        { "title": "Ich überprüfe Dinge mehrmals, um sicherzugehen, dass sie richtig sind." },
        { "title": "Manchmal habe ich sehr seltsame Gedanken." },
        { "title": "Ich bin lieber allein als in Gesellschaft anderer." },
        { "title": "Ich bin immer freundlich zu allen Menschen, die ich kenne." },
        { "title": "Ich habe das Gefühl, dass mein Magen mich häufig belästigt." },
        { "title": "Die Zukunft erscheint mir dunkel und hoffnungslos." },
        { "title": "Ich habe das Gefühl, verfolgt oder überwacht zu werden." },
        { "title": "Ich neige dazu, meine Probleme zu ignorieren, bis sie verschwinden." },
        { "title": "Ich misstraue den Absichten der meisten Menschen." },
        { "title": "Ich beginne viele Projekte gleichzeitig, ohne sie zu beenden." },
        { "title": "Ich bin mit meinem Leben zufrieden, so wie es ist." },
        { "title": "Ich hatte Probleme mit Personen in Autoritätspositionen." },
        { "title": "Ich halte mich für eine emotional sehr sensible Person." },
        { "title": "Es fällt mir sehr schwer, wichtige Entscheidungen zu treffen." },
        { "title": "Manchmal fühle ich mich von der Realität abgekoppelt." },
        { "title": "Es fällt mir schwer, Gespräche mit Fremden zu beginnen." },
        { "title": "Ich war noch nie auf jemanden wütend." },
        { "title": "Ich habe häufig Schmerzen in verschiedenen Körperteilen." },
        { "title": "Ich habe das Interesse an Dingen verloren, die mir früher Freude bereitet haben." },
        { "title": "Ich glaube, dass ich besondere Kräfte habe, die andere nicht haben." },
        { "title": "Meine familiären Beziehungen sind sehr gut." },
        { "title": "Manchmal habe ich Kribbeln oder Taubheitsgefühle ohne medizinischen Grund." },
        { "title": "Ich habe das Gefühl, dass die mir nahestehenden Personen sich gegen mich verschwören." },
        { "title": "Ich fühle mich getrieben, ständig in Bewegung zu sein." },
        { "title": "Ich breche gerne Regeln, wenn ich kann." },
        { "title": "Ich lese gerne Poesie und Literatur." },
        { "title": "Ich mache mir übermäßig Sorgen über Kleinigkeiten." },
        { "title": "Manchmal habe ich das Gefühl, dass mein Körper seine Form oder Größe verändert." },
        { "title": "Ich fühle mich bei großen gesellschaftlichen Zusammenkünften unwohl." },
        { "title": "Ich habe nie etwas genommen, das mir nicht gehörte." },
        { "title": "Ich mache mir Sorgen, eine schwere, nicht diagnostizierte Krankheit zu haben." },
        { "title": "Ich weine leichter als früher." },
        { "title": "Manchmal habe ich das Gefühl, dass jemand meine Gedanken kontrolliert." },
        { "title": "Ich komme im Allgemeinen gut mit schwierigen Situationen zurecht." },
        { "title": "Wenn ich einen Konflikt habe, denke ich lieber nicht darüber nach." },
        { "title": "Ich habe das Gefühl, dass die Leute mich mit bösen Absichten beobachten." },
        { "title": "Meine Ideen wechseln sehr schnell von einem Thema zum anderen." },
        { "title": "Ich handle oft, ohne über die Konsequenzen nachzudenken." },
        { "title": "Ich werde leicht von traurigen Geschichten berührt." },
        { "title": "Ich brauche es, dass alles perfekt geordnet ist." },
        { "title": "Manchmal höre ich meine eigenen Gedanken, als würden sie laut ausgesprochen." },
        { "title": "Ich vermeide Situationen, in denen ich öffentlich sprechen muss." },
        { "title": "Ich sage immer die Wahrheit, ohne Ausnahme." },
        { "title": "Ich habe das Gefühl, dass mein Herz häufig unregelmäßig schlägt." },
        { "title": "Ich fühle mich den größten Teil des Tages müde und energielos." },
        { "title": "Ich habe übernatürliche Erfahrungen gemacht, die ich nicht erklären kann." },
        { "title": "Ich halte mich für eine recht kompetente Person." },
        { "title": "Manchmal ist mir schwindelig oder schwach ohne erkennbaren Grund." },
        { "title": "Ich bin sicher, dass es Menschen gibt, die mir schaden wollen." },
        { "title": "Es fällt mir schwer, lange Zeit still zu sitzen." },
        { "title": "Es kümmert mich nicht besonders, soziale Normen zu befolgen." },
        { "title": "Ich mag Blumen und die Natur mehr als die meisten Menschen." },
        { "title": "Ich habe sich wiederholende Gedanken, die ich nicht stoppen kann." },
        { "title": "Manchmal habe ich das Gefühl, dass die Dinge um mich herum nicht real sind." },
        { "title": "Es fällt mir schwer, neue Freunde zu finden." },
        { "title": "Ich bin noch nie zu einer Verabredung oder einem Termin zu spät gekommen." },
        { "title": "Ich gehe häufiger zum Arzt als die meisten Menschen." },
        { "title": "Ich fühle mich wertlos oder wie eine Last für andere." },
        { "title": "Ich sehe Dinge, die andere nicht sehen können." },
        { "title": "Ich habe das Gefühl, dass meine Familie mich in allem unterstützt." },
        { "title": "Manchmal verliere ich das Gefühl in Teilen meines Körpers." },
        { "title": "Ich glaube, dass jemand versucht, mich zu vergiften oder mir zu schaden." },
        { "title": "Ich schlafe viel weniger als andere Menschen und fühle mich gut dabei." },
        { "title": "Ich hatte rechtliche Probleme wegen meines Verhaltens." },
        { "title": "Ich interessiere mich für Mode und Inneneinrichtung." },
        { "title": "Ich empfinde eine ständige Angst, die ich nicht erklären kann." },
        { "title": "Manchmal habe ich das Gefühl, nicht ich selbst zu sein." },
        { "title": "Ich bevorzuge einsame Aktivitäten wie Lesen oder allein Spazierengehen." },
        { "title": "Ich habe nie Neid auf jemanden empfunden." },
        { "title": "Ich habe häufig Übelkeit oder Magenbeschwerden." },
        { "title": "Manchmal denke ich, es wäre besser, nicht am Leben zu sein." },
        { "title": "Ich habe das Gefühl, die Zukunft vorhersagen zu können." },
        { "title": "Ich halte mich für eine emotional stabile Person." },
        { "title": "Ich hatte Ohnmachtsanfälle oder Episoden von Bewusstseinsverlust." },
        { "title": "Ich glaube, dass meine Arbeitskollegen schlecht über mich reden." },
        { "title": "Ich mache riskante Dinge nur wegen des Nervenkitzels." },
        { "title": "Ehrlichkeit ist nicht immer die beste Politik." },
        { "title": "Ich koche gerne und bereite aufwendige Gerichte zu." },
        { "title": "Ich habe das Gefühl, dass etwas Schlimmes passieren wird, aber ich weiß nicht was." },
        { "title": "Meine Gedanken vermischen sich manchmal auf verwirrende Weise." },
        { "title": "Ich werde nervös, wenn ich von vielen Menschen umgeben bin." },
        { "title": "Ich habe nie schlecht über eine andere Person geredet." },
        { "title": "Ich mache mir Sorgen, dass mein Körper nicht richtig funktioniert." },
        { "title": "Es fällt mir schwer, mich auf das zu konzentrieren, was ich tue." },
        { "title": "Ich habe die Anwesenheit von Wesen gespürt, die nicht da sind." },
        { "title": "Ich habe keine größeren Probleme in meinem Leben." },
        { "title": "Manchmal habe ich starke Rückenschmerzen ohne erkennbaren Grund." },
        { "title": "Ich glaube, dass es Menschen gibt, die mich ausspionieren." },
        { "title": "Ich habe großartige Pläne für meine Zukunft, die andere nicht verstehen." },
        { "title": "Routinen und Eintönigkeit langweilen mich schnell." },
        { "title": "Ich halte mich für eine Person mit großer künstlerischer Sensibilität." },
        { "title": "Ich wasche mir die Hände oder überprüfe Schlösser häufiger als nötig." },
        { "title": "Ich habe das Gefühl, dass mein Geist anders funktioniert als der anderer Menschen." },
        { "title": "Ich vermeide Partys und gesellschaftliche Veranstaltungen, wenn ich kann." },
        { "title": "Ich halte immer absolut alle meine Versprechen." },
        { "title": "Ich achte sehr auf jede Veränderung in meinem Körper." },
        { "title": "Ich fühle mich schuldig wegen Dingen, die ich in der Vergangenheit getan habe." },
        { "title": "Ich habe das Gefühl, mit den Toten kommunizieren zu können." },
        { "title": "Ich glaube, dass die meisten Menschen gut und vertrauenswürdig sind." },
        { "title": "Wenn ich gestresst bin, bekomme ich starke Kopfschmerzen." },
        { "title": "Ich habe das Gefühl, dass die Leute über mich lachen, wenn ich nicht da bin." },
        { "title": "Ich fühle mich in der Lage, alles zu erreichen, was ich mir vornehme." },
        { "title": "Ich habe oft gelogen, um aus Schwierigkeiten herauszukommen." },
        { "title": "Ich sehe gerne Sendungen über Kunst, Geschichte oder Kultur." },
        { "title": "Ich habe Angst, die Kontrolle über meine Handlungen zu verlieren." },
        { "title": "Manchmal habe ich das Gefühl, dass jemand anderes meine Bewegungen kontrolliert." },
        { "title": "Ich arbeite lieber allein als im Team." },
        { "title": "Ich habe nie den Wunsch verspürt, etwas aus Frustration zu zerbrechen." },
        { "title": "Ich glaube, dass ich häufiger krank werde als die meisten Menschen." },
        { "title": "Essen macht mir nicht mehr so viel Freude wie früher." },
        { "title": "Ich hatte intensive mystische Visionen oder Erfahrungen." },
        { "title": "Meine Freunde würden sagen, dass ich eine anpassungsfähige Person bin." },
        { "title": "Manchmal habe ich ein Kloßgefühl im Hals ohne medizinischen Grund." },
        { "title": "Ich glaube, dass meine Nachbarn mir übel gesinnt sind." },
        { "title": "Ich spreche sehr schnell und die Leute verstehen mich manchmal nicht." },
        { "title": "Es fällt mir schwer, einen Arbeitsplatz lange zu behalten." },
        { "title": "Ich werde leicht emotional, wenn ich Musik höre." },
        { "title": "Ich muss mehrmals überprüfen, ob ich die Tür abgeschlossen habe." },
        { "title": "Ich habe das Gefühl, dass etwas grundlegend anders an mir ist." },
        { "title": "Ich fühle mich zu Hause wohler als beim Ausgehen." },
        { "title": "Ich habe noch nie eine Regel oder Vorschrift missachtet." },
        { "title": "Ich habe häufig Muskelschmerzen ohne bekannte Ursache." },
        { "title": "Mein Schlaf ist unregelmäßig; ich schlafe zu viel oder zu wenig." },
        { "title": "Manchmal habe ich das Gefühl, dass meine Seele meinen Körper verlässt." },
        { "title": "Ich kann die meisten meiner Probleme ohne Hilfe lösen." },
        { "title": "Ich habe Sehprobleme, die Ärzte nicht erklären können." },
        { "title": "Ich habe das Gefühl, dass es eine organisierte Verschwörung gegen mich gibt." },
        { "title": "Ich fühle mich voller Energie und Vitalität." },
        { "title": "Ich fühle mich nicht schuldig, wenn ich etwas Falsches tue." },
        { "title": "Ich kümmere mich gerne um andere und sorge für ihre Bedürfnisse." },
        { "title": "Ich empfinde eine intensive Angst, ohne genau zu wissen, wovor." },
        { "title": "Manchmal erkenne ich mein eigenes Spiegelbild nicht." },
        { "title": "Ich finde es anstrengend, lange Zeit zu sozialisieren." },
        { "title": "Ich hatte noch nie einen unangemessenen Gedanken." },
        { "title": "Ich habe häufig das Gefühl, dass mir die Luft fehlt." },
        { "title": "Es fällt mir schwer, die Motivation zu finden, Dinge zu tun." },
        { "title": "Ich hatte das Gefühl, von einer äußeren Kraft besessen zu sein." },
        { "title": "Ich fühle mich die meiste Zeit wohl mit mir selbst." },
        { "title": "Wenn ich unter Druck stehe, habe ich Zittern oder Tics." },
        { "title": "Ich glaube, dass bestimmte Personen mir folgen oder mich verfolgen." },
        { "title": "Ich werde leicht ungeduldig, wenn die Dinge langsam gehen." },
        { "title": "Ich habe fremdes Eigentum zerstört, als ich wütend war." },
        { "title": "Ich mag tiefgehende Gespräche über Emotionen und Gefühle." },
        { "title": "Es fällt mir schwer, mich zu entspannen; ich bin immer angespannt." },
        { "title": "Ich habe Schwierigkeiten, zwischen Träumen und Realität zu unterscheiden." },
        { "title": "Es fällt mir schwer, Menschen in die Augen zu schauen." },
        { "title": "Ich habe mich noch nie faul gefühlt oder eine Verantwortung vermieden." },
        { "title": "Ich habe das Gefühl, dass meine inneren Organe nicht richtig funktionieren." },
        { "title": "Das Leben hat in letzter Zeit nicht viel Sinn für mich." },
        { "title": "Ich habe besondere Botschaften über Fernsehen oder Radio erhalten." },
        { "title": "Ich glaube, dass ich ein gutes Urteilsvermögen für Entscheidungen habe." },
        { "title": "Manchmal kann ich vorübergehend einen Teil meines Körpers nicht bewegen." },
        { "title": "Ich habe das Gefühl, dass meine Feinde meinen Ruf ruinieren wollen." },
        { "title": "Ich gebe oft impulsiv Geld aus." },
        { "title": "Es macht mir nichts aus, die Gefühle anderer zu verletzen, wenn es nötig ist." },
        { "title": "Ich erforsche gerne meine eigenen Emotionen und die anderer." },
        { "title": "Ich habe Rituale oder Gewohnheiten, die ich genau befolgen muss." },
        { "title": "Manchmal habe ich das Gefühl, keine eigene Identität zu haben." },
        { "title": "Ich genieße ruhige Aktivitäten mehr als soziale." },
        { "title": "Ich habe mich noch nie vorgedrängt oder eine unzulässige Abkürzung genommen." },
        { "title": "Ich mache mir ständig Sorgen, ob ich ein gesundheitliches Problem habe." },
        { "title": "Ich habe das Gefühl, die Menschen enttäuscht zu haben, die mir wichtig sind." },
        { "title": "Ich hatte das Gefühl, dass meine Gedanken von anderen gelesen werden." },
        { "title": "Ich passe mich gut an Veränderungen in meinem Leben an." },
        { "title": "Manchmal habe ich Episoden von starken Schmerzen ohne ärztliche Diagnose." },
        { "title": "Ich habe das Gefühl, dass ich niemandem vollständig vertrauen kann." },
        { "title": "Ich muss ständig beschäftigt sein und etwas tun." },
        { "title": "Ich habe andere Menschen benutzt, um das zu bekommen, was ich wollte." },
        { "title": "Ich habe das Gefühl, dass meine Zweifel und Ängste mich manchmal lähmen." },
        { "title": "Manchmal fühle ich mich völlig isoliert von der Welt um mich herum." }
      ]
    }
  }
};
