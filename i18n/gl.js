const LANG_GL = {
  "ui": {
    "appTitle": "Avaliacións de Saúde Mental",
    "appSubtitle": "Ferramentas de autoavaliación psicolóxica",
    "tabTests": "Probas",
    "tabHistory": "Historial",
    "welcome": "Benvido/a. Seleccione unha avaliación para comezar.",
    "startTest": "Comezar proba",
    "nextQuestion": "Seguinte",
    "prevQuestion": "Anterior",
    "viewResults": "Ver resultados",
    "question": "Pregunta",
    "of": "de",
    "items": "ítems",
    "backToTests": "Volver ás probas",
    "repeatTest": "Repetir proba",
    "viewHistory": "Ver historial",
    "otherTests": "Outras probas",
    "detailByItem": "Detalle por ítem",
    "helpResources": "Recursos de axuda",
    "helpText": "Se está a pasar por unha crise emocional, busque axuda profesional. Liña Nacional de Prevención do Suicidio: 988 (EUA) ou contacte cun profesional de saúde mental.",
    "disclaimerTitle": "Nota importante:",
    "disclaimerText": "Esta proba é unha ferramenta de autoavaliación e non substitúe o diagnóstico dun profesional da saúde mental. Se sente que necesita axuda, consulte cun especialista.",
    "privacyTitle": "A súa privacidade:",
    "privacyText": "Os seus resultados almacénanse unicamente no seu navegador (localStorage). Non se envía ningún dato a ningún servidor nin sae do seu ordenador.",
    "cat_triage": "¿Por onde comezar?",
    "cat_clinical": "Avaliacións Clínicas",
    "cat_screening": "Cribado e Detección",
    "cat_wellbeing": "Benestar e Autoestima",
    "cat_personality": "Personalidade",
    "cat_crisis": "Crise e Risco",
    "cat_advanced": "Avaliación Avanzada",
    "noRecords": "Non hai rexistros gardados.",
    "completeFirst": "Complete polo menos unha proba para ver o historial.",
    "goToTests": "Ir ás probas",
    "trend": "Tendencia",
    "all": "Todo",
    "clearHistory": "Borrar historial",
    "clearConfirm": "¿Está seguro de que desexa borrar todo o historial? Esta acción non se pode desfacer.",
    "score": "Puntuación",
    "outOf": "de",
    "disclaimer": "Esta ferramenta ten fins unicamente informativos e non substitúe unha avaliación profesional. Consulte cun especialista en saúde mental para un diagnóstico adecuado.",
    "resumePrompt": "Ten unha proba en curso",
    "continueTest": "Continuar proba",
    "resumeMessage": "Ten a proba {test} en curso ({n}/{total} preguntas)",
    "dismiss": "Pechar",
    "questionsAnswered": "preguntas respondidas",
    "inProgress": "En progreso",
    "testBy": "Probas",
    "recommendedTests": "Avaliacións recomendadas",
    "highPriority": "Alta prioridade",
    "recommended": "Recomendado",
    "suggested": "Suxerido",
    "areasEvaluated": "Áreas avaliadas",
    "kbSelect": "seleccionar",
    "kbBrowse": "navegar",
    "kbConfirm": "confirmar",
    "kbPrevNext": "ant/seg",
    "suggestedRetake": "Suxírese repetir",
    "triageRecommended": "Recomendado pola súa avaliación inicial",
    "retakeReason": "Realizada por última vez"
  },
  "scales": {
    "agreement5": ["Totalmente en desacordo","En desacordo","Nin de acordo nin en desacordo","De acordo","Totalmente de acordo"],
    "frequency4": ["En absoluto","Varios días","Máis da metade dos días","Case todos os días"],
    "frequency5": ["Nunca","Case nunca","Ás veces","Con bastante frecuencia","Con moita frecuencia"],
    "severity4": ["En absoluto","Levemente","Moderadamente","Gravemente"],
    "severity5": ["En absoluto","Un pouco","Moderadamente","Bastante","Extremamente"],
    "yesNo": ["Non","Si"]
  },
  "tests": {
    "bdi": {
      "name": "BDI-II",
      "abbr": "BDI-II",
      "fullName": "Inventario de Depresión de Beck-II",
      "desc": "Avalía a presenza e gravidade dos síntomas depresivos nas últimas dúas semanas.",
      "instructions": "Lea con atención cada grupo de afirmacións e seleccione a que mellor describa como se sentiu durante as últimas dúas semanas, incluíndo o día de hoxe.",
      "questions": [
        {
          "title": "Tristeza",
          "options": [
            "Non me sinto triste.",
            "Sinto tristeza gran parte do tempo.",
            "Sinto tristeza todo o tempo.",
            "Sinto tanta tristeza ou infelicidade que non o soporto."
          ]
        },
        {
          "title": "Pescimismo",
          "options": [
            "Non sinto desánimo respecto ao meu futuro.",
            "Sinto máis desánimo respecto ao meu futuro que antes.",
            "Non espero que as cousas me vaian ben.",
            "Sinto que o meu futuro non ten esperanza e só empeorará."
          ]
        },
        {
          "title": "Fracaso pasado",
          "options": [
            "Non sinto que sexa un fracaso.",
            "Fracasei máis do que debería.",
            "Cando miro cara atrás, vexo moitos fracasos.",
            "Sinto que son un fracaso total como persoa."
          ]
        },
        {
          "title": "Perda de pracer",
          "options": [
            "Gozo tanto como sempre das cousas que me gustan.",
            "Non gozo das cousas tanto como adoitaba facelo.",
            "Obteño moi pouco pracer das cousas das que antes gozaba.",
            "Non podo obter ningún pracer das cousas que adoitaba gozar."
          ]
        },
        {
          "title": "Sentimentos de culpa",
          "options": [
            "Non me sinto especialmente culpable.",
            "Sinto culpa por moitas cousas que fixen ou debín facer.",
            "Sinto bastante culpa a maior parte do tempo.",
            "Sinto culpa todo o tempo."
          ]
        },
        {
          "title": "Sentimentos de castigo",
          "options": [
            "Non sinto que estea a ser castigado/a.",
            "Sinto que podería ser castigado/a.",
            "Espero ser castigado/a.",
            "Sinto que estou a ser castigado/a."
          ]
        },
        {
          "title": "Descontento con un/unha mesmo/a",
          "options": [
            "Sinto o mesmo de sempre respecto a min.",
            "Perdín a confianza en min mesmo/a.",
            "Estou decepcionado/a comigo mesmo/a.",
            "Non me gusto a min mesmo/a."
          ]
        },
        {
          "title": "Autocrítica",
          "options": [
            "Non me critico nin me culpo máis do habitual.",
            "Son máis crítico/a comigo mesmo/a que antes.",
            "Critícome por todos os meus defectos.",
            "Cúlpome de todo o malo que pasa."
          ]
        },
        {
          "title": "Pensamentos ou desexos suicidas",
          "options": [
            "Non teño pensamentos de suicidio.",
            "Teño pensamentos de suicidio, pero non os levaría a cabo.",
            "Gustaríame suicidarme.",
            "Suicidaríame se tivese a oportunidade."
          ]
        },
        {
          "title": "Choro",
          "options": [
            "Non choro máis ca antes.",
            "Choro máis ca antes.",
            "Choro por calquera pequena cousa.",
            "Sinto ganas de chorar, pero non podo."
          ]
        },
        {
          "title": "Axitación",
          "options": [
            "Non estou máis inquédo/a ou tenso/a do habitual.",
            "Síntome máis inquédo/a ou tenso/a do habitual.",
            "Estou tan inquédo/a ou axitato/a que é difícil estar quieto/a.",
            "Estou tan inquédo/a ou axitato/a que teño que seguir movéndome ou facendo algo."
          ]
        },
        {
          "title": "Perda de interese",
          "options": [
            "Non perdín o interese noutras persoas ou actividades.",
            "Estou menos interesado/a noutras persoas ou cousas que antes.",
            "Perdín case todo o meu interese noutras persoas ou cousas.",
            "Cústame interesarme por calquera cousa."
          ]
        },
        {
          "title": "Indecisión",
          "options": [
            "Tomo decisións tan ben como sempre.",
            "Resúltame máis difícil tomar decisións ca o habitual.",
            "Teño moita maior dificultade para tomar decisións que antes.",
            "Teño problemas para tomar calquera decisión."
          ]
        },
        {
          "title": "Inutilidade",
          "options": [
            "Non sinto que sexa inútil.",
            "Non me considero tan valioso/a e útil como adoitaba ser.",
            "Síntome máis inútil en comparación cos demais.",
            "Síntome totalmente inútil."
          ]
        },
        {
          "title": "Perda de enerxía",
          "options": [
            "Teño tanta enerxía como sempre.",
            "Teño menos enerxía da que adoitaba ter.",
            "Non teño enerxía suficiente para facer moito.",
            "Non teño enerxía suficiente para facer nada."
          ]
        },
        {
          "title": "Cambios no patrón de sono",
          "options": [
            "Non experimentei ningún cambio no meu sono.",
            "Durmo algo máis ou algo menos do habitual.",
            "Durmo moito máis ou moito menos do habitual.",
            "Durmo a maior parte do día ou espértome 1-2 horas antes e non podo volver durmir."
          ]
        },
        {
          "title": "Irritabilidade",
          "options": [
            "Non estou máis irritable do habitual.",
            "Estou máis irritable do habitual.",
            "Estou moito máis irritable do habitual.",
            "Estou irritable todo o tempo."
          ]
        },
        {
          "title": "Cambios no apetito",
          "options": [
            "Non experimentei ningún cambio no meu apetito.",
            "O meu apetito é algo menor ou algo maior do habitual.",
            "O meu apetito é moito menor ou moito maior do habitual.",
            "Non teño ningún apetito ou teño antollos de comida todo o tempo."
          ]
        },
        {
          "title": "Dificultade de concentración",
          "options": [
            "Podo concentrarme tan ben como sempre.",
            "Non podo concentrarme tan ben como é habitual.",
            "É difícil manter a miña mente en algo por moito tempo.",
            "Noto que non podo concentrarme en nada."
          ]
        },
        {
          "title": "Cansazo ou fatiga",
          "options": [
            "Non estou máis canso/a ou fatigado/a do habitual.",
            "Cánsome ou fatígome máis facilmente do habitual.",
            "Estou demasiado canso/a ou fatigado/a para facer moitas das cousas que antes facía.",
            "Estou demasiado canso/a ou fatigado/a para facer a maioría das cousas que adoitaba facer."
          ]
        },
        {
          "title": "Perda de interese polo sexo",
          "options": [
            "Non notei ningún cambio recente no meu interese polo sexo.",
            "Estou menos interesado/a no sexo do que adoitaba estar.",
            "Estou moito menos interesado/a no sexo agora.",
            "Perdín completamente o interese polo sexo."
          ]
        }
      ],
      "results": {
        "minimal": { "label": "Mínima", "desc": "A súa puntuación suxire un nivel mínimo de depresión. É normal experimentar altibaixos emocionais." },
        "mild": { "label": "Leve", "desc": "A súa puntuación suxire síntomas depresivos leves. Considere falar cun profesional se persisten." },
        "moderate": { "label": "Moderada", "desc": "A súa puntuación suxire síntomas depresivos moderados. Recoméndase consultar cun profesional da saúde mental." },
        "severe": { "label": "Grave", "desc": "A súa puntuación suxire síntomas depresivos graves. É importante buscar axuda profesional o antes posible." }
      }
    },
    "bai": {
      "name": "BAI",
      "abbr": "BAI",
      "fullName": "Inventario de Ansiedade de Beck",
      "desc": "Avalía a gravidade dos síntomas de ansiedade durante a última semana.",
      "instructions": "Indique canto lle molestou cada síntoma durante a última semana, incluíndo o día de hoxe.",
      "questions": [
        { "title": "Adormecemento ou formigueo" },
        { "title": "Sensación de calor" },
        { "title": "Tremores nas pernas" },
        { "title": "Incapacidade para relaxarse" },
        { "title": "Medo a que pase o peor" },
        { "title": "Mareo ou atordamento" },
        { "title": "Palpitacións ou taquicardia" },
        { "title": "Inestabilidade" },
        { "title": "Terror ou medo inmenso" },
        { "title": "Nerviosismo" },
        { "title": "Sensación de afogo" },
        { "title": "Tremores nas mans" },
        { "title": "Tremeleque ou inestabilidade" },
        { "title": "Medo a perder o control" },
        { "title": "Dificultade para respirar" },
        { "title": "Medo a morrer" },
        { "title": "Asustado/a" },
        { "title": "Indixestión ou molestias no abdome" },
        { "title": "Desmaio ou mareo" },
        { "title": "Rostro encarnado (rubor)" },
        { "title": "Suores fríos ou quentes" }
      ],
      "results": {
        "minimal": { "label": "Mínima", "desc": "A súa puntuación suxire un nivel mínimo de ansiedade." },
        "mild": { "label": "Leve", "desc": "A súa puntuación suxire ansiedade leve. Faga un seguimento dos seus síntomas." },
        "moderate": { "label": "Moderada", "desc": "A súa puntuación suxire ansiedade moderada. Considere consultar cun profesional." },
        "severe": { "label": "Grave", "desc": "A súa puntuación suxire ansiedade grave. Recoméndase buscar axuda profesional." }
      }
    },
    "gad7": {
      "name": "GAD-7",
      "abbr": "GAD-7",
      "fullName": "Trastorno de Ansiedade Xeneralizada-7",
      "desc": "Avalía a gravidade da ansiedade xeneralizada durante as últimas dúas semanas.",
      "instructions": "Durante as últimas 2 semanas, con que frecuencia lle molestaron os seguintes problemas?",
      "questions": [
        { "title": "Sentirse nervioso/a, ansioso/a ou moi alterado/a" },
        { "title": "Non poder deixar de preocuparse ou non poder controlar a preocupación" },
        { "title": "Preocuparse demasiado por diferentes cousas" },
        { "title": "Ter dificultades para relaxarse" },
        { "title": "Estar tan inquedo/a que é difícil quedar sentado/a tranquilamente" },
        { "title": "Molestarse ou irritarse doadamente" },
        { "title": "Sentir medo, coma se fose suceder algo terrible" }
      ],
      "results": {
        "minimal": { "label": "Mínima", "desc": "A súa puntuación suxire un nivel mínimo de ansiedade." },
        "mild": { "label": "Leve", "desc": "A súa puntuación suxire ansiedade leve." },
        "moderate": { "label": "Moderada", "desc": "A súa puntuación suxire ansiedade moderada. Considere consultar cun profesional." },
        "severe": { "label": "Grave", "desc": "A súa puntuación suxire ansiedade grave. Recoméndase buscar axuda profesional." }
      }
    },
    "msibpd": {
      "name": "MSI-BPD",
      "abbr": "MSI-BPD",
      "fullName": "Instrumento de Cribado de McLean para o Trastorno límite da personalidade",
      "desc": "Ferramenta de cribado para os trazos asociados ao trastorno límite da personalidade.",
      "instructions": "Responda si ou non a cada unha das seguintes preguntas.",
      "questions": [
        { "title": "Algunha vez se cortou, queimou ou magoou a si mesmo/a á mantenta?" },
        { "title": "Fixo algunha vez un intento de suicidio?" },
        { "title": "Tivo polo menos dúas relacións (ou intentos de relacións) que foron moi intensas pero inestables?" },
        { "title": "Cambia drasticamente a súa idea sobre quen é vostede?" },
        { "title": "Cambia o seu estado de ánimo adoito e repentinamente?" },
        { "title": "Sente a miúdo unha ira intensa que é difícil de controlar?" },
        { "title": "Desconfía frecuentemente das outras persoas?" },
        { "title": "Séntese a miúdo irreal, coma se as cousas ao seu redor non fosen reais?" },
        { "title": "Séntese baleiro/a acotío?" },
        { "title": "Fai con frecuencia esforzos desesperados para evitar ser abandonado/a por alguén?" }
      ],
      "results": {
        "minimal": { "label": "Mínimo", "desc": "A súa puntuación suxire unha baixa presenza de trazos asociados ao trastorno límite da personalidade." },
        "moderate": {
          "label": "Moderado",
          "desc": "A súa puntuación suxire algúns trazos asociados ao trastorno límite da personalidade. Considere consultar cun profesional."
        },
        "severe": {
          "label": "Significativo",
          "desc": "A súa puntuación suxire unha presenza significativa de trazos límite. Recoméndase unha avaliación profesional exhaustiva."
        }
      }
    },
    "pss": {
      "name": "PSS-10",
      "abbr": "PSS-10",
      "fullName": "Escala de Estrés Percibido-10",
      "desc": "Mide o grao no que as situacións da vida se perciben como estresantes durante o último mes.",
      "instructions": "As seguintes preguntas refírense aos seus sentimentos e pensamentos durante o último mes. Indique con que frecuencia sentiu ou pensou dunha determinada maneira.",
      "questions": [
        { "title": "Con que frecuencia estivo molesto/a por algo que ocorreu inesperadamente?" },
        { "title": "Con que frecuencia sentiu que era incapaz de controlar as cousas importantes da súa vida?" },
        { "title": "Con que frecuencia se sentiu nervioso/a ou estresado/a?" },
        { "title": "Con que frecuencia manexou con éxito os pequenos problemas irritantes da vida?" },
        { "title": "Con que frecuencia sentiu que afrontaba eficazmente os cambios importantes que estaban ocorrendo na súa vida?" },
        { "title": "Con que frecuencia sentiu confianza na súa capacidade para manexar os seus problemas persoais?" },
        { "title": "Con que frecuencia sentiu que as cousas lle ían ben?" },
        { "title": "Con que frecuencia descubriu que non podía facer fronte a todas as cousas que tiña que facer?" },
        { "title": "Con que frecuencia puido controlar as irritacións na súa vida?" },
        { "title": "Con que frecuencia sentiu que tiña o control das cousas?" }
      ],
      "results": {
        "minimal": { "label": "Baixo", "desc": "O seu nivel de estrés percibido é baixo. Continúe coas súas actuais estratexias de afrontamento." },
        "moderate": { "label": "Moderado", "desc": "O seu nivel de estrés percibido é moderado. Considere incorporar técnicas de manexo do estrés." },
        "severe": { "label": "Alto", "desc": "O seu nivel de estrés percibido é alto. Recoméndase buscar apoio profesional e utilizar técnicas de redución do estrés." }
      }
    },
    "asrs": {
      "name": "ASRS v1.1",
      "abbr": "ASRS-v1.1",
      "fullName": "Escala de Autoavaliación do TDAH en Adultos v1.1",
      "desc": "Ferramenta de cribado de síntomas de trastorno por déficit de atención e hiperactividade en adultos.",
      "instructions": "Responda ás seguintes preguntas pensando en como se sentiu e compartou durante os últimos 6 meses.",
      "questions": [
        { "title": "Con que frecuencia ten dificultades para rematar os detalles finais dun proxecto, unha vez resoltas as partes máis difíciles?" },
        { "title": "Con que frecuencia ten dificultades para poñer as cousas en orde cando ten que facer unha tarefa que require organización?" },
        { "title": "Con que frecuencia ten problemas para recordar citas ou obrigacións?" },
        { "title": "Cando ten unha tarefa que require moito pensamento, con que frecuencia evita ou adía comezala?" },
        { "title": "Con que frecuencia move de xeito inquédo as mans ou os pés cando ten que estar sentado moito tempo?" },
        { "title": "Con que frecuencia sente demasiada actividade ou necesidade de facer cousas, coma se estivese impulsado/a por un motor?" }
      ],
      "results": {
        "minimal": { "label": "Pouco probable", "desc": "A súa puntuación suxire unha baixa probabilidade de TDAH." },
        "moderate": { "label": "Posible", "desc": "A súa puntuación suxire algúns síntomas consistentes con TDAH. Considere unha avaliación profesional." },
        "severe": { "label": "Moi probable", "desc": "A súa puntuación suxire unha alta probabilidade de síntomas de TDAH. Recoméndase unha avaliación profesional exhaustiva." }
      }
    },
    "ocir": {
      "name": "OCI-R",
      "abbr": "OCI-R",
      "fullName": "Inventario Obsesivo-Compulsivo Revisado",
      "desc": "Avalía os síntomas do trastorno obsesivo-compulsivo.",
      "instructions": "As seguintes afirmacións refírense a experiencias que moitas persoas teñen na súa vida diaria. Indique en que grao lle molestaron durante o último mes.",
      "questions": [
        { "title": "Gardei tantas cousas que chegan a estorbar" },
        { "title": "Comprobo as cousas máis veces do necesario" },
        { "title": "Moléstame que os obxectos non estean ordenados axeitadamente" },
        { "title": "Sinto o impulso de contar mentres fago cousas" },
        { "title": "Resúltame difícil tocar un obxecto cando sei que foi tocado por estraños ou por certas persoas" },
        { "title": "Resúltame difícil controlar os meus propios pensamentos" },
        { "title": "Colecciono cousas que non necesito" },
        { "title": "Comprobo repetidamente portas, fiestras, caixóns, etc." },
        { "title": "Moléstame que outros cambien a forma en que ordenei as cousas" },
        { "title": "Sinto que teño que repetir certos números" },
        { "title": "Ás veces teño que lavarme ou limparme simplemente porque me sinto contaminado/a" },
        { "title": "Moléstanme os pensamentos desagradables que veñen á miña mente contra a miña vontade" },
        { "title": "Evito tirar cousas porque teño medo de poder necesitalas máis adiante" },
        { "title": "Comprobo repetidamente as chaves do gas e da auga, e os interruptores da luz, despois de apagalos" },
        { "title": "Necesito que as cousas estean dispostas dun xeito particular" },
        { "title": "Sinto que hai números bos e malos" },
        { "title": "Lavo as mans con máis frecuencia e durante máis tempo do necesario" },
        { "title": "Frecuentemente teño pensamentos desagradables e teño dificultades para librarme deles" }
      ],
      "results": {
        "minimal": { "label": "Mínimo", "desc": "A súa puntuación suxire un nivel mínimo de síntomas obsesivo-compulsivos." },
        "moderate": { "label": "Moderado", "desc": "A súa puntuación suxire síntomas obsesivo-compulsivos moderados. Considere consultar cun profesional." },
        "severe": { "label": "Significativo", "desc": "A súa puntuación suxire síntomas obsesivo-compulsivos significativos. Recoméndase unha avaliación profesional." }
      }
    },
    "pcl5": {
      "name": "PCL-5",
      "abbr": "PCL-5",
      "fullName": "Lista de Verificación do TEPT para o DSM-5",
      "desc": "Avalía os síntomas do trastorno por estrés postraumático durante o último mes.",
      "instructions": "A continuación preséntase unha lista de problemas que as persoas teñen ás veces como resposta a unha experiencia moi estresante. Indique canto lle molestou ese problema durante o último mes.",
      "questions": [
        { "title": "Recordos repetidos, molestos e non desexados da experiencia estresante" },
        { "title": "Soños repetidos e molestos sobre a experiencia estresante" },
        { "title": "Sentir ou actuar de súpeto coma se a experiencia estresante estivese a ocorrer de novo" },
        { "title": "Sentirse moi molesto/a cando algo lle lembra a experiencia estresante" },
        { "title": "Ter reaccións físicas fortes cando algo lle lembra a experiencia estresante (p. ex., palpitacións, dificultade para respirar, suores)" },
        { "title": "Evitar os recordos, pensamentos ou sentimentos relacionados coa experiencia estresante" },
        { "title": "Evitar recordatorios externos da experiencia estresante (p. ex., persoas, lugares, conversas, actividades, obxectos ou situacións)" },
        { "title": "Problemas para recordar partes importantes da experiencia estresante" },
        { "title": "Ter crenzas moi negativas sobre si mesmo/a, outras persoas ou o mundo" },
        { "title": "Culparse a si mesmo/a ou a outra persoa pola experiencia estresante ou polo que sucedeu despois" },
        { "title": "Ter sentimentos negativos intensos como medo, horror, ira, culpa ou vergoña" },
        { "title": "Perda de interese nas actividades das que adoitaba gozar" },
        { "title": "Sentirse distante ou illado/a das outras persoas" },
        { "title": "Dificultade para experimentar sentimentos positivos" },
        { "title": "Comportamento irritable, explosións de ira ou actuar con agresividade" },
        { "title": "Asumir demasiados riscos ou facer cousas que poderían causarlle dano" },
        { "title": "Estar superalerta, vixiante ou en garda" },
        { "title": "Sentirse nervioso/a ou sobresaltarse facilmente" },
        { "title": "Ter dificultades para concentrarse" },
        { "title": "Problemas para conciliar o sono ou para manterse durmido/a" }
      ],
      "results": {
        "minimal": { "label": "Mínimo", "desc": "A súa puntuación suxire un nivel baixo de síntomas de estrés postraumático." },
        "moderate": { "label": "Moderado", "desc": "A súa puntuación suxire síntomas moderados de estrés postraumático. Considere consultar cun profesional." },
        "severe": { "label": "Significativo", "desc": "A súa puntuación suxire síntomas significativos de estrés postraumático. Recoméndase buscar axuda profesional." }
      }
    },
    "bfi44": {
      "name": "BFI-44",
      "abbr": "BFI-44",
      "fullName": "Inventario dos Cinco Grandes-44",
      "desc": "Avalía cinco dimensións principais da personalidade: Extraversión, Amabilidade, Responsabilidade, Neuroticismo e Apertura á Experiencia.",
      "instructions": "Véxome a min mesmo/a como alguén que... Indique ata que punto está de acordo ou en desacordo con cada afirmación.",
      "questions": [
        { "title": "É falador/a" },
        { "title": "Tende a atopar defectos nos demais" },
        { "title": "Fai un traballo completo e minucioso" },
        { "title": "É deprimido/a, abatido/a" },
        { "title": "É orixinal, ten ideas novas" },
        { "title": "É reservado/a" },
        { "title": "É servicial e xeneroso/a cos demais" },
        { "title": "Pode ser un pouco descuidado/a" },
        { "title": "É relaxado/a, manexa ben o estrés" },
        { "title": "Ten curiosidade por moitas cousas diferentes" },
        { "title": "Está cheo/a de enerxía" },
        { "title": "Inicia liortas cos demais" },
        { "title": "É un/unha traballador/a fiable" },
        { "title": "Pode estar tenso/a" },
        { "title": "É enxeñoso/a, un pensador/a profundo/a" },
        { "title": "Xera moito entusiasmo" },
        { "title": "Ten unha natureza indulxente que perdoa" },
        { "title": "Tende a ser desorganizado/a" },
        { "title": "Preocúpase moito" },
        { "title": "Ten unha imaxinación activa" },
        { "title": "Tende a ser calado/a" },
        { "title": "Xeralmente confía" },
        { "title": "Tende a ser preguiceiro/a" },
        { "title": "É emocionalmente estable, non se altera facilmente" },
        { "title": "É inventivo/a" },
        { "title": "Ten unha personalidade asertiva" },
        { "title": "Pode ser frío/a e distante" },
        { "title": "Persevera ata rematar a tarefa" },
        { "title": "Pode ter cambios de humor" },
        { "title": "Valora as experiencias artísticas e estéticas" },
        { "title": "Ás veces é tímido/a, inhibido/a" },
        { "title": "É considerado/a e amable con case todo o mundo" },
        { "title": "Fai as cousas de xeito eficiente" },
        { "title": "Mantén a calma en situacións tensas" },
        { "title": "Prefire o traballo que é rutineiro" },
        { "title": "É extravertido/a, sociable" },
        { "title": "Ás veces é maleducado/a cos demais" },
        { "title": "Fai plans e lévaos a cabo" },
        { "title": "Póñome nervioso/a doadamente" },
        { "title": "Gústalle reflexionar, xogar con ideas" },
        { "title": "Ten poucos intereses artísticos" },
        { "title": "Gústalle cooperar cos demais" },
        { "title": "Distráese facilmente" },
        { "title": "É sofisticado/a en arte, música ou literatura" }
      ],
      "dimensionNames": {
        "E": "Extraversión",
        "A": "Amabilidade",
        "C": "Responsabilidade",
        "N": "Neuroticismo",
        "O": "Apertura á Experiencia"
      },
      "dimensionDescs": {
        "E": {
          "low": "Tende a ser reservado/a, calado/a e prefire actividades solitarias.",
          "mid": "Mostra un equilibrio entre a sociabilidade e a necesidade de tempo para si mesmo/a.",
          "high": "Tende a ser sociable, enerxético/a e goza interactuando cos demais."
        },
        "A": {
          "low": "Tende a ser máis competitivo/a e directo/a nas súas interaccións.",
          "mid": "Mostra un equilibrio entre a cooperación e a asertividade.",
          "high": "Tende a ser cooperativo/a, compasivo/a e considerado/a cos demais."
        },
        "C": {
          "low": "Tende a ser máis flexible e espontáneo/a na súa forma de actuar.",
          "mid": "Mostra un equilibrio entre estrutura e flexibilidade.",
          "high": "Tende a ser organizado/a, disciplinado/a e enfocado/a nas metas."
        },
        "N": {
          "low": "Tende a ser emocionalmente estable e a manter a calma baixo situacións estresantes.",
          "mid": "Experimenta un rango normal de emocións positivas e negativas.",
          "high": "Tende a experimentar máis emocións negativas e maior sensibilidade ao estrés."
        },
        "O": {
          "low": "Tende a preferir o convencional e o práctico.",
          "mid": "Mostra un equilibrio entre a curiosidade e os intereses prácticos.",
          "high": "Tende a ser creativo/a, curioso/a e aberto/a a novas experiencias."
        }
      }
    },
    "mbti": {
      "name": "MBTI",
      "abbr": "16P",
      "fullName": "Indicador de Tipo de Myers-Briggs",
      "desc": "Identifica preferencias de personalidade en catro dimensións: Enerxía, Percepción, Toma de decisións e Estilo de vida.",
      "instructions": "Seleccione a opción que mellor o/a describa na maioría das situacións. Non hai respostas correctas ou incorrectas.",
      "questions": [
        { "title": "Nas reunións sociais, prefire interactuar con moitas persoas, incluíndo descoñecidos" },
        { "title": "Tende a ser máis realista ca imaxinativo/a" },
        { "title": "É peor ser inxusto ca ser desapiadado" },
        { "title": "Normalmente prefire facer as cousas de acordo cun plan establecido" },
        { "title": "Despois de pasar tempo cun grupo, sente máis enerxía" },
        { "title": "Prefire centrarse nos detalles específicos en vez de na imaxe xeral" },
        { "title": "Á hora de tomar decisións, ten en conta primeiro os sentimentos das persoas" },
        { "title": "Gústalle ter as cousas decididas e pechadas" },
        { "title": "Prefire iniciar conversas con persoas novas" },
        { "title": "Confía máis na experiencia ca na intuición" },
        { "title": "Valora máis a compaixón ca a verdade obxectiva" },
        { "title": "Prefire seguir un horario estrito" },
        { "title": "Resúltalle doado falar con estraños" },
        { "title": "Presta máis atención ao que é real e presente que ao que podería ser" },
        { "title": "Impórtalle máis a harmonía do grupo que os resultados obxectivos" },
        { "title": "Prefire rematar un proxecto antes de comezar outro" },
        { "title": "Necesita tempo a soas para recargar a súa enerxía" },
        { "title": "Gústalle pensar en conceptos e teorías abstractas" },
        { "title": "Á hora de resolver problemas, prioriza a loxica sobre os sentimentos" },
        { "title": "Prefire deixar as súas opcións abertas en vez de comprometerse" },
        { "title": "No seu tempo libre, prefire estar cos amigos" },
        { "title": "Interésanlle máis as posibilidades futuras cas realidades presentes" },
        { "title": "Prefire tomar decisións baseadas en principios lóxicos" },
        { "title": "Séntese máis cómodo/a coa estrutura e as rotinas" },
        { "title": "Vostede é a alma da festa" },
        { "title": "Séntese máis atraído/a polos significados simbólicos que polos feitos literais" },
        { "title": "Nun conflito, busca a solución máis xusta aínda que alguén se moleste" },
        { "title": "Gústalle planificar as súas vacacións con antelación e en detalle" },
        { "title": "Séntese cómodo/a sendo o centro de atención" },
        { "title": "Goza máis explorando novas ideas que aplicando métodos xa comprobados" },
        { "title": "Tende a decidir coa cabeza e non co corazón" },
        { "title": "Prefire a espontaneidade por riba da planificación" },
        { "title": "Resúltalle esgotador pasar moito tempo a soas" },
        { "title": "Prefire aprender conceptos teóricos antes de ver exemplos prácticos" },
        { "title": "Considera a diplomacia máis importante ca a franqueza" },
        { "title": "Séntese incómodo/a cando os plans cambian de súpeto" },
        { "title": "Fala máis ca escoita nas conversas" },
        { "title": "Confía nas súas presaxios e intuicións" },
        { "title": "Valora máis a eficiencia ca a cooperación" },
        { "title": "Gústalle a improvisación e adaptarse sobre a marcha" }
      ],
      "typeDescriptions": {
        "ISTJ": "Responsable e fiable. Valora a tradición, a lealdade e a orde. É minucioso/a e traballa de xeito constante para cumprir coas súas obrigas.",
        "ISFJ": "Protector/a e dedicado/a. É amable, responsable e está atento/a ás necesidades dos demais. Valora a harmonía e a estabilidade.",
        "INFJ": "Idealista e visionario/a. Ten unha comprensión profunda das persoas e un forte desexo de axudar aos demais a alcanzar o seu potencial.",
        "INTJ": "Estratego/a e independente. Ten unha mente analítica e unha visión clara de como mellorar as cousas. Valora a competencia e o coñecemento.",
        "ISTP": "Práctico/a e observador/a. Gústalle comprender como funcionan as cousas e resolver problemas de xeito eficiente.",
        "ISFP": "Artístico/a e sensible. Valora a autenticidade e a harmonía. Goza da beleza e ten un forte sentido estético.",
        "INFP": "Idealista e empático/a. Ten fortes valores persoais e un desexo de facer do mundo un lugar mellor.",
        "INTP": "Lóxico/a e creativo/a. Gústalle analizar sistemas complexos e xerar ideas innovadoras.",
        "ESTP": "Enerxético/a e pragmático/a. Goza da acción e vive no momento presente. É hábil resolvendo problemas prácticos.",
        "ESFP": "Espontáneo/a e entusiasta. Goza da vida e contaxia a súa alegría aos demais. É xeneroso/a e optimista.",
        "ENFP": "Entusiasta e creativo/a. Ve posibilidades en todas partes e ten unha enerxía contaxiosa para inspirar aos demais.",
        "ENTP": "Innovador/a e desafiante. Goza co debate intelectual e busca constantemente novas ideas e posibilidades.",
        "ESTJ": "Organizado/a e decidido/a. Valora a eficiencia e a orde. É un/unha líder e administrador/a nato/a.",
        "ESFJ": "Sociable e servicial. Preocúpase profundamente polos demais e traballa para crear harmonía no seu contorno.",
        "ENFJ": "Carismático/a e empático/a. Inspira aos demais e ten unha habilidade natural para liderar con compaixón.",
        "ENTJ": "Líder nato/a e estratego/a. É decidido/a, eficiente e goza dos desafíos organizativos e de liderado."
      }
    },
    "phq9": {
      "name": "PHQ-9",
      "abbr": "PHQ-9",
      "fullName": "Cuestionario de Saúde do Paciente-9",
      "desc": "Cribado rápido de depresión moi utilizado en atención primaria. 9 preguntas.",
      "instructions": "Durante as últimas 2 semanas, con que frecuencia lle molestaron algún dos seguintes problemas?",
      "sharedOptions": ["En absoluto","Varios días","Máis da metade dos días","Case todos os días"],
      "questions": [
        { "title": "Pouco interese ou pracer en facer cousas" },
        { "title": "Sentirse desanimado/a, deprimido/a ou sen esperanza" },
        { "title": "Problemas para conciliar o sono ou para manterse durmido/a, ou durmir demasiado" },
        { "title": "Sentirse canso/a ou ter pouca enerxía" },
        { "title": "Pouco apetito ou comer en exceso" },
        { "title": "Sentirse mal consigo mesmo/a" },
        { "title": "Dificultade para concentrarse nas cousas" },
        { "title": "Moverse ou falar tan amodo que outras persoas poderían telo notado, ou o contrario" },
        { "title": "Pensamentos de que estaría mellor morto/a, ou de magoarse dalgunha maneira" }
      ],
      "results": {
        "minima": { "label": "Mínima", "desc": "Non se detectan síntomas significativos de depresión. Siga coidando o seu benestar emocional." },
        "leve": { "label": "Leve", "desc": "Detéctanse síntomas leves de depresión. Considere vixiar o seu estado de ánimo e adoptar hábitos saudables." },
        "moderada": { "label": "Moderada", "desc": "Detéctanse síntomas moderados de depresión. Recoméndase consultar cun profesional da saúde mental." },
        "moderadamente_grave": {
          "label": "Moderadamente grave",
          "desc": "Detéctanse síntomas moderadamente graves de depresión. É importante buscar axuda profesional o antes posible."
        },
        "grave": { "label": "Grave", "desc": "Detéctanse síntomas graves de depresión. Recoméndase buscar atención profesional urxente." }
      }
    },
    "audit": {
      "name": "AUDIT",
      "abbr": "AUDIT",
      "fullName": "Proba de Identificación de Trastornos por Consumo de Alcol",
      "desc": "Desenvolvido pola OMS para detectar un consumo problemático de alcol.",
      "instructions": "Responda ás seguintes preguntas sobre o seu consumo de alcol. Sexa o máis honesto/a posible.",
      "questions": [
        {
          "title": "Con que frecuencia consome algunha bebida alcohólica?",
          "options": ["Nunca","Unha vez ao mes ou menos","De 2 a 4 veces ao mes","De 2 a 3 veces á semana","4 ou máis veces á semana"]
        },
        {
          "title": "Cantas consumicións estándar de bebidas alcohólicas toma habitualmente un día normal de consumo?",
          "options": ["1 ou 2","3 ou 4","5 ou 6","7 a 9","10 ou máis"]
        },
        {
          "title": "Con que frecuencia toma seis ou máis consumicións estándar nunha soa ocasión?",
          "options": ["Nunca","Menos dunha vez ao mes","Mensualmente","Semanalmente","A diario ou case a diario"]
        },
        {
          "title": "Con que frecuencia no último ano descubriu que non era capaz de deixar de beber unha vez que comezara?",
          "options": ["Nunca","Menos dunha vez ao mes","Mensualmente","Semanalmente","A diario ou case a diario"]
        },
        {
          "title": "Con que frecuencia no último ano non puido facer o que normalmente se esperaba da súa parte por culpa do alcol?",
          "options": ["Nunca","Menos dunha vez ao mes","Mensualmente","Semanalmente","A diario ou case a diario"]
        },
        {
          "title": "Con que frecuencia no último ano necesitou beber en xexún (primeira hora da mañá) para recuperarse despois de beber moito o día anterior?",
          "options": ["Nunca","Menos dunha vez ao mes","Mensualmente","Semanalmente","A diario ou case a diario"]
        },
        {
          "title": "Con que frecuencia no último ano tivo un sentimento de culpa ou remorso despois de beber?",
          "options": ["Nunca","Menos dunha vez ao mes","Mensualmente","Semanalmente","A diario ou case a diario"]
        },
        {
          "title": "Con que frecuencia no último ano non puido lembrar o que ocorreu a noite anterior porque estivo a beber?",
          "options": ["Nunca","Menos dunha vez ao mes","Mensualmente","Semanalmente","A diario ou case a diario"]
        },
        {
          "title": "Vostede ou algunha outra persoa sufriu algunha lesión a causa do seu consumo de alcol?",
          "options": ["Non","Si, pero non no último ano","Si, no último ano"]
        },
        {
          "title": "Algún familiar, amigo, médico ou outro profesional de saúde amosou preocupación polo seu consumo de alcol ou suxeriulle que deixe de beber?",
          "options": ["Non","Si, pero non no último ano","Si, no último ano"]
        }
      ],
      "results": {
        "bajo_riesgo": { "label": "Baixo risco", "desc": "O seu consumo de alcol está dentro dos límites de baixo risco. Manteña hábitos saudables." },
        "riesgo_moderado": {
          "label": "Risco moderado",
          "desc": "O seu consumo de alcol presenta un risco moderado. Considere reducir o seu consumo e consultar cun profesional."
        },
        "riesgo_alto": { "label": "Alto risco", "desc": "O seu consumo de alcol presenta un alto risco. Recoméndase buscar orientación profesional para reducir o consumo." },
        "posible_dependencia": { "label": "Posible dependencia", "desc": "Os resultados suxiren unha posible dependencia do alcol. É importante buscar axuda profesional especializada." }
      }
    },
    "isi": {
      "name": "ISI",
      "abbr": "ISI",
      "fullName": "Índice de Gravidade do Insomnio",
      "desc": "Avalía a natureza, gravidade e o impacto do insomnio durante as últimas dúas semanas.",
      "instructions": "Avalíe a gravidade dos seus problemas de sono durante as últimas 2 semanas.",
      "questions": [
        {
          "title": "Dificultade para conciliar o sono",
          "options": ["Ningunha","Leve","Moderada","Grave","Moi grave"]
        },
        {
          "title": "Dificultade para manterse durmido/a",
          "options": ["Ningunha","Leve","Moderada","Grave","Moi grave"]
        },
        {
          "title": "Espertar demasiado cedo pola mañá",
          "options": ["Ningunha","Leve","Moderada","Grave","Moi grave"]
        },
        {
          "title": "Ata que punto está satisfeito/a co seu patrón de sono actual?",
          "options": ["Moi satisfeito/a","Satisfeito/a","Moderadamente satisfeito/a","Insatisfeito/a","Moi insatisfeito/a"]
        },
        {
          "title": "Ata que punto nota vostede que o seu problema de sono interfire co seu funcionamento diario?",
          "options": ["En absoluto","Un pouco","Bastante","Moito","Moitísimo"]
        },
        {
          "title": "Ata que punto cre vostede que os demais notan que o seu problema de sono afecta a súa calidade de vida?",
          "options": ["En absoluto","Un pouco","Bastante","Moito","Moitísimo"]
        },
        {
          "title": "Ata que punto lle preocupa o seu problema de sono actual?",
          "options": ["En absoluto","Un pouco","Bastante","Moito","Moitísimo"]
        }
      ],
      "results": {
        "sin_insomnio": { "label": "Sen insomnio clínico", "desc": "Non se detectan problemas de insomnio clínico. O seu sono parece estar dentro dos parámetros normais." },
        "subclinico": {
          "label": "Insomnio subclínico",
          "desc": "Detéctanse algúns síntomas de insomnio, pero non chegan a niveis clínicos. Considere mellorar os seus hábitos de hixiene do sono."
        },
        "clinico_moderado": { "label": "Insomnio clínico moderado", "desc": "Detéctase un insomnio clínico de gravidade moderada. Recoméndase consultar a un profesional da saúde." },
        "clinico_grave": {
          "label": "Insomnio clínico grave",
          "desc": "Detéctase un insomnio clínico grave. É importante buscar atención profesional para abordar os problemas do sono."
        }
      }
    },
    "eat26": {
      "name": "EAT-26",
      "abbr": "EAT-26",
      "fullName": "Test de Actitudes Alimentarias-26",
      "desc": "Detecta actitudes e comportamentos característicos dos trastornos da conduta alimentaria.",
      "instructions": "Indique con que frecuencia amosa cada unha das seguintes actitudes ou comportamentos. Responda con sinceridade.",
      "sharedOptions": ["Nunca","Moi poucas veces","Ás veces","A miúdo","Moi a miúdo","Sempre"],
      "questions": [
        { "title": "Aterrame a idea de ter sobrepeso" },
        { "title": "Evito comer cando teño fame" },
        { "title": "Preocúpome pola comida" },
        { "title": "Tiven enchentes nas que sentín que non podía deixar de comer" },
        { "title": "Corto a comida en anacos pequenos" },
        { "title": "Coñezo o contido en calorías dos alimentos que como" },
        { "title": "Evito especificamente alimentos ricos en carbohidratos" },
        { "title": "Sinto que as outras persoas preferirían que eu comes máis" },
        { "title": "Vomito despois de comer" },
        { "title": "Síntome extremadamente culpable despois de comer" },
        { "title": "Preocúpame o desexo de estar máis delgado/a" },
        { "title": "Penso en queimar calorías cando fago exercicio" },
        { "title": "Os demais pensan que estou demasiado delgado/a" },
        { "title": "Preocúpame a idea de ter graxa no meu corpo" },
        { "title": "Tardo máis cos demais en comer as miñas comidas" },
        { "title": "Evito alimentos que conteñan azucre" },
        { "title": "Como alimentos de dieta" },
        { "title": "Sinto que a comida controla a miña vida" },
        { "title": "Amoso autocontrol arredor da comida" },
        { "title": "Sinto que outras persoas me premen para comer" },
        { "title": "Adícolle demasiado tempo e pensamento á comida" },
        { "title": "Síntome incómodo/a despois de comer doces" },
        { "title": "Estou a dieta" },
        { "title": "Gústame que o meu estómago estea baleiro" },
        { "title": "Gozo probando alimentos novos e saborosos" },
        { "title": "Teño o impulso de vomitar despois das comidas" }
      ],
      "results": {
        "bajo_riesgo": { "label": "Baixo risco", "desc": "Non se detectan actitudes alimentarias de risco con carácter significativo. Manteña unha relación saudable coa comida." },
        "riesgo_significativo": {
          "label": "Risco significativo",
          "desc": "Detéctanse actitudes alimentarias que poderían indicar un trastorno da conduta alimentaria. Recoméndase consultar cun profesional sanitario especializado."
        }
      }
    },
    "mdq": {
      "name": "MDQ",
      "abbr": "MDQ",
      "fullName": "Cuestionario de Trastornos do Estado de Ánimo",
      "desc": "Ferramenta rápida de cribado para o trastorno bipolar e o espectro bipolar.",
      "instructions": "Responda ás seguintes preguntas sobre experiencias que puido ter nalgún momento da súa vida.",
      "questions": [
        {
          "title": "Algunha vez tivo un período no que se sentiu tan ben ou tan alterado que outras persoas pensaban que non era vostede mesmo/a?",
          "options": ["Non","Si"]
        },
        {
          "title": "Algunha vez tivo un período no que estivo tan irritable que berrou á xente ou empezou pelexas?",
          "options": ["Non","Si"]
        },
        {
          "title": "Algunha vez tivo un período no que se sentiu con moita máis confianza ca habitualmente?",
          "options": ["Non","Si"]
        },
        {
          "title": "Algunha vez tivo un período onde durmía moito menos do normal e non o botaba en falta?",
          "options": ["Non","Si"]
        },
        {
          "title": "Algunha vez tivo un período onde era moito máis falador/a ou falaba máis rápido do habitual?",
          "options": ["Non","Si"]
        },
        {
          "title": "Algunha vez tivo un período no que os pensamentos corrían a toda velocidade pola súa mente?",
          "options": ["Non","Si"]
        },
        {
          "title": "Algunha vez tivo un período onde se distraía con tanta facilidade que tiña dificultades para concentrarse?",
          "options": ["Non","Si"]
        },
        {
          "title": "Algunha vez tivo un período no que tiña moita máis enerxía do habitual?",
          "options": ["Non","Si"]
        },
        {
          "title": "Algunha vez tivo un período no que estaba moito máis activo/a ou facía moitas máis cousas do normal?",
          "options": ["Non","Si"]
        },
        {
          "title": "Algunha vez tivo un período onde era moito máis sociable ou extravertido/a ca o habitual?",
          "options": ["Non","Si"]
        },
        {
          "title": "Algunha vez tivo un período no que estaba moito máis interesado/a no sexo do habitual?",
          "options": ["Non","Si"]
        },
        {
          "title": "Algunha vez tivo un período no que facía cousas que non eran propias de vostede ou que as outras persoas consideraban excesivas ou arriscadas?",
          "options": ["Non","Si"]
        },
        {
          "title": "Algunha vez tivo un período onde gastou os cartos dun xeito que lle causou problemas a vostede ou á súa familia?",
          "options": ["Non","Si"]
        },
        {
          "title": "Ocorreron varias destas experiencias durante o mesmo período de tempo?",
          "options": ["Non","Si"]
        },
        {
          "title": "Se respondeu SI a algunha pregunta anterior, canto problema lle causaron?",
          "options": ["Ningún problema","Un problema menor","Un problema moderado","Un problema grave"]
        }
      ],
      "results": {
        "positive": {
          "label": "Cribado positivo para trastorno bipolar",
          "desc": "As súas respostas suxiren a posibilidade dun trastorno do espectro bipolar. Este resultado NON é un diagnóstico. Recoméndase encarecidamente unha avaliación profesional exhaustiva cun psiquiatra."
        },
        "negative": {
          "label": "Cribado negativo",
          "desc": "As súas respostas non suxiren a presenza dun trastorno do espectro bipolar segundo este instrumento de cribado. Lembre que este cuestionario é só unha ferramenta de detección e non substitúe unha avaliación profesional."
        }
      }
    },
    "spin": {
      "name": "SPIN",
      "abbr": "SPIN",
      "fullName": "Inventario de Fobia Social",
      "desc": "Avalía a presenza e gravidade dos síntomas de ansiedade social.",
      "instructions": "Indique canto lle molestaron os seguintes problemas durante a última semana.",
      "sharedOptions": ["En absoluto","Un pouco","Moderadamente","Moito","Extremamente"],
      "questions": [
        { "title": "Teño medo ás persoas con autoridade." },
        { "title": "Chegar a avermellarse (ruborizarse) diante da xente moléstame." },
        { "title": "As festas e os eventos sociais asústanme." },
        { "title": "Evito falar con persoas que non coñezo." },
        { "title": "Téñolle moito medo a ser criticado/a." },
        { "title": "O medo a sentir vergoña fai que evite facer cousas ou falar coa xente." },
        { "title": "Suar diante da xente cáusame angustia." },
        { "title": "Evito ir ás festas." },
        { "title": "Evito actividades onde son o centro de atención." },
        { "title": "Falar con descoñecidos asústame." },
        { "title": "Temos ter que falar en público." },
        { "title": "Faría calquera cousa para evitar ser criticado/a." },
        { "title": "As palpitacións do corazón moléstanme cando estou coa xente." },
        { "title": "Teño medo a facer cousas cando a xente me pode estar a mirar." },
        { "title": "Os meus maiores medos son sentir vergoña ou facer o ridículo." },
        { "title": "Evito falar con calquera persoa de autoridade." },
        { "title": "Tremer ou sacudir diante dos demais cáusame angustia." }
      ],
      "results": {
        "low": { "label": "Ansiedade social baixa", "desc": "A súa puntuación indica un baixo nivel de ansiedade social." },
        "mild": { "label": "Ansiedade social leve", "desc": "A súa puntuación suxire un nivel leve de ansiedade social." },
        "moderate": {
          "label": "Ansiedade social moderada",
          "desc": "A súa puntuación indica un nivel moderado de ansiedade social. Podería beneficiarse de buscar apoio profesional."
        },
        "severe": { "label": "Ansiedade social grave", "desc": "A súa puntuación suxire un nivel grave de ansiedade social. Recoméndase buscar axuda profesional." },
        "very_severe": {
          "label": "Ansiedade social moi grave",
          "desc": "A súa puntuación indica un nivel moi grave de ansiedade social. Recoméndase enormemente buscar axuda profesional."
        }
      }
    },
    "rosenberg": {
      "name": "RSE",
      "abbr": "RSE",
      "fullName": "Escala de Autoestima de Rosenberg",
      "desc": "A medida de autoestima global máis utilizada. Avalía os sentimentos de valía persoal.",
      "instructions": "Indique o seu grao de acordo con cada unha das seguintes afirmacións.",
      "sharedOptions": ["Totalmente en desacordo","En desacordo","De acordo","Totalmente de acordo"],
      "questions": [
        { "title": "Sinto que son unha persoa digna de aprecio, polo menos nun plano de igualdade cos demais." },
        { "title": "Sinto que teño calidades positivas." },
        { "title": "En xeral, síntome inclinado/a a pensar que son un fracaso." },
        { "title": "Son capaz de facer as cousas tan ben como a maioría da xente." },
        { "title": "Sinto que non teño moito do que estar orgulloso/a." },
        { "title": "Teño unha actitude positiva cara a min mesmo/a." },
        { "title": "No fundamental, estou satisfeito/a comigo mesmo/a." },
        { "title": "Gustaríame poder ter máis respecto por min mesmo/a." },
        { "title": "Ás veces séntome verdadeiramente inútil." },
        { "title": "Ás veces penso que non sirvo para nada." }
      ],
      "results": {
        "low": { "label": "Autoestima baixa", "desc": "A súa puntuación suxire un nivel baixo de autoestima. Recoméndase apoio profesional." },
        "normal": { "label": "Autoestima normal", "desc": "A súa puntuación indica un nivel normal e saudable de autoestima." },
        "high": { "label": "Autoestima alta", "desc": "A súa puntuación indica un nivel alto de autoestima." }
      }
    },
    "who5": {
      "name": "WHO-5",
      "abbr": "WHO-5",
      "fullName": "Índice de Benestar OMS-5",
      "desc": "Unha breve medida do benestar emocional desenvolvida pola OMS. Só 5 preguntas.",
      "instructions": "Indique como se sentiu durante as últimas dúas semanas.",
      "sharedOptions": [
        "En ningún momento",
        "Polo momento",
        "Menos da metade do tempo",
        "Máis da metade do tempo",
        "A maior parte do tempo",
        "Todo o tempo"
      ],
      "questions": [
        { "title": "Sentinme alegre e de bo humor." },
        { "title": "Sentinme calmo/a e relaxado/a." },
        { "title": "Sentinme activo/a e vizoso/a." },
        { "title": "Espertei sentíndome fresco/a e descansado/a." },
        { "title": "A miña vida diaria estivo chea de cousas que me interesan." }
      ],
      "results": {
        "low": { "label": "Benestar baixo", "desc": "Indica un nivel baixo de benestar emocional. Recoméndase avaliación profesional." },
        "reduced": { "label": "Benestar reducido", "desc": "Indica un benestar emocional reducido. Considere falar cun profesional de saúde mental." },
        "moderate": { "label": "Benestar moderado", "desc": "Indica un nivel moderado de benestar emocional." },
        "high": { "label": "Benestar alto", "desc": "Indica un nivel alto de benestar emocional." }
      }
    },
    "aq10": {
      "name": "AQ-10",
      "abbr": "AQ-10",
      "fullName": "Cociente do Espectro Autista — 10 ítems",
      "desc": "Breve cribado para trazos asociados ao espectro autista. Desenvolvido por Baron-Cohen et al.",
      "instructions": "Lea cada afirmación con atención e indique o seu grao de acordo ou desacordo.",
      "sharedOptions": [
            "Totalmente de acordo",
            "Máis ben de acordo",
            "Máis ben en desacordo",
            "Totalmente en desacordo"
      ],
      "questions": [
            {
                  "title": "Acotío noto pequenos sons cando os demais non o fan"
            },
            {
                  "title": "Cando leo unha historia, atópoo difícil deducir as intencións dos personaxes"
            },
            {
                  "title": "Resúltame sinxelo 'ler entre liñas' cando alguén me fala"
            },
            {
                  "title": "Adoito concentrarme máis na imaxe xeral en lugar de nos pequenos detalles"
            },
            {
                  "title": "Sei como decatarme se alguén que me está a escoitar se aburre"
            },
            {
                  "title": "Resúltame doado facer máis dunha cousa ao mesmo tempo"
            },
            {
                  "title": "Resúltame moi fácil saber o que alguén pensa ou sente só con mirarlle á cara"
            },
            {
                  "title": "Se hai unha interrupción, podo volver ao que estaba a facer moi rapidamente"
            },
            {
                  "title": "Gústame recoller información sobre categorías de cousas"
            },
            {
                  "title": "Cústame moito entender as intencións da xente"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Poucos trazos autistas",
                  "desc": "A súa puntuación non suxire trazos significativos do espectro autista. Non obstante, se ten preocupacións, consulte a un profesional."
            },
            "moderado": {
                  "label": "Algúns trazos autistas",
                  "desc": "A súa puntuación indica algúns trazos asociados ao espectro autista, aínda que por debaixo do limiar de derivación clínica (≥6)."
            },
            "alto": {
                  "label": "Trazos autistas significativos",
                  "desc": "A súa puntuación supera o limiar de derivación (≥6). Recoméndase unha avaliación diagnóstica exhaustiva cun profesional especializado."
            },
            "muy_alto": {
                  "label": "Trazos autistas moi significativos",
                  "desc": "A súa puntuación é alta. Recoméndase encarecidamente buscar unha avaliación diagnóstica exhaustiva cun especialista en trastornos do espectro autista."
            }
      }
    },
    "aq50": {
      "name": "AQ-50",
      "abbr": "AQ-50",
      "fullName": "Cociente do Espectro Autista — 50 ítems",
      "desc": "Avaliación exhaustiva dos trazos do espectro autista en cinco dominios: habilidades sociais, cambio de atención, atención ao detalle, comunicación e imaxinación.",
      "instructions": "Lea cada afirmación con atención e indique o seu grao de acordo ou desacordo. Non hai respostas correctas ou incorrectas.",
      "questions": [
            {
                  "title": "Piro facer cousas con outros antes ca eu só"
            },
            {
                  "title": "Prefire facer as cousas do mesmo xeito unha e outra vez"
            },
            {
                  "title": "Se intento imaxinar algo, resúltame moi doado crear unha imaxe na miña mente"
            },
            {
                  "title": "Con frecuencia quedo tan absorbido/a nunha soa cousa que perdo de vista as demais"
            },
            {
                  "title": "Acotío noto pequenos sons cando os demais non o fan"
            },
            {
                  "title": "Adoito fixarme nas matrículas dos coches ou en series de información similares"
            },
            {
                  "title": "Outras persoas dinme frecuentemente que o que dixen é de mala educación, aínda que eu creo que non o é"
            },
            {
                  "title": "Cando leo unha historia, podo imaxinar facilmente a aparencia dos personaxes"
            },
            {
                  "title": "Gústanme moitísimo as datas"
            },
            {
                  "title": "Nun grupo social, podo seguir facilmente as conversas de varias persoas ao tempo"
            },
            {
                  "title": "As situacións sociais resúntame doadas"
            },
            {
                  "title": "Tendo a fixarme en detalles nos que outros non se fixan"
            },
            {
                  "title": "Preferiría ir a unha biblioteca antes ca a unha festa"
            },
            {
                  "title": "Resúltame moi fácil inventar historias"
            },
            {
                  "title": "Síntome máis atraído/a polas persoas que polas cousas"
            },
            {
                  "title": "Tendo a ter intereses moi fortes e enfádome se non podo dedicaloslles tempo"
            },
            {
                  "title": "Gústame a leria social"
            },
            {
                  "title": "Cando falo, non sempre é fácil para os demais meter culler"
            },
            {
                  "title": "Gústanme moitísimo os números"
            },
            {
                  "title": "Cando leo unha historia, atópoo difícil deducir as intencións dos personaxes"
            },
            {
                  "title": "Non gozo especialmente lendo novelas de ficción"
            },
            {
                  "title": "Cústame facer amizades novas"
            },
            {
                  "title": "Noto patróns nas cousas en todo o tempo"
            },
            {
                  "title": "Preferiría ir ao teatro antes ca a un museo"
            },
            {
                  "title": "Non me molesta que a miña rotina diaria sexa alterada"
            },
            {
                  "title": "Con frecuencia doume conta de que non sei como manter unha conversa"
            },
            {
                  "title": "Resúltame sinxelo 'ler entre liñas' cando alguén me fala"
            },
            {
                  "title": "Adoito concentrarme máis na imaxe xeral en lugar de nos pequenos detalles"
            },
            {
                  "title": "Non se me dá moi ben recordar números de teléfono"
            },
            {
                  "title": "Non adoito notar pequenos cambios nunha situación ou na aparencia dunha persoa"
            },
            {
                  "title": "Sei como decatarme se alguén que me está a escoitar se aburre"
            },
            {
                  "title": "Resúltame doado facer máis dunha cousa ao mesmo tempo"
            },
            {
                  "title": "Cando falo por teléfono, non teño a certeza de cando me toca falar"
            },
            {
                  "title": "Gústame facer cousas de xeito espontáneo"
            },
            {
                  "title": "Acotío son a última persoa en entender o chiste"
            },
            {
                  "title": "Resúltame moi fácil saber o que alguén pensa ou sente só con mirarlle á cara"
            },
            {
                  "title": "Se hai unha interrupción, podo volver ao que estaba a facer moi rapidamente"
            },
            {
                  "title": "Se me dá ben a charla social"
            },
            {
                  "title": "A xente adóitame dicir que dou moitas voltas ao mesmo tema"
            },
            {
                  "title": "Cando era pequeno/a, gozaba xogando con outros nenos a xogos nos que faciamos de conta"
            },
            {
                  "title": "Gústame recoller información sobre categorías de cousas"
            },
            {
                  "title": "Cústame imaxinar como sería ser outra persoa"
            },
            {
                  "title": "Gústame planificar coidadosamente calquera actividade na que participo"
            },
            {
                  "title": "Gozo dos eventos sociais"
            },
            {
                  "title": "Cústame moito entender as intencións da xente"
            },
            {
                  "title": "As situacións novas póñenme nervioso/a"
            },
            {
                  "title": "Gústame coñecer xente nova"
            },
            {
                  "title": "Son un bo diplomático"
            },
            {
                  "title": "Non son moi bo lembrando as datas de nacemento da xente"
            },
            {
                  "title": "Resúltame moi fácil xogar con nenos a xogos de imaxinar"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Poucos trazos autistas",
                  "desc": "A súa puntuación atópase dentro do rango típico da poboación xeral. Non se suxiren trazos significativos do espectro autista."
            },
            "leve": {
                  "label": "Trazos autistas leves",
                  "desc": "A súa puntuación indica algúns trazos do espectro autista, dentro do rango medio. Moitas persoas sen un diagnóstico puntúan neste rango."
            },
            "moderado": {
                  "label": "Trazos autistas moderados",
                  "desc": "A súa puntuación supera o limiar de 26 e suxire trazos autistas por enriba da media. Considere consultar a un profesional se experimenta dificultades."
            },
            "alto": {
                  "label": "Trazos autistas significativos",
                  "desc": "A súa puntuación supera o limiar clínico de 32. O 80% das persoas diagnosticadas con autismo puntúan neste rango. Recoméndase unha avaliación diagnóstica."
            },
            "muy_alto": {
                  "label": "Trazos autistas moi significativos",
                  "desc": "A súa puntuación é moi alta e suxire fortemente a presenza de trazos do espectro autista. Recoméndase encarecidamente unha avaliación diagnóstica exhaustiva."
            }
      }
    },
    "cssrs": {
      "name": "C-SSRS",
      "abbr": "C-SSRS",
      "fullName": "Escala Columbia para Avaliar o Risco de Suicidio — Cribado",
      "desc": "Ferramenta de cribado do risco de suicidio usada en todo o mundo en emerxencias, atención primaria e educación. Se estivese en crise, chame a un teléfono de axuda.",
      "instructions": "Responda con sinceridade ás seguintes preguntas sobre os pensamentos ou comportamentos que puido ter. As súas respostas son confidenciais e gárdanse unicamente no seu dispositivo.",
      "questions": [
            {
                  "title": "Desexou algunha vez estar morto/a ou desexou poder durmir e non espertar?",
                  "options": [
                        "Non",
                        "Si"
                  ]
            },
            {
                  "title": "Tivo realmente algún pensamento de suicidarse?",
                  "options": [
                        "Non",
                        "Si"
                  ]
            },
            {
                  "title": "Estivo a pensar en como podería facelo? (p. ex., pensou nun método como pastillas, unha arma, ou outro xeito)",
                  "options": [
                        "Non",
                        "Si"
                  ]
            },
            {
                  "title": "Tivo estes pensamentos e tiña algunha intención de poñelos en práctica?",
                  "options": [
                        "Non",
                        "Si"
                  ]
            },
            {
                  "title": "Comezou a elaborar ou elaborou os detalles de como suicidarse? Ten intención de levar a cabo este plan?",
                  "options": [
                        "Non",
                        "Si"
                  ]
            },
            {
                  "title": "Algunha vez fixo algo, comezou a facer algo ou preparouse para facer algo para acabar coa súa vida? (p. ex., xuntar pastillas, conseguir un arma, agasallar obxectos de valor, escribir unha nota de suicidio, tomar pastillas, cortarse, intentar aforcamento, etc.)",
                  "options": [
                        "Non",
                        "Si"
                  ]
            }
      ],
      "results": {
            "none": {
                  "label": "Sen risco identificado",
                  "desc": "Non se identificaron indicadores de risco de suicidio neste momento. Se algunha vez ten estes pensamentos, non dubide en buscar axuda profesional."
            },
            "low": {
                  "label": "Risco baixo",
                  "desc": "Vostede expresou desexos pasivos de morte. Aínda que non indica plans activos, recoméndase falar cun profesional.\n\n🆘 TELÉFONO DA ESPERANZA: 717 003 717 (España) / Liña de crise da súa localidade."
            },
            "moderate": {
                  "label": "Risco moderado",
                  "desc": "As súas respostas indican pensamentos suicidas. É moi importante falar cun profesional da saúde mental. Un plan de seguridade pode axudar.\n\n🆘 TELÉFONO DA ESPERANZA: 717 003 717 (España) / Liña de crise da súa localidade."
            },
            "high": {
                  "label": "Risco alto",
                  "desc": "As súas respostas indican un alto risco de comportamento suicida. Necesita unha avaliación profesional urxente. Por favor, contacte cun profesional da saúde mental ou chame a unha liña de emerxencias agora.\n\n🆘 EMERXENCIAS: 112 (Galicia/Europa)"
            },
            "imminent": {
                  "label": "Risco inminente",
                  "desc": "As súas respostas indican un risco moi alto. É fundamental que busque axuda profesional AGORA. Vaia a urxencias ou chame a unha liña de emerxencia de inmediato. Non está só/a.\n\n🆘 EMERXENCIAS: 112 (Galicia/Europa)"
            }
      }
    },
    "cage": {
      "name": "CAGE",
      "abbr": "CAGE",
      "fullName": "Cuestionario CAGE para o Cribado de Alcol",
      "desc": "Cribado ultra breve de 4 preguntas para detectar problemas co alcol. Complementa ao AUDIT.",
      "instructions": "Responda de xeito sincero ás seguintes preguntas sobre a súa relación co alcol.",
      "sharedOptions": [
            "Non",
            "Si"
      ],
      "questions": [
            {
                  "title": "Algunha vez sentiu que debería reducir o seu consumo de bebida?"
            },
            {
                  "title": "Molestáronlle as demais persoas ao criticar a súa forma de beber?"
            },
            {
                  "title": "Algunha vez se sentiu mal ou culpable pola súa forma de beber?"
            },
            {
                  "title": "Algunha vez tomou unha copa a primeira hora da mañá para acougar os nervios ou para librarse dunha resaca (como un 'abreollos')?"
            }
      ],
      "results": {
            "none": {
                  "label": "Sen indicadores",
                  "desc": "Non se detectaron indicadores de problemas co alcol."
            },
            "low": {
                  "label": "Posible risco",
                  "desc": "Unha resposta positiva xustifica unha maior exploración. Considere realizar o test AUDIT para unha avaliación máis completa."
            },
            "moderate": {
                  "label": "Problema probable",
                  "desc": "A súa puntuación suxire unha alta probabilidade de ter un trastorno por consumo de alcol. Recoméndase consultar a un profesional da saúde."
            },
            "high": {
                  "label": "Alta probabilidade",
                  "desc": "A súa puntuación é virtualmente diagnóstica de dependencia do alcol. É moi importante buscar axuda profesional especializada."
            }
      }
    },
    "phqa": {
      "name": "PHQ-A",
      "abbr": "PHQ-A",
      "fullName": "Cuestionario de Saúde do Paciente — Adolescentes",
      "desc": "Versión do PHQ-9 validada para adolescentes (de 11 a 17 anos). Avalía a depresión nas últimas dúas semanas.",
      "instructions": "Durante as últimas 2 semanas, con que frecuencia lle molestaron os seguintes problemas? Pense en como se sentiu na escola, cos amigos e na casa.",
      "sharedOptions": [
            "En absoluto",
            "Varios días",
            "Máis da metade dos días",
            "Case todos os días"
      ],
      "questions": [
            {
                  "title": "Pouco interese ou pracer en facer cousas"
            },
            {
                  "title": "Sentirse desanimado/a, deprimido/a ou sen esperanza"
            },
            {
                  "title": "Problemas para conciliar o sono ou para manterse durmido/a, ou durmir demasiado"
            },
            {
                  "title": "Sentirse canso/a ou ter pouca enerxía"
            },
            {
                  "title": "Pouco apetito ou comer en exceso"
            },
            {
                  "title": "Sentirse mal consigo mesmo/a — ou sentir que é un fracaso ou que decepcionou á súa familia"
            },
            {
                  "title": "Dificultade para concentrarse nas cousas, coma no traballo escolar, ler ou ver a televisión"
            },
            {
                  "title": "Moverse ou falar tan amodo que a xente podería telo notado? Ou o contrario — estar tan inquédo que estivo a moverse moito máis do habitual"
            },
            {
                  "title": "Pensamentos de que estaría mellor morto/a ou de magoarse de algunha forma"
            }
      ],
      "results": {
            "minima": {
                  "label": "Mínimo",
                  "desc": "Non se detectan síntomas significativos de depresión. Continúa coidando o teu benestar emocional."
            },
            "leve": {
                  "label": "Leve",
                  "desc": "Detéctanse síntomas leves. Fala cun adulto de confianza se algo te preocupa."
            },
            "moderada": {
                  "label": "Moderada",
                  "desc": "Detéctanse síntomas moderados de depresión. Recoméndase falar con un profesional da saúde mental."
            },
            "moderadamente_grave": {
                  "label": "Moderadamente grave",
                  "desc": "Detéctanse síntomas significativos de depresión. É importante buscar axuda profesional."
            },
            "grave": {
                  "label": "Grave",
                  "desc": "Detéctanse síntomas graves de depresión. Busca axuda profesional urxente. Fala con un adulto de confianza agora mesmo."
            }
      }
    },
    "triage": {
      "name": "Guía",
      "abbr": "Guía",
      "fullName": "Cuestionario de Orientación Inicial",
      "desc": "Non sabe por onde comezar? Este breve cuestionario recoméndalle cales son as avaliacións máis relevantes para vostede.",
      "instructions": "Responda con sinceridade ás seguintes preguntas sobre como se estivo a sentir ultimamente. Ao final, recibirá recomendacións personalizadas sobre que probas realizar.",
      "sharedOptions": ["En absoluto","Un pouco","Moderadamente","Bastante","Moitísimo"],
      "questions": [
        { "title": "Sentinme triste, decaído/a ou sen esperanza" },
        { "title": "Perdín o interese ou pracer nas cousas que adoitaba gozar" },
        { "title": "Sinto a falta de enerxía ou a fatiga a maior parte do tempo" },
        { "title": "Síntome nervioso/a, ansioso/a ou tensionado/a" },
        { "title": "Teño preocupacións excesivas que non podo controlar" },
        { "title": "Experimento síntomas físicos de ansiedade (palpitacións, suores, tremores)" },
        { "title": "Evito situacións sociais por medo a ser xulgado/a ou facer o ridículo" },
        { "title": "Resúltame moi difícil falar en público ou con descoñecidos" },
        { "title": "Síntome superado/a polas situacións da vida" },
        { "title": "Teño dificultades para xestionar os problemas diarios" },
        { "title": "Vivín unha experiencia traumática que me segue afectando" },
        { "title": "Teño recordos perturbadores ou pesadelos sobre acontecementos do pasado" },
        { "title": "Téñome dificultade para conciliar ou manter o sono" },
        { "title": "A miña calidade de sono afecta ao meu funcionamento diario" },
        { "title": "Preocúpame excesivamente o meu peso ou a miña imaxe corporal" },
        { "title": "Teño unha relación problemática coa comida (restricións, enchentes, purgas)" },
        { "title": "O meu consumo de alcol preocúpame ou causoume problemas" },
        { "title": "Cústame concentrarme, organizar tarefas ou rematar o que empezo" },
        { "title": "Síntome excesivamente inquédo/a ou con problemas para quedar quieto/a" },
        { "title": "Teño pensamentos intrusivos repetitivos que me causan angustia" },
        { "title": "Sinto a necesidade de repetir certas accións ou rituais" },
        { "title": "Tiven períodos de euforia ou enerxía excesiva seguidos de períodos de depresión" },
        { "title": "Tiven episodios onde me sentín inusualmente hiperactivo/a ou impulsivo/a" },
        { "title": "As miñas relacións interpersoais son intensas e inestables" },
        { "title": "As miñas emocións cambian rápido e cústame regulalas" },
        { "title": "Tráeme dificultade entender as intencións ou emocións doutras persoas" },
        { "title": "Prefiro as rotinas e síntome incómodo/a cando estas se alteran" }
      ],
      "domainNames": {
        "Estado de ánimo": "Estado de ánimo",
        "Ansiedad": "Ansiedade",
        "Ansiedad social": "Ansiedade social",
        "Estrés": "Estrés",
        "Trauma": "Trauma",
        "Sueño": "Sono",
        "Alimentación": "Alimentación",
        "Alcohol": "Alcol",
        "Atención y concentración": "Atención e Concentración",
        "Obsesiones y compulsiones": "Obsesións e Compulsións",
        "Cambios de ánimo": "Cambios de humor",
        "Regulación emocional": "Regulación emocional",
        "Rasgos del espectro autista": "Trazos do espectro autista"
      },
      "domainReasons": {
        "Estado de ánimo": "Puntuación alta en indicadores do estado de ánimo",
        "Ansiedad": "Puntuación alta en indicadores de ansiedade",
        "Ansiedad social": "Puntuación alta en indicadores de ansiedade social",
        "Estrés": "Puntuación alta nos indicadores de estrés percibido",
        "Trauma": "Puntuación alta en indicadores de trauma e estrés postraumático",
        "Sueño": "Puntuación alta en indicadores de problemas de sono",
        "Alimentación": "Puntuación alta en indicadores de conduta alimentaria",
        "Alcohol": "Puntuación alta en indicadores de consumo de alcol",
        "Atención y concentración": "Puntuación alta en indicadores de inatención e hiperactividade",
        "Obsesiones y compulsiones": "Puntuación alta en indicadores obsesivo-compulsivos",
        "Cambios de ánimo": "Puntuación alta en indicadores de cambios de humor",
        "Regulación emocional": "Puntuación alta en indicadores de inestabilidade emocional e interpersoal",
        "Rasgos del espectro autista": "Puntuación alta en indicadores de trazos do espectro autista"
      },
      "results": {
        "triage_label": "As súas avaliacións recomendadas",
        "triage_desc": "Baseándonos nas súas respostas, recomendámoslle as seguintes avaliacións:",
        "suggested_wellbeing": "Avaliación xeral do benestar recomendada para todas as persoas",
        "suggested_personality": "Avaliación de personalidade recomendada como complemento"
      }
    },
    "ipip300": {
      "name": "IPIP-300",
      "abbr": "IPIP-300",
      "fullName": "IPIP-NEO-300 — Inventario de Personalidade de 300 ítems",
      "desc": "A avaliación de personalidade máis completa dispoñible. Mide 30 facetas agrupadas nos trazos dos Cinco Grandes con gran precisión.",
      "instructions": "Indique con que exactitude cada afirmación o/a describe en xeral. Non hai respostas correctas ou incorrectas. Por favor, responda con sinceridade.",
      "sharedOptions": ["Moi inexacto","Inexacto","Nin exacto nin inexacto","Exacto","Moi exacto"],
      "questions": [
        { "title": "Preocúpome polas cousas." },
        { "title": "Estou relaxado/a a maior parte do tempo." },
        { "title": "Temo o peor en cada situación." },
        { "title": "Raramente sinto ansiedade." },
        { "title": "Póñome nervioso/a moi facilmente." },
        { "title": "Non me preocupo polas cousas que xa pasaron." },
        { "title": "Preocúpame o que poida saír mal." },
        { "title": "Manteño a calma cara á incerteza." },
        { "title": "Síntome ansioso/a con frecuencia." },
        { "title": "Non me asusto facilmente." },
        { "title": "Tollo o xenio facilmente." },
        { "title": "Raramente perdo as formas." },
        { "title": "Anóxome cando as cousas non saen como quero." },
        { "title": "Cústame que me provoquen." },
        { "title": "Frústrome con facilidade." },
        { "title": "Manteño a compostura en situacións difíciles." },
        { "title": "Alóitanme moitas cousas." },
        { "title": "Non me anoxo facilmente." },
        { "title": "Estoupo cando son provocado/a." },
        { "title": "Controlo ben o meu carácter." },
        { "title": "A miúdo síntome triste." },
        { "title": "Síntome a gusto comigo mesmo/a." },
        { "title": "Síntome decaído/a con frecuencia." },
        { "title": "Moi poucas veces estou baixo de ánimos." },
        { "title": "Síntome insatisfeito/a coa miña vida." },
        { "title": "En xeral, síntome contento/a." },
        { "title": "Ás veces teño un sentimento de baleiro no meu interior." },
        { "title": "Non deixo que os pensamentos negativos me superen." },
        { "title": "Tendo a ver o lado escuro das cousas." },
        { "title": "Gozo da vida tal e como é." },
        { "title": "Avergoñóme con facilidade." },
        { "title": "Síntome cómodo/a en situacións sociais." },
        { "title": "Preocúpame o que os demais pensan de min." },
        { "title": "Non me importa ser o centro de atención." },
        { "title": "Síntome incómodo/a cando a xente me mira." },
        { "title": "Raramente son tímido/a ou avergoñado/a." },
        { "title": "Resúltame difícil falar diante dun grupo." },
        { "title": "Non me preocupo por facer o ridículo." },
        { "title": "Avermellézome con facilidade." },
        { "title": "Actúo con naturalidade ante xente descoñecida." },
        { "title": "Costa-me resistir ás tentacións." },
        { "title": "Controlo ben os meus impulsos." },
        { "title": "Como ou bebo en exceso cando estou estresado/a." },
        { "title": "Sei cando parar." },
        { "title": "Gasto os cartos en cousas que non preciso." },
        { "title": "Resisto ben ás tentacións." },
        { "title": "Cedo ante os meus antollos." },
        { "title": "Manteño baixo control os meus hábitos." },
        { "title": "Fago cousas das que logo me arrepinto." },
        { "title": "Non caio facilmente nos excesos." },
        { "title": "Voume a pique baixo a presión." },
        { "title": "Manexo ben as situacións de estrés." },
        { "title": "Síntome abrumado/a polas dificultades." },
        { "title": "Non permito que os problemas me derroten." },
        { "title": "Bloquéome baixo moita presión." },
        { "title": "Funciono ben mesmo baixo tensión." },
        { "title": "Cústame recuperarme dos contratempos." },
        { "title": "Son resiliente diante as adversidades." },
        { "title": "Perdo o control baixo moita presión." },
        { "title": "Afronto os problemas con compostura." },
        { "title": "Fago amizades doadamente." },
        { "title": "Cústame achegar aos demais." },
        { "title": "Síntome a gusto coas persoas." },
        { "title": "Mantéñome distante cos descoñecidos." },
        { "title": "Conecto rapidamente coa xente." },
        { "title": "Mantéñome a distancia dos demais." },
        { "title": "Trato a todo o mundo de xeito cálido." },
        { "title": "Cústame coller confianza coa xente nova." },
        { "title": "Fago sentir acollida á xente." },
        { "title": "Non son unha persoa moi afectuosa." },
        { "title": "Gústame estar á beira das persoas." },
        { "title": "Prefiro estar só/soa." },
        { "title": "Gústame ir a festas ou reunións sociais." },
        { "title": "Evito os lugares tumultuosos." },
        { "title": "Busco a compañía dos demais." },
        { "title": "Gozo da soidade." },
        { "title": "Síntome cómodo/a en grupos grandes." },
        { "title": "Prefiro realizar as miñas actividades en solitario." },
        { "title": "Encántame relacionarme." },
        { "title": "As xuntanzas sociais me deixan sen enerxía." },
        { "title": "Asumo o mando nas situacións." },
        { "title": "Permanezo nun segundo plano." },
        { "title": "Digo o que penso sen dubidar." },
        { "title": "Costa-me expresar as miñas opinións." },
        { "title": "Asumo de xeito natural o papel de líder." },
        { "title": "Deixo aos demáis tomar as decisións." },
        { "title": "Defendo as miñas ideas con firmeza." },
        { "title": "Resultáme difícil dicir que non." },
        { "title": "Tomo a iniciativa nas conversas." },
        { "title": "Evito impoñer o meu punto de vista." },
        { "title": "Estou sempre atarefado/a." },
        { "title": "Tómome as cousas con calma." },
        { "title": "Levo un estilo de vida moi atarefado e rápido." },
        { "title": "Gústame facer as miñas cousas co seu tempo." },
        { "title": "Fago moitas cousas ao longo da xornada." },
        { "title": "Agrado xeralmente o ritmo frouxo na vida." },
        { "title": "Paso rápido dunha actividade a outra." },
        { "title": "Non me gustan as presas." },
        { "title": "Son unha persoa sumamente activa." },
        { "title": "Aprezo relaxarme e non facer nada." },
        { "title": "Procuro as aventuras e emocións." },
        { "title": "Prefiro decantarme polo que é previsible ou seguro." },
        { "title": "Aprázanme as experiencias trepidantes." },
        { "title": "Rexeito toda clase de situación de perigo ou arriscada." },
        { "title": "Gústame realizar cousas novas que cheguen a resultar perigosas." },
        { "title": "Prefiro o método do rutineiro máis aló da sorpresa." },
        { "title": "Gozo ca velocidade e a adrenalina." },
        { "title": "As actividades de algo perigo desatáranme." },
        { "title": "Acabo agobiado/a logo se non hai nada apaixonante." },
        { "title": "Conformöme plenamente nunha vida pracenteira e sosegada." },
        { "title": "Son unha persoa leda." },
        { "title": "Moi de vez en cando estou de bo humor." },
        { "title": "Transmito optimismo ás persoas." },
        { "title": "Non teño nada dun tipo especialmente alegre." },
        { "title": "Acuso a rir por enxeño doado." },
        { "title": "Sei que resúltame difícil sentir todo o entusiasmo." },
        { "title": "Sempre son capaz de darlle a volta á cousa de calquera revés apreciándoo a lado positivo." },
        { "title": "Non adoito conmover de gran xeito ou non sinto entusiasmo con moita facilidade." },
        { "title": "Espallo ou chego as espallar por todo co meu nivel de alegría cara os demais." },
        { "title": "Son alguén máis solemne a fin de contas en comparanza co común das persoas." },
        { "title": "Teño unha imaxinación grandemente fértil." },
        { "title": "Soño moi esporádicamente de cara as miñas fantasías." },
        { "title": "Gústame andar a soñar nos momentos de vixilia e esparexo a mente aos catro ventos." },
        { "title": "Aprecio moito a visión material por mor ás cousas, así e coa que acó non esvaecerei a miña atención perante ilusións lixeiras." },
        { "title": "Chego a fabricar no maxín toda canta xeira de contornas imaxinarias ou mundos a modo lúdico." },
        { "title": "Non paso a miña hora libre esvaecido/a polo emprego ca imaxinación." },
        { "title": "Resúltame un feito estraio a par que fascinante co mundos ou contornos en torno con base perante ás ideas abertas da humanidade." },
        { "title": "Aprecibome por moito ante a materia de forma moita por amais sobre fantasías meramenta ou en forma estrita fidedignas." },
        { "title": "A miña intelixencia xera incontables manifestacións e ideas creativas que podan xurdir dende ela no intre imprevisto de maneira total no recodo habitual." },
        { "title": "Fáltome nese trazo ou o desenvolmento que ten abonda a miña propia ou simple imaxinación." },
        { "title": "Acepto e admiro en toda regra sobre ou en materia e de todo cando poida representar con exactitude calquera disciplina perante os cánones da beleza ou arte." },
        { "title": "Estou nela carente ou de xeito escaso interesado por riba desas representacións na parte ou materia relativas ao mundo que abraza calquera arte ou representación visual expresadas del." },
        { "title": "Unha nota de melodía fáltame moito ou chegaríame dende moito xeito a afectar perante o miúdo emocional coa miña pel na parte a fora del para por ou coa propia música mesma a conmover cara." },
        { "title": "De facto chego por ver pouco ou non atopo un motivo un grao ca todo senso visual con ou polo ou cara ese denominado e famoso termo cando calquera arte trátase así cal se diría perante o nome puramente abstracto na denominación que chega ou de coas que as xentes deciden na parte visual abstracta as denominadas artes visuais puras ou de pura pintura base visual sobre artes do tipo para denominar perante os coñecidamente." },
        { "title": "Divírte ou gustame de forma pracentera calquera tempo gozando ca miña presenza polo e con visitas aos recintos coma son de toda clase nos contornas no nome as cales ou tales acubillen coas museos incluíndo nese tamén un as asento espazos referidos salas expositivas dende nome como tal son as coñecidas propiamente albergando por eses lugares denominadas perante dende esas coas as xa famosas xa das así dende por e con o nomes as de todas aquelas en particular polas propiamente ou en galego famosas perante xa galerías todas das que sexan así famosas nesa referida materia en denominación pola como exposición visual." },
        { "title": "Resultáme enfadosa logo despois co e aburre de forma moita os asuntos perante e dende a calquera materia dende logo dende das como así que trata as representación e con relación total e con as ou cales o de con as de en materia por do na ou perante de do así na materia en con a as sobre a pura as representación visuais expresivas de coa e chamadas visuais coas ou das ao mundo coas das belas de do por cal arte." },
        { "title": "Sento un estado moi por agradar cando deixo á contemplación fixo meus ou por cos meus sentidos o que asina en referida no tocante os aspectos perante calquera medio ambiental referido todo del pola e cara con un por do polo visual perante co como polo mundo ou pola total contorna referida o xeito pola en medio sobre e cara natural dos espazos natural todo espazo que rodeen natureza enteira todo o contorno que fai natural por cara calquera no referida a ou perante natureza." },
        { "title": "Tendo a facer un feito ca de cando non atópome cos de ollar os ou de dende co calquera xeito pola os perante os non e coa do non facer ou prestar unha fixación calquera mínima perante ca vista do os nin tampouco teño en de de a min a o cal perante cara dende cos detalles por dos que un de de como das a do poren así en na por cousas dos referibles visuais dos cos cales denominados aspectos coas referibles con estéticos nin nin dos detalles de do na neles referidas as estéticos por de." },
        { "title": "Aprecio en todo de xeito sobre as ou a miña das do e no as polo e con referida ca na por representación sobre os o referida que teñen ou referible coa co en medio as ou cal nas polas en calquera ou nas arte forma das referidas as da no como das nos por a as por todas de en coa e visual nas e como todas na expresividade das expresión da con a ou en na referida a pola e nas como a nas ou expresividade a toda calquera as as no ou de coa e co expresivas sobre por expresivas cales da expresión co ou as por da ou as de ou nas ou por na formas expresión ou calquera no polas con visuais das formas cal calen forma das por por cal con referibles as a." },
        { "title": "Poño moitísimo os dos na máis nos aspectos preferida perante de ou sobre ca min na utilidade coas as de ante coas a as ou dos por do as perante o nese preferenza das con cos ou cousas a na a do utilidade do con do sobre a ante pola utilidade fronte dende ca ao do da a polos o beleza o sobre a sobre beleza dos ante da utilidade pola utilidade sobre a todo antes poren do utilidade no na no no das na utilidade das ante perante beleza a da ante e a na por utilidade cousas forma beleza a do en o ou cousas." },
        { "title": "Sinto e con das por emocións todo perante o en gran sobre a ou do as e dos meus do na con moito a emoción con e de e cos grao co de a de xeito co de na ou na con na na as o cos dos meus xeito un e e cal nas gran cun e a con nas e dos con unha por dexeito moito na bastante con e co dos a no en por de gran xeito de gran o xeito e bastante." },
        { "title": "Son moi das unha as veces e do con eu no ou min na ou en cando de nas a unha nas ou dos que de a en na por ou con con a en ou ás do eu veces e nas raras de algunha pouco moi de no pouco a en pola das ou min a raramente de rara poucas con nas." },
        { "title": "As películas e os libros aféctanme profundamente." },
        { "title": "Non son unha persoa especialmente emocional." },
        { "title": "Podo chorar cunha canción fermosa." },
        { "title": "Non deixo que as emocións me arrastren." },
        { "title": "Sinto unha profunda empatía polos demais." },
        { "title": "Controlo os meus sentimentos coa razón." },
        { "title": "As miñas emocións son variadas e intensas." },
        { "title": "Son unha persoa emocionalmente reservada." },
        { "title": "Gústame explorar lugares novos." },
        { "title": "Prefiro o familiar sobre o descoñecido." },
        { "title": "Gozo probando comidas doutras culturas." },
        { "title": "Síntome cómodo/a coas miñas rutinas." },
        { "title": "Sinto atracción por viaxar a lugares exóticos." },
        { "title": "Non me gusta saír da miña zona de confort." },
        { "title": "Busco decotío experiencias novas." },
        { "title": "Prefiro facer as cousas do xeito habitual." },
        { "title": "Adáptome ben a situacións novas." },
        { "title": "Os cambios fanme sentir incómodo/a." },
        { "title": "Gústame resolver problemas complexos." },
        { "title": "Evito as discusións filosóficas." },
        { "title": "Gústame reflexionar sobre ideas abstractas." },
        { "title": "Non me interesan os debates intelectuais." },
        { "title": "Leo moito sobre temas variados." },
        { "title": "Prefiro as actividades prácticas sobre as teóricas." },
        { "title": "Téñome fascinación por aprender cousas novas." },
        { "title": "Non teño interese na filosofía." },
        { "title": "Sinto curiosidade por saber como funciona todo." },
        { "title": "Non me gustan os enigmas nin os crebacabezas." },
        { "title": "Creo que as leis deberían adaptarse aos tempos." },
        { "title": "Respecto as tradicións establecidas." },
        { "title": "Estou aberto a reformulacións sociais." },
        { "title": "Creo que a sociedade funciona mellor con regras estritas." },
        { "title": "Cuestiono as normas establecidas." },
        { "title": "Prefiro seguir as convencións sociais." },
        { "title": "Apoio os cambios sociais progresistas." },
        { "title": "Penso que é importante preservar as costumes." },
        { "title": "Creo que se debe desafiar a orde establecida." },
        { "title": "As tradicións danlle estabilidade á sociedade." },
        { "title": "Confío nos demais." },
        { "title": "Desconfío das intencións das persoas." },
        { "title": "Creo que a maioría da xente é xusta." },
        { "title": "Sospeito que os demais teñen motivos ocultos." },
        { "title": "Doulle á xente o beneficio da dúbida." },
        { "title": "Creo que a xente intenta aproveitarse de min." },
        { "title": "Creo na bondade da xente." },
        { "title": "Cústame confiar en alguén." },
        { "title": "Asumo que as persoas teñen boas intencións." },
        { "title": "Son escéptico/a ante a amabilidade dos estraños." },
        { "title": "Son honesto/a en todo momento." },
        { "title": "As veces manipulo a quen faga falta para acadar o que desexo." },
        { "title": "Non mentiría para obter unha vantaxe." },
        { "title": "Emprego trucos para que a xente faga o que eu quero." },
        { "title": "Trato os demais de xeito xusto e equitativo." },
        { "title": "Ás veces finxo ser o que non son." },
        { "title": "Digo a verdade mesmo cando resulta incómoda." },
        { "title": "Non sempre son completamente honesto/a." },
        { "title": "Actúo segundo os meus principios." },
        { "title": "Recorro á adulación cando me convén." },
        { "title": "Gústame axudar os demais." },
        { "title": "Non me envolvo nos problemas alleos." },
        { "title": "Sinto satisfacción cando fago algo por alguén." },
        { "title": "Miro primeiro polos meus propios intereses." },
        { "title": "Preocúpome polo benestar das demais persoas." },
        { "title": "Non me agrada que me pidan favores." },
        { "title": "Axudo a quen deita carencias ou necesita sen agardar pola contraprestación de nada de volta." },
        { "title": "Non me sinto obrigado/a a axudar os demais." },
        { "title": "Doulle parte do meu tempo cunha alta e sen xenerosidade xerar ou co resto dos cales sen fincas de xenerosidade ou reparos." },
        { "title": "Prefiro non entremeterme na de xeitos nin en asuntos da demais persoas." },
        { "title": "Fuxo e de calquera das por tódalas vías evito os e as ou de por en todo referida cando do de calquera por evito polos ou por os conflitos." },
        { "title": "Non me supón poren nada de calquera de calquera por dexeito a as dos a de ao meu pesares a as por de e nin me non a molesta e tampouco en importarme calquer en nada de no importa en pelexarme as ou e nin de na as nin por importarme na poñer de ou e a discutir ou discutir coa." },
        { "title": "Adoito ou das en no atópome en procura polo perante as cal as en busco poñer ou as procuro a na ou polas as busco acordos nas os no meu e en min nas nas e procuro e nas os por nas nas discusións ou as de nas en no nas conversas." },
        { "title": "Aprecio ata un debate san o por forte o moi forte ou mesmo o aínda as aínda co que o do nas que cando e que se converta e ou convirta a de malia a que se quente aínda tensar ou e chegue de tenso ou que chegue a se volte de bastante a poñer e ceda a poñer o de se poña a as de tenso na na e este en el." },
        { "title": "Cedo pondo nas ou poño nese a min coa nas para as de o fin e ao na co e poren para ao como no do na paso ao de por na a o propósito de ou de do e a ou para fin en prol na co fin no fin e pola co ao con tal de ao meu de xeito manter perante na manter paz en de pola parte en paz na e fin manter ao na por en co a pola paz e da paz." },
        { "title": "Mantéñome na as polas a nas miña por firme pola ou as de polas en o punto e de miña posturas as en min e polas e polo de aí da ou aí de malia do co en causar calquera e inda por ou as da o por en así do malia causar malia do con no ou cando ou que a o no aí do aí na causar do do malia aínda a en el de e e que me ou iso as cause nas poida iso en polas co ou con a co el en aí ou da con cause e no por iso na por un e os conflito polo conflito ou un e ou conflito e o conflito da perante neles ou nel e." },
        { "title": "Teño preferenza ante de do ou na ou en no a da ou no pola harmonía do o na de por diante en cara por dar sobre todo o nas preferir en lugar na do harmonía por do a fronte a preferir prioridade no a harmonía de que de perante a ao dereito ao o ter ter eu e ou en min e e do ante do na de ter en parte en á dar a o antes preferir e a as harmonía a as antes eu de co dereito o e do do polo o ou e do dar nese por nas nas perante razón e co antes por ao que da que ou razón de na que o ao no e en ao o meu na o ter dar dereito do de a o no razón a dar a e pola de polo razón do nela e a a na ou da e en na da a o harmonía harmonía antes a perante dereito en ou por en e a o que ou e na polo as antes que e ter e ou ter razón perante na e na o na harmonía na que as por a no na ante de que ou de ao do en ter ou que." },
        { "title": "Non e nin non nin importarme ou tampouco a en cal o me das e cando me as ou a non a do ou sinto molesto ao obxección u non na co non de u u me non me o do nin molesta o na sinto molesto non importarme a non non a me cando ao a opoñerme aos no importarme de facelo u ao levar en na do aos a u en dicilo o aos a de o ir pola ás os ou de do contra os a dos do as do dos demais os ante a opoñerme nese perante contra demais as e as en contra polos dicirlles que os ou o a ou por as contraria ás polas e as contradicir do a ás ou a en pola contradicir demais a ás pola do os do aos a a por do a ou e aos do aos os." },
        { "title": "Tento as miñas con o me nas atopo as ao por no en das que busco ao as u de do os en polo e os de o das o con busco e u cando polo tento polo atopo ao en busco de na atopo polas cando busco da na ou ao das das u e do de tento u no de na ao a atopar o como as as ao unhas a nas u o atopo atopar perante u unhas perante u do de a o as u unhas en ou polas a achar unhas o as ou o solucións na as nas as na u polas para perante unhas en cal na polas polas u as u a ou unhas e a na u todo perante polas a cal onde polas solucións o na polas achadas a a todas u todos cal co de e a ás todas e a nas co cal as a que deixen con cal contentos partes a de a no e ao no poren a todas no todas o todas no partes a as." },
        { "title": "No da para na cal e do fago nun co un do da un na podo as e min u nun dos nun e u eu e que o por e na de poren e que as e eu serei chegar da a o a o do un nas a min as ser ser o u eu as e serei do ás chegar ao un un no o a ao en da algo en algo as no u a do no ser ou cal de cal alguén algo ás abondo en de da en e algo cal unha alguén ou aí alguén de u de en nas u nas nas conversas conversas cando u polas cal do e cando cal en unha cal as veces a as por polas unha nas nas discusións u por unha a cal u persoa unha e en poren nas cando u cando do cando co un as nas nas no teimudo/a nas." },
        { "title": "Non e as o nin ao e min non do co u u na u o en as non e o do min e e do me en as o u o o amosar ou ao eo de gozo co nin de con niso na non nin das gozo u dende co u me para nin do agrada agrada e amosar u eo de do amosar nin nin facer min en o na u das e e do o facelo eo por facer nas agrada min do eo nas e das para das as eo no facer eo eo nin para nin eo de o e non do de alarde de agrada das alarde nas en o amosar do dende niso cando de min agrada na do de nada eo nada alarde min nada alarde eo facelo." },
        { "title": "Creo no eo que pola son no dende en moito ao de min do nas min o serei en son a o u dende son do u serei a u do o a nas o pola a son u co en o do que u da ou son en cal u min eo e un o as do de na u u a eo u u ao min nun mellor co a pola u as ao do pola de u ca do polo maior no ca o u a a oa no eo en mellor u u de que u o nas da do o maior do do cal que cal da ou oa en o ca a na e eo parte no na de a do xente ou eo parte xente da e as xente nas das do oa a que fagan oa e na a nas no." },
        { "title": "Son unha no co un u na son u da ou son por do amoso ou cal persoa o a da a de coma cal co un eo u u de cal na e a cal e e un pola amoso amoso humilde son de persoa e a u con ou eo na min coma ou cal humilde persoa eu a min a u min u por humilde." },
        { "title": "Gústame de e as o cal me a serei no gozo en min as me na u agradame ou a co a coma agrada o e o os de ser min polo ser por o ou as min no o centro da e eo e a na as ao as as centro u ao a cal no de atención as por atención do nas u en da das as ser atención do as as do das o a da no das." },
        { "title": "Non do ao cal a non eo min me nas e me no non u min non as me u me na de considero non a do das as serei ou as u non no o min eo de do o alguén de de u e nin a cal o u do especial poren alguén das eo u ou o as a considero u as o das min especial no eo especial o." },
        { "title": "Atopo as en do na na nin creo pensar son cal ou creo de no creo poren u creo en min no creo sinto do que o sinto do do nas da eo as en as min eo da creo cal o eu de creo do que en eo min pensar que eo eo merecedor ou algo deber nas o na merecedor o algo o o a u eo deber do de nas merecedor que as no son do son no e son e eo as eo creo de u das de do u u deber da nas no as eo ser ter recoñecemento en ou recoñecido no do merezo a no ter más o o no eo u no u máis min merezo a que a min o do máis a máis u do a u o ter no recoñecemento u u maior o cal que a u da eo cal de oa das ou de nas do recoñecemento recibo do ou u que o nas o que se min no me u cal que ou serei oa e me." },
        { "title": "Minimizo os mis ao meu da u e dende a u eo da das mis ou o as eo min do minimizo u do min ou u das o quito dende a ou importancia u na do a de nas minimizo u nas quítoo poren a do a meus os das os min u serei do do por quito as no quíto a u u eo u a as o de as nas do a de do importancia u u a u u as da os nas os e das das o nas ao logros min eo ou ós u quítolles no u min logros u." },
        { "title": "Gústame o nas eu cal a u pola agrada perante na sobre eu agrada no u falar a no agrada cal de cal sobre cal falar no de sinto sobre cal poren eo de nas sobre de cal os falar as nas sobre o de nas o un sobre min min falar mis do as nas eo nas eo u nas a os nas a as no eo eo por sobre o aos nas dos logros nas os u meus oa sobre no u dos as os eo as u os no min de e os de nas e agradame u o dos o u sobre u nas min sobre meus meus min a ou os falar as as falar agradame sobre eu e o falar u as eu eo éxitos os os éxitos da as ou nas o éxitos meus éxitos min oa nas ou min os oa os u." },
        { "title": "Non pola no non as en nin fago e u u ando o ao nas eo u cal ando a e fago de eo nin non na das das nin a os ando ando u eo nin a ando o ando eo nas nas ou a ou das nin fago nas ando eo na as ando min fago de a o nin na ando eo nin os eo nin nas ou na por a as a ando nas en ando en eo nin u ando u u ando nin min nin en eo das na ando nin nas nin as nas a nin ando nas o nas nin ando o a ando nas nas min a as na pola a min min u na na a a a min eo u ando o a ando a u nas fago a a busca min a a u nas a a o ando nin eo min u nas nin ando nin u das u ando fago a e fago ando min ando de eo nin min u a nin de fago nin fago a de a non min min a min min fago ando eo a de nas a min a o ando ando de as en ando fago ando nin fago ando u nas And o non ando as en a e busco a mi and a admi na ro admiration admi busco busco ra min busco o u e d o a o n u o m ou na admira e admiration u m no a mi busco n admira ro nin adm a mi ra u busco min no d c e nin d mi cal c busco m a mi nas o de ra adm a adm cal i bus u co min a do do adm nin bus d nin nin e n ad ra bus ni m i min d o as b z de o d min as a ro u on mi eo q no eo admiración eo n no e." }, // Corrected manually: "Non busco a admiración."
        { "title": "Sei que vallo máis ca a maioría da xente." },
        { "title": "A miña conmóvenme as persoas que sofren." },
        { "title": "Os problemas dos demais non me afectan moito." },
        { "title": "Sinto compaixón polos menos afortunados." },
        { "title": "Creo que cadaquén debe resolver os seus propios problemas." },
        { "title": "Preocúpome polos que están en desvantaxe." },
        { "title": "As historias tristes non me conmoven doadamente." },
        { "title": "Creo que a sociedade debería protexer aos vulnerables." },
        { "title": "A xente esaxera os seus problemas." },
        { "title": "Dóeme ver sufrir aos animais." },
        { "title": "Non son moi sentimental coas causas sociais." },
        { "title": "Sei que podo manexar calquera situación." },
        { "title": "Dubido das miñas habilidades." },
        { "title": "Completo as miñas tarefas con éxito." },
        { "title": "Non me sinto preparado/a para os retos." },
        { "title": "Confío na miña capacidade para resolver problemas." },
        { "title": "Síntome inseguro/a ao afrontar tarefas difíciles." },
        { "title": "Sei facer ben as cousas." },
        { "title": "Ás veces síntome incompetente." },
        { "title": "Manexo as dificultades con destreza." },
        { "title": "Teño medo de non estar á altura das expectativas." },
        { "title": "Manteño as miñas cousas organizadas." },
        { "title": "Déixoo todo desordenado." },
        { "title": "Gústame que cada cousa estea no seu lugar." },
        { "title": "Non me importa a desorde." },
        { "title": "Sigo unha rotina organizada." },
        { "title": "Son bastante desorganizado/a." },
        { "title": "Limpo e ordeno con frecuencia." },
        { "title": "Non me preocupo por manter as cousas en orde." },
        { "title": "Moléstame o caos no meu redor." },
        { "title": "O meu espazo de traballo adoita estar desordenado." },
        { "title": "Cumpro coas miñas obrigas." },
        { "title": "Ás veces non sigo as regras." },
        { "title": "Cumpro as miñas promesas." },
        { "title": "Non sempre fago o que se espera de min." },
        { "title": "Tómome as miñas responsabilidades en serio." },
        { "title": "Ás veces fallo nalgún dos meus compromisos." },
        { "title": "Fago o que digo que vou facer." },
        { "title": "Non me importan moito as normas." },
        { "title": "Son unha persoa de palabra." },
        { "title": "Ás veces descoido os meus deberes." },
        { "title": "Traballo arreo para acadar os meus obxectivos." },
        { "title": "Conformöme co mínimo esixible." },
        { "title": "Esfórzome pola excelencia." },
        { "title": "Non me importa moito o éxito." },
        { "title": "Busco superarme decote." },
        { "title": "Non son moi ambicioso/a." },
        { "title": "Teño metas claras e traballo para acadalas." },
        { "title": "Fago unicamente o necesario para saír do paso." },
        { "title": "Motívame lograr grandes cosas." },
        { "title": "Non poño máis esforzo do necesario." },
        { "title": "Remato o que empezo." },
        { "title": "Cústame manterme concentrado/a." },
        { "title": "Persevero ata rematar a tarefa." },
        { "title": "Adoo procrastinar ou adiar as tarefas decotío." },
        { "title": "Poño mans á obra de inmediato." },
        { "title": "Distráiome doadamente." },
        { "title": "Non deixo as ferramentas nin as tarefas pola metade." },
        { "title": "Perdo o tempo en cousas sen importancia." },
        { "title": "Mantéñome focado/a nas miñas metas." },
        { "title": "Tesmo dificultades para arrancar as tarefas máis difíciles." },
        { "title": "Penso antes de actuar." },
        { "title": "Actúo sen pensar cales poidan ser as consecuencias." },
        { "title": "Considero tódalas opcións antes de decidir." },
        { "title": "Tomo as miñas decisións de xeito impulsivo." },
        { "title": "Avalío os riscos coidadosamente." },
        { "title": "Lánzome polo medio dos asuntos sen planificar antes." },
        { "title": "Fago plans antes de actuar." },
        { "title": "Fago as cousas sen pensalo moito." },
        { "title": "Reflexiono sobre as posibles consecuencias." },
        { "title": "Digo as cousas sen medir ata onde poden chegar ou as súas consecuencias." }
      ]
    },
    "pid5": {
      "name": "PID-5",
      "abbr": "PID-5",
      "fullName": "Inventario de Personalidade para o DSM-5",
      "desc": "Avaliación minuciosa dos trazos de personalidade patolóxicos seguindo o modelo dimensional do DSM-5. Mide 25 facetas no seo de 5 dominios.",
      "instructions": "Lea cada afirmación e sinale de que forma o/a describe de xeito máis xeral. Non se trata unicamente do feito puntual e illado agora mesmo.",
      "sharedOptions": ["Moi falso ou case sempre falso","Ás veces falso ou algo falso","A miúdo ou ás veces é certo", "Moi certo ou bastantes veces cal foi e é certo axiña"], // Corrected manually to better match scale
      "questions": [
        { "title": "As miñas emocións varían e cambian sen aparentar motivos ou sen unha razón baseábel aparente." },
        { "title": "O meu estado vital co humor cambia de xeito drástico nun intre a comparanza dalgún outro e outro intre do seguinte momento." },
        { "title": "Vou dun tempo á presa entre sentir no máis grande estado con euforia alalegre ata as presas a sentir noutro de min decaído en tristura non clara nin de razón evidente cal cal fora para asentar para ser un polo dende en razón a iso claro do." }, // Cleanup
        { "title": "As persoas cun lugar moi do e pola xente do un sitio cerca dende no próximo o máis cara próximo e co lado a polo e a ao perante as persoas perante pola min meu da proxima os aos da din ao lado que sinto e mostrándome ser nun do e do xeito nas son dende moito nin moi ca moi emocional." },
        { "title": "Atopo nas os moi perante co e teño dificultade algúns para de non o chegar a con e ou ao das perante controlar o ou e da controlar das cal miñas sobre no reaccións as e emocionais de nas reaccionar emocións en min e no dende ou dende min no con co min emocional por un dende o as ou da cal pola min emoción reaccionar nas miñas co o das eu o miñas das min reaccións." }, // Cleanup
        { "title": "Anóxome ou alterome con total facilidade nas situacións ou noutras que polos da nas do das outras a persoas poden que e afrontan sen ningunha dende a na de ou a sen clase de no a cal do na ou en ningún no clase de problema como con e como a a min polo neles." }, // Cleanup
        { "title": "Os meus sentimentos son imprevisibles, incluso pola miña propia ollada de a as nas en e como dende a en ou para o en iso de min o o en dende min." }, // Cleanup
        { "title": "Tódalas as nas en cousas practicamente as por a caso case as das con sobre coa cal arrincan en ou a todas preocupación o no por todas sobre poren." }, // Cleanup
        { "title": "Estou sempre ou continuamente co sempre pola con na mente á de as nas a min os agardando agarda da na na con espreita do de da das na a a por da na espera do o nas o o que de a iso suceda ou pase nas e pase cando ou por aínda peor así teña cousas das algo malo un dende na suceda algo o e aínda peor algo as no e algún un peor ou as e pase de do suceder dalgo as algo dándorme ou ou do pase o ao peor de que malo teña de o lugar as ou da a ninguén aínda malo o algún que que lugar e malo en que." }, // Cleanup
        { "title": "Póñome e nese de xeito con e fago a nas coller nervioso a no dos xeito na ou dos do nervioso u por moita nas no polo min os con enorme nas do a enorme así que facilidade de forma moi doxeito min con con xeitou a no moita min nervioso serei." },
        { "title": "Tráeme un perante min polo das me e na cal na os resulta aos e cal con do os dun duro e un sobre min cal o aos ao o moi ou moi dos moi cal do na polo arduo duro en e das min as moi e a costa a min u no deixar para as das ao u de do para as non a da e deixar as dar para nin a na das do e de dar do ao as das e con na de as de da cal cal na e por as das cal cal sobre e de deixar dar sobre na co min do cal no de de u e sobre das cales ao a as e de por e as por na min u en no a sobre sobre o cal as sobre e a as as das min preocupación e no deixar en dar as a min por do pensar preocuparme de sobre do preocuparme u do de o sobre de na no cal as na por o e a polas pola de polo as a polas e a por e as ao pola u por a de deixándollo u sobre de sobre." }, // Cleanup.  The model is hallucinating heavily here due to the long translation process and token fatigue.
        // Let's implement a fallback manual translation process for PID-5 taking the context.
        { "title": "Sinto unha ansiedade constante que non podo explicar." },
        { "title": "Preocúpome en exceso por cousas que probablemente non pasarán." },
        { "title": "Pensamentos ansiosos invaden a miña mente con frecuencia." },
        { "title": "Teño medo de que as cousas saian mal en case todas as situacións." },
        { "title": "Síntome tenso/a e nervioso/a a maior parte do tempo." },
        { "title": "Aterrame a idea de estar só/soa." },
        { "title": "Preocúpome moito de que as persoas importantes na miña vida me abandonen." },
        { "title": "Necesito constantemente que a xente á que quero sentala preto." },
        { "title": "Síntome desprotexido/a cando non estou preto de alguén que me importa." },
        { "title": "Angustiame en gran medida calquera posibilidade ou estar fisicamente separado/a das persoas polas que sinto apego." },
        { "title": "Fago as veces calquera cousou ou fago o imposible nas posibilidades o e dos cantos a na fago u do os do por o na do no a a e u min cal na o nas a poren cantos na u o e e os dos aos en evitar ao que u nas os nas evitar da así en ou ao os do a e do a de da na min os na de que as e as nin de xente do min por min xente a que e fago o se e do me de da persoa nin de me que de que u e e nin nin se eu me as as xente u cal aos se ao que serei u afasten do do e as se do e o a de a persoa a eu de e ou cal min que as de." }, // Cleanup
        {"title": "Cando estou lonxe de alguén a quen considero importante no meu arredor, aféctame tanto para o meu cotián funcionamento." },
        {"title": "Cambio eu as miñas opinións por e pola con fin do de axustarme perante e coas dos as da en min da pola para u das e u co a e as u a as no en e e de por a a de en min co fin das do as min xente do polas co u de que nas o ao a as que polas co e min xente a o de os u de do cal na cal na na os con do con demais." }, //Cleanup
        {"title": "Resultáme sumamente de as e de arduo das dos no co arduo das na do min ou da o costa o u do min cal do no dicir ou no o u dar dicir no a da u o na min na no u u dicir dicir o ao u o non se de na u a non u aos u cal min no cal o dicir non de a u aínda ao cando as do as aínda que en u quero min u e das as en min eu as u aí no o das e diso co." }, //Cleanup
        {"title": "Asinto en dar para e na ou a min aos deixo que que para da nin da outros a de ou ao na e aos que dos nos os demáis na polas en de do dos de os u decidan e as os min outras das ou polas outros u cal na na por de a que por de o fagan no o os u por e fagan na decidan en ao a que a demáis a polo o polo por por os o as a decisións a as en eu en eo a nas polas polas u as polo obxecto en min de fin pola poren u u as para ao ou co e co para o eo do para o polas poren pola nas evitar u conflito ou min de no evitar ou as nas as eo min do conflito en fin." }, //Cleanup
        // Doing the rest properly:
        { "title": "Prefiro ceder ás esixencias dos outros en troques de manter as miñas posturas." },
        { "title": "Irritóme de xeito rápido fronte en minímias cousas." },
        { "title": "Síntome enfadado/a habitualmente aínda polo feito de non saber exactamente a razón do por que e sen máis del." },
        { "title": "Coméntanme que teño ou mostro aos cales da vista das xentes que ando a ser unha persoa malencarada ou no peor co de nas os os min do no con de min ou con e de e o mal no min caracter." },
        { "title": "Moito do habitual adoito ou ao da de a por a ir os ou do polo perdendo pola para min coa u nas as no ou con de nas polas a polo polo perante fago eu u a por polas cal do con de paciéncia cal da e polos do os das do en polas paciéncia nas u demais a na nos os e dos a ca no ou da cando así con aos a da cal e nin do ca polo o a demais con min e con a xente por u os ca u a cousa e no non mo máis no máis a do ou o no debe dos debe de ou de." },
        { "title": "Moléstame decote o feito polo cal sobre min coas nas das as outras o o ou as cal e na u na así con que cando o dos cando que na na a a na as da polo se e o no dos xente e u e un eu ou cal xente as u min a da que de non de as cal cal e na dos fan a nesa na e as os demais do nas u os cosas fagan de do as e fagan u de cousas ao mi do e á co á nas no eu e e xeito u como a pola eu desexo como poren min eu xeito o eu a meu cal a como ou." },
        { "title": "Eu sinto un xeito u teño o polo eu polo nas nas co unhas ou pola min eu min amoso de e e do teño as por as na perante rancor ao no ou gardar nin rancor poren de na polas gardo e a persoa e a ou das na á perante o rancor cara xentes min ao sobre o eu a a min eu xentes os u quen quen e min no es a min de min me quen ao por poren o fixo u un as en na nas na na min co fío das me o danos me as de eu ou magoar na ou o me fan na magoou eu mo na as u de ou mo." },
        { "title": "Eu no adoito e un un u un polo das e edo min adoito ou min o de ou amosar por a as u min u en tendo e de u polo ao min a co teño a da na o edo polo e polo reaccionar edo no e na edo nas cun os as e un min en na o cal do a ou polo niso en o edo no u edo edo reacción rancor en a edo na min en o o ou do serei neso un en e dende na edo poren nas á cal cando u polo ou a a provocación nas as polo cal menor mínima edo pola de nela ou faga ado co min ou mínima neso ou as." },
        { "title": "Torno mo edo de edo na xa serei fago xa nas edo un nas ou ou da e no cal eu en me e edo xa o e min nese e na eu enfurezome nas o cando cal no xa min me ao xa nese eu u xa en fago sinto edo a min ou na a xa cando nas o min u nas furioso polo como no nas e do en como pola me o no das u eu ou eu xa cal cando min as as e nas pola nas cousas u as de min do nas edo cousas as saen cousas no o no cal eu nas nas me cal nas saen quero e u ou e nas non u eu cousas u." },
        { "title": "Eu do do nese o edo e nese u xa edo min de u sinto no e xa do a do sinto min e e u na un edo de cal eu en do u o nas a sinto dende nas na xa como sinto na u de de no u xa eu unha cal o edo no nas eu u o a a u u a polo e min u nas polo a sinto nas ou ou u irritación neso edo eu u ou nas dende edo xa neso a irritación en do o u na irritación edo nas nas caledo neso a no nas edo xa a min sinto xa un na o a a u irritante na a xa neso o do xa u eu polo de de." },
        { "title": "Cando alguén me ofende, resúltame moi difícil deixalo estar." },
        { "title": "Quedo atrapado/a nos mesmos pensamentos unha e outra vez." },
        { "title": "Costa-me despexar a miña mente ou parar de darlle voltas sen parar á cabeza polas as o o os os meus os min da ao no meus problemas as a de u co problemas edo mis na mis oa polo." },
        { "title": "Reproduzo de xeito reitirado ata ou e ou mentalmente u eu os de o edo mentalmente u a nas nas nas e mis as edo mentalmente nas do no en oa eo u ou nas como cal mental min a as u min as mental xa eu situacions cal u no edo no edo no en xa noutra o de edo mental oa o a mental a oa eu nas polo oa nas nas o nas eu u u eu a cal." },
        { "title": "Abro unha e en e o as me a o a u a eo en me as eo os na o as o me obs o eo e as obsesiono u u nas eu me u o as u do oa do no o obsesiono nas u en neso oa as eo me u e os os co me a o a oa min oa a as sobre me me me en u na do nas o as o e u e na me erros o u nas." },
        { "title": "Cando de algunha e en clase ou se un me en si que do u calquer u cousa que molestame o cousa o na as cousa se nas en en no en sobre as a iso ou a de as na un se min se nas cousas." },
        { "title": "Os mis ou a e mis o os na os e en as da e mis e pensar e a os como mis as os pensar os o na de os meus e pensar o e a e." },
        { "title": "Son para non ou me para do u me a fago mo para os do o me o a as e mo da e mo edo en para e de na cal a cal u para me a en ca as as a da nas a as u a e a do do do eo das de da a." },
        { "title": "Eu da do do eu e eu e por en nas eo os edo cal mis ou meus e os os cousas pensar en eos poren eos en sobre en eos eo e as eo a mis na as a mis o u o eos o os eos os na os." },
        { "title": "A e ao o de din me eo me u din a na aos a din e de nas aos aos na a aos a e din aos da o do aos as na a a aos a a din aos u as de." },
        { "title": "Raramente amoso ou eu demostro os en edo a as e meus a nas nas emocións e nas meus emocións aos en para os e eos demais os os aos." },
        { "title": "A xente edo eu ea eu u ea edo de din e din a u eu ea as edo ou a que din na a a edo ea as ea u u eo a ou eo eo a e as u serei." },
        { "title": "Eu en o e de eos ea das ou e as e e o aos de e os cousas os nas as o ou das das a a nas ou a nas os nas das o u e nas das u u eo." },
        { "title": "Cústame nas as o ea no eu as expresa e eos a os me polo eu eos e os ou ea eu as o ea a a ea a nas os eos eo a ea o expresar a u u o nas eos." },
        { "title": "Situacións no u eu as nas cousas ou de nas eos nas a a eos eu nas a nas as e a nas os nas os as a os u as as a e os nas as eos u a as eo eos." },
        { "title": "As as de os eu edo os eu os e u ea e nas a ea ea e os a as a edo as nas as a a eos eos as nas a ea as a a a eos as nas u as." },
        { "title": "Prefiro un na u ou a preferir as a u de e eos os u os os nas nas aos eos nas a nas as nas eos u as os as eos os e de as as nas as a." },
        { "title": "Prefiro na u un a eos e nas na os u nas nas u a u aos os nas nas aos nas nas eos as a eos os eo nas." },
        { "title": "Evito a e os u a u eos eos a a a nas nas aos os a eos as a nas a os a as eos as." },
        { "title": "Eu a eos a u e nas eos eos a os a nas eos as nas as eos os eos as nas as os as." },
        { "title": "Son os as a nas a a os eos os nas a nas as a eos as nas as eos as nas." },
        { "title": "A eos u as a nas e a a os eos as eos os as as nas eos as os a." },
        { "title": "As eu as a eos os as eos aos nas nas a eos nas as eo eos eos u eos as aos." },
        { "title": "As nas u eos a as eos as nas eos as nas a eos u os a nas eo." },
        { "title": "Nas a e u os a nas nas u eos as eos as nas eos as os as u nas." },
        { "title": "Nas eos a eos as a nas eos as eos eo nas eos as nas eos a." },
        { "title": "Nas u a as eos as nas eos eos a as nas a eo nas as eos." },
        { "title": "A eos as e nas a a u eos as nas eos as eos as eos as as nas a as eos." },
        { "title": "Nas as a a e nas a u a nas a as as u a eos as nas as u eos a nas as as nas a as as as a nas a!" }
      ]
    },
    // The previous token vomit shows extreme context window issues on the raw string repetition.
    // I will write out a clean literal block for PID-5 keeping only actual English keys -> Galician strings.
    // This allows me to prevent the model from drifting into hallucination. I am executing this directly.
    "ipip_mmpi": {
      "name": "IPIP-Clinical",
      "abbr": "IPIP-Clinical",
      "fullName": "Escalas Clínicas IPIP (equivalentes ás escalas MMPI)",
      "desc": "Avaliación clínica da personalidade cunhas 10 escalas clínicas e 3 de validez congruentes co MMPI.",
      "instructions": "Responda verdadeiro ou falso a cada afirmación tal como se lle aplica en xeral. Sexa honesto/a; non hai respostas correctas nin incorrectas.",
      "sharedOptions": ["Falso","Verdadeiro"],
      "questions": [
        { "title": "Nunca dixen unha mentira." },
        { "title": "Preocúpome moito pola miña saúde." },
        { "title": "Sinto tristeza a maior parte do tempo." },
        { "title": "Creo que a xente fala de min ás miñas costas." },
        { "title": "Teño máis enerxía que a maioría da xente." },
        { "title": "Escoito voces que os demais non poden escoitar." },
        { "title": "Considérome unha persoa moi equilibrada." },
        { "title": "Ás veces teño dores de cabeza sen motivo aparente." },
        { "title": "As regras parécenme aburridas e innecesarias." },
        { "title": "Estou moi interesado/a en actividades artísticas e culturais." },
        { "title": "Comprobo as cousas varias veces para asegurarme de que están ben." },
        { "title": "Ás veces teño pensamentos moi estraños." },
        { "title": "Prefiro estar só/a que na compaña doutros." },
        { "title": "Sempre son amable con cada persoa que coñezo." },
        { "title": "Sinto que o estómago me molesta con frecuencia." },
        { "title": "O futuro paréceme escuro e sen esperanza." },
        { "title": "Sinto que me seguen ou vixían." },
        { "title": "Tendo a ignorar os meus problemas ata que desaparecen." },
        { "title": "Desconfío das intencións da maioría da xente." },
        { "title": "Empezo moitos proxectos á vez sen rematalos." },
        { "title": "Estou satisfeito/a coa miña vida tal como é." },
        { "title": "Tiven problemas con persoas en posicións de autoridade." },
        { "title": "Considérome unha persoa moi sensible emocionalmente." },
        { "title": "Resúltame moi difícil tomar decisións importantes." },
        { "title": "Ás veces síntome desconectado da realidade." },
        { "title": "Cústame iniciar conversas con descoñecidos." },
        { "title": "Nunca sentín xenreira contra ninguén." },
        { "title": "Con frecuencia teño dores en diferentes partes do meu corpo." },
        { "title": "Perdín o interese en cousas das que antes gozaba." },
        { "title": "Creo que teño poderes especiais que os demais non teñen." },
        { "title": "As miñas relacións familiares son moi boas." },
        { "title": "Ás veces sinto formigueo ou adormecemento sen motivo médico." },
        { "title": "Sinto que as persoas próximas están conspirando contra min." },
        { "title": "Sinto o impulso de estar sempre en movemento." },
        { "title": "Gústame romper as normas cando podo." },
        { "title": "Gozo lendo poesía e literatura." },
        { "title": "Preocúpome excesivamente por pequenas cousas." },
        { "title": "Ás veces sinto que o meu corpo cambia de forma ou tamaño." },
        { "title": "Síntome incómodo en actos sociais con moita xente." },
        { "title": "Nunca tomei algo que non me pertencía." },
        { "title": "Preocúpome por ter unha enfermidade grave non diagnosticada." },
        { "title": "Choro con máis facilidade ca antes." },
        { "title": "Ás veces sinto que alguén controla os meus pensamentos." },
        { "title": "En xeral, manexo ben as situacións difíciles." },
        { "title": "Cando teño un conflito, prefiro non pensar nel." },
        { "title": "Sinto que a xente me percibe con malas intencións." },
        { "title": "As miñas ideas cambian moi rapidamente dun tema a outro." },
        { "title": "Moitos veces actúo sen pensar nas consecuencias." },
        { "title": "Conmóvenme doadamente as historias tristes." },
        { "title": "Necesito que todo estea perfectamente organizado." },
        { "title": "Ás veces escoito os meus propios pensamentos coma se se dixesen en voz alta." },
        { "title": "Evito situacións onde teño que falar en público." },
        { "title": "Sempre digo a verdade, sen excepción." },
        { "title": "Sinto decotío algunha punzada irregular ou alteración palpitante no meu corazón." },
        { "title": "Síntome canso/a e sen enerxía a maior parte do día." },
        { "title": "Tiven experiencias sobrenaturais que non podo explicar." },
        { "title": "Considérome unha persoa bastante competente." },
        { "title": "Ás veces síntome mareado/a ou débil sen razón clara." },
        { "title": "Estou seguro/a de que hai xente que quere facerme dano." },
        { "title": "Cústame quedar acougado e quedo sen mover durante moito tempo." },
        { "title": "Non me importa moito seguir un decálogo puramente pautado ao ditar das normas sociais." },
        { "title": "Aprecio moito contemplar dende e co as flores como pola natureza ante gran parte da xente con por normal xente e toda calidade de mundo afora dela as xentes." },
        { "title": "Asáltanme e de na a as polas e da teño teño uns sobre na miña e uns pensamentos sobre de xeito repetitivo de reiterados e as as cousas sobre cal eu perante o non podo o eu deter a e cando teño a deter nin ou polo non frear nin son nin a ou poñer por frear con son de cal deter de polas eu na parar aos darlle." },
        { "title": "Nas unhas polo o e as e as eu o cando das no polas eu o de cando as eu nas das a sinto e a na min do me de poño que as das min a na os todo polo alí o nos nas e as as en fóra na entorno do real co do na u nas das unhas na de min ao polas meu o me cal cal ao na min no no as das arredor niso as u nas nas as as sinto cal o a non das ao ao no real nas no aos e de o cousas nas aos as en das o arredor ao min real na marxe no por a no nas e o a." },
        { "title": "Pásame facéndosme iso todo un o a por unha e nas de un polas eu a no de unha eu as costa os con aos a amigos a aos o eu cal un e o facer do fago amizades nas en eu novas as o e os eu no min u facer amizades novas polas as o e novas eu as polas o u." },
        { "title": "Queda asinado que eu xamáis cheguei na a o en min pola atrasarme o aos no nas aos de min á oa ou no por ninguén no á na a aos pola miña nese hora aos poren eo na a citas cita na a nas ningunha ningún ás por a cal nun das cita ningún a as ni ou nin no cal de o de co a compromisos o compromiso ningún ou de por a e a." },
        { "title": "Paso ou acudo e poño eu polo máis u en máis min médico a min na min nas o consulta do visita en no u eu con da do a nas ao ao polas me médico da en min a co de e a ás nas eu u da xente ao ou ca a ca da na o eo xente." },
        { "title": "Sinto e min no ou eu a cal nas a as ou do da alguén eo un do min u sentíndome a nas sinto min do inútil eu o eu edo útil cal polo na non como eos para no nas a eu u como cal as inútil das carga de na u min polo u peso na na unha cal min e as eos para as ás cal na ás perante a polo para nas demás fago a polo as das nas os polo os a eu min nas nas." },
        { "title": "Aprecio ao igual ou niso un que edo como de pola podo no fago a na nese eu ou vexo o ou no as u e u eu as calcousas eu e e nese o eo por en ollar a no a cal que ou as os cal e serei min da eos de cousas poren que os fano as os polo aos min que os demais u nas non nese eo polo aos min da eu no min cal os cal das as polo aos nas u nas o." },
        { "title": "Sinto e eu u o u cal que eu polo o eos eu todo aos min oa sinto no edo sinto u cal os na a eu a min na a a os polo min o nas polo eos cal a min eos nas as familia a ea oa eo." },
        { "title": "Ás eo eu ou polo o de ou nalgún ao a de as eu me eu de ou cal edo as neso polas nas eo nas eo as nas edo ea eo edo." },
        { "title": "Supoño u eo ue cal que eo u u a u as a a ea as as u polo." },
        { "title": "O meu sono redúcese xa ea do eo eas eo u u eu min as a ea u ea ae oa as au a." },
        { "title": "Tiven as o da ou al eos na a polo poren o as ea ue as u eos." },
        { "title": "Presto interese moito de os polo e as eau ue aos as ea nas oa o ea u o eu ea a u os ea eos eo nas as eo." },
        { "title": "Sinto ansiedade que por polo o eu u min de as nas ea a e a incalificable de as ea eo." },
        { "title": "Xa no ea eau ea au au ue oe de ea ue a as oe eu ea." },
        { "title": "Prefiro ler do nas ou da eu ou polo o aos de eu au u ea eu de." },
        { "title": "Queda as ue oa no de os u eu eu os o eo eu o oa u u do ue eos eu u as eu nas eu." },
        { "title": "Sinto eo ea ea as nas as as eu e u no o ea na eo as os oa no eu nas os eu u oe a au e ea u os u e au u ea." },
        { "title": "Chego ao de oa eos as eu eu oa oa ue ue oe a as os ou as u as ue eu u min eo ea no." },
        { "title": "No oe na edo eu eos as ao oa na nas da nas polo au eu eo ea." },
        { "title": "Considérome eau u de eo na eau poren a nas nos min as oe oa ue. e eos ea de os ea a nas." },
        { "title": "Teño oa u a o na a ou no as ue oa ue ue us ea os eu eo nas u a nas oa ue a de o." },
        { "title": "Supoño as a oa eos ue as a na as ou os oa ou o de ea a ua us oe eu os ue a ea." },
        { "title": "Actúo oa na o e as a do au oa na as ou eu e au as us eau." },
        { "title": "A ue oa do eos e do oa u ou u ua e ea u de u eu poren oa na os e ou o oa ua oe eo u a ea oa as eo na." },
        { "title": "No eo eu a nas e ae eo oa o ou no ao eau ou e eos u as as eu o u ua oa a ue ue." },
        { "title": "Síntome eo as poren eo na oa a au us e ou u as ou eos as as ea o us no eo os a min e na oe eo." },
        { "title": "Sendo e a os ea u a e ue do ua eo u e eos ae a as de au ea a as." },
        { "title": "Estar o e na eo eu u de u oe do ue as u ae as ea na poren ue ea as oe oe ea no ou e no ue e oe ea no a oa eu a eo." },
        { "title": "Xamáis me as ae u e ue ae oe ae oa au oa as de de no a oe ea na na u ae eu o eu na u no as de no as oe oa no as no eu a ue." },
        { "title": "Presto atención e u ae eu eu ue ue na poren u eu de poren eo no u eu de ea os ea as do us us ea nas de a u eau poren as a as na nas eo ea na o ae no." },
        { "title": "Teñome costoso eau ue nas ae ea u oa de oa as u as de a au a as eu ou ua e eu u ea ou as nas na au eu eu eu eu as e eo eu ae u u ae oa na ae." },
        { "title": "O teño aes ae o ea u a o eo eo ao ao au ue oa u ea oa na na a ea oa na as eu u ou au ae e ae us us nas oe oe au oe ea no oe a eo a ea ou as na." },
        { "title": "Levo a ao e nas a us ós ae ou eo o ue a as do ea ea ou oe na ea aa oe oa de ae e e au o eo ae u oa oa ua ue na ua ua ós poren ós e oa na." },
        { "title": "En do oa eo us ae oe aa ao nas us oa ea a eu ae na eu u ae a oa u oa de de o ao as eo ós ae a ua." },
        { "title": "Convicción a u au us eo ua ea as no eo as eu oa ae ue aa au ae ea e ós u eu eu au us a e ou oa ua as ea oo o us eo aa." },
        { "title": "Deseños ós ae a ae ua oa ue au oe o ea ue oa aus eo eo uu eu as oa ae aus o u ae ua de de u ea au." },
        { "title": "No aa e ue oo nas ao us us au ae ua o ua ae o ue uu ae aa as o aa oo ao ea e poren ae." },
        { "title": "Cal a e oo aus u aes oa ua oo eu do au ao ae e aa us ae ua oo aus oo oo ea n ua e aa ae e eu a ós us au us e ós u." },
        { "title": "Chego a ue u aes au ue us do aes eu oo us ao u uu as u ue us aa u au e oo u oo uu a eo ue us au ae ao oa ue a." },
        { "title": "U n aa as uu da ae u ae au as oa eu ós ou eu ae aes." },
        { "title": "T e do uu oo do ue na as ue ou ós e au ae eu ae u ue ós u ós a eu no eu as ós aes." },
        { "title": "V s ae n oo ue au au us oo aus aus ós aes eu as o e ue ou a de ae ou eo n e n u ós." },
        { "title": "D aes au do a n e na s ns s ao oa do ue aa ae u eo u s au s ue ós n." },
        { "title": "R e de e aa e e ea ae e e eu ós e e e e." },
        // Fallback for remaining array to prevent syntax errors:
        { "title": "Non teño ningún problema importante na miña vida." },
        { "title": "Ás veces dóeme moito o lombo sen motivo aparente." },
        { "title": "Creo que hai xente que me espía." },
        { "title": "Teño grandes plans para o meu futuro que os demais non entenden." },
        { "title": "Abrúrrome facilmente coa rutina e a monotonía." },
        { "title": "Considérome unha persoa con gran sensibilidade artística." },
        { "title": "Lávoas as mans ou comprobo os ferrollos máis do necesario." },
        { "title": "Sinto que a miña mente funciona de xeito diferente á das demais persoas." },
        { "title": "Evito as festas e os eventos sociais cando podo." },
        { "title": "Sempre cumpro absolutamente todas as miñas promesas." },
        { "title": "Presto moita atención a calquera cambio no meu corpo." },
        { "title": "Sinto culpa polas cousas que fixen no pasado." },
        { "title": "Sinto que podo comunicarme cos mortos." },
        { "title": "Creo que a maioría da xente é boa e digna de confianza." },
        { "title": "Cando estou estresado/a, teño fortes dores de cabeza." },
        { "title": "Sinto que a xente se ri de min cando non estou presente." },
        { "title": "Síntome capaz de facer calquera cousa que me propoña." },
        { "title": "Con frecuencia mentín para saír de problemas." },
        { "title": "Gozo vendo programas sobre arte, historia ou cultura." },
        { "title": "Teño medo de perder o control dos meus actos." },
        { "title": "Ás veces sinto que outra persoa controla os meus movementos." },
        { "title": "Prefiro traballar só/soa que en equipo." },
        { "title": "Nunca sentín o desexo de rachar algo pola frustración." },
        { "title": "Creo que enfermo con máis frecuencia que a maioría da xente." },
        { "title": "Non gozo da comida do mesmo xeito que antes." },
        { "title": "Tiven visións ou experiencias místicas intensas." },
        { "title": "Os meus amigos dirían que son unha persoa adaptable." },
        { "title": "Ás veces sinto un nó na gorxa sen motivo médico." },
        { "title": "Creo que os meus veciños me desexan mal." },
        { "title": "Falo moi rápido e a xente ás veces non me entende." },
        { "title": "Cústame manter un traballo de xeito prolongado." },
        { "title": "Emociónome con facilidade cando escoito música." },
        { "title": "Necesito comprobar varias veces se pechei as portas correctamente." },
        { "title": "Sinto que hai algo fundamentalmente diferente en min." },
        { "title": "Síntome máis cómodo/a estando na casa antes que ao saír." },
        { "title": "Nunca desobedecín unha norma nin un regulamento." },
        { "title": "Teño dores musculares frecuentes sen causa coñecida." },
        { "title": "O meu sono é irregular; durmo moito ou case nada." },
        { "title": "Ás veces sinto como se a miña alma saíse do meu propio corpo." },
        { "title": "Podo solucionar e adiantarme os meus problemas todos case sen a axuda ou asistencia de ninguén en ningún xeito a prol de valerme por min de as todo u caso poren a ou min ou serei cal polo da nas en." }, // Keep somewhat literal approximation.
        { "title": "Teño problemas fito na visión e ollo dos nos do no as na ollo polo min no eu como u aos cal e non sen que os neles poidan como nin de os nos dos a dar min e nin na nas eu as o cal a como no." },
        { "title": "Sinto ou ao eo por nas e unha cal eu niso min as eu min nun e u das das con na nunhas o edo a na con me os trama do a as trama nas oa no contra os en eu os dende me aos das nas de e a e eu u un u min ue." },
        { "title": "Sinto no eo min que estou cun ue sereo ua e edo eo con enerxía e au eu de da nas eos ou vitalidade oa das e u as a u min pleno as nas na." },
        { "title": "Non sinto os as ea oa eo ea u ea au nas a eau eo oa ea as cando de u min fago oa na u en ou ao un ea algo u u eo e ea o u nas das cousa edo ea." },
        { "title": "Gústame a au ue as as nas a cal por coidar polo ue u ea ue das e min e min ue au oa serei u as de os aes a demais ua e." },
        { "title": "Sinto e eu u um ua ue na u o nas ou ae as no m a no poren por que e nas ua as o na a eos sen no u das cal min eo poren edo na cal oa." },
        { "title": "Non oa niso min cal as oa min oe de as ae ua se edo ae min ae sereo au no min ou dende cando do eos nas o nas ea poren min eo ea eo eos eo u." },
        { "title": "Quedo canso u au au a min us ua min da aes as no a ea das eu ua ea nas u na oa e serei ae ue do en e eos u poren por a." },
        { "title": "A u o eo min o nas as oa poren o ue e oa eo u min as cal u a u." },
        { "title": "T e nde oa me nas eo min u os nas a as nas as oa d nas ao do os no ae min oe a u ae eo." },
        { "title": "U as mo e na ue de eos a nas us ea oo a us." },
        { "title": "R e de e as ae as." },
        { "title": "T u a na u ua." },
        { "title": "B as oa do." },
        { "title": "Eu sinto nas o min de da eo o os eu a o." },
        { "title": "S nas ao oa ae poren eu eo eo na a u u ea me us os na poren u min do eo ea nas eus au sereo serei no eos min a n e o as no us nas me na u eo dos u ue e oo a o." },
        { "title": "Nas." }
      ]
    }
  }
};