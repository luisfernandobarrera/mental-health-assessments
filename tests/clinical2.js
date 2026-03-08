const TEST_MDQ = {
  id: 'mdq',
  abbr: 'MDQ',
  name: 'Screening Bipolar',
  fullName: 'Cuestionario de Trastornos del Estado de Ánimo',
  desc: 'Herramienta de detección rápida para trastorno bipolar y espectro bipolar.',
  color: '#8B6B5B',
  icon: '🔄',
  items: 15,
  time: '3-4 min',
  instructions: 'Responde las siguientes preguntas sobre experiencias que hayas tenido en algún momento de tu vida.',
  sharedOptions: null,
  questions: [
    // Part 1: 13 yes/no items - manic/hypomanic symptoms
    // "¿Alguna vez has tenido un período en el que..."
    { title: "¿Alguna vez has tenido un período en el que te sentías tan bien o tan hiperactivo/a que otras personas pensaban que no eras tú?", options: ["No", "Sí"] },
    { title: "¿Alguna vez has tenido un período en el que estabas tan irritable que gritabas a la gente o iniciabas peleas?", options: ["No", "Sí"] },
    { title: "¿Alguna vez has tenido un período en el que te sentías mucho más seguro/a de ti mismo/a de lo habitual?", options: ["No", "Sí"] },
    { title: "¿Alguna vez has tenido un período en el que dormías mucho menos de lo habitual y no lo echabas de menos?", options: ["No", "Sí"] },
    { title: "¿Alguna vez has tenido un período en el que eras mucho más hablador/a o hablabas más rápido de lo habitual?", options: ["No", "Sí"] },
    { title: "¿Alguna vez has tenido un período en el que los pensamientos pasaban rápidamente por tu mente?", options: ["No", "Sí"] },
    { title: "¿Alguna vez has tenido un período en el que te distraías tan fácilmente que tenías dificultad para concentrarte?", options: ["No", "Sí"] },
    { title: "¿Alguna vez has tenido un período en el que tenías mucha más energía de lo habitual?", options: ["No", "Sí"] },
    { title: "¿Alguna vez has tenido un período en el que eras mucho más activo/a o hacías muchas más cosas de lo habitual?", options: ["No", "Sí"] },
    { title: "¿Alguna vez has tenido un período en el que eras mucho más sociable o extrovertido/a de lo habitual?", options: ["No", "Sí"] },
    { title: "¿Alguna vez has tenido un período en el que estabas mucho más interesado/a en el sexo de lo habitual?", options: ["No", "Sí"] },
    { title: "¿Alguna vez has tenido un período en el que hacías cosas inusuales para ti o que otros consideraban excesivas o arriesgadas?", options: ["No", "Sí"] },
    { title: "¿Alguna vez has tenido un período en el que gastabas dinero de forma que te causó problemas a ti o a tu familia?", options: ["No", "Sí"] },
    // Part 2: co-occurrence
    { title: "¿Han ocurrido varias de estas experiencias durante el mismo período de tiempo?", options: ["No", "Sí"] },
    // Part 3: functional impact
    { title: "Si respondiste SÍ a alguna pregunta anterior, ¿cuánto problema te causaron?", options: ["Ningún problema", "Problema menor", "Problema moderado", "Problema grave"] }
  ],
  maxScore: 15,
  scoreAnswer(qIdx, val) {
    return val;
  },
  getResult(score, answersArr) {
    if (!answersArr) {
      return { label: 'Sin datos', key: 'no_data', color: '#9E9E9E', desc: 'No se pudieron calcular los resultados.' };
    }

    // Part 1: count yes answers on items 0-12
    let part1Yes = 0;
    for (let i = 0; i < 13; i++) {
      if (answersArr[i] === 1) part1Yes++;
    }

    // Part 2: co-occurrence (item 13)
    const part2Yes = answersArr[13] === 1;

    // Part 3: functional impact (item 14)
    // 0 = Ningún problema, 1 = Menor, 2 = Moderado, 3 = Grave
    const part3Significant = answersArr[14] >= 2;

    // Positive screen: 7+ yes on Part 1 AND yes on Part 2 AND Moderado/Grave on Part 3
    const positiveScreen = part1Yes >= 7 && part2Yes && part3Significant;

    if (positiveScreen) {
      return {
        label: 'Screening positivo para trastorno bipolar',
        key: 'positive',
        color: '#F44336',
        desc: `Tus respuestas sugieren la posibilidad de un trastorno del espectro bipolar (${part1Yes} síntomas de 13, con co-ocurrencia y afectación funcional significativa). Este resultado NO es un diagnóstico. Se recomienda encarecidamente una evaluación profesional completa con un psiquiatra.`
      };
    } else {
      let detail = '';
      if (part1Yes >= 7) {
        detail = `Reportaste ${part1Yes} síntomas, pero no se cumplieron todos los criterios adicionales del screening.`;
      } else {
        detail = `Reportaste ${part1Yes} de 13 síntomas posibles (se requieren 7 para un screening positivo).`;
      }
      return {
        label: 'Screening negativo',
        key: 'negative',
        color: '#4CAF50',
        desc: `Tus respuestas no sugieren la presencia de un trastorno del espectro bipolar según este instrumento de detección. ${detail} Recuerda que este cuestionario es solo una herramienta de screening y no sustituye una evaluación profesional.`
      };
    }
  }
};

const TEST_SPIN = {
  id: 'spin',
  abbr: 'SPIN',
  name: 'Fobia Social',
  fullName: 'Inventario de Fobia Social',
  desc: 'Evalúa la presencia y gravedad de síntomas de ansiedad social.',
  color: '#6B8B7B',
  icon: '👥',
  items: 17,
  time: '3-5 min',
  instructions: 'Indica cuánto te han molestado los siguientes problemas durante la última semana.',
  sharedOptions: ["Nada", "Un poco", "Algo", "Mucho", "Extremadamente"],
  questions: [
    { title: "Tengo miedo a las personas con autoridad." },
    { title: "Me molesta ruborizarme delante de la gente." },
    { title: "Las fiestas y los eventos sociales me asustan." },
    { title: "Evito hablar con personas que no conozco." },
    { title: "Me asusta mucho ser criticado/a." },
    { title: "El miedo a sentir vergüenza me hace evitar hacer cosas o hablar con la gente." },
    { title: "Sudar delante de la gente me causa angustia." },
    { title: "Evito ir a fiestas." },
    { title: "Evito actividades en las que soy el centro de atención." },
    { title: "Hablar con desconocidos me asusta." },
    { title: "Temo tener que hablar en público." },
    { title: "Haría cualquier cosa para evitar ser criticado/a." },
    { title: "Las palpitaciones del corazón me molestan cuando estoy con gente." },
    { title: "Tengo miedo de hacer cosas cuando la gente podría estar mirándome." },
    { title: "Mis mayores miedos son pasar vergüenza o hacer el ridículo." },
    { title: "Evito hablar con cualquier persona con autoridad." },
    { title: "Temblar o sacudirme delante de otros me causa angustia." }
  ],
  maxScore: 68,
  scoreAnswer(qIdx, val) {
    return val;
  },
  getResult(score) {
    let label, key, color, desc;

    if (score <= 20) {
      label = 'Ansiedad social baja';
      key = 'low';
      color = '#4CAF50';
      desc = 'Tu puntuación indica un nivel bajo de ansiedad social. Es probable que las situaciones sociales no te generen malestar significativo.';
    } else if (score <= 30) {
      label = 'Ansiedad social leve';
      key = 'mild';
      color = '#8BC34A';
      desc = 'Tu puntuación sugiere un nivel leve de ansiedad social. Podrías experimentar cierta incomodidad en algunas situaciones sociales, pero generalmente es manejable.';
    } else if (score <= 40) {
      label = 'Ansiedad social moderada';
      key = 'moderate';
      color = '#FF9800';
      desc = 'Tu puntuación indica un nivel moderado de ansiedad social. Es posible que evites algunas situaciones sociales o las enfrentes con malestar considerable. Podría beneficiarte buscar apoyo profesional.';
    } else if (score <= 50) {
      label = 'Ansiedad social grave';
      key = 'severe';
      color = '#FF5722';
      desc = 'Tu puntuación sugiere un nivel grave de ansiedad social. Las situaciones sociales probablemente te generan un malestar intenso y podrían estar afectando tu vida diaria. Se recomienda buscar ayuda profesional.';
    } else {
      label = 'Ansiedad social muy grave';
      key = 'very_severe';
      color = '#F44336';
      desc = 'Tu puntuación indica un nivel muy grave de ansiedad social. Es muy probable que las situaciones sociales te generen un sufrimiento significativo y limiten considerablemente tu funcionamiento. Se recomienda encarecidamente buscar ayuda profesional.';
    }

    return { label, key, color, desc };
  }
};

const TEST_ROSENBERG = {
  id: 'rosenberg',
  abbr: 'RSE',
  name: 'Autoestima',
  fullName: 'Escala de Autoestima de Rosenberg',
  desc: 'La medida más utilizada de autoestima global. Evalúa sentimientos de valía personal.',
  color: '#8B9B6B',
  icon: '✨',
  items: 10,
  time: '2-3 min',
  instructions: 'Indica tu grado de acuerdo con cada una de las siguientes afirmaciones.',
  sharedOptions: ["Muy en desacuerdo", "En desacuerdo", "De acuerdo", "Muy de acuerdo"],
  questions: [
    { title: "Siento que soy una persona digna de aprecio, al menos tanto como los demás." },
    { title: "Siento que tengo cualidades positivas." },
    { title: "En general, me inclino a pensar que soy un/a fracasado/a." },
    { title: "Soy capaz de hacer las cosas tan bien como la mayoría de la gente." },
    { title: "Siento que no tengo mucho de lo que estar orgulloso/a." },
    { title: "Tengo una actitud positiva hacia mí mismo/a." },
    { title: "En general, estoy satisfecho/a conmigo mismo/a." },
    { title: "Desearía poder tener más respeto por mí mismo/a." },
    { title: "A veces me siento verdaderamente inútil." },
    { title: "A veces pienso que no soy bueno/a en nada." }
  ],
  reverseItems: [2, 4, 7, 8, 9],
  maxScore: 30,
  scoreAnswer(qIdx, val) {
    if (this.reverseItems.includes(qIdx)) {
      return 3 - val;
    }
    return val;
  },
  getResult(score) {
    let label, key, color, desc;

    if (score <= 15) {
      label = 'Autoestima baja';
      key = 'low';
      color = '#F44336';
      desc = 'Tu puntuación sugiere un nivel bajo de autoestima. Podrías estar experimentando sentimientos de insuficiencia o poca valía personal. Es importante recordar que la autoestima puede trabajarse y mejorarse. Se recomienda buscar apoyo profesional.';
    } else if (score <= 25) {
      label = 'Autoestima normal';
      key = 'normal';
      color = '#4CAF50';
      desc = 'Tu puntuación indica un nivel normal y saludable de autoestima. Tienes una percepción equilibrada de tu valía personal, reconociendo tanto tus fortalezas como tus áreas de mejora.';
    } else {
      label = 'Autoestima alta';
      key = 'high';
      color = '#2196F3';
      desc = 'Tu puntuación indica un nivel alto de autoestima. Tienes una percepción muy positiva de ti mismo/a y un fuerte sentido de valía personal. Esto es generalmente beneficioso para el bienestar emocional.';
    }

    return { label, key, color, desc };
  }
};

const TEST_WHO5 = {
  id: 'who5',
  abbr: 'WHO-5',
  name: 'Bienestar General',
  fullName: 'Índice de Bienestar WHO-5',
  desc: 'Medida breve de bienestar emocional desarrollada por la OMS. Solo 5 preguntas.',
  color: '#5B8B6B',
  icon: '☀️',
  items: 5,
  time: '1 min',
  instructions: 'Indica cómo te has sentido durante las últimas dos semanas.',
  sharedOptions: ["En ningún momento", "De vez en cuando", "Menos de la mitad del tiempo", "Más de la mitad del tiempo", "La mayor parte del tiempo", "Todo el tiempo"],
  questions: [
    { title: "Me he sentido alegre y de buen ánimo." },
    { title: "Me he sentido tranquilo/a y relajado/a." },
    { title: "Me he sentido activo/a y con energía." },
    { title: "Me he despertado sintiéndome fresco/a y descansado/a." },
    { title: "Mi vida diaria ha estado llena de cosas que me interesan." }
  ],
  maxScore: 25,
  scoreAnswer(qIdx, val) {
    return val;
  },
  getResult(score) {
    const percentage = score * 4;
    let label, key, color, desc;

    if (percentage <= 28) {
      label = 'Bienestar bajo';
      key = 'low';
      color = '#F44336';
      desc = `Tu puntuación es ${score} de 25 (${percentage}%). Indica un nivel bajo de bienestar emocional. Este resultado puede sugerir la presencia de depresión u otras dificultades emocionales. Se recomienda buscar una evaluación profesional.`;
    } else if (percentage <= 50) {
      label = 'Bienestar reducido';
      key = 'reduced';
      color = '#FF9800';
      desc = `Tu puntuación es ${score} de 25 (${percentage}%). Indica un bienestar emocional reducido. Podrías estar pasando por un momento difícil o experimentando estrés significativo. Considera hablar con un profesional de salud mental.`;
    } else if (percentage <= 72) {
      label = 'Bienestar moderado';
      key = 'moderate';
      color = '#8BC34A';
      desc = `Tu puntuación es ${score} de 25 (${percentage}%). Indica un nivel moderado de bienestar emocional. En general te sientes razonablemente bien, aunque hay espacio para mejorar en algunas áreas de tu vida.`;
    } else {
      label = 'Bienestar alto';
      key = 'high';
      color = '#4CAF50';
      desc = `Tu puntuación es ${score} de 25 (${percentage}%). Indica un alto nivel de bienestar emocional. Te sientes bien la mayor parte del tiempo y disfrutas de una buena calidad de vida emocional.`;
    }

    return { label, key, color, desc };
  }
};
