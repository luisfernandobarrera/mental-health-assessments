const TEST_BFI44 = {
  id: 'bfi44',
  abbr: 'BFI-44',
  name: 'Cinco Grandes (Big Five)',
  fullName: 'Inventario de los Cinco Grandes',
  desc: 'Evalúa los cinco grandes rasgos de personalidad: apertura, responsabilidad, extraversión, amabilidad y neuroticismo.',
  color: '#8E6BBF',
  icon: '🎭',
  items: 44,
  time: '8-12 min',
  instructions: 'A continuación encontrarás una serie de características que pueden o no aplicarse a ti. Indica tu grado de acuerdo o desacuerdo con cada afirmación. No hay respuestas correctas ni incorrectas.',
  sharedOptions: ["Muy en desacuerdo", "En desacuerdo", "Ni de acuerdo ni en desacuerdo", "De acuerdo", "Muy de acuerdo"],
  questions: [
    { title: "Me veo a mí mismo/a como alguien que es hablador/a" },
    { title: "Me veo a mí mismo/a como alguien que tiende a encontrar defectos en los demás" },
    { title: "Me veo a mí mismo/a como alguien que hace un trabajo minucioso" },
    { title: "Me veo a mí mismo/a como alguien que es depresivo/a, melancólico/a" },
    { title: "Me veo a mí mismo/a como alguien que es original, tiene nuevas ideas" },
    { title: "Me veo a mí mismo/a como alguien que es reservado/a" },
    { title: "Me veo a mí mismo/a como alguien que es servicial y no egoísta con los demás" },
    { title: "Me veo a mí mismo/a como alguien que puede ser algo descuidado/a" },
    { title: "Me veo a mí mismo/a como alguien que es relajado/a, maneja bien el estrés" },
    { title: "Me veo a mí mismo/a como alguien que tiene curiosidad por muchas cosas diferentes" },
    { title: "Me veo a mí mismo/a como alguien que está lleno/a de energía" },
    { title: "Me veo a mí mismo/a como alguien que inicia disputas con los demás" },
    { title: "Me veo a mí mismo/a como alguien que es un/a trabajador/a fiable" },
    { title: "Me veo a mí mismo/a como alguien que puede ser tenso/a" },
    { title: "Me veo a mí mismo/a como alguien que es ingenioso/a, un/a pensador/a profundo/a" },
    { title: "Me veo a mí mismo/a como alguien que genera mucho entusiasmo" },
    { title: "Me veo a mí mismo/a como alguien que tiene tendencia a perdonar" },
    { title: "Me veo a mí mismo/a como alguien que tiende a ser desorganizado/a" },
    { title: "Me veo a mí mismo/a como alguien que se preocupa mucho" },
    { title: "Me veo a mí mismo/a como alguien que tiene una imaginación activa" },
    { title: "Me veo a mí mismo/a como alguien que tiende a ser callado/a" },
    { title: "Me veo a mí mismo/a como alguien que es generalmente confiado/a" },
    { title: "Me veo a mí mismo/a como alguien que tiende a ser perezoso/a" },
    { title: "Me veo a mí mismo/a como alguien que es emocionalmente estable, no se altera fácilmente" },
    { title: "Me veo a mí mismo/a como alguien que es inventivo/a" },
    { title: "Me veo a mí mismo/a como alguien que tiene una personalidad asertiva" },
    { title: "Me veo a mí mismo/a como alguien que puede ser frío/a y distante" },
    { title: "Me veo a mí mismo/a como alguien que persevera hasta que la tarea está terminada" },
    { title: "Me veo a mí mismo/a como alguien que puede ser malhumorado/a" },
    { title: "Me veo a mí mismo/a como alguien que valora las experiencias artísticas y estéticas" },
    { title: "Me veo a mí mismo/a como alguien que es a veces tímido/a, inhibido/a" },
    { title: "Me veo a mí mismo/a como alguien que es considerado/a y amable con casi todos" },
    { title: "Me veo a mí mismo/a como alguien que hace las cosas de manera eficiente" },
    { title: "Me veo a mí mismo/a como alguien que se mantiene calmado/a en situaciones tensas" },
    { title: "Me veo a mí mismo/a como alguien que prefiere el trabajo rutinario" },
    { title: "Me veo a mí mismo/a como alguien que es extrovertido/a, sociable" },
    { title: "Me veo a mí mismo/a como alguien que es a veces maleducado/a con los demás" },
    { title: "Me veo a mí mismo/a como alguien que hace planes y los lleva a cabo" },
    { title: "Me veo a mí mismo/a como alguien que se pone nervioso/a fácilmente" },
    { title: "Me veo a mí mismo/a como alguien que le gusta reflexionar, jugar con las ideas" },
    { title: "Me veo a mí mismo/a como alguien que tiene pocos intereses artísticos" },
    { title: "Me veo a mí mismo/a como alguien que le gusta cooperar con los demás" },
    { title: "Me veo a mí mismo/a como alguien que se distrae fácilmente" },
    { title: "Me veo a mí mismo/a como alguien que es sofisticado/a en arte, música o literatura" }
  ],
  dimensions: {
    'Extraversión': {
      items: [0, 5, 10, 15, 20, 25, 30, 35],
      reverse: [5, 20, 30]
    },
    'Amabilidad': {
      items: [1, 6, 11, 16, 21, 26, 31, 36, 41],
      reverse: [1, 11, 26, 36]
    },
    'Responsabilidad': {
      items: [2, 7, 12, 17, 22, 27, 32, 37, 42],
      reverse: [7, 17, 22, 42]
    },
    'Neuroticismo': {
      items: [3, 8, 13, 18, 23, 28, 33, 38],
      reverse: [8, 23, 33]
    },
    'Apertura': {
      items: [4, 9, 14, 19, 24, 29, 34, 39, 40, 43],
      reverse: [34, 40]
    }
  },
  maxScore: 'dimensions',
  scoreAnswer(qIdx, val) {
    // Check if this item is reverse-scored in any dimension
    for (const dim of Object.values(this.dimensions)) {
      if (dim.items.includes(qIdx) && dim.reverse.includes(qIdx)) {
        return 4 - val; // reverse: 0->4, 1->3, 2->2, 3->1, 4->0
      }
    }
    return val;
  },
  getResult(score, answersArr) {
    const dimensionResults = [];
    const descriptions = {
      'Extraversión': {
        high: 'Tiendes a ser sociable, enérgico/a y a buscar la estimulación en compañía de otros.',
        mid: 'Muestras un equilibrio entre la sociabilidad y la preferencia por momentos de soledad.',
        low: 'Tiendes a ser más reservado/a y a preferir actividades en solitario o en grupos pequeños.'
      },
      'Amabilidad': {
        high: 'Eres una persona cooperativa, compasiva y que valora llevarse bien con los demás.',
        mid: 'Combinas la cooperación con la capacidad de defender tus propios intereses cuando es necesario.',
        low: 'Tiendes a ser más competitivo/a y escéptico/a ante las intenciones de los demás.'
      },
      'Responsabilidad': {
        high: 'Eres organizado/a, disciplinado/a y orientado/a a lograr tus metas.',
        mid: 'Mantienes un equilibrio entre la disciplina y la flexibilidad en tus hábitos.',
        low: 'Tiendes a ser más espontáneo/a y flexible, prefiriendo la improvisación sobre la planificación.'
      },
      'Neuroticismo': {
        high: 'Tiendes a experimentar emociones negativas con mayor frecuencia e intensidad.',
        mid: 'Experimentas altibajos emocionales de manera moderada, con cierta capacidad de regulación.',
        low: 'Eres emocionalmente estable y tiendes a manejar bien el estrés y las situaciones difíciles.'
      },
      'Apertura': {
        high: 'Eres curioso/a, creativo/a y abierto/a a nuevas experiencias e ideas.',
        mid: 'Combinas la curiosidad intelectual con un aprecio por lo familiar y lo práctico.',
        low: 'Tiendes a preferir lo convencional y práctico, valorando la estabilidad y lo conocido.'
      }
    };

    for (const [name, dim] of Object.entries(this.dimensions)) {
      let sum = 0;
      let count = 0;
      dim.items.forEach(idx => {
        if (answersArr && answersArr[idx] !== null && answersArr[idx] !== undefined) {
          let val = answersArr[idx] + 1; // Convert 0-4 to 1-5
          if (dim.reverse.includes(idx)) {
            val = 6 - val; // Reverse: 1->5, 2->4, 3->3, 4->2, 5->1
          }
          sum += val;
          count++;
        }
      });
      const avg = count > 0 ? Math.round((sum / count) * 100) / 100 : 0;
      let descLevel;
      if (avg >= 3.67) descLevel = 'high';
      else if (avg >= 2.34) descLevel = 'mid';
      else descLevel = 'low';

      dimensionResults.push({
        name,
        score: avg,
        description: descriptions[name][descLevel]
      });
    }

    return {
      label: 'Tu perfil de personalidad',
      key: 'personality',
      color: '#8E6BBF',
      desc: 'El BFI-44 mide cinco dimensiones amplias de la personalidad. No hay resultados buenos ni malos; cada perfil refleja tu forma única de pensar, sentir y comportarte.',
      dimensions: dimensionResults
    };
  }
};
