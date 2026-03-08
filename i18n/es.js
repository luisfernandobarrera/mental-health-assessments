const LANG_ES = {
  ui: {
    appTitle: "Evaluaciones de Salud Mental",
    appSubtitle: "Herramientas de autoevaluación psicológica",
    tabTests: "Tests",
    tabHistory: "Historial",
    welcome: "Bienvenido/a. Selecciona una evaluación para comenzar.",
    startTest: "Iniciar test",
    nextQuestion: "Siguiente",
    prevQuestion: "Anterior",
    viewResults: "Ver resultados",
    question: "Pregunta",
    of: "de",
    items: "ítems",
    backToTests: "Volver a tests",
    repeatTest: "Repetir test",
    viewHistory: "Ver historial",
    otherTests: "Otros tests",
    detailByItem: "Detalle por ítem",
    helpResources: "Recursos de ayuda",
    helpText: "Si estás pasando por una crisis emocional, busca ayuda profesional. Línea de atención: 024 (España) o contacta a un profesional de salud mental.",
    noRecords: "No hay registros guardados.",
    completeFirst: "Completa al menos un test para ver el historial.",
    goToTests: "Ir a tests",
    trend: "Tendencia",
    all: "Todos",
    clearHistory: "Borrar historial",
    clearConfirm: "¿Estás seguro/a de que deseas borrar todo el historial? Esta acción no se puede deshacer.",
    score: "Puntuación",
    outOf: "de",
    disclaimer: "Esta herramienta es solo orientativa y no sustituye una evaluación profesional. Consulta a un especialista en salud mental para un diagnóstico adecuado.",
    resumePrompt: "Tienes un test en progreso",
    continueTest: "Continuar test",
    questionsAnswered: "preguntas respondidas",
    inProgress: "En progreso",
    testBy: "Tests",
  },

  scales: {
    agreement5: [
      "Muy en desacuerdo",
      "En desacuerdo",
      "Ni de acuerdo ni en desacuerdo",
      "De acuerdo",
      "Muy de acuerdo"
    ],
    frequency4: [
      "Nunca",
      "Varios días",
      "Más de la mitad de los días",
      "Casi todos los días"
    ],
    frequency5: [
      "Nunca",
      "Casi nunca",
      "A veces",
      "Con frecuencia",
      "Muy frecuentemente"
    ],
    severity4: [
      "Nada en absoluto",
      "Levemente",
      "Moderadamente",
      "Severamente"
    ],
    severity5: [
      "Nada en absoluto",
      "Un poco",
      "Moderadamente",
      "Bastante",
      "Extremadamente"
    ],
    yesNo: ["No", "Sí"],
  },

  tests: {
    bdi: {
      name: "BDI-II",
      fullName: "Inventario de Depresión de Beck-II",
      desc: "Evalúa la presencia y severidad de síntomas depresivos en las últimas dos semanas.",
      instructions: "Lee cada grupo de afirmaciones cuidadosamente y selecciona la que mejor describa cómo te has sentido durante las últimas dos semanas, incluyendo hoy.",
      questions: [
        {
          title: "Tristeza",
          options: [
            "No me siento triste.",
            "Me siento triste gran parte del tiempo.",
            "Me siento triste todo el tiempo.",
            "Me siento tan triste o infeliz que no puedo soportarlo."
          ]
        },
        {
          title: "Pesimismo",
          options: [
            "No estoy desalentado/a respecto a mi futuro.",
            "Me siento más desalentado/a respecto a mi futuro que antes.",
            "No espero que las cosas funcionen para mí.",
            "Siento que mi futuro es desesperanzador y que solo empeorará."
          ]
        },
        {
          title: "Fracaso",
          options: [
            "No me siento como un/a fracasado/a.",
            "He fracasado más de lo que debería.",
            "Cuando miro hacia atrás, veo muchos fracasos.",
            "Siento que como persona soy un fracaso total."
          ]
        },
        {
          title: "Pérdida de placer",
          options: [
            "Obtengo tanto placer como siempre de las cosas que disfruto.",
            "No disfruto de las cosas tanto como antes.",
            "Obtengo muy poco placer de las cosas que solía disfrutar.",
            "No puedo obtener ningún placer de las cosas que solía disfrutar."
          ]
        },
        {
          title: "Sentimientos de culpa",
          options: [
            "No me siento particularmente culpable.",
            "Me siento culpable respecto a varias cosas que he hecho o debería haber hecho.",
            "Me siento bastante culpable la mayor parte del tiempo.",
            "Me siento culpable todo el tiempo."
          ]
        },
        {
          title: "Sentimientos de castigo",
          options: [
            "No siento que esté siendo castigado/a.",
            "Siento que tal vez esté siendo castigado/a.",
            "Espero ser castigado/a.",
            "Siento que estoy siendo castigado/a."
          ]
        },
        {
          title: "Disconformidad con uno mismo",
          options: [
            "Siento acerca de mí lo mismo que siempre.",
            "He perdido la confianza en mí mismo/a.",
            "Estoy decepcionado/a conmigo mismo/a.",
            "No me gusto a mí mismo/a."
          ]
        },
        {
          title: "Autocrítica",
          options: [
            "No me critico ni me culpo más de lo habitual.",
            "Soy más crítico/a conmigo mismo/a de lo que solía ser.",
            "Me critico a mí mismo/a por todas mis faltas.",
            "Me culpo a mí mismo/a por todo lo malo que sucede."
          ]
        },
        {
          title: "Pensamientos o deseos suicidas",
          options: [
            "No tengo ningún pensamiento de matarme.",
            "He tenido pensamientos de matarme, pero no los llevaría a cabo.",
            "Querría matarme.",
            "Me mataría si tuviera la oportunidad de hacerlo."
          ]
        },
        {
          title: "Llanto",
          options: [
            "No lloro más de lo que solía hacerlo.",
            "Lloro más de lo que solía hacerlo.",
            "Lloro por cualquier pequeñez.",
            "Siento ganas de llorar pero no puedo."
          ]
        },
        {
          title: "Agitación",
          options: [
            "No estoy más inquieto/a o tenso/a de lo habitual.",
            "Me siento más inquieto/a o tenso/a de lo habitual.",
            "Estoy tan inquieto/a o agitado/a que me es difícil quedarme quieto/a.",
            "Estoy tan inquieto/a o agitado/a que tengo que estar siempre en movimiento o haciendo algo."
          ]
        },
        {
          title: "Pérdida de interés",
          options: [
            "No he perdido el interés en otras actividades o personas.",
            "Estoy menos interesado/a en otras personas o cosas que antes.",
            "He perdido casi todo el interés en otras personas o cosas.",
            "Me es difícil interesarme por algo."
          ]
        },
        {
          title: "Indecisión",
          options: [
            "Tomo decisiones tan bien como siempre.",
            "Me resulta más difícil tomar decisiones que de costumbre.",
            "Encuentro mucha más dificultad que antes para tomar decisiones.",
            "Tengo problemas para tomar cualquier decisión."
          ]
        },
        {
          title: "Desvalorización",
          options: [
            "No siento que yo no sea valioso/a.",
            "No me considero a mí mismo/a tan valioso/a y útil como antes.",
            "Me siento menos valioso/a cuando me comparo con otros.",
            "Siento que no valgo nada."
          ]
        },
        {
          title: "Pérdida de energía",
          options: [
            "Tengo tanta energía como siempre.",
            "Tengo menos energía de la que solía tener.",
            "No tengo suficiente energía para hacer demasiado.",
            "No tengo energía suficiente para hacer nada."
          ]
        },
        {
          title: "Cambios en los hábitos de sueño",
          options: [
            "No he experimentado ningún cambio en mis hábitos de sueño.",
            "Duermo un poco más o un poco menos de lo habitual.",
            "Duermo mucho más o mucho menos de lo habitual.",
            "Duermo la mayor parte del día o me despierto 1-2 horas antes y no puedo volver a dormirme."
          ]
        },
        {
          title: "Irritabilidad",
          options: [
            "No estoy más irritable de lo habitual.",
            "Estoy más irritable de lo habitual.",
            "Estoy mucho más irritable de lo habitual.",
            "Estoy irritable todo el tiempo."
          ]
        },
        {
          title: "Cambios en el apetito",
          options: [
            "No he experimentado ningún cambio en mi apetito.",
            "Mi apetito es un poco menor o un poco mayor de lo habitual.",
            "Mi apetito es mucho menor o mucho mayor de lo habitual.",
            "No tengo apetito en absoluto o tengo ansia de comer todo el tiempo."
          ]
        },
        {
          title: "Dificultad de concentración",
          options: [
            "Puedo concentrarme tan bien como siempre.",
            "No puedo concentrarme tan bien como habitualmente.",
            "Me es difícil mantener la mente en algo por mucho tiempo.",
            "Encuentro que no puedo concentrarme en nada."
          ]
        },
        {
          title: "Cansancio o fatiga",
          options: [
            "No estoy más cansado/a o fatigado/a de lo habitual.",
            "Me fatigo o me canso más fácilmente de lo habitual.",
            "Estoy demasiado fatigado/a o cansado/a para hacer muchas de las cosas que solía hacer.",
            "Estoy demasiado fatigado/a o cansado/a para hacer la mayoría de las cosas que solía hacer."
          ]
        },
        {
          title: "Pérdida de interés en el sexo",
          options: [
            "No he notado ningún cambio reciente en mi interés por el sexo.",
            "Estoy menos interesado/a en el sexo de lo que solía estarlo.",
            "Estoy mucho menos interesado/a en el sexo ahora.",
            "He perdido completamente el interés en el sexo."
          ]
        }
      ],
      results: {
        minimal: {
          label: "Mínima",
          desc: "Tu puntuación sugiere un nivel mínimo de depresión. Es normal experimentar altibajos emocionales."
        },
        mild: {
          label: "Leve",
          desc: "Tu puntuación sugiere síntomas depresivos leves. Considera hablar con un profesional si persisten."
        },
        moderate: {
          label: "Moderada",
          desc: "Tu puntuación sugiere síntomas depresivos moderados. Se recomienda consultar con un profesional de salud mental."
        },
        severe: {
          label: "Severa",
          desc: "Tu puntuación sugiere síntomas depresivos severos. Es importante buscar ayuda profesional lo antes posible."
        }
      }
    },

    bai: {
      name: "BAI",
      fullName: "Inventario de Ansiedad de Beck",
      desc: "Evalúa la severidad de los síntomas de ansiedad durante la última semana.",
      instructions: "Indica cuánto te ha molestado cada síntoma durante la última semana, incluyendo hoy.",
      questions: [
        { title: "Torpe o entumecido" },
        { title: "Acalorado" },
        { title: "Con temblor en las piernas" },
        { title: "Incapaz de relajarse" },
        { title: "Con temor a que ocurra lo peor" },
        { title: "Mareado, o que se le va la cabeza" },
        { title: "Con latidos del corazón fuertes y acelerados" },
        { title: "Inestable" },
        { title: "Atemorizado o asustado" },
        { title: "Nervioso" },
        { title: "Con sensación de bloqueo" },
        { title: "Con temblores en las manos" },
        { title: "Inquieto, inseguro" },
        { title: "Con miedo a perder el control" },
        { title: "Con sensación de ahogo" },
        { title: "Con temor a morir" },
        { title: "Con miedo" },
        { title: "Con problemas digestivos" },
        { title: "Con desvanecimientos" },
        { title: "Con rubor facial" },
        { title: "Con sudores, fríos o calientes" }
      ],
      results: {
        minimal: {
          label: "Mínima",
          desc: "Tu puntuación sugiere un nivel mínimo de ansiedad."
        },
        mild: {
          label: "Leve",
          desc: "Tu puntuación sugiere ansiedad leve. Monitoriza tus síntomas."
        },
        moderate: {
          label: "Moderada",
          desc: "Tu puntuación sugiere ansiedad moderada. Considera consultar con un profesional."
        },
        severe: {
          label: "Severa",
          desc: "Tu puntuación sugiere ansiedad severa. Se recomienda buscar ayuda profesional."
        }
      }
    },

    gad7: {
      name: "GAD-7",
      fullName: "Escala de Trastorno de Ansiedad Generalizada-7",
      desc: "Evalúa la severidad de la ansiedad generalizada en las últimas dos semanas.",
      instructions: "Durante las últimas 2 semanas, ¿con qué frecuencia te han molestado los siguientes problemas?",
      questions: [
        { title: "Sentirse nervioso/a, ansioso/a o con los nervios de punta" },
        { title: "No ser capaz de parar o controlar la preocupación" },
        { title: "Preocuparse demasiado por diferentes cosas" },
        { title: "Dificultad para relajarse" },
        { title: "Estar tan inquieto/a que es difícil permanecer sentado/a" },
        { title: "Molestarse o irritarse fácilmente" },
        { title: "Sentir miedo como si algo terrible pudiera pasar" }
      ],
      results: {
        minimal: {
          label: "Mínima",
          desc: "Tu puntuación sugiere un nivel mínimo de ansiedad."
        },
        mild: {
          label: "Leve",
          desc: "Tu puntuación sugiere ansiedad leve."
        },
        moderate: {
          label: "Moderada",
          desc: "Tu puntuación sugiere ansiedad moderada. Considera consultar con un profesional."
        },
        severe: {
          label: "Severa",
          desc: "Tu puntuación sugiere ansiedad severa. Se recomienda buscar ayuda profesional."
        }
      }
    },

    msibpd: {
      name: "MSI-BPD",
      fullName: "Inventario McLean de Detección para Trastorno Límite de Personalidad",
      desc: "Herramienta de detección de rasgos asociados al trastorno límite de la personalidad.",
      instructions: "Responde sí o no a cada una de las siguientes preguntas.",
      questions: [
        { title: "¿Alguna vez te has cortado, quemado o lastimado a propósito?" },
        { title: "¿Alguna vez has intentado suicidarte?" },
        { title: "¿Has tenido al menos dos relaciones (o intentos de relación) que fueran muy intensas pero inestables?" },
        { title: "¿Tu sentido de quién eres cambia con frecuencia de forma dramática?" },
        { title: "¿Tu estado de ánimo cambia con frecuencia de forma repentina?" },
        { title: "¿Con frecuencia sientes ira intensa que te cuesta controlar?" },
        { title: "¿Con frecuencia desconfías de otras personas?" },
        { title: "¿Con frecuencia te sientes irreal o como si las cosas a tu alrededor fueran irreales?" },
        { title: "¿Con frecuencia te sientes vacío/a?" },
        { title: "¿Con frecuencia te esfuerzas desesperadamente por evitar que alguien te abandone?" }
      ],
      results: {
        minimal: {
          label: "Mínima",
          desc: "Tu puntuación sugiere una baja presencia de rasgos asociados al trastorno límite."
        },
        moderate: {
          label: "Moderada",
          desc: "Tu puntuación sugiere algunos rasgos asociados al trastorno límite. Considera consultar con un profesional."
        },
        severe: {
          label: "Significativa",
          desc: "Tu puntuación sugiere una presencia significativa de rasgos límite. Se recomienda una evaluación profesional completa."
        }
      }
    },

    pss: {
      name: "PSS-10",
      fullName: "Escala de Estrés Percibido-10",
      desc: "Evalúa el grado en que las situaciones de la vida se perciben como estresantes en el último mes.",
      instructions: "Las siguientes preguntas se refieren a tus sentimientos y pensamientos durante el último mes. Indica con qué frecuencia te sentiste o pensaste de cierta manera.",
      questions: [
        { title: "¿Con qué frecuencia has estado afectado/a por algo que ha ocurrido inesperadamente?" },
        { title: "¿Con qué frecuencia te has sentido incapaz de controlar las cosas importantes en tu vida?" },
        { title: "¿Con qué frecuencia te has sentido nervioso/a o estresado/a?" },
        { title: "¿Con qué frecuencia has manejado con éxito los pequeños problemas irritantes de la vida?" },
        { title: "¿Con qué frecuencia has sentido que has afrontado efectivamente los cambios importantes que han estado ocurriendo en tu vida?" },
        { title: "¿Con qué frecuencia has estado seguro/a sobre tu capacidad de manejar tus problemas personales?" },
        { title: "¿Con qué frecuencia has sentido que las cosas te van bien?" },
        { title: "¿Con qué frecuencia has sentido que no podías afrontar todas las cosas que tenías que hacer?" },
        { title: "¿Con qué frecuencia has podido controlar las dificultades de tu vida?" },
        { title: "¿Con qué frecuencia has sentido que tenías todo bajo control?" }
      ],
      results: {
        minimal: {
          label: "Bajo",
          desc: "Tu nivel de estrés percibido es bajo. Continúa con tus estrategias de afrontamiento actuales."
        },
        moderate: {
          label: "Moderado",
          desc: "Tu nivel de estrés percibido es moderado. Considera incorporar técnicas de manejo del estrés."
        },
        severe: {
          label: "Alto",
          desc: "Tu nivel de estrés percibido es alto. Se recomienda buscar apoyo profesional y técnicas de reducción de estrés."
        }
      }
    },

    asrs: {
      name: "ASRS v1.1",
      fullName: "Escala de Autoinforme de TDAH en Adultos v1.1",
      desc: "Herramienta de detección de síntomas del trastorno por déficit de atención e hiperactividad en adultos.",
      instructions: "Responde a las siguientes preguntas pensando en cómo te has sentido y comportado durante los últimos 6 meses.",
      questions: [
        { title: "¿Con qué frecuencia tienes dificultad para terminar los detalles finales de un proyecto, una vez que las partes difíciles ya han sido hechas?" },
        { title: "¿Con qué frecuencia tienes dificultad para poner las cosas en orden cuando tienes que hacer una tarea que requiere organización?" },
        { title: "¿Con qué frecuencia tienes problemas para recordar citas u obligaciones?" },
        { title: "Cuando tienes una tarea que requiere mucha concentración, ¿con qué frecuencia evitas o retrasas empezarla?" },
        { title: "¿Con qué frecuencia mueves o retuerces las manos o los pies cuando tienes que estar sentado/a por mucho tiempo?" },
        { title: "¿Con qué frecuencia te sientes excesivamente activo/a o impulsado/a a hacer cosas, como si estuvieras impulsado/a por un motor?" }
      ],
      results: {
        minimal: {
          label: "Poco probable",
          desc: "Tu puntuación sugiere baja probabilidad de TDAH."
        },
        moderate: {
          label: "Posible",
          desc: "Tu puntuación sugiere algunos síntomas compatibles con TDAH. Considera una evaluación profesional."
        },
        severe: {
          label: "Probable",
          desc: "Tu puntuación sugiere una alta probabilidad de síntomas de TDAH. Se recomienda una evaluación profesional completa."
        }
      }
    },

    ocir: {
      name: "OCI-R",
      fullName: "Inventario Obsesivo-Compulsivo Revisado",
      desc: "Evalúa síntomas del trastorno obsesivo-compulsivo.",
      instructions: "Las siguientes afirmaciones se refieren a experiencias que muchas personas tienen en su vida cotidiana. Indica en qué grado te han molestado durante el último mes.",
      questions: [
        { title: "He acumulado tantas cosas que me estorban" },
        { title: "Verifico las cosas más de lo necesario" },
        { title: "Me molesta cuando los objetos no están bien ordenados" },
        { title: "Siento la necesidad de contar mientras hago cosas" },
        { title: "Me resulta difícil tocar un objeto cuando sé que ha sido tocado por desconocidos o por ciertas personas" },
        { title: "Me resulta difícil controlar mis propios pensamientos" },
        { title: "Acumulo cosas que no necesito" },
        { title: "Verifico repetidamente puertas, ventanas, cajones, etc." },
        { title: "Me molesta si los demás cambian el orden en que he colocado las cosas" },
        { title: "Siento que debo repetir ciertos números" },
        { title: "A veces tengo que lavarme o limpiarme simplemente porque me siento contaminado/a" },
        { title: "Me molestan pensamientos desagradables que vienen a mi mente en contra de mi voluntad" },
        { title: "Evito tirar cosas porque tengo miedo de necesitarlas después" },
        { title: "Verifico repetidamente el gas, el agua y la luz después de apagarlos" },
        { title: "Necesito que las cosas estén ordenadas de una manera determinada" },
        { title: "Siento que hay números buenos y malos" },
        { title: "Me lavo las manos más de lo necesario" },
        { title: "Con frecuencia tengo pensamientos horribles y me cuesta librarme de ellos" }
      ],
      results: {
        minimal: {
          label: "Mínima",
          desc: "Tu puntuación sugiere un nivel mínimo de síntomas obsesivo-compulsivos."
        },
        moderate: {
          label: "Moderada",
          desc: "Tu puntuación sugiere síntomas obsesivo-compulsivos moderados. Considera consultar con un profesional."
        },
        severe: {
          label: "Significativa",
          desc: "Tu puntuación sugiere síntomas obsesivo-compulsivos significativos. Se recomienda una evaluación profesional."
        }
      }
    },

    pcl5: {
      name: "PCL-5",
      fullName: "Lista de Verificación de Trastorno de Estrés Postraumático para el DSM-5",
      desc: "Evalúa los síntomas de estrés postraumático en el último mes.",
      instructions: "A continuación hay una lista de problemas que las personas a veces tienen en respuesta a una experiencia muy estresante. Indica en qué medida te ha molestado ese problema en el último mes.",
      questions: [
        { title: "Recuerdos repetidos, perturbadores e involuntarios de la experiencia estresante" },
        { title: "Sueños repetidos y perturbadores sobre la experiencia estresante" },
        { title: "Sentir o actuar de repente como si la experiencia estresante estuviera ocurriendo de nuevo" },
        { title: "Sentirse muy mal cuando algo te recuerda la experiencia estresante" },
        { title: "Tener reacciones físicas fuertes cuando algo te recuerda la experiencia estresante (por ejemplo, corazón acelerado, dificultad para respirar, sudoración)" },
        { title: "Evitar recuerdos, pensamientos o sentimientos relacionados con la experiencia estresante" },
        { title: "Evitar cosas externas que te recuerdan la experiencia estresante (por ejemplo, personas, lugares, conversaciones, actividades, objetos o situaciones)" },
        { title: "Dificultad para recordar partes importantes de la experiencia estresante" },
        { title: "Tener creencias negativas fuertes sobre ti mismo/a, otras personas o el mundo" },
        { title: "Culparte a ti mismo/a o a otra persona por la experiencia estresante o lo que ocurrió después" },
        { title: "Tener sentimientos negativos fuertes como miedo, horror, enfado, culpa o vergüenza" },
        { title: "Pérdida de interés en actividades que antes disfrutabas" },
        { title: "Sentirse distante o alejado/a de otras personas" },
        { title: "Dificultad para experimentar sentimientos positivos" },
        { title: "Comportamiento irritable, arrebatos de ira o actuación agresiva" },
        { title: "Correr demasiados riesgos o hacer cosas que podrían causarte daño" },
        { title: "Estar superalerta, vigilante o en guardia" },
        { title: "Sentirse sobresaltado/a o asustarse con facilidad" },
        { title: "Tener dificultad para concentrarse" },
        { title: "Problemas para conciliar o mantener el sueño" }
      ],
      results: {
        minimal: {
          label: "Mínima",
          desc: "Tu puntuación sugiere un nivel bajo de síntomas de estrés postraumático."
        },
        moderate: {
          label: "Moderada",
          desc: "Tu puntuación sugiere síntomas moderados de estrés postraumático. Considera consultar con un profesional."
        },
        severe: {
          label: "Significativa",
          desc: "Tu puntuación sugiere síntomas significativos de estrés postraumático. Se recomienda buscar ayuda profesional."
        }
      }
    },

    bfi44: {
      name: "BFI-44",
      fullName: "Inventario de los Cinco Grandes Factores de Personalidad",
      desc: "Evalúa cinco dimensiones principales de la personalidad: Extraversión, Amabilidad, Responsabilidad, Neuroticismo y Apertura a la experiencia.",
      instructions: "Me veo a mí mismo/a como alguien que... Indica en qué grado estás de acuerdo o en desacuerdo con cada afirmación.",
      questions: [
        { title: "Es hablador/a" },
        { title: "Tiende a ser criticón/a" },
        { title: "Es minucioso/a en el trabajo" },
        { title: "Es depresivo/a, melancólico/a" },
        { title: "Es original, se le ocurren ideas nuevas" },
        { title: "Es reservado/a" },
        { title: "Es generoso/a y ayuda a los demás" },
        { title: "Puede ser algo descuidado/a" },
        { title: "Es tranquilo/a, maneja bien el estrés" },
        { title: "Tiene curiosidad por muchas cosas diferentes" },
        { title: "Está lleno/a de energía" },
        { title: "Inicia disputas con los demás" },
        { title: "Es un/a trabajador/a confiable" },
        { title: "Puede estar tenso/a" },
        { title: "Es ingenioso/a, un/a pensador/a profundo/a" },
        { title: "Genera mucho entusiasmo" },
        { title: "Tiene tendencia a perdonar" },
        { title: "Tiende a ser desorganizado/a" },
        { title: "Se preocupa mucho" },
        { title: "Tiene una imaginación activa" },
        { title: "Tiende a ser callado/a" },
        { title: "Es generalmente confiable" },
        { title: "Tiende a ser perezoso/a" },
        { title: "Es emocionalmente estable, no se altera fácilmente" },
        { title: "Es inventivo/a" },
        { title: "Tiene una personalidad asertiva" },
        { title: "Puede ser frío/a y distante" },
        { title: "Persevera hasta terminar la tarea" },
        { title: "Puede ser temperamental" },
        { title: "Valora las experiencias artísticas y estéticas" },
        { title: "A veces es tímido/a, inhibido/a" },
        { title: "Es considerado/a y amable con casi todos" },
        { title: "Hace las cosas de manera eficiente" },
        { title: "Permanece calmado/a en situaciones tensas" },
        { title: "Prefiere un trabajo rutinario" },
        { title: "Es sociable, extrovertido/a" },
        { title: "A veces es grosero/a con los demás" },
        { title: "Hace planes y los lleva a cabo" },
        { title: "Se pone nervioso/a con facilidad" },
        { title: "Le gusta reflexionar, jugar con las ideas" },
        { title: "Tiene pocos intereses artísticos" },
        { title: "Le gusta cooperar con los demás" },
        { title: "Se distrae fácilmente" },
        { title: "Es sofisticado/a en arte, música o literatura" }
      ],
      dimensionNames: {
        E: "Extraversión",
        A: "Amabilidad",
        C: "Responsabilidad",
        N: "Neuroticismo",
        O: "Apertura a la experiencia"
      },
      dimensionDescs: {
        E: {
          low: "Tiendes a ser reservado/a, tranquilo/a y a preferir actividades en solitario.",
          mid: "Muestras un equilibrio entre la sociabilidad y la necesidad de tiempo a solas.",
          high: "Tiendes a ser sociable, enérgico/a y disfrutas de la interacción con los demás."
        },
        A: {
          low: "Tiendes a ser más competitivo/a y directo/a en tus interacciones.",
          mid: "Muestras un equilibrio entre cooperación y asertividad.",
          high: "Tiendes a ser cooperativo/a, compasivo/a y considerado/a con los demás."
        },
        C: {
          low: "Tiendes a ser más flexible y espontáneo/a en tu enfoque.",
          mid: "Muestras un equilibrio entre estructura y flexibilidad.",
          high: "Tiendes a ser organizado/a, disciplinado/a y orientado/a a objetivos."
        },
        N: {
          low: "Tiendes a ser emocionalmente estable y calmado/a ante situaciones estresantes.",
          mid: "Experimentas un rango normal de emociones positivas y negativas.",
          high: "Tiendes a experimentar más emociones negativas y mayor sensibilidad al estrés."
        },
        O: {
          low: "Tiendes a preferir lo convencional y práctico.",
          mid: "Muestras un equilibrio entre curiosidad e intereses prácticos.",
          high: "Tiendes a ser creativo/a, curioso/a y abierto/a a nuevas experiencias."
        }
      }
    },

    mbti: {
      name: "MBTI",
      fullName: "Indicador de Tipo de Personalidad Myers-Briggs",
      desc: "Identifica preferencias de personalidad en cuatro dimensiones: Energía, Percepción, Toma de decisiones y Estilo de vida.",
      instructions: "Selecciona la opción que mejor te describe en la mayoría de las situaciones. No hay respuestas correctas o incorrectas.",
      questions: [
        { title: "En reuniones sociales, prefieres interactuar con muchas personas, incluyendo desconocidos" },
        { title: "Tiendes a ser más realista que imaginativo/a" },
        { title: "Es peor ser injusto que despiadado" },
        { title: "Normalmente prefieres hacer las cosas según un plan establecido" },
        { title: "Después de pasar tiempo con un grupo, te sientes energizado/a" },
        { title: "Prefieres centrarte en los detalles específicos más que en el panorama general" },
        { title: "Al tomar decisiones, consideras primero los sentimientos de las personas" },
        { title: "Te gusta tener las cosas decididas y resueltas" },
        { title: "Prefieres iniciar conversaciones con personas nuevas" },
        { title: "Confías más en tu experiencia que en tu intuición" },
        { title: "Valoras más la compasión que la verdad objetiva" },
        { title: "Prefieres seguir un horario estricto" },
        { title: "Te resulta fácil hablar con desconocidos" },
        { title: "Prestas más atención a lo que es real y actual que a lo que podría ser" },
        { title: "Te importa más la armonía del grupo que los resultados objetivos" },
        { title: "Prefieres terminar un proyecto antes de comenzar otro" },
        { title: "Necesitas tiempo a solas para recargar energías" },
        { title: "Disfrutas pensando en conceptos abstractos y teorías" },
        { title: "Al resolver problemas, priorizas la lógica sobre los sentimientos" },
        { title: "Prefieres mantener tus opciones abiertas en lugar de comprometerte" },
        { title: "En tu tiempo libre, prefieres estar con amigos" },
        { title: "Te interesan más las posibilidades futuras que los hechos presentes" },
        { title: "Prefieres tomar decisiones basadas en principios lógicos" },
        { title: "Te sientes más cómodo/a con estructura y rutinas" },
        { title: "Eres el alma de las fiestas" },
        { title: "Te atraen más los significados simbólicos que los hechos literales" },
        { title: "En un conflicto, buscas la solución más justa aunque alguien se moleste" },
        { title: "Te gusta planificar tus vacaciones con antelación y detalle" },
        { title: "Te sientes cómodo/a siendo el centro de atención" },
        { title: "Disfrutas más explorando ideas nuevas que aplicando métodos probados" },
        { title: "Tiendes a decidir con la cabeza más que con el corazón" },
        { title: "Prefieres la espontaneidad a la planificación" },
        { title: "Te resulta agotador pasar mucho tiempo a solas" },
        { title: "Prefieres aprender conceptos teóricos antes de ver ejemplos prácticos" },
        { title: "Consideras que la diplomacia es más importante que la franqueza" },
        { title: "Te sientes incómodo/a cuando los planes cambian de repente" },
        { title: "Hablas más de lo que escuchas en las conversaciones" },
        { title: "Confías en tus corazonadas e intuiciones" },
        { title: "Valoras más la eficiencia que la cooperación" },
        { title: "Disfrutas de la improvisación y la adaptación sobre la marcha" }
      ],
      typeDescriptions: {
        ISTJ: "Responsable y confiable. Valoras la tradición, la lealtad y el orden. Eres meticuloso/a y trabajas de manera constante para cumplir con tus deberes.",
        ISFJ: "Protector/a y dedicado/a. Eres amable, responsable y atento/a a las necesidades de los demás. Valoras la armonía y la estabilidad.",
        INFJ: "Idealista y visionario/a. Tienes una profunda comprensión de las personas y un fuerte deseo de ayudar a los demás a alcanzar su potencial.",
        INTJ: "Estratega e independiente. Tienes una mente analítica y una visión clara de cómo mejorar las cosas. Valoras la competencia y el conocimiento.",
        ISTP: "Práctico/a y observador/a. Disfrutas entendiendo cómo funcionan las cosas y resolviendo problemas de manera eficiente.",
        ISFP: "Artista y sensible. Valoras la autenticidad y la armonía. Disfrutas de la belleza y tienes un fuerte sentido estético.",
        INFP: "Idealista y empático/a. Tienes fuertes valores personales y un deseo de hacer del mundo un lugar mejor.",
        INTP: "Lógico/a y creativo/a. Disfrutas analizando sistemas complejos y generando ideas innovadoras.",
        ESTP: "Enérgico/a y pragmático/a. Disfrutas de la acción y vives en el momento presente. Eres hábil resolviendo problemas prácticos.",
        ESFP: "Espontáneo/a y entusiasta. Disfrutas de la vida y contagias tu alegría a los demás. Eres generoso/a y optimista.",
        ENFP: "Entusiasta y creativo/a. Ves posibilidades en todas partes y tienes una energía contagiosa para inspirar a los demás.",
        ENTP: "Innovador/a y desafiante. Disfrutas del debate intelectual y buscas constantemente nuevas ideas y posibilidades.",
        ESTJ: "Organizador/a y decidido/a. Valoras la eficiencia y el orden. Eres natural para liderar y administrar.",
        ESFJ: "Sociable y servicial. Te preocupas profundamente por los demás y trabajas para crear armonía en tu entorno.",
        ENFJ: "Carismático/a y empático/a. Inspiras a los demás y tienes una habilidad natural para liderar con compasión.",
        ENTJ: "Líder nato y estratégico/a. Eres decidido/a, eficiente y disfrutas de los desafíos organizacionales y de liderazgo."
      }
    }
  }
};
