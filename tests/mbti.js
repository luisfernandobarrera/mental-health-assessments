const TYPE_DESCRIPTIONS = {
  ISTJ: { name: 'El Inspector', description: 'Personas responsables, meticulosas y comprometidas con el deber. Valoran la tradición y la estabilidad.' },
  ISFJ: { name: 'El Protector', description: 'Personas cálidas, dedicadas y protectoras. Se preocupan profundamente por el bienestar de los demás.' },
  INFJ: { name: 'El Consejero', description: 'Personas idealistas, perspicaces y comprometidas con sus valores. Buscan significado y conexión profunda.' },
  INTJ: { name: 'El Arquitecto', description: 'Pensadores estratégicos e independientes con una visión clara. Valoran la competencia y el conocimiento.' },
  ISTP: { name: 'El Artesano', description: 'Personas prácticas, observadoras y analíticas. Disfrutan entender cómo funcionan las cosas.' },
  ISFP: { name: 'El Aventurero', description: 'Personas sensibles, amables y con un fuerte sentido estético. Viven el momento con autenticidad.' },
  INFP: { name: 'El Mediador', description: 'Idealistas creativos y empáticos. Buscan vivir en armonía con sus valores más profundos.' },
  INTP: { name: 'El Pensador', description: 'Personas lógicas, originales y curiosas. Disfrutan explorando ideas y teorías complejas.' },
  ESTP: { name: 'El Emprendedor', description: 'Personas enérgicas, pragmáticas y orientadas a la acción. Disfrutan vivir al límite.' },
  ESFP: { name: 'El Animador', description: 'Personas espontáneas, entusiastas y divertidas. Aman la vida y contagian alegría a los demás.' },
  ENFP: { name: 'El Activista', description: 'Personas entusiastas, creativas y sociables. Ven la vida llena de posibilidades emocionantes.' },
  ENTP: { name: 'El Innovador', description: 'Personas ingeniosas, audaces y con mente abierta. Disfrutan el debate intelectual y los desafíos.' },
  ESTJ: { name: 'El Director', description: 'Personas organizadas, lógicas y asertivas. Valoran el orden y lideran con determinación.' },
  ESFJ: { name: 'El Cónsul', description: 'Personas sociables, solidarias y cooperadoras. Se esfuerzan por crear armonía y ayudar a otros.' },
  ENFJ: { name: 'El Protagonista', description: 'Personas carismáticas, empáticas y líderes naturales. Inspiran y guían a los demás con pasión.' },
  ENTJ: { name: 'El Comandante', description: 'Personas decididas, ambiciosas y estratégicas. Lideran con confianza y visión a largo plazo.' },
};

const TEST_MBTI = {
  id: 'mbti',
  abbr: '16P',
  name: '16 Personalidades',
  fullName: 'Indicador de Tipo de Personalidad',
  desc: 'Descubre tu tipo de personalidad entre 16 posibles basados en cuatro dimensiones fundamentales.',
  color: '#4A8B8B',
  icon: '🧩',
  items: 40,
  time: '8-12 min',
  instructions: 'Lee cada afirmación y selecciona qué tan de acuerdo o en desacuerdo estás con ella. No hay respuestas correctas ni incorrectas; responde según cómo te comportas habitualmente, no según cómo te gustaría ser.',
  sharedOptions: ["Muy en desacuerdo", "En desacuerdo", "Neutral", "De acuerdo", "Muy de acuerdo"],
  questions: [
    // === E/I (items 0-9) ===
    // Items favoring E: 0, 2, 4, 6, 8
    // Items favoring I: 1, 3, 5, 7, 9
    { title: 'Disfruto estar en grupos grandes de personas y me siento cómodo/a en reuniones sociales.' },            // 0 - E
    { title: 'Prefiero pasar tiempo a solas o con una o dos personas cercanas.' },                                      // 1 - I
    { title: 'Me recargo de energía al socializar y estar rodeado/a de gente.' },                                       // 2 - E
    { title: 'Me siento agotado/a después de pasar mucho tiempo socializando.' },                                      // 3 - I
    { title: 'Tiendo a pensar en voz alta y disfruto compartir mis ideas con otros.' },                                // 4 - E
    { title: 'Necesito tiempo a solas para reflexionar antes de expresar mis opiniones.' },                             // 5 - I
    { title: 'Me resulta fácil iniciar conversaciones con personas que no conozco.' },                                  // 6 - E
    { title: 'Prefiero observar y escuchar antes de participar en una conversación grupal.' },                          // 7 - I
    { title: 'Me aburro fácilmente si paso demasiado tiempo sin interacción social.' },                                // 8 - E
    { title: 'Disfruto actividades solitarias como leer, escribir o pasear solo/a.' },                                 // 9 - I

    // === S/N (items 10-19) ===
    // Items favoring S: 10, 12, 14, 16, 18
    // Items favoring N: 11, 13, 15, 17, 19
    { title: 'Me fijo en los detalles concretos y en los hechos antes de sacar conclusiones.' },                        // 10 - S
    { title: 'Me gusta pensar en posibilidades abstractas y en lo que podría ser.' },                                   // 11 - N
    { title: 'Prefiero la experiencia práctica y aprender haciendo las cosas.' },                                       // 12 - S
    { title: 'Confío en mi intuición aunque no pueda explicar racionalmente por qué.' },                               // 13 - N
    { title: 'Me centro en el presente y en lo que es real y tangible.' },                                              // 14 - S
    { title: 'Me resulta natural imaginar escenarios futuros y anticipar tendencias.' },                                // 15 - N
    { title: 'Valoro las instrucciones paso a paso y los procedimientos claros.' },                                     // 16 - S
    { title: 'Me interesan más los significados ocultos y las conexiones entre ideas.' },                               // 17 - N
    { title: 'Prefiero trabajar con información verificable y datos comprobables.' },                                   // 18 - S
    { title: 'Disfruto explorar teorías y conceptos nuevos, aunque no tengan aplicación inmediata.' },                  // 19 - N

    // === T/F (items 20-29) ===
    // Items favoring T: 20, 22, 24, 26, 28
    // Items favoring F: 21, 23, 25, 27, 29
    { title: 'Tomo decisiones basándome principalmente en la lógica y el análisis objetivo.' },                         // 20 - T
    { title: 'Considero el impacto emocional en las personas antes de tomar una decisión.' },                           // 21 - F
    { title: 'Prefiero ser directo/a y honesto/a, aunque pueda resultar incómodo.' },                                  // 22 - T
    { title: 'Me esfuerzo por mantener la armonía y evitar conflictos interpersonales.' },                              // 23 - F
    { title: 'Creo que la justicia es más importante que la compasión en la mayoría de los casos.' },                   // 24 - T
    { title: 'Me resulta fácil ponerme en el lugar de los demás y sentir lo que sienten.' },                            // 25 - F
    { title: 'Valoro la coherencia lógica por encima de los sentimientos personales.' },                                // 26 - T
    { title: 'Las decisiones más importantes de mi vida las he tomado siguiendo mi corazón.' },                         // 27 - F
    { title: 'Analizo los pros y contras de forma objetiva antes de elegir.' },                                         // 28 - T
    { title: 'Me preocupa profundamente cómo mis acciones afectan los sentimientos de otros.' },                        // 29 - F

    // === J/P (items 30-39) ===
    // Items favoring J: 30, 32, 34, 36, 38
    // Items favoring P: 31, 33, 35, 37, 39
    { title: 'Me gusta tener un plan claro y seguirlo de forma organizada.' },                                          // 30 - J
    { title: 'Prefiero mantener mis opciones abiertas y decidir sobre la marcha.' },                                    // 31 - P
    { title: 'Me siento más tranquilo/a cuando las cosas están decididas y resueltas.' },                               // 32 - J
    { title: 'Disfruto la espontaneidad y me adapto fácilmente a los cambios de planes.' },                             // 33 - P
    { title: 'Suelo terminar mis tareas con anticipación y evito dejarlas para el final.' },                            // 34 - J
    { title: 'Trabajo mejor bajo presión y cerca de las fechas límite.' },                                              // 35 - P
    { title: 'Me gusta que mi entorno esté ordenado y cada cosa en su lugar.' },                                        // 36 - J
    { title: 'No me molesta el desorden si sé dónde encontrar lo que necesito.' },                                      // 37 - P
    { title: 'Prefiero las rutinas establecidas y los horarios predecibles.' },                                         // 38 - J
    { title: 'Me entusiasma explorar nuevas formas de hacer las cosas sin atarme a una estructura fija.' },             // 39 - P
  ],
  dichotomies: [
    {
      name: 'Energía',
      pole1: { letter: 'E', label: 'Extroversión' },
      pole2: { letter: 'I', label: 'Introversión' },
      pole1Items: [0, 2, 4, 6, 8],
      pole2Items: [1, 3, 5, 7, 9],
    },
    {
      name: 'Percepción',
      pole1: { letter: 'S', label: 'Sensorial' },
      pole2: { letter: 'N', label: 'Intuición' },
      pole1Items: [10, 12, 14, 16, 18],
      pole2Items: [11, 13, 15, 17, 19],
    },
    {
      name: 'Decisión',
      pole1: { letter: 'T', label: 'Pensamiento' },
      pole2: { letter: 'F', label: 'Sentimiento' },
      pole1Items: [20, 22, 24, 26, 28],
      pole2Items: [21, 23, 25, 27, 29],
    },
    {
      name: 'Estilo de vida',
      pole1: { letter: 'J', label: 'Juicio' },
      pole2: { letter: 'P', label: 'Percepción' },
      pole1Items: [30, 32, 34, 36, 38],
      pole2Items: [31, 33, 35, 37, 39],
    },
  ],
  maxScore: 'type',
  getResult: function (score, answersArr) {
    const dichotomies = this.dichotomies;
    let typeCode = '';
    const dimensions = [];

    for (const d of dichotomies) {
      let score1 = 0;
      let score2 = 0;

      for (const idx of d.pole1Items) {
        score1 += ((answersArr[idx] ?? 2) + 1); // 0-4 → 1-5
      }
      for (const idx of d.pole2Items) {
        score2 += ((answersArr[idx] ?? 2) + 1);
      }

      const dominantLetter = score1 >= score2 ? d.pole1.letter : d.pole2.letter;
      typeCode += dominantLetter;

      dimensions.push({
        name: d.name,
        pole1: d.pole1.label + ' (' + d.pole1.letter + ')',
        pole2: d.pole2.label + ' (' + d.pole2.letter + ')',
        score1: score1,
        score2: score2,
      });
    }

    const typeInfo = TYPE_DESCRIPTIONS[typeCode] || { name: 'Tipo desconocido', description: 'No se pudo determinar el tipo de personalidad.' };

    return {
      label: typeCode,
      key: 'personality',
      color: '#4A8B8B',
      desc: typeInfo.name + ' — ' + typeInfo.description,
      typeDetails: {
        type: typeCode,
        name: typeInfo.name,
        description: typeInfo.description,
        dimensions: dimensions,
      },
    };
  },
};
