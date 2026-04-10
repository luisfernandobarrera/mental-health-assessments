// ═══════════════════════════════════════════════════════════════
// C-SSRS Screener — Columbia Suicide Severity Rating Scale
// Public domain instrument — Columbia University
// ═══════════════════════════════════════════════════════════════
const TEST_CSSRS = {
  id: 'cssrs',
  abbr: 'C-SSRS',
  name: 'Riesgo Suicida',
  fullName: 'Escala de Gravedad Suicida de Columbia — Screener',
  desc: 'Herramienta de detección de riesgo suicida usada mundialmente en urgencias, atención primaria y educación. Si estás en crisis, llama al 024 (España) o 988 (EE.UU.).',
  color: '#8B3A3A',
  icon: '🆘',
  items: 6,
  time: '2-3 min',
  instructions: 'Responde con honestidad a las siguientes preguntas sobre pensamientos o comportamientos que hayas tenido. Tus respuestas son confidenciales y se almacenan solo en tu dispositivo.',
  sharedOptions: null,
  questions: [
    {
      title: "¿Has deseado estar muerto/a o poder dormirte y no despertar?",
      options: ["No", "Sí"]
    },
    {
      title: "¿Has tenido realmente pensamientos de suicidarte?",
      options: ["No", "Sí"]
    },
    {
      title: "¿Has pensado en cómo lo harías? (por ejemplo, pensaste en un método como pastillas, arma u otra forma)",
      options: ["No", "Sí"]
    },
    {
      title: "¿Has tenido estos pensamientos con alguna intención de actuar en consecuencia?",
      options: ["No", "Sí"]
    },
    {
      title: "¿Has comenzado a elaborar o has elaborado los detalles de cómo suicidarte? ¿Tienes intención de llevar a cabo ese plan?",
      options: ["No", "Sí"]
    },
    {
      title: "¿Alguna vez has hecho algo, comenzado a hacer algo o te has preparado para hacer algo para terminar con tu vida? (por ejemplo: reunir pastillas, obtener un arma, regalar posesiones, escribir una nota de despedida, tomar pastillas, cortarte, intentar colgarte, etc.)",
      options: ["No", "Sí"]
    }
  ],
  maxScore: 'triage',
  scoreAnswer(qIdx, val) {
    return val;
  },
  getResult(score, answersArr) {
    if (!answersArr) return { label: 'Sin datos', key: 'no_data', color: '#9E9E9E', desc: 'No se pudieron calcular los resultados.' };

    const q1 = answersArr[0] === 1;
    const q2 = answersArr[1] === 1;
    const q3 = answersArr[2] === 1;
    const q4 = answersArr[3] === 1;
    const q5 = answersArr[4] === 1;
    const q6 = answersArr[5] === 1;

    // Crisis resources shown for ALL positive screens
    const crisisInfo = '\n\n🆘 LÍNEAS DE CRISIS:\n• España: 024\n• EE.UU.: 988\n• México: 800-290-0024\n• Argentina: 135\n• UK: 116 123\n• Internacional: befrienders.org';

    if (q6) {
      return {
        label: 'Riesgo inminente',
        key: 'imminent',
        color: '#8B0000',
        desc: 'Tus respuestas indican un riesgo muy alto. Es fundamental que busques ayuda profesional AHORA. Acude a urgencias o llama a una línea de crisis inmediatamente. No estás solo/a.' + crisisInfo
      };
    }
    if (q5 || q4) {
      return {
        label: 'Riesgo alto',
        key: 'high',
        color: '#C62828',
        desc: 'Tus respuestas indican un riesgo alto de conducta suicida. Necesitas una evaluación profesional urgente. Por favor, contacta con un profesional de salud mental o llama a una línea de crisis ahora.' + crisisInfo
      };
    }
    if (q3 || q2) {
      return {
        label: 'Riesgo moderado',
        key: 'moderate',
        color: '#E65100',
        desc: 'Tus respuestas indican pensamientos suicidas. Es muy importante que hables con un profesional de salud mental. Un plan de seguridad puede ayudarte. No dudes en buscar ayuda.' + crisisInfo
      };
    }
    if (q1) {
      return {
        label: 'Riesgo bajo',
        key: 'low',
        color: '#EF6C00',
        desc: 'Has expresado deseos pasivos de muerte. Aunque no indicas planes activos, es recomendable hablar con un profesional y cuidar tu bienestar emocional. Hay ayuda disponible.' + crisisInfo
      };
    }
    return {
      label: 'Sin riesgo identificado',
      key: 'none',
      color: '#4CAF50',
      desc: 'No se identificaron indicadores de riesgo suicida en este momento. Si en algún momento tienes estos pensamientos, no dudes en buscar ayuda profesional.'
    };
  }
};

// ═══════════════════════════════════════════════════════════════
// CAGE Questionnaire — Alcohol Use Screening
// ═══════════════════════════════════════════════════════════════
const TEST_CAGE = {
  id: 'cage',
  abbr: 'CAGE',
  name: 'Alcohol (Breve)',
  fullName: 'Cuestionario CAGE de Consumo de Alcohol',
  desc: 'Screening ultrabreve de 4 preguntas para detectar problemas con el alcohol. Complementa al AUDIT.',
  color: '#8B6B3A',
  icon: '🍺',
  items: 4,
  time: '1 min',
  instructions: 'Responde con honestidad a las siguientes preguntas sobre tu relación con el alcohol.',
  sharedOptions: ["No", "Sí"],
  questions: [
    { title: "¿Alguna vez has sentido que deberías reducir tu consumo de alcohol?" },
    { title: "¿Te ha molestado que la gente te critique por tu forma de beber?" },
    { title: "¿Alguna vez te has sentido mal o culpable por tu consumo de alcohol?" },
    { title: "¿Alguna vez has tomado una copa a primera hora de la mañana para calmar los nervios o quitarte la resaca?" }
  ],
  maxScore: 4,
  getResult(score) {
    if (score === 0) return { label: 'Sin indicadores', key: 'none', color: '#4CAF50', desc: 'No se detectan indicadores de problemas con el alcohol.' };
    if (score === 1) return { label: 'Posible riesgo', key: 'low', color: '#FF9800', desc: 'Una respuesta positiva justifica una exploración más detallada. Considera realizar el test AUDIT para una evaluación más completa.' };
    if (score <= 3) return { label: 'Probable problema', key: 'moderate', color: '#FF5722', desc: 'Tu puntuación sugiere alta probabilidad de un trastorno por consumo de alcohol. Se recomienda consultar con un profesional de salud.' };
    return { label: 'Alta probabilidad', key: 'high', color: '#F44336', desc: 'Tu puntuación es prácticamente diagnóstica de dependencia al alcohol. Es muy importante buscar ayuda profesional especializada.' };
  }
};

// ═══════════════════════════════════════════════════════════════
// PHQ-A — Patient Health Questionnaire for Adolescents
// ═══════════════════════════════════════════════════════════════
const TEST_PHQA = {
  id: 'phqa',
  abbr: 'PHQ-A',
  name: 'Depresión Adolescente',
  fullName: 'Cuestionario de Salud del Paciente — Adolescentes',
  desc: 'Versión del PHQ-9 validada para adolescentes (11-17 años). Evalúa depresión en las últimas dos semanas.',
  color: '#7A6B9B',
  icon: '🧒',
  items: 9,
  time: '2-3 min',
  instructions: 'Durante las últimas 2 semanas, ¿con qué frecuencia te han molestado los siguientes problemas? Responde pensando en cómo te has sentido en el colegio, con amigos y en casa.',
  sharedOptions: ["Nunca", "Varios días", "Más de la mitad de los días", "Casi todos los días"],
  questions: [
    { title: "Poco interés o placer en hacer cosas" },
    { title: "Sentirte desanimado/a, deprimido/a o sin esperanza" },
    { title: "Problemas para dormir o dormir demasiado" },
    { title: "Sentirte cansado/a o con poca energía" },
    { title: "Poco apetito o comer en exceso" },
    { title: "Sentirte mal contigo mismo/a, o sentir que eres un/a fracasado/a o que has decepcionado a tu familia" },
    { title: "Dificultad para concentrarte en cosas como las tareas del colegio, leer o ver la televisión" },
    { title: "¿Te mueves o hablas tan despacio que otras personas lo notan? O al contrario, ¿estás tan inquieto/a que te mueves mucho más de lo normal?" },
    { title: "Pensamientos de que estarías mejor muerto/a o de hacerte daño de alguna forma" }
  ],
  maxScore: 27,
  getResult(score) {
    if (score <= 4) return { label: 'Mínima', key: 'minima', color: '#4CAF50', desc: 'No se detectan síntomas significativos de depresión. Sigue cuidando tu bienestar emocional.' };
    if (score <= 9) return { label: 'Leve', key: 'leve', color: '#8BC34A', desc: 'Se detectan síntomas leves. Habla con un adulto de confianza si algo te preocupa.' };
    if (score <= 14) return { label: 'Moderada', key: 'moderada', color: '#FF9800', desc: 'Se detectan síntomas moderados de depresión. Es recomendable hablar con un profesional de salud mental.' };
    if (score <= 19) return { label: 'Moderadamente grave', key: 'moderadamente_grave', color: '#FF5722', desc: 'Se detectan síntomas importantes de depresión. Es importante buscar ayuda profesional pronto.' };
    return { label: 'Grave', key: 'grave', color: '#F44336', desc: 'Se detectan síntomas graves de depresión. Busca ayuda profesional de manera urgente. Habla con un adulto de confianza ahora.' };
  }
};
