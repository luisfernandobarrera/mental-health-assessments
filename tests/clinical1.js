const TEST_PHQ9 = {
  id: 'phq9',
  abbr: 'PHQ-9',
  name: 'Depresión PHQ-9',
  fullName: 'Cuestionario de Salud del Paciente-9',
  desc: 'Screening rápido de depresión usado ampliamente en atención primaria. 9 preguntas.',
  color: '#7A9B6B',
  icon: '🌱',
  items: 9,
  time: '2-3 min',
  instructions: 'Durante las últimas 2 semanas, ¿con qué frecuencia te han molestado los siguientes problemas?',
  sharedOptions: ["Nunca", "Varios días", "Más de la mitad de los días", "Casi todos los días"],
  questions: [
    { title: "Poco interés o placer en hacer cosas" },
    { title: "Sentirse desanimado/a, deprimido/a o sin esperanza" },
    { title: "Problemas para dormir o dormir demasiado" },
    { title: "Sentirse cansado/a o con poca energía" },
    { title: "Poco apetito o comer en exceso" },
    { title: "Sentirse mal consigo mismo/a" },
    { title: "Dificultad para concentrarse" },
    { title: "Moverse o hablar tan lento que otros lo notan, o lo contrario" },
    { title: "Pensamientos de hacerse daño o de que estaría mejor muerto/a" }
  ],
  maxScore: 27,
  getResult(score) {
    if (score <= 4) return { label: 'Mínima', key: 'minima', color: '#4CAF50', desc: 'No se detectan síntomas significativos de depresión. Continúa cuidando tu bienestar emocional.' };
    if (score <= 9) return { label: 'Leve', key: 'leve', color: '#8BC34A', desc: 'Se detectan síntomas leves de depresión. Considera monitorear tu estado de ánimo y adoptar hábitos saludables.' };
    if (score <= 14) return { label: 'Moderada', key: 'moderada', color: '#FF9800', desc: 'Se detectan síntomas moderados de depresión. Se recomienda consultar con un profesional de salud mental.' };
    if (score <= 19) return { label: 'Moderadamente grave', key: 'moderadamente_grave', color: '#FF5722', desc: 'Se detectan síntomas moderadamente graves de depresión. Es importante buscar ayuda profesional lo antes posible.' };
    return { label: 'Grave', key: 'grave', color: '#F44336', desc: 'Se detectan síntomas graves de depresión. Se recomienda buscar atención profesional de manera urgente.' };
  }
};

const TEST_AUDIT = {
  id: 'audit',
  abbr: 'AUDIT',
  name: 'Consumo de Alcohol',
  fullName: 'Test de Identificación de Trastornos por Consumo de Alcohol',
  desc: 'Desarrollado por la OMS para detectar consumo problemático de alcohol.',
  color: '#B8845B',
  icon: '🍷',
  items: 10,
  time: '3-4 min',
  instructions: 'Responde las siguientes preguntas sobre tu consumo de alcohol. Sé lo más honesto/a posible.',
  sharedOptions: null,
  questions: [
    {
      title: "¿Con qué frecuencia consumes bebidas alcohólicas?",
      options: ["Nunca", "Una o menos veces al mes", "2 a 4 veces al mes", "2 a 3 veces a la semana", "4 o más veces a la semana"]
    },
    {
      title: "¿Cuántas consumiciones de bebidas alcohólicas sueles realizar en un día normal?",
      options: ["1 o 2", "3 o 4", "5 o 6", "7 a 9", "10 o más"]
    },
    {
      title: "¿Con qué frecuencia tomas 6 o más bebidas alcohólicas en una sola ocasión?",
      options: ["Nunca", "Menos de una vez al mes", "Mensualmente", "Semanalmente", "A diario o casi a diario"]
    },
    {
      title: "¿Con qué frecuencia en el último año has sido incapaz de parar de beber una vez que habías empezado?",
      options: ["Nunca", "Menos de una vez al mes", "Mensualmente", "Semanalmente", "A diario o casi a diario"]
    },
    {
      title: "¿Con qué frecuencia en el último año no pudiste hacer lo que se esperaba de ti porque habías bebido?",
      options: ["Nunca", "Menos de una vez al mes", "Mensualmente", "Semanalmente", "A diario o casi a diario"]
    },
    {
      title: "¿Con qué frecuencia en el último año has necesitado beber en ayunas para recuperarte después de haber bebido mucho el día anterior?",
      options: ["Nunca", "Menos de una vez al mes", "Mensualmente", "Semanalmente", "A diario o casi a diario"]
    },
    {
      title: "¿Con qué frecuencia en el último año has tenido remordimientos o sentimientos de culpa después de haber bebido?",
      options: ["Nunca", "Menos de una vez al mes", "Mensualmente", "Semanalmente", "A diario o casi a diario"]
    },
    {
      title: "¿Con qué frecuencia en el último año no has podido recordar lo que sucedió la noche anterior porque habías estado bebiendo?",
      options: ["Nunca", "Menos de una vez al mes", "Mensualmente", "Semanalmente", "A diario o casi a diario"]
    },
    {
      title: "¿Tú o alguna otra persona habéis resultado heridos porque habías bebido?",
      options: ["No", "Sí, pero no en el último año", "Sí, en el último año"]
    },
    {
      title: "¿Algún familiar, amigo, médico o profesional de la salud ha mostrado preocupación por tu consumo de alcohol o te ha sugerido que dejes de beber?",
      options: ["No", "Sí, pero no en el último año", "Sí, en el último año"]
    }
  ],
  maxScore: 40,
  getResult(score) {
    if (score <= 7) return { label: 'Bajo riesgo', key: 'bajo_riesgo', color: '#4CAF50', desc: 'Tu consumo de alcohol se encuentra dentro de los límites de bajo riesgo. Mantén hábitos saludables.' };
    if (score <= 15) return { label: 'Riesgo moderado', key: 'riesgo_moderado', color: '#FF9800', desc: 'Tu consumo de alcohol presenta un riesgo moderado. Considera reducir tu consumo y consultar con un profesional.' };
    if (score <= 19) return { label: 'Riesgo alto', key: 'riesgo_alto', color: '#FF5722', desc: 'Tu consumo de alcohol presenta un riesgo alto. Se recomienda buscar orientación profesional para reducir el consumo.' };
    return { label: 'Posible dependencia', key: 'posible_dependencia', color: '#F44336', desc: 'Los resultados sugieren una posible dependencia al alcohol. Es importante buscar ayuda profesional especializada.' };
  }
};

const TEST_ISI = {
  id: 'isi',
  abbr: 'ISI',
  name: 'Insomnio',
  fullName: 'Índice de Gravedad del Insomnio',
  desc: 'Evalúa la naturaleza, gravedad e impacto del insomnio en las últimas dos semanas.',
  color: '#6B7B9B',
  icon: '🌙',
  items: 7,
  time: '2-3 min',
  instructions: 'Evalúa la gravedad de tus problemas de sueño durante las últimas 2 semanas.',
  sharedOptions: null,
  questions: [
    {
      title: "Dificultad para quedarse dormido/a",
      options: ["Ninguna", "Leve", "Moderada", "Grave", "Muy grave"]
    },
    {
      title: "Dificultad para mantener el sueño",
      options: ["Ninguna", "Leve", "Moderada", "Grave", "Muy grave"]
    },
    {
      title: "Despertar muy temprano por la mañana",
      options: ["Ninguna", "Leve", "Moderada", "Grave", "Muy grave"]
    },
    {
      title: "¿Qué tan satisfecho/a estás con tu patrón de sueño actual?",
      options: ["Muy satisfecho/a", "Satisfecho/a", "Moderadamente satisfecho/a", "Insatisfecho/a", "Muy insatisfecho/a"]
    },
    {
      title: "¿En qué medida notas que tu problema de sueño interfiere con tu funcionamiento diario?",
      options: ["Nada", "Un poco", "Algo", "Mucho", "Muchísimo"]
    },
    {
      title: "¿En qué medida crees que los demás notan tu problema de sueño en tu calidad de vida?",
      options: ["Nada", "Un poco", "Algo", "Mucho", "Muchísimo"]
    },
    {
      title: "¿Qué tan preocupado/a estás por tu problema de sueño actual?",
      options: ["Nada", "Un poco", "Algo", "Mucho", "Muchísimo"]
    }
  ],
  maxScore: 28,
  getResult(score) {
    if (score <= 7) return { label: 'Sin insomnio clínico', key: 'sin_insomnio', color: '#4CAF50', desc: 'No se detectan problemas clínicos de insomnio. Tu sueño parece estar dentro de los parámetros normales.' };
    if (score <= 14) return { label: 'Insomnio subclínico', key: 'subclinico', color: '#FF9800', desc: 'Se detectan algunos síntomas de insomnio que no alcanzan niveles clínicos. Considera mejorar tu higiene del sueño.' };
    if (score <= 21) return { label: 'Insomnio clínico moderado', key: 'clinico_moderado', color: '#FF5722', desc: 'Se detecta insomnio clínico de gravedad moderada. Se recomienda consultar con un profesional de la salud.' };
    return { label: 'Insomnio clínico grave', key: 'clinico_grave', color: '#F44336', desc: 'Se detecta insomnio clínico grave. Es importante buscar atención profesional para tratar los problemas de sueño.' };
  }
};

const TEST_EAT26 = {
  id: 'eat26',
  abbr: 'EAT-26',
  name: 'Actitudes Alimentarias',
  fullName: 'Test de Actitudes Alimentarias-26',
  desc: 'Detecta actitudes y comportamientos característicos de trastornos alimentarios.',
  color: '#9B7B8B',
  icon: '🍎',
  items: 26,
  time: '5-7 min',
  instructions: 'Indica con qué frecuencia presentas cada una de las siguientes actitudes o comportamientos. Responde con honestidad.',
  sharedOptions: ["Nunca", "Raramente", "A veces", "A menudo", "Muy a menudo", "Siempre"],
  questions: [
    { title: "Me aterroriza la idea de tener sobrepeso" },
    { title: "Evito comer cuando tengo hambre" },
    { title: "Me preocupo por la comida" },
    { title: "He tenido atracones de comida en los que siento que no puedo parar" },
    { title: "Corto mi comida en trozos pequeños" },
    { title: "Conozco las calorías de los alimentos que como" },
    { title: "Evito especialmente los alimentos ricos en carbohidratos" },
    { title: "Siento que los demás preferirían que comiera más" },
    { title: "Vomito después de comer" },
    { title: "Me siento muy culpable después de comer" },
    { title: "Me preocupa el deseo de estar más delgado/a" },
    { title: "Pienso en quemar calorías cuando hago ejercicio" },
    { title: "Los demás piensan que estoy demasiado delgado/a" },
    { title: "Me preocupa la idea de tener grasa en el cuerpo" },
    { title: "Tardo más que los demás en comer" },
    { title: "Evito alimentos que contengan azúcar" },
    { title: "Como alimentos dietéticos" },
    { title: "Siento que la comida controla mi vida" },
    { title: "Muestro autocontrol en relación con la comida" },
    { title: "Siento que los demás me presionan para que coma" },
    { title: "Dedico demasiado tiempo y pensamiento a la comida" },
    { title: "Me siento incómodo/a después de comer dulces" },
    { title: "Estoy haciendo dieta" },
    { title: "Me gusta sentir el estómago vacío" },
    { title: "Disfruto probando comidas nuevas y sabrosas" },
    { title: "Tengo el impulso de vomitar después de las comidas" }
  ],
  reverseItems: [24],
  maxScore: 78,
  scoreAnswer(questionIndex, answerIndex) {
    // Item 25 (index 24) is reverse scored
    if (questionIndex === 24) {
      // Nunca=3, Raramente=2, A veces=1, A menudo=0, Muy a menudo=0, Siempre=0
      if (answerIndex === 0) return 3;
      if (answerIndex === 1) return 2;
      if (answerIndex === 2) return 1;
      return 0;
    }
    // All other items: Siempre=3, Muy a menudo=2, A menudo=1, rest=0
    if (answerIndex === 5) return 3;
    if (answerIndex === 4) return 2;
    if (answerIndex === 3) return 1;
    return 0;
  },
  getResult(score) {
    if (score <= 19) return { label: 'Bajo riesgo', key: 'bajo_riesgo', color: '#4CAF50', desc: 'No se detectan actitudes alimentarias de riesgo significativo. Mantén una relación saludable con la comida.' };
    return { label: 'Riesgo significativo', key: 'riesgo_significativo', color: '#F44336', desc: 'Se detectan actitudes alimentarias que podrían indicar un trastorno alimentario. Se recomienda consultar con un profesional de la salud especializado.' };
  }
};
