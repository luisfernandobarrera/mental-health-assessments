const LANG_FR = {
  ui: {
    appTitle: "Évaluations de Santé Mentale",
    appSubtitle: "Outils d'auto-évaluation psychologique",
    tabTests: "Tests",
    tabHistory: "Historique",
    welcome: "Bienvenue. Sélectionnez une évaluation pour commencer.",
    startTest: "Commencer le test",
    nextQuestion: "Suivant",
    prevQuestion: "Précédent",
    viewResults: "Voir les résultats",
    question: "Question",
    of: "sur",
    items: "items",
    backToTests: "Retour aux tests",
    repeatTest: "Refaire le test",
    viewHistory: "Voir l'historique",
    otherTests: "Autres tests",
    detailByItem: "Détail par item",
    helpResources: "Ressources d'aide",
    helpText: "Si vous traversez une crise émotionnelle, cherchez de l'aide professionnelle. Numéro d'urgence : 3114 (France) ou contactez un professionnel de santé mentale.",
    disclaimerTitle: 'Note importante :',
    disclaimerText: 'Ce test est un outil d\'auto-évaluation et ne remplace pas le diagnostic d\'un professionnel de santé mentale. Si vous sentez que vous avez besoin d\'aide, veuillez consulter un spécialiste.',
    privacyTitle: 'Votre vie privée :',
    privacyText: 'Vos résultats sont stockés uniquement dans votre navigateur (localStorage). Aucune donnée n\'est envoyée à un serveur ni ne quitte votre ordinateur.',
    noRecords: "Aucun enregistrement sauvegardé.",
    completeFirst: "Complétez au moins un test pour voir l'historique.",
    goToTests: "Aller aux tests",
    trend: "Tendance",
    all: "Tous",
    clearHistory: "Effacer l'historique",
    clearConfirm: "Êtes-vous sûr(e) de vouloir effacer tout l'historique ? Cette action est irréversible.",
    score: "Score",
    outOf: "sur",
    disclaimer: "Cet outil est uniquement indicatif et ne remplace pas une évaluation professionnelle. Consultez un spécialiste en santé mentale pour un diagnostic approprié.",
    resumePrompt: "Vous avez un test en cours",
    continueTest: "Continuer le test",
    questionsAnswered: "questions répondues",
    inProgress: "En cours",
    testBy: "Tests",
  },

  scales: {
    agreement5: [
      "Tout à fait en désaccord",
      "En désaccord",
      "Ni en accord ni en désaccord",
      "D'accord",
      "Tout à fait d'accord"
    ],
    frequency4: [
      "Jamais",
      "Plusieurs jours",
      "Plus de la moitié des jours",
      "Presque tous les jours"
    ],
    frequency5: [
      "Jamais",
      "Presque jamais",
      "Parfois",
      "Assez souvent",
      "Très souvent"
    ],
    severity4: [
      "Pas du tout",
      "Légèrement",
      "Modérément",
      "Sévèrement"
    ],
    severity5: [
      "Pas du tout",
      "Un peu",
      "Modérément",
      "Beaucoup",
      "Extrêmement"
    ],
    yesNo: ["Non", "Oui"],
  },

  tests: {
    bdi: {
      name: "BDI-II",
      fullName: "Inventaire de Dépression de Beck-II",
      desc: "Évalue la présence et la sévérité des symptômes dépressifs au cours des deux dernières semaines.",
      instructions: "Lisez chaque groupe d'affirmations attentivement et sélectionnez celle qui décrit le mieux comment vous vous êtes senti(e) au cours des deux dernières semaines, y compris aujourd'hui.",
      questions: [
        {
          title: "Tristesse",
          options: [
            "Je ne me sens pas triste.",
            "Je me sens triste une grande partie du temps.",
            "Je me sens triste tout le temps.",
            "Je me sens si triste ou malheureux(se) que je ne peux pas le supporter."
          ]
        },
        {
          title: "Pessimisme",
          options: [
            "Je ne suis pas découragé(e) face à mon avenir.",
            "Je me sens plus découragé(e) face à mon avenir qu'avant.",
            "Je ne m'attends pas à ce que les choses s'arrangent pour moi.",
            "Je sens que mon avenir est sans espoir et qu'il ne fera qu'empirer."
          ]
        },
        {
          title: "Échec",
          options: [
            "Je ne me sens pas comme un(e) raté(e).",
            "J'ai échoué plus que je n'aurais dû.",
            "Quand je regarde en arrière, je vois beaucoup d'échecs.",
            "J'ai le sentiment d'être un(e) raté(e) complet(e)."
          ]
        },
        {
          title: "Perte de plaisir",
          options: [
            "Je retire autant de plaisir qu'avant des choses que j'apprécie.",
            "Je ne profite pas des choses autant qu'avant.",
            "Je retire très peu de plaisir des choses que j'avais l'habitude d'apprécier.",
            "Je ne retire aucun plaisir des choses que j'avais l'habitude d'apprécier."
          ]
        },
        {
          title: "Sentiments de culpabilité",
          options: [
            "Je ne me sens pas particulièrement coupable.",
            "Je me sens coupable de beaucoup de choses que j'ai faites ou que j'aurais dû faire.",
            "Je me sens assez coupable la plupart du temps.",
            "Je me sens coupable tout le temps."
          ]
        },
        {
          title: "Sentiments de punition",
          options: [
            "Je n'ai pas le sentiment d'être puni(e).",
            "Je sens que je pourrais être puni(e).",
            "Je m'attends à être puni(e).",
            "J'ai le sentiment d'être puni(e)."
          ]
        },
        {
          title: "Insatisfaction envers soi-même",
          options: [
            "Mes sentiments envers moi-même n'ont pas changé.",
            "J'ai perdu confiance en moi.",
            "Je suis déçu(e) de moi-même.",
            "Je ne m'aime pas."
          ]
        },
        {
          title: "Autocritique",
          options: [
            "Je ne me critique pas ou ne me blâme pas plus que d'habitude.",
            "Je suis plus critique envers moi-même que je ne l'étais.",
            "Je me critique pour toutes mes fautes.",
            "Je me blâme pour tout ce qui va mal."
          ]
        },
        {
          title: "Pensées ou désirs suicidaires",
          options: [
            "Je n'ai aucune pensée de me tuer.",
            "J'ai des pensées de me tuer, mais je ne les mettrais pas à exécution.",
            "Je voudrais me tuer.",
            "Je me tuerais si j'en avais l'occasion."
          ]
        },
        {
          title: "Pleurs",
          options: [
            "Je ne pleure pas plus que d'habitude.",
            "Je pleure plus que d'habitude.",
            "Je pleure pour la moindre petite chose.",
            "J'ai envie de pleurer mais je n'y arrive pas."
          ]
        },
        {
          title: "Agitation",
          options: [
            "Je ne suis pas plus agité(e) ou tendu(e) que d'habitude.",
            "Je me sens plus agité(e) ou tendu(e) que d'habitude.",
            "Je suis si agité(e) ou tendu(e) que j'ai du mal à rester tranquille.",
            "Je suis si agité(e) ou tendu(e) que je dois sans cesse bouger ou faire quelque chose."
          ]
        },
        {
          title: "Perte d'intérêt",
          options: [
            "Je n'ai pas perdu d'intérêt pour les activités ou les gens.",
            "Je m'intéresse moins aux gens ou aux choses qu'avant.",
            "J'ai perdu presque tout intérêt pour les gens ou les choses.",
            "Il m'est difficile de m'intéresser à quoi que ce soit."
          ]
        },
        {
          title: "Indécision",
          options: [
            "Je prends des décisions aussi bien que d'habitude.",
            "Il m'est plus difficile de prendre des décisions que d'habitude.",
            "J'ai beaucoup plus de difficulté à prendre des décisions qu'avant.",
            "J'ai du mal à prendre n'importe quelle décision."
          ]
        },
        {
          title: "Dévalorisation",
          options: [
            "Je ne me sens pas sans valeur.",
            "Je ne me considère pas aussi valable et utile qu'avant.",
            "Je me sens moins valable par rapport aux autres.",
            "Je sens que je ne vaux rien."
          ]
        },
        {
          title: "Perte d'énergie",
          options: [
            "J'ai autant d'énergie que d'habitude.",
            "J'ai moins d'énergie qu'avant.",
            "Je n'ai pas assez d'énergie pour faire grand-chose.",
            "Je n'ai pas assez d'énergie pour faire quoi que ce soit."
          ]
        },
        {
          title: "Changements dans les habitudes de sommeil",
          options: [
            "Je n'ai pas remarqué de changement dans mes habitudes de sommeil.",
            "Je dors un peu plus ou un peu moins que d'habitude.",
            "Je dors beaucoup plus ou beaucoup moins que d'habitude.",
            "Je dors presque toute la journée ou je me réveille 1 à 2 heures trop tôt et je ne peux pas me rendormir."
          ]
        },
        {
          title: "Irritabilité",
          options: [
            "Je ne suis pas plus irritable que d'habitude.",
            "Je suis plus irritable que d'habitude.",
            "Je suis beaucoup plus irritable que d'habitude.",
            "Je suis irritable tout le temps."
          ]
        },
        {
          title: "Changements d'appétit",
          options: [
            "Je n'ai pas remarqué de changement dans mon appétit.",
            "Mon appétit est un peu moindre ou un peu plus grand que d'habitude.",
            "Mon appétit est beaucoup moindre ou beaucoup plus grand que d'habitude.",
            "Je n'ai pas d'appétit du tout ou j'ai constamment envie de manger."
          ]
        },
        {
          title: "Difficulté de concentration",
          options: [
            "Je peux me concentrer aussi bien que d'habitude.",
            "Je ne peux pas me concentrer aussi bien que d'habitude.",
            "Il m'est difficile de me concentrer longtemps sur quoi que ce soit.",
            "Je ne peux me concentrer sur rien."
          ]
        },
        {
          title: "Fatigue",
          options: [
            "Je ne suis pas plus fatigué(e) que d'habitude.",
            "Je me fatigue plus facilement que d'habitude.",
            "Je suis trop fatigué(e) pour faire beaucoup de choses que je faisais avant.",
            "Je suis trop fatigué(e) pour faire la plupart des choses que je faisais avant."
          ]
        },
        {
          title: "Perte d'intérêt pour le sexe",
          options: [
            "Je n'ai pas remarqué de changement récent dans mon intérêt pour le sexe.",
            "Je suis moins intéressé(e) par le sexe qu'avant.",
            "Je suis beaucoup moins intéressé(e) par le sexe maintenant.",
            "J'ai complètement perdu tout intérêt pour le sexe."
          ]
        }
      ],
      results: {
        minimal: {
          label: "Minimale",
          desc: "Votre score suggère un niveau minimal de dépression. Il est normal de connaître des hauts et des bas émotionnels."
        },
        mild: {
          label: "Légère",
          desc: "Votre score suggère des symptômes dépressifs légers. Envisagez de consulter un professionnel si les symptômes persistent."
        },
        moderate: {
          label: "Modérée",
          desc: "Votre score suggère des symptômes dépressifs modérés. Il est recommandé de consulter un professionnel de santé mentale."
        },
        severe: {
          label: "Sévère",
          desc: "Votre score suggère des symptômes dépressifs sévères. Il est important de chercher de l'aide professionnelle dès que possible."
        }
      }
    },

    bai: {
      name: "BAI",
      fullName: "Inventaire d'Anxiété de Beck",
      desc: "Évalue la sévérité des symptômes d'anxiété au cours de la dernière semaine.",
      instructions: "Indiquez à quel point chaque symptôme vous a gêné(e) au cours de la dernière semaine, y compris aujourd'hui.",
      questions: [
        { title: "Engourdissement ou picotements" },
        { title: "Bouffées de chaleur" },
        { title: "Tremblements dans les jambes" },
        { title: "Incapacité de se détendre" },
        { title: "Crainte que le pire se produise" },
        { title: "Étourdissements ou vertiges" },
        { title: "Battements cardiaques forts et rapides" },
        { title: "Instabilité" },
        { title: "Terreur ou frayeur" },
        { title: "Nervosité" },
        { title: "Sensation de blocage" },
        { title: "Tremblements des mains" },
        { title: "Agitation, insécurité" },
        { title: "Peur de perdre le contrôle" },
        { title: "Sensation d'étouffement" },
        { title: "Peur de mourir" },
        { title: "Peur" },
        { title: "Problèmes digestifs" },
        { title: "Évanouissements" },
        { title: "Rougissement du visage" },
        { title: "Transpiration, chaude ou froide" }
      ],
      results: {
        minimal: {
          label: "Minimale",
          desc: "Votre score suggère un niveau minimal d'anxiété."
        },
        mild: {
          label: "Légère",
          desc: "Votre score suggère une anxiété légère. Surveillez vos symptômes."
        },
        moderate: {
          label: "Modérée",
          desc: "Votre score suggère une anxiété modérée. Envisagez de consulter un professionnel."
        },
        severe: {
          label: "Sévère",
          desc: "Votre score suggère une anxiété sévère. Il est recommandé de chercher de l'aide professionnelle."
        }
      }
    },

    gad7: {
      name: "GAD-7",
      fullName: "Échelle du Trouble d'Anxiété Généralisée-7",
      desc: "Évalue la sévérité de l'anxiété généralisée au cours des deux dernières semaines.",
      instructions: "Au cours des 2 dernières semaines, à quelle fréquence avez-vous été gêné(e) par les problèmes suivants ?",
      questions: [
        { title: "Se sentir nerveux(se), anxieux(se) ou à bout de nerfs" },
        { title: "Ne pas être capable d'arrêter ou de contrôler ses inquiétudes" },
        { title: "S'inquiéter trop à propos de différentes choses" },
        { title: "Difficulté à se détendre" },
        { title: "Être si agité(e) qu'il est difficile de rester assis(e)" },
        { title: "S'irriter ou se mettre en colère facilement" },
        { title: "Avoir peur comme si quelque chose de terrible allait se produire" }
      ],
      results: {
        minimal: {
          label: "Minimale",
          desc: "Votre score suggère un niveau minimal d'anxiété."
        },
        mild: {
          label: "Légère",
          desc: "Votre score suggère une anxiété légère."
        },
        moderate: {
          label: "Modérée",
          desc: "Votre score suggère une anxiété modérée. Envisagez de consulter un professionnel."
        },
        severe: {
          label: "Sévère",
          desc: "Votre score suggère une anxiété sévère. Il est recommandé de chercher de l'aide professionnelle."
        }
      }
    },

    msibpd: {
      name: "MSI-BPD",
      fullName: "Inventaire de Dépistage McLean pour le Trouble de la Personnalité Borderline",
      desc: "Outil de dépistage des traits associés au trouble de la personnalité borderline.",
      instructions: "Répondez oui ou non à chacune des questions suivantes.",
      questions: [
        { title: "Vous êtes-vous déjà coupé(e), brûlé(e) ou blessé(e) volontairement ?" },
        { title: "Avez-vous déjà tenté de vous suicider ?" },
        { title: "Avez-vous eu au moins deux relations (ou tentatives de relation) très intenses mais instables ?" },
        { title: "Votre sens de qui vous êtes change-t-il souvent de manière dramatique ?" },
        { title: "Votre humeur change-t-elle souvent de manière soudaine ?" },
        { title: "Ressentez-vous souvent une colère intense que vous avez du mal à contrôler ?" },
        { title: "Éprouvez-vous souvent de la méfiance envers les autres ?" },
        { title: "Vous sentez-vous souvent irréel(le) ou comme si les choses autour de vous étaient irréelles ?" },
        { title: "Vous sentez-vous souvent vide ?" },
        { title: "Faites-vous souvent des efforts désespérés pour éviter que quelqu'un vous abandonne ?" }
      ],
      results: {
        minimal: {
          label: "Minimale",
          desc: "Votre score suggère une faible présence de traits associés au trouble borderline."
        },
        moderate: {
          label: "Modérée",
          desc: "Votre score suggère certains traits associés au trouble borderline. Envisagez de consulter un professionnel."
        },
        severe: {
          label: "Significative",
          desc: "Votre score suggère une présence significative de traits borderline. Une évaluation professionnelle complète est recommandée."
        }
      }
    },

    pss: {
      name: "PSS-10",
      fullName: "Échelle de Stress Perçu-10",
      desc: "Évalue le degré auquel les situations de la vie sont perçues comme stressantes au cours du dernier mois.",
      instructions: "Les questions suivantes portent sur vos sentiments et pensées au cours du dernier mois. Indiquez à quelle fréquence vous vous êtes senti(e) ou avez pensé d'une certaine manière.",
      questions: [
        { title: "À quelle fréquence avez-vous été affecté(e) par quelque chose qui s'est produit de manière inattendue ?" },
        { title: "À quelle fréquence avez-vous eu le sentiment de ne pas pouvoir contrôler les choses importantes de votre vie ?" },
        { title: "À quelle fréquence vous êtes-vous senti(e) nerveux(se) ou stressé(e) ?" },
        { title: "À quelle fréquence avez-vous géré avec succès les petits problèmes irritants de la vie ?" },
        { title: "À quelle fréquence avez-vous senti que vous avez fait face efficacement aux changements importants qui se produisaient dans votre vie ?" },
        { title: "À quelle fréquence avez-vous été sûr(e) de votre capacité à gérer vos problèmes personnels ?" },
        { title: "À quelle fréquence avez-vous senti que les choses allaient bien pour vous ?" },
        { title: "À quelle fréquence avez-vous senti que vous ne pouviez pas faire face à tout ce que vous aviez à faire ?" },
        { title: "À quelle fréquence avez-vous pu contrôler les difficultés de votre vie ?" },
        { title: "À quelle fréquence avez-vous senti que vous aviez tout sous contrôle ?" }
      ],
      results: {
        minimal: {
          label: "Faible",
          desc: "Votre niveau de stress perçu est faible. Continuez avec vos stratégies d'adaptation actuelles."
        },
        moderate: {
          label: "Modéré",
          desc: "Votre niveau de stress perçu est modéré. Envisagez d'intégrer des techniques de gestion du stress."
        },
        severe: {
          label: "Élevé",
          desc: "Votre niveau de stress perçu est élevé. Il est recommandé de chercher un soutien professionnel et des techniques de réduction du stress."
        }
      }
    },

    asrs: {
      name: "ASRS v1.1",
      fullName: "Échelle d'Auto-Évaluation du TDAH chez l'Adulte v1.1",
      desc: "Outil de dépistage des symptômes du trouble du déficit de l'attention avec hyperactivité chez l'adulte.",
      instructions: "Répondez aux questions suivantes en pensant à la manière dont vous vous êtes senti(e) et comporté(e) au cours des 6 derniers mois.",
      questions: [
        { title: "À quelle fréquence avez-vous de la difficulté à finaliser les derniers détails d'un projet, une fois que les parties difficiles sont terminées ?" },
        { title: "À quelle fréquence avez-vous de la difficulté à mettre les choses en ordre lorsque vous devez faire une tâche qui nécessite de l'organisation ?" },
        { title: "À quelle fréquence avez-vous des problèmes pour vous souvenir de rendez-vous ou d'obligations ?" },
        { title: "Lorsque vous avez une tâche qui demande beaucoup de concentration, à quelle fréquence évitez-vous ou retardez-vous le moment de la commencer ?" },
        { title: "À quelle fréquence remuez-vous ou tortillez-vous les mains ou les pieds lorsque vous devez rester assis(e) longtemps ?" },
        { title: "À quelle fréquence vous sentez-vous excessivement actif(ve) ou poussé(e) à faire des choses, comme si vous étiez mû(e) par un moteur ?" }
      ],
      results: {
        minimal: {
          label: "Peu probable",
          desc: "Votre score suggère une faible probabilité de TDAH."
        },
        moderate: {
          label: "Possible",
          desc: "Votre score suggère certains symptômes compatibles avec le TDAH. Envisagez une évaluation professionnelle."
        },
        severe: {
          label: "Probable",
          desc: "Votre score suggère une forte probabilité de symptômes de TDAH. Une évaluation professionnelle complète est recommandée."
        }
      }
    },

    ocir: {
      name: "OCI-R",
      fullName: "Inventaire Obsessionnel-Compulsif Révisé",
      desc: "Évalue les symptômes du trouble obsessionnel-compulsif.",
      instructions: "Les affirmations suivantes se réfèrent à des expériences que beaucoup de personnes vivent au quotidien. Indiquez à quel point elles vous ont gêné(e) au cours du dernier mois.",
      questions: [
        { title: "J'ai accumulé tellement de choses qu'elles me gênent" },
        { title: "Je vérifie les choses plus que nécessaire" },
        { title: "Je suis contrarié(e) quand les objets ne sont pas bien rangés" },
        { title: "Je ressens le besoin de compter en faisant certaines choses" },
        { title: "Il m'est difficile de toucher un objet quand je sais qu'il a été touché par des inconnus ou certaines personnes" },
        { title: "Il m'est difficile de contrôler mes propres pensées" },
        { title: "J'accumule des choses dont je n'ai pas besoin" },
        { title: "Je vérifie de manière répétée les portes, les fenêtres, les tiroirs, etc." },
        { title: "Je suis contrarié(e) si les autres changent l'ordre dans lequel j'ai placé les choses" },
        { title: "Je sens que je dois répéter certains nombres" },
        { title: "Parfois je dois me laver ou me nettoyer simplement parce que je me sens contaminé(e)" },
        { title: "Je suis gêné(e) par des pensées désagréables qui viennent à mon esprit contre ma volonté" },
        { title: "J'évite de jeter des choses parce que j'ai peur d'en avoir besoin plus tard" },
        { title: "Je vérifie de manière répétée le gaz, l'eau et les lumières après les avoir éteints" },
        { title: "J'ai besoin que les choses soient rangées d'une certaine manière" },
        { title: "Je sens qu'il y a de bons et de mauvais nombres" },
        { title: "Je me lave les mains plus que nécessaire" },
        { title: "J'ai souvent des pensées horribles et j'ai du mal à m'en débarrasser" }
      ],
      results: {
        minimal: {
          label: "Minimale",
          desc: "Votre score suggère un niveau minimal de symptômes obsessionnels-compulsifs."
        },
        moderate: {
          label: "Modérée",
          desc: "Votre score suggère des symptômes obsessionnels-compulsifs modérés. Envisagez de consulter un professionnel."
        },
        severe: {
          label: "Significative",
          desc: "Votre score suggère des symptômes obsessionnels-compulsifs significatifs. Une évaluation professionnelle est recommandée."
        }
      }
    },

    pcl5: {
      name: "PCL-5",
      fullName: "Liste de Vérification du Trouble de Stress Post-Traumatique pour le DSM-5",
      desc: "Évalue les symptômes de stress post-traumatique au cours du dernier mois.",
      instructions: "Voici une liste de problèmes que les gens rencontrent parfois en réponse à une expérience très stressante. Indiquez à quel point ce problème vous a gêné(e) au cours du dernier mois.",
      questions: [
        { title: "Souvenirs répétés, perturbants et involontaires de l'expérience stressante" },
        { title: "Rêves répétés et perturbants concernant l'expérience stressante" },
        { title: "Se sentir ou agir soudainement comme si l'expérience stressante se reproduisait" },
        { title: "Se sentir très mal quand quelque chose vous rappelle l'expérience stressante" },
        { title: "Avoir des réactions physiques fortes quand quelque chose vous rappelle l'expérience stressante (par exemple, cœur qui bat vite, difficulté à respirer, transpiration)" },
        { title: "Éviter les souvenirs, pensées ou sentiments liés à l'expérience stressante" },
        { title: "Éviter les choses extérieures qui rappellent l'expérience stressante (par exemple, personnes, lieux, conversations, activités, objets ou situations)" },
        { title: "Difficulté à se souvenir de parties importantes de l'expérience stressante" },
        { title: "Avoir des croyances négatives fortes sur soi-même, les autres ou le monde" },
        { title: "Se blâmer soi-même ou blâmer quelqu'un d'autre pour l'expérience stressante ou ce qui s'est passé après" },
        { title: "Avoir des sentiments négatifs forts comme la peur, l'horreur, la colère, la culpabilité ou la honte" },
        { title: "Perte d'intérêt pour les activités que vous appréciiez avant" },
        { title: "Se sentir distant(e) ou éloigné(e) des autres" },
        { title: "Difficulté à éprouver des sentiments positifs" },
        { title: "Comportement irritable, accès de colère ou comportement agressif" },
        { title: "Prendre trop de risques ou faire des choses qui pourraient vous nuire" },
        { title: "Être en état de super-alerte, de vigilance ou sur ses gardes" },
        { title: "Se sentir sursauter ou s'effrayer facilement" },
        { title: "Avoir des difficultés de concentration" },
        { title: "Problèmes pour s'endormir ou rester endormi(e)" }
      ],
      results: {
        minimal: {
          label: "Minimale",
          desc: "Votre score suggère un faible niveau de symptômes de stress post-traumatique."
        },
        moderate: {
          label: "Modérée",
          desc: "Votre score suggère des symptômes modérés de stress post-traumatique. Envisagez de consulter un professionnel."
        },
        severe: {
          label: "Significative",
          desc: "Votre score suggère des symptômes significatifs de stress post-traumatique. Il est recommandé de chercher de l'aide professionnelle."
        }
      }
    },

    bfi44: {
      name: "BFI-44",
      fullName: "Inventaire des Cinq Grands Facteurs de Personnalité",
      desc: "Évalue cinq dimensions principales de la personnalité : Extraversion, Agréabilité, Conscienciosité, Névrosisme et Ouverture à l'expérience.",
      instructions: "Je me vois comme quelqu'un qui... Indiquez dans quelle mesure vous êtes d'accord ou en désaccord avec chaque affirmation.",
      questions: [
        { title: "Est bavard(e)" },
        { title: "A tendance à critiquer" },
        { title: "Est minutieux(se) dans son travail" },
        { title: "Est déprimé(e), mélancolique" },
        { title: "Est original(e), a des idées nouvelles" },
        { title: "Est réservé(e)" },
        { title: "Est généreux(se) et aide les autres" },
        { title: "Peut être un peu négligent(e)" },
        { title: "Est calme, gère bien le stress" },
        { title: "Est curieux(se) de beaucoup de choses différentes" },
        { title: "Est plein(e) d'énergie" },
        { title: "Provoque des disputes avec les autres" },
        { title: "Est un(e) travailleur(se) fiable" },
        { title: "Peut être tendu(e)" },
        { title: "Est ingénieux(se), un(e) penseur(se) profond(e)" },
        { title: "Génère beaucoup d'enthousiasme" },
        { title: "A tendance à pardonner" },
        { title: "A tendance à être désorganisé(e)" },
        { title: "S'inquiète beaucoup" },
        { title: "A une imagination active" },
        { title: "A tendance à être silencieux(se)" },
        { title: "Est généralement digne de confiance" },
        { title: "A tendance à être paresseux(se)" },
        { title: "Est émotionnellement stable, ne se perturbe pas facilement" },
        { title: "Est inventif(ve)" },
        { title: "A une personnalité affirmée" },
        { title: "Peut être froid(e) et distant(e)" },
        { title: "Persévère jusqu'à ce que la tâche soit terminée" },
        { title: "Peut être capricieux(se)" },
        { title: "Apprécie les expériences artistiques et esthétiques" },
        { title: "Est parfois timide, inhibé(e)" },
        { title: "Est prévenant(e) et aimable avec presque tout le monde" },
        { title: "Fait les choses de manière efficace" },
        { title: "Reste calme dans les situations tendues" },
        { title: "Préfère un travail routinier" },
        { title: "Est sociable, extraverti(e)" },
        { title: "Est parfois impoli(e) avec les autres" },
        { title: "Fait des plans et les suit" },
        { title: "Devient nerveux(se) facilement" },
        { title: "Aime réfléchir, jouer avec les idées" },
        { title: "A peu d'intérêts artistiques" },
        { title: "Aime coopérer avec les autres" },
        { title: "Se laisse facilement distraire" },
        { title: "Est sophistiqué(e) en art, musique ou littérature" }
      ],
      dimensionNames: {
        E: "Extraversion",
        A: "Agréabilité",
        C: "Conscienciosité",
        N: "Névrosisme",
        O: "Ouverture à l'expérience"
      },
      dimensionDescs: {
        E: {
          low: "Vous avez tendance à être réservé(e), calme et à préférer les activités en solitaire.",
          mid: "Vous montrez un équilibre entre la sociabilité et le besoin de temps seul(e).",
          high: "Vous avez tendance à être sociable, énergique et à apprécier les interactions avec les autres."
        },
        A: {
          low: "Vous avez tendance à être plus compétitif(ve) et direct(e) dans vos interactions.",
          mid: "Vous montrez un équilibre entre coopération et affirmation de soi.",
          high: "Vous avez tendance à être coopératif(ve), compatissant(e) et attentionné(e) envers les autres."
        },
        C: {
          low: "Vous avez tendance à être plus flexible et spontané(e) dans votre approche.",
          mid: "Vous montrez un équilibre entre structure et flexibilité.",
          high: "Vous avez tendance à être organisé(e), discipliné(e) et orienté(e) vers les objectifs."
        },
        N: {
          low: "Vous avez tendance à être émotionnellement stable et calme face aux situations stressantes.",
          mid: "Vous éprouvez une gamme normale d'émotions positives et négatives.",
          high: "Vous avez tendance à éprouver davantage d'émotions négatives et une plus grande sensibilité au stress."
        },
        O: {
          low: "Vous avez tendance à préférer le conventionnel et le pratique.",
          mid: "Vous montrez un équilibre entre curiosité et intérêts pratiques.",
          high: "Vous avez tendance à être créatif(ve), curieux(se) et ouvert(e) aux nouvelles expériences."
        }
      }
    },

    mbti: {
      name: "MBTI",
      fullName: "Indicateur de Type de Personnalité Myers-Briggs",
      desc: "Identifie les préférences de personnalité dans quatre dimensions : Énergie, Perception, Prise de décision et Mode de vie.",
      instructions: "Sélectionnez l'option qui vous décrit le mieux dans la plupart des situations. Il n'y a pas de bonnes ou de mauvaises réponses.",
      questions: [
        { title: "Lors de réunions sociales, vous préférez interagir avec beaucoup de personnes, y compris des inconnus" },
        { title: "Vous avez tendance à être plus réaliste qu'imaginatif(ve)" },
        { title: "Il est pire d'être injuste que sans pitié" },
        { title: "Vous préférez normalement faire les choses selon un plan établi" },
        { title: "Après avoir passé du temps avec un groupe, vous vous sentez plein(e) d'énergie" },
        { title: "Vous préférez vous concentrer sur les détails spécifiques plutôt que sur la vue d'ensemble" },
        { title: "Lorsque vous prenez des décisions, vous considérez d'abord les sentiments des personnes" },
        { title: "Vous aimez que les choses soient décidées et réglées" },
        { title: "Vous préférez engager la conversation avec de nouvelles personnes" },
        { title: "Vous faites plus confiance à votre expérience qu'à votre intuition" },
        { title: "Vous accordez plus d'importance à la compassion qu'à la vérité objective" },
        { title: "Vous préférez suivre un emploi du temps strict" },
        { title: "Il vous est facile de parler à des inconnus" },
        { title: "Vous prêtez plus attention à ce qui est réel et actuel qu'à ce qui pourrait être" },
        { title: "L'harmonie du groupe vous importe plus que les résultats objectifs" },
        { title: "Vous préférez terminer un projet avant d'en commencer un autre" },
        { title: "Vous avez besoin de temps seul(e) pour recharger vos batteries" },
        { title: "Vous aimez réfléchir à des concepts abstraits et des théories" },
        { title: "Pour résoudre des problèmes, vous privilégiez la logique plutôt que les sentiments" },
        { title: "Vous préférez garder vos options ouvertes plutôt que vous engager" },
        { title: "Pendant votre temps libre, vous préférez être avec des amis" },
        { title: "Vous vous intéressez davantage aux possibilités futures qu'aux faits présents" },
        { title: "Vous préférez prendre des décisions basées sur des principes logiques" },
        { title: "Vous vous sentez plus à l'aise avec une structure et des routines" },
        { title: "Vous êtes l'âme des fêtes" },
        { title: "Vous êtes plus attiré(e) par les significations symboliques que par les faits littéraux" },
        { title: "Dans un conflit, vous cherchez la solution la plus juste même si quelqu'un est contrarié" },
        { title: "Vous aimez planifier vos vacances à l'avance et en détail" },
        { title: "Vous vous sentez à l'aise en étant au centre de l'attention" },
        { title: "Vous appréciez davantage explorer de nouvelles idées que d'appliquer des méthodes éprouvées" },
        { title: "Vous avez tendance à décider avec la tête plutôt qu'avec le cœur" },
        { title: "Vous préférez la spontanéité à la planification" },
        { title: "Il vous est épuisant de passer beaucoup de temps seul(e)" },
        { title: "Vous préférez apprendre des concepts théoriques avant de voir des exemples pratiques" },
        { title: "Vous considérez que la diplomatie est plus importante que la franchise" },
        { title: "Vous vous sentez mal à l'aise quand les plans changent brusquement" },
        { title: "Vous parlez plus que vous n'écoutez dans les conversations" },
        { title: "Vous faites confiance à vos pressentiments et intuitions" },
        { title: "Vous accordez plus d'importance à l'efficacité qu'à la coopération" },
        { title: "Vous appréciez l'improvisation et l'adaptation au fur et à mesure" }
      ],
      typeDescriptions: {
        ISTJ: "Responsable et fiable. Vous valorisez la tradition, la loyauté et l'ordre. Vous êtes méticuleux(se) et travaillez de manière constante pour remplir vos obligations.",
        ISFJ: "Protecteur(trice) et dévoué(e). Vous êtes aimable, responsable et attentif(ve) aux besoins des autres. Vous valorisez l'harmonie et la stabilité.",
        INFJ: "Idéaliste et visionnaire. Vous avez une compréhension profonde des personnes et un fort désir d'aider les autres à atteindre leur potentiel.",
        INTJ: "Stratège et indépendant(e). Vous avez un esprit analytique et une vision claire de comment améliorer les choses. Vous valorisez la compétence et le savoir.",
        ISTP: "Pratique et observateur(trice). Vous aimez comprendre comment fonctionnent les choses et résoudre les problèmes de manière efficace.",
        ISFP: "Artiste et sensible. Vous valorisez l'authenticité et l'harmonie. Vous appréciez la beauté et avez un fort sens esthétique.",
        INFP: "Idéaliste et empathique. Vous avez de fortes valeurs personnelles et un désir de rendre le monde meilleur.",
        INTP: "Logique et créatif(ve). Vous aimez analyser des systèmes complexes et générer des idées innovantes.",
        ESTP: "Énergique et pragmatique. Vous aimez l'action et vivez dans le moment présent. Vous êtes habile pour résoudre des problèmes pratiques.",
        ESFP: "Spontané(e) et enthousiaste. Vous profitez de la vie et transmettez votre joie aux autres. Vous êtes généreux(se) et optimiste.",
        ENFP: "Enthousiaste et créatif(ve). Vous voyez des possibilités partout et avez une énergie contagieuse pour inspirer les autres.",
        ENTP: "Innovateur(trice) et provocateur(trice). Vous appréciez le débat intellectuel et cherchez constamment de nouvelles idées et possibilités.",
        ESTJ: "Organisateur(trice) et décidé(e). Vous valorisez l'efficacité et l'ordre. Vous êtes naturellement fait(e) pour diriger et administrer.",
        ESFJ: "Sociable et serviable. Vous vous souciez profondément des autres et travaillez pour créer de l'harmonie dans votre entourage.",
        ENFJ: "Charismatique et empathique. Vous inspirez les autres et avez un talent naturel pour diriger avec compassion.",
        ENTJ: "Leader né(e) et stratégique. Vous êtes décidé(e), efficace et appréciez les défis organisationnels et de leadership."
      }
    }
  }
};
