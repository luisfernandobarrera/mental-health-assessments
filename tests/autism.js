const TEST_AQ10 = {
  id: 'aq10',
  abbr: 'AQ-10',
  name: 'Rasgos Autistas (Breve)',
  fullName: 'Cociente del Espectro Autista — 10 ítems',
  desc: 'Screening breve de rasgos asociados al espectro autista. Desarrollado por Baron-Cohen et al.',
  color: '#6B7BA0',
  icon: '🧩',
  items: 10,
  time: '2-3 min',
  instructions: 'Lee cada afirmación con atención e indica tu grado de acuerdo o desacuerdo.',
  sharedOptions: ["Totalmente de acuerdo", "Parcialmente de acuerdo", "Parcialmente en desacuerdo", "Totalmente en desacuerdo"],
  questions: [
    { title: "A menudo noto pequeños sonidos que otros no perciben" },
    { title: "Cuando leo una historia, me resulta difícil comprender las intenciones de los personajes" },
    { title: "Me resulta fácil «leer entre líneas» cuando alguien me habla" },
    { title: "Suelo concentrarme más en el panorama general que en los pequeños detalles" },
    { title: "Sé cómo darme cuenta de si alguien que me escucha se está aburriendo" },
    { title: "Me resulta fácil hacer más de una cosa a la vez" },
    { title: "Me resulta fácil deducir lo que alguien piensa o siente solo con mirarlo a la cara" },
    { title: "Si hay una interrupción, puedo retomar lo que estaba haciendo rápidamente" },
    { title: "Me gusta recopilar información sobre categorías de cosas" },
    { title: "Me resulta difícil comprender las intenciones de la gente" }
  ],
  // Items 1,2,9,10 (índices 0,1,8,9) puntúan por ACUERDO (agree=autistic trait)
  // Items 3,4,5,6,7,8 (índices 2,3,4,5,6,7) puntúan por DESACUERDO (disagree=autistic trait)
  maxScore: 10,
  scoreAnswer(qIdx, ansIdx) {
    const agreeItems = [0, 1, 8, 9];
    if (agreeItems.includes(qIdx)) {
      // Definitely agree (0) or slightly agree (1) = 1 point
      return ansIdx <= 1 ? 1 : 0;
    } else {
      // Definitely disagree (3) or slightly disagree (2) = 1 point
      return ansIdx >= 2 ? 1 : 0;
    }
  },
  getResult(score) {
    if (score <= 2) return { label: 'Pocos rasgos autistas', key: 'bajo', color: '#4CAF50', desc: 'Tu puntuación no sugiere rasgos significativos del espectro autista. Sin embargo, si tienes dudas, consulta a un profesional.' };
    if (score <= 5) return { label: 'Algunos rasgos autistas', key: 'moderado', color: '#FF9800', desc: 'Tu puntuación indica algunos rasgos asociados al espectro autista, aunque por debajo del umbral de derivación clínica (≥6).' };
    if (score <= 7) return { label: 'Rasgos autistas significativos', key: 'alto', color: '#FF5722', desc: 'Tu puntuación supera el umbral de derivación (≥6). Se recomienda una evaluación diagnóstica completa con un profesional especializado.' };
    return { label: 'Rasgos autistas muy significativos', key: 'muy_alto', color: '#F44336', desc: 'Tu puntuación es alta. Es muy recomendable solicitar una evaluación diagnóstica completa con un especialista en trastornos del espectro autista.' };
  }
};

const TEST_AQ50 = {
  id: 'aq50',
  abbr: 'AQ-50',
  name: 'Rasgos Autistas (Completo)',
  fullName: 'Cociente del Espectro Autista — 50 ítems',
  desc: 'Evaluación completa de rasgos del espectro autista en cinco dominios: habilidades sociales, alternancia atencional, atención al detalle, comunicación e imaginación.',
  color: '#5B6B90',
  icon: '🧩',
  items: 50,
  time: '10-15 min',
  instructions: 'Lee cada afirmación con atención e indica tu grado de acuerdo o desacuerdo. No hay respuestas correctas ni incorrectas.',
  sharedOptions: ["Totalmente de acuerdo", "Parcialmente de acuerdo", "Parcialmente en desacuerdo", "Totalmente en desacuerdo"],
  questions: [
    { title: "Prefiero hacer cosas con otros que solo/a" },
    { title: "Prefiero hacer las cosas siempre de la misma manera" },
    { title: "Si intento imaginar algo, me resulta muy fácil crear una imagen mental" },
    { title: "Con frecuencia me absorbo tanto en una cosa que pierdo de vista las demás" },
    { title: "A menudo noto pequeños sonidos que otros no perciben" },
    { title: "Suelo fijarme en las placas de los coches o en cadenas de información similares" },
    { title: "Otras personas me dicen con frecuencia que lo que dije es descortés, aunque yo considero que es cortés" },
    { title: "Cuando leo una historia, puedo imaginar fácilmente cómo son los personajes" },
    { title: "Me fascinan las fechas" },
    { title: "En un grupo social, puedo seguir fácilmente varias conversaciones al mismo tiempo" },
    { title: "Me resultan fáciles las situaciones sociales" },
    { title: "Tiendo a notar detalles que otros no perciben" },
    { title: "Preferiría ir a una biblioteca que a una fiesta" },
    { title: "Me resulta fácil inventar historias" },
    { title: "Me siento más atraído/a por las personas que por las cosas" },
    { title: "Suelo tener intereses muy intensos y me molesta si no puedo dedicarme a ellos" },
    { title: "Disfruto de las conversaciones triviales" },
    { title: "Cuando hablo, no siempre es fácil para los demás meter baza" },
    { title: "Me fascinan los números" },
    { title: "Cuando leo una historia, me resulta difícil comprender las intenciones de los personajes" },
    { title: "No disfruto especialmente de la lectura de ficción" },
    { title: "Me resulta difícil hacer nuevos amigos" },
    { title: "Noto patrones en las cosas constantemente" },
    { title: "Preferiría ir al teatro que a un museo" },
    { title: "No me molesta que se altere mi rutina diaria" },
    { title: "Con frecuencia no sé cómo mantener una conversación" },
    { title: "Me resulta fácil «leer entre líneas» cuando alguien me habla" },
    { title: "Suelo concentrarme más en el panorama general que en los pequeños detalles" },
    { title: "No soy muy bueno/a recordando números de teléfono" },
    { title: "No suelo notar pequeños cambios en una situación o en la apariencia de una persona" },
    { title: "Sé cómo darme cuenta de si alguien que me escucha se está aburriendo" },
    { title: "Me resulta fácil hacer más de una cosa a la vez" },
    { title: "Cuando hablo por teléfono, no estoy seguro/a de cuándo es mi turno para hablar" },
    { title: "Disfruto haciendo cosas de forma espontánea" },
    { title: "A menudo soy el/la último/a en entender el sentido de un chiste" },
    { title: "Me resulta fácil deducir lo que alguien piensa o siente solo con mirarlo a la cara" },
    { title: "Si hay una interrupción, puedo retomar lo que estaba haciendo rápidamente" },
    { title: "Se me da bien la conversación trivial" },
    { title: "La gente me dice con frecuencia que sigo hablando una y otra vez sobre lo mismo" },
    { title: "Cuando era pequeño/a, disfrutaba jugando a juegos de simulación con otros niños" },
    { title: "Me gusta recopilar información sobre categorías de cosas" },
    { title: "Me resulta difícil imaginar cómo sería ser otra persona" },
    { title: "Me gusta planificar cuidadosamente cualquier actividad en la que participo" },
    { title: "Disfruto de las ocasiones sociales" },
    { title: "Me resulta difícil comprender las intenciones de la gente" },
    { title: "Las situaciones nuevas me generan ansiedad" },
    { title: "Disfruto conociendo gente nueva" },
    { title: "Soy un/a buen/a diplomático/a" },
    { title: "No soy muy bueno/a recordando las fechas de cumpleaños de la gente" },
    { title: "Me resulta muy fácil jugar a juegos de simulación con niños" }
  ],
  // Items que puntúan por ACUERDO (agree = rasgo autista):
  // 2,4,5,6,7,9,12,13,16,18,19,20,21,22,23,26,29,30,33,35,39,41,42,43,45,46,49
  // (índices: 1,3,4,5,6,8,11,12,15,17,18,19,20,21,22,25,28,29,32,34,38,40,41,42,44,45,48)
  // El resto puntúan por DESACUERDO
  maxScore: 50,
  scoreAnswer(qIdx, ansIdx) {
    const agreeItems = [1,3,4,5,6,8,11,12,15,17,18,19,20,21,22,25,28,29,32,34,38,40,41,42,44,45,48];
    if (agreeItems.includes(qIdx)) {
      return ansIdx <= 1 ? 1 : 0;
    } else {
      return ansIdx >= 2 ? 1 : 0;
    }
  },
  getResult(score) {
    if (score <= 15) return { label: 'Pocos rasgos autistas', key: 'bajo', color: '#4CAF50', desc: 'Tu puntuación se encuentra en el rango típico de la población general. No se sugieren rasgos significativos del espectro autista.' };
    if (score <= 25) return { label: 'Rasgos autistas leves', key: 'leve', color: '#8BC34A', desc: 'Tu puntuación indica algunos rasgos del espectro autista, dentro del rango promedio. Muchas personas sin diagnóstico obtienen puntuaciones en este rango.' };
    if (score <= 31) return { label: 'Rasgos autistas moderados', key: 'moderado', color: '#FF9800', desc: 'Tu puntuación supera el umbral de 26 y sugiere rasgos autistas por encima del promedio. Considera consultar con un profesional si experimentas dificultades.' };
    if (score <= 39) return { label: 'Rasgos autistas significativos', key: 'alto', color: '#FF5722', desc: 'Tu puntuación supera el umbral clínico de 32. El 80 % de las personas con diagnóstico de autismo obtienen puntuaciones en este rango. Se recomienda una evaluación diagnóstica.' };
    return { label: 'Rasgos autistas muy significativos', key: 'muy_alto', color: '#F44336', desc: 'Tu puntuación es muy alta y sugiere fuertemente la presencia de rasgos del espectro autista. Es muy recomendable solicitar una evaluación diagnóstica completa.' };
  }
};
