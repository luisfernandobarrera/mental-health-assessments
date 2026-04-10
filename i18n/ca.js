const LANG_CA = {
  "ui": {
    "appTitle": "Avaluacions de Salut Mental",
    "appSubtitle": "Eines d'autoavaluació psicològica",
    "tabTests": "Tests",
    "tabHistory": "Historial",
    "welcome": "Benvingut/da. Selecciona una avaluació per començar.",
    "startTest": "Començar test",
    "nextQuestion": "Següent",
    "prevQuestion": "Anterior",
    "viewResults": "Veure resultats",
    "question": "Pregunta",
    "of": "de",
    "items": "ítems",
    "backToTests": "Tornar als tests",
    "repeatTest": "Repetir test",
    "viewHistory": "Veure historial",
    "otherTests": "Altres tests",
    "detailByItem": "Detall per ítem",
    "helpResources": "Recursos d'ajuda",
    "helpText": "Si estàs passant per una crisi emocional, busca ajuda professional. Línia Nacional de Prevenció del Suïcidi: 988 (EUA) o contacta amb un professional de la salut mental.",
    "disclaimerTitle": "Nota important:",
    "disclaimerText": "Aquest test és una eina d'autoavaluació i no substitueix el diagnòstic d'un professional de la salut mental. Si creus que necessites ajuda, consulta amb un especialista.",
    "privacyTitle": "La teva privadesa:",
    "privacyText": "Els teus resultats s'emmagatzemen només al teu navegador (localStorage). No s'envien dades a cap servidor ni surten del teu ordinador.",
    "cat_triage": "Per on començar?",
    "cat_clinical": "Avaluacions Clíniques",
    "cat_screening": "Cribratge i Detecció",
    "cat_wellbeing": "Benestar i Autoestima",
    "cat_personality": "Personalitat",
    "cat_crisis": "Crisi i Risc",
    "cat_advanced": "Avaluació Avançada",
    "noRecords": "No hi ha registres guardats.",
    "completeFirst": "Completa almenys un test per veure l'historial.",
    "goToTests": "Anar als tests",
    "trend": "Tendència",
    "all": "Tots",
    "clearHistory": "Esborrar historial",
    "clearConfirm": "Estàs segur/segura que vols esborrar tot l'historial? Aquesta acció no es pot desfer.",
    "score": "Puntuació",
    "outOf": "de",
    "disclaimer": "Aquesta eina és només amb finalitats informatives i no substitueix una avaluació professional. Consulta un especialista en salut mental per a un diagnòstic adequat.",
    "resumePrompt": "Tens un test en curs",
    "continueTest": "Continuar test",
    "resumeMessage": "Tens un test de {test} en curs ({n}/{total} preguntes)",
    "dismiss": "Tancar",
    "questionsAnswered": "preguntes respostes",
    "inProgress": "En curs",
    "testBy": "Tests",
    "recommendedTests": "Avaluacions recomanades",
    "highPriority": "Alta prioritat",
    "recommended": "Recomanat",
    "suggested": "Suggerit",
    "areasEvaluated": "Àrees avaluades",
    "kbSelect": "seleccionar",
    "kbBrowse": "navegar",
    "kbConfirm": "confirmar",
    "kbPrevNext": "anterior/següent",
    "prevQuestion": "Anterior",
    "suggestedRetake": "Suggerit repetir",
    "triageRecommended": "Recomanat per la teva avaluació inicial",
    "retakeReason": "Última vegada"
  },
  "scales": {
    "agreement5": ["Totalment en desacord","En desacord","Ni d'acord ni en desacord","D'acord","Totalment d'acord"],
    "frequency4": ["Gens","Uns quants dies","Més de la meitat dels dies","Gairebé cada dia"],
    "frequency5": ["Mai","Gairebé mai","De vegades","Bastant sovint","Molt sovint"],
    "severity4": ["Gens","Lleugerament","Moderadament","Severament"],
    "severity5": ["Gens","Una mica","Moderadament","Bastant","Extremadament"],
    "yesNo": ["No","Sí"]
  },
  "tests": {
    "bdi": {
      "name": "BDI-II",
      "abbr": "BDI-II",
      "fullName": "Inventari de Depressió de Beck-II",
      "desc": "Avalua la presència i severitat de símptomes depressius durant les dues últimes setmanes.",
      "instructions": "Llegeix cada grup d'afirmacions amb atenció i selecciona la que millor descrigui com t'has sentit durant les dues últimes setmanes, inclòs avui.",
      "questions": [
        {
          "title": "Tristesa",
          "options": [
            "No em sento trist.",
            "Em sento trist gran part del temps.",
            "Estic trist tot el temps.",
            "Estic tan trist o infeliç que no ho puc suportar."
          ]
        },
        {
          "title": "Pessimisme",
          "options": [
            "No estic desanimat pel meu futur.",
            "Em sento més desanimat pel meu futur que abans.",
            "No espero que les coses em surtin bé.",
            "Sento que el meu futur és desesperançat i només empitjorarà."
          ]
        },
        {
          "title": "Fracàs passat",
          "options": [
            "No em sento un fracassat.",
            "He fracassat més del que hauria.",
            "Quan miro enrere, veig molts fracassos.",
            "Em sento un fracàs total com a persona."
          ]
        },
        {
          "title": "Pèrdua de plaer",
          "options": [
            "Gaudeixo de les coses tant com sempre.",
            "No gaudeixo de les coses tant com abans.",
            "Gaudeixo molt poc de les coses que solia gaudir.",
            "No puc obtenir cap plaer de les coses que solia gaudir."
          ]
        },
        {
          "title": "Sentiments de culpa",
          "options": [
            "No em sento especialment culpable.",
            "Em sento culpable per moltes coses que he fet o hauria de fer.",
            "Em sento bastant culpable la major part del temps.",
            "Em sento culpable tot el temps."
          ]
        },
        {
          "title": "Sentiments de càstig",
          "options": [
            "No sento que m'estiguin castigant.",
            "Sento que podria ser castigat.",
            "M'espero ser castigat.",
            "Sento que m'estan castigant."
          ]
        },
        {
          "title": "Autodesaprovació",
          "options": [
            "Em sento igual sobre mi mateix que sempre.",
            "He perdut confiança en mi mateix.",
            "Estic decebut amb mi mateix.",
            "No m'agrada a mi mateix."
          ]
        },
        {
          "title": "Autocrítica",
          "options": [
            "No em critico o culpo més del normal.",
            "Sóc més crític amb mi mateix que abans.",
            "Em critico per tots els meus defectes.",
            "Em culpo de tot el dolent que passa."
          ]
        },
        {
          "title": "Pensaments o desitjos suïcides",
          "options": [
            "No tinc cap pensament de matar-me.",
            "Tinc pensaments de matar-me, però no els portaria a terme.",
            "M'agradaria matar-me.",
            "Em mataria si tingués l'oportunitat."
          ]
        },
        {
          "title": "Plor",
          "options": [
            "No ploro més del que solia.",
            "Ploro més del que solia.",
            "Ploro per qualsevol cosa petita.",
            "Tinc ganes de plorar, però no puc."
          ]
        },
        {
          "title": "Agitació",
          "options": [
            "No estic més inquiet o nerviós del normal.",
            "Em sento més inquiet o nerviós del normal.",
            "Estic tan inquiet o agitat que és difícil estar quiet.",
            "Estic tan inquiet o agitat que he de seguir movent-me o fent alguna cosa."
          ]
        },
        {
          "title": "Pèrdua d'interès",
          "options": [
            "No he perdut interès per altres persones o activitats.",
            "Estic menys interessat en altres persones o coses que abans.",
            "He perdut la major part del meu interès per altres persones o coses.",
            "És difícil interessar-me per qualsevol cosa."
          ]
        },
        {
          "title": "Indecisió",
          "options": [
            "Prenc decisions tan bé com sempre.",
            "Trobo més difícil prendre decisions del normal.",
            "Tinc molta més dificultat per prendre decisions que abans.",
            "Tinc problemes per prendre qualsevol decisió."
          ]
        },
        {
          "title": "Inutilitat",
          "options": [
            "No sento que sigui inútil.",
            "No em considero tan valuós i útil com abans.",
            "Em sento més inútil en comparació amb altres.",
            "Em sento completament inútil."
          ]
        },
        {
          "title": "Pèrdua d'energia",
          "options": [
            "Tinc tanta energia com sempre.",
            "Tinc menys energia que abans.",
            "No tinc prou energia per fer gaire.",
            "No tinc prou energia per fer res."
          ]
        },
        {
          "title": "Canvis en el patró de son",
          "options": [
            "No he experimentat cap canvi en el meu son.",
            "Dormo una mica més o una mica menys del normal.",
            "Dormo molt més o molt menys del normal.",
            "Dormo la major part del dia o em desperto 1-2 hores abans i no puc tornar a dormir."
          ]
        },
        {
          "title": "Irritabilitat",
          "options": [
            "No estic més irritable del normal.",
            "Estic més irritable del normal.",
            "Estic molt més irritable del normal.",
            "Estic irritable tot el temps."
          ]
        },
        {
          "title": "Canvis en la gana",
          "options": [
            "No he experimentat cap canvi en la meva gana.",
            "La meva gana és una mica menor o una mica major del normal.",
            "La meva gana és molt menor o molt major del normal.",
            "No tinc gens de gana o tinc gana tot el temps."
          ]
        },
        {
          "title": "Dificultat de concentració",
          "options": [
            "Puc concentrar-me tan bé com sempre.",
            "No em puc concentrar tan bé com normalment.",
            "És difícil mantenir la ment en alguna cosa durant molt de temps.",
            "Trobo que no em puc concentrar en res."
          ]
        },
        {
          "title": "Cansament o fatiga",
          "options": [
            "No estic més cansat o fatigat del normal.",
            "Em canso o fatigo més fàcilment del normal.",
            "Estic massa cansat o fatigat per fer moltes de les coses que solia fer.",
            "Estic massa cansat o fatigat per fer la major part de les coses que solia fer."
          ]
        },
        {
          "title": "Pèrdua d'interès en el sexe",
          "options": [
            "No he notat cap canvi recent en el meu interès pel sexe.",
            "Estic menys interessat en el sexe que abans.",
            "Estic molt menys interessat en el sexe ara.",
            "He perdut completament l'interès pel sexe."
          ]
        }
      ],
      "results": {
        "minimal": { "label": "Mínim", "desc": "La teva puntuació suggereix un nivell mínim de depressió. És normal experimentar alt i baixos emocionals." },
        "mild": { "label": "Lleu", "desc": "La teva puntuació suggereix símptomes depressius lleus. Considera parlar amb un professional si persisteixen." },
        "moderate": { "label": "Moderat", "desc": "La teva puntuació suggereix símptomes depressius moderats. Es recomana consultar amb un professional de la salut mental." },
        "severe": { "label": "Sever", "desc": "La teva puntuació suggereix símptomes depressius severs. És important buscar ajuda professional tan aviat com sigui possible." }
      }
    },
    "bai": {
      "name": "BAI",
      "abbr": "BAI",
      "fullName": "Inventari d'Ansietat de Beck",
      "desc": "Avalua la severitat dels símptomes d'ansietat durant la setmana passada.",
      "instructions": "Indica quant t'ha molestat cada símptoma durant la setmana passada, inclòs avui.",
      "questions": [
        { "title": "Entumiment o formigueig" },
        { "title": "Sensació de calor" },
        { "title": "Tremolor a les cames" },
        { "title": "Incapacitat per relaxar-se" },
        { "title": "Por que passi el pitjor" },
        { "title": "Mareig o sensació de desmai" },
        { "title": "Cor que batega o s'accelera" },
        { "title": "Inestabilitat" },
        { "title": "Aterroritzat o espantat" },
        { "title": "Nerviós" },
        { "title": "Sensació d'ofec" },
        { "title": "Mans tremoloses" },
        { "title": "Tremolós o inestable" },
        { "title": "Por de perdre el control" },
        { "title": "Dificultat per respirar" },
        { "title": "Por de morir" },
        { "title": "Espantat" },
        { "title": "Indigestió" },
        { "title": "Desmai o mareig" },
        { "title": "Cara enrojolada" },
        { "title": "Suors fredes/calentes" }
      ],
      "results": {
        "minimal": { "label": "Mínim", "desc": "La teva puntuació suggereix un nivell mínim d'ansietat." },
        "mild": { "label": "Lleu", "desc": "La teva puntuació suggereix ansietat lleu. Vigila els teus símptomes." },
        "moderate": { "label": "Moderat", "desc": "La teva puntuació suggereix ansietat moderada. Considera consultar amb un professional." },
        "severe": { "label": "Sever", "desc": "La teva puntuació suggereix ansietat severa. Es recomana buscar ajuda professional." }
      }
    },
    "gad7": {
      "name": "GAD-7",
      "abbr": "GAD-7",
      "fullName": "Trastorn d'Ansietat Generalitzada-7",
      "desc": "Avalua la severitat de l'ansietat generalitzada durant les dues últimes setmanes.",
      "instructions": "Durant les últimes 2 setmanes, amb quina freqüència t'han molestat els següents problemes?",
      "questions": [
        { "title": "Sentir-se nerviós, ansiós o amb els nervis a flor de pell" },
        { "title": "No poder aturar o controlar la preocupació" },
        { "title": "Preocupar-se massa per diferents coses" },
        { "title": "Dificultat per relaxar-se" },
        { "title": "Estar tan inquiet que és difícil estar assegut" },
        { "title": "Molestar-se o irritar-se fàcilment" },
        { "title": "Sentir por, com si alguna cosa terrible pogués passar" }
      ],
      "results": {
        "minimal": { "label": "Mínim", "desc": "La teva puntuació suggereix un nivell mínim d'ansietat." },
        "mild": { "label": "Lleu", "desc": "La teva puntuació suggereix ansietat lleu." },
        "moderate": { "label": "Moderat", "desc": "La teva puntuació suggereix ansietat moderada. Considera consultar amb un professional." },
        "severe": { "label": "Sever", "desc": "La teva puntuació suggereix ansietat severa. Es recomana buscar ajuda professional." }
      }
    },
    "msibpd": {
      "name": "MSI-BPD",
      "abbr": "MSI-BPD",
      "fullName": "Instrument de Cribratge de McLean per al Trastorn Límit de la Personalitat",
      "desc": "Eina de cribratge per a trets associats amb el trastorn límit de la personalitat.",
      "instructions": "Respon sí o no a cadascuna de les següents preguntes.",
      "questions": [
        { "title": "Alguna vegada t'has tallat, cremat o fet mal deliberadament?" },
        { "title": "Alguna vegada has fet un intent de suïcidi?" },
        { "title": "Has tingut almenys dues relacions (o intents de relació) que eren molt intenses però inestables?" },
        { "title": "La teva sensació de qui ets canvia sovint dramàticament?" },
        { "title": "El teu estat d'ànim canvia freqüentment de sobte?" },
        { "title": "Sovint sents una ràbia intensa difícil de controlar?" },
        { "title": "Sovint desconfies d'altres persones?" },
        { "title": "Sovint et sents irreal o com si les coses al teu voltant fossin irreals?" },
        { "title": "Sovint et sents buit?" },
        { "title": "Sovint fas esforços desesperats per evitar que algú t'abandoni?" }
      ],
      "results": {
        "minimal": { "label": "Mínim", "desc": "La teva puntuació suggereix una baixa presència de trets associats amb el trastorn límit de la personalitat." },
        "moderate": {
          "label": "Moderat",
          "desc": "La teva puntuació suggereix alguns trets associats amb el trastorn límit de la personalitat. Considera consultar amb un professional."
        },
        "severe": {
          "label": "Significatiu",
          "desc": "La teva puntuació suggereix una presència significativa de trets límits. Es recomana una avaluació professional completa."
        }
      }
    },
    "pss": {
      "name": "PSS-10",
      "abbr": "PSS-10",
      "fullName": "Escala d'Estrès Percebut-10",
      "desc": "Mesura el grau en què les situacions vitals són percebudes com a estressants durant l'últim mes.",
      "instructions": "Les següents preguntes tracten sobre els teus sentiments i pensaments durant l'últim mes. Indica amb quina freqüència t'has sentit o pensat d'una certa manera.",
      "questions": [
        { "title": "Amb quina freqüència t'has molestat per alguna cosa que ha passat inesperadament?" },
        { "title": "Amb quina freqüència has sentit que no podies controlar les coses importants de la teva vida?" },
        { "title": "Amb quina freqüència t'has sentit nerviós i estressat?" },
        { "title": "Amb quina freqüència has afrontat amb èxit les molèsties irritants de la vida?" },
        { "title": "Amb quina freqüència has sentit que estaves afrontant efectivament els canvis importants que estaven passant a la teva vida?" },
        { "title": "Amb quina freqüència t'has sentit segur de la teva capacitat per manejar els teus problemes personals?" },
        { "title": "Amb quina freqüència has sentit que les coses anaven bé per tu?" },
        { "title": "Amb quina freqüència has trobat que no podies afrontar totes les coses que havies de fer?" },
        { "title": "Amb quina freqüència has pogut controlar les irritacions de la teva vida?" },
        { "title": "Amb quina freqüència has sentit que tenies tot sota control?" }
      ],
      "results": {
        "minimal": { "label": "Baix", "desc": "El teu nivell d'estrès percebut és baix. Continua amb les teves estratègies d'afrontament actuals." },
        "moderate": { "label": "Moderat", "desc": "El teu nivell d'estrès percebut és moderat. Considera incorporar tècniques de gestió de l'estrès." },
        "severe": { "label": "Alt", "desc": "El teu nivell d'estrès percebut és alt. Es recomana buscar suport professional i tècniques de reducció de l'estrès." }
      }
    },
    "asrs": {
      "name": "ASRS v1.1",
      "abbr": "ASRS-v1.1",
      "fullName": "Escala d'Autoinforme de TDAH per a Adults v1.1",
      "desc": "Eina de cribratge per a símptomes de trastorn per dèficit d'atenció i hiperactivitat en adults.",
      "instructions": "Respon les següents preguntes pensant en com t'has sentit i comportat durant els últims 6 mesos.",
      "questions": [
        { "title": "Amb quina freqüència tens dificultat per acabar els detalls finals d'un projecte, un cop fetes les parts difícils?" },
        { "title": "Amb quina freqüència tens dificultat per posar les coses en ordre quan has de fer una tasca que requereix organització?" },
        { "title": "Amb quina freqüència tens problemes per recordar cites o obligacions?" },
        { "title": "Quan tens una tasca que requereix molta reflexió, amb quina freqüència evites o retardes començar?" },
        { "title": "Amb quina freqüència et remenes o et mou les mans o peus quan has d'estar assegut durant molt de temps?" },
        { "title": "Amb quina freqüència et sents excessivament actiu i obligat a fer coses, com si estiguessis conduït per un motor?" }
      ],
      "results": {
        "minimal": { "label": "Poc probable", "desc": "La teva puntuació suggereix una baixa probabilitat de TDAH." },
        "moderate": { "label": "Possible", "desc": "La teva puntuació suggereix alguns símptomes consistents amb TDAH. Considera una avaluació professional." },
        "severe": { "label": "Probable", "desc": "La teva puntuació suggereix una alta probabilitat de símptomes de TDAH. Es recomana una avaluació professional completa." }
      }
    },
    "ocir": {
      "name": "OCI-R",
      "abbr": "OCI-R",
      "fullName": "Inventari Obsessiu-Compulsiu-Revisat",
      "desc": "Avalua símptomes del trastorn obsessiu-compulsiu.",
      "instructions": "Les següents afirmacions es refereixen a experiències que molta gent té a la seva vida quotidiana. Indica en quina mesura t'han molestat durant l'últim mes.",
      "questions": [
        { "title": "He guardat tantes coses que s'interposen" },
        { "title": "Comprovo les coses més del necessari" },
        { "title": "M'amoïno si els objectes no estan disposats correctament" },
        { "title": "Em sento obligat a comptar mentre faig coses" },
        { "title": "Trobo difícil tocar un objecte quan sé que l'ha tocat un desconegut o certes persones" },
        { "title": "Trobo difícil controlar els meus propis pensaments" },
        { "title": "Recullo coses que no necessito" },
        { "title": "Comprovo repetidament portes, finestres, calaixos, etc." },
        { "title": "M'amoïno si altres canvien la manera com he disposat les coses" },
        { "title": "Sento que he de repetir certs números" },
        { "title": "A vegades he de rentar-me o netejar-me simplement perquè em sento contaminat" },
        { "title": "M'amoïnen pensaments desagradables que entren a la meva ment contra la meva voluntat" },
        { "title": "Evito llençar coses perquè temo que les pugui necessitar més endavant" },
        { "title": "Comprovo repetidament els robinets de gas i aigua i els interruptors després d'apagar-los" },
        { "title": "Necessito que les coses estiguin disposades d'una manera particular" },
        { "title": "Sento que hi ha números bons i dolents" },
        { "title": "Em rento les mans més sovint i durant més temps del necessari" },
        { "title": "Sovint tinc pensaments desagradables i tinc dificultat per desfer-me'n" }
      ],
      "results": {
        "minimal": { "label": "Mínim", "desc": "La teva puntuació suggereix un nivell mínim de símptomes obsessiu-compulsius." },
        "moderate": { "label": "Moderat", "desc": "La teva puntuació suggereix símptomes obsessiu-compulsius moderats. Considera consultar amb un professional." },
        "severe": { "label": "Significatiu", "desc": "La teva puntuació suggereix símptomes obsessiu-compulsius significatius. Es recomana una avaluació professional." }
      }
    },
    "pcl5": {
      "name": "PCL-5",
      "abbr": "PCL-5",
      "fullName": "Llista de Comprovació de TEPT per al DSM-5",
      "desc": "Avalua símptomes de trastorn d'estrès posttraumàtic durant l'últim mes.",
      "instructions": "A continuació hi ha una llista de problemes que la gent té de vegades en resposta a una experiència molt estressant. Indica quant t'ha molestat aquest problema en l'últim mes.",
      "questions": [
        { "title": "Records repetits, molestos i no desitjats de l'experiència estressant" },
        { "title": "Somnis repetits i molestos de l'experiència estressant" },
        { "title": "Sentir o actuar de sobte com si l'experiència estressant estigués passant de nou" },
        { "title": "Sentir-se molt molest quan alguna cosa et recordava l'experiència estressant" },
        { "title": "Tenir reaccions físiques fortes quan alguna cosa et recordava l'experiència estressant (p. ex., cor que batega, dificultat per respirar, suor)" },
        { "title": "Evitar records, pensaments o sentiments relacionats amb l'experiència estressant" },
        { "title": "Evitar recordatoris externs de l'experiència estressant (p. ex., persones, llocs, converses, activitats, objectes o situacions)" },
        { "title": "Dificultat per recordar parts importants de l'experiència estressant" },
        { "title": "Tenir creences negatives fortes sobre tu mateix, altres persones o el món" },
        { "title": "Culpar-te a tu mateix o a algú altre per l'experiència estressant o el que va passar després" },
        { "title": "Tenir sentiments negatius forts com por, horror, ràbia, culpa o vergonya" },
        { "title": "Pèrdua d'interès en activitats que solies gaudir" },
        { "title": "Sentir-se distant o separat d'altres persones" },
        { "title": "Dificultat per experimentar sentiments positius" },
        { "title": "Comportament irritable, explosions de ràbia o actuar agressivament" },
        { "title": "Prendre massa riscos o fer coses que et podrien causar mal" },
        { "title": "Estar superalerta o vigilant o en guàrdia" },
        { "title": "Sentir-se nerviós o sobresaltar-se fàcilment" },
        { "title": "Tenir dificultat per concentrar-se" },
        { "title": "Problemes per adormir-se o mantenir el son" }
      ],
      "results": {
        "minimal": { "label": "Mínim", "desc": "La teva puntuació suggereix un nivell baix de símptomes d'estrès posttraumàtic." },
        "moderate": { "label": "Moderat", "desc": "La teva puntuació suggereix símptomes d'estrès posttraumàtic moderats. Considera consultar amb un professional." },
        "severe": { "label": "Significatiu", "desc": "La teva puntuació suggereix símptomes d'estrès posttraumàtic significatius. Es recomana buscar ajuda professional." }
      }
    },
    "bfi44": {
      "name": "BFI-44",
      "abbr": "BFI-44",
      "fullName": "Inventari dels Cinc Grans-44",
      "desc": "Avalua cinc dimensions principals de personalitat: Extraversió, Amabilitat, Responsabilitat, Neuroticisme i Obertura a l'Experiència.",
      "instructions": "Em veig a mi mateix com algú que... Indica en quina mesura estàs d'acord o en desacord amb cada afirmació.",
      "questions": [
        { "title": "És parlaire" },
        { "title": "Tendeix a trobar defectes en els altres" },
        { "title": "Fa una feina acurada" },
        { "title": "Està deprimit, trist" },
        { "title": "És original, se li ocorren noves idees" },
        { "title": "És reservat" },
        { "title": "És servicial i desinteressat amb els altres" },
        { "title": "Pot ser una mica descuidat" },
        { "title": "És relaxat, maneja bé l'estrès" },
        { "title": "És curiós sobre moltes coses diferents" },
        { "title": "Està ple d'energia" },
        { "title": "Comença disputes amb altres" },
        { "title": "És un treballador fiable" },
        { "title": "Pot estar tens" },
        { "title": "És enginyós, un pensador profund" },
        { "title": "Genera molt entusiasme" },
        { "title": "Té una naturalesa perdonadora" },
        { "title": "Tendeix a ser desorganitzat" },
        { "title": "Es preocupa molt" },
        { "title": "Té una imaginació activa" },
        { "title": "Tendeix a ser tranquil" },
        { "title": "És generalment confiat" },
        { "title": "Tendeix a ser mandrós" },
        { "title": "És emocionalment estable, no es molesta fàcilment" },
        { "title": "És inventiu" },
        { "title": "Té una personalitat assertiva" },
        { "title": "Pot ser fred i distant" },
        { "title": "Persevera fins que la tasca està acabada" },
        { "title": "Pot estar canviant d'humor" },
        { "title": "Valora experiències artístiques, estètiques" },
        { "title": "De vegades és tímid, inhibït" },
        { "title": "És considerat i amable amb gairebé tothom" },
        { "title": "Fa les coses eficientment" },
        { "title": "Roman calm en situacions tenses" },
        { "title": "Prefereix treball que sigui rutinari" },
        { "title": "És extravertit, sociable" },
        { "title": "De vegades és groller amb els altres" },
        { "title": "Fa plans i els porta a terme" },
        { "title": "Es posa nerviós fàcilment" },
        { "title": "Li agrada reflexionar, jugar amb idees" },
        { "title": "Té pocs interessos artístics" },
        { "title": "Li agrada cooperar amb els altres" },
        { "title": "Es distreu fàcilment" },
        { "title": "És sofisticat en art, música o literatura" }
      ],
      "dimensionNames": {
        "E": "Extraversió",
        "A": "Amabilitat",
        "C": "Responsabilitat",
        "N": "Neuroticisme",
        "O": "Obertura a l'Experiència"
      },
      "dimensionDescs": {
        "E": {
          "low": "Tendeixes a ser reservat, tranquil i prefereixes activitats solitàries.",
          "mid": "Mostres un equilibri entre sociabilitat i la necessitat de temps a soles.",
          "high": "Tendeixes a ser sociable, enèrgic i gaudeixes interactuant amb altres."
        },
        "A": {
          "low": "Tendeixes a ser més competitiu i directe en les teves interaccions.",
          "mid": "Mostres un equilibri entre cooperació i assertivitat.",
          "high": "Tendeixes a ser cooperatiu, compassiu i considerat amb els altres."
        },
        "C": {
          "low": "Tendeixes a ser més flexible i espontani en el teu enfocament.",
          "mid": "Mostres un equilibri entre estructura i flexibilitat.",
          "high": "Tendeixes a ser organitzat, disciplinat i orientat a objectius."
        },
        "N": {
          "low": "Tendeixes a ser emocionalment estable i calm en situacions estressants.",
          "mid": "Experimentes un rang normal d'emocions positives i negatives.",
          "high": "Tendeixes a experimentar més emocions negatives i major sensibilitat a l'estrès."
        },
        "O": {
          "low": "Tendeixes a preferir el convencional i pràctic.",
          "mid": "Mostres un equilibri entre curiositat i interessos pràctics.",
          "high": "Tendeixes a ser creatiu, curiós i obert a noves experiències."
        }
      }
    },
    "mbti": {
      "name": "MBTI",
      "abbr": "16P",
      "fullName": "Indicador de Tipus de Myers-Briggs",
      "desc": "Identifica preferències de personalitat a través de quatre dimensions: Energia, Percepció, Presa de decisions i Estil de vida.",
      "instructions": "Selecciona l'opció que millor et descrigui en la majoria de situacions. No hi ha respostes correctes o incorrectes.",
      "questions": [
        { "title": "En trobades socials, prefereixes interactuar amb molta gent, inclosos desconeguts" },
        { "title": "Tendeixes a ser més realista que imaginatiu" },
        { "title": "És pitjor ser injust que ser despietat" },
        { "title": "Normalment prefereixes fer les coses segons un pla establert" },
        { "title": "Després de passar temps amb un grup, et sents energitzat" },
        { "title": "Prefereixes centrar-te en detalls específics en lloc de la imatge general" },
        { "title": "Quan prens decisions, consideres primer els sentiments de les persones" },
        { "title": "T'agrada tenir les coses decidides i resoltes" },
        { "title": "Prefereixes iniciar converses amb gent nova" },
        { "title": "Confies més en l'experiència que en la intuïció" },
        { "title": "Valores més la compassió que la veritat objectiva" },
        { "title": "Prefereixes seguir un horari estricte" },
        { "title": "Trobes fàcil parlar amb desconeguts" },
        { "title": "Prestes més atenció al que és real i present que al que podria ser" },
        { "title": "T'importa més l'harmonia del grup que els resultats objectius" },
        { "title": "Prefereixes acabar un projecte abans de començar-ne un altre" },
        { "title": "Necessites temps a soles per recarregar la teva energia" },
        { "title": "Gaudeixes pensant en conceptes i teories abstractes" },
        { "title": "Quan resols problemes, prioritzes la lògica sobre els sentiments" },
        { "title": "Prefereixes mantenir les teves opcions obertes en lloc de comprometre't" },
        { "title": "En el teu temps lliure, prefereixes estar amb amics" },
        { "title": "Estàs més interessat en possibilitats futures que en fets presents" },
        { "title": "Prefereixes prendre decisions basades en principis lògics" },
        { "title": "Et sents més còmode amb l'estructura i les rutines" },
        { "title": "Ets l'ànima de la festa" },
        { "title": "T'atreuen més els significats simbòlics que els fets literals" },
        { "title": "En un conflicte, busques la solució més justa encara que algú s'amoïni" },
        { "title": "T'agrada planificar les teves vacances per endavant i amb detall" },
        { "title": "Et sents còmode sent el centre d'atenció" },
        { "title": "Gaudeixes explorant noves idees més que aplicar mètodes provats" },
        { "title": "Tendeixes a decidir amb el cap més que amb el cor" },
        { "title": "Prefereixes l'espontaneïtat sobre la planificació" },
        { "title": "Trobes exhauridor passar molt de temps a soles" },
        { "title": "Prefereixes aprendre conceptes teòrics abans de veure exemples pràctics" },
        { "title": "Consideres la diplomàcia més important que la franquesa" },
        { "title": "Et sents incòmode quan els plans canvien de sobte" },
        { "title": "Parles més del que escoltes en les converses" },
        { "title": "Confies en les teves corazonades i intuïcions" },
        { "title": "Valores més l'eficiència que la cooperació" },
        { "title": "Gaudeixes de la improvisació i adaptant-te sobre la marxa" }
      ],
      "typeDescriptions": {
        "ISTJ": "Responsable i fiable. Valores la tradició, la lleialtat i l'ordre. Ets acurat i treballes constantment per complir els teus deures.",
        "ISFJ": "Protector i dedicat. Ets amable, responsable i atent a les necessitats dels altres. Valores l'harmonia i l'estabilitat.",
        "INFJ": "Idealista i visionari. Tens una comprensió profunda de les persones i un fort desig d'ajudar els altres a assolir el seu potencial.",
        "INTJ": "Estratègic i independent. Tens una ment analítica i una visió clara de com millorar les coses. Valores la competència i el coneixement.",
        "ISTP": "Pràctic i observador. Gaudeixes entenent com funcionen les coses i resolent problemes eficientment.",
        "ISFP": "Artístic i sensible. Valores l'autenticitat i l'harmonia. Gaudeixes de la bellesa i tens un fort sentit estètic.",
        "INFP": "Idealista i empàtic. Tens valors personals forts i un desig de fer del món un lloc millor.",
        "INTP": "Lògic i creatiu. Gaudeixes analitzant sistemes complexos i generant idees innovadores.",
        "ESTP": "Energètic i pragmàtic. Gaudeixes de l'acció i vius el moment present. Ets hàbil resolent problemes pràctics.",
        "ESFP": "Espontani i entusiasta. Gaudeixes de la vida i esteses la teva alegria als altres. Ets generós i optimista.",
        "ENFP": "Entusiasta i creatiu. Veus possibilitats a tot arreu i tens una energia contagiosa per inspirar els altres.",
        "ENTP": "Innovador i desafiant. Gaudeixes del debat intel·lectual i busques constantment noves idees i possibilitats.",
        "ESTJ": "Organitzat i decisiu. Valores l'eficiència i l'ordre. Ets un líder natural i administrador.",
        "ESFJ": "Sociable i servicial. T'importen profundament els altres i treballes per crear harmonia al teu entorn.",
        "ENFJ": "Carismàtic i empàtic. Inspires als altres i tens una habilitat natural per liderar amb compassió.",
        "ENTJ": "Líder nat i estratègic. Ets decisiu, eficient i gaudeixes dels reptes organitzatius i de lideratge."
      }
    },
    "phq9": {
      "name": "PHQ-9",
      "abbr": "PHQ-9",
      "fullName": "Qüestionari de Salut del Pacient-9",
      "desc": "Cribratge ràpid de depressió àmpliament utilitzat en atenció primària. 9 preguntes.",
      "instructions": "Durant les últimes 2 setmanes, amb quina freqüència t'han molestat els següents problemes?",
      "sharedOptions": ["Gens","Uns quants dies","Més de la meitat dels dies","Gairebé cada dia"],
      "questions": [
        { "title": "Poc interès o plaer en fer coses" },
        { "title": "Sentir-se baix, deprimit o sense esperança" },
        { "title": "Problemes per adormir-se o mantenir el son, o dormir massa" },
        { "title": "Sentir-se cansat o tenir poca energia" },
        { "title": "Poca gana o menjar en excés" },
        { "title": "Sentir-se malament sobre un mateix" },
        { "title": "Dificultat per concentrar-se en les coses" },
        { "title": "Moure's o parlar tan a poc a poc que altres ho noten, o el contrari" },
        { "title": "Pensaments que estaries millor mort, o de fer-te mal d'alguna manera" }
      ],
      "results": {
        "minima": { "label": "Mínim", "desc": "No es detecten símptomes significatius de depressió. Continua cuidant del teu benestar emocional." },
        "leve": { "label": "Lleu", "desc": "S'han detectat símptomes lleus de depressió. Considera vigilar el teu estat d'ànim i adoptar hàbits saludables." },
        "moderada": { "label": "Moderat", "desc": "S'han detectat símptomes moderats de depressió. Es recomana consultar amb un professional de la salut mental." },
        "moderadamente_grave": {
          "label": "Moderadament sever",
          "desc": "S'han detectat símptomes moderadament severs de depressió. És important buscar ajuda professional tan aviat com sigui possible."
        },
        "grave": { "label": "Sever", "desc": "S'han detectat símptomes severs de depressió. Es recomana buscar atenció professional urgent." }
      }
    },
    "audit": {
      "name": "AUDIT",
      "abbr": "AUDIT",
      "fullName": "Test d'Identificació de Trastorns per Ús d'Alcohol",
      "desc": "Desenvolupat per l'OMS per detectar consum problemàtic d'alcohol.",
      "instructions": "Respon les següents preguntes sobre el teu consum d'alcohol. Sigues el més honest possible.",
      "questions": [
        {
          "title": "Amb quina freqüència consumes begudes alcohòliques?",
          "options": ["Mai","Un cop al mes o menys","2 a 4 vegades al mes","2 a 3 vegades per setmana","4 o més vegades per setmana"]
        },
        {
          "title": "Quantes begudes estàndard que contenen alcohol consumes típicament en un dia quan estàs bevent?",
          "options": ["1 o 2","3 o 4","5 o 6","7 a 9","10 o més"]
        },
        {
          "title": "Amb quina freqüència tens sis o més begudes estàndard en una ocasió?",
          "options": ["Mai","Menys de mensualment","Mensualment","Setmanalment","Diàriament o gairebé diàriament"]
        },
        {
          "title": "Amb quina freqüència en l'últim any has trobat que no podies aturar de beure un cop havies començat?",
          "options": ["Mai","Menys de mensualment","Mensualment","Setmanalment","Diàriament o gairebé diàriament"]
        },
        {
          "title": "Amb quina freqüència en l'últim any has deixat de fer el que normalment s'esperava de tu a causa de la beguda?",
          "options": ["Mai","Menys de mensualment","Mensualment","Setmanalment","Diàriament o gairebé diàriament"]
        },
        {
          "title": "Amb quina freqüència en l'últim any has necessitat una primera beguda al matí per posar-te en marxa després d'una sessió de beguda forta?",
          "options": ["Mai","Menys de mensualment","Mensualment","Setmanalment","Diàriament o gairebé diàriament"]
        },
        {
          "title": "Amb quina freqüència en l'últim any has tingut una sensació de culpa o remordiment després de beure?",
          "options": ["Mai","Menys de mensualment","Mensualment","Setmanalment","Diàriament o gairebé diàriament"]
        },
        {
          "title": "Amb quina freqüència en l'últim any no has pogut recordar què va passar la nit anterior perquè havies begut?",
          "options": ["Mai","Menys de mensualment","Mensualment","Setmanalment","Diàriament o gairebé diàriament"]
        },
        {
          "title": "Tu o algú altre us heu fet mal a causa de la teva beguda?",
          "options": ["No","Sí, però no en l'últim any","Sí, en l'últim any"]
        },
        {
          "title": "Algú familiar, amic, metge o altre professional sanitari s'ha preocupat per la teva beguda o t'ha suggerit que redueixis?",
          "options": ["No","Sí, però no en l'últim any","Sí, en l'últim any"]
        }
      ],
      "results": {
        "bajo_riesgo": { "label": "Baix risc", "desc": "El teu consum d'alcohol està dins dels límits de baix risc. Mantén hàbits saludables." },
        "riesgo_moderado": {
          "label": "Risc moderat",
          "desc": "El teu consum d'alcohol presenta un risc moderat. Considera reduir el teu consum i consultar amb un professional."
        },
        "riesgo_alto": { "label": "Alt risc", "desc": "El teu consum d'alcohol presenta un alt risc. Es recomana buscar orientació professional per reduir el consum." },
        "posible_dependencia": { "label": "Possible dependència", "desc": "Els resultats suggereixen una possible dependència de l'alcohol. És important buscar ajuda professional especialitzada." }
      }
    },
    "isi": {
      "name": "ISI",
      "abbr": "ISI",
      "fullName": "Índex de Severitat d'Insomni",
      "desc": "Avalua la naturalesa, severitat i impacte de l'insomni durant les dues últimes setmanes.",
      "instructions": "Avalua la severitat dels teus problemes de son durant les últimes 2 setmanes.",
      "questions": [
        {
          "title": "Dificultat per adormir-se",
          "options": ["Cap","Lleu","Moderat","Sever","Molt sever"]
        },
        {
          "title": "Dificultat per mantenir el son",
          "options": ["Cap","Lleu","Moderat","Sever","Molt sever"]
        },
        {
          "title": "Despertar-se massa d'hora al matí",
          "options": ["Cap","Lleu","Moderat","Sever","Molt sever"]
        },
        {
          "title": "Quan satisfet estàs amb el teu patró de son actual?",
          "options": ["Molt satisfet","Satisfet","Moderadament satisfet","Insatisfet","Molt insatisfet"]
        },
        {
          "title": "En quina mesura notes que el teu problema de son interfereix amb el teu funcionament diari?",
          "options": ["Gens","Una mica","Alguna cosa","Molt","Moltíssim"]
        },
        {
          "title": "En quina mesura creus que altres noten que el teu problema de son afecta la teva qualitat de vida?",
          "options": ["Gens","Una mica","Alguna cosa","Molt","Moltíssim"]
        },
        {
          "title": "Quan preocupat estàs pel teu problema de son actual?",
          "options": ["Gens","Una mica","Alguna cosa","Molt","Moltíssim"]
        }
      ],
      "results": {
        "sin_insomnio": { "label": "Sense insomni clínic", "desc": "No es detecten problemes d'insomni clínic. El teu son sembla estar dins dels paràmetres normals." },
        "subclinico": {
          "label": "Insomni subclínic",
          "desc": "Es detecten alguns símptomes d'insomni, però no arriben a nivells clínics. Considera millorar la teva higiene del son."
        },
        "clinico_moderado": { "label": "Insomni clínic moderat", "desc": "Es detecta insomni clínic de severitat moderada. Es recomana consultar un professional sanitari." },
        "clinico_grave": {
          "label": "Insomni clínic sever",
          "desc": "Es detecta insomni clínic sever. És important buscar atenció professional per abordar els problemes de son."
        }
      }
    },
    "eat26": {
      "name": "EAT-26",
      "abbr": "EAT-26",
      "fullName": "Test d'Actituds Alimentàries-26",
      "desc": "Detecta actituds i comportaments característics dels trastorns alimentaris.",
      "instructions": "Indica amb quina freqüència manifestes cadascuna de les següents actituds o comportaments. Respon honestament.",
      "sharedOptions": ["Mai","Rarament","De vegades","Sovint","Molt sovint","Sempre"],
      "questions": [
        { "title": "Estic aterrat/da per tenir sobrepès" },
        { "title": "Evito menjar quan tinc gana" },
        { "title": "M'amoïno pel menjar" },
        { "title": "He tingut atracions on sento que no puc aturar de menjar" },
        { "title": "Tallo el meu menjar en trossos petits" },
        { "title": "Conec el contingut calòric dels aliments que menjo" },
        { "title": "Evito específicament aliments alts en carbohidrats" },
        { "title": "Sento que altres preferirien que menjés més" },
        { "title": "Vomito després d'haver menjat" },
        { "title": "Em sento extremadament culpable després de menjar" },
        { "title": "Estic preocupat/da pel desig de ser més prim/na" },
        { "title": "Penso en cremar calories quan faig exercici" },
        { "title": "Altres pensen que sóc massa prim/na" },
        { "title": "Estic preocupat/da pel pensament de tenir greix al meu cos" },
        { "title": "Em pren més temps que als altres menjar els meus àpats" },
        { "title": "Evito aliments amb sucre" },
        { "title": "Menjo aliments de dieta" },
        { "title": "Sento que el menjar controla la meva vida" },
        { "title": "Mostro autocontrol al voltant del menjar" },
        { "title": "Sento que altres em pressionen perquè mengi" },
        { "title": "Passo massa temps i pensament en el menjar" },
        { "title": "Em sento incòmode/da després de menjar dolços" },
        { "title": "Estic a dieta" },
        { "title": "M'agrada tenir l'estómac buit" },
        { "title": "Gaudeixo provant nous i rics aliments" },
        { "title": "Tinc la impulsió de vomitar després dels àpats" }
      ],
      "results": {
        "bajo_riesgo": { "label": "Baix risc", "desc": "No es detecten actituds alimentàries de risc significatives. Mantén una relació saludable amb el menjar." },
        "riesgo_significativo": {
          "label": "Risc significatiu",
          "desc": "Es detecten actituds alimentàries que podrien indicar un trastorn alimentari. Es recomana consultar amb un professional sanitari especialitzat."
        }
      }
    },
    "mdq": {
      "name": "MDQ",
      "abbr": "MDQ",
      "fullName": "Qüestionari de Trastorn de l'Estat d'Ànim",
      "desc": "Eina de cribratge ràpid per al trastorn bipolar i l'espectre bipolar.",
      "instructions": "Respon les següents preguntes sobre experiències que podries haver tingut en algun moment de la teva vida.",
      "questions": [
        {
          "title": "Alguna vegada has tingut un període en què et senties tan bé o tan eufòric que altres persones pensaven que no eres tu mateix?",
          "options": ["No","Sí"]
        },
        {
          "title": "Alguna vegada has tingut un període en què eres tan irritable que cridaves a la gent o començaves baralles?",
          "options": ["No","Sí"]
        },
        {
          "title": "Alguna vegada has tingut un període en què et senties molt més segur de tu mateix del normal?",
          "options": ["No","Sí"]
        },
        {
          "title": "Alguna vegada has tingut un període en què dormies molt menys del normal i no ho trobaves a faltar?",
          "options": ["No","Sí"]
        },
        {
          "title": "Alguna vegada has tingut un període en què eres molt més parlaire o parlaves més ràpid del normal?",
          "options": ["No","Sí"]
        },
        {
          "title": "Alguna vegada has tingut un període en què els pensaments et corrien per la ment?",
          "options": ["No","Sí"]
        },
        {
          "title": "Alguna vegada has tingut un període en què eres tan fàcilment distret que tenies dificultat per concentrar-te?",
          "options": ["No","Sí"]
        },
        {
          "title": "Alguna vegada has tingut un període en què tenies molta més energia del normal?",
          "options": ["No","Sí"]
        },
        {
          "title": "Alguna vegada has tingut un període en què eres molt més actiu o feies moltes més coses del normal?",
          "options": ["No","Sí"]
        },
        {
          "title": "Alguna vegada has tingut un període en què eres molt més social o extravertit del normal?",
          "options": ["No","Sí"]
        },
        {
          "title": "Alguna vegada has tingut un període en què estaves molt més interessat en el sexe del normal?",
          "options": ["No","Sí"]
        },
        {
          "title": "Alguna vegada has tingut un període en què feies coses que eren inusuals per a tu o que altres consideraven excessives o arriscades?",
          "options": ["No","Sí"]
        },
        {
          "title": "Alguna vegada has tingut un període en què gastaves diners d'una manera que causava problemes per a tu o la teva família?",
          "options": ["No","Sí"]
        },
        {
          "title": "Han passat diverses d'aquestes experiències durant el mateix període de temps?",
          "options": ["No","Sí"]
        },
        {
          "title": "Si has respost SÍ a qualsevol pregunta anterior, quant de problema et van causar?",
          "options": ["Cap problema","Problema menor","Problema moderat","Problema sever"]
        }
      ],
      "results": {
        "positive": {
          "label": "Cribratge positiu per a trastorn bipolar",
          "desc": "Les teves respostes suggereixen la possibilitat d'un trastorn de l'espectre bipolar. Aquest resultat NO és un diagnòstic. Es recomana fortament una avaluació professional completa amb un psiquiatre."
        },
        "negative": {
          "label": "Cribratge negatiu",
          "desc": "Les teves respostes no suggereixen la presència d'un trastorn de l'espectre bipolar segons aquest instrument de cribratge. Recorda que aquest qüestionari és només una eina de cribratge i no substitueix una avaluació professional."
        }
      }
    },
    "spin": {
      "name": "SPIN",
      "abbr": "SPIN",
      "fullName": "Inventari de Fòbia Social",
      "desc": "Avalua la presència i severitat dels símptomes d'ansietat social.",
      "instructions": "Indica quant t'han molestat els següents problemes durant la setmana passada.",
      "sharedOptions": ["Gens","Una mica","Alguna cosa","Molt","Extremadament"],
      "questions": [
        { "title": "Tinc por de les persones amb autoritat." },
        { "title": "Ruboritzar-me davant de la gent m'amoïna." },
        { "title": "Les festes i esdeveniments socials m'espanten." },
        { "title": "Evito parlar amb persones que no conec." },
        { "title": "Tinc molta por de ser criticat." },
        { "title": "La por de sentir-me avergonyit em fa evitar fer coses o parlar amb la gent." },
        { "title": "Suar davant de la gent em causa angoixa." },
        { "title": "Evito anar a festes." },
        { "title": "Evito activitats on sóc el centre d'atenció." },
        { "title": "Parlar amb desconeguts m'espanta." },
        { "title": "Temo haver de parlar en públic." },
        { "title": "Faria qualsevol cosa per evitar ser criticat." },
        { "title": "Les palpitations em molesten quan estic amb gent." },
        { "title": "Tinc por de fer coses quan la gent podria estar mirant-me." },
        { "title": "Els meus majors temors són sentir-me avergonyit o fer el ridícul." },
        { "title": "Evito parlar amb qualsevol persona amb autoritat." },
        { "title": "Tremolar o sacsejar-me davant dels altres em causa angoixa." }
      ],
      "results": {
        "low": { "label": "Ansietat social baixa", "desc": "La teva puntuació indica un nivell baix d'ansietat social." },
        "mild": { "label": "Ansietat social lleu", "desc": "La teva puntuació suggereix un nivell lleu d'ansietat social." },
        "moderate": {
          "label": "Ansietat social moderada",
          "desc": "La teva puntuació indica un nivell moderat d'ansietat social. Podries beneficiar-te de buscar suport professional."
        },
        "severe": { "label": "Ansietat social severa", "desc": "La teva puntuació suggereix un nivell sever d'ansietat social. Es recomana buscar ajuda professional." },
        "very_severe": {
          "label": "Ansietat social molt severa",
          "desc": "La teva puntuació indica un nivell molt sever d'ansietat social. Es recomana fortament buscar ajuda professional."
        }
      }
    },
    "rosenberg": {
      "name": "RSE",
      "abbr": "RSE",
      "fullName": "Escala d'Autoestima de Rosenberg",
      "desc": "La mesura més utilitzada d'autoestima global. Avalua sentiments d'autoavaluació.",
      "instructions": "Indica el teu grau d'acord amb cadascuna de les següents afirmacions.",
      "sharedOptions": ["Totalment en desacord","En desacord","D'acord","Totalment d'acord"],
      "questions": [
        { "title": "Sento que sóc una persona digna, almenys en un pla igual amb els altres." },
        { "title": "Sento que tinc qualitats positives." },
        { "title": "En general, tinc la tendència a sentir que sóc un fracàs." },
        { "title": "Sóc capaç de fer les coses tan bé com la majoria de la gent." },
        { "title": "Sento que no tinc gaire de què estar orgullós." },
        { "title": "Tinc una actitud positiva cap a mi mateix." },
        { "title": "En general, estic satisfet amb mi mateix." },
        { "title": "M'agradaria poder tenir més respecte per mi mateix." },
        { "title": "De vegades em sento realment inútil." },
        { "title": "De vegades penso que no serveixo per a res." }
      ],
      "results": {
        "low": { "label": "Autoestima baixa", "desc": "La teva puntuació suggereix un nivell baix d'autoestima. Es recomana suport professional." },
        "normal": { "label": "Autoestima normal", "desc": "La teva puntuació indica un nivell normal i saludable d'autoestima." },
        "high": { "label": "Autoestima alta", "desc": "La teva puntuació indica un nivell alt d'autoestima." }
      }
    },
    "who5": {
      "name": "WHO-5",
      "abbr": "WHO-5",
      "fullName": "Índex de Benestar WHO-5",
      "desc": "Una mesura breu de benestar emocional desenvolupada per l'OMS. Només 5 preguntes.",
      "instructions": "Indica com t'has sentit durant les dues últimes setmanes.",
      "sharedOptions": [
        "En cap moment",
        "Alguna vegada",
        "Menys de la meitat del temps",
        "Més de la meitat del temps",
        "La major part del temps",
        "Tot el temps"
      ],
      "questions": [
        { "title": "M'he sentit alegre i amb bon esperit." },
        { "title": "M'he sentit calm i relaxat." },
        { "title": "M'he sentit actiu i vigorós." },
        { "title": "M'he despertat sentint-me fresc i descansat." },
        { "title": "La meva vida diària ha estat plena de coses que m'interessen." }
      ],
      "results": {
        "low": { "label": "Benestar baix", "desc": "Indica un nivell baix de benestar emocional. Es recomana avaluació professional." },
        "reduced": { "label": "Benestar reduït", "desc": "Indica benestar emocional reduït. Considera parlar amb un professional de la salut mental." },
        "moderate": { "label": "Benestar moderat", "desc": "Indica un nivell moderat de benestar emocional." },
        "high": { "label": "Benestar alt", "desc": "Indica un nivell alt de benestar emocional." }
      }
    },
    "aq10": {
      "name": "AQ-10",
      "abbr": "AQ-10",
      "fullName": "Quocient de l'Espectre Autista — 10 ítems",
      "desc": "Cribratge breu per a trets associats amb l'espectre autista. Desenvolupat per Baron-Cohen et al.",
      "instructions": "Llegeix cada afirmació amb atenció i indica el teu grau d'acord o desacord.",
      "sharedOptions": [
            "Definitivament d'acord",
            "Lleugerament d'acord",
            "Lleugerament en desacord",
            "Definitivament en desacord"
      ],
      "questions": [
            {
                  "title": "Sovint noto sons petits quan altres no ho fan"
            },
            {
                  "title": "Quan llegeixo una història, trobo difícil esbrinar les intencions dels personatges"
            },
            {
                  "title": "Trobo fàcil 'llegir entre línies' quan algú parla amb mi"
            },
            {
                  "title": "Normalment em concentro més en la imatge general, en lloc dels petits detalls"
            },
            {
                  "title": "Sé com dir si algú que m'escolta s'està avorrint"
            },
            {
                  "title": "Trobo fàcil fer més d'una cosa alhora"
            },
            {
                  "title": "Trobo fàcil esbrinar què pensa o sent algú només mirant la seva cara"
            },
            {
                  "title": "Si hi ha una interrupció, puc tornar al que estava fent molt ràpidament"
            },
            {
                  "title": "M'agrada recollir informació sobre categories de coses"
            },
            {
                  "title": "Trobo difícil esbrinar les intencions de la gent"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Pocs trets autistes",
                  "desc": "La teva puntuació no suggereix trets significatius de l'espectre autista. No obstant, si tens preocupacions, consulta un professional."
            },
            "moderado": {
                  "label": "Alguns trets autistes",
                  "desc": "La teva puntuació indica alguns trets associats amb l'espectre autista, encara per sota del llindar de derivació clínica (≥6)."
            },
            "alto": {
                  "label": "Trets autistes significatius",
                  "desc": "La teva puntuació supera el llindar de derivació (≥6). Es recomana una avaluació diagnòstica completa amb un professional especialitzat."
            },
            "muy_alto": {
                  "label": "Trets autistes molt significatius",
                  "desc": "La teva puntuació és alta. Es recomana fortament buscar una avaluació diagnòstica completa amb un especialista en trastorns de l'espectre autista."
            }
      }
},
    "aq50": {
      "name": "AQ-50",
      "abbr": "AQ-50",
      "fullName": "Quocient de l'Espectre Autista — 50 ítems",
      "desc": "Avaluació completa dels trets de l'espectre autista a través de cinc dominis: habilitats socials, canvi d'atenció, atenció al detall, comunicació i imaginació.",
      "instructions": "Llegeix cada afirmació amb atenció i indica el teu grau d'acord o desacord. No hi ha respostes correctes o incorrectes.",
      "questions": [
            {
                  "title": "Prefereixo fer coses amb altres en lloc de sol"
            },
            {
                  "title": "Prefereixo fer les coses de la mateixa manera una i altra vegada"
            },
            {
                  "title": "Si intento imaginar alguna cosa, trobo molt fàcil crear una imatge a la meva ment"
            },
            {
                  "title": "Sovint m'absorbeixo tan fortament en una cosa que perdo de vista altres coses"
            },
            {
                  "title": "Sovint noto sons petits quan altres no ho fan"
            },
            {
                  "title": "Normalment noto matrícules de cotxe o cadenes similars d'informació"
            },
            {
                  "title": "Altres persones sovint em diuen que el que he dit és descortès, encara que jo pensi que és cortès"
            },
            {
                  "title": "Quan llegeixo una història, puc imaginar fàcilment com podrien ser els personatges"
            },
            {
                  "title": "M'encanten les dates"
            },
            {
                  "title": "En un grup social, puc seguir fàcilment diverses converses diferents de persones"
            },
            {
                  "title": "Trobo les situacions socials fàcils"
            },
            {
                  "title": "Tinc la tendència a notar detalls que altres no noten"
            },
            {
                  "title": "Prefereixo anar a una biblioteca que a una festa"
            },
            {
                  "title": "Trobo fàcil inventar històries"
            },
            {
                  "title": "Em sento atret més fortament per les persones que per les coses"
            },
            {
                  "title": "Tinc la tendència a tenir interessos molt forts que m'amoïnen si no puc perseguir"
            },
            {
                  "title": "Gaudeixo de la xerrada social"
            },
            {
                  "title": "Quan parlo, no sempre és fàcil per als altres intervenir"
            },
            {
                  "title": "M'encanten els números"
            },
            {
                  "title": "Quan llegeixo una història, trobo difícil esbrinar les intencions dels personatges"
            },
            {
                  "title": "No gaudeixo particularment llegint ficció"
            },
            {
                  "title": "Trobo difícil fer nous amics"
            },
            {
                  "title": "Noto patrons en les coses tot el temps"
            },
            {
                  "title": "Prefereixo anar al teatre que a un museu"
            },
            {
                  "title": "No m'amoïna si la meva rutina diària és interrompuda"
            },
            {
                  "title": "Sovint trobo que no sé com mantenir una conversa"
            },
            {
                  "title": "Trobo fàcil 'llegir entre línies' quan algú parla amb mi"
            },
            {
                  "title": "Normalment em concentro més en la imatge general, en lloc dels petits detalls"
            },
            {
                  "title": "No sóc molt bo recordant números de telèfon"
            },
            {
                  "title": "Normalment no noto petits canvis en una situació, o en l'aparença d'una persona"
            },
            {
                  "title": "Sé com dir si algú que m'escolta s'està avorrint"
            },
            {
                  "title": "Trobo fàcil fer més d'una cosa alhora"
            },
            {
                  "title": "Quan parlo per telèfon, no estic segur quan és el meu torn per parlar"
            },
            {
                  "title": "Gaudeixo fent coses espontàniament"
            },
            {
                  "title": "Sovint sóc l'últim a entendre el sentit d'una broma"
            },
            {
                  "title": "Trobo fàcil esbrinar què pensa o sent algú només mirant la seva cara"
            },
            {
                  "title": "Si hi ha una interrupció, puc tornar al que estava fent molt ràpidament"
            },
            {
                  "title": "Sóc bo en la xerrada social"
            },
            {
                  "title": "La gent sovint em diu que segueixo parlant de la mateixa cosa"
            },
            {
                  "title": "Quan era jove, solia gaudir jugant a jocs que implicaven fer veure amb altres nens"
            },
            {
                  "title": "M'agrada recollir informació sobre categories de coses"
            },
            {
                  "title": "Trobo difícil imaginar com seria ser algú altre"
            },
            {
                  "title": "M'agrada planificar qualsevol activitat en què participi amb cura"
            },
            {
                  "title": "Gaudeixo de les ocasions socials"
            },
            {
                  "title": "Trobo difícil esbrinar les intencions de la gent"
            },
            {
                  "title": "Les situacions noves em fan ansiós"
            },
            {
                  "title": "Gaudeixo coneixent gent nova"
            },
            {
                  "title": "Sóc un bon diplomàtic"
            },
            {
                  "title": "No sóc molt bo recordant les dates de naixement de la gent"
            },
            {
                  "title": "Trobo molt fàcil jugar a jocs amb nens que impliquen fer veure"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Pocs trets autistes",
                  "desc": "La teva puntuació es troba dins del rang típic de la població general. No es suggereixen trets significatius de l'espectre autista."
            },
            "leve": {
                  "label": "Trets autistes lleus",
                  "desc": "La teva puntuació indica alguns trets de l'espectre autista, dins del rang mitjà. Molta gent sense diagnòstic puntua en aquest rang."
            },
            "moderado": {
                  "label": "Trets autistes moderats",
                  "desc": "La teva puntuació supera el llindar de 26 i suggereix trets autistes per sobre de la mitjana. Considera consultar un professional si experimentes dificultats."
            },
            "alto": {
                  "label": "Trets autistes significatius",
                  "desc": "La teva puntuació supera el llindar clínic de 32. El 80% de les persones diagnosticades amb autisme puntuen en aquest rang. Es recomana una avaluació diagnòstica."
            },
            "muy_alto": {
                  "label": "Trets autistes molt significatius",
                  "desc": "La teva puntuació és molt alta i suggereix fortament la presència de trets de l'espectre autista. Es recomana fortament una avaluació diagnòstica completa."
            }
      }
},
    "cssrs": {
      "name": "C-SSRS",
      "abbr": "C-SSRS",
      "fullName": "Escala de Valoració de la Severitat del Suïcidi de Columbia — Cribratge",
      "desc": "Eina de cribratge mundial del risc de suïcidi utilitzada en departaments d'emergències, atenció primària i educació. Si estàs en crisi, truca al 988 (EUA) o 116 123 (Regne Unit).",
      "instructions": "Respon honestament les següents preguntes sobre pensaments o comportaments que podries haver tingut. Les teves respostes són confidencials i s'emmagatzemen només al teu dispositiu.",
      "questions": [
            {
                  "title": "Has desitjat estar mort o desitjat poder anar a dormir i no despertar-te?",
                  "options": [
                        "No",
                        "Sí"
                  ]
            },
            {
                  "title": "Has tingut realment pensaments de matar-te?",
                  "options": [
                        "No",
                        "Sí"
                  ]
            },
            {
                  "title": "Has estat pensant en com podries fer això? (p. ex., pensar en un mètode com pastilles, una pistola o una altra manera)",
                  "options": [
                        "No",
                        "Sí"
                  ]
            },
            {
                  "title": "Has tingut aquests pensaments i has tingut alguna intenció d'actuar sobre ells?",
                  "options": [
                        "No",
                        "Sí"
                  ]
            },
            {
                  "title": "Has començat a elaborar o has elaborat els detalls de com matar-te? Tens la intenció de dur a terme aquest pla?",
                  "options": [
                        "No",
                        "Sí"
                  ]
            },
            {
                  "title": "Alguna vegada has fet alguna cosa, començat a fer alguna cosa o preparat per fer alguna cosa per acabar amb la teva vida? (p. ex., recollir pastilles, obtenir una pistola, regalar objectes de valor, escriure una nota de suïcidi, prendre pastilles, tallar-te, intentar penjar-te, etc.)",
                  "options": [
                        "No",
                        "Sí"
                  ]
            }
      ],
      "results": {
            "none": {
                  "label": "No s'ha identificat risc",
                  "desc": "No s'han identificat indicadors de risc de suïcidi en aquest moment. Si alguna vegada tens aquests pensaments, no dubtis a buscar ajuda professional."
            },
            "low": {
                  "label": "Risc baix",
                  "desc": "Has expressat desitjos passius de mort. Tot i que no indiques plans actius, es recomana parlar amb un professional.\n\n🆘 LÍNIES DE CRISI:\n• EUA: 988\n• Regne Unit: 116 123\n• Internacional: befrienders.org"
            },
            "moderate": {
                  "label": "Risc moderat",
                  "desc": "Les teves respostes indiquen pensaments suïcides. És molt important parlar amb un professional de la salut mental. Un pla de seguretat pot ajudar.\n\n🆘 LÍNIES DE CRISI:\n• EUA: 988\n• Regne Unit: 116 123\n• Internacional: befrienders.org"
            },
            "high": {
                  "label": "Risc alt",
                  "desc": "Les teves respostes indiquen un alt risc de comportament suïcida. Necessites una avaluació professional urgent. Si us plau, contacta amb un professional de la salut mental o truca a una línia de crisi ara.\n\n🆘 LÍNIES DE CRISI:\n• EUA: 988\n• Regne Unit: 116 123\n• Internacional: befrienders.org"
            },
            "imminent": {
                  "label": "Risc imminent",
                  "desc": "Les teves respostes indiquen un risc molt alt. És essencial que busquis ajuda professional ARA. Vés a urgències o truca a una línia de crisi immediatament. No estàs sol.\n\n🆘 LÍNIES DE CRISI:\n• EUA: 988\n• Regne Unit: 116 123\n• Internacional: befrienders.org"
            }
      }
},
    "cage": {
      "name": "CAGE",
      "abbr": "CAGE",
      "fullName": "Qüestionari de Cribratge d'Alcohol CAGE",
      "desc": "Cribratge ultrabreu de 4 preguntes per detectar problemes amb l'alcohol. Complementa l'AUDIT.",
      "instructions": "Respon honestament les següents preguntes sobre la teva relació amb l'alcohol.",
      "sharedOptions": [
            "No",
            "Sí"
      ],
      "questions": [
            {
                  "title": "Alguna vegada has sentit que hauries de Reduir (Cut down) el teu consum d'alcohol?"
            },
            {
                  "title": "La gent t'ha Molestat (Annoyed) criticant la teva beguda?"
            },
            {
                  "title": "Alguna vegada t'has sentit Culpable (Guilty) per la teva beguda?"
            },
            {
                  "title": "Alguna vegada has necessitat una beguda al matí per calmar els nervis o per desfer-te d'una ressaca (Eye-opener)?"
            }
      ],
      "results": {
            "none": {
                  "label": "Cap indicador",
                  "desc": "No es detecten indicadors de problemes amb l'alcohol."
            },
            "low": {
                  "label": "Possible risc",
                  "desc": "Una resposta positiva mereix una exploració addicional. Considera fer el test AUDIT per a una avaluació més completa."
            },
            "moderate": {
                  "label": "Problema probable",
                  "desc": "La teva puntuació suggereix una alta probabilitat d'un trastorn per ús d'alcohol. Es recomana consultar un professional sanitari."
            },
            "high": {
                  "label": "Alta probabilitat",
                  "desc": "La teva puntuació és pràcticament diagnòstica de dependència de l'alcohol. És molt important buscar ajuda professional especialitzada."
            }
      }
},
    "phqa": {
      "name": "PHQ-A",
      "abbr": "PHQ-A",
      "fullName": "Qüestionari de Salut del Pacient — Adolescents",
      "desc": "Versió del PHQ-9 validada per a adolescents (edats 11-17). Avalua depressió durant les dues últimes setmanes.",
      "instructions": "Durant les últimes 2 setmanes, amb quina freqüència t'han molestat els següents problemes? Pensa en com t'has sentit a l'escola, amb amics i a casa.",
      "sharedOptions": [
            "Gens",
            "Uns quants dies",
            "Més de la meitat dels dies",
            "Gairebé cada dia"
      ],
      "questions": [
            {
                  "title": "Poc interès o plaer en fer coses"
            },
            {
                  "title": "Sentir-se baix, deprimit o sense esperança"
            },
            {
                  "title": "Problemes per adormir-se o mantenir el son, o dormir massa"
            },
            {
                  "title": "Sentir-se cansat o tenir poca energia"
            },
            {
                  "title": "Poca gana o menjar en excés"
            },
            {
                  "title": "Sentir-se malament sobre un mateix — o que ets un fracàs o has decebut a tu mateix o a la teva família"
            },
            {
                  "title": "Dificultat per concentrar-se en les coses, com els deures, llegir o veure la televisió"
            },
            {
                  "title": "Moure's o parlar tan a poc a poc que altres persones podrien haver-ho notat? O el contrari — estar tan inquiet o nerviós que t'has mogut molt més del normal"
            },
            {
                  "title": "Pensaments que estaries millor mort o de fer-te mal d'alguna manera"
            }
      ],
      "results": {
            "minima": {
                  "label": "Mínim",
                  "desc": "No es detecten símptomes significatius de depressió. Continua cuidant del teu benestar emocional."
            },
            "leve": {
                  "label": "Lleu",
                  "desc": "S'han detectat símptomes lleus. Parla amb un adult de confiança si alguna cosa et preocupa."
            },
            "moderada": {
                  "label": "Moderat",
                  "desc": "S'han detectat símptomes de depressió moderats. Es recomana parlar amb un professional de la salut mental."
            },
            "moderadamente_grave": {
                  "label": "Moderadament sever",
                  "desc": "S'han detectat símptomes de depressió significatius. És important buscar ajuda professional aviat."
            },
            "grave": {
                  "label": "Sever",
                  "desc": "S'han detectat símptomes de depressió severs. Busca ajuda professional urgentment. Parla amb un adult de confiança ara."
            }
      }
},
    "triage": {
      "name": "Guia",
      "abbr": "Guia",
      "fullName": "Qüestionari d'Orientació Inicial",
      "desc": "No saps per on començar? Aquest breu qüestionari recomana quines avaluacions són més rellevants per a tu.",
      "instructions": "Respon les següents preguntes honestament sobre com t'has sentit últimament. Al final, rebràs recomanacions personalitzades sobre quines avaluacions fer.",
      "sharedOptions": ["Gens","Una mica","Moderadament","Bastant","Molt"],
      "questions": [
        { "title": "M'he sentit trist, baix o sense esperança" },
        { "title": "He perdut interès o plaer en coses que solia gaudir" },
        { "title": "Em sento sense energia o fatiga la major part del temps" },
        { "title": "Em sento nerviós, ansiós o amb els nervis a flor de pell" },
        { "title": "Tinc preocupacions excessives que no puc controlar" },
        { "title": "Experimento símptomes físics d'ansietat (palpitacions, suor, tremolors)" },
        { "title": "Evito situacions socials per por a ser jutjat o fer el ridícul" },
        { "title": "Trobo molt difícil parlar en públic o amb desconeguts" },
        { "title": "Em sento aclaparat per situacions vitals" },
        { "title": "Tinc dificultat per gestionar problemes diaris" },
        { "title": "He viscut una experiència traumàtica que continua afectant-me" },
        { "title": "Tinc records molestos o malsons sobre esdeveniments passats" },
        { "title": "Tinc dificultat per adormir-me o mantenir el son" },
        { "title": "La meva qualitat de son afecta el meu funcionament diari" },
        { "title": "Estic excessivament preocupat pel meu pes o imatge corporal" },
        { "title": "Tinc una relació problemàtica amb el menjar (restriccions, atracions, purgues)" },
        { "title": "El meu consum d'alcohol em preocupa o ha causat problemes" },
        { "title": "Trobo difícil concentrar-me, organitzar tasques o acabar el que començo" },
        { "title": "Estic excessivament inquiet o trobo difícil estar quiet" },
        { "title": "Tinc pensaments intrusius repetitius que em causen angoixa" },
        { "title": "Sento la necessitat de repetir certes accions o rituals" },
        { "title": "He tingut períodes d'eufòria o energia excessiva seguits de períodes de depressió" },
        { "title": "He tingut episodis on em sentia inusualment hiperactiu o impulsiu" },
        { "title": "Les meves relacions interpersonals són intenses i inestables" },
        { "title": "Les meves emocions canvien ràpidament i trobo difícil regular-les" }
      ,
        { "title": "Trobo difícil entendre les intencions o emocions d'altres persones" },
        { "title": "Prefereixo les rutines i em sento incòmode quan es veuen interrompudes" }
      ],
      "domainNames": {
        "Estado de ánimo": "Estat d'ànim",
        "Ansiedad": "Ansietat",
        "Ansiedad social": "Ansietat Social",
        "Estrés": "Estrès",
        "Trauma": "Trauma",
        "Sueño": "Son",
        "Alimentación": "Alimentació",
        "Alcohol": "Alcohol",
        "Atención y concentración": "Atenció i Concentració",
        "Obsesiones y compulsiones": "Obsessions i Compulsions",
        "Cambios de ánimo": "Canvis d'Estat d'Ànim",
        "Regulación emocional": "Regulació Emocional"
      ,
        "Rasgos del espectro autista": "Trets de l'Espectre Autista"
      },
      "domainReasons": {
        "Estado de ánimo": "Puntuació alta en indicadors d'estat d'ànim",
        "Ansiedad": "Puntuació alta en indicadors d'ansietat",
        "Ansiedad social": "Puntuació alta en indicadors d'ansietat social",
        "Estrés": "Puntuació alta en indicadors d'estrès percebut",
        "Trauma": "Puntuació alta en indicadors de trauma i estrès posttraumàtic",
        "Sueño": "Puntuació alta en indicadors de problemes de son",
        "Alimentación": "Puntuació alta en indicadors de comportament alimentari",
        "Alcohol": "Puntuació alta en indicadors de consum d'alcohol",
        "Atención y concentración": "Puntuació alta en indicadors d'inatenció i hiperactivitat",
        "Obsesiones y compulsiones": "Puntuació alta en indicadors obsessiu-compulsius",
        "Cambios de ánimo": "Puntuació alta en indicadors de canvi d'estat d'ànim",
        "Regulación emocional": "Puntuació alta en indicadors d'inestabilitat emocional i interpersonal"
      ,
        "Rasgos del espectro autista": "Puntuació alta en indicadors de trets de l'espectre autista"
      },
      "results": {
        "triage_label": "Les teves avaluacions recomanades",
        "triage_desc": "Basat en les teves respostes, recomanem les següents avaluacions:",
        "suggested_wellbeing": "Avaluació de benestar general recomanada per a tothom",
        "suggested_personality": "Avaluació de personalitat recomanada com a complement"
      }
    },
    "ipip300": {
      "name": "IPIP-300",
      "abbr": "IPIP-300",
      "fullName": "IPIP-NEO-300 — Inventari de Personalitat de 300 Ítems",
      "desc": "L'avaluació de personalitat més completa disponible. Mesura 30 facetes agrupades en els cinc grans trets amb alta precisió.",
      "instructions": "Indica amb quina precisió cada afirmació et descriu en general. No hi ha respostes correctes o incorrectes. Si us plau, respon honestament.",
      "sharedOptions": ["Molt inexacte","Inexacte","Ni exacte ni inexacte","Exacte","Molt exacte"],
      "questions": [
        { "title": "M'amoïno per les coses." },
        { "title": "Estic relaxat la major part del temps." },
        { "title": "Temo el pitjor en cada situació." },
        { "title": "Rarament sento ansietat." },
        { "title": "Em poso nerviós fàcilment." },
        { "title": "No m'amoïno per coses que ja han passat." },
        { "title": "M'amoïno pel que podria anar malament." },
        { "title": "Romanc calm enfront de la incertesa." },
        { "title": "Sento ansietat freqüentment." },
        { "title": "No em espanto fàcilment." },
        { "title": "M'irrito fàcilment." },
        { "title": "Rarament perdo els estreps." },
        { "title": "M'enfado quan les coses no surten com vull." },
        { "title": "Sóc difícil de provocar." },
        { "title": "M'irrito fàcilment." },
        { "title": "Mantinc la calma en situacions difícils." },
        { "title": "Moltes coses m'amoïnen." },
        { "title": "No m'enfado fàcilment." },
        { "title": "Exploto quan em provoquen." },
        { "title": "Controlo bé el meu temperament." },
        { "title": "Sovint em sento trist." },
        { "title": "Em sento còmode amb mi mateix." },
        { "title": "Em sento desanimat freqüentment." },
        { "title": "Rarament em sento baix." },
        { "title": "Em sento insatisfet amb la meva vida." },
        { "title": "Generalment em sento content." },
        { "title": "A vegades em sento buit per dins." },
        { "title": "No deixo que els pensaments negatius prenguin el control." },
        { "title": "Tinc la tendència a veure el costat fosc de les coses." },
        { "title": "Gaudeixo de la vida tal com és." },
        { "title": "Em sento avergonyit fàcilment." },
        { "title": "Em sento còmode en situacions socials." },
        { "title": "M'amoïno pel que altres pensen de mi." },
        { "title": "No m'importa ser el centre d'atenció." },
        { "title": "Em sento incòmode quan la gent em mira." },
        { "title": "Rarament em sento cohibit." },
        { "title": "Trobo difícil parlar davant d'un grup." },
        { "title": "No m'amoïno per fer el ridícul." },
        { "title": "Em ruboritzo fàcilment." },
        { "title": "Actuo naturalment amb desconeguts." },
        { "title": "Trobo difícil resistir les temptacions." },
        { "title": "Controlo bé els meus impulsos." },
        { "title": "Menjo o bec massa quan estic estressat." },
        { "title": "Sé quan parar." },
        { "title": "Gasto diners en coses que no necessito." },
        { "title": "Resisteixo bé les temptacions." },
        { "title": "Cedeixo als meus anhels." },
        { "title": "Mantinc els meus hàbits sota control." },
        { "title": "Faig coses de les que després em penedeixo." },
        { "title": "No caic fàcilment en l'excés." },
        { "title": "M'esclato sota pressió." },
        { "title": "Manejo bé les situacions estressants." },
        { "title": "Em sento aclaparat per les dificultats." },
        { "title": "No deixo que els problemes em derrotin." },
        { "title": "Em congelo quan estic sota molta pressió." },
        { "title": "Funciono bé fins i tot sota estrès." },
        { "title": "Trobo difícil recuperar-me dels contratemps." },
        { "title": "Sóc resilient enfront de l'adversitat." },
        { "title": "Perdo el control quan estic sota molta pressió." },
        { "title": "Afronto els problemes amb compostura." },
        { "title": "Faig amics fàcilment." },
        { "title": "Trobo difícil apropar-me als altres." },
        { "title": "Em sento a gust amb la gent." },
        { "title": "Sóc distant amb desconeguts." },
        { "title": "Em connecto ràpidament amb la gent." },
        { "title": "Mantinc la distància amb els altres." },
        { "title": "Tracto a tothom amb calidesa." },
        { "title": "Trobo difícil confiar en gent nova." },
        { "title": "Faig que la gent se senti benvinguda." },
        { "title": "No sóc una persona molt càlida." },
        { "title": "Gaudeixo estant amb gent." },
        { "title": "Prefereixo estar sol." },
        { "title": "M'agrada anar a festes i trobades." },
        { "title": "Evito les multituds." },
        { "title": "Busco la companyia dels altres." },
        { "title": "Gaudeixo de la solitud." },
        { "title": "Em sento còmode en grups grans." },
        { "title": "Prefereixo activitats solitàries." },
        { "title": "M'encanta socialitzar." },
        { "title": "Les trobades socials em drenen." },
        { "title": "Prendre el control de les situacions." },
        { "title": "Em quedo en un segon pla." },
        { "title": "Dic el que penso sense vacil·lar." },
        { "title": "Trobo difícil expressar les meves opinions." },
        { "title": "Assumeixo naturalment el paper de líder." },
        { "title": "Deixo que altres prenguin les decisions." },
        { "title": "Defenso les meves idees fermament." },
        { "title": "Trobo difícil dir no." },
        { "title": "Prendre la iniciativa en les converses." },
        { "title": "Evito imposar el meu punt de vista." },
        { "title": "Estic sempre ocupat." },
        { "title": "Prendre les coses amb calma." },
        { "title": "Visc la vida a un ritme ràpid." },
        { "title": "M'agrada prendre'm el meu temps." },
        { "title": "Faig moltes coses durant el dia." },
        { "title": "Prefereixo un ritme de vida relaxat." },
        { "title": "Em mouc ràpidament d'una activitat a una altra." },
        { "title": "No m'agrada córrer." },
        { "title": "Sóc una persona molt activa." },
        { "title": "M'agrada relaxar-me i no fer res." },
        { "title": "Busco aventura i emocions fortes." },
        { "title": "Prefereixo el que és predictible i segur." },
        { "title": "M'encanten les experiències emocionants." },
        { "title": "Evito situacions arriscades." },
        { "title": "M'agrada provar coses noves i arriscades." },
        { "title": "Prefereixo la rutina a les sorpreses." },
        { "title": "Gaudeixo de la velocitat i l'adrenalina." },
        { "title": "No m'agraden les activitats perilloses." },
        { "title": "M'avorreixo si no hi ha excitació." },
        { "title": "Estic content amb una vida tranquil·la." },
        { "title": "Sóc una persona alegre." },
        { "title": "Rarament estic de bon humor." },
        { "title": "Radiï optimisme." },
        { "title": "No sóc una persona particularment alegre." },
        { "title": "Ric fàcilment." },
        { "title": "Trobo difícil sentir-me entusiasmat." },
        { "title": "Veig el costat positiu de les coses." },
        { "title": "No m'entusiasmo fàcilment." },
        { "title": "Estenc la meva alegria als altres." },
        { "title": "Sóc més seriós que la majoria de la gent." },
        { "title": "Tinc una imaginació molt activa." },
        { "title": "Rarament fantasia." },
        { "title": "M'agrada somiar despert." },
        { "title": "Sóc molt pràctic i no em perdo en fantasies." },
        { "title": "Crec mons imaginaris a la meva ment." },
        { "title": "No perdo el temps amb la imaginació." },
        { "title": "M'encanta el món de les idees." },
        { "title": "Prefereixo els fets a les fantasies." },
        { "title": "La meva ment està plena d'idees creatives." },
        { "title": "No tinc gaire imaginació." },
        { "title": "Aprecio l'art i la bellesa." },
        { "title": "No estic interessat en expressions artístiques." },
        { "title": "M'emociona la música." },
        { "title": "No veig el sentit de l'art abstracte." },
        { "title": "Gaudeixo visitant museus i galeries." },
        { "title": "L'art m'avorreix." },
        { "title": "M'agrada contemplar la natura." },
        { "title": "No presto atenció als detalls estètics." },
        { "title": "Valoro l'expressió artística en totes les seves formes." },
        { "title": "Prefereixo la funció a la bellesa." },
        { "title": "Sento emocions molt intensament." },
        { "title": "Rarament em commociono profundament." },
        { "title": "Les pel·lícules i llibres m'afecten profundament." },
        { "title": "No sóc una persona particularment emocional." },
        { "title": "Puc plorar amb una cançó bonica." },
        { "title": "No deixo que les emocions m'emportin." },
        { "title": "Sento una empatia profunda pels altres." },
        { "title": "Controlo els meus sentiments amb la raó." },
        { "title": "Les meves emocions són variades i intenses." },
        { "title": "Sóc una persona emocionalment reservada." },
        { "title": "M'agrada explorar llocs nous." },
        { "title": "Prefereixo el familiar al desconegut." },
        { "title": "Gaudeixo provant menjars d'altres cultures." },
        { "title": "Em sento còmode amb les meves rutines." },
        { "title": "M'atreu viatjar a llocs exòtics." },
        { "title": "No m'agrada sortir de la meva zona de confort." },
        { "title": "Busco constantment noves experiències." },
        { "title": "Prefereixo fer les coses de la manera habitual." },
        { "title": "M'adapto bé a situacions noves." },
        { "title": "Els canvis em fan sentir incòmode." },
        { "title": "Gaudeixo resolent problemes complexos." },
        { "title": "Evito discussions filosòfiques." },
        { "title": "M'agrada reflexionar sobre idees abstractes." },
        { "title": "No estic interessat en debats intel·lectuals." },
        { "title": "Llegeixo molt sobre temes variats." },
        { "title": "Prefereixo activitats pràctiques a les teòriques." },
        { "title": "M'encanta aprendre coses noves." },
        { "title": "No estic interessat en filosofia." },
        { "title": "Sóc curiós sobre com funciona tot." },
        { "title": "No m'agraden els trencaclosques o endevinalles." },
        { "title": "Crec que les lleis s'han d'adaptar als temps." },
        { "title": "Respecto les tradicions establertes." },
        { "title": "Sóc obert a replantejaments socials." },
        { "title": "Crec que la societat funciona millor amb regles estrictes." },
        { "title": "Qüestiono les normes establertes." },
        { "title": "Prefereixo seguir les convencions socials." },
        { "title": "Suporto canvis socials progressius." },
        { "title": "Penso que és important preservar els costums." },
        { "title": "Crec que l'ordre establert hauria de ser desafiat." },
        { "title": "Les tradicions donen estabilitat a la societat." },
        { "title": "Confio en els altres." },
        { "title": "Desconfio de les intencions de la gent." },
        { "title": "Crec que la majoria de la gent és honesta." },
        { "title": "Sospito que altres tenen motius ocults." },
        { "title": "Dono a la gent el benefici del dubte." },
        { "title": "Crec que la gent intenta aprofitar-se de mi." },
        { "title": "Crec en la bondat de la gent." },
        { "title": "Trobo difícil confiar en algú." },
        { "title": "Suposo que la gent té bones intencions." },
        { "title": "Sóc escèptic amb l'amabilitat dels desconeguts." },
        { "title": "Sóc honest en tot moment." },
        { "title": "A vegades manipulo altres per obtenir el que vull." },
        { "title": "No mentiria per guanyar un avantatge." },
        { "title": "Utilitzo trucs per fer que la gent faci el que vull." },
        { "title": "Tracto els altres justament." },
        { "title": "A vegades faig veure que sóc el que no sóc." },
        { "title": "Dic la veritat encara que sigui incòmode." },
        { "title": "No sempre sóc completament honest." },
        { "title": "Actuo d'acord amb els meus principis." },
        { "title": "Recorro a l'adulació quan em convé." },
        { "title": "M'agrada ajudar els altres." },
        { "title": "No m'impliquo en els problemes d'altres persones." },
        { "title": "Sento satisfacció quan faig alguna cosa per algú." },
        { "title": "Curo els meus propis interessos primer." },
        { "title": "M'importa el benestar dels altres." },
        { "title": "No m'agrada que em demanin favors." },
        { "title": "Ajudo els necessitats sense esperar res a canvi." },
        { "title": "No em sento obligat a ajudar els altres." },
        { "title": "Dono el meu temps generosament." },
        { "title": "Prefereixo no involucrar-me en els assumptes d'altres persones." },
        { "title": "Evito conflictes." },
        { "title": "No m'importa discutir amb la gent." },
        { "title": "Busco acord en les discussions." },
        { "title": "Gaudeixo d'un bon debat encara que es tensi." },
        { "title": "Cedeixo per mantenir la pau." },
        { "title": "Insisteixo en el meu punt de vista encara que causi conflicte." },
        { "title": "Prefereixo l'harmonia a tenir raó." },
        { "title": "No m'importa contradir als altres." },
        { "title": "Intento trobar solucions que satisfacin a tothom." },
        { "title": "Puc ser bastant tossut en les discussions." },
        { "title": "No m'agrada presumir." },
        { "title": "Crec que sóc millor que la majoria de la gent." },
        { "title": "Sóc una persona humil." },
        { "title": "M'agrada ser el centre d'atenció." },
        { "title": "No em considero especial." },
        { "title": "Crec que mereixo més reconeixement del que rebo." },
        { "title": "Reste importància als meus èxits." },
        { "title": "M'agrada parlar dels meus èxits." },
        { "title": "No busco admiració." },
        { "title": "Sé que valgo més que la majoria de la gent." },
        { "title": "Em commociono per la gent que pateix." },
        { "title": "Els problemes d'altres persones no m'afecten gaire." },
        { "title": "Sento compassió pels menys afortunats." },
        { "title": "Crec que tothom hauria de resoldre els seus propis problemes." },
        { "title": "M'importen els desfavorits." },
        { "title": "Les històries tristes no em commouen fàcilment." },
        { "title": "Crec que la societat hauria de protegir els vulnerables." },
        { "title": "La gent exagera els seus problemes." },
        { "title": "Em fa mal veure animals patir." },
        { "title": "No sóc molt sentimental amb les causes socials." },
        { "title": "Sé que puc manejar qualsevol situació." },
        { "title": "Dubto de les meves habilitats." },
        { "title": "Completo tasques amb èxit." },
        { "title": "No em sento preparat per als reptes." },
        { "title": "Confio en la meva capacitat per resoldre problemes." },
        { "title": "Em sento insegur enfrontant tasques difícils." },
        { "title": "Sé fer les coses bé." },
        { "title": "A vegades em sento incompetent." },
        { "title": "Manejo les dificultats amb habilitat." },
        { "title": "Temo no estar a l'altura de les expectatives." },
        { "title": "Mantinc les meves coses organitzades." },
        { "title": "Ho deixo tot desendreçat." },
        { "title": "M'agrada que tot estigui al seu lloc." },
        { "title": "No m'importa el desordre." },
        { "title": "Segueixo una rutina organitzada." },
        { "title": "Sóc bastant desorganitzat." },
        { "title": "Netejo i endreço sovint." },
        { "title": "No m'amoïno per mantenir les coses en ordre." },
        { "title": "M'amoïna el caos al meu voltant." },
        { "title": "El meu espai de treball sol estar desendreçat." },
        { "title": "Compleixo les meves obligacions." },
        { "title": "A vegades no segueixo les regles." },
        { "title": "Mantinc les meves promeses." },
        { "title": "No sempre faig el que s'espera de mi." },
        { "title": "Em prenc les meves responsabilitats seriosament." },
        { "title": "A vegades no compleixo els meus compromisos." },
        { "title": "Faig el que dic que faré." },
        { "title": "No m'amoïno gaire per les regles." },
        { "title": "Sóc una persona de paraula." },
        { "title": "A vegades descuido els meus deures." },
        { "title": "Treballo dur per assolir els meus objectius." },
        { "title": "Em conformo amb el mínim." },
        { "title": "M'esforço per l'excel·lència." },
        { "title": "No m'importa gaire l'èxit." },
        { "title": "Busco constantment millorar-me." },
        { "title": "No sóc gaire ambiciós." },
        { "title": "Tinc objectius clars i treballo per assolir-los." },
        { "title": "Faig només el necessari per sortir-ne." },
        { "title": "Estic motivat per assolir grans coses." },
        { "title": "No poso més esforç del necessari." },
        { "title": "Acabo el que començo." },
        { "title": "Trobo difícil mantenir-me concentrat." },
        { "title": "Persevero fins que la tasca està completa." },
        { "title": "Procrastino sovint." },
        { "title": "Em poso a treballar immediatament." },
        { "title": "Em distreu fàcilment." },
        { "title": "No deixo tasques a mig fer." },
        { "title": "Perdo el temps en coses sense importància." },
        { "title": "Em mantinc centrat en els meus objectius." },
        { "title": "Trobo difícil començar tasques difícils." },
        { "title": "Penso abans d'actuar." },
        { "title": "Actuo sense pensar en les conseqüències." },
        { "title": "Considero totes les opcions abans de decidir." },
        { "title": "Prenc decisions impulsivament." },
        { "title": "Avalo els riscs amb cura." },
        { "title": "Em llanço a les coses sense planificar." },
        { "title": "Planifico abans d'actuar." },
        { "title": "Faig coses sense pensar gaire." },
        { "title": "Reflexiono sobre les possibles conseqüències." },
        { "title": "Dic coses sense considerar les conseqüències." }
      ]
    },
    "pid5": {
      "name": "PID-5",
      "abbr": "PID-5",
      "fullName": "Inventari de Personalitat per al DSM-5",
      "desc": "Avaluació completa dels trets de personalitat patològics segons el model dimensional del DSM-5. Mesura 25 facetes a través de 5 dominis.",
      "instructions": "Llegeix cada afirmació i selecciona com de bé et descriu en general, no només com et sents ara.",
      "sharedOptions": ["Molt fals o sovint fals","De vegades o una mica fals","De vegades o una mica cert","Molt cert o sovint cert"],
      "questions": [
        { "title": "Les meves emocions canvien sense cap raó aparent." },
        { "title": "Els meus estats d'ànim canvien dràsticament d'un moment a l'altre." },
        { "title": "Passo ràpidament de sentir-me feliç a sentir-me trist sense una raó clara." },
        { "title": "Les persones properes em diuen que sóc massa emocional." },
        { "title": "Trobo difícil controlar les meves reaccions emocionals." },
        { "title": "M'amoïno fàcilment en situacions que altres manegen sense problema." },
        { "title": "Els meus sentiments són impredictibles, fins i tot per a mi." },
        { "title": "M'amoïno per gairebé tot." },
        { "title": "Sempre espero que passi alguna cosa dolenta." },
        { "title": "Em poso nerviós molt fàcilment." },
        { "title": "Trobo molt difícil aturar de preocupar-me per les coses." },
        { "title": "Sento una ansietat constant que no puc explicar." },
        { "title": "M'amoïno excessivament per coses que probablement no passaran." },
        { "title": "Pensaments ansiós envaeixen la meva ment freqüentment." },
        { "title": "Temo que les cosin surtin malament en gairebé cada situació." },
        { "title": "Em sento tens i nerviós la major part del temps." },
        { "title": "La idea d'estar sol m'aterra." },
        { "title": "M'amoïno molt que les persones importants de la meva vida m'abandonin." },
        { "title": "Necessito constantment la proximitat de les persones que estimo." },
        { "title": "Em sento desprotegit quan no estic a prop d'algú que m'importa." },
        { "title": "M'angoixa molt estar separat de les persones a les que estic unit." },
        { "title": "Faig tot el que puc per evitar que la gent s'allunyi de mi." },
        { "title": "Quan estic lluny d'algú important per a mi, trobo difícil funcionar." },
        { "title": "Canvio les meves opinions per coincidir amb les dels altres." },
        { "title": "Trobo molt difícil dir no, encara que vulgui." },
        { "title": "Deixo que altres prenguin decisions per mi per evitar conflictes." },
        { "title": "Prefereixo cedir als altres en lloc de mantenir-me ferm." },
        { "title": "M'irrito fàcilment per coses petites." },
        { "title": "Sovint em sento enfadat sense saber exactament per què." },
        { "title": "La gent em diu que sóc una persona de mal caràcter." },
        { "title": "Perdo la paciència amb els altres més del que hauria." },
        { "title": "M'amoïna quan la gent no fa les coses a la meva manera." },
        { "title": "Guio rancor cap a les persones que m'han fet mal." },
        { "title": "Tinc la tendència a reaccionar amb ràbia a la mínima provocació." },
        { "title": "Em poso furiós quan les coses no surten com vull." },
        { "title": "Sento una irritació constant que és difícil de controlar." },
        { "title": "Quan algú m'ofèn, trobo molt difícil deixar-ho anar." },
        { "title": "Em quedo atrapat en els mateixos pensaments una i altra vegada." },
        { "title": "Trobo molt difícil aturar de pensar en els meus problemes." },
        { "title": "Repeteixo mentalment les mateixes situacions sense poder aturar." },
        { "title": "M'obsessiono amb errors que he comès en el passat." },
        { "title": "Quan alguna cosa m'amoïna, no puc aturar de pensar-hi durant dies." },
        { "title": "Els meus pensaments es repeteixen com un disc rajat." },
        { "title": "Trobo difícil deixar anar un tema encara que sàpiga que hauria de fer-ho." },
        { "title": "Segueixo pensant en les mateixes coses encara que no serveixi per a res." },
        { "title": "La gent em diu que penso massa les coses." },
        { "title": "Rarament mostro les meves emocions als altres." },
        { "title": "La gent em diu que semblo fred o emocionalment distant." },
        { "title": "Normalment no sento emocions fortes, ni positives ni negatives." },
        { "title": "Trobo difícil expressar el que sento, fins i tot amb persones properes." },
        { "title": "Situacions que emocionen als altres em deixen indiferent." },
        { "title": "No em commouen les històries tristes o les pel·lícules emocionals." },
        { "title": "Prefereixo no mostrar el que sento perquè ho considero una debilitat." },
        { "title": "Prefereixo estar sol la major part del temps." },
        { "title": "Evito trobades socials sempre que puc." },
        { "title": "No tinc interès en fer nous amics." },
        { "title": "Em sento incòmode quan he d'interactuar amb altres persones." },
        { "title": "Prefereixo fer coses sol que en grup." },
        { "title": "M'aïllo dels altres intencionadament." },
        { "title": "Les converses amb altres persones són exhaurients per a mi." },
        { "title": "Em sento millor quan no he de tractar amb ningú." },
        { "title": "Evito situacions on he de socialitzar." },
        { "title": "No m'importa passar llargs períodes sense contacte social." },
        { "title": "Poc en la vida em dóna plaer real." },
        { "title": "He perdut interès en activitats que solia gaudir." },
        { "title": "Trobo difícil trobar alguna cosa que realment em motivi." },
        { "title": "La vida sembla buida i sense sentit la major part del temps." },
        { "title": "No experimento alegria ni en ocasions que haurien de ser felices." },
        { "title": "Em sento emocionalment buit gairebé tot el temps." },
        { "title": "Res realment m'entusiasma." },
        { "title": "Sento que les meves emocions positives s'han esvaït." },
        { "title": "Em sento inútil com a persona." },
        { "title": "Crec que el món estaria millor sense mi." },
        { "title": "Em sento sense esperança pel futur." },
        { "title": "Em critico constantment per tot el que faig." },
        { "title": "Sento una tristesa profunda que no desapareix." },
        { "title": "Em considero un fracàs en gairebé tot el que intento." },
        { "title": "Crec que les coses mai milloraran per a mi." },
        { "title": "Em sento culpable per coses que no són realment culpa meva." },
        { "title": "Tinc una visió molt negativa de mi mateix." },
        { "title": "Sovint penso que no mereixo ser feliç." },
        { "title": "Em sento inútil i incapaç de fer res bé." },
        { "title": "Ploro freqüentment o tinc ganes de plorar." },
        { "title": "Em sento completament sol encara que estigui envoltat de gent." },
        { "title": "Sento que la meva vida no té propòsit ni direcció." },
        { "title": "Evito relacions romàntiques perquè em fan sentir vulnerable." },
        { "title": "No estic interessat en tenir una relació íntima amb ningú." },
        { "title": "La proximitat emocional amb una altra persona em fa molt incòmode." },
        { "title": "Prefereixo mantenir la gent a una distància emocional." },
        { "title": "Les relacions íntimes em fan sentir ofegat." },
        { "title": "No necessito ningú proper a la meva vida." },
        { "title": "Desconfio de les intencions de la majoria de la gent." },
        { "title": "Crec que la gent té motius ocults la major part del temps." },
        { "title": "Sospito que la gent parla malament de mi a les meves esquenes." },
        { "title": "Trobo difícil creure que algú voldria ajudar-me sense esperar alguna cosa a canvi." },
        { "title": "Estic sempre en guàrdia perquè crec que algú podria intentar aprofitar-se de mi." },
        { "title": "Dubto de la sinceritat dels compliments o lloança que rebo." },
        { "title": "Sento que no puc confiar completament en ningú." },
        { "title": "Sóc bo manipulant gent per obtenir el que vull." },
        { "title": "Utilitzo l'adulació per fer que la gent faci el que vull." },
        { "title": "No m'importa utilitzar altres per assolir els meus objectius." },
        { "title": "Sé exactament què dir per influir en les decisions d'altres persones." },
        { "title": "Gaudeixo controlant gent subtilment." },
        { "title": "Menteixo freqüentment si em beneficia." },
        { "title": "No trobo difícil enganyar la gent." },
        { "title": "Invento històries per sortir-me'n." },
        { "title": "A vegades faig veure que sóc algú que no sóc per impressionar als altres." },
        { "title": "Exagero els meus èxits per fer una bona impressió." },
        { "title": "Retinc informació important quan em beneficia." },
        { "title": "Sóc capaç d'actuar convincentment encara que estigui mentint." },
        { "title": "Ser deshonest no m'amoïna si m'ajuda." },
        { "title": "He enganyat o enganyat altres per obtenir alguna cosa que volia." },
        { "title": "Dic el que la gent vol sentir, encara que no sigui veritat." },
        { "title": "Mereixo un tracte especial perquè sóc millor que la majoria de la gent." },
        { "title": "Crec que sóc una persona extraordinària i que altres haurien de reconèixer-ho." },
        { "title": "La gent no aprecia com de valuós sóc realment." },
        { "title": "Trobo difícil entendre per què altres no veuen com d'especial sóc." },
        { "title": "Sento que estic per sobre de les regles que s'apliquen als altres." },
        { "title": "Em comparo amb altres i gairebé sempre em considero superior." },
        { "title": "Necessito ser el centre d'atenció en situacions socials." },
        { "title": "Faig coses cridaneres perquè la gent em noti." },
        { "title": "M'amoïna quan l'atenció no està centrada en mi." },
        { "title": "Busco constantment l'aprovació i admiració dels altres." },
        { "title": "M'hi esforço molt per impressionar la gent." },
        { "title": "M'agrada fer gestos grandiosos perquè altres parlin de mi." },
        { "title": "Exagero les meves emocions per obtenir una reacció dels altres." },
        { "title": "Em sento buit si no rebo atenció d'altres persones." },
        { "title": "No m'importa si les meves accions fan mal a altres persones." },
        { "title": "La gent diu que sóc insensible al patiment dels altres." },
        { "title": "No sento remordiments quan faig alguna cosa que fa mal a algú." },
        { "title": "Les llàgrimes d'altres persones no em commouen." },
        { "title": "Trobo difícil entendre per què la gent s'ofèn tan fàcilment." },
        { "title": "No m'amoïno pels sentiments d'altres persones si no m'afecten directament." },
        { "title": "Puc ser cruel si la situació ho requereix." },
        { "title": "No estic interessat en consolar algú que està patint." },
        { "title": "Penso que la gent és massa sensible avui dia." },
        { "title": "No perdo el son per haver tractat malament a algú." },
        { "title": "M'han dit que sóc una persona dura i implacable." },
        { "title": "Considero l'empatia una debilitat." },
        { "title": "No m'afecta veure altres patir les conseqüències dels seus errors." },
        { "title": "Sempre poso les meves pròpies necessitats primer independentment de com afecti als altres." },
        { "title": "Freqüentment no compleixo els meus compromisos i obligacions." },
        { "title": "Sóc descuidat amb les meves responsabilitats financeres." },
        { "title": "La gent no pot comptar amb mi per fer el que dic que faré." },
        { "title": "Deixo tasques importants sense acabar freqüentment." },
        { "title": "No m'amoïno per complir terminis." },
        { "title": "Tinc la tendència a deixar que altres s'encarreguin de les meves responsabilitats." },
        { "title": "Trobo difícil mantenir una feina o seguir un pla a llarg termini." },
        { "title": "Actuo sense pensar en les conseqüències." },
        { "title": "Faig coses impulsivament de les que després em penedeixo." },
        { "title": "Trobo molt difícil resistir els meus impulsos." },
        { "title": "Prenc decisions precipitades sense considerar totes les opcions." },
        { "title": "Dic coses sense pensar i després desitjo no haver-les dit." },
        { "title": "No puc esperar per les coses; necessito gratificació immediata." },
        { "title": "Em distreu molt fàcilment." },
        { "title": "Trobo difícil concentrar-me en una tasca durant més d'uns minuts." },
        { "title": "Perdo constantment el fil del que penso." },
        { "title": "Començo moltes coses però trobo difícil acabar-les perquè em distreu." },
        { "title": "Qualsevol soroll o estímul extern desvia la meva atenció." },
        { "title": "Trobo difícil seguir una conversa llarga sense perdre el focus." },
        { "title": "La meva ment divaga quan hauria d'estar centrada en alguna cosa." },
        { "title": "Oblido freqüentment què estava fent." },
        { "title": "Necessito que em repeteixin les instruccions perquè no puc retenir-les." },
        { "title": "Gaudeixo fent coses perilloses." },
        { "title": "Busco emocions fortes encara que impliquin risc." },
        { "title": "No m'importa posar-me en situacions arriscades." },
        { "title": "M'avorreixo fàcilment si no hi ha adrenalina involucrada." },
        { "title": "He fet coses temeràries que podrien haver-me causat mal." },
        { "title": "Les activitats perilloses són emocionants per a mi." },
        { "title": "Condueixo més ràpid del permès perquè m'agrada la velocitat." },
        { "title": "He utilitzat substàncies sense preocupar-me per les conseqüències." },
        { "title": "Ignoro els senyals d'advertència i continuo amb el que estic fent." },
        { "title": "Accepto reptes que la majoria de la gent consideraria massa arriscats." },
        { "title": "Necessito experiències intenses per sentir-me viu." },
        { "title": "M'avorreixo amb la rutina i busco coses noves i impredictibles per fer." },
        { "title": "No considero els perills abans d'actuar." },
        { "title": "La idea de fer alguna cosa prohibida m'atrau." },
        { "title": "Tot ha de ser perfecte o no estic satisfet." },
        { "title": "Trobo impossible acceptar treball que no sigui impecable." },
        { "title": "Passo massa temps en detalls insignificants per assegurar-me que estan bé." },
        { "title": "Els meus estàndards són tan alts que sovint no els compleixo." },
        { "title": "Insisteixo que les coses es facin exactament com jo vull." },
        { "title": "Trobo difícil delegar tasques perquè ningú les fa tan bé com jo." },
        { "title": "El meu perfeccionisme interfereix amb la meva capacitat per acabar coses a temps." },
        { "title": "Em sento molt malament amb mi mateix quan cometo el més mínim error." },
        { "title": "Tinc regles molt estrictes sobre com s'han de fer les coses." },
        { "title": "No tolero la mediocritat, ni en mi mateix ni en els altres." },
        { "title": "Crec que tinc un sisè sentit que em permet saber coses que altres no saben." },
        { "title": "He tingut experiències que considero sobrenaturals o paranormals." },
        { "title": "Crec que puc influir en els esdeveniments només pensant-hi." },
        { "title": "Sento que hi ha forces ocultes controlant el que passa al món." },
        { "title": "Crec que les coincidències són missatges de l'univers dirigits a mi." },
        { "title": "He sentit que tinc poders o habilitats especials que altres no posseeixen." },
        { "title": "Crec que els meus pensaments poden afectar directament la realitat." },
        { "title": "Sento una connexió especial amb el sobrenatural o el místic." },
        { "title": "La gent em considera una persona estranya o excèntrica." },
        { "title": "La meva manera de pensar és molt diferent de la de la majoria de la gent." },
        { "title": "Tinc idees que altres consideren estranyes o fora del comú." },
        { "title": "El meu comportament fa que la gent se senti incòmode." },
        { "title": "Dic coses que altres consideren estranyes o sense sentit." },
        { "title": "Tinc interessos o aficions que la majoria de la gent troba molt peculiars." },
        { "title": "M'expresso de maneres que altres no entenen." },
        { "title": "M'han dit que la meva manera de veure el món és molt inusual." },
        { "title": "La gent em mira estranyament per com em comporto." },
        { "title": "Les meves reaccions a les situacions són diferents de les d'altres persones." },
        { "title": "Tinc un estil personal que altres consideren molt fora de la norma." },
        { "title": "Sovint penso en coses que la majoria de la gent mai imaginaria." },
        { "title": "Em sento fonamentalment diferent de totes les altres persones." },
        { "title": "A vegades sento que les coses al meu voltant no són reals." },
        { "title": "He tingut la sensació d'estar fora del meu cos." },
        { "title": "A vegades veig coses que altres no poden veure." },
        { "title": "He sentit veus o sons que altres no sentien." },
        { "title": "A vegades sento que el meu cos canvia de forma o mida." },
        { "title": "He tingut experiències en què em sentia separat de mi mateix." },
        { "title": "A vegades el meu entorn sembla distorsionat o irreal." },
        { "title": "He sentit que els meus pensaments no em pertanyen." },
        { "title": "A vegades perdo la sensació d'on acabo jo i comença el món exterior." },
        { "title": "He tingut sensacions estranyes al meu cos que no puc explicar." },
        { "title": "A vegades sento que la realitat es fragmenta al meu voltant." },
        { "title": "He experimentat moments en què no reconeixia el meu propi reflex." }
      ]
    },
    "ipip_mmpi": {
      "name": "IPIP-Clínic",
      "abbr": "IPIP-Clínic",
      "fullName": "Escales Clíniques IPIP (equivalents a les escales MMPI)",
      "desc": "Avaluació clínica completa de personalitat utilitzant ítems de domini públic. Mesura 10 escales clíniques i 3 escales de validesa equivalents a les del MMPI.",
      "instructions": "Respon vertader o fals a cada afirmació com generalment s'aplica a tu. Sigues honest; no hi ha respostes correctes o incorrectes.",
      "sharedOptions": ["Fals","Vertader"],
      "questions": [
        { "title": "Mai he dit una mentida." },
        { "title": "M'amoïno molt per la meva salut." },
        { "title": "Em sento trist la major part del temps." },
        { "title": "Crec que la gent parla de mi a les meves esquenes." },
        { "title": "Tinc més energia que la majoria de la gent." },
        { "title": "Sento veus que altres no poden sentir." },
        { "title": "Em considero una persona molt equilibrada." },
        { "title": "A vegades tinc mals de cap sense cap raó aparent." },
        { "title": "Les regles em semblen avorrides i innecessàries." },
        { "title": "Estic molt interessat en activitats artístiques i culturals." },
        { "title": "Comprovo les coses diverses vegades per assegurar-me que estan bé." },
        { "title": "A vegades tinc pensaments molt estranys." },
        { "title": "Prefereixo estar sol que en companyia d'altres." },
        { "title": "Sóc sempre amable amb cada persona que conec." },
        { "title": "Sento que l'estómac m'amoïna freqüentment." },
        { "title": "El futur sembla fosc i sense esperança per a mi." },
        { "title": "Sento que em segueixen o em vigilen." },
        { "title": "Tinc la tendència a ignorar els meus problemes fins que desapareixen." },
        { "title": "Desconfio de les intencions de la majoria de la gent." },
        { "title": "Començo molts projectes alhora sense acabar-los." },
        { "title": "Estic satisfet amb la meva vida tal com és." },
        { "title": "He tingut problemes amb persones en posicions d'autoritat." },
        { "title": "Em considero una persona molt emocionalment sensible." },
        { "title": "Trobo molt difícil prendre decisions importants." },
        { "title": "A vegades em sento desconnectat de la realitat." },
        { "title": "Trobo difícil començar converses amb desconeguts." },
        { "title": "Mai he sentit ràbia cap a ningú." },
        { "title": "Freqüentment tinc dolors en diferents parts del cos." },
        { "title": "He perdut interès en coses que solia gaudir." },
        { "title": "Crec que tinc poders especials que altres no tenen." },
        { "title": "Les meves relacions familiars són molt bones." },
        { "title": "A vegades sento formigueig o entumiment sense raó mèdica." },
        { "title": "Sento que les persones properes conspiren contra mi." },
        { "title": "Em sento impulsat a estar sempre en moviment." },
        { "title": "M'agrada trencar les regles quan puc." },
        { "title": "Gaudeixo llegint poesia i literatura." },
        { "title": "M'amoïno excessivament per coses petites." },
        { "title": "A vegades sento que el meu cos canvia de forma o mida." },
        { "title": "Em sento incòmode en grans trobades socials." },
        { "title": "Mai he pres alguna cosa que no em pertanyia." },
        { "title": "M'amoïno per tenir una malaltia greu no diagnosticada." },
        { "title": "Ploro més fàcilment que abans." },
        { "title": "A vegades sento que algú controla els meus pensaments." },
        { "title": "Generalment manejo bé les situacions difícils." },
        { "title": "Quan tinc un conflicte, prefereixo no pensar-hi." },
        { "title": "Sento que la gent em mira amb males intencions." },
        { "title": "Les meves idees canvien molt ràpidament d'un tema a un altre." },
        { "title": "Sovint actuo sense pensar en les conseqüències." },
        { "title": "Em commociono fàcilment amb històries tristes." },
        { "title": "Necessito que tot estigui perfectament organitzat." },
        { "title": "A vegades sento els meus propis pensaments com si fossin parlats en veu alta." },
        { "title": "Evito situacions on he de parlar en públic." },
        { "title": "Sempre dic la veritat, sense excepció." },
        { "title": "Sento que el cor em batega irregularment freqüentment." },
        { "title": "Em sento cansat i sense energia la major part del dia." },
        { "title": "He tingut experiències sobrenaturals que no puc explicar." },
        { "title": "Em considero una persona bastant competent." },
        { "title": "A vegades em sento marejat o dèbil sense una raó clara." },
        { "title": "Estic segur que hi ha gent que vol fer-me mal." },
        { "title": "Trobo difícil estar quiet durant molt de temps." },
        { "title": "No m'importa gaire seguir normes socials." },
        { "title": "Gaudeixo de les flors i la natura més que la majoria de la gent." },
        { "title": "Tinc pensaments repetitius que no puc aturar." },
        { "title": "A vegades sento que les coses al meu voltant no són reals." },
        { "title": "Trobo difícil fer nous amics." },
        { "title": "Mai he arribat tard a una cita o compromís." },
        { "title": "Veig el metge més freqüentment que la majoria de la gent." },
        { "title": "Em sento inútil o com una càrrega per als altres." },
        { "title": "Veig coses que altres no poden veure." },
        { "title": "Sento que la meva família em dóna suport en tot." },
        { "title": "A vegades perdo sensació en parts del meu cos." },
        { "title": "Crec que algú intenta emmetzinar-me o fer-me mal." },
        { "title": "Dormo molt menys que altres persones i em sento bé." },
        { "title": "He tingut problemes legals a causa del meu comportament." },
        { "title": "Estic interessat en la moda i la decoració d'interiors." },
        { "title": "Sento una ansietat constant que no puc explicar." },
        { "title": "A vegades sento que no sóc jo mateix." },
        { "title": "Prefereixo activitats solitàries com llegir o caminar sol." },
        { "title": "Mai he sentit enveja de ningú." },
        { "title": "Freqüentment em sento nàusees o tinc mal d'estómac." },
        { "title": "A vegades penso que seria millor no estar viu." },
        { "title": "Sento que puc predir el futur." },
        { "title": "Em considero una persona emocionalment estable." },
        { "title": "He tingut desmais o episodis de pèrdua de consciència." },
        { "title": "Crec que els meus companys de treball parlen malament de mi." },
        { "title": "Faig coses arriscades només per l'emoció." },
        { "title": "L'honestedat no sempre és la millor política." },
        { "title": "Gaudeixo cuinant i preparant plats elaborats." },
        { "title": "Sento que alguna cosa dolenta passarà, però no sé què." },
        { "title": "Els meus pensaments a vegades es barregen d'una manera confusa." },
        { "title": "Em poso nerviós quan estic envoltat de molta gent." },
        { "title": "Mai he parlat malament d'una altra persona." },
        { "title": "M'amoïno que el meu cos no funcioni correctament." },
        { "title": "Trobo difícil concentrar-me en el que estic fent." },
        { "title": "He sentit la presència d'éssers que no hi són." },
        { "title": "No tinc cap problema important a la meva vida." },
        { "title": "A vegades l'esquena em fa molt mal sense cap raó aparent." },
        { "title": "Crec que hi ha gent que m'espia." },
        { "title": "Tinc grans plans per al meu futur que altres no entenen." },
        { "title": "M'avorreixo fàcilment amb rutines i monotonia." },
        { "title": "Em considero una persona amb gran sensibilitat artística." },
        { "title": "Em rento les mans o comprovo panys més del necessari." },
        { "title": "Sento que la meva ment funciona diferent de la d'altres persones." },
        { "title": "Evito festes i esdeveniments socials quan puc." },
        { "title": "Sempre mantinc absolutament totes les meves promeses." },
        { "title": "Presto molta atenció a qualsevol canvi al meu cos." },
        { "title": "Em sento culpable per coses que he fet en el passat." },
        { "title": "Sento que puc comunicar-me amb els morts." },
        { "title": "Crec que la majoria de la gent és bona i digna de confiança." },
        { "title": "Quan estic estressat, tinc mals de cap severs." },
        { "title": "Sento que la gent es riu de mi quan no estic present." },
        { "title": "Em sento capaç de fer qualsevol cosa que em proposi." },
        { "title": "He mentit freqüentment per sortir de problemes." },
        { "title": "Gaudeixo veient programes sobre art, història o cultura." },
        { "title": "Tinc por de perdre el control de les meves accions." },
        { "title": "A vegades sento que algú altre controla els meus moviments." },
        { "title": "Prefereixo treballar sol que en equip." },
        { "title": "Mai he sentit el desig de trencar alguna cosa per frustració." },
        { "title": "Crec que em poso malalt més sovint que la majoria de la gent." },
        { "title": "No gaudeixo del menjar com solia." },
        { "title": "He tingut visions místiques o experiències intenses." },
        { "title": "Els meus amics dirien que sóc una persona adaptable." },
        { "title": "A vegades sento un nus a la gola sense raó mèdica." },
        { "title": "Crec que els meus veïns em desitgen mal." },
        { "title": "Parlo molt ràpid i la gent a vegades no m'entén." },
        { "title": "Trobo difícil mantenir una feina durant molt de temps." },
        { "title": "M'emociono fàcilment escoltant música." },
        { "title": "Necessito comprovar diverses vegades si he tancat la porta." },
        { "title": "Sento que hi ha alguna cosa fonamentalment diferent en mi." },
        { "title": "Em sento més còmode estant a casa que sortint." },
        { "title": "Mai he desobeït una regla o regulació." },
        { "title": "Tinc dolors musculars freqüents sense causa coneguda." },
        { "title": "El meu son és irregular; dormo massa o massa poc." },
        { "title": "A vegades sento que la meva ànima surt del meu cos." },
        { "title": "Puc resoldre la majoria dels meus problemes sense ajuda." },
        { "title": "Tinc problemes de visió que els metges no poden explicar." },
        { "title": "Sento que hi ha una conspiració organitzada contra mi." },
        { "title": "Em sento ple d'energia i vitalitat." },
        { "title": "No em sento culpable quan faig alguna cosa dolenta." },
        { "title": "M'agrada cuidar dels altres i atendre les seves necessitats." },
        { "title": "Sento por intensa sense saber exactament de què." },
        { "title": "A vegades no reconec la meva pròpia imatge al mirall." },
        { "title": "Trobo exhaurient socialitzar durant molt de temps." },
        { "title": "Mai he tingut un pensament inadequat." },
        { "title": "Freqüentment sento que em falta l'aire." },
        { "title": "Trobo difícil trobar la motivació per fer coses." },
        { "title": "He sentit que estic posseït per una força externa." },
        { "title": "Em sento còmode amb mi mateix la major part del temps." },
        { "title": "Quan estic sota pressió, experimento tremolors o tics." },
        { "title": "Crec que certes persones em segueixen o em rastregen." },
        { "title": "M'impatiento fàcilment quan les coses van a poc a poc." },
        { "title": "He destruït propietat d'altres persones quan estava enfadat." },
        { "title": "Gaudeixo de converses profundes sobre emocions i sentiments." },
        { "title": "Trobo difícil relaxar-me; estic sempre tens." },
        { "title": "Tinc dificultat per distingir entre somnis i realitat." },
        { "title": "Trobo difícil mirar la gent als ulls." },
        { "title": "Mai he sentit mandra o he evitat una responsabilitat." },
        { "title": "Sento que els meus òrgans interns no funcionen correctament." },
        { "title": "La vida no ha tingut gaire sentit per a mi últimament." },
        { "title": "He rebut missatges especials a través de la televisió o la ràdio." },
        { "title": "Crec que tinc bon judici per prendre decisions." },
        { "title": "A vegades temporalment no puc moure alguna part del meu cos." },
        { "title": "Sento que els meus enemics volen arruïnar la meva reputació." },
        { "title": "Sovint gasto diners impulsivament." },
        { "title": "No m'importa fer mal als sentiments d'altres persones si és necessari." },
        { "title": "M'agrada explorar les meves pròpies emocions i les dels altres." },
        { "title": "Tinc rituals o hàbits que he de seguir a la lletra." },
        { "title": "A vegades sento que no tinc identitat pròpia." },
        { "title": "Gaudeixo d'activitats tranquil·les més que de socials." },
        { "title": "Mai he tallat la cua o pres un atall inadequat." },
        { "title": "M'amoïno constantment per si tinc un problema de salut." },
        { "title": "Sento que he decebut les persones que m'importen." },
        { "title": "He sentit que la meva ment està sent llegida per altres persones." },
        { "title": "M'adapto bé als canvis de la meva vida." },
        { "title": "A vegades tinc episodis de dolor intens sense diagnòstic mèdic." },
        { "title": "Sento que no puc confiar completament en ningú." },
        { "title": "Necessito estar constantment ocupat fent coses." },
        { "title": "He utilitzat altres persones per obtenir el que vull." },
        { "title": "Sento que els meus dubtes i temors a vegades em paralitzen." },
        { "title": "A vegades em sento completament aïllat del món que m'envolta." }
      ]
    }
  }
};